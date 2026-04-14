'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/src/lib/utils';

interface Props extends Omit<ImageProps, 'onError'> {
  fallback?: string;
}

const DEFAULT_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="24" fill="%239ca3af">Image indisponible</text></svg>';

export default function ImageWithFallback({
  src,
  alt,
  fallback = DEFAULT_FALLBACK,
  className,
  onLoad,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      className={cn(
        'transition-opacity duration-500',
        loaded ? 'opacity-100' : 'opacity-0 bg-gray-100',
        className,
      )}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
        else setLoaded(true);
      }}
      {...rest}
    />
  );
}
