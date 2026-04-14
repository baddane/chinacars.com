/**
 * Static sitemap generator.
 *
 * Reads content from Sanity (if configured) and writes `public/sitemap.xml`.
 * Falls back to static routes only when Sanity is not reachable, so CI builds
 * never break.
 *
 * Run: `npm run sitemap`
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { createClient } from '@sanity/client';

const SITE_URL = process.env.VITE_SITE_URL || 'https://chinacarsma.com';
const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID;
const DATASET = process.env.VITE_SANITY_DATASET || 'production';

interface UrlEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'daily' | 'weekly' | 'monthly';
  priority?: number;
}

const STATIC_ROUTES: UrlEntry[] = [
  { loc: '/', changefreq: 'daily', priority: 1.0 },
  { loc: '/actualites', changefreq: 'daily', priority: 0.9 },
  { loc: '/marques', changefreq: 'weekly', priority: 0.8 },
  { loc: '/comparatifs', changefreq: 'weekly', priority: 0.8 },
  { loc: '/guides', changefreq: 'weekly', priority: 0.7 },
  { loc: '/electrique', changefreq: 'weekly', priority: 0.7 },
  { loc: '/maroc', changefreq: 'weekly', priority: 0.7 },
  { loc: '/a-propos', changefreq: 'monthly', priority: 0.4 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.4 },
  { loc: '/mentions-legales', changefreq: 'monthly', priority: 0.2 },
];

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return char;
    }
  });
}

function toUrlTag(entry: UrlEntry): string {
  const loc = escapeXml(`${SITE_URL}${entry.loc}`);
  const parts = [`  <url>`, `    <loc>${loc}</loc>`];
  if (entry.lastmod) parts.push(`    <lastmod>${entry.lastmod}</lastmod>`);
  if (entry.changefreq) parts.push(`    <changefreq>${entry.changefreq}</changefreq>`);
  if (entry.priority != null) parts.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
  parts.push(`  </url>`);
  return parts.join('\n');
}

async function fetchFromSanity(): Promise<UrlEntry[]> {
  if (!PROJECT_ID) {
    console.warn('[sitemap] VITE_SANITY_PROJECT_ID not set — skipping CMS fetch.');
    return [];
  }
  const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    useCdn: true,
    apiVersion: '2024-03-14',
  });

  const data = await client.fetch<{
    articles: Array<{ slug: string; lastmod?: string }>;
    brands: Array<{ slug: string; _updatedAt?: string }>;
    models: Array<{ slug: string; brand: string; _updatedAt?: string }>;
    comparisons: Array<{ slug: string; lastmod?: string }>;
    guides: Array<{ slug: string; lastmod?: string }>;
  }>(`{
    "articles": *[_type == "article" && defined(slug.current) && seo.noIndex != true]
      { "slug": slug.current, "lastmod": coalesce(updatedAt, publishedAt) },
    "brands": *[_type == "brand" && defined(slug.current)]
      { "slug": slug.current, _updatedAt },
    "models": *[_type == "carModel" && defined(slug.current) && defined(brand->slug.current)]
      { "slug": slug.current, "brand": brand->slug.current, _updatedAt },
    "comparisons": *[_type == "comparison" && defined(slug.current)]
      { "slug": slug.current, "lastmod": coalesce(publishedAt, _updatedAt) },
    "guides": *[_type == "guide" && defined(slug.current)]
      { "slug": slug.current, "lastmod": coalesce(updatedAt, publishedAt, _updatedAt) }
  }`);

  const entries: UrlEntry[] = [];
  for (const a of data.articles) {
    entries.push({
      loc: `/actualites/${a.slug}`,
      lastmod: a.lastmod,
      changefreq: 'weekly',
      priority: 0.8,
    });
  }
  for (const b of data.brands) {
    entries.push({
      loc: `/marques/${b.slug}`,
      lastmod: b._updatedAt,
      changefreq: 'weekly',
      priority: 0.7,
    });
  }
  for (const m of data.models) {
    entries.push({
      loc: `/marques/${m.brand}/${m.slug}`,
      lastmod: m._updatedAt,
      changefreq: 'weekly',
      priority: 0.9,
    });
  }
  for (const c of data.comparisons) {
    entries.push({
      loc: `/comparatifs/${c.slug}`,
      lastmod: c.lastmod,
      changefreq: 'weekly',
      priority: 0.8,
    });
  }
  for (const g of data.guides) {
    entries.push({
      loc: `/guides/${g.slug}`,
      lastmod: g.lastmod,
      changefreq: 'monthly',
      priority: 0.7,
    });
  }
  return entries;
}

async function main() {
  let dynamicEntries: UrlEntry[] = [];
  try {
    dynamicEntries = await fetchFromSanity();
  } catch (error) {
    console.warn('[sitemap] Sanity fetch failed, falling back to static routes.', error);
  }

  const allEntries = [...STATIC_ROUTES, ...dynamicEntries];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allEntries.map(toUrlTag),
    '</urlset>',
    '',
  ].join('\n');

  const outPath = resolve(process.cwd(), 'public/sitemap.xml');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, xml, 'utf8');

  console.log(`[sitemap] Wrote ${allEntries.length} URLs to ${outPath}`);
}

main().catch((error) => {
  console.error('[sitemap] Fatal:', error);
  process.exit(1);
});
