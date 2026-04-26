/**
 * Configuration globale du site et constantes réutilisables.
 */

export const SITE = {
  name: 'ChinaCarsMA',
  shortName: 'ChinaCars',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://chinacarsma.com',
  locale: 'fr_MA',
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'ar', 'en'] as const,
  description:
    "Actualités, essais, comparatifs et guides d'achat sur les voitures chinoises (BYD, MG, Chery, Geely, GWM, Zeekr) au Maroc.",
  twitterHandle: '@chinacarsma',
  defaultOgImage: '/images/og-default.jpg',
} as const;

export type SiteLanguage = (typeof SITE.supportedLanguages)[number];

/**
 * Marques chinoises éditorialement prioritaires.
 * Utilisé pour le méga-menu, le footer, le sitemap et la page /marques.
 */
export const BRANDS = [
  {
    name: 'BYD',
    slug: 'byd',
    country: 'Chine',
    origin: 'Shenzhen, Chine',
    description:
      "Build Your Dreams est le 1er fabricant mondial de véhicules électrifiés. Présent au Maroc avec une gamme complète allant de la citadine à la berline premium.",
    modelsCount: 5,
  },
  {
    name: 'MG Motor',
    slug: 'mg',
    country: 'Chine',
    origin: 'Shanghai, Chine',
    description:
      "Marque d'origine britannique sous pavillon chinois (SAIC), MG propose des véhicules au design dynamique et aux équipements généreux, récompensés 5 étoiles Euro NCAP.",
    modelsCount: 4,
  },
  {
    name: 'Chery',
    slug: 'chery',
    country: 'Chine',
    origin: 'Wuhu, Chine',
    description:
      "L'un des plus grands exportateurs chinois, Chery se distingue par ses SUV technologiques (Tiggo) et ses motorisations hybrides rechargeables.",
    modelsCount: 6,
  },
  {
    name: 'Geely',
    slug: 'geely',
    country: 'Chine',
    origin: 'Hangzhou, Chine',
    description:
      "Propriétaire de Volvo et Lotus, Geely insuffle une rigueur européenne à ses modèles. Ses plateformes CMA et SEA servent aussi Volvo et Polestar.",
    modelsCount: 3,
  },
  {
    name: 'GWM',
    slug: 'gwm',
    country: 'Chine',
    origin: 'Baoding, Chine',
    description:
      "Great Wall Motor est le spécialiste des SUV (Haval) et des pick-ups (Tank, Poer). Implanté au Maroc avec le Haval H6 et le Jolion.",
    modelsCount: 4,
  },
  {
    name: 'Zeekr',
    slug: 'zeekr',
    country: 'Chine',
    origin: 'Ningbo, Chine',
    description:
      "La marque de luxe électrique du groupe Geely, visant le très haut de gamme face à Tesla et BMW. Le Zeekr 001 revendique 0–100 km/h en 3,8 s.",
    modelsCount: 2,
  },
  {
    name: 'NIO',
    slug: 'nio',
    country: 'Chine',
    origin: 'Shanghai, Chine',
    description:
      "Pionnier de l'échange de batterie (swap), NIO propose des SUV et berlines premium avec un service NIO House et une batterie as a service (BaaS) innovant.",
    modelsCount: 4,
  },
  {
    name: 'XPeng',
    slug: 'xpeng',
    country: 'Chine',
    origin: 'Guangzhou, Chine',
    description:
      "XPeng (小鹏) mise sur la conduite autonome avancée avec son système XNGP. Ses modèles P7 et G6 ciblent les amateurs de technologie.",
    modelsCount: 3,
  },
  {
    name: 'Leapmotor',
    slug: 'leapmotor',
    country: 'Chine',
    origin: 'Hangzhou, Chine',
    description:
      "Leapmotor (合众) est le challenger abordable de l'électrique chinois. Soutenu par Stellantis pour sa distribution mondiale, il vise le meilleur rapport prix/équipement.",
    modelsCount: 3,
  },
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
