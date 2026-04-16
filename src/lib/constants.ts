/**
 * Configuration globale du site et constantes réutilisables.
 */

export const SITE = {
  name: 'VehiculesChinois.com',
  shortName: 'VehiculesChinois',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vehiculeschinois.com',
  locale: 'fr_FR',
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'en'] as const,
  description:
    "Actualités, essais, comparatifs et guides d'achat sur les voitures et utilitaires chinois en France : BYD, MG, Chery, Geely, GWM, Zeekr, Denza, Hongqi, Jaecoo, Omoda, Xpeng, Leapmotor, Maxus.",
  twitterHandle: '@vehiculeschinois',
  defaultOgImage: '/images/og-default.jpg',
} as const;

export type SiteLanguage = (typeof SITE.supportedLanguages)[number];

/**
 * Silos éditoriaux de premier niveau. Utilisés pour la navigation,
 * les breadcrumbs et le sitemap. L'ordre est celui du menu.
 */
export const SILOS = [
  { name: 'Marques', slug: 'marques', description: '13 marques chinoises présentes ou attendues en France.' },
  { name: 'Voitures', slug: 'voitures', description: 'Fiches modèles, occasion et comparateurs.' },
  { name: 'Utilitaires', slug: 'utilitaires', description: 'Fourgons, pick-ups et flottes pro ZFE.' },
  { name: 'Guides', slug: 'guides', description: "Droits de douane, bonus, fiabilité, LOA : tout pour acheter." },
  { name: 'Actualités', slug: 'actualites', description: 'News, salons et chiffres de ventes du marché chinois.' },
] as const;

export type SiloSlug = (typeof SILOS)[number]['slug'];

/**
 * Marques chinoises suivies éditorialement (13 marques).
 * `priority: true` = marque à créer en priorité absolue (émergentes).
 */
export const BRANDS = [
  { name: 'BYD', slug: 'byd', country: 'Chine', priority: false },
  { name: 'MG Motor', slug: 'mg', country: 'Chine', priority: false },
  { name: 'Chery', slug: 'chery', country: 'Chine', priority: false },
  { name: 'Geely', slug: 'geely', country: 'Chine', priority: false },
  { name: 'GWM', slug: 'gwm', country: 'Chine', priority: false },
  { name: 'Zeekr', slug: 'zeekr', country: 'Chine', priority: false },
  { name: 'NIO', slug: 'nio', country: 'Chine', priority: false },
  { name: 'Xpeng', slug: 'xpeng', country: 'Chine', priority: false },
  { name: 'Leapmotor', slug: 'leapmotor', country: 'Chine', priority: false },
  { name: 'Denza', slug: 'denza', country: 'Chine', priority: true },
  { name: 'Hongqi', slug: 'hongqi', country: 'Chine', priority: false },
  { name: 'Jaecoo', slug: 'jaecoo', country: 'Chine', priority: false },
  { name: 'Omoda', slug: 'omoda', country: 'Chine', priority: false },
] as const;

export type BrandSlug = (typeof BRANDS)[number]['slug'];

export const CATEGORIES = [
  { name: 'Nouveauté', slug: 'nouveaute' },
  { name: 'Essai', slug: 'essai' },
  { name: 'Comparatif', slug: 'comparatif' },
  { name: 'Guide', slug: 'guide' },
  { name: 'Électrique', slug: 'electrique' },
  { name: 'Hybride', slug: 'hybride' },
  { name: 'France', slug: 'france' },
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
  'disponible-france',
  'bientot-france',
  'import-uniquement',
] as const;
