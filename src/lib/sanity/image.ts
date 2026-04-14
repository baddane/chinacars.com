import { urlFor } from './client';

export interface SanityImageSource {
  asset?: { url?: string; _ref?: string };
  alt?: string;
}

/**
 * Builds an optimized Sanity image URL. Returns an empty string if source is
 * invalid so callers can fall back gracefully.
 */
export function buildImageUrl(
  source: SanityImageSource | undefined,
  options: { width?: number; height?: number; quality?: number } = {},
): string {
  if (!source?.asset) return '';
  const { width = 1200, height, quality = 80 } = options;
  let builder = urlFor(source).auto('format').quality(quality).width(width);
  if (height) builder = builder.height(height);
  return builder.url();
}

/**
 * Returns an 800w/1200w/1600w srcset string for responsive <img>.
 */
export function buildSrcSet(source: SanityImageSource | undefined): string {
  if (!source?.asset) return '';
  return [800, 1200, 1600]
    .map((w) => `${buildImageUrl(source, { width: w })} ${w}w`)
    .join(', ');
}
