/**
 * Utility functions to help fix image paths at runtime
 */

// The repository name for GitHub Pages
export const REPO_NAME = 'zaheerbijapure';

// Function to check if we're running on GitHub Pages
export const isGitHubPages = () => {
  if (typeof window === 'undefined') return false;
  return window.location.hostname.includes('github.io');
};

// Function to get the correct path with repository name if needed
export const getGitHubPagesUrl = (path: string) => {
  if (isGitHubPages()) {
    // If path already includes the repo name, return as is
    if (path.includes(`/${REPO_NAME}/`)) return path;
    // Add the repo name to the path
    return `/${REPO_NAME}${path}`;
  }
  return path; // Return as is for local development
};

/**
 * Attempts to fix an image path by trying multiple variations
 * @param originalPath The original image path that failed to load
 * @param category Optional category for specialized handling (e.g., 'films', 'profile')
 * @returns An array of fallback paths to try
 */
export function generateImageFallbacks(originalPath: string, category?: string): string[] {
  const fallbacks: string[] = [];
  
  // First, add the original path to the array
  fallbacks.push(originalPath);
  
  // Parse the filename from the path
  const pathParts = originalPath.split('/');
  const filename = pathParts[pathParts.length - 1];
  const filenameWithoutExt = filename.split('.')[0];
  
  // Try different path formations
  if (category === 'films') {
    // For films category, try different directories and formats
    const folderVariations = [
      `${REPO_NAME}/thumbnail/`, 
      `${REPO_NAME}/Films/`,
      `${REPO_NAME}/images/Films/`,
      '/thumbnail/',
      '/Films/',
      '/images/Films/',
      'thumbnail/',
      'Films/',
    ];
    
    const extensionVariations = ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG'];
    
    // Try all variations of paths and extensions
    folderVariations.forEach(folder => {
      extensionVariations.forEach(ext => {
        fallbacks.push(`${folder}${filenameWithoutExt}${ext}`);
        // Also try lowercase filename
        fallbacks.push(`${folder}${filenameWithoutExt.toLowerCase()}${ext}`);
      });
    });
  } else if (category === 'profile') {
    // For profile images, try standard web paths
    fallbacks.push(`${REPO_NAME}/thumbnail/profile.jpg`);
    fallbacks.push(`${REPO_NAME}/images/profile.jpg`);
    fallbacks.push(`${REPO_NAME}/profile.jpg`);
    fallbacks.push('/thumbnail/profile.jpg');
    fallbacks.push('/images/profile.jpg');
  }
  
  // If filename has a year pattern like '-2021', try without it
  const yearPattern = /-\d{4}$/;
  if (yearPattern.test(filenameWithoutExt)) {
    const nameWithoutYear = filenameWithoutExt.replace(yearPattern, '');
    fallbacks.push(`${REPO_NAME}/thumbnail/${nameWithoutYear}.jpg`);
    fallbacks.push(`/thumbnail/${nameWithoutYear}.jpg`);
  }
  
  // Default placeholder as last resort
  fallbacks.push(`${REPO_NAME}/thumbnail/placeholder.jpg`);
  fallbacks.push(`${REPO_NAME}/images/placeholder.jpg`);
  fallbacks.push('/thumbnail/placeholder.jpg');
  
  // Remove duplicates
  return fallbacks.filter((path, index) => fallbacks.indexOf(path) === index);
}

/**
 * Handles image load errors by trying multiple fallback paths
 * @param event The error event
 * @param title Optional title for specialized handling
 */
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>, title?: string): void {
  const img = event.currentTarget;
  const currentSrc = img.src;
  
  // Try different path variations - now with GitHub Pages paths included
  const paths = [
    getGitHubPagesUrl(`/thumbnail/${title}.jpg`),
    getGitHubPagesUrl(`/images/${title}.jpg`),
    getGitHubPagesUrl(`/thumbnail/${title?.toLowerCase()}.jpg`),
    getGitHubPagesUrl(`/images/${title?.toLowerCase()}.jpg`),
    getGitHubPagesUrl('/thumbnail/placeholder.jpg'),
    getGitHubPagesUrl('/images/placeholder.jpg'),
    getGitHubPagesUrl('/placeholder.jpg')
  ];
  
  console.log(`Image error for: ${currentSrc}. Will try alternate paths:`, paths);
  
  // Find the next path to try
  const currentIndex = paths.findIndex(path => currentSrc.includes(path));
  const nextIndex = currentIndex + 1 < paths.length ? currentIndex + 1 : 0;
  
  if (nextIndex < paths.length) {
    console.log(`Trying alternative path for ${title}: ${paths[nextIndex]}`);
    img.src = paths[nextIndex];
  } else {
    console.log('All paths exhausted, using fallback styling');
    img.style.opacity = '1';
    img.style.backgroundColor = '#1e293b';
  }
} 