import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '@/src/lib/utils';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  /** Required for accessibility and SEO. */
  alt: string;
  /** Fallback src if the main one fails. Defaults to a neutral placeholder. */
  fallback?: string;
  /** Use eager loading for the LCP image; otherwise lazy. */
  priority?: boolean;
  aspectRatio?: `${number}/${number}`;
}

const DEFAULT_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="24" fill="%239ca3af">Image indisponible</text></svg>';

/**
 * Accessible <img> wrapper: lazy loading by default, fallback on error,
 * skeleton background while loading.
 */
export default function ImageWithFallback({
  src,
  alt,
  fallback = DEFAULT_FALLBACK,
  priority = false,
  aspectRatio,
  className,
  onError,
  onLoad,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn(
        'transition-opacity duration-500',
        loaded ? 'opacity-100' : 'opacity-0 bg-gray-100',
        className,
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      onError={(event) => {
        if (currentSrc !== fallback) {
          setCurrentSrc(fallback);
        } else {
          setLoaded(true);
        }
        onError?.(event);
      }}
      {...rest}
    />
  );
}
