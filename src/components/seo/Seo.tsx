import { Helmet } from 'react-helmet-async';
import { SITE } from '@/src/lib/constants';
import { absoluteUrl, formatTitle, truncateDescription, type PageMetadata } from '@/src/lib/seo/metadata';

interface SeoProps extends PageMetadata {
  /** If false, the title is used raw (no " | ChinaCarsMA" suffix). */
  appendSuffix?: boolean;
}

/**
 * Centralised meta-tag component: title, description, canonical, OG, Twitter.
 * Use once per page, as early as possible in the render tree.
 */
export default function Seo({
  title,
  description,
  canonical,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex,
  appendSuffix = true,
}: SeoProps) {
  const fullTitle = formatTitle(title, appendSuffix);
  const cleanDescription = truncateDescription(description);
  const url = canonical ? absoluteUrl(canonical) : SITE.url;
  const ogImage = absoluteUrl(image || SITE.defaultOgImage);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={cleanDescription} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={cleanDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {authors?.map((author) => (
        <meta key={author} property="article:author" content={author} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
