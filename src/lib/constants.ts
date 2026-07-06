/**
 * Configuration globale du site et constantes réutilisables.
 */

export const SITE = {
  name: 'Véhicules Chinois',
  shortName: 'VéhiculeschinoisCOM',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vehiculeschinois.com',
  locale: 'fr_FR',
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'ar', 'en'] as const,
  description:
    "Actualités, essais, comparatifs et guides d'achat sur les voitures chinoises (BYD, MG, Chery, Geely, GWM, Zeekr, NIO, XPeng) en France et en Europe.",
  twitterHandle: '@vehiculeschinois',
  defaultOgImage: '/opengraph-image',
} as const;

export type SiteLanguage = (typeof SITE.supportedLanguages)[number];

/**
 * Marques chinoises éditorialement prioritaires.
 * Utilisé pour le méga-menu, le footer et le sitemap.
 */
const W = 'https://www.wandaloo.com/imgs/';

export const BRANDS = [
  { name: 'BYD',       slug: 'byd',       country: 'Chine', logo: `${W}logo-BYD.png` },
  { name: 'MG Motor',  slug: 'mg',        country: 'Chine', logo: `${W}logo-MG-b.png` },
  { name: 'Chery',     slug: 'chery',     country: 'Chine', logo: `${W}logo-CHERY.png` },
  { name: 'Geely',     slug: 'geely',     country: 'Chine', logo: `${W}logo-Geely-b.png` },
  { name: 'GWM',       slug: 'gwm',       country: 'Chine', logo: `${W}logo-GWM.png` },
  { name: 'Zeekr',     slug: 'zeekr',     country: 'Chine', logo: `${W}logo-Zeekr.png` },
  { name: 'NIO',       slug: 'nio',       country: 'Chine', logo: `${W}logo-NIO.png` },
  { name: 'XPeng',     slug: 'xpeng',     country: 'Chine', logo: `${W}logo-XPENG.png` },
  { name: 'Leapmotor', slug: 'leapmotor', country: 'Chine', logo: `${W}logo-Leapmotor.png` },
] as const;

export const CATEGORIES = [
  { name: 'Nouveauté', slug: 'nouveaute' },
  { name: 'Essai', slug: 'essai' },
  { name: 'Comparatif', slug: 'comparatif' },
  { name: 'Guide', slug: 'guide' },
  { name: 'Technologie', slug: 'technologie' },
  { name: 'Sélection', slug: 'selection' },
  { name: 'Analyse', slug: 'analyse' },
  { name: 'Électrique', slug: 'electrique' },
  { name: 'Hybride', slug: 'hybride' },
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
