#!/usr/bin/env bash
# One-time setup on a fresh Ubuntu/Debian Hetzner server. Run as root:
#   curl -fsSL https://raw.githubusercontent.com/daniel-bf/chess-openings/main/deploy/setup-server.sh | bash
set -euo pipefail

apt-get update
apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl rsync gnupg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor --yes -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' > /etc/apt/sources.list.d/caddy-stable.list
apt-get update
apt-get install -y caddy

# A user that can only receive the site files.
id deploy >/dev/null 2>&1 || useradd --create-home --shell /bin/bash deploy
mkdir -p /var/www/chess-openings /home/deploy/.ssh
chown -R deploy:deploy /var/www/chess-openings /home/deploy/.ssh

# The key GitHub uses to upload. Its private half goes in the DEPLOY_KEY secret.
if [ ! -f /home/deploy/.ssh/github_deploy ]; then
  sudo -u deploy ssh-keygen -t ed25519 -N '' -C github-deploy -f /home/deploy/.ssh/github_deploy
  cat /home/deploy/.ssh/github_deploy.pub >> /home/deploy/.ssh/authorized_keys
  chown deploy:deploy /home/deploy/.ssh/authorized_keys
  chmod 600 /home/deploy/.ssh/authorized_keys
fi

curl -fsSL https://raw.githubusercontent.com/daniel-bf/chess-openings/main/deploy/Caddyfile -o /etc/caddy/Caddyfile
systemctl reload caddy || systemctl restart caddy

echo
echo "Done. Add these GitHub secrets (repo Settings > Secrets and variables > Actions):"
echo "  DEPLOY_HOST = $(curl -fsS https://api.ipify.org || hostname -I | awk '{print $1}')"
echo "  DEPLOY_USER = deploy"
echo "  DEPLOY_KEY  = the whole block below"
echo
cat /home/deploy/.ssh/github_deploy
