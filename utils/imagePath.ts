/**
 * Utility function that ensures image paths work correctly in both development and production
 */
export function getImagePath(path: string): string {
  // Don't modify absolute URLs or data URLs
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Add repository name prefix in production environment only
  const basePath = '/zaheerbijapure';
  
  // In production (GitHub Pages), we need to add the repository name prefix
  if (process.env.NODE_ENV === 'production') {
    return normalizedPath.startsWith(basePath) 
      ? normalizedPath 
      : `${basePath}${normalizedPath}`;
  }
  
  // In development, just return the normalized path
  return normalizedPath;
} 