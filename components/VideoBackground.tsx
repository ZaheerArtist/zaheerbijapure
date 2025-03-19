'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImageSrc?: string;
  opacity?: number;
  showControls?: boolean;
}

const VideoBackground = ({ 
  videoSrc, 
  fallbackImageSrc,
  opacity = 0.5,
  showControls = false
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when ready
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay was prevented:', error);
      });
    }
  }, []);

  // Handle path prefixing for GitHub Pages
  const getPath = (path: string) => {
    if (path.startsWith('http') || path.startsWith('data:')) {
      return path;
    }
    
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    return process.env.NODE_ENV === 'production'
      ? `/zaheerbijapure${normalizedPath}`
      : normalizedPath;
  };

  const processedVideoSrc = getPath(videoSrc);
  const processedFallbackImageSrc = fallbackImageSrc ? getPath(fallbackImageSrc) : undefined;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Overlay for darkening the video */}
      <div 
        className="absolute inset-0 bg-background z-10"
        style={{ opacity: 1 - opacity }}
      ></div>
      
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={showControls}
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={processedVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback image for browsers that don't support video */}
      {processedFallbackImageSrc && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${processedFallbackImageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      )}
    </div>
  );
};

export default VideoBackground; 