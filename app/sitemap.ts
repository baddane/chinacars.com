import type { MetadataRoute } from 'next';
import { SITE, BRANDS } from '@/src/lib/constants';
import { articles } from '@/src/data/articles';
import { VALID_DUELS } from '@/src/data/duels';

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
  lastModified?: Date;
}> = [
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/actualites', changeFrequency: 'daily', priority: 0.9 },
  { path: '/marques', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/comparatifs', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/comparateur', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/electrique', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/maroc', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/a-propos', changeFrequency: 'monthly', priority: 0.3, lastModified: new Date('2025-05-01') },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.3, lastModified: new Date('2025-05-01') },
  { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.1, lastModified: new Date('2025-05-01') },
  { path: '/confidentialite', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/credits-images', changeFrequency: 'monthly', priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url.replace(/\/$/, '');

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: route.lastModified ?? now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const brandEntries: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${base}/marques/${brand.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/actualites/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const duelEntries: MetadataRoute.Sitemap = VALID_DUELS.map((duel) => ({
    url: `${base}/comparateur/${duel.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...brandEntries, ...articleEntries, ...duelEntries];
}
