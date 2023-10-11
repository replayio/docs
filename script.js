const fs = require('fs');
const path = require('path');

// Function to convert a string to snake case
function toSnakeCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/ /g, '-');
}

// Function to check if a string is a long ID
function isLongId(str) {
  // Adjust the regex if the ID format is different
  return /^[0-9a-f]{32}$/i.test(str);
}

// Function to process a file
function processFile(filePath) {
  const fileName = path.basename(filePath, '.md');
  const dirPath = path.dirname(filePath);
  const nameParts = fileName.split(' ');

  // Remove long IDs from the name parts and convert to snake case
  const filteredParts = nameParts.filter(part => !isLongId(part));
  const newName = toSnakeCase(filteredParts.join(' ')) + '.md';
  const newPath = path.join(dirPath, newName);

  // Rename the file
  try {
    fs.renameSync(filePath, newPath);
    console.log(`File renamed from "${filePath}" to "${newPath}"`);
  } catch (error) {
    console.error(`Failed to rename file: "${filePath}"`, error);
  }
}

// Recursive function to process a directory
function processDirectory(dir) {
  let elements = [];
  try {
    elements = fs.readdirSync(dir, { withFileTypes: true });
  } catch (error) {
    console.error(`Failed to read directory: ${dir}`, error);
    return;
  }

  // Process the current directory name
  const parentDir = path.dirname(dir);
  const dirName = path.basename(dir);
  const newDirName = toSnakeCase(dirName.split(' ').filter(part => !isLongId(part)).join(' '));
  const newDirPath = path.join(parentDir, newDirName);

  if (newDirName !== dirName) {
    try {
      fs.renameSync(dir, newDirPath);
      console.log(`Directory renamed from "${dir}" to "${newDirPath}"`);
      dir = newDirPath; // Update the directory path to the new name for further processing
    } catch (error) {
      console.error(`Failed to rename directory: "${dir}"`, error);
      // If renaming failed, continue using the old directory path
    }
  }

  // Process the contents of the directory
  for (const element of elements) {
    const fullPath = path.join(dir, element.name);

    if (element.isDirectory()) {
      // If it's a directory, process its contents
      processDirectory(fullPath);
    } else if (element.isFile() && fullPath.endsWith('.md')) {
      // If it's a file with a '.md' extension, process the file
      processFile(fullPath);
    }
  }
}

// Start the processing with the root directory
// Replace './root-directory' with the path to your actual root directory
processDirectory('./pages/learn-more/resources');
