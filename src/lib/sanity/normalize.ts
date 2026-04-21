import { buildImageUrl, type SanityImageSource } from './image';
import type { ArticleCardData } from '@/src/components/articles/ArticleCard';
import type { BrandSeed } from '@/src/data/brands';
import type { ModelSeed } from '@/src/data/models';

// ── Articles ──────────────────────────────────────────────────────

export interface SanityCategory {
  title: string;
  slug: string;
  color?: string;
}

export interface SanityAuthor {
  name: string;
  slug?: string;
}

export interface SanityArticle {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  readingTime?: number;
  mainImage?: SanityImageSource;
  category?: SanityCategory;
  author?: SanityAuthor;
  tags?: string[];
  body?: unknown[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImageSource;
    noIndex?: boolean;
    canonicalUrl?: string;
  };
}

export function toArticleCard(article: SanityArticle): ArticleCardData {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    image: buildImageUrl(article.mainImage) || '',
    category: article.category?.title ?? '',
    publishedAt: article.publishedAt,
    readingTime: article.readingTime,
    author: article.author?.name,
  };
}

// ── Brands ────────────────────────────────────────────────────────

export interface SanityBrand {
  _id: string;
  name: string;
  slug: string;
  logo?: SanityImageSource;
  country?: string;
  founded?: number;
  headquarters?: string;
  description?: string;
  website?: string;
  modelsCount?: number;
}

export function toBrandSeed(brand: SanityBrand): BrandSeed {
  return {
    slug: brand.slug,
    name: brand.name,
    description: brand.description ?? '',
    logo: buildImageUrl(brand.logo, { width: 400 }) || '',
    country: brand.country ?? '',
    founded: brand.founded ?? 0,
    headquarters: brand.headquarters ?? '',
    website: brand.website ?? '',
    modelsCount: brand.modelsCount ?? 0,
  };
}

// ── Models ────────────────────────────────────────────────────────

export interface SanityModel {
  _id: string;
  name: string;
  slug: string;
  brand: { name: string; slug: string };
  segment?: string;
  engine?: {
    type?: string;
    power?: number;
    autonomy?: number;
  };
  pricing?: {
    priceMaroc?: number;
    priceFrance?: number;
  };
  image?: SanityImageSource;
  excerpt?: string;
}

function formatEngineType(
  type?: string,
): 'electrique' | 'hybride' | 'hybride-rechargeable' | 'thermique' {
  const map: Record<string, 'electrique' | 'hybride' | 'hybride-rechargeable' | 'thermique'> = {
    electrique: 'electrique',
    hybride: 'hybride',
    'hybride-rechargeable': 'hybride-rechargeable',
    thermique: 'thermique',
  };
  return map[type ?? ''] ?? 'thermique';
}

function formatPrice(pricing?: SanityModel['pricing']): string {
  if (pricing?.priceFrance) return `À partir de ${pricing.priceFrance.toLocaleString('fr-FR')} €`;
  if (pricing?.priceMaroc) return `À partir de ${pricing.priceMaroc.toLocaleString('fr-FR')} DH`;
  return 'Prix sur demande';
}

export function toModelSeed(model: SanityModel): ModelSeed {
  return {
    slug: model.slug,
    brandSlug: model.brand.slug,
    name: model.name,
    brand: model.brand.name,
    segment: model.segment ?? '',
    type: formatEngineType(model.engine?.type),
    price: formatPrice(model.pricing),
    image: buildImageUrl(model.image, { width: 800, height: 600 }) || '',
    autonomy: model.engine?.autonomy ? `${model.engine.autonomy} km WLTP` : undefined,
    power: model.engine?.power ? `${model.engine.power} ch` : undefined,
    excerpt: model.excerpt ?? '',
  };
}
