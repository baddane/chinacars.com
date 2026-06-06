export interface CarModel {
  id: string;
  brand: string;
  model: string;
  year: number;
  segment: string;
  engine: string;
  image: string;
  specs: {
    prix: number;
    puissance: number;
    couple: number;
    vitesseMax: number;
    acceleration: number;
    autonomie: number | null;
    consommation: number;
    coffre: number;
    garantie: number;
    poids: number;
  };
  ratings: {
    fiabilite: number;
    robustesse: number;
    disponibilitePieces: number;
    avisUsagers: number;
    prixRevente: number;
    puissanceMoteur: number;
    securite: number;
    confort: number;
    technologie: number;
    rapportQualitePrix: number;
  };
}

export const RATING_LABELS: Record<keyof CarModel['ratings'], string> = {
  fiabilite: 'Fiabilité',
  robustesse: 'Robustesse',
  disponibilitePieces: 'Disponibilité pièces',
  avisUsagers: 'Avis usagers',
  prixRevente: 'Prix de revente',
  puissanceMoteur: 'Puissance moteur',
  securite: 'Sécurité',
  confort: 'Confort',
  technologie: 'Technologie',
  rapportQualitePrix: 'Rapport qualité-prix',
};

export const SPEC_LABELS: Record<keyof CarModel['specs'], { label: string; unit: string; higherIsBetter: boolean }> = {
  prix: { label: 'Prix', unit: 'MAD', higherIsBetter: false },
  puissance: { label: 'Puissance', unit: 'ch', higherIsBetter: true },
  couple: { label: 'Couple', unit: 'Nm', higherIsBetter: true },
  vitesseMax: { label: 'Vitesse max', unit: 'km/h', higherIsBetter: true },
  acceleration: { label: '0-100 km/h', unit: 's', higherIsBetter: false },
  autonomie: { label: 'Autonomie', unit: 'km', higherIsBetter: true },
  consommation: { label: 'Consommation', unit: 'L/100km', higherIsBetter: false },
  coffre: { label: 'Coffre', unit: 'L', higherIsBetter: true },
  garantie: { label: 'Garantie', unit: 'ans', higherIsBetter: true },
  poids: { label: 'Poids', unit: 'kg', higherIsBetter: false },
};

export const carsDatabase: CarModel[] = [
  // ──── BYD ────
  {
    id: 'byd-seal',
    brand: 'BYD',
    model: 'Seal',
    year: 2025,
    segment: 'Berline',
    engine: 'Électrique',
    image: '/images/cars/byd-seal.jpg',
    specs: { prix: 450000, puissance: 313, couple: 360, vitesseMax: 180, acceleration: 5.9, autonomie: 570, consommation: 0, coffre: 400, garantie: 6, poids: 1885 },
    ratings: { fiabilite: 82, robustesse: 80, disponibilitePieces: 65, avisUsagers: 85, prixRevente: 72, puissanceMoteur: 88, securite: 90, confort: 85, technologie: 92, rapportQualitePrix: 88 },
  },
  {
    id: 'byd-atto3',
    brand: 'BYD',
    model: 'Atto 3',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/byd-atto3.jpg',
    specs: { prix: 380000, puissance: 204, couple: 310, vitesseMax: 160, acceleration: 7.3, autonomie: 420, consommation: 0, coffre: 440, garantie: 6, poids: 1750 },
    ratings: { fiabilite: 80, robustesse: 78, disponibilitePieces: 63, avisUsagers: 82, prixRevente: 70, puissanceMoteur: 72, securite: 88, confort: 82, technologie: 88, rapportQualitePrix: 85 },
  },
  {
    id: 'byd-dolphin',
    brand: 'BYD',
    model: 'Dolphin',
    year: 2025,
    segment: 'Citadine',
    engine: 'Électrique',
    image: '/images/cars/byd-dolphin.jpg',
    specs: { prix: 280000, puissance: 177, couple: 290, vitesseMax: 160, acceleration: 7.0, autonomie: 427, consommation: 0, coffre: 345, garantie: 6, poids: 1520 },
    ratings: { fiabilite: 83, robustesse: 76, disponibilitePieces: 64, avisUsagers: 86, prixRevente: 73, puissanceMoteur: 65, securite: 85, confort: 78, technologie: 86, rapportQualitePrix: 92 },
  },
  {
    id: 'byd-han',
    brand: 'BYD',
    model: 'Han EV',
    year: 2025,
    segment: 'Berline',
    engine: 'Électrique',
    image: '/images/cars/byd-han.jpg',
    specs: { prix: 550000, puissance: 517, couple: 700, vitesseMax: 180, acceleration: 3.9, autonomie: 521, consommation: 0, coffre: 410, garantie: 6, poids: 2150 },
    ratings: { fiabilite: 84, robustesse: 85, disponibilitePieces: 60, avisUsagers: 87, prixRevente: 68, puissanceMoteur: 95, securite: 92, confort: 90, technologie: 94, rapportQualitePrix: 82 },
  },
  {
    id: 'byd-tang',
    brand: 'BYD',
    model: 'Tang',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride rechargeable',
    image: '/images/cars/byd-tang.jpg',
    specs: { prix: 620000, puissance: 510, couple: 680, vitesseMax: 180, acceleration: 4.4, autonomie: 100, consommation: 1.5, coffre: 940, garantie: 6, poids: 2430 },
    ratings: { fiabilite: 80, robustesse: 84, disponibilitePieces: 58, avisUsagers: 80, prixRevente: 65, puissanceMoteur: 93, securite: 91, confort: 88, technologie: 90, rapportQualitePrix: 78 },
  },
  {
    id: 'byd-yuan-plus',
    brand: 'BYD',
    model: 'Yuan Plus',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/byd-yuan-plus.jpg',
    specs: { prix: 350000, puissance: 204, couple: 310, vitesseMax: 160, acceleration: 7.3, autonomie: 430, consommation: 0, coffre: 440, garantie: 6, poids: 1680 },
    ratings: { fiabilite: 81, robustesse: 79, disponibilitePieces: 62, avisUsagers: 83, prixRevente: 71, puissanceMoteur: 72, securite: 87, confort: 80, technologie: 87, rapportQualitePrix: 87 },
  },
  // ──── MG ────
  {
    id: 'mg-mg4',
    brand: 'MG',
    model: 'MG4 Electric',
    year: 2025,
    segment: 'Citadine',
    engine: 'Électrique',
    image: '/images/cars/mg-mg4.jpg',
    specs: { prix: 310000, puissance: 203, couple: 250, vitesseMax: 160, acceleration: 7.7, autonomie: 450, consommation: 0, coffre: 363, garantie: 7, poids: 1655 },
    ratings: { fiabilite: 78, robustesse: 75, disponibilitePieces: 72, avisUsagers: 80, prixRevente: 68, puissanceMoteur: 70, securite: 82, confort: 75, technologie: 80, rapportQualitePrix: 90 },
  },
  {
    id: 'mg-zs-ev',
    brand: 'MG',
    model: 'ZS EV',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/mg-zs-ev.jpg',
    specs: { prix: 330000, puissance: 177, couple: 280, vitesseMax: 175, acceleration: 8.2, autonomie: 440, consommation: 0, coffre: 448, garantie: 7, poids: 1610 },
    ratings: { fiabilite: 76, robustesse: 74, disponibilitePieces: 74, avisUsagers: 78, prixRevente: 66, puissanceMoteur: 62, securite: 80, confort: 73, technologie: 76, rapportQualitePrix: 88 },
  },
  {
    id: 'mg-hs',
    brand: 'MG',
    model: 'HS',
    year: 2025,
    segment: 'SUV',
    engine: 'Thermique',
    image: '/images/cars/mg-hs.jpg',
    specs: { prix: 280000, puissance: 162, couple: 275, vitesseMax: 190, acceleration: 9.9, autonomie: null, consommation: 7.8, coffre: 463, garantie: 7, poids: 1550 },
    ratings: { fiabilite: 74, robustesse: 76, disponibilitePieces: 75, avisUsagers: 75, prixRevente: 65, puissanceMoteur: 58, securite: 78, confort: 74, technologie: 72, rapportQualitePrix: 85 },
  },
  {
    id: 'mg-marvel-r',
    brand: 'MG',
    model: 'Marvel R',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/mg-marvel-r.jpg',
    specs: { prix: 420000, puissance: 288, couple: 665, vitesseMax: 200, acceleration: 4.9, autonomie: 402, consommation: 0, coffre: 357, garantie: 7, poids: 1920 },
    ratings: { fiabilite: 75, robustesse: 77, disponibilitePieces: 68, avisUsagers: 76, prixRevente: 62, puissanceMoteur: 82, securite: 84, confort: 80, technologie: 82, rapportQualitePrix: 78 },
  },
  // ──── Chery ────
  {
    id: 'chery-tiggo4-pro',
    brand: 'Chery',
    model: 'Tiggo 4 Pro',
    year: 2025,
    segment: 'SUV',
    engine: 'Thermique',
    image: '/images/cars/chery-tiggo4.jpg',
    specs: { prix: 220000, puissance: 147, couple: 210, vitesseMax: 185, acceleration: 10.5, autonomie: null, consommation: 7.2, coffre: 340, garantie: 5, poids: 1375 },
    ratings: { fiabilite: 72, robustesse: 73, disponibilitePieces: 70, avisUsagers: 74, prixRevente: 60, puissanceMoteur: 52, securite: 75, confort: 70, technologie: 72, rapportQualitePrix: 86 },
  },
  {
    id: 'chery-tiggo7-pro',
    brand: 'Chery',
    model: 'Tiggo 7 Pro',
    year: 2025,
    segment: 'SUV',
    engine: 'Thermique',
    image: '/images/cars/chery-tiggo7.jpg',
    specs: { prix: 280000, puissance: 185, couple: 275, vitesseMax: 190, acceleration: 9.0, autonomie: null, consommation: 7.5, coffre: 475, garantie: 5, poids: 1545 },
    ratings: { fiabilite: 74, robustesse: 76, disponibilitePieces: 68, avisUsagers: 76, prixRevente: 62, puissanceMoteur: 65, securite: 80, confort: 76, technologie: 78, rapportQualitePrix: 84 },
  },
  {
    id: 'chery-tiggo8-pro',
    brand: 'Chery',
    model: 'Tiggo 8 Pro',
    year: 2025,
    segment: 'SUV',
    engine: 'Thermique',
    image: '/images/cars/chery-tiggo8.jpg',
    specs: { prix: 350000, puissance: 197, couple: 290, vitesseMax: 195, acceleration: 8.5, autonomie: null, consommation: 8.1, coffre: 892, garantie: 5, poids: 1695 },
    ratings: { fiabilite: 73, robustesse: 78, disponibilitePieces: 66, avisUsagers: 77, prixRevente: 61, puissanceMoteur: 68, securite: 82, confort: 80, technologie: 80, rapportQualitePrix: 82 },
  },
  // ──── Geely ────
  {
    id: 'geely-coolray',
    brand: 'Geely',
    model: 'Coolray',
    year: 2025,
    segment: 'SUV',
    engine: 'Thermique',
    image: '/images/cars/geely-coolray.jpg',
    specs: { prix: 250000, puissance: 177, couple: 255, vitesseMax: 195, acceleration: 8.4, autonomie: null, consommation: 7.0, coffre: 330, garantie: 5, poids: 1415 },
    ratings: { fiabilite: 76, robustesse: 75, disponibilitePieces: 62, avisUsagers: 78, prixRevente: 63, puissanceMoteur: 63, securite: 82, confort: 76, technologie: 80, rapportQualitePrix: 85 },
  },
  {
    id: 'geely-azkarra',
    brand: 'Geely',
    model: 'Azkarra',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride',
    image: '/images/cars/geely-azkarra.jpg',
    specs: { prix: 340000, puissance: 238, couple: 350, vitesseMax: 200, acceleration: 7.1, autonomie: null, consommation: 5.5, coffre: 453, garantie: 5, poids: 1700 },
    ratings: { fiabilite: 77, robustesse: 78, disponibilitePieces: 60, avisUsagers: 79, prixRevente: 64, puissanceMoteur: 76, securite: 85, confort: 80, technologie: 82, rapportQualitePrix: 80 },
  },
  {
    id: 'geely-monjaro',
    brand: 'Geely',
    model: 'Monjaro',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride rechargeable',
    image: '/images/cars/geely-monjaro.jpg',
    specs: { prix: 480000, puissance: 326, couple: 545, vitesseMax: 200, acceleration: 5.9, autonomie: 85, consommation: 1.2, coffre: 520, garantie: 5, poids: 2050 },
    ratings: { fiabilite: 78, robustesse: 80, disponibilitePieces: 58, avisUsagers: 80, prixRevente: 66, puissanceMoteur: 85, securite: 87, confort: 84, technologie: 86, rapportQualitePrix: 79 },
  },
  // ──── GWM ────
  {
    id: 'gwm-ora-03',
    brand: 'GWM',
    model: 'ORA 03',
    year: 2025,
    segment: 'Citadine',
    engine: 'Électrique',
    image: '/images/cars/gwm-ora03.jpg',
    specs: { prix: 290000, puissance: 171, couple: 250, vitesseMax: 160, acceleration: 8.3, autonomie: 420, consommation: 0, coffre: 228, garantie: 5, poids: 1580 },
    ratings: { fiabilite: 74, robustesse: 72, disponibilitePieces: 60, avisUsagers: 76, prixRevente: 60, puissanceMoteur: 58, securite: 80, confort: 72, technologie: 78, rapportQualitePrix: 82 },
  },
  {
    id: 'gwm-wey-coffee01',
    brand: 'GWM',
    model: 'Wey Coffee 01',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride rechargeable',
    image: '/images/cars/gwm-wey-coffee01.jpg',
    specs: { prix: 500000, puissance: 476, couple: 615, vitesseMax: 235, acceleration: 5.0, autonomie: 146, consommation: 1.3, coffre: 505, garantie: 5, poids: 2280 },
    ratings: { fiabilite: 75, robustesse: 80, disponibilitePieces: 55, avisUsagers: 78, prixRevente: 60, puissanceMoteur: 90, securite: 88, confort: 86, technologie: 88, rapportQualitePrix: 76 },
  },
  // ──── Zeekr ────
  {
    id: 'zeekr-001',
    brand: 'Zeekr',
    model: '001',
    year: 2025,
    segment: 'Berline',
    engine: 'Électrique',
    image: '/images/cars/zeekr-001.jpg',
    specs: { prix: 580000, puissance: 544, couple: 686, vitesseMax: 200, acceleration: 3.8, autonomie: 620, consommation: 0, coffre: 556, garantie: 5, poids: 2280 },
    ratings: { fiabilite: 80, robustesse: 82, disponibilitePieces: 50, avisUsagers: 84, prixRevente: 65, puissanceMoteur: 96, securite: 90, confort: 88, technologie: 94, rapportQualitePrix: 80 },
  },
  {
    id: 'zeekr-x',
    brand: 'Zeekr',
    model: 'X',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/zeekr-x.jpg',
    specs: { prix: 420000, puissance: 272, couple: 343, vitesseMax: 180, acceleration: 5.8, autonomie: 440, consommation: 0, coffre: 362, garantie: 5, poids: 1810 },
    ratings: { fiabilite: 79, robustesse: 80, disponibilitePieces: 48, avisUsagers: 82, prixRevente: 62, puissanceMoteur: 80, securite: 88, confort: 84, technologie: 90, rapportQualitePrix: 82 },
  },
  // ──── NIO ────
  {
    id: 'nio-et5',
    brand: 'NIO',
    model: 'ET5',
    year: 2025,
    segment: 'Berline',
    engine: 'Électrique',
    image: '/images/cars/nio-et5.jpg',
    specs: { prix: 520000, puissance: 490, couple: 700, vitesseMax: 200, acceleration: 4.0, autonomie: 560, consommation: 0, coffre: 386, garantie: 5, poids: 2140 },
    ratings: { fiabilite: 78, robustesse: 80, disponibilitePieces: 45, avisUsagers: 83, prixRevente: 60, puissanceMoteur: 92, securite: 88, confort: 86, technologie: 95, rapportQualitePrix: 75 },
  },
  {
    id: 'nio-el6',
    brand: 'NIO',
    model: 'EL6',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/nio-el6.jpg',
    specs: { prix: 600000, puissance: 480, couple: 700, vitesseMax: 200, acceleration: 4.5, autonomie: 520, consommation: 0, coffre: 579, garantie: 5, poids: 2260 },
    ratings: { fiabilite: 77, robustesse: 81, disponibilitePieces: 44, avisUsagers: 82, prixRevente: 58, puissanceMoteur: 90, securite: 89, confort: 88, technologie: 94, rapportQualitePrix: 72 },
  },
  // ──── XPeng ────
  {
    id: 'xpeng-g6',
    brand: 'XPeng',
    model: 'G6',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/xpeng-g6.jpg',
    specs: { prix: 480000, puissance: 296, couple: 440, vitesseMax: 202, acceleration: 5.9, autonomie: 570, consommation: 0, coffre: 571, garantie: 5, poids: 2015 },
    ratings: { fiabilite: 76, robustesse: 78, disponibilitePieces: 42, avisUsagers: 80, prixRevente: 58, puissanceMoteur: 84, securite: 86, confort: 82, technologie: 92, rapportQualitePrix: 80 },
  },
  {
    id: 'xpeng-p7',
    brand: 'XPeng',
    model: 'P7',
    year: 2025,
    segment: 'Berline',
    engine: 'Électrique',
    image: '/images/cars/xpeng-p7.jpg',
    specs: { prix: 500000, puissance: 308, couple: 440, vitesseMax: 200, acceleration: 6.7, autonomie: 610, consommation: 0, coffre: 440, garantie: 5, poids: 1990 },
    ratings: { fiabilite: 75, robustesse: 77, disponibilitePieces: 40, avisUsagers: 79, prixRevente: 56, puissanceMoteur: 85, securite: 84, confort: 80, technologie: 90, rapportQualitePrix: 78 },
  },
  // ──── Leapmotor ────
  {
    id: 'leapmotor-c10',
    brand: 'Leapmotor',
    model: 'C10',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/leapmotor-c10.jpg',
    specs: { prix: 350000, puissance: 231, couple: 320, vitesseMax: 170, acceleration: 7.5, autonomie: 420, consommation: 0, coffre: 435, garantie: 5, poids: 1830 },
    ratings: { fiabilite: 72, robustesse: 74, disponibilitePieces: 50, avisUsagers: 74, prixRevente: 55, puissanceMoteur: 72, securite: 82, confort: 76, technologie: 80, rapportQualitePrix: 86 },
  },
  {
    id: 'leapmotor-t03',
    brand: 'Leapmotor',
    model: 'T03',
    year: 2025,
    segment: 'Citadine',
    engine: 'Électrique',
    image: '/images/cars/leapmotor-t03.jpg',
    specs: { prix: 180000, puissance: 95, couple: 158, vitesseMax: 100, acceleration: 12.0, autonomie: 265, consommation: 0, coffre: 210, garantie: 5, poids: 1140 },
    ratings: { fiabilite: 70, robustesse: 68, disponibilitePieces: 52, avisUsagers: 72, prixRevente: 50, puissanceMoteur: 30, securite: 72, confort: 62, technologie: 68, rapportQualitePrix: 90 },
  },
  // ──── CONCURRENTS EUROPÉENS / JAPONAIS / CORÉENS ────
  // Dacia
  {
    id: 'dacia-duster',
    brand: 'Dacia',
    model: 'Duster 2025',
    year: 2025,
    segment: 'SUV',
    engine: 'Thermique',
    image: '/images/cars/dacia-duster.jpg',
    specs: { prix: 250000, puissance: 130, couple: 230, vitesseMax: 185, acceleration: 11.0, autonomie: null, consommation: 6.5, coffre: 478, garantie: 3, poids: 1350 },
    ratings: { fiabilite: 80, robustesse: 78, disponibilitePieces: 92, avisUsagers: 82, prixRevente: 78, puissanceMoteur: 45, securite: 76, confort: 68, technologie: 62, rapportQualitePrix: 92 },
  },
  {
    id: 'dacia-sandero',
    brand: 'Dacia',
    model: 'Sandero Stepway',
    year: 2025,
    segment: 'Citadine',
    engine: 'Thermique',
    image: '/images/cars/dacia-sandero.jpg',
    specs: { prix: 170000, puissance: 110, couple: 200, vitesseMax: 185, acceleration: 10.7, autonomie: null, consommation: 5.8, coffre: 410, garantie: 3, poids: 1140 },
    ratings: { fiabilite: 82, robustesse: 75, disponibilitePieces: 95, avisUsagers: 84, prixRevente: 82, puissanceMoteur: 38, securite: 72, confort: 65, technologie: 58, rapportQualitePrix: 95 },
  },
  {
    id: 'dacia-spring',
    brand: 'Dacia',
    model: 'Spring Electric',
    year: 2025,
    segment: 'Citadine',
    engine: 'Électrique',
    image: '/images/cars/dacia-spring.jpg',
    specs: { prix: 200000, puissance: 65, couple: 113, vitesseMax: 125, acceleration: 13.7, autonomie: 225, consommation: 0, coffre: 308, garantie: 3, poids: 1035 },
    ratings: { fiabilite: 76, robustesse: 68, disponibilitePieces: 90, avisUsagers: 70, prixRevente: 65, puissanceMoteur: 20, securite: 68, confort: 55, technologie: 55, rapportQualitePrix: 82 },
  },
  // Renault
  {
    id: 'renault-megane-e-tech',
    brand: 'Renault',
    model: 'Mégane E-Tech',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/renault-megane-etech.jpg',
    specs: { prix: 430000, puissance: 220, couple: 300, vitesseMax: 160, acceleration: 7.4, autonomie: 450, consommation: 0, coffre: 440, garantie: 3, poids: 1636 },
    ratings: { fiabilite: 78, robustesse: 80, disponibilitePieces: 92, avisUsagers: 80, prixRevente: 72, puissanceMoteur: 70, securite: 85, confort: 82, technologie: 84, rapportQualitePrix: 76 },
  },
  {
    id: 'renault-austral',
    brand: 'Renault',
    model: 'Austral',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride',
    image: '/images/cars/renault-austral.jpg',
    specs: { prix: 380000, puissance: 200, couple: 205, vitesseMax: 180, acceleration: 8.4, autonomie: null, consommation: 4.6, coffre: 500, garantie: 3, poids: 1520 },
    ratings: { fiabilite: 76, robustesse: 80, disponibilitePieces: 93, avisUsagers: 78, prixRevente: 72, puissanceMoteur: 68, securite: 86, confort: 84, technologie: 82, rapportQualitePrix: 75 },
  },
  // Peugeot
  {
    id: 'peugeot-e-2008',
    brand: 'Peugeot',
    model: 'E-2008',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/peugeot-e2008.jpg',
    specs: { prix: 420000, puissance: 156, couple: 260, vitesseMax: 150, acceleration: 8.7, autonomie: 345, consommation: 0, coffre: 434, garantie: 3, poids: 1612 },
    ratings: { fiabilite: 74, robustesse: 78, disponibilitePieces: 90, avisUsagers: 76, prixRevente: 70, puissanceMoteur: 55, securite: 84, confort: 80, technologie: 80, rapportQualitePrix: 70 },
  },
  {
    id: 'peugeot-3008',
    brand: 'Peugeot',
    model: '3008',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride',
    image: '/images/cars/peugeot-3008.jpg',
    specs: { prix: 450000, puissance: 225, couple: 360, vitesseMax: 190, acceleration: 7.9, autonomie: null, consommation: 5.2, coffre: 520, garantie: 3, poids: 1670 },
    ratings: { fiabilite: 75, robustesse: 82, disponibilitePieces: 92, avisUsagers: 80, prixRevente: 76, puissanceMoteur: 72, securite: 88, confort: 86, technologie: 84, rapportQualitePrix: 74 },
  },
  // Volkswagen
  {
    id: 'vw-id4',
    brand: 'Volkswagen',
    model: 'ID.4',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/vw-id4.jpg',
    specs: { prix: 500000, puissance: 286, couple: 545, vitesseMax: 180, acceleration: 6.7, autonomie: 520, consommation: 0, coffre: 543, garantie: 3, poids: 2124 },
    ratings: { fiabilite: 78, robustesse: 84, disponibilitePieces: 90, avisUsagers: 78, prixRevente: 72, puissanceMoteur: 80, securite: 90, confort: 84, technologie: 82, rapportQualitePrix: 70 },
  },
  {
    id: 'vw-id3',
    brand: 'Volkswagen',
    model: 'ID.3',
    year: 2025,
    segment: 'Citadine',
    engine: 'Électrique',
    image: '/images/cars/vw-id3.jpg',
    specs: { prix: 420000, puissance: 204, couple: 310, vitesseMax: 160, acceleration: 7.3, autonomie: 426, consommation: 0, coffre: 385, garantie: 3, poids: 1805 },
    ratings: { fiabilite: 76, robustesse: 82, disponibilitePieces: 90, avisUsagers: 75, prixRevente: 68, puissanceMoteur: 70, securite: 87, confort: 80, technologie: 80, rapportQualitePrix: 68 },
  },
  // Toyota
  {
    id: 'toyota-rav4-hybrid',
    brand: 'Toyota',
    model: 'RAV4 Hybride',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride',
    image: '/images/cars/toyota-rav4.jpg',
    specs: { prix: 450000, puissance: 222, couple: 221, vitesseMax: 180, acceleration: 8.1, autonomie: null, consommation: 4.8, coffre: 580, garantie: 5, poids: 1670 },
    ratings: { fiabilite: 92, robustesse: 88, disponibilitePieces: 95, avisUsagers: 88, prixRevente: 90, puissanceMoteur: 70, securite: 90, confort: 82, technologie: 76, rapportQualitePrix: 78 },
  },
  {
    id: 'toyota-corolla-cross',
    brand: 'Toyota',
    model: 'Corolla Cross',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride',
    image: '/images/cars/toyota-corolla-cross.jpg',
    specs: { prix: 380000, puissance: 197, couple: 190, vitesseMax: 180, acceleration: 8.1, autonomie: null, consommation: 4.5, coffre: 433, garantie: 5, poids: 1465 },
    ratings: { fiabilite: 90, robustesse: 86, disponibilitePieces: 95, avisUsagers: 86, prixRevente: 88, puissanceMoteur: 65, securite: 88, confort: 78, technologie: 72, rapportQualitePrix: 80 },
  },
  {
    id: 'toyota-yaris-cross',
    brand: 'Toyota',
    model: 'Yaris Cross',
    year: 2025,
    segment: 'Citadine',
    engine: 'Hybride',
    image: '/images/cars/toyota-yaris-cross.jpg',
    specs: { prix: 300000, puissance: 130, couple: 185, vitesseMax: 170, acceleration: 10.7, autonomie: null, consommation: 4.4, coffre: 397, garantie: 5, poids: 1250 },
    ratings: { fiabilite: 91, robustesse: 84, disponibilitePieces: 95, avisUsagers: 85, prixRevente: 88, puissanceMoteur: 45, securite: 86, confort: 74, technologie: 70, rapportQualitePrix: 82 },
  },
  // Hyundai
  {
    id: 'hyundai-tucson',
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride',
    image: '/images/cars/hyundai-tucson.jpg',
    specs: { prix: 400000, puissance: 230, couple: 350, vitesseMax: 193, acceleration: 8.0, autonomie: null, consommation: 5.3, coffre: 620, garantie: 5, poids: 1630 },
    ratings: { fiabilite: 84, robustesse: 84, disponibilitePieces: 88, avisUsagers: 85, prixRevente: 80, puissanceMoteur: 74, securite: 88, confort: 84, technologie: 85, rapportQualitePrix: 82 },
  },
  {
    id: 'hyundai-kona-ev',
    brand: 'Hyundai',
    model: 'Kona Electric',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/hyundai-kona-ev.jpg',
    specs: { prix: 400000, puissance: 218, couple: 255, vitesseMax: 172, acceleration: 7.4, autonomie: 490, consommation: 0, coffre: 466, garantie: 5, poids: 1740 },
    ratings: { fiabilite: 82, robustesse: 82, disponibilitePieces: 86, avisUsagers: 84, prixRevente: 76, puissanceMoteur: 70, securite: 86, confort: 80, technologie: 84, rapportQualitePrix: 82 },
  },
  {
    id: 'hyundai-ioniq5',
    brand: 'Hyundai',
    model: 'Ioniq 5',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/hyundai-ioniq5.jpg',
    specs: { prix: 530000, puissance: 325, couple: 605, vitesseMax: 185, acceleration: 5.1, autonomie: 507, consommation: 0, coffre: 527, garantie: 5, poids: 2100 },
    ratings: { fiabilite: 82, robustesse: 84, disponibilitePieces: 85, avisUsagers: 88, prixRevente: 78, puissanceMoteur: 86, securite: 90, confort: 88, technologie: 92, rapportQualitePrix: 78 },
  },
  // Kia
  {
    id: 'kia-sportage',
    brand: 'Kia',
    model: 'Sportage',
    year: 2025,
    segment: 'SUV',
    engine: 'Hybride',
    image: '/images/cars/kia-sportage.jpg',
    specs: { prix: 420000, puissance: 230, couple: 350, vitesseMax: 193, acceleration: 8.0, autonomie: null, consommation: 5.3, coffre: 587, garantie: 7, poids: 1660 },
    ratings: { fiabilite: 85, robustesse: 84, disponibilitePieces: 86, avisUsagers: 86, prixRevente: 82, puissanceMoteur: 74, securite: 88, confort: 85, technologie: 86, rapportQualitePrix: 84 },
  },
  {
    id: 'kia-ev6',
    brand: 'Kia',
    model: 'EV6',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/kia-ev6.jpg',
    specs: { prix: 550000, puissance: 325, couple: 605, vitesseMax: 185, acceleration: 5.2, autonomie: 528, consommation: 0, coffre: 490, garantie: 7, poids: 2090 },
    ratings: { fiabilite: 83, robustesse: 84, disponibilitePieces: 84, avisUsagers: 87, prixRevente: 78, puissanceMoteur: 86, securite: 90, confort: 86, technologie: 92, rapportQualitePrix: 78 },
  },
  {
    id: 'kia-niro-ev',
    brand: 'Kia',
    model: 'Niro EV',
    year: 2025,
    segment: 'SUV',
    engine: 'Électrique',
    image: '/images/cars/kia-niro-ev.jpg',
    specs: { prix: 430000, puissance: 204, couple: 255, vitesseMax: 167, acceleration: 7.8, autonomie: 460, consommation: 0, coffre: 475, garantie: 7, poids: 1791 },
    ratings: { fiabilite: 84, robustesse: 82, disponibilitePieces: 85, avisUsagers: 84, prixRevente: 76, puissanceMoteur: 68, securite: 86, confort: 82, technologie: 84, rapportQualitePrix: 80 },
  },
];

export function getBrands(): string[] {
  const brands = new Set(carsDatabase.map((c) => c.brand));
  return [...brands].sort();
}

export function getModelsByBrand(brand: string): CarModel[] {
  return carsDatabase.filter((c) => c.brand === brand);
}

export function getCarById(id: string): CarModel | undefined {
  return carsDatabase.find((c) => c.id === id);
}
