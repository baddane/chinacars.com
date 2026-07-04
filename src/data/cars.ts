/**
 * Fiches techniques des modèles chinois, utilisées par le comparateur
 * intelligent (/comparateur). Les valeurs sont indicatives, alignées sur
 * les fiches wandaloo.com et les données constructeurs (elles varient selon
 * les finitions et les marchés France/Maroc).
 *
 * `powertrain` :
 *  - 'ev'      : 100 % électrique
 *  - 'phev'    : hybride rechargeable
 *  - 'hybrid'  : hybride simple (non rechargeable)
 *
 * `autonomyKm` = autonomie totale entre deux « pleins » (recharge pour un EV,
 * réservoir + batterie pour un hybride) — pertinent pour les longs trajets.
 * `energyCostPer100` = coût énergétique indicatif aux 100 km (en €).
 */

export type Powertrain = 'ev' | 'phev' | 'hybrid';

export interface Car {
  slug: string;
  name: string;
  brand: string;
  brandSlug: string;
  segment: string;
  image: string; // fichier wandaloo
  powertrain: Powertrain;
  price: number; // prix indicatif de départ, en €
  powerHp: number; // ch
  accel0to100: number; // s (plus bas = mieux)
  autonomyKm: number; // km entre deux pleins
  chargingKw: number | null; // recharge rapide DC (kW), null si non rechargeable
  batteryKwh: number | null; // capacité batterie (kWh)
  energyCostPer100: number; // € / 100 km (plus bas = mieux)
  bootLiters: number;
  seats: number;
  lengthMm: number;
  safetyStars: number; // Euro NCAP (0-5)
  warrantyYears: number;
  techScore: number; // 1-10 (dotation & sophistication techno)
}

const IMG = 'https://www.wandaloo.com/files/Voiture-Neuve/';

export const CARS: Car[] = [
  {
    slug: 'byd-seal', name: 'Seal', brand: 'BYD', brandSlug: 'byd',
    segment: 'Berline', image: IMG + 'byd-seal.jpg', powertrain: 'ev',
    price: 45000, powerHp: 313, accel0to100: 5.9, autonomyKm: 570, chargingKw: 150,
    batteryKwh: 82.5, energyCostPer100: 3.4, bootLiters: 400, seats: 5, lengthMm: 4800,
    safetyStars: 5, warrantyYears: 6, techScore: 8,
  },
  {
    slug: 'byd-atto-3', name: 'Atto 3', brand: 'BYD', brandSlug: 'byd',
    segment: 'SUV compact', image: IMG + 'byd-atto-3.jpg', powertrain: 'ev',
    price: 38000, powerHp: 204, accel0to100: 7.3, autonomyKm: 420, chargingKw: 88,
    batteryKwh: 60, energyCostPer100: 3.4, bootLiters: 440, seats: 5, lengthMm: 4455,
    safetyStars: 5, warrantyYears: 6, techScore: 7,
  },
  {
    slug: 'byd-seagull', name: 'Dolphin Surf (Seagull)', brand: 'BYD', brandSlug: 'byd',
    segment: 'Citadine', image: IMG + 'byd-seagull.jpg', powertrain: 'ev',
    price: 20000, powerHp: 156, accel0to100: 9.1, autonomyKm: 310, chargingKw: 85,
    batteryKwh: 43, energyCostPer100: 3.2, bootLiters: 308, seats: 5, lengthMm: 3990,
    safetyStars: 4, warrantyYears: 6, techScore: 6,
  },
  {
    slug: 'byd-tang', name: 'Tang', brand: 'BYD', brandSlug: 'byd',
    segment: 'Grand SUV 7 places', image: IMG + 'byd-tang.jpg', powertrain: 'ev',
    price: 62000, powerHp: 517, accel0to100: 4.9, autonomyKm: 530, chargingKw: 170,
    batteryKwh: 108.8, energyCostPer100: 4.2, bootLiters: 550, seats: 7, lengthMm: 4970,
    safetyStars: 5, warrantyYears: 6, techScore: 8,
  },
  {
    slug: 'byd-han', name: 'Han', brand: 'BYD', brandSlug: 'byd',
    segment: 'Berline premium', image: IMG + 'byd-han.jpg', powertrain: 'ev',
    price: 72000, powerHp: 517, accel0to100: 3.9, autonomyKm: 521, chargingKw: 120,
    batteryKwh: 85.4, energyCostPer100: 3.7, bootLiters: 410, seats: 5, lengthMm: 4995,
    safetyStars: 5, warrantyYears: 6, techScore: 8,
  },
  {
    slug: 'byd-seal-u', name: 'Seal U', brand: 'BYD', brandSlug: 'byd',
    segment: 'SUV familial', image: IMG + 'byd-seal-u-phev.jpg', powertrain: 'ev',
    price: 43600, powerHp: 218, accel0to100: 8.9, autonomyKm: 500, chargingKw: 140,
    batteryKwh: 87, energyCostPer100: 3.5, bootLiters: 425, seats: 5, lengthMm: 4785,
    safetyStars: 5, warrantyYears: 6, techScore: 7,
  },
  {
    slug: 'mg-zs-ev', name: 'ZS EV', brand: 'MG', brandSlug: 'mg',
    segment: 'SUV urbain', image: IMG + 'mg-zs-ev.jpg', powertrain: 'ev',
    price: 25500, powerHp: 156, accel0to100: 8.6, autonomyKm: 440, chargingKw: 92,
    batteryKwh: 64, energyCostPer100: 3.5, bootLiters: 448, seats: 5, lengthMm: 4323,
    safetyStars: 5, warrantyYears: 7, techScore: 6,
  },
  {
    slug: 'mg5', name: 'MG5', brand: 'MG', brandSlug: 'mg',
    segment: 'Break', image: IMG + 'mg-mg-5.jpg', powertrain: 'ev',
    price: 34500, powerHp: 156, accel0to100: 8.3, autonomyKm: 400, chargingKw: 87,
    batteryKwh: 61.1, energyCostPer100: 3.6, bootLiters: 479, seats: 5, lengthMm: 4600,
    safetyStars: 5, warrantyYears: 7, techScore: 6,
  },
  {
    slug: 'mg3-hybrid', name: 'MG3 Hybrid+', brand: 'MG', brandSlug: 'mg',
    segment: 'Citadine hybride', image: IMG + 'mg-mg3.jpg', powertrain: 'hybrid',
    price: 18500, powerHp: 195, accel0to100: 8.0, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 1.8, energyCostPer100: 7.5, bootLiters: 293, seats: 5, lengthMm: 4113,
    safetyStars: 4, warrantyYears: 7, techScore: 6,
  },
  {
    slug: 'mg-zs-hybrid', name: 'ZS Hybrid+', brand: 'MG', brandSlug: 'mg',
    segment: 'SUV urbain hybride', image: IMG + 'mg-zs-hev.jpg', powertrain: 'hybrid',
    price: 24000, powerHp: 195, accel0to100: 8.7, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 1.8, energyCostPer100: 8.0, bootLiters: 443, seats: 5, lengthMm: 4323,
    safetyStars: 5, warrantyYears: 7, techScore: 6,
  },
  {
    slug: 'mg-hs-hybrid', name: 'HS Hybrid+', brand: 'MG', brandSlug: 'mg',
    segment: 'SUV familial hybride', image: IMG + 'mg-hs-hev.jpg', powertrain: 'hybrid',
    price: 32000, powerHp: 214, accel0to100: 8.0, autonomyKm: 950, chargingKw: null,
    batteryKwh: 2, energyCostPer100: 8.5, bootLiters: 507, seats: 5, lengthMm: 4670,
    safetyStars: 5, warrantyYears: 7, techScore: 6,
  },
  {
    slug: 'zeekr-001', name: 'Zeekr 001', brand: 'Zeekr', brandSlug: 'zeekr',
    segment: 'Break premium', image: IMG + 'zeekr-001.jpg', powertrain: 'ev',
    price: 60000, powerHp: 544, accel0to100: 3.8, autonomyKm: 620, chargingKw: 200,
    batteryKwh: 100, energyCostPer100: 3.6, bootLiters: 539, seats: 5, lengthMm: 4970,
    safetyStars: 5, warrantyYears: 5, techScore: 9,
  },
  {
    slug: 'zeekr-x', name: 'Zeekr X', brand: 'Zeekr', brandSlug: 'zeekr',
    segment: 'SUV compact premium', image: IMG + 'zeekr-x.jpg', powertrain: 'ev',
    price: 45000, powerHp: 428, accel0to100: 3.8, autonomyKm: 440, chargingKw: 150,
    batteryKwh: 66, energyCostPer100: 3.4, bootLiters: 362, seats: 5, lengthMm: 4432,
    safetyStars: 5, warrantyYears: 5, techScore: 8,
  },
  {
    slug: 'xpeng-g6', name: 'XPeng G6', brand: 'XPeng', brandSlug: 'xpeng',
    segment: 'SUV compact', image: IMG + 'xpeng-g6.jpg', powertrain: 'ev',
    price: 43000, powerHp: 296, accel0to100: 6.9, autonomyKm: 525, chargingKw: 280,
    batteryKwh: 87.5, energyCostPer100: 3.5, bootLiters: 571, seats: 5, lengthMm: 4753,
    safetyStars: 5, warrantyYears: 5, techScore: 9,
  },
  {
    slug: 'xpeng-g9', name: 'XPeng G9', brand: 'XPeng', brandSlug: 'xpeng',
    segment: 'Grand SUV premium', image: IMG + 'xpeng-g9.jpg', powertrain: 'ev',
    price: 57000, powerHp: 405, accel0to100: 6.4, autonomyKm: 540, chargingKw: 300,
    batteryKwh: 93.5, energyCostPer100: 3.9, bootLiters: 660, seats: 5, lengthMm: 4891,
    safetyStars: 5, warrantyYears: 5, techScore: 9,
  },
  {
    slug: 'omoda-e5', name: 'Omoda E5', brand: 'Omoda', brandSlug: 'chery',
    segment: 'SUV compact', image: IMG + 'omoda-e5.jpg', powertrain: 'ev',
    price: 39600, powerHp: 204, accel0to100: 7.6, autonomyKm: 430, chargingKw: 80,
    batteryKwh: 61, energyCostPer100: 3.3, bootLiters: 378, seats: 5, lengthMm: 4424,
    safetyStars: 5, warrantyYears: 7, techScore: 7,
  },
  {
    slug: 'omoda-5-shs-h', name: 'Omoda 5 SHS-H', brand: 'Omoda', brandSlug: 'chery',
    segment: 'SUV compact hybride', image: IMG + 'omoda-5-shs-h.jpg', powertrain: 'hybrid',
    price: 30000, powerHp: 224, accel0to100: 7.8, autonomyKm: 1100, chargingKw: null,
    batteryKwh: 1.8, energyCostPer100: 7.0, bootLiters: 360, seats: 5, lengthMm: 4424,
    safetyStars: 5, warrantyYears: 7, techScore: 7,
  },
  {
    slug: 'chery-tiggo-8-pro', name: 'Tiggo 8 Pro', brand: 'Chery', brandSlug: 'chery',
    segment: 'SUV 7 places (PHEV)', image: IMG + 'chery-tiggo-8-pro-phev.jpg', powertrain: 'phev',
    price: 40000, powerHp: 326, accel0to100: 8.0, autonomyKm: 1000, chargingKw: 40,
    batteryKwh: 18.3, energyCostPer100: 6.0, bootLiters: 400, seats: 7, lengthMm: 4722,
    safetyStars: 5, warrantyYears: 7, techScore: 7,
  },
  {
    slug: 'jaecoo-7', name: 'Jaecoo 7', brand: 'Jaecoo', brandSlug: 'chery',
    segment: 'SUV familial (PHEV)', image: IMG + 'jaecoo-j7.jpg', powertrain: 'phev',
    price: 35000, powerHp: 204, accel0to100: 8.5, autonomyKm: 1200, chargingKw: 40,
    batteryKwh: 18.3, energyCostPer100: 5.5, bootLiters: 500, seats: 5, lengthMm: 4500,
    safetyStars: 5, warrantyYears: 7, techScore: 7,
  },
  {
    slug: 'geely-geometry-c', name: 'Geometry C', brand: 'Geely', brandSlug: 'geely',
    segment: 'SUV compact', image: IMG + 'geely-geometry-c.jpg', powertrain: 'ev',
    price: 33000, powerHp: 204, accel0to100: 6.9, autonomyKm: 400, chargingKw: 100,
    batteryKwh: 53, energyCostPer100: 3.4, bootLiters: 380, seats: 5, lengthMm: 4432,
    safetyStars: 5, warrantyYears: 5, techScore: 6,
  },
  {
    slug: 'gwm-ora-03', name: 'Ora 03', brand: 'GWM', brandSlug: 'gwm',
    segment: 'Citadine', image: IMG + 'gwm-ora-03.jpg', powertrain: 'ev',
    price: 30000, powerHp: 171, accel0to100: 8.2, autonomyKm: 340, chargingKw: 64,
    batteryKwh: 63, energyCostPer100: 3.6, bootLiters: 228, seats: 5, lengthMm: 4235,
    safetyStars: 5, warrantyYears: 7, techScore: 6,
  },
  {
    slug: 'gwm-wey-05', name: 'Wey 05', brand: 'GWM', brandSlug: 'gwm',
    segment: 'SUV (PHEV)', image: IMG + 'gwm-wey-05.jpg', powertrain: 'phev',
    price: 55000, powerHp: 476, accel0to100: 5.0, autonomyKm: 1000, chargingKw: 50,
    batteryKwh: 34, energyCostPer100: 5.5, bootLiters: 560, seats: 5, lengthMm: 4875,
    safetyStars: 5, warrantyYears: 7, techScore: 8,
  },
];

export function getCar(slug: string): Car | undefined {
  return CARS.find((c) => c.slug === slug);
}

export const POWERTRAIN_LABELS: Record<Powertrain, string> = {
  ev: '100 % électrique',
  phev: 'Hybride rechargeable',
  hybrid: 'Hybride',
};
