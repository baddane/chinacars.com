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
    slug: 'mg4-vs-renault-megane-e-tech-compactes-electriques-2026',
    title: 'MG4 vs Renault Mégane E-Tech : quelle compacte électrique choisir en 2026 ?',
    excerpt:
      "La MG4 a dominé les ventes de compactes électriques en France en 2023. La Mégane E-Tech contre-attaque. Prix, autonomie, agrément : le duel décisif.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-06-02T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Le match des compactes électriques</h2>
<p>En 2023, la MG4 a créé la surprise en devenant la voiture électrique la plus vendue en France devant la Tesla Model Y. La Renault Mégane E-Tech, lancée fin 2022, représente la réponse française au segment des compactes EV. Deux ans plus tard, les deux modèles ont évolué. Lequel mérite votre argent en 2026 ?</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>MG4 Standard</th><th>MG4 Extended</th><th>Mégane E-Tech 60 kWh</th></tr></thead>
  <tbody>
    <tr><td>Moteur</td><td>170 ch</td><td>204 ch</td><td>220 ch</td></tr>
    <tr><td>Batterie</td><td>51 kWh (LFP)</td><td>64 kWh (NMC)</td><td>60 kWh (NMC)</td></tr>
    <tr><td>Autonomie WLTP</td><td>350 km</td><td>450 km</td><td>450 km</td></tr>
    <tr><td>Recharge DC max</td><td>117 kW</td><td>140 kW</td><td>130 kW</td></tr>
    <tr><td>0-100 km/h</td><td>7,7 s</td><td>7,9 s</td><td>7,4 s</td></tr>
    <tr><td>Coffre</td><td>363 L</td><td>363 L</td><td>440 L</td></tr>
    <tr><td>Empattement</td><td>2 705 mm</td><td>2 705 mm</td><td>2 685 mm</td></tr>
    <tr><td>Prix</td><td>26 990 €</td><td>31 990 €</td><td>35 200 €</td></tr>
  </tbody>
</table>

<h2>Le prix : avantage MG4, sans discussion</h2>
<p>À 26 990 € en version Standard (51 kWh), la MG4 est la compacte électrique la plus abordable du marché. La version Extended Range (64 kWh, 450 km) à 31 990 € se positionne 3 200 € sous la Mégane E-Tech 60 kWh à autonomie équivalente. Sur le coût total de possession (assurance, entretien, garantie 7 ans MG vs 2 ans Renault), l'écart se creuse encore en faveur de la chinoise.</p>

<h2>Autonomie et recharge</h2>
<p>En version longue autonomie, les deux affichent ~450 km WLTP. En conditions réelles, la Mégane tient mieux ses promesses grâce à un groupe motopropulseur plus efficient : comptez 380 km pour la Mégane contre 360 km pour la MG4. En hiver, l'écart se stabilise (les deux perdent environ 25-30 %).</p>
<p>En recharge rapide, la MG4 Extended accepte 140 kW contre 130 kW pour la Mégane. Le temps de 10-80 % est quasi identique : 35 minutes pour la MG4, 37 minutes pour la Mégane. Match nul sur ce point.</p>

<h2>Conduite : la surprise MG4</h2>
<p>C'est ici que la MG4 crée la surprise. Son architecture propulsion (moteur arrière, roues arrière motrices) lui confère un comportement dynamique rare dans le segment. La direction est précise, le train arrière joueur, et le centre de gravité bas (batterie à plat sous le plancher) rend la voiture agile en virage. La version XPower (435 ch, 4 roues motrices) est même une authentique sportive.</p>
<p>La Mégane E-Tech, en traction avant, offre un comportement plus conventionnel mais parfaitement maîtrisé. Le confort de suspension est meilleur, l'insonorisation supérieure. Pour la conduite quotidienne, elle est plus apaisante. Pour le plaisir pur, la MG4 l'emporte.</p>

<h2>Habitacle et technologies</h2>
<p>La Mégane domine en qualité perçue. Son intérieur avec l'écran OpenR Link en forme de L, Google intégré nativement (Maps, Assistant, Play Store) et des matériaux flatteurs fait oublier qu'on est dans une compacte. La MG4 propose un habitacle fonctionnel mais moins raffiné : écran 10,25 pouces correct, plastiques durs sur la moitié basse de la planche de bord, et une ergonomie parfois déroutante (commandes tactiles de climatisation).</p>
<p>En revanche, le coffre de la Mégane (440 L) surpasse celui de la MG4 (363 L). Un écart significatif pour un usage familial.</p>

<h2>Sécurité</h2>
<p>Les deux décrochent 5 étoiles Euro NCAP. La Mégane obtient 87 % en protection des adultes et 85 % en systèmes d'aide à la conduite. La MG4 marque 82 % pour les adultes et 74 % pour les aides. L'avantage va à la française, notamment pour son système de freinage d'urgence automatique avec détection des piétons et cyclistes.</p>

<h2>Verdict</h2>
<p>La MG4 est le meilleur rapport qualité-prix du segment. Pour 5 000 à 8 000 € de moins qu'une Mégane, elle offre des performances dynamiques supérieures, une garantie plus longue et un agrément de conduite étonnant. La Mégane E-Tech justifie son tarif par un intérieur plus soigné, un coffre plus grand, un système multimédia best-in-class et un réseau SAV dense. Acheteurs rationnels, prenez la MG4. Amateurs de belle finition et de sérénité, la Mégane est faite pour vous.</p>
`,
  },
  {
    slug: 'mg-hs-vs-peugeot-3008-suv-familial-2026',
    title: 'MG HS vs Peugeot 3008 : le SUV familial chinois peut-il battre la référence française ?',
    excerpt:
      "Le nouveau MG HS 2024 s'attaque au roi des SUV français, le Peugeot 3008. Espace, technologie et prix : le challenger fait-il le poids ?",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-hs.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-05-26T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>David chinois contre Goliath français</h2>
<p>Le Peugeot 3008 est le SUV le plus vendu en France, toutes marques confondues. Avec la troisième génération (E-3008), Peugeot hausse encore le niveau. Le MG HS, entièrement redessiné en 2024, veut jouer dans la même cour avec un argument simple : le même niveau d'équipement pour 10 000 € de moins.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>MG HS 1.5T DCT</th><th>Peugeot 3008 Hybrid 136</th></tr></thead>
  <tbody>
    <tr><td>Motorisation</td><td>1.5 turbo essence</td><td>1.2 turbo + 48V mild-hybrid</td></tr>
    <tr><td>Puissance</td><td>170 ch</td><td>136 ch</td></tr>
    <tr><td>Couple</td><td>275 Nm</td><td>230 Nm</td></tr>
    <tr><td>Boîte</td><td>DCT 7 rapports</td><td>DCT 6 rapports</td></tr>
    <tr><td>Conso mixte WLTP</td><td>7,0 L/100 km</td><td>5,0 L/100 km</td></tr>
    <tr><td>Coffre</td><td>507 L</td><td>520 L</td></tr>
    <tr><td>Longueur</td><td>4 655 mm</td><td>4 542 mm</td></tr>
    <tr><td>Prix de base</td><td>27 490 €</td><td>36 490 €</td></tr>
  </tbody>
</table>

<h2>Design : deux écoles</h2>
<p>Le nouveau Peugeot 3008 (2024) est un virage stylistique radical : allure de fastback, habitacle futuriste avec le Panoramic i-Cockpit et un écran incurvé 21 pouces. C'est l'un des intérieurs les plus spectaculaires du marché. Le MG HS 2024 adopte un style plus classique mais efficace : calandre imposante, silhouette musclée et un intérieur propre avec double écran 12,3 pouces.</p>
<p>En qualité perçue, le 3008 est un cran au-dessus. Mais le MG HS a progressé : matériaux corrects, assemblages soignés, et un niveau de finition qui n'a plus rien à voir avec les productions MG d'il y a 3 ans.</p>

<h2>Espace et praticité</h2>
<p>Le MG HS est plus long de 11 cm, et ça se sent à l'arrière. Les passagers de la banquette bénéficient de plus d'espace aux genoux. Les deux coffres sont généreux (507 L vs 520 L), mais le seuil de chargement du MG est plus bas. Pour les familles, les deux font le travail.</p>

<h2>Motorisations et consommation</h2>
<p>Le MG HS thermique développe 170 ch, suffisant pour un usage familial. Le 3008 Hybrid 136, avec son mild-hybrid 48V, compense sa puissance inférieure par une consommation nettement plus basse : 5,0 L/100 km WLTP contre 7,0 L pour le MG. En réel, l'écart est de 1,5 à 2 L/100 km en faveur du Peugeot. Sur 20 000 km/an, c'est 300 à 500 € d'économie annuelle à la pompe.</p>
<p>Le MG HS existe aussi en version PHEV (plug-in hybride) à 36 990 €, avec 100 km d'autonomie électrique. Le 3008 PHEV démarre à 42 490 €. L'écart reste constant.</p>

<h2>Technologies embarquées</h2>
<p>Le MG HS de série inclut : caméra 360°, régulateur adaptatif, alerte angle mort, sièges chauffants, toit panoramique et écran 12,3 pouces avec navigation. Sur le 3008, ces équipements nécessitent la finition GT (40 490 €). Le Peugeot compense par la qualité de son système multimédia ChatGPT intégré et une interface vocale plus aboutie.</p>

<h2>Sécurité</h2>
<p>Le Peugeot 3008 2024 obtient 5 étoiles Euro NCAP avec un score de 92 % en protection des adultes, l'un des meilleurs du marché. Le MG HS 2024 obtient également 5 étoiles mais avec un score légèrement inférieur de 85 %. Les deux véhicules sont excellents en sécurité passive.</p>

<h2>Verdict</h2>
<p>Le Peugeot 3008 est le meilleur SUV familial français : design spectaculaire, consommation maîtrisée, technologies de pointe et sécurité au sommet. Mais il coûte 9 000 € de plus que le MG HS à équipement comparable. Le MG HS est le choix rationnel pour les familles qui veulent un SUV spacieux, bien équipé et garanti 7 ans sans se ruiner. Si votre budget le permet, le 3008 est une vraie montée en gamme. Sinon, le MG HS n'a aucune raison de rougir.</p>
`,
  },
  {
    slug: 'byd-seal-vs-peugeot-e-3008-berline-vs-suv-electrique',
    title: 'BYD Seal vs Peugeot E-3008 : berline ou SUV électrique pour 42 000 € ?',
    excerpt:
      "Pour un budget similaire, faut-il choisir la berline BYD Seal 570 km ou le SUV Peugeot E-3008 525 km ? Deux formats, un même dilemme.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-05-19T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>42 000 € : berline chinoise ou SUV français ?</h2>
<p>À budget équivalent (~42 000 €), deux philosophies s'affrontent. La BYD Seal est une berline électrique sportive et aérodynamique avec 570 km d'autonomie. Le Peugeot E-3008 est un SUV familial électrique avec un design fastback et 525 km. Deux formats, deux usages, un même budget : lequel choisir ?</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>BYD Seal Comfort</th><th>Peugeot E-3008 Long Range</th></tr></thead>
  <tbody>
    <tr><td>Moteur</td><td>313 ch (230 kW), propulsion</td><td>231 ch (170 kW), traction</td></tr>
    <tr><td>Batterie</td><td>82,5 kWh (Blade LFP)</td><td>98 kWh (NMC)</td></tr>
    <tr><td>Autonomie WLTP</td><td>570 km</td><td>525 km (Long Range)</td></tr>
    <tr><td>Recharge DC max</td><td>150 kW</td><td>160 kW</td></tr>
    <tr><td>10-80 % DC</td><td>26 min</td><td>30 min</td></tr>
    <tr><td>0-100 km/h</td><td>5,9 s</td><td>8,8 s</td></tr>
    <tr><td>Cx</td><td>0,219</td><td>0,28</td></tr>
    <tr><td>Coffre</td><td>400 L + 53 L frunk</td><td>520 L</td></tr>
    <tr><td>Prix</td><td>42 990 €</td><td>44 990 € (Long Range)</td></tr>
  </tbody>
</table>

<h2>Autonomie : le duel est serré</h2>
<p>La BYD Seal affiche 570 km WLTP grâce à son aérodynamisme exceptionnel (Cx 0,219, le meilleur de sa catégorie). En réel, comptez 450-480 km sur autoroute. Le E-3008 Long Range, avec sa grosse batterie 98 kWh, annonce 525 km WLTP et tient environ 420-440 km en conditions réelles. L'avantage va à la Seal, mais l'écart se réduit par rapport aux fiches techniques.</p>
<p>En recharge, les deux véhicules sont proches : 26 minutes de 10 à 80 % pour la Seal (150 kW max) et 30 minutes pour le E-3008 (160 kW max). Pour les longs trajets, les deux sont parfaitement viables.</p>

<h2>Performances et dynamisme</h2>
<p>La BYD Seal est incontestablement la plus performante. Ses 313 ch et son architecture propulsion (moteur arrière) en font une berline vive et plaisante à conduire. Le 0-100 km/h en 5,9 s donne le sourire. Le E-3008, avec 231 ch en traction avant, est plus posé, plus orienté confort familial. Il n'est pas lent (8,8 s au 0-100), mais le caractère est radicalement différent.</p>

<h2>Espace et praticité</h2>
<p>C'est ici que le E-3008 prend l'avantage. Son format SUV offre une assise surélevée, un coffre de 520 L (vs 400 L pour la Seal) et une meilleure visibilité. La banquette arrière est plus accueillante pour trois passagers. La Seal compense avec son petit frunk de 53 L et une ligne de toit plus fluide, mais elle reste une berline : l'accès arrière est moins aisé et le coffre moins pratique.</p>

<h2>Intérieur et technologies</h2>
<p>Le E-3008 2024 révolutionne l'intérieur Peugeot avec son Panoramic i-Cockpit : un écran incurvé de 21 pouces barre la planche de bord, ChatGPT est intégré nativement, et la qualité de finition est au niveau premium. La BYD Seal propose un écran rotatif de 15,6 pouces, une instrumentation 10,25 pouces et une finition soignée mais moins spectaculaire. L'avantage va au Peugeot en termes d'effet "waouh".</p>

<h2>Coût total de possession</h2>
<p>Sur 5 ans et 75 000 km, la BYD Seal revient moins cher grâce à son prix d'achat inférieur de 2 000 €, sa garantie 8 ans sur la batterie, et sa consommation légèrement moindre (grâce à l'aérodynamisme). Le E-3008 coûte plus en entretien (réseau Peugeot vs MG) mais bénéficie d'une meilleure valeur résiduelle estimée.</p>

<h2>Verdict</h2>
<p>Si vous cherchez une voiture plaisir, performante et autonome, la BYD Seal est imbattable à ce prix. Si vous avez une famille et que l'espace, la praticité et le design intérieur comptent plus que le 0-100, le Peugeot E-3008 est le choix logique. Deux excellentes voitures électriques, deux usages différents.</p>
`,
  },
  {
    slug: 'byd-dolphin-vs-renault-5-e-tech-citadines-electriques',
    title: 'BYD Dolphin vs Renault 5 E-Tech : le choc des citadines électriques',
    excerpt:
      "La BYD Dolphin et la Renault 5 E-Tech se disputent le cœur des automobilistes urbains. Design rétro contre modernité chinoise : le match.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-05-12T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Deux stars des citadines électriques</h2>
<p>La Renault 5 E-Tech est le phénomène automobile de 2025 : design néo-rétro craquant, "made in France" (usine de Douai) et prix agressif. La BYD Dolphin, présente en Europe depuis 2023, est la polyvalente électrique chinoise la plus vendue sur le continent. Deux visions de la citadine zéro émission, un seul gagnant possible ?</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>BYD Dolphin</th><th>Renault 5 E-Tech</th></tr></thead>
  <tbody>
    <tr><td>Moteur</td><td>95 ch (44 kWh) / 177 ch (60 kWh)</td><td>120 ch (40 kWh) / 150 ch (52 kWh)</td></tr>
    <tr><td>Batterie</td><td>44,9 kWh / 60,4 kWh (Blade LFP)</td><td>40 kWh / 52 kWh (NMC)</td></tr>
    <tr><td>Autonomie WLTP</td><td>340 km / 427 km</td><td>312 km / 410 km</td></tr>
    <tr><td>Recharge DC max</td><td>60 kW / 88 kW</td><td>80 kW / 100 kW</td></tr>
    <tr><td>0-100 km/h</td><td>12,3 s / 7,0 s</td><td>11,0 s / 8,0 s</td></tr>
    <tr><td>Coffre</td><td>345 L</td><td>326 L</td></tr>
    <tr><td>Longueur</td><td>4 290 mm</td><td>3 922 mm</td></tr>
    <tr><td>Prix de base</td><td>29 990 €</td><td>25 000 €</td></tr>
  </tbody>
</table>

<h2>Design : la Renault 5 fait craquer</h2>
<p>Impossible de l'ignorer : la Renault 5 E-Tech est l'une des plus belles voitures de 2025. Son design néo-rétro reprend les lignes de la R5 originale avec une modernité séduisante. Les phares ronds, le capot plongeant et les feux en forme de "5" à l'arrière créent un objet de désir immédiat. La BYD Dolphin, avec ses lignes fluides inspirées de l'océan, est élégante mais plus anonyme. En charme pur, la R5 l'emporte haut la main.</p>

<h2>Gabarit : deux catégories différentes</h2>
<p>La BYD Dolphin mesure 4,29 m, soit 37 cm de plus que la Renault 5 (3,92 m). La Dolphin est en réalité une compacte déguisée en citadine, offrant plus d'espace intérieur et un coffre plus généreux (345 L vs 326 L). La R5, plus courte, est plus facile à garer en ville. Selon votre usage, l'un ou l'autre format sera préférable.</p>

<h2>Autonomie et recharge</h2>
<p>Les deux se tiennent en autonomie : 427 km vs 410 km WLTP en grande batterie. En conditions réelles, comptez 340-360 km pour les deux. La Renault 5 prend l'avantage en recharge rapide : 100 kW DC contre 88 kW pour la Dolphin. De 10 à 80 %, la R5 met 30 minutes contre 38 minutes pour la BYD.</p>

<h2>Conduite et confort</h2>
<p>La Renault 5 est construite sur la plateforme AmpR Small, dérivée de la CMF-BEV. Elle offre un comportement vif et agile typique d'une citadine française, avec une direction incisive et un châssis joueur. La BYD Dolphin est plus confortable, mieux amortie, et plus silencieuse. En ville, les deux excellent. Sur route, la Dolphin fatigue moins sur les longs trajets.</p>

<h2>Prix : retournement de situation</h2>
<p>Surprise : la Renault 5 est moins chère que la Dolphin. À 25 000 € en version de base (40 kWh), elle undercut la BYD de presque 5 000 €. Même en version haut de gamme Iconic (52 kWh), la R5 à 33 000 € reste sous la Dolphin Comfort (60 kWh) à 33 990 €. Le bonus écologique français avantage les deux modèles, mais la R5 "made in France" pourrait bénéficier de conditions plus favorables.</p>

<h2>Le facteur patriotique</h2>
<p>La Renault 5 est assemblée à Douai (Nord), avec une batterie fabriquée à Douai également par AESC. La BYD Dolphin est produite en Chine. Pour les automobilistes sensibles au "made in France" et à l'emploi local, c'est un argument non négligeable. La R5 est aussi éligible au bonus écologique maximum, ce qui n'est pas le cas de la Dolphin (fabriquée hors UE).</p>

<h2>Verdict</h2>
<p>La Renault 5 E-Tech est la citadine électrique à acheter en 2026 : design irrésistible, prix compétitif, fabrication française et réseau SAV dense. La BYD Dolphin reste un excellent choix pour ceux qui veulent plus d'espace, un meilleur confort routier et une batterie LFP plus durable. Mais le rapport séduction/prix de la R5 est difficile à battre.</p>
`,
  },
  {
    slug: 'byd-atto-3-vs-peugeot-e-2008-suv-electrique-abordable',
    title: 'BYD Atto 3 vs Peugeot e-2008 : quel SUV compact électrique pour moins de 38 000 € ?',
    excerpt:
      "Le BYD Atto 3 et le Peugeot e-2008 visent les mêmes acheteurs. Autonomie, équipement et valeur : le comparatif complet.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-atto-3.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-05-05T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>SUV compacts électriques : Chine vs France</h2>
<p>Le segment des SUV compacts électriques est l'un des plus dynamiques du marché. Le BYD Atto 3, lancé en Europe en 2023, est le premier SUV de BYD sur le Vieux Continent. Le Peugeot e-2008, rafraîchi en 2024, défend les couleurs françaises avec le style i-Cockpit et une autonomie revue à la hausse.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>BYD Atto 3</th><th>Peugeot e-2008 (2024)</th></tr></thead>
  <tbody>
    <tr><td>Moteur</td><td>204 ch (150 kW)</td><td>156 ch (115 kW)</td></tr>
    <tr><td>Batterie</td><td>60,5 kWh (Blade LFP)</td><td>54 kWh (NMC)</td></tr>
    <tr><td>Autonomie WLTP</td><td>420 km</td><td>406 km</td></tr>
    <tr><td>Recharge DC max</td><td>88 kW</td><td>100 kW</td></tr>
    <tr><td>0-100 km/h</td><td>7,3 s</td><td>9,0 s</td></tr>
    <tr><td>Coffre</td><td>440 L</td><td>434 L</td></tr>
    <tr><td>Garantie véhicule</td><td>6 ans / 150 000 km</td><td>2 ans (extensible)</td></tr>
    <tr><td>Garantie batterie</td><td>8 ans / 160 000 km</td><td>8 ans / 160 000 km</td></tr>
    <tr><td>Prix de base</td><td>33 990 €</td><td>36 800 €</td></tr>
  </tbody>
</table>

<h2>Performances : avantage BYD</h2>
<p>Avec 204 ch contre 156 ch, l'Atto 3 est nettement plus vif. Le 0-100 km/h en 7,3 s place le SUV chinois dans une catégorie supérieure au e-2008 (9,0 s). En reprises (80-120 km/h), l'écart est encore plus flagrant. Le couple instantané du moteur BYD rend les dépassements sur nationale sans stress.</p>

<h2>Autonomie et recharge</h2>
<p>Les deux affichent une autonomie similaire (~400-420 km WLTP). En réel, l'Atto 3 tient 330-350 km, le e-2008 environ 320-340 km. La batterie Blade LFP de BYD supporte mieux la chaleur et les cycles de charge répétés, ce qui est un avantage pour la longévité. En recharge rapide, le Peugeot prend l'avantage avec 100 kW contre 88 kW pour le BYD.</p>

<h2>Design et qualité perçue</h2>
<p>Le Peugeot e-2008 2024 adopte le nouveau langage design de la marque au lion : face avant affûtée, feux à crocs, et l'incontournable i-Cockpit à l'intérieur. La qualité perçue est au rendez-vous avec des matériaux soignés et une ambiance premium. L'Atto 3 adopte un style plus original avec son habitacle "salle de sport" (inserts en forme de cordes de guitare sur les contre-portes) qui divise. La finition est correcte sans atteindre le niveau du Peugeot.</p>

<h2>Équipement de série</h2>
<p>L'Atto 3 à 33 990 € inclut : écran rotatif 12,8 pouces, pompe à chaleur, toit panoramique, sièges chauffants, caméra 360° et système audio 8 HP. Le e-2008 à 36 800 € (finition Allure) propose un écran 10 pouces, pas de toit panoramique ni de caméra 360°. Pour obtenir un équipement comparable, il faut passer en GT (39 900 €), soit 6 000 € de plus que l'Atto 3.</p>

<h2>Réseau et valeur résiduelle</h2>
<p>Le réseau Peugeot en France (1 100+ points de vente) est incomparablement plus dense que celui de BYD (~80 points). Pour l'entretien courant et les réparations, c'est un avantage concret. En valeur résiduelle, le Peugeot conserve mieux sa cote : comptez 55-60 % à 3 ans contre 45-50 % pour le BYD, marque encore nouvelle en Europe.</p>

<h2>Verdict</h2>
<p>Le BYD Atto 3 domine en puissance, équipement de série et prix. Le Peugeot e-2008 contre-attaque avec une meilleure finition, un réseau SAV rassurant et une meilleure valeur résiduelle. Pour un premier achat électrique sans compromis sur l'équipement, le BYD est le choix malin. Pour la tranquillité d'esprit d'une marque française établie, le Peugeot justifie le surcoût.</p>
`,
  },
  {
    slug: 'mg-zs-hybrid-plus-perte-de-puissance-cause-solution',
    title: 'MG ZS Hybrid+ : le problème de perte de puissance expliqué (197 ch → 55 ch)',
    excerpt:
      'Sur autoroute ou en côte, le MG ZS Hybrid+ peut perdre les trois quarts de sa puissance annoncée. On vous explique pourquoi ça arrive, comment le reconnaître, et ce que la mise à jour logicielle PD052 change vraiment.',
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-hev.jpg',
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
    slug: 'byd-seal-berline-electrique-2024',
    title: 'BYD Seal : la berline électrique qui fait trembler Tesla débarque en force',
    excerpt:
      "Avec sa plateforme 800 V, son design signé Wolfgang Egger et ses performances de haut vol, la BYD Seal s'impose comme l'alternative chinoise la plus crédible à la Tesla Model 3.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Nouveauté',
    categorySlug: 'nouveaute',
    publishedAt: '2024-04-12T09:00:00+01:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Une berline taillée pour défier la Model 3</h2>
<p>La BYD Seal n'est pas un énième SUV électrique chinois. C'est une berline pensée dès le départ pour attaquer le segment le plus disputé du marché : celui de la Tesla Model 3. Construite sur la plateforme e-Platform 3.0, la Seal embarque la technologie CTB (Cell-to-Body) de BYD, qui intègre la batterie Blade LFP directement dans la structure du châssis.</p>

<h2>Fiche technique et motorisations</h2>
<p>La BYD Seal est proposée en deux versions :</p>
<ul>
  <li><strong>Seal Comfort (propulsion)</strong> : moteur arrière de 230 kW (313 ch), batterie 82,5 kWh, autonomie WLTP de 570 km, 0 à 100 km/h en 5,9 s.</li>
  <li><strong>Seal Excellence AWD</strong> : double moteur (390 kW / 530 ch), autonomie WLTP de 520 km, 0 à 100 km/h en 3,8 s.</li>
</ul>
<p>Les deux versions partagent une architecture 800 V qui permet une recharge rapide de 30 à 80 % en 26 minutes sur borne DC compatible.</p>

<h2>Design et habitacle</h2>
<p>Le design est signé Wolfgang Egger, l'ancien patron du design Audi. Les lignes sont fluides, aérodynamiques (Cx de 0,219) et résolument modernes. L'intérieur propose un écran rotatif de 15,6 pouces, un volant sport aplati et des matériaux de bonne facture. Le coffre offre 400 litres + un frunk de 53 litres.</p>

<h2>Tarifs et positionnement</h2>
<p>En France, la BYD Seal démarre à 42 990 € (version Comfort), soit environ 5 000 € de moins qu'une Tesla Model 3 Highland. Au Maroc, comptez environ 499 000 MAD. En Belgique et en Suisse, les prix suivent le barème européen.</p>

<h2>Verdict</h2>
<p>La BYD Seal coche toutes les cases : autonomie, performances, design, technologie et prix. C'est probablement la berline électrique la plus aboutie que la Chine ait produite à ce jour.</p>
`,
  },
  {
    slug: 'mg-cyberster-roadster-electrique',
    title: 'MG Cyberster : le roadster électrique enfin dévoilé',
    excerpt:
      'MG renoue avec son passé sportif en lançant un cabriolet 100 % électrique aux performances décoiffantes.',
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
    category: 'Sportive',
    categorySlug: 'essai',
    publishedAt: '2024-04-10T09:00:00+01:00',
    readingTime: 5,
    body: `
<h2>Un roadster électrique digne de la légende MG</h2>
<p>MG est née en 1924 à Oxford, avec le roadster dans l'ADN. Le Cyberster est son premier cabriolet depuis la MG F, et cette fois il est 100 % électrique. Un pari audacieux qui prouve que plaisir de conduite et motorisation zéro-émission ne sont pas incompatibles.</p>

<h2>Fiche technique</h2>
<ul>
  <li><strong>Motorisation</strong> : double moteur AWD, 544 ch (400 kW)</li>
  <li><strong>0 à 100 km/h</strong> : 3,2 secondes</li>
  <li><strong>Batterie</strong> : 77 kWh (CATL)</li>
  <li><strong>Autonomie WLTP</strong> : 507 km (toit fermé)</li>
  <li><strong>Recharge</strong> : 10 à 80 % en 26 minutes (150 kW DC)</li>
  <li><strong>Poids</strong> : 1 985 kg</li>
</ul>

<h2>Design et expérience à bord</h2>
<p>Le Cyberster ne ressemble à aucune MG actuelle. Son design tout en courbes s'inspire des concept-cars de la marque, avec des portes en élytre (option Trophy) et un capot plongeant. L'intérieur est spectaculaire : trois écrans intégrés dans le cockpit, un volant Yoke et un système audio Bose à 8 haut-parleurs.</p>

<h2>Sur la route</h2>
<p>Le châssis a été développé avec la contribution d'ingénieurs de SAIC à Shanghai et de l'ancien centre technique MG de Longbridge. La direction est précise, le train arrière bien planté, et la suspension pilotée offre trois modes (Comfort, Sport, Super Sport). Le comportement est joueur sans être nerveux — un bon compromis pour un cabriolet de près de 2 tonnes.</p>

<h2>Prix et disponibilité</h2>
<p>Le MG Cyberster est disponible en France à partir de 38 990 € (version propulsion 340 ch) et 45 990 € (AWD Trophy 544 ch). Un positionnement très agressif face à la concurrence européenne, où aucun roadster électrique n'existe à ce tarif.</p>
`,
  },
  {
    slug: 'importer-voiture-chinoise-guide-2024',
    title: 'Guide : comment importer une voiture chinoise en 2024 ?',
    excerpt:
      "Taxes, dédouanement, homologation, coûts cachés : tout ce qu'il faut savoir avant d'importer un véhicule directement de Chine.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/chery-tiggo-8-pro-phev.jpg',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-04-05T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Le SUV familial que la Chine attendait d'exporter</h2>
<p>Le Chery Tiggo 8 Pro est la vitrine technologique du groupe Chery pour l'international. Avec ses 7 places, son moteur hybride rechargeable et un prix sous les 40 000 €, il se positionne face aux Peugeot 5008, Hyundai Santa Fe et Kia Sorento — mais avec un équipement de série nettement plus généreux.</p>

<h2>Fiche technique</h2>
<ul>
  <li><strong>Motorisation PHEV</strong> : 1.5 turbo + moteur électrique, puissance combinée 326 ch</li>
  <li><strong>Batterie</strong> : 19,3 kWh, autonomie EV 80 km (WLTP)</li>
  <li><strong>Boîte</strong> : DHT à 3 rapports</li>
  <li><strong>Dimensions</strong> : 4,745 x 1,860 x 1,723 mm, empattement 2,710 mm</li>
  <li><strong>Coffre</strong> : 192 L (7 places) / 889 L (5 places)</li>
  <li><strong>Poids</strong> : 1 880 kg</li>
</ul>

<h2>Habitacle et 3e rangée</h2>
<p>C'est là que le Tiggo 8 Pro surprend le plus. L'intérieur est soigné : double écran 12,3 pouces, sellerie cuir synthétique de bonne facture, sièges avant chauffants et ventilés, système Sony à 8 haut-parleurs. La 2e rangée est spacieuse et inclinable. La 3e rangée reste utilisable pour des enfants ou des adultes sur de courts trajets — un compromis honnête pour un véhicule de moins de 4,75 m.</p>

<h2>Sur la route</h2>
<p>En mode EV, le Tiggo 8 Pro est silencieux et agréable en ville. Le passage au mode hybride est transparent. Le moteur thermique 1.5 turbo est correct mais pas exceptionnel — il manque de souffle au-delà de 130 km/h sur autoroute. La suspension est calibrée confort, ce qui convient parfaitement à un usage familial.</p>

<h2>Prix et disponibilité</h2>
<p>Le Chery Tiggo 8 Pro PHEV est disponible à partir de 37 990 € en France, ce qui en fait le SUV 7 places hybride rechargeable le moins cher du marché. Au Maroc, comptez environ 399 000 MAD en version haute.</p>
`,
  },
  {
    slug: 'geely-geometry-c-autonomie-autoroute-test',
    title: "Geely Geometry C : l'autonomie réelle testée sur autoroute",
    excerpt:
      "Nous avons poussé la Geometry C dans ses retranchements sur 300 km d'autoroute pour vérifier ses promesses d'autonomie WLTP.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/geely-geometry-c.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2026-04-28T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Deux philosophies, un même objectif</h2>
<p>D'un côté, BYD, le géant chinois de l'électrique qui a dépassé Volkswagen en ventes mondiales. De l'autre, Xiaomi, le titan de la tech qui a bouleversé le marché du smartphone et s'attaque désormais à l'automobile. Leurs berlines électriques respectives incarnent deux visions radicalement différentes de la performance.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>BYD Seal Excellence AWD</th><th>Xiaomi SU7 Ultra</th></tr></thead>
  <tbody>
    <tr><td>Puissance</td><td>530 ch (390 kW)</td><td>1 548 ch (1 138 kW)</td></tr>
    <tr><td>0–100 km/h</td><td>3,8 s</td><td>1,98 s</td></tr>
    <tr><td>Vitesse max</td><td>180 km/h</td><td>350 km/h</td></tr>
    <tr><td>Batterie</td><td>82,5 kWh (BYD Blade LFP)</td><td>93,7 kWh (CATL Qilin NMC)</td></tr>
    <tr><td>Autonomie WLTP</td><td>520 km</td><td>630 km</td></tr>
    <tr><td>Recharge 30–80 %</td><td>26 min (800 V)</td><td>11 min (800 V)</td></tr>
    <tr><td>Prix (France)</td><td>~48 990 €</td><td>~69 900 € (estimation)</td></tr>
  </tbody>
</table>

<h2>Performances : la SU7 Ultra dans une autre dimension</h2>
<p>Soyons clairs : la Xiaomi SU7 Ultra n'est pas une voiture dans la même catégorie de performances que la BYD Seal. Avec ses trois moteurs (dont deux moteurs de roue propriétaires) développant 1 548 ch, la SU7 Ultra est la berline de série la plus rapide jamais fabriquée en Chine. Son record au Nürburgring de 6:46 la place devant la Porsche Taycan Turbo GT.</p>
<p>La BYD Seal, avec ses 530 ch en version AWD, reste une berline rapide mais raisonnable. Son accélération de 3,8 s est largement suffisante au quotidien.</p>

<h2>Autonomie et recharge</h2>
<p>La Xiaomi SU7 Ultra domine aussi sur l'autonomie grâce à sa batterie Qilin de 93,7 kWh et une architecture 800 V plus avancée. La recharge est nettement plus rapide : 11 minutes pour passer de 30 à 80 %, contre 26 minutes pour la BYD Seal.</p>
<p>La BYD Seal compense par la durabilité de sa batterie Blade LFP, conçue pour conserver plus de 80 % de sa capacité après 3 000 cycles complets.</p>

<h2>Verdict : tout dépend du budget</h2>
<p>Si votre budget le permet, la Xiaomi SU7 Ultra est un exploit technologique sans équivalent. Mais pour la majorité des acheteurs francophones, la BYD Seal reste le choix rationnel : 20 000 € moins chère, parfaitement capable au quotidien, avec un réseau SAV bien plus développé en France et en Europe.</p>
`,
  },
  {
    slug: 'mg4-vs-byd-dolphin-compactes-electriques',
    title: 'MG4 vs BYD Dolphin : le match des compactes électriques à moins de 25 000 €',
    excerpt:
      'Deux rivales chinoises se disputent le titre de meilleure compacte électrique accessible. Laquelle en donne le plus pour votre argent ?',
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-hev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seagull.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-atto-3.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/chery-tiggo-8-pro-phev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g9.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-tang.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g6.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal-u-phev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/dongfeng-mage.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-han.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-hev.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-11-24T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Le match du rapport qualité-prix</h2>
<p>D'un côté, le MG ZS Hybrid+ et ses 197 ch combinés pour 23 490 €. De l'autre, le Dacia Duster Hybrid 140 à partir de 26 400 €. Sur le papier, le chinois est moins cher et plus puissant. Mais le Duster n'a pas dit son dernier mot.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>MG ZS Hybrid+</th><th>Dacia Duster Hybrid 140</th></tr></thead>
  <tbody>
    <tr><td>Motorisation</td><td>1.5 Atkinson + électrique</td><td>1.6 + 2 moteurs électriques</td></tr>
    <tr><td>Puissance combinée</td><td>197 ch</td><td>140 ch</td></tr>
    <tr><td>Couple max</td><td>250 Nm (élec.)</td><td>205 Nm</td></tr>
    <tr><td>Boîte</td><td>Automatique 3 rapports</td><td>Automatique multimode</td></tr>
    <tr><td>Batterie HV</td><td>1,83 kWh</td><td>1,2 kWh</td></tr>
    <tr><td>Conso mixte WLTP</td><td>5,1 L/100 km</td><td>4,6 L/100 km</td></tr>
    <tr><td>Coffre</td><td>443 L</td><td>472 L</td></tr>
    <tr><td>Prix de base</td><td>23 490 €</td><td>26 400 €</td></tr>
  </tbody>
</table>

<h2>Design et habitacle</h2>
<p>Le Duster III a fait un bond en qualité. Son design est plus moderne, son habitacle mieux fini qu'avant, et l'ergonomie est claire et intuitive. Le MG ZS Hybrid+ offre un intérieur plus généreusement équipé de série (écran 10,1 pouces, caméra 360°, sièges chauffants), mais les assemblages restent en retrait face au Duster nouvelle génération.</p>
<p>En volume habitable, les deux se valent. Le Duster prend l'avantage au coffre (472 L vs 443 L) et surtout en garde au sol (217 mm vs 175 mm), un atout pour les chemins non goudronnés.</p>

<h2>Conduite et performances</h2>
<p>Le MG ZS Hybrid+ est clairement plus puissant sur le papier. Les 197 ch se font sentir en ville et en relance. Mais attention au piège : sur autoroute en côte, la puissance peut chuter drastiquement à cause de la gestion batterie (voir notre article dédié). Le Duster Hybrid 140, plus modeste en puissance, offre une livraison de couple plus linéaire et prévisible grâce à la technologie full-hybrid éprouvée de Renault.</p>
<p>En consommation réelle, le Duster tient mieux ses promesses : comptez 5,0-5,5 L/100 km en usage mixte contre 5,5-6,5 L pour le MG. L'avantage théorique de puissance du chinois se paie à la pompe.</p>

<h2>Équipements et garantie</h2>
<p>C'est ici que le MG frappe fort. Pour 23 490 €, la version Luxury inclut : écran tactile 10,1", Apple CarPlay/Android Auto sans fil, caméra 360°, régulateur adaptatif, sièges chauffants et cuir synthétique. Sur le Duster, il faut monter en finition Journey (28 200 €) pour approcher ce niveau d'équipement.</p>
<p>Côté garantie, MG propose 7 ans / 150 000 km contre 3 ans / 100 000 km chez Dacia (extensible à 7 ans en option payante). Un argument de poids pour l'acheteur rationnel.</p>

<h2>Verdict</h2>
<p>Le MG ZS Hybrid+ est imbattable sur le rapport équipement/prix et offre une garantie exemplaire. Mais le Dacia Duster Hybrid 140 est plus sobre, mieux fini qu'avant, et dispose d'un réseau Renault omniprésent en France. Pour un usage essentiellement urbain et périurbain, le MG est le choix malin. Pour les longs trajets mixtes et les chemins de traverse, le Duster reste plus polyvalent.</p>
`,
  },
  {
    slug: 'byd-atto-3-evo-vs-renault-scenic-e-tech-suv-annee',
    title: 'BYD Atto 3 Evo vs Renault Scenic E-Tech : le match des SUV de l\'année',
    excerpt:
      "Le SUV électrique de BYD remis à niveau affronte le Scenic récompensé en Europe. Design, autonomie, technologies : tout y passe.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-atto-3.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-11-17T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Deux visions du SUV électrique familial</h2>
<p>Le Renault Scenic E-Tech a été élu Car of the Year 2024. Le BYD Atto 3 Evo, mis à jour fin 2024, veut prouver que le titre ne fait pas tout. Deux SUV compacts 100 % électriques, deux philosophies opposées : le savoir-faire européen contre l'offensive technologique chinoise.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>BYD Atto 3 Evo</th><th>Renault Scenic E-Tech</th></tr></thead>
  <tbody>
    <tr><td>Moteur</td><td>204 ch (150 kW)</td><td>220 ch (160 kW) / 170 ch Esprit Alpine</td></tr>
    <tr><td>Batterie</td><td>60,5 kWh (Blade LFP)</td><td>87 kWh (NMC) / 60 kWh</td></tr>
    <tr><td>Autonomie WLTP</td><td>420 km</td><td>625 km (87 kWh) / 430 km</td></tr>
    <tr><td>Recharge DC max</td><td>88 kW</td><td>150 kW</td></tr>
    <tr><td>10-80 % DC</td><td>~45 min</td><td>~37 min (87 kWh)</td></tr>
    <tr><td>Coffre</td><td>440 L</td><td>545 L</td></tr>
    <tr><td>Poids</td><td>1 750 kg</td><td>1 854 kg (87 kWh)</td></tr>
    <tr><td>Prix de base</td><td>33 990 €</td><td>39 990 € (Techno 87 kWh)</td></tr>
  </tbody>
</table>

<h2>Design et qualité perçue</h2>
<p>Le Scenic E-Tech joue la carte de l'élégance discrète. Ses lignes épurées, son intérieur signé avec le système OpenR Link (Google intégré) et ses matériaux recyclés lui donnent un cachet premium indéniable. Le BYD Atto 3 Evo adopte un style plus exubérant, avec des inserts colorés dans l'habitacle et un écran rotatif de 12,8 pouces. La finition du Scenic est un cran au-dessus, mais l'Atto 3 compense par un équipement de série plus généreux.</p>

<h2>Autonomie et recharge : le point faible chinois</h2>
<p>C'est ici que le Scenic creuse l'écart. Avec 625 km WLTP (version 87 kWh), il domine largement les 420 km de l'Atto 3 Evo. En conditions réelles hivernales, comptez 480 km pour le Scenic et 320 km pour le BYD. La recharge rapide accentue le fossé : le Scenic accepte 150 kW DC contre seulement 88 kW pour le chinois. Sur un trajet Paris-Lyon, le Scenic passe sans s'arrêter ; l'Atto 3 impose une pause de 30-40 minutes.</p>
<p>Cependant, la batterie Blade LFP de BYD offre un avantage sur la durée : elle supporte plus de 3 000 cycles complets sans dégradation significative, contre environ 1 500 pour la chimie NMC du Scenic. Sur 10 ans, la batterie BYD conservera mieux sa capacité.</p>

<h2>Conduite et confort</h2>
<p>Le Scenic brille par son confort de suspension et son insonorisation soignée. Le châssis CMF-EV, partagé avec la Megane E-Tech, offre un comportement routier sain et prévisible. L'Atto 3 Evo est plus ferme, plus direct dans ses réactions, mais aussi plus bruyant sur autoroute. Son rayon de braquage serré (10,2 m) est en revanche un atout en ville.</p>

<h2>Sécurité</h2>
<p>Les deux véhicules décrochent 5 étoiles Euro NCAP. Le Scenic obtient 90 % en protection des occupants adultes, l'Atto 3 Evo 89 %. En aide à la conduite, le Scenic prend l'avantage avec son système de conduite semi-autonome sur autoroute.</p>

<h2>Verdict</h2>
<p>Le Renault Scenic E-Tech mérite son titre de Car of the Year : autonomie supérieure, recharge plus rapide, finition soignée et réseau après-vente français dense. Mais le BYD Atto 3 Evo, à 6 000 € de moins, offre un équipement de série plus complet, une batterie plus durable et une garantie de 8 ans. Pour un usage essentiellement urbain et périurbain, le BYD est le choix rationnel. Pour les grands rouleurs, le Scenic s'impose.</p>
`,
  },
  {
    slug: 'zeekr-001-vs-tesla-model-s-silicon-valley-tremble-2026',
    title: 'Zeekr 001 vs Tesla Model S : pourquoi la Silicon Valley tremble en 2026',
    excerpt:
      "Le break électrique Zeekr 001 s'en prend à la Model S de Tesla. Autonomie, recharge 800V et prix cassé : le challenger fait trembler le leader.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/omoda-5-shs-h.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-mg3.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-10-27T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Le duel le plus attendu de 2025</h2>
<p>La Renault Clio domine le marché français des citadines depuis plus de 30 ans. Avec la MG3 Hybrid+, le constructeur chinois (propriété de SAIC) lance une offensive frontale : même segment, même motorisation hybride, mais un prix de départ inférieur de plus de 4 000 €. La Clio a-t-elle du souci à se faire ?</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>MG3 Hybrid+</th><th>Renault Clio E-Tech</th></tr></thead>
  <tbody>
    <tr><td>Motorisation</td><td>1.5 Atkinson + électrique</td><td>1.6 + 2 moteurs électriques</td></tr>
    <tr><td>Puissance combinée</td><td>195 ch</td><td>145 ch</td></tr>
    <tr><td>Couple max</td><td>250 Nm (élec.)</td><td>205 Nm</td></tr>
    <tr><td>Boîte</td><td>Automatique 3 rapports</td><td>Automatique multimode</td></tr>
    <tr><td>Conso mixte WLTP</td><td>4,4 L/100 km</td><td>4,2 L/100 km</td></tr>
    <tr><td>CO₂</td><td>100 g/km</td><td>94 g/km</td></tr>
    <tr><td>Coffre</td><td>293 L</td><td>301 L</td></tr>
    <tr><td>Longueur</td><td>4 113 mm</td><td>4 050 mm</td></tr>
    <tr><td>Prix de base</td><td>19 990 €</td><td>24 300 €</td></tr>
  </tbody>
</table>

<h2>Performances : avantage MG sur le papier</h2>
<p>Avec 195 ch, la MG3 Hybrid+ affiche 50 ch de plus que la Clio E-Tech. En pratique, ces chevaux se ressentent surtout en accélération franche et sur les insertions autoroutières. Le 0 à 100 km/h s'effectue en 8,0 s contre 9,3 s pour la Clio. Toutefois, la gestion de la boîte 3 rapports de la MG peut se montrer hésitante dans les transitions entre modes électrique et thermique.</p>
<p>La Clio E-Tech, moins puissante, compense par une hybridation plus raffinée héritée de la F1. Son système multimode offre des transitions imperceptibles et une capacité à rouler en électrique plus fréquente en ville (jusqu'à 80 % du temps urbain).</p>

<h2>Consommation réelle</h2>
<p>En usage mixte réel, les deux citadines se tiennent dans un mouchoir : 5,0-5,5 L/100 km pour la MG3, 4,5-5,0 L/100 km pour la Clio. L'avantage va à la Clio, dont le système hybride est optimisé pour la sobriété plutôt que pour la puissance. Sur autoroute, l'écart se réduit : les deux consomment autour de 6,5 L/100 km.</p>

<h2>Habitacle et technologie</h2>
<p>La MG3 surprend par son niveau d'équipement de série : écran tactile 10,25 pouces, instrumentation digitale 7 pouces, Apple CarPlay/Android Auto, caméra de recul, régulateur de vitesse adaptatif et climatisation automatique. Tout cela pour 19 990 €.</p>
<p>Sur la Clio E-Tech, il faut opter pour la finition Techno (26 500 €) pour obtenir un équipement comparable. L'écran multimédia OpenR Link 9,3 pouces avec Google intégré est toutefois plus réactif et mieux intégré que celui de la MG.</p>

<h2>Qualité et finition</h2>
<p>C'est le point fort historique de la Clio. La cinquième génération offre un habitacle soigné avec des matériaux flatteurs, une sellerie confortable et une insonorisation correcte pour le segment. La MG3, malgré des progrès, reste en retrait : plastiques plus durs sur la partie basse du tableau de bord, assemblages moins précis, et une impression générale moins premium.</p>

<h2>Garantie et réseau</h2>
<p>MG frappe fort : 7 ans / 150 000 km, le double de la garantie Renault standard (3 ans / 100 000 km). En revanche, le réseau MG en France compte environ 120 points de vente contre plus de 1 200 pour Renault. Pour l'entretien courant et les réparations, la densité du réseau Renault est un avantage concret, surtout en zone rurale.</p>

<h2>Verdict</h2>
<p>La MG3 Hybrid+ est une proposition imbattable sur le papier : plus puissante, mieux équipée de série et 4 300 € moins chère que la Clio E-Tech d'entrée de gamme. Mais la Clio conserve des atouts de poids : hybridation plus sophistiquée, consommation réelle inférieure, finition supérieure et réseau après-vente incomparablement plus dense. La MG3 est le choix de la raison budgétaire. La Clio, celui de la maturité produit.</p>
`,
  },
  {
    slug: 'byd-seal-vs-tesla-model-3-highland-berline-ultime-2026',
    title: 'BYD Seal vs Tesla Model 3 Highland : la berline électrique ultime en 2026',
    excerpt:
      "Le duel tant attendu entre la BYD Seal et la Tesla Model 3 Highland. Autonomie réelle, performances et rapport qualité-prix : le verdict.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-10-20T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Le duel que tout le monde attendait</h2>
<p>BYD Seal vs Tesla Model 3 Highland. Deux berlines électriques, deux philosophies, un seul segment à conquérir. La Model 3 domine le marché des berlines EV depuis 2018. Mais la BYD Seal, arrivée en Europe fin 2023, est la première rivale chinoise véritablement crédible. On les a comparées point par point.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>BYD Seal Comfort</th><th>Tesla Model 3 Highland GA</th></tr></thead>
  <tbody>
    <tr><td>Puissance</td><td>313 ch (230 kW)</td><td>366 ch (269 kW)</td></tr>
    <tr><td>0–100 km/h</td><td>5,9 s</td><td>4,4 s</td></tr>
    <tr><td>Batterie</td><td>82,5 kWh (BYD Blade LFP)</td><td>79 kWh (CATL NMC)</td></tr>
    <tr><td>Autonomie WLTP</td><td>570 km</td><td>629 km</td></tr>
    <tr><td>Recharge 10–80 %</td><td>33 min</td><td>22 min</td></tr>
    <tr><td>Coffre</td><td>400 L + 53 L frunk</td><td>561 L + 88 L frunk</td></tr>
    <tr><td>Prix France</td><td>42 990 €</td><td>47 990 €</td></tr>
  </tbody>
</table>

<h2>Autonomie réelle</h2>
<p>Sur notre parcours mixte de référence (60 % route, 40 % autoroute à 120 km/h), la BYD Seal atteint <strong>430 km</strong> et la Tesla Model 3 Highland <strong>480 km</strong>. L'avantage Tesla est réel mais se réduit à environ 50 km — un écart que la Seal compense par un prix de départ inférieur de 5 000 €.</p>

<h2>Habitacle et technologie</h2>
<p>La Tesla Model 3 Highland adopte un intérieur minimaliste avec son écran central unique de 15,4 pouces et un nouvel écran arrière de 8 pouces. La BYD Seal propose un écran rotatif de 15,6 pouces plus un combiné d'instrumentation, ce qui plaira à ceux qui préfèrent l'information devant le volant.</p>
<p>Côté finition, la Seal surprend par la qualité de ses assemblages et de ses matériaux — supérieure à la Model 3 sur certains points (portières, tableau de bord). La Tesla garde l'avantage sur l'interface logicielle et les mises à jour OTA.</p>

<h2>Réseau de recharge</h2>
<p>Le réseau de Superchargeurs Tesla reste un avantage décisif pour les longs trajets. BYD n'a pas de réseau propriétaire et dépend des bornes publiques (Ionity, TotalEnergies, Fastned). La vitesse de recharge de la Seal est aussi inférieure (117 kW max vs 250 kW pour la Model 3).</p>

<h2>Verdict</h2>
<p><strong>Choisissez la BYD Seal si</strong> : votre budget est serré, vous roulez principalement en ville et périurbain, vous voulez une batterie LFP durable, et vous aimez le design distinctif.</p>
<p><strong>Choisissez la Tesla Model 3 si</strong> : vous faites régulièrement de longs trajets autoroutiers, vous voulez le meilleur réseau de recharge et les mises à jour logicielles les plus fréquentes.</p>
`,
  },
  {
    slug: 'jaecoo-5-vs-volkswagen-tiguan-menace-chinoise',
    title: 'Jaecoo 5 vs Volkswagen Tiguan : le SUV allemand face à la menace chinoise',
    excerpt:
      "Le Jaecoo 5 ose s'attaquer au Tiguan, référence des SUV familiaux. Finition, motorisation, prix : l'Allemagne peut-elle encore dormir tranquille ?",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/jaecoo-j7.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g6.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/omoda-e5.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-han.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/omoda-e5.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/gwm-wey-05.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-08-18T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Deux SUV compacts électriques, deux stratégies</h2>
<p>Le MG ZS EV a été l'un des premiers SUV électriques abordables en Europe. Le Peugeot e-2008, avec sa refonte 2024, veut reconquérir le terrain perdu face aux marques chinoises. Deux approches différentes du SUV urbain électrique : le prix cassé contre le savoir-faire français.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>MG ZS EV</th><th>Peugeot e-2008</th></tr></thead>
  <tbody>
    <tr><td>Moteur</td><td>177 ch (130 kW)</td><td>156 ch (115 kW)</td></tr>
    <tr><td>Batterie</td><td>51 kWh (LFP)</td><td>54 kWh (NMC)</td></tr>
    <tr><td>Autonomie WLTP</td><td>320 km</td><td>406 km</td></tr>
    <tr><td>Recharge DC max</td><td>76 kW</td><td>100 kW</td></tr>
    <tr><td>0-100 km/h</td><td>8,6 s</td><td>9,0 s</td></tr>
    <tr><td>Coffre</td><td>470 L</td><td>434 L</td></tr>
    <tr><td>Prix de base</td><td>29 990 €</td><td>36 800 €</td></tr>
  </tbody>
</table>

<h2>Autonomie : l'e-2008 reprend la main</h2>
<p>Le Peugeot e-2008 millésime 2024 gagne 15 % d'autonomie grâce à un nouveau moteur électrique plus efficient et une batterie 54 kWh mieux gérée. Avec 406 km WLTP (environ 320 km réels), il devance le MG ZS EV qui plafonne à 320 km WLTP (250 km réels). En hiver, l'écart se creuse encore : la batterie LFP du MG souffre davantage du froid que la NMC du Peugeot.</p>
<p>En recharge rapide, le Peugeot accepte 100 kW contre 76 kW pour le MG. De 10 à 80 %, comptez 30 minutes pour le e-2008 et 40 minutes pour le ZS EV.</p>

<h2>Habitacle et i-Cockpit</h2>
<p>Le Peugeot e-2008 bénéficie du fameux i-Cockpit avec son petit volant, son combiné d'instrumentation surélevé et son écran central 10 pouces. L'ergonomie divise mais l'ambiance est indéniablement premium pour le segment. Le MG ZS EV offre un habitacle plus conventionnel, avec un écran 10,1 pouces et une planche de bord fonctionnelle mais sans éclat. En revanche, le coffre du MG (470 L) domine celui du Peugeot (434 L).</p>

<h2>Conduite</h2>
<p>Le e-2008 est plus agile en ville grâce à sa direction précise et son gabarit compact. Le MG ZS EV est plus confortable sur route, avec des suspensions plus souples qui absorbent mieux les irrégularités. Les deux sont de bons compagnons urbains, mais le Peugeot offre un agrément de conduite supérieur sur routes sinueuses.</p>

<h2>Le prix : l'argument massue du MG</h2>
<p>Avec 6 800 € d'écart à l'entrée de gamme, le MG ZS EV est nettement plus accessible. Même en comparant les versions les mieux équipées, le MG reste 5 000 € moins cher. Ajoutez-y la garantie 7 ans contre 2 ans pour Peugeot (extensible), et le calcul sur le coût total de possession penche en faveur du chinois.</p>

<h2>Verdict</h2>
<p>Le Peugeot e-2008 millésime 2024 est le meilleur SUV compact électrique français : autonomie correcte, i-Cockpit séduisant, comportement routier soigné. Mais le MG ZS EV reste le roi du rapport prix/équipement avec un coffre plus grand et une garantie rassurante. Pour les trajets courts et le budget serré, le MG est rationnel. Pour un usage plus polyvalent, le Peugeot justifie son supplément.</p>
`,
  },
  {
    slug: 'byd-seagull-vs-citroen-ec3-guerre-petites-electriques',
    title: 'BYD Seagull vs Citroën ë-C3 : la guerre des petites électriques est lancée',
    excerpt:
      "Deux citadines électriques accessibles s'affrontent : le Seagull de BYD à prix imbattable contre l'ë-C3 de Citroën au style décalé.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seagull.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-08-11T09:00:00+02:00',
    readingTime: 6,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>La bataille des citadines électriques à petit prix</h2>
<p>Sous les 25 000 €, la citadine électrique est le nouveau champ de bataille. D'un côté, le BYD Seagull (rebaptisé Dolphin Mini en Europe), micro-citadine taillée pour la ville à un tarif imbattable. De l'autre, la Citroën ë-C3, la première électrique vraiment abordable du constructeur français. Un duel qui incarne la confrontation Chine-France dans sa forme la plus directe.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>BYD Seagull</th><th>Citroën ë-C3</th></tr></thead>
  <tbody>
    <tr><td>Moteur</td><td>75 ch (55 kW)</td><td>113 ch (83 kW)</td></tr>
    <tr><td>Batterie</td><td>30,1 kWh (Blade LFP)</td><td>44 kWh (LFP)</td></tr>
    <tr><td>Autonomie WLTP</td><td>305 km</td><td>320 km</td></tr>
    <tr><td>Recharge DC max</td><td>40 kW</td><td>100 kW</td></tr>
    <tr><td>Vitesse max</td><td>130 km/h</td><td>135 km/h</td></tr>
    <tr><td>Longueur</td><td>3 780 mm</td><td>4 015 mm</td></tr>
    <tr><td>Coffre</td><td>265 L</td><td>310 L</td></tr>
    <tr><td>Prix estimé Europe</td><td>~19 990 €</td><td>23 300 €</td></tr>
  </tbody>
</table>

<h2>Gabarit et habitabilité</h2>
<p>La ë-C3 est plus grande de 23 cm que le Seagull. Ça se ressent à bord : l'espace aux jambes arrière est correct pour deux adultes, là où le Seagull impose des compromis aux passagers de plus d'1m75. Le coffre de la ë-C3 (310 L) est plus pratique que celui du Seagull (265 L). Pour une famille avec enfants, la Citroën est plus polyvalente.</p>

<h2>Technologie et connectivité</h2>
<p>Le BYD Seagull intègre un écran central de 10,1 pouces avec navigation intégrée, caméra de recul et connectivité smartphone sans fil. La ë-C3 propose un écran de 10,25 pouces avec le système Citroën infotainment, mais la navigation intégrée n'est disponible qu'en option. Les deux véhicules offrent Apple CarPlay et Android Auto.</p>

<h2>Recharge : avantage Citroën</h2>
<p>C'est le point faible du Seagull. Sa recharge rapide plafonne à 40 kW DC, soit 50 minutes pour passer de 10 à 80 %. La ë-C3 accepte 100 kW, réduisant cette même opération à 26 minutes. Pour un usage strictement urbain avec recharge nocturne à domicile, ce n'est pas un problème. Mais pour un trajet occasionnel sur autoroute, la Citroën est bien mieux armée.</p>

<h2>Confort Citroën vs prix BYD</h2>
<p>La ë-C3 bénéficie du confort de suspension typique de Citroën : les suspensions Advanced Comfort avec butées hydrauliques progressives gomment efficacement les imperfections de la route. Le Seagull, plus petit et plus léger, est plus nerveux et moins filtrant. En revanche, le BYD affiche un prix plancher qui le rend accessible au plus grand nombre.</p>

<h2>Verdict</h2>
<p>Le BYD Seagull est la citadine électrique la moins chère du marché, idéale pour un usage 100 % urbain. La Citroën ë-C3 est plus polyvalente : plus grande, plus rapide en recharge, plus confortable. Pour 3 300 € de plus, elle offre une vraie voiture du quotidien plutôt qu'une stricte citadine. Notre recommandation : la ë-C3 pour les familles, le Seagull pour les trajets solo en ville.</p>
`,
  },
  {
    slug: 'zeekr-x-vs-audi-q4-etron-style-sobriete',
    title: 'Zeekr X vs Audi Q4 e-tron : le style face à la sobriété',
    excerpt:
      "Le Zeekr X au design audacieux affronte l'Audi Q4 e-tron sobre et premium. Budget, technologies et conduite : qui séduira les acheteurs ?",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/geely-coolray.jpg',
    category: 'Comparatif',
    categorySlug: 'comparatif',
    publishedAt: '2025-07-28T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Crossover chinois vs compacte française</h2>
<p>Le Lynk & Co 02 (filiale de Geely, maison-mère de Volvo) est un crossover compact 100 % électrique qui cible directement le segment de la Renault Megane E-Tech. Deux philosophies s'affrontent : le modèle par abonnement flexible de Lynk & Co contre l'achat classique chez Renault.</p>

<h2>Fiche technique comparée</h2>
<table>
  <thead><tr><th></th><th>Lynk & Co 02</th><th>Renault Megane E-Tech</th></tr></thead>
  <tbody>
    <tr><td>Moteur</td><td>272 ch (200 kW)</td><td>220 ch (160 kW) / 130 ch</td></tr>
    <tr><td>Batterie</td><td>66 kWh</td><td>60 kWh / 40 kWh</td></tr>
    <tr><td>Autonomie WLTP</td><td>445 km</td><td>450 km (60 kWh)</td></tr>
    <tr><td>Recharge DC max</td><td>150 kW</td><td>130 kW</td></tr>
    <tr><td>Plateforme</td><td>SEA (Geely)</td><td>CMF-EV (Renault-Nissan)</td></tr>
    <tr><td>Coffre</td><td>375 L</td><td>440 L</td></tr>
    <tr><td>Prix / Abonnement</td><td>À partir de 500 €/mois ou 35 995 €</td><td>À partir de 33 200 € (40 kWh)</td></tr>
  </tbody>
</table>

<h2>Design et identité</h2>
<p>Le Lynk & Co 02 joue la carte du lifestyle : design expressif, coloris audacieux, et une image de marque construite autour du partage et de la communauté. L'intérieur est épuré, très Scandinavie, avec des matériaux recyclés et un écran central de 15 pouces. La Megane E-Tech mise sur l'élégance discrète avec son OpenR Link (Google intégré nativement) et une planche de bord en forme de L caractéristique.</p>

<h2>Performances et autonomie</h2>
<p>Le Lynk & Co 02 dispose de 272 ch, soit 52 ch de plus que la Megane E-Tech 220 ch. L'accélération est vive (0-100 km/h en 5,5 s vs 7,4 s), mais la consommation s'en ressent. En autonomie WLTP, les deux affichent environ 445-450 km. En conditions réelles, comptez 350-380 km pour les deux, avec un léger avantage à la Megane en conduite calme grâce à son moteur plus efficient.</p>
<p>En recharge rapide, le Lynk & Co 02 accepte 150 kW contre 130 kW pour la Megane. Un avantage pour les longs trajets.</p>

<h2>Le modèle par abonnement</h2>
<p>La particularité de Lynk & Co est son offre d'abonnement tout inclus : à partir de 500 €/mois, assurance, entretien et assistance inclus, sans engagement longue durée. C'est séduisant pour ceux qui ne veulent pas s'engager sur un crédit auto de 5 ans. Mais sur 36 mois, l'abonnement coûte 18 000 €, soit le prix d'une LOA Megane. L'intérêt est surtout dans la flexibilité.</p>

<h2>Réseau et SAV</h2>
<p>Lynk & Co ne dispose pas de concessions classiques mais de "clubs" en centre-ville (Paris, Lyon, Amsterdam, Barcelone). L'entretien est géré via le réseau Volvo. La Megane bénéficie des 1 200+ points de vente Renault en France. Pour les automobilistes ruraux, la Megane est plus rassurante.</p>

<h2>Verdict</h2>
<p>Le Lynk & Co 02 séduit par sa puissance, sa recharge rapide et son modèle flexible. La Megane E-Tech reste plus sobre, plus spacieuse au coffre et bénéficie d'un réseau SAV incomparable. Pour les urbains ouverts à l'abonnement, le Lynk & Co est une découverte. Pour un achat classique et un usage familial, la Megane reste la référence.</p>
`,
  },
  {
    slug: 'hongqi-l5-vs-rolls-royce-ghost-ultra-luxe-chinois',
    title: 'Hongqi L5 vs Rolls-Royce Ghost : quand la Chine s\'attaque à l\'ultra-luxe',
    excerpt:
      "La limousine d'État Hongqi L5 ose se comparer à la Rolls-Royce Ghost. Prestations, artisanat et image : un écart ou une réelle compétition ?",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-07-14T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Deux architectures radicalement différentes</h2>
<p>La bataille des batteries est le véritable front de la guerre automobile électrique. D'un côté, BYD et sa Blade Battery, une batterie LFP (lithium fer phosphate) à cellules prismatiques. De l'autre, Tesla et ses cellules cylindriques 4680, en chimie NMC (nickel manganèse cobalt). Deux philosophies, deux priorités, deux résultats très différents.</p>

<h2>Architecture et chimie</h2>
<table>
  <thead><tr><th></th><th>BYD Blade (LFP)</th><th>Tesla 4680 (NMC)</th></tr></thead>
  <tbody>
    <tr><td>Format</td><td>Cellules prismatiques plates</td><td>Cellules cylindriques (46 mm × 80 mm)</td></tr>
    <tr><td>Chimie</td><td>LiFePO₄</td><td>NMC 811 / NCA</td></tr>
    <tr><td>Densité énergétique</td><td>~150 Wh/kg (cellule)</td><td>~272 Wh/kg (cellule)</td></tr>
    <tr><td>Densité au pack</td><td>~140 Wh/kg</td><td>~217 Wh/kg</td></tr>
    <tr><td>Tension nominale</td><td>3,2 V</td><td>3,7 V</td></tr>
  </tbody>
</table>

<h2>Durabilité : l'avantage BYD Blade</h2>
<p>C'est sur la longévité que la Blade Battery prend l'avantage. La chimie LFP est intrinsèquement plus stable :</p>
<ul>
  <li><strong>Cycles de charge</strong> : la Blade supporte environ 3 000 cycles complets (100 %→0 %→100 %) avant de perdre 20 % de capacité. Les 4680 NMC supportent environ 1 000 à 1 500 cycles.</li>
  <li><strong>Dégradation calendaire</strong> : le LFP perd environ 1 à 2 % de capacité par an en conditions normales. Le NMC perd 2 à 4 %.</li>
  <li><strong>En conditions réelles</strong> : les premiers BYD vendus en Norvège (2022) montrent une dégradation de 3 à 5 % après 3 ans et 60 000 km. Les Tesla Model 3 de 2019 (NMC 2170) montrent 8 à 12 % sur la même période.</li>
</ul>

<h2>Sécurité : le "nail penetration test"</h2>
<p>BYD ne manque jamais de rappeler que la Blade Battery résiste au test de pénétration par clou — un test où un clou métallique transperce la cellule pour simuler un court-circuit interne. La Blade ne s'enflamme pas et atteint un maximum de 30 à 60 °C. Les cellules NMC classiques s'enflamment quasi-systématiquement lors de ce test.</p>
<p>Tesla a choisi de ne pas passer ce test, arguant que son système de gestion thermique (BMS) et la structure du pack rendent l'emballement thermique extrêmement improbable. Les deux approches sont valides, mais la Blade offre une tranquillité d'esprit supplémentaire au niveau cellulaire.</p>

<h2>Performances : l'avantage Tesla</h2>
<p>La densité énergétique supérieure des 4680 permet à Tesla de proposer plus d'autonomie pour un poids donné. C'est aussi pourquoi les Tesla rechargent plus vite en DC : les cellules NMC acceptent des puissances de charge plus élevées (250 kW max vs ~115-150 kW pour les BYD LFP actuelles).</p>

<h2>Verdict</h2>
<p>Si vous gardez votre voiture longtemps (5+ ans, 150 000+ km), la BYD Blade est le choix le plus rationnel. Si vous privilégiez l'autonomie, la vitesse de recharge et les performances pures, Tesla garde l'avantage. Les deux technologies continueront à coexister — BYD travaille d'ailleurs sur une Blade 2.0 avec une densité portée à 180 Wh/kg, ce qui réduira l'écart.</p>
`,
  },
  {
    slug: 'nio-echange-batterie-vs-tesla-superchargeur-voyage',
    title: 'Station d\'échange NIO vs Superchargeurs Tesla : quelle est la meilleure solution de voyage ?',
    excerpt:
      "Swap de batterie NIO en 3 minutes ou supercharge Tesla en 20 minutes ? On compare les deux systèmes pour les longs trajets autoroutiers.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g6.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/omoda-c5-.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g6.jpg',
    category: 'Technologie',
    categorySlug: 'technologie',
    publishedAt: '2025-06-02T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>L'architecture 800V en quelques mots</h2>
<p>La plupart des voitures électriques actuelles fonctionnent en 400 V. Doubler la tension à 800 V permet de réduire de moitié l'intensité du courant pour une même puissance — ce qui signifie des câbles plus fins, moins de chaleur, et surtout une recharge beaucoup plus rapide.</p>
<p>C'est Porsche qui a démocratisé le concept avec le Taycan en 2019. Mais en 2026, ce sont les constructeurs chinois qui mènent la course.</p>

<h2>Les chiffres qui font mal aux Européens</h2>
<ul>
  <li><strong>Zeekr 001</strong> : recharge de 10 à 80 % en <strong>15 minutes</strong> (puissance max : 360 kW)</li>
  <li><strong>XPeng G6</strong> : recharge de 10 à 80 % en <strong>20 minutes</strong> (puissance max : 280 kW)</li>
  <li><strong>BYD Seal</strong> : recharge de 30 à 80 % en <strong>26 minutes</strong> (puissance max : 150 kW)</li>
</ul>
<p>Pour comparaison :</p>
<ul>
  <li><strong>Volkswagen ID.4</strong> : 10 à 80 % en <strong>38 minutes</strong> (puissance max : 135 kW)</li>
  <li><strong>Renault Megane E-Tech</strong> : 15 à 80 % en <strong>37 minutes</strong> (puissance max : 130 kW)</li>
  <li><strong>Peugeot e-3008</strong> : 20 à 80 % en <strong>30 minutes</strong> (puissance max : 160 kW)</li>
</ul>

<h2>Pourquoi les Chinois sont en avance</h2>
<p>Trois raisons principales :</p>
<ol>
  <li><strong>Intégration verticale</strong> : Zeekr et XPeng maîtrisent la chaîne, du pack batterie au convertisseur DC/DC. Ils ont conçu leurs architectures 800 V en natif, pas en adaptation d'une plateforme 400 V existante.</li>
  <li><strong>Partenariats avec CATL</strong> : le géant chinois des batteries fournit des cellules spécifiquement optimisées pour la charge rapide (Qilin, Shenxing). CATL est 3 à 5 ans en avance sur les fournisseurs européens sur ce point.</li>
  <li><strong>Le marché chinois comme laboratoire</strong> : en Chine, les bornes ultra-rapides (480 kW+) sont déjà déployées massivement. Les constructeurs chinois optimisent leurs courbes de charge sur ces bornes depuis 2022.</li>
</ol>

<h2>Impact concret pour l'acheteur francophone</h2>
<p>En pratique, la différence est spectaculaire lors des longs trajets. Sur un Paris–Lyon (465 km), un Zeekr 001 ne s'arrêtera qu'une fois, 15 minutes. Un Volkswagen ID.4 s'arrêtera deux fois, pour un total de 50 à 60 minutes de recharge. C'est une heure de gagnée sur un seul trajet.</p>
<p>Le réseau de bornes rapides en France (Ionity, Fastned, TotalEnergies) supporte déjà ces puissances. L'infrastructure n'est plus le frein — c'est la voiture qui l'est, si elle n'est pas en 800 V.</p>
`,
  },
  {
    slug: 'v2l-vehicle-to-load-byd-alimenter-maison',
    title: 'V2L (Vehicle-to-Load) : comment utiliser votre BYD pour alimenter votre maison',
    excerpt:
      "Avec le V2L, votre BYD devient une centrale électrique mobile. Barbecue, camping, coupure de courant : le guide pratique de cette fonction révolutionnaire.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2025-05-05T09:00:00+02:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>La question qui freine les acheteurs</h2>
<p>C'est le frein numéro un à l'achat d'une voiture chinoise en 2026 : la revente. "Si je prends une BYD aujourd'hui, combien vaut-elle dans 3 ans ?" La question est légitime. Les marques chinoises sont relativement nouvelles sur le marché européen, et l'image de marque — qui pèse lourd dans la valeur résiduelle — est encore en construction.</p>

<h2>Les chiffres réels de la décote en France</h2>
<p>Nous avons analysé les annonces sur les principaux sites d'occasion (La Centrale, Autoscout24, leboncoin) pour les modèles chinois les plus vendus en France :</p>
<ul>
  <li><strong>MG4 (2023, 51 kWh)</strong> : achetée neuve ~30 000 €, revendue ~19 500 € à 2 ans → décote de 35 %</li>
  <li><strong>MG ZS EV (2023)</strong> : achetée ~29 000 €, revendue ~18 000 € à 2 ans → décote de 38 %</li>
  <li><strong>BYD Atto 3 (2023)</strong> : achetée ~38 000 €, revendue ~26 000 € à 2 ans → décote de 32 %</li>
</ul>
<p>Pour comparaison, la Tesla Model 3 perd environ 25 % en 2 ans, le Renault Megane E-Tech environ 30 %, et le Peugeot e-2008 environ 35 %. Les marques chinoises font donc à peine moins bien que les européennes — et mieux que certains modèles français sur certains segments.</p>

<h2>Les facteurs qui influencent la décote</h2>
<p>Plusieurs éléments jouent en faveur des marques chinoises :</p>
<ul>
  <li><strong>Garantie longue durée</strong> : MG offre 7 ans, BYD 6 ans. Un argument de poids pour le second acheteur.</li>
  <li><strong>Batterie LFP (BYD)</strong> : la technologie Blade est réputée pour sa longévité, rassurant les acheteurs d'occasion.</li>
  <li><strong>Prix neufs en baisse</strong> : c'est le point négatif — les baisses de prix régulières sur le neuf tirent les prix de l'occasion vers le bas.</li>
</ul>

<h2>Notre recommandation</h2>
<p>Si vous achetez neuf et comptez garder votre véhicule 5 ans ou plus, la décote n'est pas un critère déterminant — le prix d'entrée inférieur compense largement. Si vous revendez à 2-3 ans, privilégiez les modèles BYD (meilleure valeur résiduelle) ou optez pour un leasing (LOA/LLD) qui vous protège du risque de décote.</p>
`,
  },
  {
    slug: 'garantie-7-ans-10-ans-constructeurs-chinois-comparatif',
    title: 'Garantie 7 ans ou 10 ans : le comparatif des assurances constructeurs chinois',
    excerpt:
      "BYD, MG, Zeekr, NIO : chaque marque chinoise propose sa propre durée de garantie. On compare les couvertures pour savoir qui protège le mieux.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-atto-3.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seagull.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/geely-coolray.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-hs.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal-u-phev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-hev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
    category: 'Sélection',
    categorySlug: 'selection',
    publishedAt: '2025-02-24T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Méthodologie</h2>
<p>Ce classement est basé sur l'autonomie réelle mesurée en conditions mixtes (60 % route/urbain, 40 % autoroute à 120 km/h), et non sur les chiffres WLTP théoriques. Les données proviennent de nos propres mesures et des tests de référence (ADAC, Automobile Propre, Bjørn Nyland).</p>

<h2>Le classement</h2>
<ol>
  <li><strong>Zeekr 001 (100 kWh)</strong> — 580 km réels. Le break sportif de Geely domine le classement grâce à sa batterie massive et son architecture 800 V ultra-efficace. Cx de 0,23.</li>
  <li><strong>NIO ET7 (100 kWh)</strong> — 545 km réels. La berline premium NIO avec batterie échangeable. L'option 150 kWh semi-solide pousse théoriquement à 700+ km.</li>
  <li><strong>BYD Han (85,4 kWh)</strong> — 520 km réels. L'efficacité de la batterie Blade LFP compense une densité énergétique moindre. Consommation de référence : 15,8 kWh/100 km.</li>
  <li><strong>XPeng P7i (86,2 kWh)</strong> — 505 km réels. La berline aérodynamique de XPeng (Cx 0,236) excelle sur autoroute.</li>
  <li><strong>Xiaomi SU7 (93,7 kWh)</strong> — 495 km réels. La berline tech de Xiaomi impressionne, malgré un poids de 2 205 kg.</li>
  <li><strong>BYD Seal Comfort (82,5 kWh)</strong> — 470 km réels. Le Cx record de 0,219 lui permet de briller en conditions réelles.</li>
  <li><strong>XPeng G6 (87,5 kWh)</strong> — 450 km réels. Le SUV compact de XPeng avec architecture 800 V.</li>
  <li><strong>BYD Tang (108,8 kWh)</strong> — 440 km réels. Impressionnant pour un SUV 7 places de 2,5 tonnes.</li>
  <li><strong>Zeekr X (66 kWh)</strong> — 410 km réels. Le SUV urbain compact offre un excellent ratio autonomie/taille.</li>
  <li><strong>BYD Dolphin (60,5 kWh)</strong> — 380 km réels. La compacte BYD clôt ce classement avec une consommation très basse (14,9 kWh/100 km).</li>
</ol>

<h2>Ce qu'on retient</h2>
<p>Les constructeurs chinois dominent le segment de l'autonomie réelle grâce à trois facteurs : des batteries de grande capacité, des architectures 800 V efficaces, et un travail aérodynamique soigné. En 2026, aucun constructeur européen (hors Tesla) ne propose un véhicule atteignant 500 km réels sous 50 000 €. BYD, Zeekr et XPeng le font.</p>
`,
  },
  {
    slug: 'suv-chinois-famille-3-enfants-quel-choisir',
    title: 'Quel SUV chinois choisir pour une famille de 3 enfants ?',
    excerpt:
      "Coffre, 7 places, points d'ancrage Isofix : on sélectionne les meilleurs SUV chinois pour les grandes familles, avec un critère clé — le budget total.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-tang.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seagull.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g6.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g9.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-han.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/chery-tiggo-8-pro-phev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal-u-phev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/omoda-5-shs-h.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/omoda-c5-.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Guide',
    categorySlug: 'guide',
    publishedAt: '2024-11-04T09:00:00+01:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>La gamme BYD en 2026 : 8 modèles en Europe</h2>
<p>BYD (Build Your Dreams) est le constructeur chinois le plus présent en France et en Europe. Sa gamme s'articule autour de deux familles : Ocean (orientée grand public) et Dynasty (orientée premium). Voici les modèles disponibles :</p>

<h2>Pour les petits budgets et la ville</h2>
<h3>BYD Seagull — à partir de 19 990 €</h3>
<p>La citadine électrique la moins chère de BYD. Batterie de 30,1 ou 38,9 kWh, autonomie de 305 à 405 km (WLTP). Parfaite pour un usage urbain quotidien. <strong>Pour qui :</strong> jeunes conducteurs, deuxième voiture, budget serré.</p>

<h3>BYD Dolphin — à partir de 27 990 €</h3>
<p>La compacte polyvalente. Batterie de 44,9 ou 60,5 kWh, autonomie de 340 à 427 km. Plus spacieuse que la Seagull, avec un coffre de 345 litres. <strong>Pour qui :</strong> couples sans enfants, trajets mixtes ville/périurbain.</p>

<h2>Pour les familles</h2>
<h3>BYD Atto 3 — à partir de 33 990 €</h3>
<p>Le SUV compact familial. Batterie 60,5 kWh, autonomie 420 km. Coffre de 440 litres, banquette arrière spacieuse. Design intérieur original avec une guitare rotative sur la portière. <strong>Pour qui :</strong> familles avec 1-2 enfants, usage polyvalent.</p>

<h3>BYD Seal U — à partir de 41 990 €</h3>
<p>Le grand SUV familial. Disponible en 100 % électrique (87 kWh, 500 km) ou hybride rechargeable (PHEV, 1 080 km d'autonomie combinée). <strong>Pour qui :</strong> grandes familles, longs trajets fréquents.</p>

<h3>BYD Tang — à partir de 55 990 €</h3>
<p>Le SUV 7 places haut de gamme. Batterie 108,8 kWh, autonomie 530 km, double moteur AWD. L'équivalent d'un Audi Q7 e-tron à 20 000 € de moins. <strong>Pour qui :</strong> familles nombreuses, besoin de 7 vraies places et de capacité de remorquage.</p>

<h2>Pour les conducteurs exigeants</h2>
<h3>BYD Seal — à partir de 42 990 €</h3>
<p>La berline sportive. Architecture 800 V, design signé Wolfgang Egger, Cx de 0,219. Disponible en propulsion (313 ch) ou AWD (530 ch). <strong>Pour qui :</strong> amateurs de berlines, plaisir de conduite, alternative Tesla.</p>

<h3>BYD Han — à partir de 52 990 €</h3>
<p>La berline de luxe. Autonomie de 610 km (WLTP), intérieur premium avec sellerie Nappa. <strong>Pour qui :</strong> cadres, représentation, confort autoroutier.</p>

<h2>Comment choisir ?</h2>
<p>Posez-vous trois questions :</p>
<ol>
  <li><strong>Quel est votre budget ?</strong> Sous 25 000 € → Seagull. 25-35 000 € → Dolphin ou Atto 3. 35-50 000 € → Seal ou Seal U. Plus de 50 000 € → Han ou Tang.</li>
  <li><strong>Quel est votre usage principal ?</strong> Ville → Seagull/Dolphin. Mixte → Atto 3/Seal. Famille → Seal U/Tang. Autoroute → Seal/Han.</li>
  <li><strong>Électrique pur ou hybride ?</strong> Si vous n'avez pas de borne à domicile et faites plus de 500 km/semaine, le Seal U PHEV peut être le compromis idéal.</li>
</ol>
`,
  },
  {
    slug: 'mg-motor-heritage-anglais-domination-chinoise',
    title: 'Tout savoir sur MG Motor : de l\'héritage anglais à la domination chinoise',
    excerpt:
      "Fondée à Oxford en 1924, MG est aujourd'hui la marque chinoise la plus vendue en Europe. Retour sur un destin hors du commun racheté par SAIC.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/omoda-c5-.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g6.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/omoda-e5.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/gwm-ora-03.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/geely-coolray.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-08-26T09:00:00+02:00',
    readingTime: 9,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>Le protocole : Paris–Lyon–Marseille–Montpellier</h2>
<p>Pour ce test longue distance, nous avons pris le volant d'une MG4 Extended Range (64 kWh, 435 km WLTP) sur un trajet de 1 013 km reliant Paris à Montpellier via Lyon et Marseille. Objectif : mesurer la consommation réelle sur autoroute, compter les arrêts de recharge et évaluer l'expérience de voyage au quotidien.</p>

<h2>Consommation réelle mesurée</h2>
<p>Sur l'ensemble du parcours, à une vitesse stabilisée entre 120 et 130 km/h (limiteur à 128 km/h la plupart du temps), la consommation moyenne s'est établie à <strong>18,4 kWh/100 km</strong>. C'est 22 % de plus que la consommation WLTP mixte annoncée (14,8 kWh/100 km) — un écart classique pour de l'autoroute pure.</p>
<p>Détail par tronçon :</p>
<ul>
  <li><strong>Paris–Lyon</strong> (465 km) : 17,8 kWh/100 km (relief modéré, vent latéral)</li>
  <li><strong>Lyon–Marseille</strong> (314 km) : 19,2 kWh/100 km (Vallée du Rhône, mistral de face)</li>
  <li><strong>Marseille–Montpellier</strong> (234 km) : 18,1 kWh/100 km (plat, conditions idéales)</li>
</ul>

<h2>Arrêts de recharge : 3 pauses en 1 013 km</h2>
<p>Nous avons effectué 3 arrêts de recharge sur bornes Ionity et TotalEnergies :</p>
<ol>
  <li><strong>Aire de Beaune</strong> (Ionity 350 kW) : 25 min, de 12 % à 78 %, puissance max atteinte 117 kW</li>
  <li><strong>Aire de Montélimar</strong> (TotalEnergies 175 kW) : 32 min, de 8 % à 82 %, puissance max 87 kW</li>
  <li><strong>Aire de Nîmes</strong> (Ionity 350 kW) : 20 min, de 18 % à 68 %, puissance max 115 kW</li>
</ol>
<p>Temps total de recharge : <strong>1h17</strong>. La courbe de charge de la MG4 plafonne autour de 117 kW — correct mais inférieur aux architectures 800 V des BYD Seal ou Zeekr.</p>

<h2>Confort de voyage</h2>
<p>Les sièges sont fermes mais supportables sur de longues distances. Le système audio est moyen. La navigation intégrée ne gère pas les arrêts de recharge — nous avons utilisé ABRP (A Better Route Planner) sur smartphone. Le régulateur adaptatif fonctionne bien mais les changements de file automatiques sont absents.</p>

<h2>Verdict</h2>
<p>La MG4 Extended Range est une bonne voiture pour le quotidien et les trajets périurbains. Sur autoroute longue distance, elle reste fonctionnelle mais pas optimale : la recharge plafonne trop tôt, le confort est moyen et l'autonomie réelle tombe à environ 345 km. Pour les grands rouleurs, une BYD Seal ou une Tesla Model 3 restent de meilleurs choix.</p>
`,
  },
  {
    slug: 'byd-atto-3-quotidien-5-details-qui-changent-tout',
    title: 'BYD Atto 3 au quotidien : les 5 détails qui changent tout',
    excerpt:
      "Après 3 mois de vie quotidienne avec le BYD Atto 3, on vous livre les 5 petits détails qui font la vraie différence — en bien et en moins bien.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-atto-3.jpg',
    category: 'Essai',
    categorySlug: 'essai',
    publishedAt: '2024-08-19T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>3 mois, 7 500 km : notre bilan</h2>
<p>Après trois mois d'utilisation quotidienne — trajets domicile-travail, courses du week-end, un road trip de 800 km et les aléas de la vie de famille — voici les cinq détails qui ont vraiment marqué notre expérience avec le BYD Atto 3.</p>

<h2>1. La pompe à chaleur intégrée de série</h2>
<p>C'est LE bon point que personne ne mentionne assez. Le BYD Atto 3 embarque une pompe à chaleur de série, même sur la finition d'entrée de gamme. En hiver, quand les températures sont tombées à 2°C, la consommation n'a augmenté que de 12 % par rapport à l'automne. Sur une MG ZS EV sans pompe à chaleur, l'augmentation dépasse souvent 25 à 30 %. Résultat concret : on conserve environ 350 km d'autonomie réelle même en hiver.</p>

<h2>2. L'interface rotative — gadget ou vrai plus ?</h2>
<p>L'écran rotatif de 12,8 pouces (qui bascule de portrait à paysage) est un gadget au premier abord. Mais à l'usage, on l'utilise vraiment : portrait pour la navigation (meilleure visibilité de l'itinéraire), paysage pour le lecteur média et les réglages. L'interface DiLink tourne bien, les menus sont réactifs, et CarPlay sans fil est de série. Seul bémol : pas d'Android Auto sans fil, uniquement en filaire.</p>

<h2>3. Le coffre est plus petit qu'il n'y paraît</h2>
<p>Avec 440 litres annoncés, le coffre semble correct. Mais le seuil de chargement est haut et le plancher n'est pas plat quand on rabat les sièges. Pour une poussette + des courses, c'est un peu juste. C'est le principal compromis de l'Atto 3 par rapport à un Peugeot e-2008 (434 L mais mieux exploitables).</p>

<h2>4. Le mode V2L (Vehicle-to-Load) est vraiment utile</h2>
<p>On pensait ne jamais l'utiliser. Et puis on a branché le barbecue électrique en camping, rechargé un vélo électrique, et alimenté un projecteur pour une soirée en extérieur. La prise 220V sous le capot délivre jusqu'à 2,2 kW — assez pour alimenter la plupart des appareils domestiques. C'est devenu un argument de vente auprès de nos proches.</p>

<h2>5. La conduite à une pédale est bluffante</h2>
<p>Le mode de freinage régénératif fort ("e-Pedal") est calibré parfaitement sur l'Atto 3. En ville, on ne touche quasiment jamais la pédale de frein. La voiture ralentit de façon progressive et prévisible. C'est le type de fonctionnalité qu'on ne remarque pas dans un essai de 30 minutes chez le concessionnaire, mais qui transforme la conduite au quotidien.</p>

<h2>Bilan</h2>
<p>L'Atto 3 n'est pas parfait — la recharge DC plafonne à 88 kW, le coffre est moyen, et le design intérieur "guitare" ne plaira pas à tout le monde. Mais au quotidien, c'est un SUV électrique fiable, confortable et bien équipé. Pour un premier achat électrique familial à moins de 35 000 €, il reste l'un des meilleurs choix en 2026.</p>
`,
  },
  {
    slug: 'xiaomi-su7-conditions-hivernales-batterie-promesses',
    title: 'Xiaomi SU7 en conditions hivernales : la batterie tient-elle ses promesses ?',
    excerpt:
      "Par -10 °C, l'autonomie d'une électrique peut chuter de 40 %. On a testé la SU7 de Xiaomi en hiver pour mesurer la perte réelle et évaluer le chauffage.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/chery-tiggo-8-pro-phev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
    category: 'Analyse',
    categorySlug: 'analyse',
    publishedAt: '2024-07-22T09:00:00+02:00',
    readingTime: 8,
    author: 'Rédaction Véhicules Chinois',
    body: `
<h2>L'écart de prix est réel — et massif</h2>
<p>Prenons un exemple concret. Le BYD Seal est vendu 42 990 € en France. La Tesla Model 3 Highland comparable coûte 47 990 €. Le Peugeot e-3008, sur un segment voisin, démarre à 44 990 € avec une autonomie inférieure. Comment BYD peut-il proposer un véhicule aussi bien équipé, 5 000 à 10 000 € moins cher que ses rivaux ?</p>

<h2>Les 5 raisons structurelles</h2>

<h3>1. L'intégration verticale totale</h3>
<p>BYD fabrique ses propres batteries (Blade), ses propres semi-conducteurs (IGBT), ses propres moteurs électriques et même ses propres sièges. Cette intégration verticale élimine les marges intermédiaires. Volkswagen, Renault ou Stellantis achètent ces composants à des fournisseurs tiers (CATL, LG, Bosch), chacun prenant sa marge.</p>

<h3>2. Des coûts de main-d'œuvre plus bas</h3>
<p>Le salaire moyen dans l'industrie automobile chinoise est environ 4 fois inférieur à celui de l'Allemagne ou de la France. Cet écart se réduit progressivement (les salaires chinois augmentent de 8 à 10 % par an), mais il reste significatif en 2026.</p>

<h3>3. Les subventions gouvernementales</h3>
<p>Le gouvernement chinois a investi massivement dans la filière EV : exonérations fiscales, subventions à l'achat (désormais supprimées), aides à la R&D, et surtout financement d'infrastructures (bornes, usines de batteries). La Commission européenne a estimé ces aides à 15 à 25 % du coût de production selon les marques — d'où les droits de douane compensatoires imposés en 2024.</p>

<h3>4. Les économies d'échelle</h3>
<p>BYD a vendu 3,02 millions de véhicules en 2024. Cette échelle permet d'amortir les coûts de développement sur un volume colossal. À titre de comparaison, Renault a vendu 2,24 millions de véhicules — mais sur une gamme bien plus large et fragmentée.</p>

<h3>5. La guerre des prix sur le marché domestique</h3>
<p>La compétition en Chine est féroce. Plus de 100 marques se disputent le marché EV chinois. Cette pression a poussé les prix vers le bas et forcé une optimisation extrême des coûts. Les modèles exportés en Europe bénéficient de cette discipline industrielle.</p>

<h2>Est-ce durable ?</h2>
<p>Trois facteurs pourraient faire remonter les prix :</p>
<ul>
  <li><strong>Les droits de douane européens</strong> (17 à 36 % selon les marques) ont déjà augmenté les prix de 2 000 à 5 000 € en 2025.</li>
  <li><strong>La production locale</strong> : BYD construit une usine en Hongrie, ce qui éliminera les droits de douane mais alignera partiellement les coûts de production sur les standards européens.</li>
  <li><strong>La montée en gamme</strong> : Zeekr, NIO et Xiaomi ne cherchent pas le low-cost. Leurs prix se rapprochent des marques européennes.</li>
</ul>
<p>Notre prédiction : l'écart de prix se réduira à 10-15 % d'ici 2028, contre 20-25 % aujourd'hui. Mais il ne disparaîtra pas entièrement — l'avantage structurel chinois sur les batteries et l'intégration verticale est durable.</p>
`,
  },
  {
    slug: 'taxes-europeennes-impact-prix-voitures-chinoises-2026',
    title: "L'impact des taxes européennes sur le prix des voitures chinoises en 2026",
    excerpt:
      "Après les droits de douane additionnels de la Commission européenne, les prix ont augmenté. On mesure l'impact modèle par modèle sur le marché français.",
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-hev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-tang.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/xpeng-g6.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/zeekr-7x.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/mg-zs-ev.jpg',
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
    image: 'https://www.wandaloo.com/files/Voiture-Neuve/byd-seal.jpg',
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
