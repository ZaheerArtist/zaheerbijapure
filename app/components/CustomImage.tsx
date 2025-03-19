'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  onLoad?: () => void;
}

export default function CustomImage({ onLoad, className = '', ...props }: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative" style={{ width: '100%', height: '100%' }}>
      <Image
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        {...props}
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-accent1 rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}
    </div>
  );
} 