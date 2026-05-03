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
  body?: string; // HTML — rendered when CMS body is not yet available
}

export const articles: ArticleSeed[] = [
  {
    slug: 'mg-zs-hybrid-plus-perte-de-puissance-cause-solution',
    title: 'MG ZS Hybrid+ : le problème de perte de puissance expliqué (197 ch → 55 ch)',
    excerpt:
      'Sur autoroute ou en côte, le MG ZS Hybrid+ peut perdre les trois quarts de sa puissance annoncée. On vous explique pourquoi ça arrive, comment le reconnaître, et ce que la mise à jour logicielle PD052 change vraiment.',
    image: 'https://picsum.photos/seed/mgzshybridplus/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2026-05-03T09:00:00+01:00',
    readingTime: 10,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Un SUV hybride qui peut perdre 72 % de sa puissance</h2>
<p>Le MG ZS Hybrid+ est affiché à 197 ch. C'est ce que dit la fiche technique, ce que répètent les concessionnaires, et ce que lisent les acheteurs avant de signer. Sauf que, dans certaines conditions de conduite parfaitement ordinaires — une montée d'autoroute, une côte soutenue à 110 km/h — cette puissance peut s'effondrer jusqu'à <strong>55 ch</strong>. Soit 142 ch qui disparaissent, un manque à gagner de 72 %.</p>
<p>Ce n'est pas une rumeur de forum. C'est ce que <em>Automobile Propre</em> a mesuré lors de son essai longue durée et de son "Supertest" : "une simple pente sur l'autoroute suffit à observer le phénomène, le SUV pouvant perdre de la vitesse". Le phénomène est réel, documenté, et MG a fini par publier une mise à jour logicielle (PD052) pour tenter d'y remédier.</p>
<p>Voici tout ce que vous devez savoir.</p>

<h2>Architecture du groupe motopropulseur : comprendre le système</h2>
<p>Pour saisir d'où vient le problème, il faut d'abord comprendre comment fonctionne le groupe motopropulseur du MG ZS Hybrid+.</p>
<p>Le véhicule combine deux sources d'énergie :</p>
<ul>
  <li><strong>Moteur thermique 1,5 L cycle Atkinson</strong> : 102 ch (75 kW) et 128 Nm de couple. Un moteur économique à faible compression, optimisé pour l'efficacité plutôt que pour la performance pure.</li>
  <li><strong>Moteur électrique synchrone</strong> : 136 ch (100 kW) et 250 Nm. C'est lui le vrai moteur de performance du duo.</li>
  <li><strong>Batterie haute tension</strong> : 1,83 kWh seulement. MG la présente comme "la plus grande de sa catégorie" — ce qui était vrai lors du lancement, mais ne doit pas faire oublier son volume très limité.</li>
  <li><strong>Boîte automatique à 3 rapports</strong> qui gère la répartition de puissance entre les deux blocs.</li>
</ul>
<p>La puissance combinée de <strong>197 ch</strong> n'est disponible que lorsque le moteur thermique ET le moteur électrique fonctionnent simultanément à leur régime optimal. La batterie doit être suffisamment chargée pour que le moteur électrique délivre sa pleine puissance (100 kW).</p>
<p>C'est précisément là que le problème se cache.</p>

<h2>Le scénario qui déclenche la perte de puissance</h2>
<p>Imaginez la situation suivante : vous roulez sur l'autoroute à une vitesse stabilisée. La voiture est en mode hybride, la batterie se décharge progressivement pour soulager le moteur thermique. Jusque-là, tout va bien.</p>
<p>Vous abordez alors une côte. La demande en puissance augmente. Le moteur électrique puise davantage dans la batterie, dont l'état de charge (SOC) chute rapidement — la capacité de 1,83 kWh laissant très peu de marge.</p>
<p>À ce stade, le système de gestion de batterie du MG ZS Hybrid+ (dans sa calibration d'origine) fait face à un dilemme : il doit simultanément :</p>
<ol>
  <li>Propulser le véhicule sur la côte ;</li>
  <li>Recharger la batterie via le moteur thermique pour éviter une décharge complète.</li>
</ol>
<p>Le moteur thermique de 102 ch se retrouve donc à assumer les deux tâches. Une partie de sa puissance part dans le générateur pour recharger la batterie, l'autre dans les roues pour avancer. Résultat : la puissance disponible aux roues peut tomber à <strong>55 ch (40 kW)</strong> — soit à peine plus que la puissance nominale du seul moteur thermique, une fois la récupération de charge soustraite.</p>
<p>Sur autoroute, à 110 km/h, c'est insuffisant pour maintenir la vitesse en côte. Le véhicule ralentit visiblement, ce qui force le conducteur à enfoncer davantage l'accélérateur — ce qui empire le cycle en demandant encore plus d'énergie que le système ne peut fournir.</p>

<h2>Pourquoi la batterie de 1,83 kWh est au cœur du problème</h2>
<p>Cette capacité de 1,83 kWh est la racine structurelle du problème. Pour comparaison :</p>
<ul>
  <li>La Toyota Yaris Cross hybride embarque une batterie de 0,3 kWh — mais son architecture parallèle gère différemment la répartition de puissance.</li>
  <li>Une Toyota RAV4 Hybrid monte à 1,3 kWh avec une gestion éprouvée depuis des décennies.</li>
  <li>Les PHEV (hybrides rechargeables) comme le Chery Tiggo 7 Pro PHEV ou le BYD Seal U PHEV utilisent des batteries de 15 à 18 kWh — hors catégorie.</li>
</ul>
<p>Avec 1,83 kWh, la fenêtre de fonctionnement réelle du moteur électrique est très étroite. Le système doit constamment jongler entre décharge et recharge. Sur autoroute, où la récupération au freinage est quasi inexistante et la demande en puissance soutenue, la batterie se vide vite et le moteur électrique ne peut plus jouer son rôle de renfort.</p>
<p>La calibration logicielle originale du MG ZS Hybrid+ n'anticipait pas suffisamment ce scénario. Elle permettait à la batterie de descendre trop bas avant de déclencher une phase de recharge active, créant ce "creux de puissance" aux moments les plus inopportuns.</p>

<h2>La mise à jour PD052 : la solution officielle de MG</h2>
<p>Face aux retours d'essayeurs et de propriétaires, MG a reconnu le problème et déployé une reprogrammation logicielle identifiée sous la référence <strong>PD052</strong>.</p>
<p>L'objectif déclaré : "<em>accentuer les phases de recharge de la batterie en amont</em>". Concrètement, le système commence à recharger la batterie plus tôt et plus agressivement, avant que l'état de charge ne descende à un niveau critique. La batterie maintient ainsi un "matelas" d'énergie disponible lorsqu'une demande de puissance importante survient — une montée, un dépassement, une accélération soutenue.</p>
<p>Une mise à jour <strong>P033</strong> a également été évoquée par des propriétaires en concession, probablement complémentaire à PD052, sans que MG ait officiellement détaillé son périmètre exact.</p>
<h3>Le revers de la médaille</h3>
<p>Cette stratégie de recharge anticipée a un coût mécanique direct : <strong>la consommation de carburant augmente</strong>. Recharger la batterie via le moteur thermique, c'est le faire tourner à plus haut régime et plus longtemps que nécessaire pour la seule propulsion. La consommation homologuée de 5,1 L/100 km sera donc plus difficile à respecter dans la pratique après la mise à jour.</p>
<p>MG n'a pas communiqué de chiffre précis sur l'impact attendu, ni spécifié le nouveau seuil minimal d'état de charge que le système doit maintenir. Un manque de transparence qui laisse les propriétaires sans point de référence pour juger l'efficacité de la mise à jour.</p>

<h2>Ce que disent les propriétaires</h2>
<p>Sur les plateformes de reviews automobiles, les retours des propriétaires marocains confirment le phénomène sans pour autant le dramatiser. Un propriétaire sur Wandaloo note que "quand il y a des montées raides et que le moteur électrique est épuisé, elle peut râler un peu" — mais relativise immédiatement, soulignant le confort, la finition et la garantie 200 000 km comme points positifs.</p>
<p>Cette réaction est révélatrice : le problème est réel et perceptible, mais les propriétaires qui conduisent majoritairement en ville ou sur des routes plates ne le rencontrent pratiquement jamais. C'est sur <strong>parcours autoroutier long avec reliefs</strong> que la limitation est la plus marquée.</p>
<p>Du côté des propriétaires européens, des discussions sur des forums spécialisés révèlent que certains ont contacté leur concessionnaire pour demander la confirmation de l'application des mises à jour PD052 et P033, sans toujours obtenir de réponse claire — ce qui soulève une question sur la communication du réseau MG.</p>

<h2>Contexte marocain : des routes qui amplifient le problème</h2>
<p>Pour les conducteurs marocains, ce problème prend une dimension particulière. Le réseau routier marocain combine des axes autoroutiers rapides et des trajets en relief significatif :</p>
<ul>
  <li><strong>L'axe Casablanca–Marrakech</strong> (A7) : relativement plat jusqu'à Settat, mais les approches du piémont atlasique à l'approche de Marrakech présentent des successions de côtes à 110 km/h.</li>
  <li><strong>L'axe Fès–Taza</strong> et les routes de l'Atlas moyen : des rampes prolongées typiques des zones de montagne où la gestion de la batterie sera mise à rude épreuve.</li>
  <li><strong>La route nationale Marrakech–Agadir</strong> via Aït Benhaddou : des descentes et montées enchaînées dans le Haut Atlas qui sont exactement le type de conduite exposant ce défaut.</li>
</ul>
<p>Un conducteur qui fait la navette Casablanca–Rabat sur voie rapide et ne prend jamais la montagne ne verra probablement jamais ce problème. Mais celui qui traverse régulièrement le Rif ou l'Atlas doit absolument s'assurer que la mise à jour a été appliquée.</p>

<h2>Que faire si vous êtes concerné ?</h2>
<p>Si vous possédez un MG ZS Hybrid+ ou si vous envisagez d'en acheter un d'occasion, voici les étapes à suivre :</p>
<ol>
  <li><strong>Contactez votre concessionnaire MG</strong> et demandez explicitement si les mises à jour <strong>PD052</strong> (et P033) ont été appliquées à votre véhicule. Mentionnez ces références précises.</li>
  <li><strong>Si votre véhicule n'a pas reçu la mise à jour</strong>, prenez rendez-vous pour une reprogrammation. La procédure est gratuite (campagne logicielle, non un rappel de sécurité) et se fait en quelques heures.</li>
  <li><strong>Pour un achat d'occasion</strong>, vérifiez l'historique d'entretien et posez la question spécifiquement. Un vendeur sérieux pourra vous fournir la preuve de mise à jour via le VIN du véhicule.</li>
  <li><strong>Testez le véhicule avant achat</strong> sur une côte autoroutière ou une rampe significative. Si la voiture maintient sa vitesse de croisière sans effort visible à 100–110 km/h en montée, la gestion est satisfaisante.</li>
</ol>

<h2>Verdict : un défaut sérieux, une solution disponible</h2>
<p>Le MG ZS Hybrid+ reste un véhicule compétitif sur son segment : confort correct, finition honnête, consommation raisonnable en ville, garantie longue durée et tarif aggressif au Maroc (259 000 DH en version Drive). Ces atouts expliquent son succès commercial.</p>
<p>Mais le problème de perte de puissance est indéniable et objectivement documenté. Une chute de 197 ch à 55 ch sur une pente d'autoroute n'est pas une variation anecdotique — c'est une limitation fonctionnelle sérieuse pour quiconque utilise le véhicule en dehors des zones urbaines plates.</p>
<p>La bonne nouvelle : la mise à jour PD052 existe et est accessible. La moins bonne : MG n'a pas été proactif dans sa communication, laissant de nombreux propriétaires ignorer qu'elle est disponible — et que leur véhicule en a besoin.</p>
<p>Si vous êtes propriétaire d'un MG ZS Hybrid+ et que vous n'avez jamais entendu parler de PD052, appelez votre concessionnaire dès aujourd'hui.</p>
`,
  },
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
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
    author: 'Rédaction Véhicules Chinois',
  },

  // --- Focus Technologie suite (articles.md #44-50) ---
  {
    slug: 'omoda-shs-h-hybride-comment-ca-marche',
    title: "Hybride SHS-H d'Omoda : comment ça marche et pourquoi c'est révolutionnaire",
    excerpt:
      "Le système hybride SHS-H d'Omoda promet une consommation record en ville. On vous explique la technologie et pourquoi elle change tout.",
    image: 'https://picsum.photos/seed/omodashsh/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-06-23T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'mg3-hybrid-moteur-electrique-plus-puissant-concurrents',
    title: 'MG3 Hybrid+ : pourquoi son moteur électrique est plus puissant que ses concurrents',
    excerpt:
      "La MG3 Hybrid+ embarque un moteur électrique de 100 kW, bien au-dessus de la norme sur ce segment. Une architecture inédite décryptée.",
    image: 'https://picsum.photos/seed/mg3hybridmotor/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-06-16T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'hyperos-xiaomi-voiture-integration-smartphone',
    title: "HyperOS de Xiaomi en voiture : l'intégration smartphone ultime",
    excerpt:
      "HyperOS connecte la SU7 à l'écosystème Xiaomi comme aucune autre voiture. Appareils, routines domotiques, IA : le futur du cockpit connecté.",
    image: 'https://picsum.photos/seed/hyperosxiaomi/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-06-09T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'charge-800v-zeekr-xpeng-humilient-constructeurs-historiques',
    title: 'Charge 800V : pourquoi Zeekr et XPeng humilient les constructeurs historiques',
    excerpt:
      "Zeekr et XPeng rechargent 300 km en 10 minutes grâce à l'architecture 800V. On explique pourquoi Volkswagen et Renault accusent un retard critique.",
    image: 'https://picsum.photos/seed/charge800v/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-06-02T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'v2l-vehicle-to-load-byd-alimenter-maison',
    title: 'V2L (Vehicle-to-Load) : comment utiliser votre BYD pour alimenter votre maison',
    excerpt:
      "Avec le V2L, votre BYD devient une centrale électrique mobile. Barbecue, camping, coupure de courant : le guide pratique de cette fonction révolutionnaire.",
    image: 'https://picsum.photos/seed/v2lbyd/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-05-26T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'batteries-solid-state-nio-1000-km-2026',
    title: 'Les batteries Solid State de NIO : 1000 km d\'autonomie réelle en 2026 ?',
    excerpt:
      "NIO annonce une batterie semi-solide à plus de 150 kWh pour ses futurs modèles. On fait le point sur la technologie et les promesses d'autonomie.",
    image: 'https://picsum.photos/seed/niosolidstate/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-05-19T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'moteurs-roue-xiaomi-revolution-technologique',
    title: 'Moteurs de roue Xiaomi : la révolution technologique expliquée',
    excerpt:
      "Xiaomi intègre des moteurs dans les roues de la SU7 Ultra. Gains en dynamisme, en poids et en réponse : pourquoi cette architecture change tout.",
    image: 'https://picsum.photos/seed/xiaomihubmotor/1200/800',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-05-12T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },

  // --- Budget, Achat & Revente (articles.md #51-60) ---
  {
    slug: 'decote-voitures-chinoises-risque-mg-byd-2026',
    title: 'Décote des voitures chinoises : est-ce risqué d\'acheter une MG ou une BYD en 2026 ?',
    excerpt:
      "Les MG et BYD perdent-elles de la valeur plus vite que les marques européennes ? Analyse de la décote réelle après 2 et 3 ans de possession.",
    image: 'https://picsum.photos/seed/decotechinoise/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-05-05T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'garantie-7-ans-10-ans-constructeurs-chinois-comparatif',
    title: 'Garantie 7 ans ou 10 ans : le comparatif des assurances constructeurs chinois',
    excerpt:
      "BYD, MG, Zeekr, NIO : chaque marque chinoise propose sa propre durée de garantie. On compare les couvertures pour savoir qui protège le mieux.",
    image: 'https://picsum.photos/seed/garantiechinois/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-04-28T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'bonus-ecologique-2026-voitures-chinoises-eligibles',
    title: 'Bonus écologique 2026 : quelles voitures chinoises y ont encore droit ?',
    excerpt:
      "Le bonus écologique a été restreint aux véhicules fabriqués en Europe. On liste les modèles chinois qui y échappent et ceux qui en bénéficient encore.",
    image: 'https://picsum.photos/seed/bonusecolo2026/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-04-21T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'location-vs-achat-lynk-co-nouvelle-consommation',
    title: 'Location vs Achat : pourquoi Lynk & Co a changé notre façon de consommer',
    excerpt:
      "Le modèle d'abonnement de Lynk & Co remet en question la propriété automobile. Flexibilité, coût total et liberté : faut-il vraiment acheter sa voiture ?",
    image: 'https://picsum.photos/seed/lynkcolocation/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-04-14T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'entretien-voiture-chinoise-france-reseaux-sav',
    title: 'Où entretenir sa voiture chinoise en France ? Le point sur les réseaux SAV',
    excerpt:
      "Faurie, Jean Rouyer, EMGroup : qui répare les MG, BYD et Omoda en France ? On cartographie les réseaux agréés et les délais de prise en charge.",
    image: 'https://picsum.photos/seed/entretiensav/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-04-07T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'prix-pieces-detachees-mg-vs-renault-apres-vente',
    title: 'Prix des pièces détachées : MG est-il plus cher que Renault en après-vente ?',
    excerpt:
      "Disques, filtres, batterie 12V : on a comparé les tarifs des pièces MG aux équivalents Renault. Le résultat est plus nuancé qu'on ne le pense.",
    image: 'https://picsum.photos/seed/piecesdetachees/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-03-31T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'leasing-loa-lld-meilleures-offres-marques-chinoises',
    title: 'Les meilleures offres de leasing (LOA/LLD) sur les marques chinoises en 2026',
    excerpt:
      "LOA BYD à 199 €/mois, LLD MG sans apport : on décrypte les meilleures offres de leasing du moment sur les marques chinoises disponibles en France.",
    image: 'https://picsum.photos/seed/leasingchinois/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-03-24T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'assurance-auto-marques-chinoises-assureurs-francais',
    title: 'Assurance auto : les assureurs français sont-ils plus frileux avec les marques chinoises ?',
    excerpt:
      "Certains assureurs appliquent des surprimes sur les véhicules chinois. On fait le tour des compagnies et on vous dit comment obtenir le meilleur tarif.",
    image: 'https://picsum.photos/seed/assurancechinoise/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-03-17T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'mandataires-vs-concessions-acheter-byd-meilleur-prix',
    title: 'Mandataires vs Concessions : où acheter sa BYD au meilleur prix ?',
    excerpt:
      "Les mandataires proposent parfois 10 à 15 % de remise sur les véhicules chinois. On compare les risques et les avantages face aux concessions officielles.",
    image: 'https://picsum.photos/seed/mandatairebyd/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-03-10T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'fiabilite-long-terme-mg4-2023-premiers-retours',
    title: 'Fiabilité à long terme : ce que disent les premiers retours sur les MG4 de 2023',
    excerpt:
      "Les MG4 de la première génération ont maintenant 3 ans. On compile les témoignages propriétaires : pannes, usure et satisfaction globale.",
    image: 'https://picsum.photos/seed/mg4fiabilite/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-03-03T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },

  // --- Top 10 & Sélections Thématiques (articles.md #61-70) ---
  {
    slug: 'top-10-voitures-chinoises-meilleure-autonomie-2026',
    title: 'Top 10 des voitures chinoises avec la meilleure autonomie en 2026',
    excerpt:
      "De la citadine au grand SUV, on classe les 10 voitures chinoises qui affichent la plus grande autonomie réelle mesurée en conditions mixtes en 2026.",
    image: 'https://picsum.photos/seed/top10autonomie/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-02-24T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'suv-chinois-famille-3-enfants-quel-choisir',
    title: 'Quel SUV chinois choisir pour une famille de 3 enfants ?',
    excerpt:
      "Coffre, 7 places, points d'ancrage Isofix : on sélectionne les meilleurs SUV chinois pour les grandes familles, avec un critère clé — le budget total.",
    image: 'https://picsum.photos/seed/suvfamille/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-02-17T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: '5-meilleures-citadines-chinoises-ville',
    title: 'Les 5 meilleures citadines chinoises pour rouler en ville sans stress',
    excerpt:
      "Rayon de braquage, aide au stationnement, autonomie urbaine : notre sélection des 5 citadines chinoises les plus adaptées à la vie en ville en 2026.",
    image: 'https://picsum.photos/seed/citadineschinoises/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-02-10T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'top-7-voitures-chinoises-plus-sures-ncap-2026',
    title: 'Top 7 des voitures chinoises les plus sûres (scores Euro NCAP 2026)',
    excerpt:
      "Les constructeurs chinois raflent les 5 étoiles Euro NCAP. On classe les 7 modèles qui ont obtenu les meilleures notes de sécurité passive et active.",
    image: 'https://picsum.photos/seed/ncapchinois/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-02-03T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'voitures-chinoises-meilleur-infodivertissement-2026',
    title: 'Quelles voitures chinoises offrent le meilleur système d\'infodivertissement ?',
    excerpt:
      "Écrans géants, IA vocale, intégration native des apps : on compare les systèmes d'infodivertissement des principales marques chinoises en 2026.",
    image: 'https://picsum.photos/seed/infodivertissement/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-01-27T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'top-5-electriques-chinoises-moins-30000-euros',
    title: 'Top 5 des voitures électriques chinoises à moins de 30 000 €',
    excerpt:
      "Bonus déduit, il est possible d'acheter une excellente électrique chinoise sous 30 000 €. Notre podium 2026 avec les vrais prix après aides d'État.",
    image: 'https://picsum.photos/seed/top5elec30k/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-01-20T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'suv-chinois-confortables-longs-trajets-autoroute',
    title: 'Les SUV chinois les plus confortables pour les longs trajets sur autoroute',
    excerpt:
      "Suspension, isolation acoustique, sièges massants : on identifie les SUV chinois qui rendent les longs kilomètres d'autoroute vraiment agréables.",
    image: 'https://picsum.photos/seed/suvconfort/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-01-13T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: '3-voitures-chinoises-pour-oublier-tesla-2026',
    title: '3 voitures chinoises qui vont vous faire oublier Tesla cette année',
    excerpt:
      "Autonomie, technologie, prix : ces trois modèles chinois cochent toutes les cases qui ont fait le succès de Tesla, et parfois mieux encore.",
    image: 'https://picsum.photos/seed/oublierTesla/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-01-06T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'voitures-chinoises-plus-attendues-fin-2026',
    title: 'Les voitures chinoises les plus attendues pour la fin 2026',
    excerpt:
      "BYD Ocean-M, Xiaomi SU8, NIO ET9 : on fait le point sur les lancements chinois prévus d'ici la fin d'année et sur ce qu'ils ont à offrir.",
    image: 'https://picsum.photos/seed/attendues2026/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2024-12-23T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'classement-marques-chinoises-fiabilite-2026',
    title: 'Classement des marques chinoises par fiabilité : qui est en tête ?',
    excerpt:
      "JD Power, TÜV, témoignages propriétaires : on croise toutes les données disponibles pour établir le classement de fiabilité des marques chinoises.",
    image: 'https://picsum.photos/seed/classementfiab/1200/800',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2024-12-16T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },

  // --- Comparaison des Motorisations (articles.md #71-75) ---
  {
    slug: 'mg3-hybrid-vs-mg4-electric-hybride-ou-electrique',
    title: 'MG3 Hybrid+ vs MG4 Electric : hybride ou 100 % électrique, quel est le meilleur choix ?',
    excerpt:
      "MG propose deux philosophies dans sa gamme : l'hybride abordable MG3 et le tout-électrique MG4. On compare selon votre usage réel.",
    image: 'https://picsum.photos/seed/mg3mg4motorisation/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2024-12-09T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'byd-seal-u-phev-vs-byd-seal-u-ev-hybride-rechargeable',
    title: 'BYD Seal U PHEV vs BYD Seal U EV : l\'hybride rechargeable est-il plus pertinent ?',
    excerpt:
      "Même carrosserie, deux motorisations radicalement différentes. On compare le BYD Seal U PHEV et EV pour savoir lequel colle à votre quotidien.",
    image: 'https://picsum.photos/seed/sealuphevev/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2024-12-02T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'omoda-5-thermique-vs-omoda-5-ev-duel-interne',
    title: 'Omoda 5 Thermique vs Omoda 5 EV : le duel interne',
    excerpt:
      "Même design, deux motorisations. On met en face l'Omoda 5 essence et l'Omoda 5 électrique pour déterminer lequel convient à chaque profil.",
    image: 'https://picsum.photos/seed/omoda5duel/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2024-11-25T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'hybride-vs-phev-comparatif-mg-byd',
    title: 'Hybride vs Hybride Rechargeable (PHEV) : le comparatif chez MG et BYD',
    excerpt:
      "HEV ou PHEV : quelle technologie est la plus adaptée à votre usage ? On compare les deux architectures chez MG et BYD avec des chiffres réels.",
    image: 'https://picsum.photos/seed/hevphevcompar/1200/800',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2024-11-18T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'moteurs-thermiques-chinois-retour-en-force-europe',
    title: 'Pourquoi les moteurs thermiques chinois (Chery, MG) reviennent en force en Europe',
    excerpt:
      "Face aux restrictions sur le tout-électrique, Chery et MG relancent des modèles thermiques compétitifs. On analyse ce retour stratégique en Europe.",
    image: 'https://picsum.photos/seed/thermiquechinois/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-11-11T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },

  // --- Marque par Marque : Guides d'Achat (articles.md #76-85) ---
  {
    slug: 'guide-achat-byd-2026-quel-modele-quel-profil',
    title: "Guide d'achat BYD 2026 : quel modèle pour quel profil ?",
    excerpt:
      "Seagull, Dolphin, Seal, Atto 3, Tang : la gamme BYD est vaste. Notre guide vous aide à choisir le modèle BYD fait pour vous en quelques questions.",
    image: 'https://picsum.photos/seed/guidebyd2026/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-11-04T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'mg-motor-heritage-anglais-domination-chinoise',
    title: 'Tout savoir sur MG Motor : de l\'héritage anglais à la domination chinoise',
    excerpt:
      "Fondée à Oxford en 1924, MG est aujourd'hui la marque chinoise la plus vendue en Europe. Retour sur un destin hors du commun racheté par SAIC.",
    image: 'https://picsum.photos/seed/mghistoire/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-10-28T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'zeekr-france-prix-modeles-reseau-2026',
    title: 'Zeekr en France : prix, modèles et réseau, on vous dit tout',
    excerpt:
      "Zeekr s'installe en France avec le 001, le X et le 7. On fait le point sur les tarifs, les points de vente et le réseau de recharge rapide disponible.",
    image: 'https://picsum.photos/seed/zeekrfrance/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-10-21T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'omoda-jaecoo-nouveau-geant-marche-automobile',
    title: 'Omoda & Jaecoo : qui est ce nouveau géant qui débarque dans nos villes ?',
    excerpt:
      "Omoda et Jaecoo sont les deux nouvelles marques du groupe Chery destinées à l'export. Design premium, prix agressifs : qui sont vraiment ces nouveaux venus ?",
    image: 'https://picsum.photos/seed/omodajaecoo/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-10-14T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'xiaomi-auto-peut-on-acheter-voiture-fabricant-telephones',
    title: 'Xiaomi Auto : peut-on vraiment acheter la voiture du fabricant de téléphones ?',
    excerpt:
      "La SU7 de Xiaomi est disponible en Europe. On répond aux vraies questions : SAV, pièces détachées, garantie, et comment passer commande depuis la France.",
    image: 'https://picsum.photos/seed/xiaomiauto/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-10-07T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'nio-battery-as-a-service-louer-ou-acheter-batterie',
    title: 'NIO et le "Battery as a Service" : faut-il louer ou acheter sa batterie ?',
    excerpt:
      "NIO propose d'acheter la voiture sans la batterie, louée à 128 €/mois. On calcule si le BaaS est rentable selon votre kilométrage annuel et votre usage.",
    image: 'https://picsum.photos/seed/niobass/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-09-30T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'xpeng-marque-intelligence-artificielle-automobile',
    title: 'XPeng : la marque qui mise tout sur l\'intelligence artificielle',
    excerpt:
      "XPeng investit massivement en IA pour la conduite autonome et l'infodivertissement. Pourquoi cette stratégie tech-first lui donne une longueur d'avance.",
    image: 'https://picsum.photos/seed/xpengai/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-09-23T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'leapmotor-alliance-stellantis-sav-europe',
    title: "Leapmotor : l'alliance avec Stellantis change-t-elle la donne pour le SAV ?",
    excerpt:
      "Stellantis distribue Leapmotor dans ses concessions en Europe. Ce réseau de 3 000 points de vente résout-il enfin le problème du SAV pour cette marque ?",
    image: 'https://picsum.photos/seed/leapmotor/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-09-16T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'gwm-ora-citadines-electriques-design-audacieux',
    title: 'GWM Ora : le futur des citadines électriques au design audacieux',
    excerpt:
      "GWM Ora mise sur un design rétro-futuriste pour séduire les acheteurs urbains. On fait le tour de la gamme Ora et de ce que la marque a en réserve.",
    image: 'https://picsum.photos/seed/gwmora/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-09-09T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'lynk-co-abonnement-ne-pas-acheter-voiture',
    title: "Lynk & Co : pourquoi vous ne devriez peut-être pas \"acheter\" votre voiture",
    excerpt:
      "Lynk & Co propose un abonnement mensuel tout inclus à partir de 500 €. On analyse si cette alternative à l'achat tient vraiment ses promesses.",
    image: 'https://picsum.photos/seed/lynkcoabonnement/1200/800',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-09-02T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },

  // --- Essais Longue Durée & Vie Quotidienne (articles.md #86-90) ---
  {
    slug: '1000-km-mg4-consommation-reelle-autoroute',
    title: '1000 km en MG4 : verdict sur la consommation réelle sur autoroute',
    excerpt:
      "On a parcouru 1000 km en MG4 Extended Range sur autoroute. Consommation réelle, arrêts de recharge et autonomie affichée vs ressentie : tout est là.",
    image: 'https://picsum.photos/seed/mg4longdrive/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-08-26T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'byd-atto-3-quotidien-5-details-qui-changent-tout',
    title: 'BYD Atto 3 au quotidien : les 5 détails qui changent tout',
    excerpt:
      "Après 3 mois de vie quotidienne avec le BYD Atto 3, on vous livre les 5 petits détails qui font la vraie différence — en bien et en moins bien.",
    image: 'https://picsum.photos/seed/atto3quotidien/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-08-19T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'xiaomi-su7-conditions-hivernales-batterie-promesses',
    title: 'Xiaomi SU7 en conditions hivernales : la batterie tient-elle ses promesses ?',
    excerpt:
      "Par -10 °C, l'autonomie d'une électrique peut chuter de 40 %. On a testé la SU7 de Xiaomi en hiver pour mesurer la perte réelle et évaluer le chauffage.",
    image: 'https://picsum.photos/seed/su7hiver/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-08-12T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'chery-tiggo-8-voyage-famille-test-habitabilite',
    title: 'Voyager en famille dans un Chery Tiggo 8 : test d\'habitabilité',
    excerpt:
      "Deux adultes, trois enfants, un coffre plein pour une semaine : on a pris la route en Chery Tiggo 8 Pro pour tester son habitabilité réelle en famille.",
    image: 'https://picsum.photos/seed/tiggo8famille/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-08-05T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'navigation-byd-vs-google-maps-fiabilite',
    title: 'Système de navigation BYD vs Google Maps : lequel est le plus fiable ?',
    excerpt:
      "Le GPS natif BYD intègre la recharge dans les itinéraires. Mais est-il plus fiable que Google Maps ? On a comparé les deux sur 10 trajets réels.",
    image: 'https://picsum.photos/seed/bydnavgps/1200/800',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-07-29T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
  },

  // --- Analyses & Tendances du Marché (articles.md #91-100) ---
  {
    slug: 'pourquoi-voitures-chinoises-moins-cheres-durable',
    title: 'Pourquoi les voitures chinoises sont-elles moins chères (et est-ce durable) ?',
    excerpt:
      "Subventions d'État, coûts de production bas, économies d'échelle : on décortique les vraies raisons du prix cassé des voitures chinoises et leur pérennité.",
    image: 'https://picsum.photos/seed/chinoisprix/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-07-22T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'taxes-europeennes-impact-prix-voitures-chinoises-2026',
    title: "L'impact des taxes européennes sur le prix des voitures chinoises en 2026",
    excerpt:
      "Après les droits de douane additionnels de la Commission européenne, les prix ont augmenté. On mesure l'impact modèle par modèle sur le marché français.",
    image: 'https://picsum.photos/seed/taxeseuropeennes/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-07-15T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'design-chinois-identite-visuelle-marques-auto',
    title: 'Design chinois : comment les marques créent leur propre identité visuelle',
    excerpt:
      "BYD, NIO, Zeekr, HiPhi : chaque marque chinoise développe un langage stylistique unique. On analyse comment le design est devenu une arme stratégique.",
    image: 'https://picsum.photos/seed/designchinois/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-07-08T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'marques-chinoises-production-europe-hongrie-espagne',
    title: 'Les marques chinoises produisent-elles désormais en Europe ? (Focus Hongrie et Espagne)',
    excerpt:
      "BYD construit une usine en Hongrie, CATL en Allemagne. On fait le point sur la délocalisation de la production chinoise en Europe et ses enjeux.",
    image: 'https://picsum.photos/seed/usinechinoiseurope/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-07-01T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'securite-voitures-chinoises-niveau-europeen-2026',
    title: 'Sécurité : pourquoi les voitures chinoises n\'ont plus rien à envier aux européennes',
    excerpt:
      "5 étoiles Euro NCAP pour BYD, MG, NIO et XPeng. On analyse comment les constructeurs chinois ont rattrapé puis dépassé les standards de sécurité.",
    image: 'https://picsum.photos/seed/securitencap/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-06-24T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'arrivee-xiaomi-tournant-historique-industrie-automobile',
    title: "L'arrivée de Xiaomi : un tournant historique pour l'industrie automobile",
    excerpt:
      "Quand le numéro 3 mondial du smartphone lance une voiture, tout le secteur tremble. On analyse pourquoi l'entrée de Xiaomi dans l'auto change les règles du jeu.",
    image: 'https://picsum.photos/seed/xiaomitournant/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-06-17T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'mg-motor-marque-preferee-jeunes-conducteurs',
    title: 'Pourquoi MG Motor est devenu la marque préférée des jeunes conducteurs',
    excerpt:
      "Prix accessible, design moderne, technologie embarquée : MG séduit massivement les conducteurs de moins de 35 ans. On explique les clés de ce succès générationnel.",
    image: 'https://picsum.photos/seed/mgyoung/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-06-10T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'byd-vs-volkswagen-bataille-numero-1-mondial',
    title: 'BYD vs Volkswagen : la bataille pour la place de numéro 1 mondial',
    excerpt:
      "BYD a dépassé Volkswagen sur les ventes mondiales en 2024. On analyse les forces et faiblesses des deux géants dans une guerre industrielle sans précédent.",
    image: 'https://picsum.photos/seed/bydvsvw/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-06-03T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: 'voitures-chinoises-occasion-marche-en-expansion',
    title: "Les voitures chinoises d'occasion : un marché qui commence à exploser",
    excerpt:
      "Les premières MG4 et BYD Atto 3 arrivent sur le marché de l'occasion. Prix, garantie constructeur restante et fiabilité : tout ce qu'il faut savoir avant d'acheter.",
    image: 'https://picsum.photos/seed/chinoisoccasion/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-05-27T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
  },
  {
    slug: '2026-chine-conquete-coeur-europeens',
    title: "2026 : l'année où la Chine a définitivement conquis le cœur des Européens ?",
    excerpt:
      "Part de marché à 10 %, 5 étoiles NCAP, réseaux SAV en place : 2026 marque-t-elle le point de non-retour dans l'adoption des voitures chinoises en Europe ?",
    image: 'https://picsum.photos/seed/chineeurope2026/1200/800',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-05-20T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
  },
];

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
