/**
 * Static article seed data. Used until Sanity content is wired.
 * Shape kept aligned with the Sanity `article` schema so a switch
 * to `client.fetch(latestArticlesQuery)` is drop-in.
 */

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
}

export const articles: ArticleSeed[] = [
  {
    slug: 'byd-seal-prix-maroc-2024',
    title: 'BYD Seal : la berline qui fait trembler Tesla arrive au Maroc',
    excerpt:
      "Avec son design fluide et ses performances de haut vol, la BYD Seal s'apprête à conquérir le marché marocain des VE.",
    image: 'https://picsum.photos/seed/bydseal/1200/800',
    category: 'Nouveauté',
    categorySlug: 'nouveaute',
    publishedAt: '2024-04-12T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction ChinaCarsMA',
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
  },
  {
    slug: 'importer-voiture-chinoise-maroc-2024',
    title: 'Guide : comment importer sa voiture de Chine en 2024 ?',
    excerpt:
      "Tout ce qu'il faut savoir sur les taxes, le dédouanement et l'homologation pour le marché marocain.",
    image: 'https://picsum.photos/seed/import/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-04-08T09:00:00+01:00',
    readingTime: 8,
  },
  {
    slug: 'chery-tiggo-8-pro-suv-7-places',
    title: 'Chery Tiggo 8 Pro : le SUV 7 places qui bouscule les codes',
    excerpt:
      'Confort, technologie et espace : le nouveau fleuron de Chery arrive avec des arguments solides.',
    image: 'https://picsum.photos/seed/chery/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-04-05T09:00:00+01:00',
    readingTime: 7,
  },
  {
    slug: 'geely-geometry-c-autonomie-autoroute-casa-rabat',
    title: "Geely Geometry C : l'autonomie réelle testée sur l'autoroute Casa-Rabat",
    excerpt:
      "Nous avons poussé la Geometry C dans ses retranchements pour vérifier ses promesses d'autonomie.",
    image: 'https://picsum.photos/seed/geely/1200/800',
    category: 'Test',
    categorySlug: 'essai',
    publishedAt: '2024-04-01T09:00:00+01:00',
    readingTime: 9,
  },
  {
    slug: 'voiture-chinoise-occasion-fiabilite',
    title: "Occasion : faut-il acheter une chinoise de seconde main ?",
    excerpt:
      'Analyse de la décote et de la fiabilité à long terme des premiers modèles arrivés sur le marché.',
    image: 'https://picsum.photos/seed/occasion/1200/800',
    category: 'Conseil',
    categorySlug: 'guide',
    publishedAt: '2024-03-28T09:00:00+01:00',
    readingTime: 6,
  },

  // --- Comparatifs Chinoises entre elles (articles.md #1-20) ---
  {
    slug: 'byd-seal-vs-xiaomi-su7-ultra-2026',
    title: 'BYD Seal vs Xiaomi SU7 Ultra : quelle est la berline électrique la plus rapide en 2026 ?',
    excerpt:
      'La berline phare de BYD affronte le monstre de vitesse de Xiaomi. Performances, autonomie, prix : on a tout comparé pour vous.',
    image: 'https://picsum.photos/seed/sealsu7/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-04-28T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'mg4-vs-byd-dolphin-compactes-electriques',
    title: 'MG4 vs BYD Dolphin : le match des compactes électriques à moins de 25 000 €',
    excerpt:
      'Deux rivales chinoises se disputent le titre de meilleure compacte électrique accessible. Laquelle en donne le plus pour votre argent ?',
    image: 'https://picsum.photos/seed/mg4dolphin/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-04-21T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'zeekr-001-vs-nio-et7-luxe-technologique-chinois',
    title: 'Zeekr 001 vs NIO ET7 : le luxe technologique chinois a-t-il un nouveau roi ?',
    excerpt:
      'Deux visions opposées du luxe électrique chinois : le break sportif Zeekr contre la berline high-tech NIO. Le duel au sommet.',
    image: 'https://picsum.photos/seed/zeekrnio/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-04-14T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'omoda-5-vs-mg-zs-hybrid-suv-urbains-abordables',
    title: 'Omoda 5 vs MG ZS Hybrid+ : duel de SUV urbains abordables',
    excerpt:
      "L'outsider Omoda défie le best-seller MG sur le terrain des SUV abordables. Design, équipement, consommation : qui remporte la mise ?",
    image: 'https://picsum.photos/seed/omodamgzs/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-04-07T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'leapmotor-t03-vs-byd-seagull-micro-citadines',
    title: 'Leapmotor T03 vs BYD Seagull : quelle micro-citadine choisir pour la ville ?',
    excerpt:
      "La citadine abordable de Leapmotor face au Seagull de BYD. Budget serré, usage urbain : on vous dit laquelle convient le mieux.",
    image: 'https://picsum.photos/seed/t03seagull/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-03-31T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'xpeng-g6-vs-byd-atto-3-evo-autonomie-reelle',
    title: "XPeng G6 vs BYD Atto 3 Evo : le combat pour l'autonomie réelle",
    excerpt:
      "Deux SUV compacts électriques aux ambitions similaires s'affrontent sur le critère qui compte le plus : l'autonomie réelle hors laboratoire.",
    image: 'https://picsum.photos/seed/g6atto3/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-03-24T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'jaecoo-7-vs-chery-tiggo-8-pro-suv-familial-chery',
    title: 'Jaecoo 7 vs Chery Tiggo 8 Pro : quel SUV familial choisir chez le groupe Chery ?',
    excerpt:
      "Le groupe Chery propose deux SUV familiaux très différents. On les compare pour vous aider à choisir selon votre profil et votre budget.",
    image: 'https://picsum.photos/seed/jaecootiggo/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-03-17T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'mg-cyberster-vs-byd-seal-06-gt-plaisir-conduite',
    title: 'MG Cyberster vs BYD Seal 06 GT : le plaisir de conduire version chinoise',
    excerpt:
      "Roadster électrique contre berline GT : la Chine prouve qu'elle sait aussi construire des voitures pour le plaisir de conduire.",
    image: 'https://picsum.photos/seed/cybersterseal06/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-03-10T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'nio-el6-vs-xpeng-g9-grands-suv-electriques-premium',
    title: 'NIO EL6 vs XPeng G9 : duel de grands SUV électriques premium',
    excerpt:
      "NIO et XPeng s'affrontent sur le segment des grands SUV premium. Technologies embarquées, recharge et habitabilité passées au crible.",
    image: 'https://picsum.photos/seed/nioelxpeng/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-03-03T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'gwm-ora-03-vs-mg3-hybrid-design-retro-efficacite',
    title: 'GWM Ora 03 vs MG3 Hybrid+ : design rétro ou efficacité hybride ?',
    excerpt:
      "La citadine au look vintage de GWM face à la MG3 Hybrid+ très efficace. Deux philosophies pour la ville, un seul choix à faire.",
    image: 'https://picsum.photos/seed/ora03mg3/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-02-24T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'zeekr-x-vs-volvo-ex30-cousins-chinois',
    title: 'Zeekr X vs Volvo EX30 : deux cousins chinois sur le même segment',
    excerpt:
      "Même plateforme Geely, deux identités de marque radicalement différentes. Le SUV compact Zeekr X face au Volvo EX30, cousins mais rivaux.",
    image: 'https://picsum.photos/seed/zeekrxex30/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-02-17T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'avatr-11-vs-hiphi-z-design-chinois-futuriste',
    title: 'Avatr 11 vs HiPhi Z : quand le design chinois devient futuriste',
    excerpt:
      "Avatr et HiPhi repoussent les limites du design automobile. Ces deux concept-cars habillables de série incarnent l'avenir de l'auto chinoise.",
    image: 'https://picsum.photos/seed/avatrhiphi/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-02-10T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'byd-shark-vs-maxus-t90-ev-pickup-chinois-pros',
    title: 'BYD Shark vs Maxus T90 EV : quel pick-up chinois pour les pros ?',
    excerpt:
      "Le pick-up hybride BYD Shark affronte l'électrique Maxus T90. Charge utile, autonomie pro et prix : le comparatif indispensable.",
    image: 'https://picsum.photos/seed/sharkmaxt90/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-02-03T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'lynk-co-01-vs-mg-ehs-hybride-rechargeable-partage',
    title: "Lynk & Co 01 vs MG EHS : l'hybride rechargeable en mode partage",
    excerpt:
      "Deux SUV hybrides rechargeables chinois aux modèles commerciaux innovants : l'abonnement Lynk & Co contre l'achat classique MG EHS.",
    image: 'https://picsum.photos/seed/lynkcomgehs/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-01-27T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'hongqi-e-hs9-vs-nio-el7-luxe-presidentiel-technologie',
    title: 'Hongqi E-HS9 vs NIO EL7 : le luxe "présidentiel" face à la technologie',
    excerpt:
      "Le SUV de la marque officielle chinoise Hongqi contre le high-tech NIO EL7. Deux visions du luxe électrique, deux mondes qui s'affrontent.",
    image: 'https://picsum.photos/seed/hongqiniosuv/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-01-20T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'byd-tang-2026-vs-mg-s9-suv-7-places',
    title: 'BYD Tang 2026 vs MG S9 : le match des SUV 7 places',
    excerpt:
      "Espace, polyvalence et motorisation : le BYD Tang restylé affronte le nouveau MG S9 pour le titre de meilleur SUV familial 7 places.",
    image: 'https://picsum.photos/seed/tangmgs9/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-01-13T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'xiaomi-su7-vs-xpeng-p7i-interface-logicielle',
    title: 'Xiaomi SU7 vs XPeng P7i : quelle interface logicielle est la plus fluide ?',
    excerpt:
      "HyperOS de Xiaomi contre le Xmart OS de XPeng : on a testé en profondeur les deux systèmes d'infodivertissement les plus avancés du marché.",
    image: 'https://picsum.photos/seed/su7p7i/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2026-01-06T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'leapmotor-c11-vs-byd-seal-u-suv-familial-prix',
    title: 'Leapmotor C11 vs BYD Seal U : le SUV familial au meilleur rapport prix-prestations',
    excerpt:
      "Deux SUV familiaux électriques à prix maîtrisés s'affrontent. Leapmotor C11 ou BYD Seal U : lequel offre le meilleur rapport qualité-prix ?",
    image: 'https://picsum.photos/seed/c11sealu/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-12-22T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'seres-5-vs-voyah-free-outsiders-chinois',
    title: 'Seres 5 vs Voyah Free : les outsiders chinois qui veulent percer',
    excerpt:
      "Seres et Voyah, deux marques méconnues avec des ambitions immenses. On fait le point sur ces outsiders qui bousculent le marché européen.",
    image: 'https://picsum.photos/seed/seresvoyah/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-12-15T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'mg5-vs-byd-han-break-vs-berline',
    title: 'MG5 vs BYD Han : break pratique ou berline statutaire ?',
    excerpt:
      "Le break électrique MG5 face à la berline premium BYD Han. Deux postures différentes pour deux types de conducteurs : lequel êtes-vous ?",
    image: 'https://picsum.photos/seed/mg5byhan/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-12-08T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction ChinaCarsMA',
  },

  // --- Défis aux Européennes (articles.md #21-40) ---
  {
    slug: 'xiaomi-su7-vs-porsche-taycan-eleve-depasse-maitre',
    title: "Xiaomi SU7 vs Porsche Taycan : l'élève a-t-il dépassé le maître ?",
    excerpt:
      "La berline électrique de Xiaomi se compare ouvertement à la Taycan de Porsche. Les chiffres sont-ils à la hauteur des promesses ? On tranche.",
    image: 'https://picsum.photos/seed/su7taycan/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-12-01T09:00:00+01:00',
    readingTime: 9,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'mg-zs-hybrid-vs-dacia-duster-hybrid-low-cost',
    title: 'MG ZS Hybrid+ vs Dacia Duster Hybrid : le trône du low-cost est-il menacé ?',
    excerpt:
      "Le SUV abordable MG ZS Hybrid+ s'attaque au roi du segment budget, le Dacia Duster. Qui offre le meilleur compromis en 2026 ?",
    image: 'https://picsum.photos/seed/mgzsduster/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-11-24T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'byd-atto-3-evo-vs-renault-scenic-e-tech-suv-annee',
    title: 'BYD Atto 3 Evo vs Renault Scenic E-Tech : le match des SUV de l\'année',
    excerpt:
      "Le SUV électrique de BYD remis à niveau affronte le Scenic récompensé en Europe. Design, autonomie, technologies : tout y passe.",
    image: 'https://picsum.photos/seed/atto3scenic/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-11-17T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'zeekr-001-vs-tesla-model-s-silicon-valley-tremble-2026',
    title: 'Zeekr 001 vs Tesla Model S : pourquoi la Silicon Valley tremble en 2026',
    excerpt:
      "Le break électrique Zeekr 001 s'en prend à la Model S de Tesla. Autonomie, recharge 800V et prix cassé : le challenger fait trembler le leader.",
    image: 'https://picsum.photos/seed/zeekr001models/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-11-10T09:00:00+01:00',
    readingTime: 9,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'omoda-5-shs-h-vs-toyota-yaris-cross-hybride',
    title: "Omoda 5 SHS-H vs Toyota Yaris Cross : l'hybride japonais face au nouveau venu",
    excerpt:
      "La technologie hybride SHS-H d'Omoda chamboule le segment des SUV urbains où le Yaris Cross régnait en maître. Voici qui sort gagnant.",
    image: 'https://picsum.photos/seed/omoda5yaris/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-11-03T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'mg3-hybrid-vs-renault-clio-e-tech-hegemonie-francaise',
    title: 'MG3 Hybrid+ vs Renault Clio E-Tech : la fin de l\'hégémonie française ?',
    excerpt:
      "La MG3 Hybrid+ débarque sur le terrain de la Clio E-Tech avec des arguments redoutables. Le roi de la citadine française est-il en danger ?",
    image: 'https://picsum.photos/seed/mg3clioetech/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-10-27T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'byd-seal-vs-tesla-model-3-highland-berline-ultime-2026',
    title: 'BYD Seal vs Tesla Model 3 Highland : la berline électrique ultime en 2026',
    excerpt:
      "Le duel tant attendu entre la BYD Seal et la Tesla Model 3 Highland. Autonomie réelle, performances et rapport qualité-prix : le verdict.",
    image: 'https://picsum.photos/seed/sealmodel3/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-10-20T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'jaecoo-5-vs-volkswagen-tiguan-menace-chinoise',
    title: 'Jaecoo 5 vs Volkswagen Tiguan : le SUV allemand face à la menace chinoise',
    excerpt:
      "Le Jaecoo 5 ose s'attaquer au Tiguan, référence des SUV familiaux. Finition, motorisation, prix : l'Allemagne peut-elle encore dormir tranquille ?",
    image: 'https://picsum.photos/seed/jaecoo5tiguan/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-10-13T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'nio-et5-vs-bmw-i4-alternative-premium-chinoise',
    title: "NIO ET5 vs BMW i4 : l'alternative chinoise est-elle vraiment premium ?",
    excerpt:
      "La berline électrique NIO ET5 s'attaque à la BMW i4, symbole du premium électrique allemand. Tarifs, finition et services : qui gagne ?",
    image: 'https://picsum.photos/seed/niet5bmwi4/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-10-06T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'xpeng-g6-vs-tesla-model-y-recharge-rapide',
    title: 'XPeng G6 vs Tesla Model Y : pourquoi le G6 gagne sur la recharge rapide',
    excerpt:
      "Le XPeng G6 rivalise avec la Model Y sur quasiment tous les points. Mais sur la recharge 800V, il humilie la référence de Tesla.",
    image: 'https://picsum.photos/seed/g6modely/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-09-29T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'mg4-xpower-vs-volkswagen-id3-gtx-compactes-sportives',
    title: 'MG4 XPower vs Volkswagen ID.3 GTX : le combat des compactes sportives',
    excerpt:
      "La MG4 XPower propulsion arrière affronte l'ID.3 GTX quatre roues motrices. Sensations, puissance et prix : l'électrique sportif à prix démocratique.",
    image: 'https://picsum.photos/seed/mg4xpid3gtx/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-09-22T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'leapmotor-t03-vs-dacia-spring-electrique-15000',
    title: "Leapmotor T03 vs Dacia Spring : l'électrique à 15 000 €, c'est encore possible ?",
    excerpt:
      "La Dacia Spring et le Leapmotor T03 se battent pour rendre l'électrique accessible à tous. On vérifie si leurs promesses tiennent la route.",
    image: 'https://picsum.photos/seed/t03spring/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-09-15T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'byd-han-vs-mercedes-eqe-luxe-chinois-confort-allemand',
    title: 'BYD Han vs Mercedes EQE : le luxe chinois face au confort allemand',
    excerpt:
      "La berline phare BYD Han face à la Mercedes EQE : deux philosophies du luxe électrique. L'une domine sur le prix, l'autre sur la réputation.",
    image: 'https://picsum.photos/seed/bydhaneqe/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-09-08T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'omoda-e5-vs-hyundai-kona-electric-design-futuriste',
    title: 'Chery Omoda E5 vs Hyundai Kona Electric : le design futuriste face à la polyvalence',
    excerpt:
      "L'Omoda E5 joue la carte du design spectaculaire face au Kona Electric polyvalent. Autonomie, équipement et prix : le verdict du segment.",
    image: 'https://picsum.photos/seed/omodae5kona/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-09-01T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'gwm-wey-05-vs-volvo-xc60-recharge-phev-autonomie',
    title: 'GWM Wey 05 vs Volvo XC60 Recharge : quel hybride rechargeable offre le plus d\'autonomie ?',
    excerpt:
      "Le Wey 05 de GWM défie le Volvo XC60 Recharge sur le terrain de l'autonomie électrique en PHEV. Les chiffres réels sont surprenants.",
    image: 'https://picsum.photos/seed/wey05xc60/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-08-25T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'mg-zs-ev-vs-peugeot-e2008-suv-urbain-electrique',
    title: 'MG ZS EV vs Peugeot e-2008 : le SUV urbain électrique le plus rationnel',
    excerpt:
      "Le MG ZS EV propose plus d'autonomie pour moins cher que le Peugeot e-2008. Mais la marque française garde des atouts. Lequel choisir ?",
    image: 'https://picsum.photos/seed/mgzseve2008/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-08-18T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'byd-seagull-vs-citroen-ec3-guerre-petites-electriques',
    title: 'BYD Seagull vs Citroën ë-C3 : la guerre des petites électriques est lancée',
    excerpt:
      "Deux citadines électriques accessibles s'affrontent : le Seagull de BYD à prix imbattable contre l'ë-C3 de Citroën au style décalé.",
    image: 'https://picsum.photos/seed/seagullec3/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-08-11T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'zeekr-x-vs-audi-q4-etron-style-sobriete',
    title: 'Zeekr X vs Audi Q4 e-tron : le style face à la sobriété',
    excerpt:
      "Le Zeekr X au design audacieux affronte l'Audi Q4 e-tron sobre et premium. Budget, technologies et conduite : qui séduira les acheteurs ?",
    image: 'https://picsum.photos/seed/zeekrxq4/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-08-04T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'lynk-co-02-vs-renault-megane-e-tech-crossover-compacte',
    title: 'Lynk & Co 02 vs Renault Mégane E-Tech : le crossover contre la compacte',
    excerpt:
      "Le crossover Lynk & Co 02 s'en prend à la Mégane E-Tech, compacte électrique de référence. Laquelle est la plus convaincante au quotidien ?",
    image: 'https://picsum.photos/seed/lynkco02megane/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-07-28T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'hongqi-l5-vs-rolls-royce-ghost-ultra-luxe-chinois',
    title: 'Hongqi L5 vs Rolls-Royce Ghost : quand la Chine s\'attaque à l\'ultra-luxe',
    excerpt:
      "La limousine d'État Hongqi L5 ose se comparer à la Rolls-Royce Ghost. Prestations, artisanat et image : un écart ou une réelle compétition ?",
    image: 'https://picsum.photos/seed/hongqil5ghost/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-07-21T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction ChinaCarsMA',
  },

  // --- Focus Technologie (articles.md #41-43) ---
  {
    slug: 'batterie-byd-blade-vs-tesla-4680-durabilite',
    title: 'Batterie BYD Blade vs Tesla 4680 : laquelle dure vraiment le plus longtemps ?',
    excerpt:
      "LFP Blade de BYD contre les cellules cylindriques 4680 de Tesla : on analyse densité énergétique, cycles de charge et dégradation réelle.",
    image: 'https://picsum.photos/seed/bladevs4680/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-07-14T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'nio-echange-batterie-vs-tesla-superchargeur-voyage',
    title: 'Station d\'échange NIO vs Superchargeurs Tesla : quelle est la meilleure solution de voyage ?',
    excerpt:
      "Swap de batterie NIO en 3 minutes ou supercharge Tesla en 20 minutes ? On compare les deux systèmes pour les longs trajets autoroutiers.",
    image: 'https://picsum.photos/seed/nioswaptesla/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-07-07T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
  },
  {
    slug: 'lidar-xpeng-vs-vision-tesla-conduite-autonome-france',
    title: 'Lidar XPeng vs Vision Tesla : qui propose la meilleure conduite autonome en France ?',
    excerpt:
      "XPeng mise sur le Lidar, Tesla sur les caméras seules. En conditions réelles sur routes françaises, qui offre la meilleure assistance à la conduite ?",
    image: 'https://picsum.photos/seed/lidarxpengtesla/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-06-30T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction ChinaCarsMA',
  },
];

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
