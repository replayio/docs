import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { findFilesWithExtension } from './fileFinder.mjs';
import { findLinksInMarkdown } from './linkExtractor.mjs';
import { checkLink } from './linkChecker.mjs';
import ora from 'ora';
import ProgressBar from 'progress';

let brokenLinks = 0;

async function main() {
  // Parse command line arguments
  const argv = yargs(hideBin(process.argv))
    .option('baseUrl', {
      type: 'string',
      description: 'The base URL of the site',
      default: 'http://localhost:3000'
    })
    .option('whitelist', {
      type: 'string',
      description: 'Comma-separated list of domains to whitelist',
      default: '',
    })
    .option('internalOnly', {
      type: 'boolean',
      description: 'Option to check internal links only',
      default: true,
    })
    .argv;

  const whitelist = ["youtube.com", "youtu.be", "loom.com", "medium.com", "github.com", "twitter.com", "mailto:support@replay.io", "ubuntu.pkgs.org"].filter(Boolean);
  const baseUrl = argv.baseUrl.endsWith('/') ? argv.baseUrl : `${argv.baseUrl}/`; // Ensure trailing slash
  const internalOnly = argv.internalOnly;

  // Start a spinner
  const spinner = ora('Looking for .mdx files...\n').start();

  // Find all .mdx files
  const directoryPath = './pages'; // specify the relative path to the 'pages' directory
  const files = findFilesWithExtension(directoryPath, '.mdx');

  spinner.succeed(`Found ${files.length} files`);

  // Extract all links from the .mdx files
  let links = [];
  spinner.start('Extracting links from files...\n');
  files.forEach(file => {
    const fileLinks = findLinksInMarkdown(file);
    links = links.concat(fileLinks);
  });
  spinner.succeed(`Extracted ${links.length} links\n`);

  // Initialize a new progress bar
  const progressBar = new ProgressBar('checking links...\n :current/:total\n\n', { total: links.length });

  // Check each link
  for (const link of links) {
    const absoluteUrl = link.url.startsWith('/') ? `${baseUrl}${link.url.slice(1)}` : link.url;
    const result = await checkLink(absoluteUrl, link.filePath, whitelist, baseUrl, internalOnly);

    progressBar.tick(); // Increment the progress bar

    if (result?.isBroken) {
      brokenLinks++;
      // Move to the next line before logging the message about the broken link
      process.stdout.write('\n');
      console.log(`Broken link found: ${link.text} (${link.url}) - Status code: ${result.statusCode}`);
    }
  }
}

main().then(() => {
  console.log(`Found ${brokenLinks} broken links`);
}).catch(error => {
  console.error('Error checking links:', error);
  process.exit(1);
});
