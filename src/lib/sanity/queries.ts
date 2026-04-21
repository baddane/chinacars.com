/**
 * Reusable GROQ queries.
 *
 * Usage:
 *   import { client } from './client';
 *   import { latestArticlesQuery } from './queries';
 *   const articles = await client.fetch(latestArticlesQuery, { limit: 6 });
 */

export const articleProjection = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  updatedAt,
  featured,
  readingTime,
  mainImage { asset-> { url, metadata { lqip, dimensions } }, alt },
  "category": category-> { title, "slug": slug.current, color },
  "author": author-> { name, "slug": slug.current, avatar },
  "tags": tags
`;

export const latestArticlesQuery = /* groq */ `
  *[_type == "article" && defined(slug.current)]
    | order(publishedAt desc)
    [0...$limit]
    { ${articleProjection} }
`;

export const featuredArticlesQuery = /* groq */ `
  *[_type == "article" && featured == true && defined(slug.current)]
    | order(publishedAt desc)
    [0...$limit]
    { ${articleProjection} }
`;

export const articleBySlugQuery = /* groq */ `
  *[_type == "article" && slug.current == $slug][0] {
    ${articleProjection},
    body,
    seo,
    "relatedArticles": relatedArticles[]-> { ${articleProjection} },
    "relatedCars": relatedCars[]-> {
      _id, name, "slug": slug.current,
      "brand": brand-> { name, "slug": slug.current },
      gallery[0]
    }
  }
`;

/** All articles ordered by date — for paginated listing pages. */
export const allArticlesQuery = /* groq */ `
  *[_type == "article" && defined(slug.current)]
    | order(publishedAt desc)
    { ${articleProjection} }
`;

export const articleSlugsQuery = /* groq */ `
  *[_type == "article" && defined(slug.current)][].slug.current
`;

export const brandSlugsQuery = /* groq */ `
  *[_type == "brand" && defined(slug.current)][].slug.current
`;

export const brandsQuery = /* groq */ `
  *[_type == "brand" && defined(slug.current)]
    | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      logo,
      country,
      founded,
      headquarters,
      "modelsCount": count(*[_type == "carModel" && references(^._id)])
    }
`;

export const brandBySlugQuery = /* groq */ `
  *[_type == "brand" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    "models": *[_type == "carModel" && references(^._id)]
      | order(name asc) {
        _id, name, "slug": slug.current,
        segment,
        engine,
        pricing,
        "image": gallery[0]
      }
  }
`;

export const carModelBySlugQuery = /* groq */ `
  *[_type == "carModel" && slug.current == $slug
    && brand->slug.current == $brand][0] {
      ...,
      "slug": slug.current,
      "brand": brand-> { name, "slug": slug.current, logo }
    }
`;

export const comparisonsQuery = /* groq */ `
  *[_type == "comparison" && defined(slug.current)]
    | order(publishedAt desc) {
      _id, title, "slug": slug.current, excerpt, publishedAt, coverImage
    }
`;

export const guidesQuery = /* groq */ `
  *[_type == "guide" && defined(slug.current)]
    | order(publishedAt desc) {
      _id, title, "slug": slug.current, excerpt, format, coverImage, publishedAt
    }
`;

/** Minimal payload for building the sitemap. */
export const sitemapQuery = /* groq */ `
  {
    "articles": *[_type == "article" && defined(slug.current) && seo.noIndex != true]
      { "slug": slug.current, "lastmod": coalesce(updatedAt, publishedAt) },
    "brands": *[_type == "brand" && defined(slug.current)]
      { "slug": slug.current, _updatedAt },
    "models": *[_type == "carModel" && defined(slug.current)]
      { "slug": slug.current, "brand": brand->slug.current, _updatedAt },
    "comparisons": *[_type == "comparison" && defined(slug.current)]
      { "slug": slug.current, "lastmod": coalesce(publishedAt, _updatedAt) },
    "guides": *[_type == "guide" && defined(slug.current)]
      { "slug": slug.current, "lastmod": coalesce(updatedAt, publishedAt, _updatedAt) }
  }
`;
