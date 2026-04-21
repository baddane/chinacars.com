export interface BrandSeed {
  slug: string;
  name: string;
  description: string;
  logo: string;
  country: string;
  founded: number;
  headquarters: string;
  website: string;
  modelsCount: number;
}

export const brands: BrandSeed[] = [
  {
    slug: 'byd',
    name: 'BYD',
    description:
      "Build Your Dreams est le premier constructeur mondial de véhicules électrifiés. Fondé comme fabricant de batteries, BYD est aujourd'hui le leader incontesté des VE à l'échelle mondiale, surpassant Tesla en volume. Ses modèles allient technologie de pointe, autonomie record et finitions soignées.",
    logo: 'https://picsum.photos/seed/bydlogo/400/400',
    country: 'Chine',
    founded: 1995,
    headquarters: 'Shenzhen, Guangdong',
    website: 'https://www.byd.com',
    modelsCount: 5,
  },
  {
    slug: 'mg',
    name: 'MG Motor',
    description:
      "Héritière du légendaire constructeur britannique Morris Garages fondé en 1924, MG est aujourd'hui propriété du groupe chinois SAIC. La marque propose une gamme de SUV, berlines et roadsters électriques au design dynamique et aux prix compétitifs, distribuée dans plus de 50 pays.",
    logo: 'https://picsum.photos/seed/mglogo/400/400',
    country: 'Chine (origine UK)',
    founded: 1924,
    headquarters: 'Shanghai, Chine',
    website: 'https://www.mgmotor.eu',
    modelsCount: 4,
  },
  {
    slug: 'chery',
    name: 'Chery',
    description:
      "Chery Automobile, fondée en 1997 à Wuhu, est l'un des plus grands exportateurs automobiles chinois. La marque est réputée pour ses SUV Tiggo et la gamme Omoda, alliant technologies avancées, habitabilité généreuse et rapport qualité-prix difficile à égaler dans les segments C et D.",
    logo: 'https://picsum.photos/seed/cherylogo/400/400',
    country: 'Chine',
    founded: 1997,
    headquarters: 'Wuhu, Anhui',
    website: 'https://www.cheryinternational.com',
    modelsCount: 4,
  },
  {
    slug: 'geely',
    name: 'Geely',
    description:
      "Geely Automobile Holdings est l'un des groupes automobiles les plus influents au monde : il détient Volvo Cars, Polestar, Lotus et ZEEKR. Cette rigueur \"européenne\" infusée dans les modèles Geely se traduit par une qualité de fabrication et une sécurité en nette progression, sanctionnées par des notes EURO NCAP très solides.",
    logo: 'https://picsum.photos/seed/geelylogo/400/400',
    country: 'Chine',
    founded: 1986,
    headquarters: 'Hangzhou, Zhejiang',
    website: 'https://global.geely.com',
    modelsCount: 3,
  },
  {
    slug: 'gwm',
    name: 'GWM',
    description:
      "Great Wall Motor est le spécialiste chinois des SUV (marque Haval), des pick-ups (Poer, Cannon) et des citadines électriques (ORA). Le groupe investit massivement dans les motorisations hybrides et électriques, et est l'un des premiers constructeurs mondiaux à proposer des PHEV à très long rayon d'action électrique.",
    logo: 'https://picsum.photos/seed/gwmlogo/400/400',
    country: 'Chine',
    founded: 1984,
    headquarters: 'Baoding, Hebei',
    website: 'https://www.gwm-global.com',
    modelsCount: 4,
  },
  {
    slug: 'zeekr',
    name: 'Zeekr',
    description:
      "ZEEKR est la marque premium électrique du groupe Geely, lancée en 2021 pour concurrencer Tesla et les marques de luxe européennes. Positionnée sur le haut de gamme, elle propose des berlines et SUV 100% électriques aux performances exceptionnelles, aux intérieurs ultra-modernes et à l'autonomie parmi les plus élevées du marché.",
    logo: 'https://picsum.photos/seed/zeekrlogo/400/400',
    country: 'Chine',
    founded: 2021,
    headquarters: 'Ningbo, Zhejiang',
    website: 'https://www.zeekrlife.com',
    modelsCount: 2,
  },
];
