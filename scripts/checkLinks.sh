#!/bin/bash

# This script checks all links in the docs and vercel.json redirects.
#
# Usage:
#   BASE_URL=https://example.com ./scripts/checkLinks.sh
#
# Requires: curl, jq

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"
PARALLEL=${PARALLEL:-20}

EXCLUDE_PAGES=(
  "./src/app/test-runners/cypress-io/panel.mdx"
  "./src/app/test-runners/cypress-io/dashboard.mdx"
  "./src/app/test-runners/_archive/jest.mdx"
)

EXCLUDE_URLS=(
  "https://webreplay.us.auth0.com/login/callback?connection="
  "/discord"
)

EXCLUDE_DOMAINS=(
  "npmjs.com"
  "medium.com"
)

TMPDIR_LINKS=$(mktemp -d)
trap 'rm -rf "$TMPDIR_LINKS"' EXIT

ALL_LINKS="$TMPDIR_LINKS/all_links.txt"
UNIQUE_URLS="$TMPDIR_LINKS/unique_urls.txt"
FAILED_URLS="$TMPDIR_LINKS/failed_urls.txt"

touch "$ALL_LINKS" "$UNIQUE_URLS" "$FAILED_URLS"

is_excluded_page() {
  local file="$1"
  for excluded in "${EXCLUDE_PAGES[@]}"; do
    [[ "$file" == "$excluded" ]] && return 0
  done
  return 1
}

is_excluded_url() {
  local url="$1"
  for excluded in "${EXCLUDE_URLS[@]}"; do
    [[ "$url" == "$excluded" ]] && return 0
  done
  return 1
}

is_excluded_domain() {
  local url="$1"
  local host
  host=$(echo "$url" | sed -E 's|^https?://([^/]+).*|\1|')
  for domain in "${EXCLUDE_DOMAINS[@]}"; do
    [[ "$host" == "$domain" || "$host" == *."$domain" ]] && return 0
  done
  return 1
}

# Step 1: Collect all links from all page.mdx files
echo "Collecting links..."

FILE_COUNT=0
while IFS= read -r file; do
  is_excluded_page "$file" && continue
  FILE_COUNT=$((FILE_COUNT + 1))

  grep -oE '\[([^]]*)\]\(([^)]+)\)' "$file" 2>/dev/null \
    | sed -E 's/\[([^]]*)\]\(([^)]+)\)/\2/' \
    | grep -vE '^(mailto|blob)' \
    | while IFS= read -r link; do
        echo "${file}	${link}"
      done >> "$ALL_LINKS" || true

done < <(find ./src/app -name "page.mdx" -type f | sort)

# Add vercel.json redirect destinations
jq -r '.redirects[].destination' vercel.json | while IFS= read -r dest; do
  [[ "$dest" =~ /:match ]] && continue
  echo "vercel.json	${dest}"
done >> "$ALL_LINKS"

echo "Found $FILE_COUNT files."

# Step 2: Build list of unique URLs to check (after exclusions)
while IFS=$'\t' read -r file link; do
  is_excluded_url "$link" && continue
  is_excluded_domain "$link" && continue

  if [[ "$link" =~ ^(https?://|//) ]]; then
    echo "$link"
  else
    echo "${BASE_URL}${link}"
  fi
done < "$ALL_LINKS" | sort -u > "$UNIQUE_URLS"

TOTAL=$(wc -l < "$UNIQUE_URLS" | tr -d ' ')
echo "Checking $TOTAL unique URLs (${PARALLEL} parallel)..."

# Step 3: Check all URLs in parallel (inline to avoid command line length issues)
export FAILED_URLS

tr '\n' '\0' < "$UNIQUE_URLS" | xargs -0 -P "$PARALLEL" -n 1 sh -c '
  status=$(curl -o /dev/null -s -w "%{http_code}" --max-time 10 -L "$1" 2>/dev/null) || true
  case "$status" in
    2[0-9][0-9]) printf "." >&2 ;;
    *) printf "x" >&2; echo "$1" >> "$FAILED_URLS" ;;
  esac
' _

echo ""

# Step 4: Map failed URLs back to source files
if [[ -s "$FAILED_URLS" ]]; then
  echo ""
  echo "The following links are broken:"
  while IFS= read -r failed_url; do
    # Find all files that reference this URL
    while IFS=$'\t' read -r file link; do
      # Reconstruct the full URL for comparison
      if [[ "$link" =~ ^(https?://|//) ]]; then
        full_url="$link"
      else
        full_url="${BASE_URL}${link}"
      fi
      if [[ "$full_url" == "$failed_url" ]]; then
        echo "  ${file}: ${link}"
      fi
    done < "$ALL_LINKS"
  done < "$FAILED_URLS"
  exit 1
else
  echo ""
  echo "All links are working"
  exit 0
fi
