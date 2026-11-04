#!/bin/zsh
# One-time install of the free local tools the banner agent uses (macOS, Apple Silicon).
# Usage: zsh setup.sh            → background removal (rembg) + upscaling (Real-ESRGAN)
#        zsh setup.sh --flux     → also local image generation (Z-Image Turbo 4-bit, ~6GB download)
set -e
DIR="${0:A:h}"; T="$DIR/tools"; mkdir -p "$T"
echo "1/3 rembg (background removal)"
python3 -m venv "$DIR/.venv" && "$DIR/.venv/bin/pip" install -q --upgrade pip && "$DIR/.venv/bin/pip" install -q "rembg[cpu]"
mkdir -p ~/.u2net && [ -f ~/.u2net/isnet-general-use.onnx ] || curl -L -C - --retry 5 -o ~/.u2net/isnet-general-use.onnx "https://github.com/danielgatis/rembg/releases/download/v0.0.0/isnet-general-use.onnx"
echo "2/3 Real-ESRGAN (upscaling)"
if [ ! -x "$T/realesrgan/realesrgan-ncnn-vulkan" ]; then
  curl -sSL -o "$T/realesrgan.zip" "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-macos.zip"
  unzip -q -o "$T/realesrgan.zip" -d "$T/realesrgan" && rm -f "$T/realesrgan.zip" "$T/realesrgan/"*.mp4 "$T/realesrgan/"input*.jpg
  chmod +x "$T/realesrgan/realesrgan-ncnn-vulkan"
fi
if [ "$1" = "--flux" ]; then
  echo "3/3 Z-Image Turbo (local generation)"
  if [ ! -x "$T/uv/uv" ]; then
    mkdir -p "$T/uv" && curl -sSL -o "$T/uv.tar.gz" "https://github.com/astral-sh/uv/releases/download/0.8.22/uv-aarch64-apple-darwin.tar.gz" && tar -xzf "$T/uv.tar.gz" -C "$T/uv" --strip-components=1 && rm "$T/uv.tar.gz"
  fi
  export UV_PYTHON_INSTALL_DIR="$T/python" UV_CACHE_DIR="$T/.uv-cache"
  "$T/uv/uv" venv --python 3.12 "$T/flux-venv" -q && "$T/uv/uv" pip install --python "$T/flux-venv/bin/python" -q mflux
  echo "The model (~6GB) downloads on the first run of tools/generate-local.sh"
else
  echo "3/3 skipped (run with --flux for local image generation)"
fi
echo "Done."
