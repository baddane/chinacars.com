import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-14';

export const isSanityConfigured = Boolean(projectId);

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  useCdn: true,
  apiVersion,
  perspective: 'published',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source as never);
}

/**
 * Typed wrapper around client.fetch that returns null when Sanity is not
 * configured so pages can fall back to static seeds without crashing.
 *
 * Pass `tags` to opt into on-demand revalidation via /api/revalidate.
 * Default revalidation is 1 hour as a safety net.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: { next?: { revalidate?: number | false; tags?: string[] } } = {},
): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 3600, ...options.next },
    });
  } catch (error) {
    console.error('[sanity] fetch error:', error);
    return null;
  }
}

/** Pre-bound helpers with canonical cache tags for on-demand revalidation. */
export const fetchArticles = <T>(query: string, params?: Record<string, unknown>) =>
  sanityFetch<T>(query, params, { next: { tags: ['articles'] } });

export const fetchBrands = <T>(query: string, params?: Record<string, unknown>) =>
  sanityFetch<T>(query, params, { next: { tags: ['brands'] } });

export const fetchModels = <T>(query: string, params?: Record<string, unknown>) =>
  sanityFetch<T>(query, params, { next: { tags: ['models'] } });
