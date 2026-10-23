#!/usr/bin/env bash
# Builds the app and (re)starts it on this server. Run it again after `git pull` to update.
set -euo pipefail
cd "$(dirname "$0")"

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example. Fill it in, then run ./deploy.sh again."
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Installing Docker..."
  curl -fsSL https://get.docker.com | sh
fi

docker compose up -d --build --remove-orphans
docker image prune -f >/dev/null

set -a; . ./.env; set +a
if [ -n "${DOMAIN:-}" ]; then
  echo "Deployed: https://$DOMAIN"
else
  echo "Deployed: http://$(curl -fsS https://api.ipify.org 2>/dev/null || hostname -I | awk '{print $1}'):${HTTP_PORT:-80}"
fi
