import { SITE } from '@/src/lib/constants';
import { articles } from '@/src/data/articles';

export function GET() {
  const base = SITE.url.replace(/\/$/, '');
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const items = sorted
    .slice(0, 50)
    .map(
      (a) => `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${base}/actualites/${a.slug}</link>
      <guid isPermaLink="true">${base}/actualites/${a.slug}</guid>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${a.excerpt}]]></description>
      <category>${a.category}</category>
    </item>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name}</title>
    <link>${base}</link>
    <description>${SITE.description}</description>
    <language>${SITE.defaultLanguage}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
