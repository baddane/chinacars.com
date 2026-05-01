import type { MetadataRoute } from 'next';
import { SITE, BRANDS } from '@/src/lib/constants';
import { articles } from '@/src/data/articles';

// Real last-modified dates for static routes — update when content changes
const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
  lastModified: Date;
}> = [
  { path: '/', changeFrequency: 'daily', priority: 1.0, lastModified: new Date('2026-04-12') },
  { path: '/actualites', changeFrequency: 'daily', priority: 0.9, lastModified: new Date('2026-04-12') },
  { path: '/marques', changeFrequency: 'weekly', priority: 0.9, lastModified: new Date('2026-04-01') },
  { path: '/electrique', changeFrequency: 'weekly', priority: 0.8, lastModified: new Date('2026-04-01') },
  { path: '/maroc', changeFrequency: 'weekly', priority: 0.8, lastModified: new Date('2026-04-01') },
  { path: '/comparatifs', changeFrequency: 'weekly', priority: 0.7, lastModified: new Date('2026-04-01') },
  { path: '/guides', changeFrequency: 'weekly', priority: 0.7, lastModified: new Date('2026-04-01') },
  { path: '/a-propos', changeFrequency: 'monthly', priority: 0.3, lastModified: new Date('2026-01-01') },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.3, lastModified: new Date('2026-01-01') },
  { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.1, lastModified: new Date('2026-01-01') },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '');

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const brandEntries: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${base}/marques/${brand.slug}`,
    lastModified: new Date('2026-04-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/actualites/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    // Featured articles get higher priority for crawl budget allocation
    priority: article.featured ? 0.8 : 0.6,
  }));

  return [...staticEntries, ...brandEntries, ...articleEntries];
}
