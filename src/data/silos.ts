/**
 * Pages pillar par silo.
 *
 * Source unique de vérité pour :
 *  - les hubs /voitures, /utilitaires, /guides (liste des pages du silo)
 *  - les pages détail /{silo}/[slug] (metadata + outline H2)
 *  - le sitemap dynamique
 *  - le maillage interne intra-silo (chaque page linke les autres pages du même silo)
 *
 * `priority: true` = page à créer en priorité absolue (Phase 1 quick wins).
 */

export interface PillarPage {
  slug: string;
  title: string;
  h1?: string;
  excerpt: string;
  /** Outline H2 éditorial (structure de la page rédigée). */
  outline: string[];
  /** Priorité Phase 1 — pages à livrer en premier. */
  priority?: boolean;
  /** Image hero — remplacée par Sanity quand le CMS est peuplé. */
  image?: string;
  /** Si la page est rattachée à une marque (brand slug) ou un segment. */
  brand?: string;
  segment?: 'citadine' | 'berline' | 'SUV' | 'pickup' | 'utilitaire';
}

// ─────────────────────────────────────────────────────────────────────────────
// /voitures — fiches modèles + pillar pages transverses
// ─────────────────────────────────────────────────────────────────────────────
export const voituresPages: PillarPage[] = [
  {
    slug: 'byd-atto-3',
    title: 'BYD Atto 3 en France : prix, autonomie et équipements',
    excerpt:
      "Fiche complète du BYD Atto 3 vendu en France : 420 km WLTP, batterie Blade LFP, prix et équipements par finition.",
    brand: 'byd',
    segment: 'SUV',
    outline: [
      'BYD Atto 3 : SUV électrique compact positionné face au VW ID.4',
      'Autonomie WLTP et batterie Blade : ce qu’il faut savoir',
      'Prix France, bonus écologique et coût total (TCO) sur 5 ans',
      'Équipements par finition : Comfort vs Design',
      'Essai et avis propriétaires français',
      'Alternatives chinoises à considérer (MG ZS EV, Xpeng G6)',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/bydatto3/1600/900',
  },
  {
    slug: 'xpeng-g6',
    title: 'Xpeng G6 en France : le rival chinois du Tesla Model Y',
    excerpt:
      'Le Xpeng G6 débarque en France avec 800 V, recharge ultra-rapide et tarif agressif face au Model Y.',
    brand: 'xpeng',
    segment: 'SUV',
    outline: [
      'Xpeng G6 : positionnement face au Tesla Model Y',
      'Plateforme 800 V : recharge en 20 min, un avantage décisif',
      'Prix de lancement France et configurations',
      'Technologie XPILOT : conduite semi-autonome',
      'Disponibilité réseau et SAV Xpeng en France',
      'Verdict et concurrents directs',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/xpengg6/1600/900',
  },
  {
    slug: 'occasion-france',
    title: 'Voiture chinoise d’occasion en France : guide et cotes 2026',
    excerpt:
      'Où trouver une voiture chinoise d’occasion en France, quelles cotes, quels pièges éviter avant l’achat.',
    outline: [
      'Marché de l’occasion chinoise en France : état des lieux',
      'Cotes Argus et décote moyenne par marque',
      'Les modèles qui tiennent la valeur (MG ZS EV, BYD Atto 3)',
      'Vérifications essentielles : batterie, OTA, garantie transférable',
      'Plateformes fiables : LaCentrale, Leboncoin, mandataires',
      'Financement occasion et LOA de seconde main',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/occasionfr/1600/900',
  },
  {
    slug: 'comparateur-suv-chinois',
    title: 'Comparateur SUV chinois 2026 : autonomie, prix, équipements',
    excerpt:
      'Comparaison détaillée des SUV chinois vendus en France : BYD Atto 3, MG ZS EV, Xpeng G6, Omoda 5, Leapmotor C10.',
    segment: 'SUV',
    outline: [
      'Tableau comparatif : autonomie, prix, puissance de charge',
      'BYD Atto 3 vs MG ZS EV : le match du compact',
      'Xpeng G6 vs Tesla Model Y : duel 800 V',
      'Leapmotor C10 : le nouveau rapport qualité-prix',
      'Omoda 5 thermique vs E5 électrique',
      'Notre sélection selon le profil d’usage',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/comparateursuv/1600/900',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// /utilitaires — silo prioritaire (★ opportunité #1)
// ─────────────────────────────────────────────────────────────────────────────
export const utilitairesPages: PillarPage[] = [
  {
    slug: 'guide-utilitaires-chinois',
    title: 'Guide des utilitaires chinois en France 2026',
    h1: 'Utilitaires chinois : ce qu’il faut savoir avant d’acheter en France',
    excerpt:
      'Le guide de référence sur les fourgons et utilitaires chinois (Maxus, BYD, DFSK, Farizon) commercialisés en France.',
    outline: [
      'Pourquoi les utilitaires chinois cartonnent en Europe',
      'Les constructeurs présents en France : Maxus, Farizon, BYD, DFSK',
      'Thermique, électrique, hydrogène : choisir sa motorisation',
      'Accès ZFE et bonus utilitaire électrique',
      'Réseau SAV et pièces détachées en France',
      'Top 5 des modèles disponibles',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/guideutils/1600/900',
  },
  {
    slug: 'maxus-edeliver-9',
    title: 'Maxus eDeliver 9 : le grand fourgon électrique chinois',
    excerpt:
      "Tout sur le Maxus eDeliver 9 : autonomie, charge utile, prix en France et alternatives au Mercedes eSprinter.",
    segment: 'utilitaire',
    outline: [
      'Fiche technique Maxus eDeliver 9 (3 longueurs, 3 batteries)',
      'Autonomie réelle et consommation en usage pro',
      'Charge utile et volume : ce que promet le constructeur',
      'Prix hors bonus et TCO flotte sur 4 ans',
      'eDeliver 9 vs Mercedes eSprinter vs Ford E-Transit',
      'Retours d’expérience artisans et livreurs français',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/maxusedeliver/1600/900',
  },
  {
    slug: 'pick-up-electrique-chinois',
    title: 'Pick-up électrique chinois : JAC, Maxus, Radar en France',
    excerpt:
      'Les pick-ups électriques chinois arrivent en France : Maxus T90 EV, JAC T9, Radar RD6. Comparatif et prix.',
    segment: 'pickup',
    outline: [
      'Pourquoi le pick-up électrique chinois est le prochain hit Europe',
      'Maxus T90 EV : le premier vendu en France',
      'JAC T9 électrique : l’outsider',
      'Radar RD6 : le pick-up lifestyle de Geely',
      'Capacité de remorquage et charge utile',
      'Prix, homologation et ZFE',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/pickupelec/1600/900',
  },
  {
    slug: 'flottes-pro-zfe',
    title: 'Flottes pro et ZFE : choisir un utilitaire chinois électrique',
    excerpt:
      'Gestionnaires de flotte, artisans : comment intégrer des utilitaires chinois dans votre parc pour accéder aux ZFE.',
    outline: [
      'Calendrier ZFE France : Paris, Lyon, Marseille, Strasbourg',
      'Macaron Crit’Air et utilitaires électriques chinois',
      'Bonus utilitaire propre et sur-amortissement fiscal',
      'Recharge dépôt : coûts d’installation et contrats B2B',
      'TCO sur 4 ans : comparaison utilitaire thermique vs électrique',
      'Étude de cas : conversion d’une flotte de 20 véhicules',
    ],
    image: 'https://picsum.photos/seed/flottezfe/1600/900',
  },
  {
    slug: 'byd-etp3-pro',
    title: 'BYD ETP3 : le fourgon compact électrique pour pros',
    excerpt:
      'Le BYD ETP3, fourgon électrique compact pensé pour la livraison urbaine. Fiche, autonomie et prix France.',
    brand: 'byd',
    segment: 'utilitaire',
    outline: [
      'BYD ETP3 : fiche technique et dimensions',
      'Autonomie 300 km WLTP : suffisante en livraison urbaine ?',
      'Batterie Blade LFP : durabilité et sécurité',
      'Prix France et éligibilité bonus utilitaire',
      'ETP3 vs Renault Kangoo E-Tech vs Citroën ë-Berlingo',
      'Réseau BYD Commercial Vehicles en France',
    ],
    image: 'https://picsum.photos/seed/bydetp3/1600/900',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// /guides — pages pillar réglementaires / achat
// ─────────────────────────────────────────────────────────────────────────────
export const guidesPages: PillarPage[] = [
  {
    slug: 'droits-de-douane',
    title: 'Droits de douane sur les voitures chinoises en France 2026',
    excerpt:
      'Ce que la surtaxe européenne sur les VE chinois change pour les prix en France : BYD, MG, Geely, SAIC.',
    outline: [
      'Rappel : pourquoi l’UE a imposé des droits compensateurs en 2024',
      'Le barème par constructeur (BYD, Geely, SAIC, autres)',
      'Impact concret sur les prix catalogue France 2026',
      'Les marques qui contournent via usines européennes (MG, Leapmotor)',
      'Perspectives : négociations prix minimum UE-Chine',
      'Ce que ça change pour votre achat',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/douane/1600/900',
  },
  {
    slug: 'bonus-ecologique',
    title: 'Bonus écologique 2026 et voitures chinoises',
    excerpt:
      'Quelles voitures chinoises sont éligibles au bonus écologique français après le score environnemental ?',
    outline: [
      'Le score environnemental : critère couperet depuis 2024',
      'Modèles chinois qui passent (MG4, Leapmotor T03)',
      'Modèles qui ne passent pas (BYD Atto 3, Xpeng G6)',
      'Bonus utilitaire électrique : règles à part',
      'Montants 2026 par tranche de revenus',
      'Alternatives au bonus : LOA sociale, prime à la conversion',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/bonus/1600/900',
  },
  {
    slug: 'decote-revente',
    title: 'Décote et revente des voitures chinoises en France',
    excerpt:
      'Les voitures chinoises gardent-elles leur valeur ? Chiffres de décote par marque après 1, 2, 3 ans.',
    outline: [
      'Décote moyenne des VE chinois sur 3 ans',
      'MG : le meilleur élève (ancienneté = confiance)',
      'BYD : décote rapide mais volumes en hausse',
      'Marques émergentes (Omoda, Jaecoo, Leapmotor) : quel risque ?',
      'Conseils pour revendre : quand et à qui',
      'Cotes Argus vs LaCentrale : quel écart ?',
    ],
    image: 'https://picsum.photos/seed/decote/1600/900',
  },
  {
    slug: 'fiabilite-avis',
    title: 'Fiabilité des voitures chinoises : avis et pannes courantes',
    excerpt:
      'Retours d’expérience, pannes fréquentes et classements fiabilité des marques chinoises en France.',
    outline: [
      'Classements fiabilité 2025-2026 (TÜV, J.D. Power, What Car?)',
      'Pannes les plus fréquemment remontées (OTA, capteurs, électronique)',
      'Garantie batterie : 7 à 8 ans standard',
      'SAV et délais de pièces en France',
      'Marques les plus fiables (MG, BYD) vs outsiders',
      'Forum et communauté : où échanger entre propriétaires',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/fiabilite/1600/900',
  },
  {
    slug: 'loa-leasing',
    title: 'LOA et leasing voiture chinoise : ce qu’il faut négocier',
    excerpt:
      'Louer une voiture chinoise en LOA ou LLD en France : offres, pièges, et comment négocier.',
    outline: [
      'LOA vs LLD vs crédit classique : lequel choisir',
      'Les offres constructeurs actuelles (BYD Finance, MG Leasing)',
      'LOA sociale 100 €/mois : les modèles éligibles',
      'Ce que couvre (ou non) le contrat : batterie, assurance, entretien',
      'Négocier la valeur résiduelle : point clé sur les VE chinois',
      'Pièges à éviter : kilométrage, restitution, options',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/loa/1600/900',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// /actualites — dossiers pillar (statiques, à côté des news /{slug})
// ─────────────────────────────────────────────────────────────────────────────
export const actualitesDossiers: PillarPage[] = [
  {
    slug: 'droits-douane-ue',
    title: 'Droits de douane UE sur les VE chinois : le dossier complet',
    excerpt:
      "Chronologie, barèmes, réactions des constructeurs : le dossier de référence sur les tarifs anti-dumping UE.",
    outline: [
      'Chronologie de l’enquête anti-subventions UE',
      'Le barème final par constructeur',
      'Les ripostes chinoises (cognac, porc)',
      'Vers un accord prix minimum ?',
      'Constructeurs qui localisent en Europe',
      'Ce que disent les analystes',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/douaneue/1600/900',
  },
  {
    slug: 'salons-evenements',
    title: 'Salons et événements auto chinois 2026',
    excerpt:
      'Mondial de Paris, Auto Shanghai, IAA Munich : le calendrier des salons où les marques chinoises exposent.',
    outline: [
      'Mondial de l’Auto Paris : les stands chinois à ne pas manquer',
      'Auto Shanghai : les nouveautés qui arriveront en France',
      'IAA Munich : la vitrine européenne de BYD, Xpeng, Leapmotor',
      'CES Las Vegas : les annonces tech des constructeurs chinois',
      'Événements France : conférences et roadshows',
      'Calendrier 2026 complet',
    ],
    image: 'https://picsum.photos/seed/salons/1600/900',
  },
  {
    slug: 'chiffres-ventes',
    title: 'Chiffres de ventes voitures chinoises en France',
    excerpt:
      'Parts de marché, immatriculations mensuelles et classement des marques chinoises en France.',
    outline: [
      'Immatriculations VE chinois en France (mois par mois)',
      'Part de marché totale des marques chinoises',
      'Classement : MG, BYD, Xpeng, Leapmotor',
      'Comparaison France vs reste de l’Europe',
      'Tendances 2026 et projections',
      'Sources : AAA Data, PFA, ACEA',
    ],
    priority: true,
    image: 'https://picsum.photos/seed/ventes/1600/900',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
export const siloPages: Record<
  'voitures' | 'utilitaires' | 'guides' | 'actualites-dossiers',
  PillarPage[]
> = {
  voitures: voituresPages,
  utilitaires: utilitairesPages,
  guides: guidesPages,
  'actualites-dossiers': actualitesDossiers,
};

export function findPillar(
  silo: keyof typeof siloPages,
  slug: string,
): PillarPage | undefined {
  return siloPages[silo].find((p) => p.slug === slug);
}

export function siblingPages(
  silo: keyof typeof siloPages,
  currentSlug: string,
  limit = 4,
): PillarPage[] {
  return siloPages[silo].filter((p) => p.slug !== currentSlug).slice(0, limit);
}
