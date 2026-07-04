/**
 * Moteur du comparateur intelligent : critères de notation dérivés des fiches
 * techniques (src/data/cars.ts), profils de conducteur, et calcul du score /
 * du gagnant pour un duel de deux voitures selon les priorités de l'utilisateur.
 *
 * Pur (pas de React) → utilisable côté client comme serveur.
 */

import { CARS, type Car } from '@/src/data/cars';

export type CriterionId =
  | 'budget'
  | 'autonomie'
  | 'performance'
  | 'famille'
  | 'securite'
  | 'economie'
  | 'techno'
  | 'ville';

export interface Criterion {
  id: CriterionId;
  label: string;
  description: string;
  /** Note 0..1 (1 = meilleur) calculée depuis les specs et les bornes du dataset. */
  score: (car: Car, ranges: Ranges) => number;
}

export interface DriverProfile {
  id: string;
  label: string;
  emoji: string;
  description: string;
  criteria: CriterionId[];
}

type NumericField =
  | 'price'
  | 'powerHp'
  | 'accel0to100'
  | 'autonomyKm'
  | 'chargingKw'
  | 'bootLiters'
  | 'seats'
  | 'lengthMm'
  | 'safetyStars'
  | 'warrantyYears'
  | 'energyCostPer100'
  | 'techScore';

export type Ranges = Record<NumericField, { min: number; max: number }>;

const NUMERIC_FIELDS: NumericField[] = [
  'price', 'powerHp', 'accel0to100', 'autonomyKm', 'chargingKw', 'bootLiters',
  'seats', 'lengthMm', 'safetyStars', 'warrantyYears', 'energyCostPer100', 'techScore',
];

export function computeRanges(cars: Car[] = CARS): Ranges {
  const ranges = {} as Ranges;
  for (const field of NUMERIC_FIELDS) {
    const values = cars
      .map((c) => c[field])
      .filter((v): v is number => typeof v === 'number');
    ranges[field] = { min: Math.min(...values), max: Math.max(...values) };
  }
  return ranges;
}

/** Normalise une valeur entre 0 et 1 (1 = valeur la plus haute du dataset). */
function norm(value: number, field: NumericField, ranges: Ranges): number {
  const { min, max } = ranges[field];
  if (max === min) return 0.5;
  return Math.min(1, Math.max(0, (value - min) / (max - min)));
}

/** Normalise en inversant (1 = valeur la plus basse du dataset). */
function invNorm(value: number, field: NumericField, ranges: Ranges): number {
  return 1 - norm(value, field, ranges);
}

export const CRITERIA: Criterion[] = [
  {
    id: 'budget',
    label: 'Petit budget',
    description: "Le prix d'achat le plus bas possible",
    score: (car, r) => invNorm(car.price, 'price', r),
  },
  {
    id: 'autonomie',
    label: 'Longs trajets',
    description: 'Autonomie élevée et « pleins » rapides',
    score: (car, r) => {
      const range = norm(car.autonomyKm, 'autonomyKm', r);
      // Un hybride/PHEV se « recharge » en faisant le plein → équivalent recharge max
      const refuel = car.chargingKw == null ? 1 : norm(car.chargingKw, 'chargingKw', r);
      return 0.6 * range + 0.4 * refuel;
    },
  },
  {
    id: 'performance',
    label: 'Performance & plaisir',
    description: 'Puissance et accélération',
    score: (car, r) =>
      0.5 * norm(car.powerHp, 'powerHp', r) + 0.5 * invNorm(car.accel0to100, 'accel0to100', r),
  },
  {
    id: 'famille',
    label: 'Famille & espace',
    description: 'Coffre, nombre de places et habitabilité',
    score: (car, r) =>
      0.45 * norm(car.bootLiters, 'bootLiters', r) +
      0.35 * norm(car.seats, 'seats', r) +
      0.2 * norm(car.lengthMm, 'lengthMm', r),
  },
  {
    id: 'securite',
    label: 'Sécurité & garantie',
    description: 'Note Euro NCAP et durée de garantie',
    score: (car, r) =>
      0.6 * norm(car.safetyStars, 'safetyStars', r) +
      0.4 * norm(car.warrantyYears, 'warrantyYears', r),
  },
  {
    id: 'economie',
    label: "Économie d'usage",
    description: 'Coût énergétique aux 100 km le plus bas',
    score: (car, r) => invNorm(car.energyCostPer100, 'energyCostPer100', r),
  },
  {
    id: 'techno',
    label: 'Technologie',
    description: 'Dotation et sophistication technologique',
    score: (car, r) => norm(car.techScore, 'techScore', r),
  },
  {
    id: 'ville',
    label: 'Conduite en ville',
    description: 'Compacité et facilité de stationnement',
    score: (car, r) =>
      0.65 * invNorm(car.lengthMm, 'lengthMm', r) + 0.35 * invNorm(car.price, 'price', r),
  },
];

export const CRITERIA_BY_ID: Record<CriterionId, Criterion> = Object.fromEntries(
  CRITERIA.map((c) => [c.id, c]),
) as Record<CriterionId, Criterion>;

export const DRIVER_PROFILES: DriverProfile[] = [
  {
    id: 'famille',
    label: 'Parent de famille',
    emoji: '👨‍👩‍👧‍👦',
    description: 'Espace, sécurité et budget maîtrisé avant tout',
    criteria: ['famille', 'securite', 'budget'],
  },
  {
    id: 'urbain',
    label: 'Citadin écolo',
    emoji: '🏙️',
    description: 'Petite, économe et facile à garer',
    criteria: ['ville', 'economie', 'budget'],
  },
  {
    id: 'rouleur',
    label: 'Gros rouleur',
    emoji: '🛣️',
    description: 'Autonomie, sobriété et sécurité pour avaler les km',
    criteria: ['autonomie', 'economie', 'securite'],
  },
  {
    id: 'passionne',
    label: 'Passionné',
    emoji: '🏁',
    description: 'Performance, plaisir et technologie',
    criteria: ['performance', 'techno', 'autonomie'],
  },
  {
    id: 'technophile',
    label: 'Technophile',
    emoji: '📱',
    description: 'Le meilleur de la techno et de la recharge',
    criteria: ['techno', 'autonomie', 'performance'],
  },
  {
    id: 'premier-achat',
    label: 'Premier achat',
    emoji: '💰',
    description: 'Budget serré, économe et rassurant',
    criteria: ['budget', 'economie', 'securite'],
  },
];

export interface CriterionBreakdown {
  id: CriterionId;
  label: string;
  scoreA: number; // 0..1
  scoreB: number; // 0..1
}

export interface CompareResult {
  scoreA: number; // 0..100
  scoreB: number; // 0..100
  winner: 'a' | 'b' | 'tie';
  breakdown: CriterionBreakdown[];
  activeCriteria: CriterionId[];
  summary: string;
}

/** Note globale d'une voiture (0..100) pour un ensemble de critères actifs. */
export function scoreCar(car: Car, activeCriteria: CriterionId[], ranges: Ranges): number {
  const criteria = activeCriteria.length ? activeCriteria : CRITERIA.map((c) => c.id);
  const sum = criteria.reduce((acc, id) => acc + CRITERIA_BY_ID[id].score(car, ranges), 0);
  return Math.round((sum / criteria.length) * 100);
}

function buildSummary(
  a: Car,
  b: Car,
  winner: 'a' | 'b' | 'tie',
  breakdown: CriterionBreakdown[],
): string {
  if (winner === 'tie') {
    return `Match nul ! La ${a.brand} ${a.name} et la ${b.brand} ${b.name} obtiennent le même score pour votre profil. Départagez-les sur le détail ci-dessous ou sur un coup de cœur.`;
  }
  const win = winner === 'a' ? a : b;
  const lose = winner === 'a' ? b : a;
  // Critères où le gagnant devance le plus le perdant
  const gaps = breakdown
    .map((c) => ({
      label: c.label.toLowerCase(),
      gap: (winner === 'a' ? c.scoreA - c.scoreB : c.scoreB - c.scoreA),
    }))
    .filter((c) => c.gap > 0.02)
    .sort((x, y) => y.gap - x.gap);

  const strengths = gaps.slice(0, 3).map((g) => g.label);
  // Un point où le perdant garde l'avantage, pour la nuance
  const loserEdge = breakdown
    .map((c) => ({
      label: c.label.toLowerCase(),
      gap: (winner === 'a' ? c.scoreB - c.scoreA : c.scoreA - c.scoreB),
    }))
    .filter((c) => c.gap > 0.05)
    .sort((x, y) => y.gap - x.gap)[0];

  let sentence = `Pour votre profil, la <strong>${win.brand} ${win.name}</strong> l'emporte`;
  if (strengths.length === 1) {
    sentence += ` grâce à son avantage sur « ${strengths[0]} »`;
  } else if (strengths.length >= 2) {
    const last = strengths[strengths.length - 1];
    sentence += ` grâce à ses avantages sur ${strengths.slice(0, -1).map((s) => `« ${s} »`).join(', ')} et « ${last} »`;
  } else {
    sentence += ` de justesse, sur l'ensemble de vos critères`;
  }
  sentence += '.';
  if (loserEdge) {
    sentence += ` La ${lose.brand} ${lose.name} conserve toutefois l'avantage sur « ${loserEdge.label} » — à vous de juger si ce point est décisif.`;
  }
  return sentence;
}

export function compareCars(
  a: Car,
  b: Car,
  activeCriteria: CriterionId[],
  ranges: Ranges = computeRanges(),
): CompareResult {
  const criteria = activeCriteria.length ? activeCriteria : CRITERIA.map((c) => c.id);
  const breakdown: CriterionBreakdown[] = criteria.map((id) => {
    const crit = CRITERIA_BY_ID[id];
    return { id, label: crit.label, scoreA: crit.score(a, ranges), scoreB: crit.score(b, ranges) };
  });
  const scoreA = scoreCar(a, criteria, ranges);
  const scoreB = scoreCar(b, criteria, ranges);
  const winner: 'a' | 'b' | 'tie' = scoreA === scoreB ? 'tie' : scoreA > scoreB ? 'a' : 'b';
  return {
    scoreA,
    scoreB,
    winner,
    breakdown,
    activeCriteria: criteria,
    summary: buildSummary(a, b, winner, breakdown),
  };
}

/** Duels populaires proposés en accès rapide. */
export const POPULAR_DUELS: Array<{ a: string; b: string; label: string }> = [
  { a: 'byd-seal', b: 'zeekr-001', label: 'BYD Seal vs Zeekr 001' },
  { a: 'mg3-hybrid', b: 'byd-seagull', label: 'MG3 Hybrid+ vs BYD Dolphin Surf' },
  { a: 'xpeng-g6', b: 'byd-atto-3', label: 'XPeng G6 vs BYD Atto 3' },
  { a: 'byd-tang', b: 'chery-tiggo-8-pro', label: 'BYD Tang vs Chery Tiggo 8 Pro' },
  { a: 'omoda-5-shs-h', b: 'mg-zs-hybrid', label: 'Omoda 5 SHS-H vs MG ZS Hybrid+' },
  { a: 'zeekr-x', b: 'xpeng-g6', label: 'Zeekr X vs XPeng G6' },
];
