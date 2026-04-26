/**
 * Static article seed data. Used until Sanity content is wired.
 * Shape kept aligned with the Sanity `article` schema so a switch
 * to `client.fetch(latestArticlesQuery)` is drop-in.
 */

export interface ArticleSeed {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categorySlug: string;
  publishedAt: string; // ISO 8601
  readingTime: number;
  author?: string;
  featured?: boolean;
}

export const articles: ArticleSeed[] = [
  {
    slug: 'byd-seal-prix-maroc-2024',
    title: 'BYD Seal : la berline qui fait trembler Tesla arrive au Maroc',
    excerpt:
      "Avec son design fluide et ses performances de haut vol, la BYD Seal s'apprête à conquérir le marché marocain des VE.",
    image: 'https://picsum.photos/seed/bydseal/1200/800',
    category: 'Nouveauté',
    categorySlug: 'nouveaute',
    publishedAt: '2024-04-12T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction ChinaCarsMA',
    featured: true,
  },
  {
    slug: 'mg-cyberster-roadster-electrique',
    title: 'MG Cyberster : le roadster électrique enfin dévoilé',
    excerpt:
      'MG renoue avec son passé sportif en lançant un cabriolet 100 % électrique aux performances décoiffantes.',
    image: 'https://picsum.photos/seed/mgcyber/1200/800',
    category: 'Sportive',
    categorySlug: 'essai',
    publishedAt: '2024-04-10T09:00:00+01:00',
    readingTime: 5,
    featured: true,
  },
  {
    slug: 'importer-voiture-chinoise-maroc-2024',
    title: 'Guide : comment importer sa voiture de Chine en 2024 ?',
    excerpt:
      "Tout ce qu'il faut savoir sur les taxes, le dédouanement et l'homologation pour le marché marocain.",
    image: 'https://picsum.photos/seed/import/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-04-08T09:00:00+01:00',
    readingTime: 8,
    featured: true,
  },
  {
    slug: 'chery-tiggo-8-pro-suv-7-places',
    title: 'Chery Tiggo 8 Pro : le SUV 7 places qui bouscule les codes',
    excerpt:
      'Confort, technologie et espace : le nouveau fleuron de Chery arrive avec des arguments solides.',
    image: 'https://picsum.photos/seed/chery/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-04-05T09:00:00+01:00',
    readingTime: 7,
  },
  {
    slug: 'geely-geometry-c-autonomie-autoroute-casa-rabat',
    title: "Geely Geometry C : l'autonomie réelle testée sur l'autoroute Casa-Rabat",
    excerpt:
      "Nous avons poussé la Geometry C dans ses retranchements pour vérifier ses promesses d'autonomie.",
    image: 'https://picsum.photos/seed/geely/1200/800',
    category: 'Test',
    categorySlug: 'essai',
    publishedAt: '2024-04-01T09:00:00+01:00',
    readingTime: 9,
  },
  {
    slug: 'voiture-chinoise-occasion-fiabilite',
    title: "Occasion : faut-il acheter une chinoise de seconde main ?",
    excerpt:
      'Analyse de la décote et de la fiabilité à long terme des premiers modèles arrivés sur le marché.',
    image: 'https://picsum.photos/seed/occasion/1200/800',
    category: 'Conseil',
    categorySlug: 'guide',
    publishedAt: '2024-03-28T09:00:00+01:00',
    readingTime: 6,
  },
  {
    slug: 'byd-atto-3-autonomie-test-maroc',
    title: 'BYD Atto 3 : autonomie réelle testée sous la chaleur marocaine',
    excerpt:
      "Entre Casablanca et Marrakech, nous avons mesuré la consommation réelle du BYD Atto 3 à 38 °C. Résultats surprenants.",
    image: 'https://picsum.photos/seed/bydatto/1200/800',
    category: 'Électrique',
    categorySlug: 'electrique',
    publishedAt: '2024-03-20T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'mg4-electric-prix-maroc-2024',
    title: 'MG4 Electric : la compacte à 280 000 DH qui change la donne',
    excerpt:
      "Avec son prix d'entrée agressif et ses 350 km d'autonomie WLTP, la MG4 Electric est l'électrique accessible du moment.",
    image: 'https://picsum.photos/seed/mg4ev/1200/800',
    category: 'Électrique',
    categorySlug: 'electrique',
    publishedAt: '2024-03-15T09:00:00+01:00',
    readingTime: 6,
  },
  {
    slug: 'recharge-voiture-electrique-maroc-bornes',
    title: 'Recharge VE au Maroc : état des bornes en 2024',
    excerpt:
      "Réseau ONEE, stations Totalenergies, bornes domicile : où en est l'infrastructure de recharge pour les électriques au Maroc ?",
    image: 'https://picsum.photos/seed/bornes/1200/800',
    category: 'Électrique',
    categorySlug: 'electrique',
    publishedAt: '2024-03-10T09:00:00+01:00',
    readingTime: 8,
  },
  {
    slug: 'voiture-chinoise-maroc-fiscalite-taxes',
    title: 'Fiscalité des voitures chinoises au Maroc : ce qui change en 2024',
    excerpt:
      "Droits de douane, TVA, vignette : le point complet sur les taxes applicables aux véhicules importés de Chine.",
    image: 'https://picsum.photos/seed/fiscalite/1200/800',
    category: 'Maroc',
    categorySlug: 'maroc',
    publishedAt: '2024-03-05T09:00:00+01:00',
    readingTime: 9,
  },
  {
    slug: 'concessionnaires-voitures-chinoises-maroc',
    title: 'Où acheter sa voiture chinoise au Maroc ? Le guide des concessionnaires',
    excerpt:
      "BYD Casablanca, MG Maroc, Chery Morocco : tour d'horizon des réseaux officiels et de leurs services après-vente.",
    image: 'https://picsum.photos/seed/concession/1200/800',
    category: 'Maroc',
    categorySlug: 'maroc',
    publishedAt: '2024-02-28T09:00:00+01:00',
    readingTime: 7,
  },
  {
    slug: 'marche-automobile-maroc-voitures-chinoises-2024',
    title: 'Le marché auto marocain en 2024 : les chinoises gagnent du terrain',
    excerpt:
      "Analyse des immatriculations : BYD et MG progressent de 40 % en un an. La part des marques chinoises dépasse désormais 8 % du marché.",
    image: 'https://picsum.photos/seed/marche/1200/800',
    category: 'Maroc',
    categorySlug: 'maroc',
    publishedAt: '2024-02-20T09:00:00+01:00',
    readingTime: 5,
  },
];

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
