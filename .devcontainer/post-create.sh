#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
# Debian installs Chromium together with its required shared libraries,
# including libnspr4 and libnss3. Keep repository signature verification on.
sudo apt-get update
sudo apt-get install -y --no-install-recommends chromium fonts-liberation
chromium --version
cd "$repo_root/partmed-outubro-rosa"
npm ci --no-audit --no-fund
