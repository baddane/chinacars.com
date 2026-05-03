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
  brandSlug?: string;      // marque principale de l'article
  relatedSlugs?: string[]; // slugs des articles liés
  tags?: string[];         // mots-clés thématiques
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
    brandSlug: 'byd',
    relatedSlugs: [
      'geely-geometry-c-autonomie-autoroute-casa-rabat',
      'voiture-chinoise-occasion-fiabilite',
      'mg-cyberster-roadster-electrique',
    ],
    tags: ['BYD', 'berline électrique', 'VE', 'Maroc', 'nouveauté 2024'],
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
    author: 'Rédaction ChinaCarsMA',
    brandSlug: 'mg',
    relatedSlugs: [
      'byd-seal-prix-maroc-2024',
      'chery-tiggo-8-pro-suv-7-places',
      'voiture-chinoise-occasion-fiabilite',
    ],
    tags: ['MG', 'roadster', 'électrique', 'sportive', 'cabriolet'],
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
    author: 'Rédaction ChinaCarsMA',
    relatedSlugs: [
      'voiture-chinoise-occasion-fiabilite',
      'byd-seal-prix-maroc-2024',
      'chery-tiggo-8-pro-suv-7-places',
    ],
    tags: ['importation', 'douane', 'homologation', 'Maroc', 'guide achat'],
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
    author: 'Rédaction ChinaCarsMA',
    brandSlug: 'chery',
    relatedSlugs: [
      'byd-seal-prix-maroc-2024',
      'importer-voiture-chinoise-maroc-2024',
      'voiture-chinoise-occasion-fiabilite',
    ],
    tags: ['Chery', 'SUV', '7 places', 'essai', 'famille'],
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
    author: 'Rédaction ChinaCarsMA',
    brandSlug: 'geely',
    relatedSlugs: [
      'byd-seal-prix-maroc-2024',
      'mg-cyberster-roadster-electrique',
      'importer-voiture-chinoise-maroc-2024',
    ],
    tags: ['Geely', 'autonomie', 'électrique', 'test réel', 'autoroute'],
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
    author: 'Rédaction ChinaCarsMA',
    relatedSlugs: [
      'importer-voiture-chinoise-maroc-2024',
      'chery-tiggo-8-pro-suv-7-places',
      'byd-seal-prix-maroc-2024',
    ],
    tags: ['occasion', 'fiabilité', 'décote', 'achat', 'conseil'],
  },
];

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
