import { buildImageUrl, type SanityImageSource } from './image';
import type { ArticleCardData } from '@/src/components/articles/ArticleCard';

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
