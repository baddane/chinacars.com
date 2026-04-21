/**
 * Static article seed data — fallback when Sanity is not yet configured.
 * Shape kept aligned with the Sanity `article` schema so a switch
 * to sanityFetch(allArticlesQuery) is drop-in.
 */

export interface ArticleBlock {
  tag: 'h2' | 'p';
  text: string;
}

export interface ArticleSeed {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categorySlug: string;
  publishedAt: string; // ISO 8601
  readingTime: number;
  author?: string;
  body?: ArticleBlock[];
}

export const articles: ArticleSeed[] = [
  {
    slug: 'byd-seal-prix-maroc-2024',
    title: 'BYD Seal : la berline qui fait trembler Tesla arrive en force',
    excerpt:
      "Avec son design fluide, ses performances de haut vol et son rapport prix/équipement imbattable, la BYD Seal s'impose comme la référence des berlines électriques chinoises.",
    image: 'https://picsum.photos/seed/bydseal/1200/800',
    category: 'Nouveauté',
    categorySlug: 'nouveaute',
    publishedAt: '2024-04-12T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction VéhiculesChinois',
    body: [
      {
        tag: 'h2',
        text: 'Une berline qui redéfinit les standards',
      },
      {
        tag: 'p',
        text: "Lancée en 2022 en Chine, la BYD Seal débarque progressivement sur les marchés francophones avec une proposition technique difficile à ignorer. Construite sur la plateforme e-Platform 3.0, elle intègre la technologie exclusive CTB (Cell-to-Body) qui fusionne la batterie dans la structure du plancher — renforçant la rigidité de caisse de 40 % tout en abaissant le centre de gravité pour un comportement routier plus sportif.",
      },
      {
        tag: 'h2',
        text: 'Deux versions, deux ambitions',
      },
      {
        tag: 'p',
        text: "L'entrée de gamme propulsion (RWD) développe 204 ch pour une autonomie WLTP de 520 km. Le modèle AWD Performance double la mise avec deux moteurs totalisant 530 ch, propulsant la berline de 0 à 100 km/h en 3,8 secondes — un chiffre qui défie des sportives autrement plus onéreuses. La charge rapide DC de 150 kW permet de passer de 10 à 80 % en moins de 30 minutes.",
      },
      {
        tag: 'p',
        text: "Selon les marchés, la Seal est proposée entre 39 000 et 49 000 € TTC. La garantie constructeur couvre 6 ans ou 150 000 km, et la batterie bénéficie d'une couverture spécifique de 8 ans ou 160 000 km — un argument de poids pour rassurer les acheteurs encore hésitants face aux véhicules électriques.",
      },
      {
        tag: 'h2',
        text: 'Un intérieur technologique de haut vol',
      },
      {
        tag: 'p',
        text: "La planche de bord est dominée par un écran rotatif de 15,6 pouces pivotant du mode paysage au mode portrait selon les usages. La connectivité intègre Apple CarPlay et Android Auto sans fil, et le système audio DigiBar de 12 haut-parleurs transforme chaque trajet en véritable expérience sonore. L'empattement de 2 900 mm garantit un espace arrière digne d'une grande berline premium.",
      },
      {
        tag: 'h2',
        text: 'Face à la concurrence : le bon choix ?',
      },
      {
        tag: 'p',
        text: "La BYD Seal se positionne avec conviction face à la Tesla Model 3 et aux berlines électriques européennes. Son principal atout reste le rapport contenu/prix, difficile à égaler. Ses clients cibles sont des cadres urbains aisés cherchant une alternative crédible aux BMW Série 3 et Mercedes Classe C thermiques, sans les contraintes liées aux prix du carburant ni aux restrictions de circulation en zones à faibles émissions.",
      },
    ],
  },
  {
    slug: 'mg-cyberster-roadster-electrique',
    title: 'MG Cyberster : le roadster électrique enfin dévoilé',
    excerpt:
      'MG renoue avec son passé sportif en lançant un cabriolet 100 % électrique aux performances décoiffantes.',
    image: 'https://picsum.photos/seed/mgcyber/1200/800',
    category: 'Sportive',
    categorySlug: 'essai',
    publishedAt: '2024-04-10T09:00:00+01:00',
    readingTime: 5,
    author: 'Rédaction VéhiculesChinois',
    body: [
      {
        tag: 'h2',
        text: 'Un hommage aux roadsters MG d'antan',
      },
      {
        tag: 'p',
        text: "MG Motor, marque britannique rachetée par SAIC en 1994, renoue avec son ADN sportif en lançant le Cyberster, un cabriolet 100 % électrique à la ligne agressive et aux performances redoutables. Là où la marque s'était longtemps cantonnée aux SUV et citadines pragmatiques, ce roadster deux places envoie un signal fort : MG peut jouer dans la cour des grands.",
      },
      {
        tag: 'h2',
        text: 'Performances de supercar, prix de sportive',
      },
      {
        tag: 'p',
        text: "Le Cyberster AWD Performance déploie 536 ch grâce à deux moteurs électriques, lui permettant d'abattre le 0-100 km/h en 3,2 secondes chrono. La transmission délivre son couple instantanément dès la moindre pression sur l'accélérateur — une vivacité qui coupe le souffle, et la capote.",
      },
      {
        tag: 'p',
        text: "La batterie de 77 kWh offre jusqu'à 443 km d'autonomie WLTP en version propulsion, et 370 km pour l'AWD. La charge rapide de 150 kW permet de récupérer 130 km d'autonomie en seulement 10 minutes — idéal pour une courte pause sur la route des vacances.",
      },
      {
        tag: 'h2',
        text: 'Un design qui polarise — et c'est voulu',
      },
      {
        tag: 'p',
        text: "La silhouette du Cyberster joue délibérément la carte de la provocation : optiques LED en liseré sous le capot, capote électrique rétractable en 3 secondes, feux arrière en Y signature de la marque. L'intérieur adopte un tableau de bord tripartite — trois écrans disposés en arc face au conducteur — mêlant nostalgie de la sportivité britannique et modernité numérique.",
      },
      {
        tag: 'h2',
        text: 'Disponibilité et tarifs',
      },
      {
        tag: 'p',
        text: "Commercialisé en Europe depuis fin 2023 à partir de 54 990 €, le Cyberster est déjà livré chez plusieurs concessionnaires MG en France, Belgique et Suisse. Son positionnement tarifaire le place en dessous des Porsche Boxster électrique et BMW Z4, tout en offrant des prestations comparables. Une alternative sérieuse pour les amateurs de sensations à l'électrique.",
      },
    ],
  },
  {
    slug: 'importer-voiture-chinoise-maroc-2024',
    title: 'Guide : comment importer une voiture chinoise en 2024 ?',
    excerpt:
      "Tout ce qu'il faut savoir sur les taxes, le dédouanement et les démarches d'homologation selon votre pays.",
    image: 'https://picsum.photos/seed/import/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-04-08T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction VéhiculesChinois',
    body: [
      {
        tag: 'h2',
        text: 'Pourquoi importer directement de Chine ?',
      },
      {
        tag: 'p',
        text: "Avec des prix à la production souvent 20 à 30 % inférieurs à ceux pratiqués sur les marchés d'exportation, importer directement depuis la Chine peut sembler attrayant. Pourtant, la procédure est complexe, les obstacles nombreux et les économies moins évidentes qu'il n'y paraît. Ce guide détaille les étapes clés pour les acheteurs en France, en Belgique, en Suisse et dans les pays francophones d'Afrique du Nord.",
      },
      {
        tag: 'h2',
        text: 'Les taxes à l'importation selon les zones',
      },
      {
        tag: 'p',
        text: "En Union européenne, les véhicules électriques importés de Chine sont désormais soumis à des droits de douane additionnels décidés en 2024 par la Commission européenne : entre 17,4 % (BYD) et 35,3 % (SAIC/MG) selon le constructeur, en plus du droit de base de 10 %. Ces mesures anti-subvention visent à rétablir une concurrence équitable avec les constructeurs européens.",
      },
      {
        tag: 'p',
        text: "En Suisse — hors UE — les droits de douane sur les VE restent à 0 % depuis 2023, ce qui en fait une porte d'entrée privilégiée. Au Maroc, le taux préférentiel de 2,5 % s'applique aux VE, contre 17,5 % pour les thermiques, dans le cadre des accords commerciaux bilatéraux.",
      },
      {
        tag: 'h2',
        text: 'L'homologation : l'étape incontournable',
      },
      {
        tag: 'p',
        text: "Tout véhicule importé individuellement doit obtenir une réception à titre isolé (RTI). En France, cette procédure est instruite par le Ministère chargé des transports et nécessite la fourniture de la fiche technique complète, des certificats de conformité aux normes Euro 6d (ou équivalent VE) et des tests techniques sur place. La durée oscille entre 4 et 10 semaines pour un coût de 1 500 à 4 000 €.",
      },
      {
        tag: 'h2',
        text: 'Les pièges à éviter',
      },
      {
        tag: 'p',
        text: "Le premier piège est l'achat via des plateformes non vérifiées. Le second est de sous-estimer les frais de transport maritime et d'assurance — comptez entre 2 500 et 5 000 $ depuis les ports de Shanghai ou Tianjin vers un port européen. Enfin, la disponibilité des pièces de rechange post-garantie est un point critique : privilégiez les marques ayant un réseau officiel solide dans votre pays.",
      },
    ],
  },
  {
    slug: 'chery-tiggo-8-pro-suv-7-places',
    title: 'Chery Tiggo 8 Pro : le SUV 7 places qui bouscule les codes',
    excerpt:
      'Confort, technologie et espace : le nouveau fleuron de Chery arrive avec des arguments solides face aux références japonaises et coréennes.',
    image: 'https://picsum.photos/seed/chery/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-04-05T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction VéhiculesChinois',
    body: [
      {
        tag: 'h2',
        text: 'Le challenger venu d'Orient',
      },
      {
        tag: 'p',
        text: "Le Chery Tiggo 8 Pro s'impose comme l'une des propositions les plus complètes du segment des SUV familiaux sept places. Avec son gabarit imposant — 4,75 m de long — et son habitacle soigné, il s'attaque frontalement aux Toyota Highlander, Kia Sorento et Hyundai Santa Fe sur les marchés francophones. Après une semaine passée en sa compagnie entre villes et grands axes, nous avons un avis tranché.",
      },
      {
        tag: 'h2',
        text: 'Un moteur turbo efficace',
      },
      {
        tag: 'p',
        text: "Sous le capot, le 4 cylindres 2.0 TGDI développe 197 ch et 400 Nm de couple, associé à une boîte DCT à 7 rapports. Il assure des reprises vives sans être clinquant, avec une consommation annoncée de 8,2 L/100 km en cycle mixte — une valeur honnête confirmée par nos mesures réelles en conditions variées.",
      },
      {
        tag: 'h2',
        text: 'Un équipement qui écrase la concurrence',
      },
      {
        tag: 'p',
        text: "L'équipement de série est tout simplement impressionnant pour le prix : toit panoramique électrique, sièges en cuir chauffants et ventilés, système audio SONY 12 haut-parleurs, affichage tête haute couleur et 16 aides à la conduite incluant régulateur adaptatif, maintien de voie et freinage automatique d'urgence. Chez la concurrence européenne, cette dotation vous coûterait 150 000 DH ou 15 000 € de plus.",
      },
      {
        tag: 'h2',
        text: 'L'habitabilité, argument numéro 1',
      },
      {
        tag: 'p',
        text: "La troisième rangée de sièges, souvent sacrifiée sur l'autel du style chez la concurrence, se révèle ici réellement utilisable pour de courts trajets. L'empattement de 2 820 mm profite avant tout aux passagers des deuxième et troisième rangées. Avec 1 742 litres de coffre tous sièges rabattus, le Tiggo 8 Pro répond sans difficulté aux besoins des grandes familles.",
      },
      {
        tag: 'p',
        text: "Commercialisé entre 35 000 et 42 000 € selon les marchés, le Tiggo 8 Pro propose un rapport équipement/prix que ses concurrents japonais et coréens peinent à égaler. Si la valeur de revente reste encore légèrement inférieure aux références établies, l'écart se resserre d'année en année à mesure que la marque gagne en notoriété.",
      },
    ],
  },
  {
    slug: 'geely-geometry-c-autonomie-autoroute-casa-rabat',
    title: "Geely Geometry C : l'autonomie réelle testée sur autoroute",
    excerpt:
      "Nous avons poussé la Geometry C dans ses retranchements pour vérifier ses promesses d'autonomie sur un long trajet autoroutier.",
    image: 'https://picsum.photos/seed/geely/1200/800',
    category: 'Test',
    categorySlug: 'essai',
    publishedAt: '2024-04-01T09:00:00+01:00',
    readingTime: 9,
    author: 'Rédaction VéhiculesChinois',
    body: [
      {
        tag: 'h2',
        text: 'Le défi : 180 km aller-retour sans recharge',
      },
      {
        tag: 'p',
        text: "Nous avons pris le départ à 7h00 du matin, batterie chargée à 100 % indiquant 432 km d'autonomie sur l'ordinateur de bord. L'objectif : parcourir 90 km à vitesse autoroutière, faire une halte de deux heures, puis rentrer sans brancher le véhicule.",
      },
      {
        tag: 'h2',
        text: 'Sur l'autoroute : la réalité de la consommation',
      },
      {
        tag: 'p',
        text: "À 120 km/h stabilisés, la Geometry C consomme environ 18 kWh/100 km — soit un écart de 30 % par rapport aux valeurs WLTP obtenues en cycle mixte. C'est la norme pour n'importe quel véhicule électrique, et la Geely ne déroge pas à cette loi physique. À l'arrivée à destination, l'affichage indiquait 208 km restants : nous avions consommé 224 km d'autonomie pour 90 km parcourus.",
      },
      {
        tag: 'p',
        text: "Sur le chemin du retour, en adoptant une conduite plus économique à 100 km/h avec le mode Eco activé, la consommation chute à 15 kWh/100 km. À l'arrivée, il restait 68 km d'autonomie estimée. Mission accomplie, mais avec une marge plus réduite que prévu. Leçon : sur autoroute, anticipez 40 % de consommation supplémentaire par rapport à l'WLTP.",
      },
      {
        tag: 'h2',
        text: 'En ville : là où la Geometry C brille vraiment',
      },
      {
        tag: 'p',
        text: "En conduite urbaine, la compacte de Geely révèle ses vraies qualités. La récupération d'énergie au freinage est efficace (jusqu'à 0,3g de décélération sur le palier le plus élevé), et la consommation tombe à 12-13 kWh/100 km dans les embouteillages. L'autonomie urbaine réelle s'établit ainsi autour de 380 km — un résultat très honnête pour une compacte de ce segment.",
      },
      {
        tag: 'h2',
        text: 'Notre verdict',
      },
      {
        tag: 'p',
        text: "La Geely Geometry C tient ses promesses sur les trajets mixtes, mais les conducteurs qui empruntent régulièrement l'autoroute devront planifier leurs recharges avec rigueur. Pour un usage quotidien urbain ou péri-urbain, elle constitue l'un des meilleurs achats VE du moment dans sa tranche tarifaire — avec un rapport valeur/technologie que la concurrence européenne ne parvient pas à atteindre à ce prix.",
      },
    ],
  },
  {
    slug: 'voiture-chinoise-occasion-fiabilite',
    title: "Occasion : faut-il acheter une chinoise de seconde main ?",
    excerpt:
      'Analyse de la décote et de la fiabilité à long terme des premiers modèles arrivés sur les marchés francophones.',
    image: 'https://picsum.photos/seed/occasion/1200/800',
    category: 'Conseil',
    categorySlug: 'guide',
    publishedAt: '2024-03-28T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction VéhiculesChinois',
    body: [
      {
        tag: 'h2',
        text: 'Première génération : acquis et inconnues',
      },
      {
        tag: 'p',
        text: "Les premières MG ZS, BYD Han et Chery Tiggo importées en Europe et en Afrique du Nord remontent à 2020-2021. Quatre ans après, un véritable marché de l'occasion commence à émerger, avec des véhicules affichant entre 60 000 et 120 000 km au compteur. La question sur toutes les lèvres : tiennent-ils la distance ?",
      },
      {
        tag: 'h2',
        text: 'La décote : une opportunité bien réelle',
      },
      {
        tag: 'p',
        text: "Les marques chinoises accusent une décote plus marquée que les références européennes ou japonaises. Une MG ZS achetée 22 000 € neuf en 2021 se revend aujourd'hui entre 12 000 et 14 000 €, soit une perte de 36 à 45 % en quatre ans. À titre de comparaison, une Volkswagen T-Roc perd en moyenne 28 % sur la même période. Cette décote crée une opportunité réelle pour les acheteurs à budget limité.",
      },
      {
        tag: 'h2',
        text: 'Fiabilité : ce que disent les propriétaires',
      },
      {
        tag: 'p',
        text: "D'après les retours d'une vingtaine de propriétaires interrogés pour ce dossier, les pannes mécaniques graves sont rares sur les modèles MG et BYD des premières générations. Les problèmes signalés concernent principalement des bugs logiciels de l'écran multimédia — solubles par mise à jour OTA — et des capteurs de stationnement défaillants. Moteurs et batteries affichent une solidité globalement rassurante.",
      },
      {
        tag: 'p',
        text: "La disponibilité des pièces de rechange reste en revanche le talon d'Achille de la filière. Certains ateliers indépendants rapportent des délais de 3 à 6 semaines pour obtenir des pièces spécifiques non stockées localement. Une garantie étendue auprès du concessionnaire officiel s'avère donc particulièrement judicieuse à l'achat d'occasion.",
      },
      {
        tag: 'h2',
        text: 'Nos recommandations',
      },
      {
        tag: 'p',
        text: "Pour un achat serein, privilégiez les véhicules issus des réseaux de concessionnaires officiels, qui proposent des garanties reconditionnées de 12 à 24 mois. Évitez les transactions entre particuliers sans historique d'entretien traçable. Et pour les VE, exigez systématiquement un bilan de santé de la batterie (SOH) avant toute décision — un service que les réseaux officiels MG et BYD proposent désormais gratuitement.",
      },
    ],
  },
];

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
