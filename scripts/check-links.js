/**
 * Simple script to check for broken links in the exported site
 * Run with: npm run check-links
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

// Configure the repository name and base path
const REPO_NAME = 'zaheerbijapure';
const BASE_PATH = `/${REPO_NAME}`;

// File extensions to check
const HTML_EXTENSIONS = ['.html'];
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];

// Set of all found files
const allFiles = new Set();
// Set of all found links
const allLinks = new Set();
// Set of broken links
const brokenLinks = new Set();

/**
 * Get all files in a directory recursively
 */
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.reduce((a, f) => a.concat(f), []);
}

/**
 * Extract links from HTML files
 */
async function extractLinks(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Extract src attributes
    const srcRegex = /src=["']([^"']+)["']/g;
    let match;
    while ((match = srcRegex.exec(content)) !== null) {
      allLinks.add(match[1]);
    }
    
    // Extract href attributes
    const hrefRegex = /href=["']([^"']+)["']/g;
    while ((match = hrefRegex.exec(content)) !== null) {
      // Skip external links and anchors
      if (!match[1].startsWith('http') && !match[1].startsWith('#')) {
        allLinks.add(match[1]);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

/**
 * Check if a link is valid
 */
function isValidLink(link) {
  // Skip external links, anchors, and data URLs
  if (
    link.startsWith('http') || 
    link.startsWith('#') || 
    link.startsWith('data:') ||
    link.startsWith('mailto:') ||
    link.startsWith('tel:')
  ) {
    return true;
  }
  
  // Remove query parameters and hash
  const cleanLink = link.split('?')[0].split('#')[0];
  
  // Handle absolute paths with base path
  let filePath = cleanLink;
  if (cleanLink.startsWith(BASE_PATH)) {
    filePath = cleanLink.substring(BASE_PATH.length);
  }
  
  // Check if file exists in 'out' directory
  const outPath = path.join('out', filePath);
  
  // If it's a direct file reference
  if (fs.existsSync(outPath)) {
    return true;
  }
  
  // If it might be a directory (check for index.html)
  if (fs.existsSync(path.join(outPath, 'index.html'))) {
    return true;
  }
  
  return false;
}

/**
 * Main function
 */
async function main() {
  console.log('Checking links in the exported site...');
  
  // Get all files
  const files = await getFiles('out');
  
  // Add all files to the set
  files.forEach(file => {
    // Convert to relative path
    const relativePath = path.relative('out', file).replace(/\\/g, '/');
    allFiles.add('/' + relativePath);
  });
  
  // Extract links from HTML files
  const htmlFiles = files.filter(file => 
    HTML_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );
  
  for (const file of htmlFiles) {
    await extractLinks(file);
  }
  
  // Check all links
  for (const link of allLinks) {
    if (!isValidLink(link)) {
      brokenLinks.add(link);
    }
  }
  
  // Report results
  console.log(`Found ${allFiles.size} files`);
  console.log(`Found ${allLinks.size} links`);
  
  if (brokenLinks.size === 0) {
    console.log('✅ No broken links found!');
  } else {
    console.log(`❌ Found ${brokenLinks.size} broken links:`);
    brokenLinks.forEach(link => console.log(`  - ${link}`));
  }
}

main().catch(console.error); 