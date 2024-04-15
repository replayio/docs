#!/bin/bash

# Array of component names
components=(
  "CypressIo"
  "RecordYourFirstReplay"
  "DebuggingTests"
  "ReplayChrome"
  "ReplayFirefox"
  "ReplayNode"
  "Commands"
  "UploadingSourceMaps"
  "ReplayAPIs"
  "GraphQLAPI"
  "ReplayProtocol"
  "ReplayDriver"
  "NextJS"
  "GitHubEmbeds"
  "LoomEmbeds"
  "Playwright"
  "Cypress"
  "ChromeRecorder"
  "Loom"
  "BrowserDevTools"
)

# Create .tsx files with a simple SVG circle
for name in "${components[@]}"; do
  cat > "${name}.tsx" <<EOF
export function ${name}Icon() {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11.5" cy="10" r="8" stroke="black" stroke-width="2" fill="yellow" />
    </svg>
  );
}

export default ${name}Icon;
EOF
done

echo "Icon components created."

