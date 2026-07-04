/**
 * Index de recherche léger, construit côté serveur et passé au composant
 * client. On n'y met QUE des champs courts (titre, sous-titre, url, mots-clés)
 * — surtout pas le corps des articles — pour ne pas alourdir le bundle client.
 */

import { articles } from '@/src/data/articles';
import { BRANDS } from '@/src/lib/constants';
import { carLabel } from '@/src/data/cars';
import { VALID_DUELS } from '@/src/data/duels';
import { normalize, type SearchItem } from '@/src/lib/searchTypes';

export type { SearchItem, SearchType } from '@/src/lib/searchTypes';

export function buildSearchIndex(): SearchItem[] {
  const articleItems: SearchItem[] = articles.map((a) => ({
    type: 'Article',
    title: a.title,
    subtitle: a.category,
    href: `/actualites/${a.slug}`,
    keywords: normalize(`${a.title} ${a.excerpt} ${a.category}`),
  }));

  const brandItems: SearchItem[] = BRANDS.map((b) => ({
    type: 'Marque',
    title: b.name,
    subtitle: 'Marque',
    href: `/marques/${b.slug}`,
    keywords: normalize(`${b.name} ${b.slug} marque constructeur`),
  }));

  const duelItems: SearchItem[] = VALID_DUELS.map((d) => {
    const title = `${carLabel(d.a)} vs ${carLabel(d.b)}`;
    return {
      type: 'Comparaison',
      title,
      subtitle: 'Comparaison',
      href: `/comparateur/${d.slug}`,
      keywords: normalize(`${title} ${d.a.brand} ${d.b.brand} comparatif comparaison duel`),
    };
  });

  return [...articleItems, ...brandItems, ...duelItems];
}
