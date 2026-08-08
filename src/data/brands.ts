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
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/BYD_Auto_Logo.svg/250px-BYD_Auto_Logo.svg.png',
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
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/MG_Motor_2021_logo.svg/250px-MG_Motor_2021_logo.svg.png',
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
      "Chery Automobile, fondée en 1997 à Wuhu, est l'un des plus grands exportateurs automobiles chinois. Sous ses marques Chery, Omoda et JAECOO, le groupe propose des SUV alliant technologies avancées, habitabilité généreuse et rapport qualité-prix difficile à égaler. Très présent en Europe et en Afrique du Nord.",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Chery_logo.svg/250px-Chery_logo.svg.png',
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
      "Geely Automobile Holdings est l'un des groupes automobiles les plus influents au monde : il détient Volvo Cars, Polestar, Lotus et ZEEKR. Cette rigueur européenne infusée dans les modèles Geely se traduit par une qualité de fabrication et une sécurité en nette progression, sanctionnées par des notes EURO NCAP très solides.",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Geely_logo.svg/250px-Geely_logo.svg.png',
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
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/GWM_2025_logo.svg/250px-GWM_2025_logo.svg.png',
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
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Zeekr_logo.svg/250px-Zeekr_logo.svg.png',
    country: 'Chine',
    founded: 2021,
    headquarters: 'Ningbo, Zhejiang',
    website: 'https://www.zeekrlife.com',
    modelsCount: 2,
  },
  {
    slug: 'nio',
    name: 'NIO',
    description:
      "NIO est le pionnier du segment premium électrique chinois, reconnu pour sa technologie innovante de Battery Swap (échange de batterie en moins de 5 minutes) et ses services haut de gamme. Présent en Norvège, Allemagne, Pays-Bas, Danemark et Suède, NIO mise sur l'expérience utilisateur pour se différencier.",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/NIO_logo.svg/250px-NIO_logo.svg.png',
    country: 'Chine',
    founded: 2014,
    headquarters: 'Shanghai, Chine',
    website: 'https://www.nio.com',
    modelsCount: 3,
  },
  {
    slug: 'xpeng',
    name: 'XPeng',
    description:
      "XPeng (小鹏) se positionne comme la marque tech par excellence de l'électrique chinois, avec un système ADAS parmi les plus avancés du marché (XNGP). Ses modèles G6, P7 et G9 séduisent par leurs performances, leur connectivité et leur autonomie compétitive. Présent en Europe du Nord depuis 2021.",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/XPeng_logo.svg/330px-XPeng_logo.svg.png',
    country: 'Chine',
    founded: 2014,
    headquarters: 'Guangzhou, Guangdong',
    website: 'https://www.xpeng.com',
    modelsCount: 2,
  },
  {
    slug: 'leapmotor',
    name: 'Leapmotor',
    description:
      "Leapmotor (零跑) est l'un des constructeurs EV chinois à la croissance la plus rapide. Son partenariat stratégique avec Stellantis depuis 2024 lui ouvre les marchés européens avec des modèles comme le C10 et le T03. Positionnée sur le segment accessible, la marque offre un excellent rapport qualité-prix.",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Leapmotor_logo_en.svg/330px-Leapmotor_logo_en.svg.png',
    country: 'Chine',
    founded: 2015,
    headquarters: 'Hangzhou, Zhejiang',
    website: 'https://www.leapmotor.com',
    modelsCount: 2,
  },
  {
    slug: 'lynk-co',
    name: 'Lynk & Co',
    description:
      "Lynk & Co est une marque premium du groupe Geely qui révolutionne la distribution automobile en Europe avec un modèle d'abonnement flexible. Ses SUV hybrides rechargeables comme le 01 et le 02 allient design européen et technologie Geely-Volvo, avec un attrait particulier pour les clients connectés.",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Lynk_%26_Co_2016_logo.svg/250px-Lynk_%26_Co_2016_logo.svg.png',
    country: 'Chine',
    founded: 2016,
    headquarters: 'Gothenburg, Suède / Hangzhou, Chine',
    website: 'https://www.lynkco.com',
    modelsCount: 2,
  },
  {
    slug: 'jaecoo',
    name: 'JAECOO',
    description:
      "JAECOO est la marque SUV aventure du groupe Chery, lancée en 2023 pour les marchés internationaux. Ses modèles J5 et J7 proposent un design robuste et moderne à des prix compétitifs. Très bien accrédité au Maroc et en Europe grâce au réseau Chery, JAECOO monte rapidement en puissance.",
    logo: 'https://picsum.photos/seed/jaecoologo/400/400',
    country: 'Chine',
    founded: 2023,
    headquarters: 'Wuhu, Anhui',
    website: 'https://www.jaecoo.com',
    modelsCount: 2,
  },
  {
    slug: 'changan',
    name: 'Changan',
    description:
      "Changan Automobile est l'un des quatre grands constructeurs chinois et le leader historique sur le marché domestique avec plus de 160 ans d'histoire industrielle. Sa sous-marque Deepal monte en puissance en Europe avec des SUV électriques au design soigné et à l'équipement généreux.",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Changan_icon.svg/250px-Changan_icon.svg.png',
    country: 'Chine',
    founded: 1862,
    headquarters: 'Chongqing, Chine',
    website: 'https://www.changan.com.cn',
    modelsCount: 2,
  },
];
