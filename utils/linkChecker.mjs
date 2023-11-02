import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

/**
 * Check if a link is broken, considering a whitelist of domains.
 * 
 * @param {string} link - The URL to check.
 * @param {string} filePath - The path of the file containing the link.
 * @param {string[]} whitelist - Domains that should not be checked.
 * @param {string} baseUrl - The base URL for relative links.
 * @param {boolean} internalOnly - Check internal & external links
 * @returns {Promise<{isBroken: boolean, statusCode: number | null}>} - Object with the check result.
 */
async function checkLink(link, filePath, whitelist, baseUrl, internalOnly) {
  
  // Skip mailto and anchor links
  if (link.startsWith('mailto:') || link.startsWith('#')) {
    return { isBroken: false, statusCode: null };
  }

  // Parse the link to check if it's internal or external
  let url;
  try {
    url = new URL(link, baseUrl); // Providing base URL to handle relative URLs
  } catch (error) {
    console.error(`Error parsing URL ${link}: ${error.message}`);
    return { isBroken: true, statusCode: null }; // Invalid URL
  }

  // Check if the link is internal by comparing the link's host and the base URL's host
  if (url.hostname === new URL(baseUrl).hostname) {
    // Construct the path to the file we expect to exist, without appending ".mdx"
    const localFilePath = path.join(process.cwd(), 'pages', url.pathname);

    // Check both with and without the '.mdx' extension
    if (fs.existsSync(url.pathname) || fs.existsSync(`${localFilePath}.mdx`) || fs.existsSync(`${localFilePath}/index.mdx`)) {
      return { isBroken: false, statusCode: null }; // File exists, link is not broken
    } else {
      console.error(`File not found for internal link: ${localFilePath}`);
      return { isBroken: true, statusCode: null }; // File doesn't exist, link is broken
    }
  } else if (whitelist.includes(url.hostname)) {
    return { isBroken: false, statusCode: null }; // Link's domain is in the whitelist, so we don't check it
  } else if (!internalOnly) {
    // For external links, proceed with the usual HTTP check
    try {
      const response = await fetch(link, { method: 'HEAD' });
      return { isBroken: !response.ok, statusCode: response.status };
    } catch (error) {
      console.error(`Error fetching ${link}: ${error.message}`);
      return { isBroken: true, statusCode: null };
    }
  }
}

export { checkLink };
