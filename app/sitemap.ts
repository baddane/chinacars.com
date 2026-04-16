import type { MetadataRoute } from 'next';
import { SITE, BRANDS } from '@/src/lib/constants';
import { articles } from '@/src/data/articles';
import {
  voituresPages,
  utilitairesPages,
  guidesPages,
  actualitesDossiers,
} from '@/src/data/silos';

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/actualites', changeFrequency: 'daily', priority: 0.9 },
  { path: '/marques', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/voitures', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/utilitaires', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/guides', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/a-propos', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url.replace(/\/$/, '');

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const brandEntries: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${base}/marques/${brand.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const voituresEntries: MetadataRoute.Sitemap = voituresPages.map((p) => ({
    url: `${base}/voitures/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p.priority ? 0.8 : 0.6,
  }));

  const utilitairesEntries: MetadataRoute.Sitemap = utilitairesPages.map((p) => ({
    url: `${base}/utilitaires/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p.priority ? 0.8 : 0.6,
  }));

  const guidesEntries: MetadataRoute.Sitemap = guidesPages.map((p) => ({
    url: `${base}/guides/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p.priority ? 0.8 : 0.6,
  }));

  const dossiersEntries: MetadataRoute.Sitemap = actualitesDossiers.map((p) => ({
    url: `${base}/actualites/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p.priority ? 0.8 : 0.6,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/actualites/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...brandEntries,
    ...voituresEntries,
    ...utilitairesEntries,
    ...guidesEntries,
    ...dossiersEntries,
    ...articleEntries,
  ];
}
