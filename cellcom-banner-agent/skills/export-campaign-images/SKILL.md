---
name: export-campaign-images
description: Export campaign frames from Figma as optimized JPEG images. Use when the user asks to export Campaigns, ads, banners, or creative frames from Figma. Home Carousel banners export at 2x (Desktop) and 4x (Mobile); every other frame uses its own Figma export scale (1x if none). Every output is at or below 200 KB.
---

# Export Campaign Images

Export Figma campaign frames as JPEG files, then optimize each file to at most 200 KB while preserving the exported pixel dimensions. The 2x/4x rule applies **only to Home Carousel banners**.

## Defaults

- Use this Figma source unless the user supplies another link: `https://www.figma.com/design/zyp67jdVgIYSgUoyJD8XzM/Campaigns?node-id=352-5964`
- **Home Carousel only** (frame name contains `Home Carousel`, `קרוסלה` or `קרוסלת`, or the frame is 1920×500 desktop / 430×480 mobile): export Desktop at `2x` and Mobile at `4x`.
- **Every other frame** (popups, lead pages, marketing banners, strips, heroes, etc.): do not apply 2x/4x. Use the scale set in the frame's own Figma export settings; if it has none, export at `1x`. Record the scale used in the manifest.
- Deliver JPEG only.
- Enforce a maximum of `200 KB` per image, interpreted as 200 × 1024 bytes.
- Preserve the pixel dimensions produced by the requested export scale.
- Save all final deliverables by default under `~/Desktop/שיווקי סלקום`, grouped in a clearly named subfolder, and include a manifest.
- Create the default destination folder when it does not exist. If the user requests an additional location, copy the deliverables there while keeping the Desktop copy as the canonical export.

## Workflow

1. Open the supplied Figma link with the available Figma integration. If direct Figma export is unavailable, use the signed-in browser only after explaining that fallback.
2. Inspect the target node and its descendants. Select campaign artwork frames, components, or instances intended as exports; ignore labels, notes, section headings, and hidden layers.
3. Classify each export target:
   - Treat a target as Desktop when its name contains `desktop`, `desk`, or a clear desktop breakpoint label.
   - Treat a target as Mobile when its name contains `mobile`, `mob`, or a clear mobile breakpoint label.
   - When names are ambiguous, use aspect ratio and nearby labels. Ask one concise question only if classification remains materially uncertain.
4. Decide the scale per target: Home Carousel Desktop → 2x, Home Carousel Mobile → 4x; any other target → its Figma export setting scale, or 1x when it has none. Export each target as JPEG at that scale. If the integration exports PNG more reliably, export losslessly first and convert with the bundled optimizer.
5. Use `scripts/optimize_jpeg.py` on every exported file. Choose the highest JPEG quality that is at or below 200 KB. Do not resize or crop.
6. Verify every output:
   - file extension is `.jpg`;
   - file size is at most 204800 bytes;
   - pixel dimensions match the source frame multiplied by the required scale;
   - no expected Desktop or Mobile target is missing.
7. Write a CSV or Markdown manifest containing source frame name, device class, scale, pixel dimensions, final bytes, and JPEG quality.
8. If an image cannot reach the limit even at minimum JPEG quality without resizing, do not silently resize it. Report the file and ask whether to permit smaller dimensions.

## In Claude Code (Figma MCP)

- Destination subfolder: follow the global naming rule `<FigmaFileName>_<topic>_<node-id>_<YYYY-MM-DD>` under `~/Desktop/שיווקי סלקום`.
- Prefer `download_assets` with `defaultFormat: "png"` and `defaultScale` set to the scale chosen in step 4; it renders above natural size.
- `get_screenshot` never renders above a node's natural size, even with a larger `maxDimension`. If `download_assets` is unavailable, get the scaled render like this:
  1. With `use_figma`, clone each target frame, `rescale(<scale from step 4>)`, park it off-canvas, and name it `TEMP export …`.
  2. `get_screenshot` each clone with `contentsOnly: true` and `maxDimension` = the scaled long edge; download the PNG from the returned URL with `curl`.
  3. Delete every `TEMP export` clone when done.
- Social sizes (e.g. 1080×1080, 1080×1350, 1080×1920) are neither Desktop nor Mobile: export at 1x unless the user says otherwise, and mark them `social` in the manifest.
- Run the optimizer with `python3 -I`, and write the manifest as CSV (UTF-8 with BOM so Hebrew opens in Excel).

## Optimizer

Run:

```bash
python3 -I <skill-dir>/scripts/optimize_jpeg.py INPUT [INPUT ...] --output-dir OUTPUT_DIR --max-kb 200
```

The script uses macOS `sips`, performs a quality search, preserves dimensions, and prints one JSON record per output. Use those records to build the manifest.

## Naming

- Sanitize Figma frame names for filenames.
- Append `-desktop.jpg` or `-mobile.jpg` when the device class is not already clear from the sanitized frame name.
- Do not include export-scale markers such as `2x` or `4x` in filenames. Record the scale in the manifest instead.
- Keep names stable across repeated exports.
- Never overwrite unrelated user files.

## Completion Report

Return the output folder, number of Desktop and Mobile files, confirmation that all are at or below 200 KB, and any skipped or ambiguous frames.
