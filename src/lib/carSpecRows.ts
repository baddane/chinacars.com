/**
 * Définition des lignes du comparatif technique, partagée entre le
 * comparateur interactif (client) et les pages de duel statiques (serveur).
 */

import { POWERTRAIN_LABELS, type Car } from '@/src/data/cars';

export interface SpecRow {
  label: string;
  value: (car: Car) => string;
  better?: 'higher' | 'lower';
  raw?: (car: Car) => number | null;
}

export const SPEC_ROWS: SpecRow[] = [
  { label: 'Prix indicatif', value: (c) => `${c.price.toLocaleString('fr-FR')} €`, better: 'lower', raw: (c) => c.price },
  { label: 'Motorisation', value: (c) => POWERTRAIN_LABELS[c.powertrain] },
  { label: 'Puissance', value: (c) => `${c.powerHp} ch`, better: 'higher', raw: (c) => c.powerHp },
  { label: '0 à 100 km/h', value: (c) => `${c.accel0to100.toFixed(1)} s`, better: 'lower', raw: (c) => c.accel0to100 },
  { label: 'Autonomie totale', value: (c) => `${c.autonomyKm} km`, better: 'higher', raw: (c) => c.autonomyKm },
  { label: 'Recharge rapide', value: (c) => (c.chargingKw ? `${c.chargingKw} kW` : 'Plein essence'), better: 'higher', raw: (c) => c.chargingKw },
  { label: 'Batterie', value: (c) => (c.batteryKwh ? `${c.batteryKwh} kWh` : '—') },
  { label: 'Coût / 100 km', value: (c) => `≈ ${c.energyCostPer100.toFixed(1)} €`, better: 'lower', raw: (c) => c.energyCostPer100 },
  { label: 'Coffre', value: (c) => `${c.bootLiters} L`, better: 'higher', raw: (c) => c.bootLiters },
  { label: 'Places', value: (c) => `${c.seats}`, better: 'higher', raw: (c) => c.seats },
  { label: 'Longueur', value: (c) => `${(c.lengthMm / 1000).toFixed(2)} m` },
  { label: 'Sécurité Euro NCAP', value: (c) => `${c.safetyStars} ★`, better: 'higher', raw: (c) => c.safetyStars },
  { label: 'Garantie', value: (c) => `${c.warrantyYears} ans`, better: 'higher', raw: (c) => c.warrantyYears },
];

/** Renvoie 'a', 'b' ou null selon la voiture qui a la meilleure valeur sur la ligne. */
export function betterOnRow(row: SpecRow, a: Car, b: Car): 'a' | 'b' | null {
  const rawA = row.raw?.(a) ?? null;
  const rawB = row.raw?.(b) ?? null;
  if (!row.better || rawA == null || rawB == null || rawA === rawB) return null;
  const aWins = row.better === 'higher' ? rawA > rawB : rawA < rawB;
  return aWins ? 'a' : 'b';
}
