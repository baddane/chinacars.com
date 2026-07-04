/**
 * Types et utilitaire de la recherche, SANS aucune dépendance aux données
 * (articles, voitures…). Importé côté client par le composant de recherche
 * pour garder le bundle léger. La construction de l'index vit dans search.ts.
 */

export type SearchType = 'Article' | 'Marque' | 'Comparaison';

export interface SearchItem {
  type: SearchType;
  title: string;
  subtitle: string;
  href: string;
  keywords: string;
}

/** Normalise pour une recherche insensible à la casse et aux accents. */
export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}
