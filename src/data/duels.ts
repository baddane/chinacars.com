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
  ['byd-seal-5-dmi', 'toyota-corolla'],

  // --- Chinoises vs Renault ---
  ['byd-seagull', 'renault-clio'],
  ['mg-zs-hybrid', 'renault-captur'],
  ['omoda-5-shs-h', 'renault-captur'],

  // --- Chinoises vs Peugeot ---
  ['byd-seagull', 'peugeot-208'],
  ['omoda-e5', 'peugeot-2008'],
  ['xpeng-g6', 'peugeot-3008'],
  ['byd-atto-3', 'peugeot-2008'],
  ['byd-seal-u', 'peugeot-3008'],

  // --- Chinoises vs VW / Hyundai / Citroën ---
  ['mg-zs-hybrid', 'vw-t-cross'],
  ['byd-atto-3', 'vw-t-roc'],
  ['omoda-5-shs-h', 'hyundai-kona'],
  ['byd-seal-u', 'hyundai-tucson'],
  ['byd-seagull', 'citroen-c3'],
  ['byd-atto-2', 'citroen-c3-aircross'],

  // --- Chinoises entre elles ---
  ['mg-hs-hybrid', 'jaecoo-7'],
  ['byd-atto-3', 'geely-geometry-c'],
  ['mg-marvel-r', 'xpeng-g6'],
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

  // --- Chinoises vs Citroën (suite) ---
  ['mg-hs', 'citroen-c5-aircross'],

  // --- Chinoises vs Dacia (suite) ---
  ['chery-tiggo-8-pro', 'dacia-jogger-hybrid'],

  // --- Chinoises vs Hyundai (suite) ---
  ['byd-atto-3-evo', 'hyundai-kona'],

  // --- Chinoises vs Toyota (suite) ---
  ['mg-hs-hybrid', 'toyota-rav4'],

  // --- Chinoises vs Peugeot (suite) ---
  ['byd-atto-2', 'peugeot-2008'],

  // --- Chinoises vs Hyundai (suite) ---
  ['mg3-hybrid', 'hyundai-i20'],

  // --- Chinoises vs Peugeot (suite) ---
  ['gwm-ora-03', 'peugeot-e-208'],

  // --- Chinoises vs Volkswagen (suite) ---
  ['mg-zs-hybrid', 'vw-t-roc'],

  // --- Chinoises vs Citroën (suite) ---
  ['jaecoo-7', 'citroen-c5-aircross'],

  // --- Chinoises vs Toyota (suite) ---
  ['geely-geometry-c', 'toyota-c-hr'],

  // --- Chinoises vs Volkswagen (suite) ---
  ['byd-seal-5-dmi', 'vw-golf'],

  // --- Chinoises vs Renault (suite) ---
  ['mg-zs-ev', 'renault-captur'],

  // --- Chinoises vs Dacia (suite) ---
  ['mg-hs', 'dacia-bigster'],

  // --- Chinoises vs Toyota (suite) ---
  ['byd-sealion-7', 'toyota-rav4'],

  // --- Chinoises vs Hyundai (suite) ---
  ['mg-hs-hybrid', 'hyundai-tucson'],

  // --- Chinoises vs Hyundai (suite) ---
  ['mg-zs-hybrid', 'hyundai-kona'],

  // --- Chinoises vs Peugeot (suite) ---
  ['mg-hs-hybrid', 'peugeot-3008'],

  // --- Chinoises vs Peugeot (suite) ---
  ['mg-zs-ev', 'peugeot-2008'],

  // --- Chinoises entre elles (suite) ---
  ['byd-atto-3-evo', 'xpeng-g6'],

  // --- Chinoises entre elles (suite) ---
  ['omoda-e5', 'geely-geometry-c'],

  // --- Chinoises entre elles (suite) ---
  ['omoda-e5', 'byd-atto-3-evo'],

  // --- Chinoises entre elles (suite) ---
  ['byd-atto-3-evo', 'geely-geometry-c'],

  // --- Chinoises entre elles (suite) ---
  ['zeekr-x', 'geely-geometry-c'],

  // --- Chinoises entre elles (suite) ---
  ['xpeng-g6', 'geely-geometry-c'],

  // --- Chinoises entre elles (suite) ---
  ['byd-atto-3-evo', 'omoda-5-shs-h'],

  // --- Chinoises entre elles (suite) ---
  ['xpeng-g6', 'omoda-e5'],

  // --- Chinoises entre elles (suite) ---
  ['zeekr-x', 'omoda-e5'],

  // --- Chinoises entre elles (suite) ---
  ['jaecoo-7', 'omoda-5-shs-h'],

  // --- Chinoises entre elles (suite) ---
  ['byd-seal-u', 'mg-hs-hybrid'],

  // --- Chinoises entre elles (suite) ---
  ['xpeng-g9', 'byd-sealion-7'],

  // --- Chinoises entre elles (suite) ---
  ['mg-hs-hybrid', 'chery-tiggo-8-pro'],

  // --- Chinoises entre elles (suite) ---
  ['byd-atto-2', 'mg-zs-ev'],

  // --- Chinoises entre elles (suite) ---
  ['byd-seal-u', 'xpeng-g6'],

  // --- Chinoises entre elles (suite) ---
  ['byd-seal-u', 'byd-sealion-7'],

  // --- Chinoises entre elles (suite) ---
  ['byd-atto-3-evo', 'mg-zs-ev'],

  // --- Chinoises entre elles (suite) ---
  ['byd-tang', 'zeekr-001'],

  // --- Chinoises entre elles (suite) ---
  ['xpeng-g9', 'zeekr-001'],

  // --- Chinoises entre elles (suite) ---
  ['byd-seal', 'xpeng-g6'],
  ['byd-han', 'zeekr-001'],
  ['mg-zs-hybrid', 'mg-hs-hybrid'],
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
