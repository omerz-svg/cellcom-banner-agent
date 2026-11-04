#!/bin/zsh
# Sync the live Cellcom banner agent (~/.claude) into this repo, commit and push.
# Usage: zsh sync-to-github.sh ["commit message"]
set -euo pipefail

REPO="${0:A:h}"
LIVE_SKILL="$HOME/.claude/skills/cellcom-banners"
LIVE_AGENT="$HOME/.claude/agents/cellcom-banner-agent.md"
DEST="$REPO/cellcom-banner-agent"
MSG="${1:-Sync banner agent from ~/.claude ($(date +%F))}"

# Skill: text files only. Local environments and models (.venv, tools/python, flux-venv, ...) stay out.
rsync -a --delete \
  --include='/SKILL.md' --include='/cutout.py' --include='/setup.sh' \
  --include='/references/***' \
  --include='/tools/' --include='/tools/*.sh' \
  --exclude='*' \
  "$LIVE_SKILL/" "$DEST/skills/cellcom-banners/"
cp "$LIVE_AGENT" "$DEST/agents/cellcom-banner-agent.md"

# Keep paths portable inside the plugin.
find "$DEST" -type f \( -name '*.md' -o -name '*.sh' -o -name '*.js' -o -name '*.py' \) -print0 |
  xargs -0 sed -i '' -e 's#~/\.claude/skills/cellcom-banners#<skill-dir>#g' -e "s#$HOME/\.claude/skills/cellcom-banners#<skill-dir>#g"

cd "$REPO"
git add -A
if git diff --cached --quiet; then
  echo "No changes to sync."
  exit 0
fi
git commit -q -m "$MSG"
echo "Committed: $MSG"
if git remote get-url origin >/dev/null 2>&1; then
  git push -q origin main && echo "Pushed to $(git remote get-url origin)"
else
  echo "No GitHub remote yet; commit kept locally."
fi
