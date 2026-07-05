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

export type Powertrain = 'ev' | 'phev' | 'hybrid' | 'thermal';

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
    segment: 'Berline', image: '/cars/byd-seal.jpg', powertrain: 'ev',
    price: 45000, powerHp: 313, accel0to100: 5.9, autonomyKm: 570, chargingKw: 150,
    batteryKwh: 82.5, energyCostPer100: 3.4, bootLiters: 400, seats: 5, lengthMm: 4800,
    safetyStars: 5, warrantyYears: 6, techScore: 8,
  },
  {
    slug: 'byd-atto-3', name: 'Atto 3', brand: 'BYD', brandSlug: 'byd',
    segment: 'SUV compact', image: '/cars/byd-atto-3.jpg', powertrain: 'ev',
    price: 38000, powerHp: 204, accel0to100: 7.3, autonomyKm: 420, chargingKw: 88,
    batteryKwh: 60, energyCostPer100: 3.4, bootLiters: 440, seats: 5, lengthMm: 4455,
    safetyStars: 5, warrantyYears: 6, techScore: 7,
  },
  {
    slug: 'byd-seagull', name: 'Dolphin Surf (Seagull)', brand: 'BYD', brandSlug: 'byd',
    segment: 'Citadine', image: '/cars/byd-seagull.jpg', powertrain: 'ev',
    price: 20000, powerHp: 156, accel0to100: 9.1, autonomyKm: 310, chargingKw: 85,
    batteryKwh: 43, energyCostPer100: 3.2, bootLiters: 308, seats: 5, lengthMm: 3990,
    safetyStars: 4, warrantyYears: 6, techScore: 6,
  },
  {
    slug: 'byd-tang', name: 'Tang', brand: 'BYD', brandSlug: 'byd',
    segment: 'Grand SUV 7 places', image: '/cars/byd-tang.jpg', powertrain: 'ev',
    price: 62000, powerHp: 517, accel0to100: 4.9, autonomyKm: 530, chargingKw: 170,
    batteryKwh: 108.8, energyCostPer100: 4.2, bootLiters: 550, seats: 7, lengthMm: 4970,
    safetyStars: 5, warrantyYears: 6, techScore: 8,
  },
  {
    slug: 'byd-han', name: 'Han', brand: 'BYD', brandSlug: 'byd',
    segment: 'Berline premium', image: '/cars/byd-han.jpg', powertrain: 'ev',
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
    segment: 'SUV urbain', image: '/cars/mg-zs-ev.jpg', powertrain: 'ev',
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
    segment: 'Break premium', image: '/cars/zeekr-001.jpg', powertrain: 'ev',
    price: 60000, powerHp: 544, accel0to100: 3.8, autonomyKm: 620, chargingKw: 200,
    batteryKwh: 100, energyCostPer100: 3.6, bootLiters: 539, seats: 5, lengthMm: 4970,
    safetyStars: 5, warrantyYears: 5, techScore: 9,
  },
  {
    slug: 'zeekr-x', name: 'Zeekr X', brand: 'Zeekr', brandSlug: 'zeekr',
    segment: 'SUV compact premium', image: '/cars/zeekr-x.jpg', powertrain: 'ev',
    price: 45000, powerHp: 428, accel0to100: 3.8, autonomyKm: 440, chargingKw: 150,
    batteryKwh: 66, energyCostPer100: 3.4, bootLiters: 362, seats: 5, lengthMm: 4432,
    safetyStars: 5, warrantyYears: 5, techScore: 8,
  },
  {
    slug: 'xpeng-g6', name: 'XPeng G6', brand: 'XPeng', brandSlug: 'xpeng',
    segment: 'SUV compact', image: '/cars/xpeng-g6.jpg', powertrain: 'ev',
    price: 43000, powerHp: 296, accel0to100: 6.9, autonomyKm: 525, chargingKw: 280,
    batteryKwh: 87.5, energyCostPer100: 3.5, bootLiters: 571, seats: 5, lengthMm: 4753,
    safetyStars: 5, warrantyYears: 5, techScore: 9,
  },
  {
    slug: 'xpeng-g9', name: 'XPeng G9', brand: 'XPeng', brandSlug: 'xpeng',
    segment: 'Grand SUV premium', image: '/cars/xpeng-g9.jpg', powertrain: 'ev',
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

  // ===== Autres modèles chinois disponibles (wandaloo Maroc) =====
  {
    slug: 'byd-sealion-7', name: 'Sealion 7', brand: 'BYD', brandSlug: 'byd',
    segment: 'SUV coupé', image: IMG + 'byd-sealion-7.jpg', powertrain: 'ev',
    price: 48000, powerHp: 313, accel0to100: 6.7, autonomyKm: 482, chargingKw: 230,
    batteryKwh: 82.5, energyCostPer100: 3.6, bootLiters: 500, seats: 5, lengthMm: 4830,
    safetyStars: 5, warrantyYears: 6, techScore: 8,
  },
  {
    slug: 'byd-atto-3-evo', name: 'Atto 3 Evo', brand: 'BYD', brandSlug: 'byd',
    segment: 'SUV compact', image: IMG + 'byd-atto-3-evo.jpg', powertrain: 'ev',
    price: 39000, powerHp: 204, accel0to100: 7.3, autonomyKm: 500, chargingKw: 150,
    batteryKwh: 60, energyCostPer100: 3.4, bootLiters: 440, seats: 5, lengthMm: 4455,
    safetyStars: 5, warrantyYears: 6, techScore: 7,
  },
  {
    slug: 'byd-seal-5-dmi', name: 'Seal 5 DM-i', brand: 'BYD', brandSlug: 'byd',
    segment: 'Berline (PHEV)', image: IMG + 'byd-seal-5-phev.jpg', powertrain: 'phev',
    price: 32000, powerHp: 200, accel0to100: 8.0, autonomyKm: 1100, chargingKw: null,
    batteryKwh: 8.3, energyCostPer100: 5.5, bootLiters: 450, seats: 5, lengthMm: 4780,
    safetyStars: 5, warrantyYears: 6, techScore: 7,
  },
  {
    slug: 'byd-atto-2', name: 'Atto 2', brand: 'BYD', brandSlug: 'byd',
    segment: 'SUV urbain (PHEV)', image: IMG + 'byd-atto-2-phev.jpg', powertrain: 'phev',
    price: 30000, powerHp: 177, accel0to100: 8.5, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 7.8, energyCostPer100: 5.5, bootLiters: 400, seats: 5, lengthMm: 4310,
    safetyStars: 5, warrantyYears: 6, techScore: 7,
  },
  {
    slug: 'mg-marvel-r', name: 'Marvel R', brand: 'MG', brandSlug: 'mg',
    segment: 'SUV électrique', image: IMG + 'mg-marvel-r.jpg', powertrain: 'ev',
    price: 42000, powerHp: 288, accel0to100: 4.9, autonomyKm: 402, chargingKw: 92,
    batteryKwh: 70, energyCostPer100: 3.6, bootLiters: 357, seats: 5, lengthMm: 4674,
    safetyStars: 5, warrantyYears: 7, techScore: 7,
  },
  {
    slug: 'mg-cyberster', name: 'Cyberster', brand: 'MG', brandSlug: 'mg',
    segment: 'Roadster électrique', image: IMG + 'mg-cyberster.jpg', powertrain: 'ev',
    price: 65000, powerHp: 503, accel0to100: 3.2, autonomyKm: 580, chargingKw: 144,
    batteryKwh: 77, energyCostPer100: 3.7, bootLiters: 249, seats: 2, lengthMm: 4535,
    safetyStars: 4, warrantyYears: 7, techScore: 7,
  },
  {
    slug: 'mg-hs', name: 'HS', brand: 'MG', brandSlug: 'mg',
    segment: 'SUV familial (essence)', image: IMG + 'mg-hs.jpg', powertrain: 'thermal',
    price: 26000, powerHp: 170, accel0to100: 9.5, autonomyKm: 1000, chargingKw: null,
    batteryKwh: null, energyCostPer100: 9.5, bootLiters: 507, seats: 5, lengthMm: 4670,
    safetyStars: 5, warrantyYears: 7, techScore: 6,
  },

  // ===== Dacia (de la Logan au Bigster hybride) =====
  {
    slug: 'dacia-logan', name: 'Logan', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'Berline', image: IMG + 'dacia-logan.jpg', powertrain: 'thermal',
    price: 14000, powerHp: 100, accel0to100: 11.5, autonomyKm: 1100, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.5, bootLiters: 528, seats: 5, lengthMm: 4359,
    safetyStars: 3, warrantyYears: 3, techScore: 4,
  },
  {
    slug: 'dacia-sandero', name: 'Sandero Streetway', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'Citadine', image: IMG + 'dacia-sandero-streetway.jpg', powertrain: 'thermal',
    price: 12500, powerHp: 90, accel0to100: 12.0, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.3, bootLiters: 328, seats: 5, lengthMm: 4088,
    safetyStars: 3, warrantyYears: 3, techScore: 4,
  },
  {
    slug: 'dacia-sandero-stepway', name: 'Sandero Stepway', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'Citadine surélevée', image: IMG + 'dacia-sandero-stepway.jpg', powertrain: 'thermal',
    price: 15000, powerHp: 110, accel0to100: 10.8, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.6, bootLiters: 328, seats: 5, lengthMm: 4099,
    safetyStars: 3, warrantyYears: 3, techScore: 4,
  },
  {
    slug: 'dacia-jogger', name: 'Jogger', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'Familiale 7 places', image: IMG + 'dacia-jogger.jpg', powertrain: 'thermal',
    price: 18000, powerHp: 110, accel0to100: 11.2, autonomyKm: 1100, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.8, bootLiters: 565, seats: 7, lengthMm: 4547,
    safetyStars: 3, warrantyYears: 3, techScore: 4,
  },
  {
    slug: 'dacia-jogger-hybrid', name: 'Jogger Hybrid', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'Familiale 7 places hybride', image: IMG + 'dacia-jogger-hev.jpg', powertrain: 'hybrid',
    price: 22000, powerHp: 140, accel0to100: 10.1, autonomyKm: 1100, chargingKw: null,
    batteryKwh: 1.2, energyCostPer100: 6.8, bootLiters: 565, seats: 7, lengthMm: 4547,
    safetyStars: 3, warrantyYears: 3, techScore: 5,
  },
  {
    slug: 'dacia-duster', name: 'Duster', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'SUV', image: IMG + 'dacia-duster.jpg', powertrain: 'thermal',
    price: 20000, powerHp: 140, accel0to100: 9.9, autonomyKm: 1100, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.0, bootLiters: 472, seats: 5, lengthMm: 4343,
    safetyStars: 3, warrantyYears: 3, techScore: 5,
  },
  {
    slug: 'dacia-spring', name: 'Spring', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'Citadine électrique', image: IMG + 'dacia-spring.jpg', powertrain: 'ev',
    price: 19000, powerHp: 65, accel0to100: 13.7, autonomyKm: 225, chargingKw: 30,
    batteryKwh: 26.8, energyCostPer100: 3.2, bootLiters: 308, seats: 5, lengthMm: 3701,
    safetyStars: 1, warrantyYears: 3, techScore: 4,
  },
  {
    slug: 'dacia-bigster', name: 'Bigster', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'Grand SUV', image: IMG + 'dacia-bigster.jpg', powertrain: 'thermal',
    price: 24000, powerHp: 140, accel0to100: 9.7, autonomyKm: 1150, chargingKw: null,
    batteryKwh: null, energyCostPer100: 7.8, bootLiters: 667, seats: 5, lengthMm: 4570,
    safetyStars: 4, warrantyYears: 3, techScore: 5,
  },
  {
    slug: 'dacia-bigster-hybrid', name: 'Bigster Hybrid', brand: 'Dacia', brandSlug: 'dacia',
    segment: 'Grand SUV hybride', image: IMG + 'dacia-bigster-hev.jpg', powertrain: 'hybrid',
    price: 27000, powerHp: 155, accel0to100: 9.0, autonomyKm: 1150, chargingKw: null,
    batteryKwh: 1.4, energyCostPer100: 6.5, bootLiters: 612, seats: 5, lengthMm: 4570,
    safetyStars: 4, warrantyYears: 3, techScore: 5,
  },

  // ===== Renault =====
  {
    slug: 'renault-clio', name: 'Clio', brand: 'Renault', brandSlug: 'renault',
    segment: 'Citadine', image: IMG + 'renault-clio.jpg', powertrain: 'thermal',
    price: 19000, powerHp: 90, accel0to100: 12.2, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.3, bootLiters: 391, seats: 5, lengthMm: 4053,
    safetyStars: 5, warrantyYears: 3, techScore: 5,
  },
  {
    slug: 'renault-clio-e-tech', name: 'Clio E-Tech', brand: 'Renault', brandSlug: 'renault',
    segment: 'Citadine hybride', image: IMG + 'renault-clio-e-tech.jpg', powertrain: 'hybrid',
    price: 24000, powerHp: 145, accel0to100: 9.3, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 1.2, energyCostPer100: 6.8, bootLiters: 391, seats: 5, lengthMm: 4053,
    safetyStars: 5, warrantyYears: 3, techScore: 6,
  },
  {
    slug: 'renault-captur', name: 'Captur', brand: 'Renault', brandSlug: 'renault',
    segment: 'SUV urbain hybride', image: IMG + 'renault-captur.jpg', powertrain: 'hybrid',
    price: 25000, powerHp: 145, accel0to100: 10.6, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 1.2, energyCostPer100: 7.0, bootLiters: 484, seats: 5, lengthMm: 4239,
    safetyStars: 5, warrantyYears: 3, techScore: 6,
  },
  {
    slug: 'renault-megane-e-tech', name: 'Mégane E-Tech', brand: 'Renault', brandSlug: 'renault',
    segment: 'Compacte électrique', image: IMG + 'renault-megane-e-tech.jpg', powertrain: 'ev',
    price: 38000, powerHp: 220, accel0to100: 7.4, autonomyKm: 470, chargingKw: 130,
    batteryKwh: 60, energyCostPer100: 3.6, bootLiters: 440, seats: 5, lengthMm: 4200,
    safetyStars: 5, warrantyYears: 3, techScore: 7,
  },
  {
    slug: 'renault-5-e-tech', name: '5 E-Tech', brand: 'Renault', brandSlug: 'renault',
    segment: 'Citadine électrique', image: IMG + 'renault-5-e-tech.jpg', powertrain: 'ev',
    price: 25000, powerHp: 150, accel0to100: 8.0, autonomyKm: 400, chargingKw: 100,
    batteryKwh: 52, energyCostPer100: 3.4, bootLiters: 326, seats: 5, lengthMm: 3922,
    safetyStars: 4, warrantyYears: 3, techScore: 7,
  },

  // ===== Peugeot =====
  {
    slug: 'peugeot-208', name: '208', brand: 'Peugeot', brandSlug: 'peugeot',
    segment: 'Citadine', image: IMG + 'peugeot-208.jpg', powertrain: 'thermal',
    price: 20000, powerHp: 100, accel0to100: 10.8, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.2, bootLiters: 311, seats: 5, lengthMm: 4055,
    safetyStars: 4, warrantyYears: 3, techScore: 6,
  },
  {
    slug: 'peugeot-e-208', name: 'e-208', brand: 'Peugeot', brandSlug: 'peugeot',
    segment: 'Citadine électrique', image: IMG + 'peugeot-e-208.jpg', powertrain: 'ev',
    price: 34000, powerHp: 156, accel0to100: 8.1, autonomyKm: 410, chargingKw: 100,
    batteryKwh: 51, energyCostPer100: 3.5, bootLiters: 311, seats: 5, lengthMm: 4055,
    safetyStars: 4, warrantyYears: 3, techScore: 6,
  },
  {
    slug: 'peugeot-2008', name: '2008', brand: 'Peugeot', brandSlug: 'peugeot',
    segment: 'SUV urbain', image: IMG + 'peugeot-2008.jpg', powertrain: 'thermal',
    price: 25000, powerHp: 130, accel0to100: 9.6, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.0, bootLiters: 434, seats: 5, lengthMm: 4304,
    safetyStars: 4, warrantyYears: 3, techScore: 6,
  },
  {
    slug: 'peugeot-3008', name: '3008', brand: 'Peugeot', brandSlug: 'peugeot',
    segment: 'SUV familial hybride', image: IMG + 'peugeot-3008.jpg', powertrain: 'hybrid',
    price: 38000, powerHp: 195, accel0to100: 8.9, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 1.8, energyCostPer100: 6.9, bootLiters: 520, seats: 5, lengthMm: 4542,
    safetyStars: 5, warrantyYears: 3, techScore: 7,
  },

  // ===== Toyota =====
  {
    slug: 'toyota-yaris', name: 'Yaris Hybride', brand: 'Toyota', brandSlug: 'toyota',
    segment: 'Citadine hybride', image: IMG + 'toyota-yaris-hev.jpg', powertrain: 'hybrid',
    price: 22000, powerHp: 116, accel0to100: 9.2, autonomyKm: 1100, chargingKw: null,
    batteryKwh: 0.8, energyCostPer100: 6.2, bootLiters: 286, seats: 5, lengthMm: 3940,
    safetyStars: 5, warrantyYears: 5, techScore: 6,
  },
  {
    slug: 'toyota-yaris-cross', name: 'Yaris Cross', brand: 'Toyota', brandSlug: 'toyota',
    segment: 'SUV urbain hybride', image: IMG + 'toyota-yaris-cross.jpg', powertrain: 'hybrid',
    price: 26000, powerHp: 130, accel0to100: 9.7, autonomyKm: 1100, chargingKw: null,
    batteryKwh: 0.8, energyCostPer100: 6.3, bootLiters: 397, seats: 5, lengthMm: 4180,
    safetyStars: 5, warrantyYears: 5, techScore: 6,
  },
  {
    slug: 'toyota-corolla', name: 'Corolla Hybride', brand: 'Toyota', brandSlug: 'toyota',
    segment: 'Compacte hybride', image: IMG + 'toyota-corolla-prestige.jpg', powertrain: 'hybrid',
    price: 28000, powerHp: 140, accel0to100: 9.1, autonomyKm: 1100, chargingKw: null,
    batteryKwh: 1.0, energyCostPer100: 6.4, bootLiters: 361, seats: 5, lengthMm: 4630,
    safetyStars: 5, warrantyYears: 5, techScore: 6,
  },
  {
    slug: 'toyota-c-hr', name: 'C-HR Hybride', brand: 'Toyota', brandSlug: 'toyota',
    segment: 'SUV compact hybride', image: IMG + 'toyota-c-hr.jpg', powertrain: 'hybrid',
    price: 32000, powerHp: 140, accel0to100: 9.9, autonomyKm: 1050, chargingKw: null,
    batteryKwh: 1.0, energyCostPer100: 6.5, bootLiters: 388, seats: 5, lengthMm: 4360,
    safetyStars: 5, warrantyYears: 5, techScore: 7,
  },
  {
    slug: 'toyota-rav4', name: 'RAV4 Hybride', brand: 'Toyota', brandSlug: 'toyota',
    segment: 'SUV familial hybride', image: IMG + 'toyota-rav-4.jpg', powertrain: 'hybrid',
    price: 42000, powerHp: 218, accel0to100: 8.1, autonomyKm: 1050, chargingKw: null,
    batteryKwh: 1.6, energyCostPer100: 6.8, bootLiters: 580, seats: 5, lengthMm: 4600,
    safetyStars: 5, warrantyYears: 5, techScore: 7,
  },

  // ===== Volkswagen =====
  {
    slug: 'vw-golf', name: 'Golf', brand: 'Volkswagen', brandSlug: 'volkswagen',
    segment: 'Compacte', image: IMG + 'volkswagen-golf.jpg', powertrain: 'thermal',
    price: 30000, powerHp: 150, accel0to100: 8.5, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 7.5, bootLiters: 381, seats: 5, lengthMm: 4284,
    safetyStars: 5, warrantyYears: 2, techScore: 7,
  },
  {
    slug: 'vw-t-roc', name: 'T-Roc', brand: 'Volkswagen', brandSlug: 'volkswagen',
    segment: 'SUV compact', image: IMG + 'volkswagen-t-roc.jpg', powertrain: 'thermal',
    price: 32000, powerHp: 150, accel0to100: 8.4, autonomyKm: 1000, chargingKw: null,
    batteryKwh: null, energyCostPer100: 7.6, bootLiters: 445, seats: 5, lengthMm: 4234,
    safetyStars: 5, warrantyYears: 2, techScore: 6,
  },
  {
    slug: 'vw-tiguan', name: 'Tiguan', brand: 'Volkswagen', brandSlug: 'volkswagen',
    segment: 'SUV familial', image: IMG + 'volkswagen-tiguan.jpg', powertrain: 'thermal',
    price: 40000, powerHp: 150, accel0to100: 9.3, autonomyKm: 1000, chargingKw: null,
    batteryKwh: null, energyCostPer100: 7.8, bootLiters: 652, seats: 5, lengthMm: 4539,
    safetyStars: 5, warrantyYears: 2, techScore: 7,
  },
  {
    slug: 'vw-t-cross', name: 'T-Cross', brand: 'Volkswagen', brandSlug: 'volkswagen',
    segment: 'SUV urbain', image: IMG + 'volkswagen-t-cross.jpg', powertrain: 'thermal',
    price: 26000, powerHp: 115, accel0to100: 10.2, autonomyKm: 1000, chargingKw: null,
    batteryKwh: null, energyCostPer100: 7.4, bootLiters: 385, seats: 5, lengthMm: 4127,
    safetyStars: 5, warrantyYears: 2, techScore: 6,
  },

  // ===== Hyundai =====
  {
    slug: 'hyundai-kona', name: 'Kona Hybride', brand: 'Hyundai', brandSlug: 'hyundai',
    segment: 'SUV urbain hybride', image: IMG + 'hyundai-kona.jpg', powertrain: 'hybrid',
    price: 30000, powerHp: 141, accel0to100: 10.6, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 1.3, energyCostPer100: 6.5, bootLiters: 466, seats: 5, lengthMm: 4355,
    safetyStars: 5, warrantyYears: 5, techScore: 6,
  },
  {
    slug: 'hyundai-tucson', name: 'Tucson Hybride', brand: 'Hyundai', brandSlug: 'hyundai',
    segment: 'SUV familial hybride', image: IMG + 'hyundai-tucson.jpg', powertrain: 'hybrid',
    price: 38000, powerHp: 215, accel0to100: 8.0, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 1.5, energyCostPer100: 6.9, bootLiters: 620, seats: 5, lengthMm: 4510,
    safetyStars: 5, warrantyYears: 5, techScore: 7,
  },
  {
    slug: 'hyundai-i20', name: 'i20', brand: 'Hyundai', brandSlug: 'hyundai',
    segment: 'Citadine', image: IMG + 'hyundai-i20.jpg', powertrain: 'thermal',
    price: 19000, powerHp: 100, accel0to100: 10.4, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 7.8, bootLiters: 352, seats: 5, lengthMm: 4040,
    safetyStars: 4, warrantyYears: 5, techScore: 5,
  },

  // ===== Citroën =====
  {
    slug: 'citroen-c3', name: 'C3', brand: 'Citroën', brandSlug: 'citroen',
    segment: 'Citadine', image: IMG + 'citroen-c3.jpg', powertrain: 'thermal',
    price: 15000, powerHp: 100, accel0to100: 10.6, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.0, bootLiters: 310, seats: 5, lengthMm: 4015,
    safetyStars: 4, warrantyYears: 2, techScore: 4,
  },
  {
    slug: 'citroen-c3-aircross', name: 'C3 Aircross', brand: 'Citroën', brandSlug: 'citroen',
    segment: 'SUV urbain', image: IMG + 'citroen-c3-aircross.jpg', powertrain: 'thermal',
    price: 20000, powerHp: 130, accel0to100: 9.9, autonomyKm: 1050, chargingKw: null,
    batteryKwh: null, energyCostPer100: 8.1, bootLiters: 460, seats: 5, lengthMm: 4390,
    safetyStars: 4, warrantyYears: 2, techScore: 5,
  },
  {
    slug: 'citroen-c5-aircross', name: 'C5 Aircross Hybride', brand: 'Citroën', brandSlug: 'citroen',
    segment: 'SUV familial hybride', image: IMG + 'citroen-c5-aircross.jpg', powertrain: 'hybrid',
    price: 36000, powerHp: 180, accel0to100: 8.7, autonomyKm: 1000, chargingKw: null,
    batteryKwh: 1.5, energyCostPer100: 7.0, bootLiters: 580, seats: 5, lengthMm: 4500,
    safetyStars: 5, warrantyYears: 2, techScore: 6,
  },
];

export function getCar(slug: string): Car | undefined {
  return CARS.find((c) => c.slug === slug);
}

/** Libellé « Marque Modèle » sans répéter la marque quand le nom la contient déjà. */
export function carLabel(car: Car): string {
  return car.name.toLowerCase().startsWith(car.brand.toLowerCase())
    ? car.name
    : `${car.brand} ${car.name}`;
}

export const POWERTRAIN_LABELS: Record<Powertrain, string> = {
  ev: '100 % électrique',
  phev: 'Hybride rechargeable',
  hybrid: 'Hybride',
  thermal: 'Thermique',
};

/** Origine de la marque, pour distinguer chinoises et rivales dans l'UI. */
export const CHINESE_BRANDS = new Set([
  'BYD', 'MG', 'Chery', 'Omoda', 'Jaecoo', 'Geely', 'GWM', 'Zeekr', 'XPeng',
]);

export function isChinese(car: Car): boolean {
  return CHINESE_BRANDS.has(car.brand);
}
