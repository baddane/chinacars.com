/**
 * Builders Schema.org / JSON-LD.
 * Sortent des objets sérialisables à injecter via <JsonLd data={...} />.
 */

import { SITE } from '@/src/lib/constants';
import { absoluteUrl } from './metadata';

type Thing = Record<string, unknown>;

export function organizationSchema(): Thing {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl('/icons/logo.svg'),
    sameAs: [
      'https://facebook.com/chinacarsma',
      'https://instagram.com/chinacarsma',
      'https://twitter.com/chinacarsma',
      'https://youtube.com/@chinacarsma',
    ],
  };
}

export function websiteSchema(): Thing {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.defaultLanguage,
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): Thing {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  section?: string;
  tags?: string[];
}

export function newsArticleSchema(input: ArticleSchemaInput): Thing {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: input.title,
    description: input.description,
    image: [absoluteUrl(input.image)],
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: input.authorName
      ? { '@type': 'Person', name: input.authorName }
      : { '@type': 'Organization', name: SITE.name },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icons/logo.svg'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(input.url),
    },
    ...(input.section && { articleSection: input.section }),
    ...(input.tags?.length && { keywords: input.tags.join(', ') }),
  };
}

export interface CarSchemaInput {
  name: string;
  brand: string;
  url: string;
  image: string;
  description?: string;
  price?: number;
  priceCurrency?: string;
  bodyType?: string;
  fuelType?: string;
  modelDate?: string | number;
  rating?: { value: number; count: number };
}

export function carSchema(input: CarSchemaInput): Thing {
  const offer = input.price
    ? {
        '@type': 'Offer',
        priceCurrency: input.priceCurrency || 'MAD',
        price: input.price,
        availability: 'https://schema.org/InStock',
        url: absoluteUrl(input.url),
      }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: input.name,
    brand: { '@type': 'Brand', name: input.brand },
    image: absoluteUrl(input.image),
    description: input.description,
    ...(input.bodyType && { bodyType: input.bodyType }),
    ...(input.fuelType && { fuelType: input.fuelType }),
    ...(input.modelDate && { modelDate: String(input.modelDate) }),
    ...(offer && { offers: offer }),
    ...(input.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: input.rating.value,
        reviewCount: input.rating.count,
      },
    }),
  };
}

export interface BrandSchemaInput {
  name: string;
  url: string;
  description: string;
  foundingLocation?: string;
}

export function brandSchema(input: BrandSchemaInput): Thing {
  return {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: input.name,
    url: absoluteUrl(input.url),
    description: input.description,
    ...(input.foundingLocation && {
      foundingLocation: { '@type': 'Place', name: input.foundingLocation },
    }),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FaqItem[]): Thing {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
