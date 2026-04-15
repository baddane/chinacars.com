/**
 * Configuration globale du site et constantes réutilisables.
 */

export const SITE = {
  name: 'VehiculesChinois.com',
  shortName: 'VehiculesChinois',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vehiculeschinois.com',
  locale: 'fr_MA',
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'ar', 'en'] as const,
  description:
    "Actualités, essais, comparatifs et guides d'achat sur les voitures chinoises (BYD, MG, Chery, Geely, GWM, Zeekr) au Maroc.",
  twitterHandle: '@vehiculeschinois',
  defaultOgImage: '/images/og-default.jpg',
} as const;

export type SiteLanguage = (typeof SITE.supportedLanguages)[number];

/**
 * Marques chinoises éditorialement prioritaires.
 * Utilisé pour le méga-menu, le footer et le sitemap.
 */
export const BRANDS = [
  { name: 'BYD', slug: 'byd', country: 'Chine' },
  { name: 'MG Motor', slug: 'mg', country: 'Chine' },
  { name: 'Chery', slug: 'chery', country: 'Chine' },
  { name: 'Geely', slug: 'geely', country: 'Chine' },
  { name: 'GWM', slug: 'gwm', country: 'Chine' },
  { name: 'Zeekr', slug: 'zeekr', country: 'Chine' },
  { name: 'NIO', slug: 'nio', country: 'Chine' },
  { name: 'XPeng', slug: 'xpeng', country: 'Chine' },
  { name: 'Leapmotor', slug: 'leapmotor', country: 'Chine' },
] as const;

export const CATEGORIES = [
  { name: 'Nouveauté', slug: 'nouveaute' },
  { name: 'Essai', slug: 'essai' },
  { name: 'Comparatif', slug: 'comparatif' },
  { name: 'Guide', slug: 'guide' },
  { name: 'Électrique', slug: 'electrique' },
  { name: 'Hybride', slug: 'hybride' },
  { name: 'Maroc', slug: 'maroc' },
] as const;

export const CAR_SEGMENTS = [
  'citadine',
  'berline',
  'SUV',
  'pickup',
  'utilitaire',
] as const;

export const ENGINE_TYPES = [
  'thermique',
  'hybride',
  'hybride-rechargeable',
  'electrique',
] as const;

export const AVAILABILITY = [
  'disponible-maroc',
  'bientot-maroc',
  'import-uniquement',
] as const;
