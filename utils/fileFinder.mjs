
import fs from 'fs';
import path from 'path';

/**
 * Recursively find all files with a specific extension within a directory.
 * 
 * @param {string} dir - Directory to search within.
 * @param {string} extension - File extension to search for.
 * @returns {string[]} - Array of file paths.
 */
function findFilesWithExtension(dir, extension) {
  let results = [];

  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(findFilesWithExtension(filePath, extension));
    } else if (path.extname(file) === extension) {
      results.push(filePath);
    }
  });

  return results;
}

export { findFilesWithExtension };
