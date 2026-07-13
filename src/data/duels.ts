/**
 * Duels de comparaison pré-établis, servis en pages statiques
 * (/comparateur/[duel]) pour le référencement longue traîne.
 * Chaque paire est un match pertinent (même segment / rivaux réels).
 * L'URL d'un duel : `${slugA}-vs-${slugB}`.
 */

import { getCar, type Car } from '@/src/data/cars';

export const COMPARISON_DUELS: Array<[string, string]> = [
  // SUV urbains & compacts
  ['mg-zs-hybrid', 'dacia-duster'],
  ['mg-zs-hybrid', 'toyota-yaris-cross'],
  ['omoda-5-shs-h', 'toyota-yaris-cross'],
  ['omoda-5-shs-h', 'dacia-duster'],
  ['omoda-e5', 'hyundai-kona'],
  ['byd-atto-3', 'renault-megane-e-tech'],
  ['mg-marvel-r', 'renault-megane-e-tech'],
  ['byd-atto-3', 'xpeng-g6'],
  ['zeekr-x', 'byd-atto-3'],
  ['geely-geometry-c', 'mg-zs-ev'],
  ['xpeng-g6', 'vw-tiguan'],
  ['jaecoo-7', 'vw-tiguan'],
  ['jaecoo-7', 'peugeot-3008'],
  ['hyundai-tucson', 'jaecoo-7'],
  ['byd-seal-u', 'vw-tiguan'],

  // Citadines
  ['byd-seagull', 'dacia-spring'],
  ['byd-seagull', 'renault-5-e-tech'],
  ['peugeot-e-208', 'byd-seagull'],
  ['gwm-ora-03', 'dacia-spring'],
  ['mg3-hybrid', 'renault-clio-e-tech'],
  ['mg3-hybrid', 'toyota-yaris'],
  ['dacia-sandero', 'mg3-hybrid'],
  ['dacia-sandero', 'renault-clio'],

  // Berlines & premium
  ['byd-seal', 'zeekr-001'],
  ['byd-seal', 'byd-han'],
  ['mg5', 'byd-seal'],
  ['zeekr-001', 'byd-han'],
  ['mg-cyberster', 'byd-seal'],
  ['zeekr-x', 'xpeng-g6'],
  ['dacia-logan', 'byd-seal-5-dmi'],

  // Familiaux & 7 places
  ['byd-tang', 'chery-tiggo-8-pro'],
  ['dacia-jogger', 'chery-tiggo-8-pro'],
  ['dacia-bigster-hybrid', 'mg-hs-hybrid'],
  ['dacia-bigster-hybrid', 'omoda-5-shs-h'],
  ['chery-tiggo-8-pro', 'toyota-rav4'],
  ['gwm-wey-05', 'toyota-rav4'],
  ['xpeng-g9', 'byd-tang'],

  // --- Chinoises vs Dacia (le mètre-étalon du rapport prix) ---
  ['omoda-e5', 'dacia-duster'],
  ['byd-atto-3', 'dacia-duster'],
  ['byd-seagull', 'dacia-sandero'],
  ['mg3-hybrid', 'dacia-sandero-stepway'],
  ['jaecoo-7', 'dacia-bigster'],
  ['mg-zs-hybrid', 'dacia-bigster-hybrid'],

  // --- Chinoises vs Toyota (référence fiabilité/hybride) ---
  ['omoda-5-shs-h', 'toyota-c-hr'],
  ['byd-atto-3', 'toyota-c-hr'],
  ['jaecoo-7', 'toyota-rav4'],
  ['byd-seal-u', 'toyota-rav4'],

  // --- Chinoises vs Renault ---
  ['byd-seagull', 'renault-clio'],
  ['mg-zs-hybrid', 'renault-captur'],
  ['omoda-5-shs-h', 'renault-captur'],

  // --- Chinoises vs Peugeot ---
  ['byd-seagull', 'peugeot-208'],
  ['omoda-e5', 'peugeot-2008'],
  ['xpeng-g6', 'peugeot-3008'],
  ['byd-atto-3', 'peugeot-2008'],

  // --- Chinoises vs VW / Hyundai / Citroën ---
  ['mg-zs-hybrid', 'vw-t-cross'],
  ['byd-atto-3', 'vw-t-roc'],
  ['omoda-5-shs-h', 'hyundai-kona'],
  ['byd-seal-u', 'hyundai-tucson'],
  ['byd-seagull', 'citroen-c3'],

  // --- Chinoises entre elles ---
  ['byd-atto-3', 'omoda-e5'],
  ['byd-atto-3', 'mg-zs-ev'],
  ['mg-zs-hybrid', 'omoda-5-shs-h'],
  ['gwm-wey-05', 'byd-seal-u'],
  ['byd-seagull', 'gwm-ora-03'],
  ['xpeng-g6', 'byd-sealion-7'],

  // --- Rivales entre elles (fort volume de recherche) ---
  ['dacia-duster', 'toyota-yaris-cross'],
  ['toyota-rav4', 'hyundai-tucson'],
  ['dacia-spring', 'renault-5-e-tech'],
  ['renault-clio-e-tech', 'toyota-yaris'],
];

export function duelSlug(a: string, b: string): string {
  return `${a}-vs-${b}`;
}

export function parseDuelSlug(slug: string): [string, string] | null {
  const idx = slug.indexOf('-vs-');
  if (idx === -1) return null;
  const a = slug.slice(0, idx);
  const b = slug.slice(idx + '-vs-'.length);
  if (!a || !b) return null;
  return [a, b];
}

export interface DuelCars {
  a: Car;
  b: Car;
  slug: string;
}

/** Résout les deux voitures d'un duel à partir de son slug d'URL. */
export function getDuel(slug: string): DuelCars | null {
  const parsed = parseDuelSlug(slug);
  if (!parsed) return null;
  const a = getCar(parsed[0]);
  const b = getCar(parsed[1]);
  if (!a || !b || a.slug === b.slug) return null;
  return { a, b, slug };
}

/** Liste des duels valides (les deux voitures existent), pour params & sitemap. */
export const VALID_DUELS: DuelCars[] = COMPARISON_DUELS.map(([a, b]) => getDuel(duelSlug(a, b)))
  .filter((d): d is DuelCars => d !== null);
