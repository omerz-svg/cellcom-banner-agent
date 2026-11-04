"""Remove the background from an image, locally and offline (rembg).
Usage: .venv/bin/python -I cutout.py <input> <output.png> [--model isnet-general-use]
Prints the output path and size. The output is always a transparent PNG, trimmed to the subject when --trim is given."""
import argparse, sys
from rembg import remove, new_session
from PIL import Image

ap = argparse.ArgumentParser()
ap.add_argument("src"); ap.add_argument("dst")
ap.add_argument("--model", default="isnet-general-use")
ap.add_argument("--trim", action="store_true", help="crop to the subject bounding box")
a = ap.parse_args()
img = Image.open(a.src).convert("RGBA")
out = remove(img, session=new_session(a.model), alpha_matting=True, alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=10)
if a.trim:
    bbox = out.getbbox()
    if bbox: out = out.crop(bbox)
out.save(a.dst, "PNG", optimize=True)
print(a.dst, out.size)
