/**
 * Script to check for image references in code and verify they exist
 * Run with: node scripts/check-images.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

// Configure paths to check
const CODE_PATHS = ['app'];
const ASSET_PATHS = ['public'];

// File extensions to check
const CODE_EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx'];
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];

// Set of all found images
const allImages = new Set();
// Map of references to images in code
const imageReferences = new Map();
// Set of missing images
const missingImages = new Set();

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
 * Extract image references from code
 */
async function extractImageRefs(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Regular expression to find image paths in code
    // This is a simplified version and may not catch all references
    const imgPathRegex = /['"`]\/?((public|thumbnail|images|logos|ai-gallery|videos)\/[^'"`]+\.(jpg|jpeg|png|gif|svg|webp))['"`]/g;
    let match;
    
    while ((match = imgPathRegex.exec(content)) !== null) {
      const imgPath = match[1];
      // Store reference with the file path
      if (!imageReferences.has(imgPath)) {
        imageReferences.set(imgPath, []);
      }
      imageReferences.get(imgPath).push(filePath);
    }
    
    // Also check for string paths with image extensions
    const fileExtRegex = /['"`]([^'"`]+\.(jpg|jpeg|png|gif|svg|webp))['"`]/g;
    while ((match = fileExtRegex.exec(content)) !== null) {
      const imgPath = match[1];
      if (!imageReferences.has(imgPath)) {
        imageReferences.set(imgPath, []);
      }
      imageReferences.get(imgPath).push(filePath);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('Checking image references in code...');
  
  // Get all code files
  let codeFiles = [];
  for (const codePath of CODE_PATHS) {
    const files = await getFiles(codePath);
    codeFiles = codeFiles.concat(
      files.filter(file => 
        CODE_EXTENSIONS.includes(path.extname(file).toLowerCase())
      )
    );
  }
  
  // Get all image files
  let imageFiles = [];
  for (const assetPath of ASSET_PATHS) {
    const files = await getFiles(assetPath);
    imageFiles = imageFiles.concat(
      files.filter(file => 
        IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
      )
    );
  }
  
  // Add all images to the set
  imageFiles.forEach(file => {
    // Convert to relative path
    const relativePath = path.relative('.', file).replace(/\\/g, '/');
    allImages.add(relativePath);
  });
  
  // Extract image references from code files
  for (const file of codeFiles) {
    await extractImageRefs(file);
  }
  
  // Check all references
  for (const [imgPath, files] of imageReferences.entries()) {
    // Skip external URLs
    if (imgPath.startsWith('http')) continue;
    
    // Check different variations of the path
    const pathsToCheck = [
      imgPath,
      'public/' + imgPath,
      imgPath.replace(/^public\//, '')
    ];
    
    let found = false;
    for (const pathToCheck of pathsToCheck) {
      if (allImages.has(pathToCheck)) {
        found = true;
        break;
      }
    }
    
    if (!found) {
      missingImages.add(imgPath);
    }
  }
  
  // Report results
  console.log(`Found ${allImages.size} image files`);
  console.log(`Found ${imageReferences.size} image references in code`);
  
  if (missingImages.size === 0) {
    console.log('✅ All referenced images exist!');
  } else {
    console.log(`❌ Found ${missingImages.size} missing images:`);
    missingImages.forEach(img => {
      const files = imageReferences.get(img);
      console.log(`  - ${img}`);
      console.log(`    Referenced in: ${files.map(f => path.relative('.', f)).join(', ')}`);
    });
  }
}

main().catch(console.error); 