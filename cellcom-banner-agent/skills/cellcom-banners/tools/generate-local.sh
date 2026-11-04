#!/bin/zsh
# Local, free image generation with Z-Image Turbo (4-bit, MLX on Apple Silicon). For sketches / directions / backup.
# Usage: generate-local.sh "<prompt>" <output.png> [width] [height] [seed]
# Sizes must be multiples of 16. Desktop banner sketch: 1536x640. Mobile: 864x1024.
set -e
T="${0:A:h}"; export HF_HOME="$T/hf" HF_HUB_DISABLE_TELEMETRY=1
"$T/flux-venv/bin/mflux-generate-z-image-turbo" --model mflux-community/z-image-turbo-mflux-q4 --base-model z-image-turbo \
  --prompt "$1" --width "${3:-1536}" --height "${4:-640}" --steps 8 --seed "${5:-$RANDOM}" --output "$2" >/dev/null 2>&1
ls -l "$2"
