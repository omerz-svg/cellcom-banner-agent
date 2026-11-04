#!/bin/zsh
# Local, free upscaling with Real-ESRGAN (offline).
# Usage: upscale.sh <input> <output.png> [scale 2|3|4]   (default 2; use 4 only for images without close-up faces)
set -e
DIR="${0:A:h}/realesrgan"; SCALE="${3:-2}"
"$DIR/realesrgan-ncnn-vulkan" -i "$1" -o "$2" -n realesrgan-x4plus -s "$SCALE" -m "$DIR/models" >/dev/null 2>&1
sips -g pixelWidth -g pixelHeight "$2" | tail -2
