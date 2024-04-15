#!/bin/bash

# Directory where SVG files will be stored
mkdir -p svg

# Loop through all .tsx files in the current directory
for tsxfile in *.tsx; do
  # Extract SVG content and add SVG tags
  svgcontent=$(sed -n '/return (/,/)/p' "$tsxfile" | sed -e '1d;$d' | sed 's/^\s*//')
  svg="<svg xmlns='http://www.w3.org/2000/svg'>${svgcontent}</svg>"

  # Write to a new SVG file in the svg directory
  echo "$svg" > "svg/${tsxfile%.tsx}.svg"
done

echo "SVG extraction completed."

