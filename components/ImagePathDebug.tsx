'use client';

import { useEffect } from 'react';

const ImagePathDebug = () => {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Current NODE_ENV:', process.env.NODE_ENV);
      console.log('Base path would be:', '/zaheerbijapure');
      
      // Examples of image paths
      const imagePaths = [
        '/images/profile.jpg',
        '/videos/background.mp4',
        'http://example.com/image.jpg',
      ];
      
      // Test image path transformation
      imagePaths.forEach(path => {
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        console.log(`[DEV] Original path: ${path}`);
        console.log(`[DEV] Normalized path: ${normalizedPath}`);
        console.log(`[DEV] In production would be: /zaheerbijapure${normalizedPath}`);
      });
    }
  }, []);

  // This component doesn't render anything
  return null;
};

export default ImagePathDebug; 