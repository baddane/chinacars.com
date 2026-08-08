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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/BYD_Seal%2C_IAA_Open_Space_2023%2C_Munich_%28P1120203%29.jpg/960px-BYD_Seal,_IAA_Open_Space_2023,_Munich_(P1120203).jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/BYD_Atto_3_1X7A6495.jpg/960px-BYD_Atto_3_1X7A6495.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BYD_Dolphin_IAA_2023_1X7A0634.jpg/960px-BYD_Dolphin_IAA_2023_1X7A0634.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/BYD_Tang_II_001_China_2019-03-20.jpg/960px-BYD_Tang_II_001_China_2019-03-20.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/MG_ZS_Facelift_1X7A6412.jpg/960px-MG_ZS_Facelift_1X7A6412.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MG4_EV_Automesse_Ludwigsburg_2022_1X7A5873.jpg/960px-MG4_EV_Automesse_Ludwigsburg_2022_1X7A5873.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/MG_HS_PHEV_002.jpg/960px-MG_HS_PHEV_002.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Chery_Omoda_5_003.jpg/960px-Chery_Omoda_5_003.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chery_Tiggo_8_Pro_010.jpg/960px-Chery_Tiggo_8_Pro_010.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Chery_Tiggo_7.jpg/960px-Chery_Tiggo_7.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Geely_Galaxy_E5_001.jpg/960px-Geely_Galaxy_E5_001.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/2018_Geely_Binyue.jpg/960px-2018_Geely_Binyue.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Geely_Galaxy_E5_001.jpg/960px-Geely_Galaxy_E5_001.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Haval_H6_III_PHEV_001.jpg/960px-Haval_H6_III_PHEV_001.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/ORA_Funky_Cat_1X7A0814.jpg/960px-ORA_Funky_Cat_1X7A0814.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Haval_Jolion_002.jpg/960px-Haval_Jolion_002.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Zeekr%2C_Almaly%2C_Almaty_%28P1180230%29.jpg/960px-Zeekr,_Almaly,_Almaty_(P1180230).jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Zeekr_X%2C_Almaty_%28LRM_20240331_124050%29.jpg/960px-Zeekr_X,_Almaty_(LRM_20240331_124050).jpg',
    autonomy: '440 km WLTP',
    power: '268 – 428 ch',
    excerpt:
      "SUV compact électrique premium aux finitions remarquables. Version AWD disponible et recharge 150 kW.",
  },

  // ── NIO ───────────────────────────────────────────────────────────
  {
    slug: 'et5',
    brandSlug: 'nio',
    name: 'ET5',
    brand: 'NIO',
    segment: 'berline',
    type: 'electrique',
    price: 'À partir de 45 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/NIO_ET5_IMG_8291.jpg/960px-NIO_ET5_IMG_8291.jpg',
    autonomy: '456 km WLTP',
    power: '480 ch',
    excerpt:
      "La berline électrique compacte premium de NIO. 0-100 en 4 s, intérieur minimaliste et service Battery Swap inclus en option.",
  },
  {
    slug: 'et7',
    brandSlug: 'nio',
    name: 'ET7',
    brand: 'NIO',
    segment: 'berline',
    type: 'electrique',
    price: 'À partir de 69 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/NIO_ET7_1X7A6682.jpg/960px-NIO_ET7_1X7A6682.jpg',
    autonomy: '513 km WLTP',
    power: '480 ch',
    excerpt:
      "La grande berline flagship de NIO. Équipements de luxe, conduite semi-autonome NIO Pilot et batterie 100 kWh.",
  },
  {
    slug: 'es6',
    brandSlug: 'nio',
    name: 'ES6',
    brand: 'NIO',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 54 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NIO_ES6_20221022.jpg/960px-NIO_ES6_20221022.jpg',
    autonomy: '430 km WLTP',
    power: '480 ch',
    excerpt:
      "SUV compact électrique premium de NIO, avec une finition intérieure remarquable et l'écosystème de services NIO Life.",
  },

  // ── XPeng ─────────────────────────────────────────────────────────
  {
    slug: 'g6',
    brandSlug: 'xpeng',
    name: 'G6',
    brand: 'XPeng',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 39 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/XPeng_G6_%282025%29_IAA_2025_DSC_2057.jpg/960px-XPeng_G6_(2025)_IAA_2025_DSC_2057.jpg',
    autonomy: '570 km WLTP',
    power: '255 – 449 ch',
    excerpt:
      "SUV électrique aux lignes tendues et à l'ADAS de référence (XNGP). Recharge ultra-rapide 270 kW et autonomie compétitive.",
  },
  {
    slug: 'p7',
    brandSlug: 'xpeng',
    name: 'P7',
    brand: 'XPeng',
    segment: 'berline',
    type: 'electrique',
    price: 'À partir de 44 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/XPeng_G6_%282025%29_IAA_2025_DSC_2057.jpg/960px-XPeng_G6_(2025)_IAA_2025_DSC_2057.jpg',
    autonomy: '580 km WLTP',
    power: '316 – 430 ch',
    excerpt:
      "La berline coupé électrique sportive de XPeng. Design aérodynamique, conduite autonome avancée et 0-100 en 3,9 s.",
  },

  // ── Leapmotor ─────────────────────────────────────────────────────
  {
    slug: 'c10',
    brandSlug: 'leapmotor',
    name: 'C10',
    brand: 'Leapmotor',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 34 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leapmotor_C10_IAA_2023_1X7A0247.jpg/960px-Leapmotor_C10_IAA_2023_1X7A0247.jpg',
    autonomy: '420 km WLTP',
    power: '218 ch',
    excerpt:
      "Le SUV électrique familial distribué en Europe par Stellantis. Spacieux, bien équipé et proposé à un prix très accessible.",
  },
  {
    slug: 't03',
    brandSlug: 'leapmotor',
    name: 'T03',
    brand: 'Leapmotor',
    segment: 'citadine',
    type: 'electrique',
    price: 'À partir de 18 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leapmotor_C10_IAA_2023_1X7A0247.jpg/960px-Leapmotor_C10_IAA_2023_1X7A0247.jpg',
    autonomy: '265 km WLTP',
    power: '95 ch',
    excerpt:
      "La citadine électrique la plus abordable de la gamme Leapmotor. Pratique en ville, elle vise à démocratiser l'électrique en Europe.",
  },

  // ── Lynk & Co ─────────────────────────────────────────────────────
  {
    slug: '01',
    brandSlug: 'lynk-co',
    name: 'Lynk & Co 01',
    brand: 'Lynk & Co',
    segment: 'SUV',
    type: 'hybride-rechargeable',
    price: 'Abonnement à partir de 500 €/mois',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lynk_%26_Co_01_PHEV_1X7A0262.jpg/960px-Lynk_%26_Co_01_PHEV_1X7A0262.jpg',
    autonomy: '69 km électrique',
    power: '261 ch',
    excerpt:
      "Le SUV PHEV de Lynk & Co en abonnement flexible tout inclus. Plateforme Volvo/Geely, finitions premium et 69 km en 100% électrique.",
  },
  {
    slug: '02',
    brandSlug: 'lynk-co',
    name: 'Lynk & Co 02',
    brand: 'Lynk & Co',
    segment: 'SUV',
    type: 'hybride-rechargeable',
    price: 'Abonnement à partir de 450 €/mois',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lynk_%26_Co_01_PHEV_1X7A0262.jpg/960px-Lynk_%26_Co_01_PHEV_1X7A0262.jpg',
    autonomy: '63 km électrique',
    power: '261 ch',
    excerpt:
      "SUV crossover PHEV compact de Lynk & Co. Esprit lifestyle européen, technologie Geely et modèle d'abonnement unique en son genre.",
  },

  // ── JAECOO ────────────────────────────────────────────────────────
  {
    slug: 'j7',
    brandSlug: 'jaecoo',
    name: 'JAECOO J7',
    brand: 'JAECOO',
    segment: 'SUV',
    type: 'thermique',
    price: 'À partir de 24 990 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2025_Jaecoo_7_Luxury_-_1598cc_1.6_%28150PS%29_Petrol_-_Silver_-_02-2025%2C_Front.jpg/960px-2025_Jaecoo_7_Luxury_-_1598cc_1.6_(150PS)_Petrol_-_Silver_-_02-2025,_Front.jpg',
    autonomy: undefined,
    power: '147 – 197 ch',
    excerpt:
      "SUV robuste et polyvalent de la marque JAECOO (groupe Chery). Design aventurier, équipement généreux et présence forte au Maroc et en Europe.",
  },
  {
    slug: 'j5',
    brandSlug: 'jaecoo',
    name: 'JAECOO J5',
    brand: 'JAECOO',
    segment: 'SUV',
    type: 'thermique',
    price: 'À partir de 20 990 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2025_Jaecoo_7_Luxury_-_1598cc_1.6_%28150PS%29_Petrol_-_Silver_-_02-2025%2C_Front.jpg/960px-2025_Jaecoo_7_Luxury_-_1598cc_1.6_(150PS)_Petrol_-_Silver_-_02-2025,_Front.jpg',
    autonomy: undefined,
    power: '147 ch',
    excerpt:
      "Le SUV compact d'entrée de gamme de JAECOO. Compétitif sur le prix, équipé de série et idéal pour les marchés émergents.",
  },

  // ── Changan ───────────────────────────────────────────────────────
  {
    slug: 'deepal-s05',
    brandSlug: 'changan',
    name: 'Deepal S05',
    brand: 'Changan',
    segment: 'SUV',
    type: 'electrique',
    price: 'À partir de 32 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Changan_Deepal_S05%2C_Munich_%2820250909-P1050605%29.jpg/960px-Changan_Deepal_S05,_Munich_(20250909-P1050605).jpg',
    autonomy: '440 km WLTP',
    power: '218 ch',
    excerpt:
      "Le SUV électrique phare de la marque Deepal (Changan). Présenté à l'IAA 2025, il vise les marchés européens avec un design soigné et une technologie embarquée généreuse.",
  },
  {
    slug: 'uni-k',
    brandSlug: 'changan',
    name: 'Uni-K',
    brand: 'Changan',
    segment: 'SUV',
    type: 'hybride-rechargeable',
    price: 'À partir de 36 900 €',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Changan_Deepal_S05%2C_Munich_%2820250909-P1050605%29.jpg/960px-Changan_Deepal_S05,_Munich_(20250909-P1050605).jpg',
    autonomy: '100 km électrique',
    power: '326 ch',
    excerpt:
      "SUV hybride rechargeable de Changan au design audacieux. Technologie PHEV avancée, habitacle premium et présence croissante sur les marchés francophones.",
  },
];

export function getModelsByBrand(brandSlug: string): ModelSeed[] {
  return models.filter((m) => m.brandSlug === brandSlug);
}
