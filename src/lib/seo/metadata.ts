import { SITE } from '@/src/lib/constants';

export interface PageMetadata {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

/**
 * Construit un titre balisé site : « Titre | VehiculesChinois.com ».
 * Garantit qu'on ne dépasse pas 65 chars.
 */
export function formatTitle(title: string, withSuffix = true): string {
  const suffix = ` | ${SITE.name}`;
  if (!withSuffix) return title.slice(0, 65);
  const maxTitleLength = 65 - suffix.length;
  const clean = title.length > maxTitleLength ? `${title.slice(0, maxTitleLength - 1)}…` : title;
  return `${clean}${suffix}`;
}

export function absoluteUrl(path: string): string {
  if (!path) return SITE.url;
  if (path.startsWith('http')) return path;
  const base = SITE.url.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function truncateDescription(text: string, max = 160): string {
  if (!text) return SITE.description;
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}
