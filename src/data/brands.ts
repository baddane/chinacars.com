/**
 * Fiches marques détaillées. Alignées sur les slugs de `BRANDS`
 * (src/lib/constants.ts). Utilisées par /marques/[brand] tant que le
 * contenu CMS n'est pas branché. `relatedArticles` pointe vers des slugs
 * d'articles existants pour renforcer le maillage interne.
 */

export interface BrandModel {
  name: string;
  segment: string;
  note: string;
}

export interface BrandDetail {
  founded: string;
  parent: string;
  headquarters: string;
  tagline: string;
  intro: string[];
  positioning: string;
  models: BrandModel[];
  strengths: string[];
  warranty: string;
  relatedArticles: string[];
}

export const BRAND_DETAILS: Record<string, BrandDetail> = {
  byd: {
    founded: '1995 (batteries) — automobile depuis 2003',
    parent: 'BYD Company Ltd.',
    headquarters: 'Shenzhen, Chine',
    tagline: 'Build Your Dreams — le géant qui maîtrise sa batterie',
    intro: [
      "Né en 1995 comme fabricant de batteries, BYD (Build Your Dreams) est devenu l'un des plus grands constructeurs automobiles au monde, au point de disputer à Volkswagen le titre de numéro 1 mondial des ventes. Sa force tient à une intégration verticale unique : la marque produit ses propres batteries, semi-conducteurs et une grande partie de ses composants.",
      "Cette maîtrise de la chaîne, combinée au gigantesque marché chinois, lui permet de proposer une gamme complète — de la micro-citadine au grand SUV 7 places — à des tarifs très compétitifs, tout en s'appuyant sur sa technologie phare, la batterie Blade (LFP), réputée durable et sûre.",
    ],
    positioning:
      "Généraliste électrifié couvrant tous les segments, du premier prix au premium, avec la sécurité de la batterie Blade comme fil rouge.",
    models: [
      { name: 'Dolphin Surf (Seagull)', segment: 'Micro-citadine électrique', note: 'Le premier prix, idéal pour la ville.' },
      { name: 'Dolphin', segment: 'Compacte électrique', note: 'Confortable et pratique au quotidien.' },
      { name: 'Atto 3', segment: 'SUV compact électrique', note: 'Familial, recharge nettement améliorée en version Evo.' },
      { name: 'Seal', segment: 'Berline électrique', note: 'Rivale de la Tesla Model 3, performante et bien finie.' },
      { name: 'Seal U', segment: 'SUV familial', note: 'Disponible en électrique ou hybride rechargeable (DM-i).' },
      { name: 'Tang', segment: 'Grand SUV 7 places', note: 'Pour les familles nombreuses.' },
      { name: 'Han', segment: 'Berline premium', note: 'Statutaire et puissante (jusqu’à 517 ch).' },
    ],
    strengths: [
      'Batterie Blade LFP produite en interne, durable et sûre',
      'Gamme très large, du premier prix au premium',
      'Garantie batterie parmi les meilleures du marché',
      'Compatibilité Apple CarPlay / Android Auto',
      'Fonction V2L (la voiture alimente des appareils externes)',
    ],
    warranty: '6 ans / 150 000 km sur le véhicule, 8 ans / 250 000 km sur la batterie.',
    relatedArticles: [
      'guide-achat-byd-2026-quel-modele-quel-profil',
      'byd-seal-vs-tesla-model-3-highland-berline-ultime-2026',
      'byd-tang-2026-vs-mg-s9-suv-7-places',
      'batterie-byd-blade-vs-tesla-4680-durabilite',
      'byd-vs-volkswagen-bataille-numero-1-mondial',
    ],
  },

  mg: {
    founded: '1924 (Oxford, Royaume-Uni)',
    parent: 'SAIC Motor',
    headquarters: 'Origine britannique, propriété chinoise (SAIC)',
    tagline: "De l'héritage anglais à la marque chinoise n°1 en Europe",
    intro: [
      "Fondée à Oxford en 1924, MG (Morris Garages) fut l'emblème du roadster anglais abordable avant de faire faillite en 2005. Rachetée par le géant chinois SAIC, la marque a rené en conservant son nom, son logo octogonal et son héritage, mais avec les moyens industriels chinois.",
      "Résultat : MG est aujourd'hui la marque chinoise la plus vendue en Europe. Son succès repose sur des prix imbattables, une gamme électrifiée cohérente, un réseau dense (environ 150 points en France) et une garantie longue de 7 ans.",
    ],
    positioning:
      "Le meilleur rapport prix/technologie, avec un blason familier qui rassure — la porte d'entrée la plus accessible vers l'automobile chinoise.",
    models: [
      { name: 'MG3 Hybrid+', segment: 'Citadine full hybride', note: 'Sobre et vive, sans contrainte de recharge.' },
      { name: 'MG4', segment: 'Compacte électrique', note: 'Dynamique (propulsion), autonome, best-seller.' },
      { name: 'MG4 XPower', segment: 'Compacte sportive électrique', note: '435 ch, 0 à 100 km/h en 3,8 s.' },
      { name: 'MG5', segment: 'Break électrique', note: 'L’un des rares breaks 100 % électriques.' },
      { name: 'ZS / ZS EV / ZS Hybrid+', segment: 'SUV urbain', note: 'Décliné en hybride, hybride+ et électrique.' },
      { name: 'Cyberster', segment: 'Roadster électrique', note: 'Le retour de l’ADN sportif de MG.' },
      { name: 'S9', segment: 'Grand SUV 7 places (PHEV)', note: 'Familial et polyvalent.' },
    ],
    strengths: [
      'Prix parmi les plus bas du marché à équipement comparable',
      'Réseau de vente et SAV dense en France (~150 points)',
      'Garantie 7 ans transférable',
      'Blason historique rassurant',
      'Gamme électrifiée complète (hybride, hybride+, électrique)',
    ],
    warranty: '7 ans / 150 000 km sur le véhicule et la batterie, transférable au second propriétaire.',
    relatedArticles: [
      'mg-motor-heritage-anglais-domination-chinoise',
      'mg4-vs-byd-dolphin-compactes-electriques',
      'mg3-hybrid-vs-renault-clio-e-tech-hegemonie-francaise',
      'mg-cyberster-roadster-electrique',
      'fiabilite-long-terme-mg4-2023-premiers-retours',
    ],
  },

  chery: {
    founded: '1997',
    parent: 'Chery Automobile Co.',
    headquarters: 'Wuhu, Chine',
    tagline: "L'un des plus grands exportateurs automobiles chinois",
    intro: [
      "Fondée en 1997, Chery est l'un des plus grands constructeurs chinois et un champion de l'export. Pour conquérir les marchés occidentaux, le groupe a créé des marques dédiées au design plus moderne et au positionnement plus premium : Omoda et Jaecoo.",
      "Chery mise sur une électrification à la carte (thermique, hybride SHS-H, électrique) et sur un rapport équipement/prix agressif, avec des SUV séduisants qui montent rapidement en Europe.",
    ],
    positioning:
      "Généraliste ambitieux, du SUV familial abordable aux marques export Omoda et Jaecoo au design soigné.",
    models: [
      { name: 'Tiggo 8 Pro', segment: 'Grand SUV 7 places', note: 'Familial, puissant, bon rapport espace/prix.' },
      { name: 'Tiggo 7 / Tiggo 4', segment: 'SUV compacts', note: 'Cœur de gamme accessible.' },
      { name: 'Omoda 5 / E5', segment: 'SUV compact (thermique, SHS-H, électrique)', note: 'Design spectaculaire, marque export.' },
      { name: 'Jaecoo 7', segment: 'SUV familial premium', note: 'Positionnement plus haut de gamme.' },
    ],
    strengths: [
      'Poids industriel et R&D d’un grand groupe',
      'Design moderne et valorisant',
      'Motorisations variées (thermique, hybride SHS-H, électrique)',
      'Rapport équipement/prix agressif',
    ],
    warranty: 'Généralement de l’ordre de 7 ans selon les marchés et modèles (à confirmer localement).',
    relatedArticles: [
      'omoda-jaecoo-nouveau-geant-marche-automobile',
      'jaecoo-7-vs-chery-tiggo-8-pro-suv-familial-chery',
      'chery-tiggo-8-pro-suv-7-places',
      'omoda-shs-h-hybride-comment-ca-marche',
    ],
  },

  geely: {
    founded: '1986',
    parent: 'Geely Holding Group',
    headquarters: 'Hangzhou, Chine',
    tagline: 'Le groupe qui possède Volvo, Polestar, Lotus et Zeekr',
    intro: [
      "Geely est bien plus qu'une marque : c'est un immense groupe qui possède ou contrôle Volvo, Polestar, Lotus, Zeekr, Lynk & Co et smart, entre autres. Ce savoir-faire d'ingénierie, nourri par ses acquisitions européennes, irrigue toute sa galaxie de marques.",
      "Sous son propre nom, Geely propose des modèles thermiques, hybrides et électriques accessibles, tout en déployant ses marques premium et technologiques pour couvrir l'ensemble du marché.",
    ],
    positioning:
      "Un conglomérat qui va de l'accessible au premium via ses nombreuses marques, avec une forte culture d'ingénierie.",
    models: [
      { name: 'Geometry C', segment: 'SUV compact électrique', note: 'Autonomie adaptée aux trajets pendulaires.' },
      { name: 'Coolray', segment: 'SUV urbain', note: 'Populaire à l’international.' },
      { name: 'Emgrand', segment: 'Berline compacte', note: 'Valeur sûre accessible.' },
    ],
    strengths: [
      'Savoir-faire d’ingénierie (Volvo, Lotus) au sein du groupe',
      'Galaxie de marques couvrant tous les segments',
      'Standards de fabrication et de sécurité élevés',
      'Forte capacité d’innovation (plateformes partagées)',
    ],
    warranty: 'Selon les marchés, 5 ans véhicule et 8 ans batterie sur les modèles électriques (à confirmer localement).',
    relatedArticles: [
      'geely-geometry-c-autonomie-autoroute-casa-rabat',
      'zeekr-france-prix-modeles-reseau-2026',
      'lynk-co-abonnement-ne-pas-acheter-voiture',
    ],
  },

  gwm: {
    founded: '1984',
    parent: 'Great Wall Motors',
    headquarters: 'Baoding, Chine',
    tagline: 'Great Wall Motors, du SUV robuste à la citadine stylée',
    intro: [
      "Great Wall Motors (GWM) est l'un des grands constructeurs chinois, historiquement reconnu pour ses SUV et pick-up robustes. Le groupe décline plusieurs marques : Ora (citadines électriques), Wey (SUV premium hybrides), Haval, Tank et Poer.",
      "GWM se distingue par une identité forte selon les marques : le style rétro-futuriste ludique d'Ora, le raffinement technologique de Wey, et une expertise reconnue sur les motorisations hybrides rechargeables à grande autonomie électrique.",
    ],
    positioning:
      "Un groupe multi-marques, du baroudeur au chic urbain, avec une expertise notable sur les hybrides rechargeables.",
    models: [
      { name: 'Ora 03', segment: 'Citadine électrique', note: 'Design rétro-futuriste attachant.' },
      { name: 'Wey 05', segment: 'SUV hybride rechargeable', note: 'Grande autonomie électrique (~158 km WLTP).' },
      { name: 'Haval / Tank', segment: 'SUV et baroudeurs', note: 'Robustesse et polyvalence.' },
    ],
    strengths: [
      'Assise industrielle solide (Great Wall Motors)',
      'Identités de marque fortes et différenciées',
      'Expertise sur les PHEV à grande autonomie électrique',
      'Design audacieux chez Ora',
    ],
    warranty: 'Généralement 7 ans sur plusieurs marchés (à confirmer localement).',
    relatedArticles: [
      'gwm-ora-citadines-electriques-design-audacieux',
      'gwm-ora-03-vs-mg3-hybrid-design-retro-efficacite',
      'gwm-wey-05-vs-volvo-xc60-recharge-phev-autonomie',
    ],
  },

  zeekr: {
    founded: '2021',
    parent: 'Geely Holding Group',
    headquarters: 'Ningbo, Chine',
    tagline: 'Le premium technologique du groupe Geely',
    intro: [
      "Créée en 2021, Zeekr est la marque haut de gamme du groupe Geely, pensée pour rivaliser frontalement avec le premium allemand. Elle bénéficie de l'ingénierie du groupe (partagée avec Volvo, Polestar, Lotus) et d'un souci constant de la finition et de la sécurité.",
      "Le Zeekr X figure d'ailleurs parmi les véhicules électriques les mieux notés aux crash-tests Euro NCAP. La marque mise sur des architectures modernes (recharge 800V) et un rapport contenu/prix inférieur aux références allemandes.",
    ],
    positioning:
      "Du vrai premium électrique, techniquement abouti et bien fini, à un tarif inférieur au premium allemand.",
    models: [
      { name: 'Zeekr 001', segment: 'Break de chasse électrique', note: 'Vaisseau amiral performant et endurant.' },
      { name: 'Zeekr X', segment: 'SUV compact premium', note: 'Design audacieux, sécurité de référence.' },
      { name: 'Zeekr 7X', segment: 'SUV électrique', note: 'Montée en gamme de l’offre.' },
    ],
    strengths: [
      'Ingénierie Geely (Volvo, Lotus)',
      'Finition et sécurité de haut niveau',
      'Recharge rapide (architecture 800V)',
      'Prix inférieur au premium allemand',
    ],
    warranty: 'Généralement 5 ans véhicule et 8 ans batterie (à confirmer localement).',
    relatedArticles: [
      'zeekr-france-prix-modeles-reseau-2026',
      'zeekr-001-vs-tesla-model-s-silicon-valley-tremble-2026',
      'zeekr-x-vs-volvo-ex30-cousins-chinois',
      'zeekr-001-vs-nio-et7-luxe-technologique-chinois',
    ],
  },

  nio: {
    founded: '2014',
    parent: 'NIO Inc.',
    headquarters: 'Shanghai, Chine',
    tagline: "Le premium électrique et son échange de batterie unique",
    intro: [
      "Fondée en 2014, NIO s'est imposée comme une marque premium électrique à part, grâce à une innovation majeure : l'échange de batterie. Plutôt que de recharger, ses voitures peuvent troquer leur batterie vide contre une pleine en quelques minutes dans une station dédiée.",
      "NIO propose aussi le modèle « Battery as a Service » (BaaS), qui permet d'acheter la voiture sans la batterie, louée à l'usage. La marque soigne l'expérience client (assistant IA Nomi, NIO Houses) et vise le très haut de gamme.",
    ],
    positioning:
      "Un premium d'un genre nouveau, tourné vers la technologie, le service et l'échange de batterie.",
    models: [
      { name: 'ET5', segment: 'Berline électrique', note: 'Rivale premium, ~490 ch.' },
      { name: 'ET7', segment: 'Grande berline', note: 'Vaisseau amiral technologique.' },
      { name: 'EL6', segment: 'SUV', note: 'Performant, jusqu’à ~653 ch.' },
      { name: 'EL7', segment: 'Grand SUV', note: 'Confort feutré, ambiance cocon.' },
    ],
    strengths: [
      'Échange de batterie en quelques minutes',
      'Modèle « Battery as a Service » (achat sans batterie)',
      'Expérience client soignée (assistant Nomi, NIO Houses)',
      'Performances élevées et finition premium',
    ],
    warranty: 'Généralement 5 ans véhicule, batterie couverte ou via abonnement (à confirmer localement).',
    relatedArticles: [
      'nio-battery-as-a-service-louer-ou-acheter-batterie',
      'nio-echange-batterie-vs-tesla-superchargeur-voyage',
      'nio-et5-vs-bmw-i4-alternative-premium-chinoise',
      'nio-el6-vs-xpeng-g9-grands-suv-electriques-premium',
    ],
  },

  xpeng: {
    founded: '2014',
    parent: 'XPeng Inc.',
    headquarters: 'Guangzhou, Chine',
    tagline: "La marque qui mise tout sur l'intelligence artificielle",
    intro: [
      "Fondée en 2014, XPeng est le constructeur chinois le plus « tech » : il fait de l'intelligence artificielle et du logiciel le cœur de son identité, investissant massivement dans la conduite assistée pour rivaliser avec le FSD de Tesla.",
      "XPeng se distingue aussi par ses architectures 800V à recharge ultra-rapide, et par une philosophie de voiture évolutive par mises à jour à distance. Ses modèles conjuguent technologie de pointe et prix compétitifs.",
    ],
    positioning:
      "Le plus technophile des constructeurs chinois : IA, conduite assistée et recharge 800V.",
    models: [
      { name: 'G6', segment: 'SUV compact électrique', note: 'Recharge 800V ultra-rapide, rival de la Model Y.' },
      { name: 'G9', segment: 'Grand SUV premium', note: 'Recharge parmi les plus rapides du marché.' },
      { name: 'P7', segment: 'Berline électrique', note: 'Interface logicielle avancée.' },
    ],
    strengths: [
      'Avance sur la conduite assistée et l’IA',
      'Architecture 800V (recharge très rapide)',
      'Voiture évolutive par mises à jour à distance',
      'Rapport technologie/prix agressif',
    ],
    warranty: 'Généralement 5 ans véhicule et 8 ans batterie (à confirmer localement).',
    relatedArticles: [
      'xpeng-marque-intelligence-artificielle-automobile',
      'xpeng-g6-vs-tesla-model-y-recharge-rapide',
      'lidar-xpeng-vs-vision-tesla-conduite-autonome-france',
      'charge-800v-zeekr-xpeng-humilient-constructeurs-historiques',
    ],
  },

  leapmotor: {
    founded: '2015',
    parent: 'Leapmotor / Stellantis (co-entreprise Leapmotor International)',
    headquarters: 'Hangzhou, Chine',
    tagline: "L'accessible chinois distribué par le réseau Stellantis",
    intro: [
      "Fondée en 2015, Leapmotor a pris un avantage décisif en s'alliant à Stellantis (Peugeot, Citroën, Fiat, Opel…), qui distribue ses véhicules via son vaste réseau européen. Cette alliance résout d'emblée le principal frein des marques chinoises : le SAV et le réseau.",
      "L'alliance permet aussi à Leapmotor d'ajuster son empreinte industrielle pour rester éligible au bonus écologique, là où beaucoup de chinoises l'ont perdu. Sa citadine T03 en profite pleinement.",
    ],
    positioning:
      "L'électrique chinois abordable, rassuré par le réseau et le SAV Stellantis.",
    models: [
      { name: 'T03', segment: 'Micro-citadine électrique', note: 'Très bien équipée, éligible au bonus.' },
      { name: 'C10', segment: 'SUV familial électrique', note: 'Spacieux et bien doté.' },
      { name: 'C11', segment: 'Grand SUV électrique', note: 'Lidar, ADAS, recharge 800V sur les versions hautes.' },
    ],
    strengths: [
      'Réseau et SAV via Stellantis (atout majeur)',
      'Éligibilité au bonus préservée (T03)',
      'Rapport équipement/prix agressif',
      'Dotation technologique généreuse',
    ],
    warranty: 'Selon les marchés, garantie véhicule et batterie alignée sur les standards Stellantis (à confirmer localement).',
    relatedArticles: [
      'leapmotor-alliance-stellantis-sav-europe',
      'leapmotor-t03-vs-dacia-spring-electrique-15000',
      'leapmotor-c11-vs-byd-seal-u-suv-familial-prix',
    ],
  },
};
