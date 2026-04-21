export interface ModelSeed {
  slug: string;
  brandSlug: string;
  name: string;
  brand: string;
  segment: string;
  type: 'electrique' | 'hybride' | 'hybride-rechargeable' | 'thermique';
  price: string;
  image: string;
  autonomy?: string;
  power?: string;
  excerpt: string;
}

export const models: ModelSeed[] = [
  // ── BYD ──────────────────────────────────────────────────────────
  {
    slug: 'seal',
    brandSlug: 'byd',
    name: 'Seal',
    brand: 'BYD',
    segment: 'berline',
    type: 'electrique',
    price: 'À partir de 39 990 €',
    image: 'https://picsum.photos/seed/bydseal/800/600',
    autonomy: '520 km WLTP',
    power: '204 – 530 ch',
    excerpt:
      "La berline électrique la plus ambitieuse de BYD. Plateforme CTB, 0-100 en 3,8 s pour la version AWD et recharge 150 kW.",
  },
  {
    slug: 'atto-3',
    brandSlug: 'byd',
    name: 'Atto 3',
    brand: 'BYD',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 33 490 €',
    image: 'https://picsum.photos/seed/bydatto/800/600',
    autonomy: '420 km WLTP',
    power: '204 ch',
    excerpt:
      "SUV compact électrique au design audacieux, habitacle spacieux et garantie batterie 8 ans.",
  },
  {
    slug: 'dolphin',
    brandSlug: 'byd',
    name: 'Dolphin',
    brand: 'BYD',
    segment: 'citadine',
    type: 'electrique',
    price: 'À partir de 27 990 €',
    image: 'https://picsum.photos/seed/byddolphin/800/600',
    autonomy: '427 km WLTP',
    power: '95 – 177 ch',
    excerpt:
      "La citadine électrique accessible de BYD. Légère, vive et éligible au bonus écologique en France.",
  },
  {
    slug: 'tang',
    brandSlug: 'byd',
    name: 'Tang',
    brand: 'BYD',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 54 990 €',
    image: 'https://picsum.photos/seed/bydtang/800/600',
    autonomy: '400 km WLTP',
    power: '517 ch',
    excerpt:
      "SUV 7 places électrique haut de gamme. Prestations premium, intérieur luxueux et AWD de série.",
  },

  // ── MG ───────────────────────────────────────────────────────────
  {
    slug: 'zs-ev',
    brandSlug: 'mg',
    name: 'ZS EV',
    brand: 'MG Motor',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 21 990 €',
    image: 'https://picsum.photos/seed/mgzsev/800/600',
    autonomy: '440 km WLTP',
    power: '177 ch',
    excerpt:
      "Le SUV électrique abordable de référence en Europe. Tarif imbattable, équipement complet et 7 ans de garantie.",
  },
  {
    slug: 'mg4',
    brandSlug: 'mg',
    name: 'MG4 Electric',
    brand: 'MG Motor',
    segment: 'berline',
    type: 'electrique',
    price: 'À partir de 28 990 €',
    image: 'https://picsum.photos/seed/mgmg4/800/600',
    autonomy: '435 km WLTP',
    power: '204 – 435 ch',
    excerpt:
      "Compacte électrique primée en Europe (Voiture de l'Année 2023). Sportive, connectée et très bien équipée.",
  },
  {
    slug: 'hs-phev',
    brandSlug: 'mg',
    name: 'HS PHEV',
    brand: 'MG Motor',
    segment: 'SUV',
    type: 'hybride-rechargeable',
    price: 'À partir de 34 490 €',
    image: 'https://picsum.photos/seed/mghsphev/800/600',
    autonomy: '85 km électrique',
    power: '258 ch',
    excerpt:
      "SUV hybride rechargeable polyvalent. Grande autonomie électrique, châssis dynamique et finition très soignée.",
  },

  // ── Chery ─────────────────────────────────────────────────────────
  {
    slug: 'omoda-5',
    brandSlug: 'chery',
    name: 'Omoda 5',
    brand: 'Chery',
    segment: 'SUV',
    type: 'thermique',
    price: 'À partir de 22 490 €',
    image: 'https://picsum.photos/seed/cheryomoda/800/600',
    autonomy: undefined,
    power: '147 – 197 ch',
    excerpt:
      "SUV compact au design coupé très abouti. Version PHEV disponible avec 80 km d'autonomie électrique.",
  },
  {
    slug: 'tiggo-8-pro',
    brandSlug: 'chery',
    name: 'Tiggo 8 Pro',
    brand: 'Chery',
    segment: 'SUV',
    type: 'thermique',
    price: 'À partir de 32 490 €',
    image: 'https://picsum.photos/seed/chery/800/600',
    autonomy: undefined,
    power: '197 ch',
    excerpt:
      "Le SUV 7 places premium de Chery. Équipement de très haut niveau (audio SONY, toit pano, 16 ADAS) à prix maîtrisé.",
  },
  {
    slug: 'tiggo-7-pro',
    brandSlug: 'chery',
    name: 'Tiggo 7 Pro',
    brand: 'Chery',
    segment: 'SUV',
    type: 'thermique',
    price: 'À partir de 26 490 €',
    image: 'https://picsum.photos/seed/cherytigo7/800/600',
    autonomy: undefined,
    power: '156 – 197 ch',
    excerpt:
      "SUV compact 5 places bien équipé pour son prix. Conduite agréable, intérieur généreux et garantie 5 ans.",
  },

  // ── Geely ─────────────────────────────────────────────────────────
  {
    slug: 'geometry-c',
    brandSlug: 'geely',
    name: 'Geometry C',
    brand: 'Geely',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 29 490 €',
    image: 'https://picsum.photos/seed/geely/800/600',
    autonomy: '432 km WLTP',
    power: '204 ch',
    excerpt:
      "SUV compact électrique au rapport prix/autonomie excellent. Idéal en usage urbain avec une consommation réelle de 13 kWh/100 km.",
  },
  {
    slug: 'coolray',
    brandSlug: 'geely',
    name: 'Coolray',
    brand: 'Geely',
    segment: 'SUV',
    type: 'thermique',
    price: 'À partir de 19 990 €',
    image: 'https://picsum.photos/seed/geelycoolray/800/600',
    autonomy: undefined,
    power: '177 ch',
    excerpt:
      "SUV compact d'entrée de gamme au design sportif. Boîte DSG 7, équipement correct et note sécurité 5 étoiles EURO NCAP.",
  },
  {
    slug: 'galaxy-l7',
    brandSlug: 'geely',
    name: 'Galaxy L7',
    brand: 'Geely',
    segment: 'berline',
    type: 'hybride-rechargeable',
    price: 'À partir de 35 990 €',
    image: 'https://picsum.photos/seed/geelygalaxy/800/600',
    autonomy: '200 km électrique',
    power: '258 ch',
    excerpt:
      "Berline hybride rechargeable longue portée. 200 km d'autonomie électrique, intérieur de grande qualité et silence de fonctionnement remarquable.",
  },

  // ── GWM ───────────────────────────────────────────────────────────
  {
    slug: 'haval-h6-phev',
    brandSlug: 'gwm',
    name: 'Haval H6 PHEV',
    brand: 'GWM',
    segment: 'SUV',
    type: 'hybride-rechargeable',
    price: 'À partir de 34 990 €',
    image: 'https://picsum.photos/seed/gwmh6/800/600',
    autonomy: '80 km électrique',
    power: '326 ch',
    excerpt:
      "Le SUV PHEV le plus vendu de Chine. 326 ch combinés, 80 km d'autonomie électrique et plein de technologies embarquées.",
  },
  {
    slug: 'ora-03',
    brandSlug: 'gwm',
    name: 'ORA 03',
    brand: 'GWM',
    segment: 'berline',
    type: 'electrique',
    price: 'À partir de 28 990 €',
    image: 'https://picsum.photos/seed/gwmora/800/600',
    autonomy: '400 km WLTP',
    power: '171 ch',
    excerpt:
      "Berline électrique au look rétro-futuriste unique. Intérieur très soigné, équipement de série généreux.",
  },
  {
    slug: 'haval-jolion',
    brandSlug: 'gwm',
    name: 'Haval Jolion',
    brand: 'GWM',
    segment: 'SUV',
    type: 'thermique',
    price: 'À partir de 22 490 €',
    image: 'https://picsum.photos/seed/gwmjolion/800/600',
    autonomy: undefined,
    power: '147 ch',
    excerpt:
      "SUV compact accessible avec une finition au-dessus de sa catégorie. Version hybride légère disponible.",
  },

  // ── Zeekr ─────────────────────────────────────────────────────────
  {
    slug: '001',
    brandSlug: 'zeekr',
    name: 'Zeekr 001',
    brand: 'Zeekr',
    segment: 'berline',
    type: 'electrique',
    price: 'À partir de 49 900 €',
    image: 'https://picsum.photos/seed/zeekr001/800/600',
    autonomy: '620 km WLTP',
    power: '428 – 544 ch',
    excerpt:
      "Le shooting-brake électrique premium du groupe Geely. Autonomie record, 0-100 en 3,8 s et espace intérieur exceptionnel.",
  },
  {
    slug: 'x',
    brandSlug: 'zeekr',
    name: 'Zeekr X',
    brand: 'Zeekr',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 34 900 €',
    image: 'https://picsum.photos/seed/zeekrx/800/600',
    autonomy: '440 km WLTP',
    power: '268 – 428 ch',
    excerpt:
      "SUV compact électrique premium aux finitions remarquables. Version AWD disponible et recharge 150 kW.",
  },
];

export function getModelsByBrand(brandSlug: string): ModelSeed[] {
  return models.filter((m) => m.brandSlug === brandSlug);
}
