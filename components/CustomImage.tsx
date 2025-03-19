'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  unoptimized?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  unoptimized = true,
  objectFit = 'cover',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  // Handle image path prefix for GitHub Pages
  const imageSrc = process.env.NODE_ENV === 'production' && !src.startsWith('http') && !src.startsWith('data:')
    ? `/zaheerbijapure${src.startsWith('/') ? src : `/${src}`}`
    : src;

  return (
    <div className={`relative ${className}`} style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : fill ? '100%' : 'auto' }}>
      {isError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
          Failed to load image
        </div>
      ) : (
        <Image
          src={imageSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${objectFit ? `object-${objectFit}` : ''}`}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          priority={priority}
          fill={fill}
          sizes={sizes}
          unoptimized={unoptimized}
        />
      )}
      {isLoading && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-accent1 rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default CustomImage; 