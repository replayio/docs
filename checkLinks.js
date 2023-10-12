const fs = require('fs');
const path = require('path');
const glob = require('glob');
let brokenLinksCount = 0

// Function to extract links from markdown content
function extractLinks(content) {
  // This regex now excludes links that start with '!'
  const linksRegex = /(?<!\!)\[.*?\]\((.*?)\)/g;
  const links = [];
  let match;
  while ((match = linksRegex.exec(content)) !== null) {
    // Exclude links that don't have a destination
    if (match[1]) {
      links.push(match[1]);
    }
  }
  return links;
}


// Function to validate if the link corresponds to an actual file
function validateLink(link, pagesDirectory) {
  // Ignore external links
  if (link.startsWith('http://') || link.startsWith('https://')) return;

  const filePath = path.join(pagesDirectory, link);
  if (!fs.existsSync(filePath)) {
    console.error(`Broken link: ${link}`);
    brokenLinksCount++
  }
}

// Main function to process markdown files
function processMarkdownFiles(directory, pagesDirectory) {
  const files = glob.sync(path.join(directory, '**/*.mdx')); // Adjust the pattern if you're using '.mdx' files

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const links = extractLinks(content);
    

    links.forEach((link) => {
      validateLink(link, pagesDirectory);
    });

    brokenLinksCount ? 
      console.log('Number of broken links: ' + brokenLinksCount) && process.exit(1) :
      console.log('All links work!') && process.exit(0)
  });
}

// Replace 'path/to/markdown' with the path to your markdown files directory
// Replace 'path/to/pages' with the path to your Next.js pages directory
processMarkdownFiles('./pages', './pages');
