#!/usr/bin/env python3
"""Convert images to the highest-quality JPEG not exceeding a byte limit."""

from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


def run_sips(source: Path, destination: Path, quality: int) -> None:
    command = [
        "/usr/bin/sips",
        "--setProperty",
        "format",
        "jpeg",
        "--setProperty",
        "formatOptions",
        str(quality),
        str(source),
        "--out",
        str(destination),
    ]
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode != 0:
        message = result.stderr.strip() or result.stdout.strip() or "sips failed"
        raise RuntimeError(message)


def pixel_dimensions(path: Path) -> tuple[int, int]:
    command = [
        "/usr/bin/sips",
        "--getProperty",
        "pixelWidth",
        "--getProperty",
        "pixelHeight",
        str(path),
    ]
    result = subprocess.run(command, capture_output=True, text=True, check=True)
    values: dict[str, int] = {}
    for line in result.stdout.splitlines():
        key, separator, value = line.strip().partition(":")
        if separator and key in {"pixelWidth", "pixelHeight"}:
            values[key] = int(value.strip())
    return values["pixelWidth"], values["pixelHeight"]


def optimize(source: Path, destination: Path, max_bytes: int) -> dict[str, object]:
    source_dimensions = pixel_dimensions(source)
    best_quality: int | None = None
    best_candidate: Path | None = None

    with tempfile.TemporaryDirectory(prefix="campaign-jpeg-") as temp_dir_name:
        temp_dir = Path(temp_dir_name)
        low, high = 1, 100

        while low <= high:
            quality = (low + high) // 2
            candidate = temp_dir / f"candidate-{quality}.jpg"
            run_sips(source, candidate, quality)
            size = candidate.stat().st_size

            if size <= max_bytes:
                best_quality = quality
                best_candidate = candidate
                low = quality + 1
            else:
                high = quality - 1

        if best_candidate is None:
            minimum = temp_dir / "candidate-minimum.jpg"
            run_sips(source, minimum, 1)
            raise ValueError(
                f"{source.name} is {minimum.stat().st_size} bytes at quality 1; "
                f"it cannot reach {max_bytes} bytes without resizing"
            )

        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(best_candidate, destination)

    output_dimensions = pixel_dimensions(destination)
    if output_dimensions != source_dimensions:
        destination.unlink(missing_ok=True)
        raise ValueError(
            f"dimension mismatch for {source.name}: {source_dimensions} -> {output_dimensions}"
        )

    return {
        "source": str(source),
        "output": str(destination),
        "width": output_dimensions[0],
        "height": output_dimensions[1],
        "bytes": destination.stat().st_size,
        "quality": best_quality,
        "max_bytes": max_bytes,
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("inputs", nargs="+", type=Path)
    parser.add_argument("--output-dir", required=True, type=Path)
    parser.add_argument("--max-kb", type=int, default=200)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if args.max_kb < 1:
        print("--max-kb must be positive", file=sys.stderr)
        return 2
    if shutil.which("sips") is None:
        print("This optimizer requires macOS sips.", file=sys.stderr)
        return 2

    failed = False
    max_bytes = args.max_kb * 1024
    for source in args.inputs:
        try:
            if not source.is_file():
                raise FileNotFoundError(source)
            destination = args.output_dir / f"{source.stem}.jpg"
            record = optimize(source, destination, max_bytes)
            print(json.dumps(record, ensure_ascii=False))
        except Exception as error:
            failed = True
            print(json.dumps({"source": str(source), "error": str(error)}, ensure_ascii=False), file=sys.stderr)
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
