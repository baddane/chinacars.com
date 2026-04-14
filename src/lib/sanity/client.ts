import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const isSanityConfigured = Boolean(projectId);

if (!isSanityConfigured && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.warn(
    '[sanity] VITE_SANITY_PROJECT_ID is not set. Sanity queries will be skipped.',
  );
}

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  useCdn: true,
  apiVersion: '2024-03-14',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source as never);
}
