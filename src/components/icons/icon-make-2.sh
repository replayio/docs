#!/bin/bash

# Array of component names
components=(
  "SettingUpATeam"
  "OktaIntegration"
  "EnterpriseSecurityControls"
  "ManagingReplays"
  "Billing"
)

# Loop through the component names and create a .tsx file for each
for name in "${components[@]}"; do
  # Create the .tsx file
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

