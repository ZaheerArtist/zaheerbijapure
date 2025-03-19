'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageDebugProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageDebug({ src, alt, width = 200, height = 200, className }: ImageDebugProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [error, setError] = useState(false);
  
  // Calculate various path options
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/zaheerbijapure' : '';
  
  const originalPath = src;
  const withBasePath = `${basePath}${src.startsWith('/') ? src : `/${src}`}`;
  const withoutLeadingSlash = src.startsWith('/') ? src.substring(1) : src;
  const withBasePathNoLeadingSlash = `${basePath}/${withoutLeadingSlash}`;
  
  return (
    <div className="relative" onClick={() => setShowInfo(!showInfo)}>
      {error ? (
        <div 
          className={`flex items-center justify-center bg-red-100 text-red-800 ${className || ''}`} 
          style={{ width: width, height: height }}
        >
          <div className="text-center p-2">
            <p className="font-bold">Image Error</p>
            <p className="text-xs">{src}</p>
          </div>
        </div>
      ) : (
        <>
          <Image 
            src={withBasePath}
            alt={alt}
            width={width}
            height={height}
            className={className}
            unoptimized={true}
            onError={() => setError(true)}
          />
          
          {showInfo && (
            <div className="absolute top-0 left-0 bg-black bg-opacity-80 text-white p-3 text-xs z-10 rounded">
              <p><strong>Original:</strong> {originalPath}</p>
              <p><strong>With BasePath:</strong> {withBasePath}</p>
              <p><strong>Without Leading Slash:</strong> {withoutLeadingSlash}</p>
              <p><strong>With BasePath, No Leading Slash:</strong> {withBasePathNoLeadingSlash}</p>
              <p><strong>isProduction:</strong> {isProduction ? 'true' : 'false'}</p>
              <button 
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(JSON.stringify({
                    originalPath,
                    withBasePath,
                    withoutLeadingSlash,
                    withBasePathNoLeadingSlash,
                    isProduction
                  }, null, 2));
                  alert('Debug info copied to clipboard');
                }}
              >
                Copy Debug Info
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
} 