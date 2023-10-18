import fs from 'fs';
import { unified } from 'unified';
import markdown from 'remark-parse';
import html from 'rehype-parse';
import { visit } from 'unist-util-visit';


/**
 * Find all links within a Markdown file.
 * 
 * @param {string} filePath - Path to the Markdown file.
 * @returns {{url: string, text: string}[]} - Array of link objects with URL and link text.
 */
function findLinksInMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const markdownAst = unified().use(markdown).parse(content);
  const htmlAst = unified().use(html).parse(content);

  const links = [];

  // Extract markdown links
  visit(markdownAst, 'link', (node) => {
    links.push({ url: node.url, text: node.children[0]?.value || node.url, filePath });
  });

  // Extract HTML links in case of JSX components
  visit(htmlAst, 'element', (node) => {
    if (node.tagName === 'a' && node.properties?.href) {
      links.push({ url: node.properties.href, text: node.children[0]?.value || node.properties.href, filePath });
    }
  });

  return links;
}

export { findLinksInMarkdown };