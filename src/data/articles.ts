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
}

export const articles: ArticleSeed[] = [
  {
    slug: 'byd-seal-prix-france-2026',
    title: 'BYD Seal : la berline qui fait trembler Tesla débarque en France',
    excerpt:
      "Avec son design fluide et ses performances de haut vol, la BYD Seal s'apprête à conquérir le marché français des VE.",
    image: 'https://picsum.photos/seed/bydseal/1200/800',
    category: 'Nouveauté',
    categorySlug: 'nouveaute',
    publishedAt: '2026-03-12T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction VehiculesChinois.com',
  },
  {
    slug: 'mg-cyberster-roadster-electrique',
    title: 'MG Cyberster : le roadster électrique enfin dévoilé',
    excerpt:
      'MG renoue avec son passé sportif en lançant un cabriolet 100 % électrique aux performances décoiffantes.',
    image: 'https://picsum.photos/seed/mgcyber/1200/800',
    category: 'Sportive',
    categorySlug: 'essai',
    publishedAt: '2026-03-10T09:00:00+01:00',
    readingTime: 5,
  },
  {
    slug: 'droits-douane-ue-voitures-chinoises-impact',
    title: 'Droits de douane UE : quel impact réel sur les prix en France ?',
    excerpt:
      "Après l'entrée en vigueur des droits compensateurs, on fait le point sur les hausses de prix constatées chez BYD, Geely et SAIC.",
    image: 'https://picsum.photos/seed/douane/1200/800',
    category: 'Dossier',
    categorySlug: 'guide',
    publishedAt: '2026-03-08T09:00:00+01:00',
    readingTime: 8,
  },
  {
    slug: 'chery-tiggo-8-pro-suv-7-places',
    title: 'Chery Tiggo 8 Pro : le SUV 7 places qui bouscule les codes',
    excerpt:
      'Confort, technologie et espace : le nouveau fleuron de Chery arrive avec des arguments solides.',
    image: 'https://picsum.photos/seed/chery/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2026-03-05T09:00:00+01:00',
    readingTime: 7,
  },
  {
    slug: 'leapmotor-t03-bonus-ecologique',
    title: 'Leapmotor T03 : la citadine à 16 900 € éligible au bonus',
    excerpt:
      "Fabriquée en Pologne chez Stellantis, la T03 passe la barrière du score environnemental et reste sous les 20 000 €.",
    image: 'https://picsum.photos/seed/leapmotor/1200/800',
    category: 'Nouveauté',
    categorySlug: 'nouveaute',
    publishedAt: '2026-03-01T09:00:00+01:00',
    readingTime: 5,
  },
  {
    slug: 'voiture-chinoise-occasion-fiabilite',
    title: "Occasion : faut-il acheter une chinoise de seconde main ?",
    excerpt:
      'Analyse de la décote et de la fiabilité à long terme des premiers modèles arrivés sur le marché français.',
    image: 'https://picsum.photos/seed/occasion/1200/800',
    category: 'Conseil',
    categorySlug: 'guide',
    publishedAt: '2026-02-28T09:00:00+01:00',
    readingTime: 6,
  },
];

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
