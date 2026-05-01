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
  featured?: boolean;
  bodyHtml?: string;
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
    featured: true,
    bodyHtml: `
<h2>Une silhouette qui s'inspire de l'océan</h2>
<p>BYD ne fait plus dans la demi-mesure. Avec la Seal, le constructeur de Shenzhen signe une berline fastback dont le langage stylistique — baptisé <strong>Ocean Aesthetics</strong> — rivalise ouvertement avec les meilleures productions européennes. Les lignes tendues, le toit fuyant et les feux arrière en boomerang forment un ensemble cohérent qui tranche radicalement avec l'image bon marché parfois associée aux marques chinoises.</p>
<p>Longue de 4,80 m pour 1,46 m de hauteur, la Seal s'inscrit dans la catégorie des berlines compactes premium. Son empattement de 2,92 m — rendu possible par la plateforme dédiée aux véhicules électriques e-Platform 3.0 — garantit un espace aux passagers arrière digne d'une berline de segment supérieur.</p>

<blockquote><p>« La BYD Seal est la première voiture chinoise qui m'a fait oublier que je regardais une voiture chinoise. » — Top Gear Magazine, mars 2024</p></blockquote>

<h2>Des performances qui font rougir les sportives thermiques</h2>
<p>La Seal est disponible en deux versions au Maroc. La version <strong>Propulsion</strong> embarque un moteur arrière de 313 ch (230 kW) pour un 0 à 100 km/h annoncé en 5,9 secondes. La version <strong>Performance</strong> à double moteur développe 530 ch (390 kW) et expédie le 0 à 100 km/h en seulement 3,8 secondes — un chiffre qui défie des sportives vendues deux à trois fois plus cher.</p>

<figure>
  <img src="https://picsum.photos/seed/bydsealdash/1200/700" alt="Tableau de bord de la BYD Seal avec écran rotatif 15,6 pouces" />
  <figcaption>Le poste de conduite de la BYD Seal : épuré, dominé par un écran central rotatif de 15,6 pouces.</figcaption>
</figure>

<h2>La batterie Blade : une technologie de rupture</h2>
<p>Là où BYD fait véritablement la différence, c'est dans sa technologie de batterie. La <strong>batterie Blade</strong>, intégrée au plancher comme un élément structurel, offre une densité énergétique supérieure aux batteries NMC classiques tout en éliminant pratiquement les risques d'emballement thermique. La capacité de 82,5 kWh de la version Propulsion permet une autonomie WLTP de <strong>570 km</strong>, tandis que la Performance atteint 520 km malgré sa puissance accrue.</p>
<p>La recharge rapide DC est supportée jusqu'à 150 kW, ce qui permet de récupérer 150 km d'autonomie en 15 minutes sur une borne compatible. La recharge AC 11 kW est de série, permettant une recharge complète en moins de 8 heures sur une Wallbox domestique.</p>

<h2>Intérieur : le luxe à portée de main</h2>
<p>À bord, BYD a visiblement tout mis sur la table. L'écran central de 15,6 pouces est rotatif : il peut passer du mode portrait au mode paysage en un geste. Associé à un combiné d'instrumentation de 10,25 pouces et à un affichage tête haute, il constitue l'un des espaces technologiques les plus avancés du segment.</p>
<ul>
  <li>Sièges avant ventilés et chauffants avec fonction massage</li>
  <li>Système audio Dynaudio 12 haut-parleurs</li>
  <li>Toit panoramique en verre athermique</li>
  <li>Recharge sans fil 50 W pour smartphones</li>
  <li>Système ADAS complet (freinage d'urgence, maintien de voie, régulateur adaptatif)</li>
</ul>

<h2>Prix et disponibilité au Maroc</h2>
<p>La BYD Seal est commercialisée au Maroc par le réseau officiel BYD Maroc. Le prix de la version Propulsion est fixé à <strong>399 000 DH</strong> TTC, tandis que la version Performance est proposée à <strong>469 000 DH</strong>. Face à une Tesla Model 3 Grande Autonomie à plus de 550 000 DH, la Seal se positionne comme une alternative sérieuse, mieux équipée de série et garantie 6 ans ou 150 000 km.</p>

<h2>Notre verdict</h2>
<p>La BYD Seal ne se contente pas de concurrencer les berlines électriques européennes — elle les surpasse sur plusieurs points : autonomie, équipements de série et rapport qualité-prix. Son seul point à surveiller reste la valeur de revente sur un marché marocain encore en train de construire sa culture du véhicule électrique d'occasion. Pour les early adopters qui veulent le meilleur de la technologie chinoise aujourd'hui, c'est un achat difficile à remettre en question.</p>
`,
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
    featured: true,
    bodyHtml: `
<h2>Le retour d'une légende britannique</h2>
<p>Il y a quelque chose d'émouvant dans la renaissance du roadster MG. La marque fondée à Oxford en 1924 a produit certaines des voitures de sport les plus désirables des années 50 à 80 — la MGB, la Midget, la RV8. Aujourd'hui sous pavillon chinois (SAIC Motor), MG ressuscite l'esprit du roadster avec un bolide 100 % électrique qui ne renie pas ses origines : le <strong>Cyberster</strong>.</p>
<p>Présenté en concept au Salon de Shanghai 2021, puis confirmé en production, le Cyberster est désormais une réalité commerciale. Sa silhouette, signée par des designers britanniques du studio MG de Londres, renoue avec les proportions classiques du roadster : long capot, habitacle reculé, arrière tronqué.</p>

<blockquote><p>« Avec le Cyberster, MG prouve que l'héritage sportif britannique et l'ingénierie électrique chinoise forment une combinaison explosive. » — Autocar UK, février 2024</p></blockquote>

<h2>Des chiffres de supercar</h2>
<p>Sous ses courbes rétro se cache une technologie résolument moderne. Le Cyberster en version <strong>Twin Motor</strong> développe 510 ch (375 kW) distribués entre un moteur avant et un moteur arrière. Le résultat : un 0 à 100 km/h expédié en <strong>3,2 secondes</strong>, soit le temps d'un Porsche 911 Carrera S. La vitesse maximale est limitée électroniquement à 200 km/h.</p>
<p>La batterie de 77 kWh offre une autonomie WLTP de <strong>520 km</strong> — un chiffre remarquable pour un roadster, catégorie historiquement pénalisée par l'aérodynamisme. La recharge rapide DC jusqu'à 135 kW permet de récupérer 80 % de charge en moins de 40 minutes.</p>

<figure>
  <img src="https://picsum.photos/seed/mgcybercockpit/1200/700" alt="Cockpit du MG Cyberster avec double écran et volant sport" />
  <figcaption>L'habitacle du Cyberster mêle nostalgie (compteurs ronds) et modernité (double écran et ADAS complet).</figcaption>
</figure>

<h2>L'habitacle : deux mondes en un</h2>
<p>À l'intérieur, MG a su marier les références au passé et le présent technologique. Les compteurs ronds évoquent les MG des années 70, tandis que deux écrans de 7 pouces flanquent un écran central de 10,25 pouces. Le volant sport à méplat inférieur est de série, tout comme les sièges baquets en cuir Nappa perforé.</p>
<ul>
  <li>Capote électrique s'ouvrant en 3 secondes jusqu'à 50 km/h</li>
  <li>Arceau de sécurité intégré en aluminium</li>
  <li>Système audio premium 12 haut-parleurs</li>
  <li>Mode Sport avec cartographie moteur dédiée et réponse direction renforcée</li>
</ul>

<h2>Disponibilité et prix</h2>
<p>Le MG Cyberster est proposé en version standard (340 ch, autonomie 580 km) à partir de <strong>520 000 DH</strong> et en version Twin Motor à <strong>620 000 DH</strong>. Des tarifs qui peuvent sembler élevés, mais qui restent très inférieurs à une Porsche 911 Carrera Cabriolet (plus d'un million de dirhams) pour des performances comparables.</p>
<p>La garantie MG Maroc couvre 5 ans ou 100 000 km sur le véhicule, et 8 ans ou 160 000 km sur la batterie. Une proposition commerciale solide pour un cabriolet électrique haut de gamme.</p>
`,
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
    featured: true,
    bodyHtml: `
<h2>Pourquoi importer directement depuis la Chine ?</h2>
<p>La tentation est compréhensible : sur les plateformes chinoises comme Alibaba ou auprès de courtiers spécialisés, certains modèles peuvent être proposés 20 à 40 % moins chers qu'en concession officielle au Maroc. Mais avant de se lancer, il faut bien comprendre les mécanismes fiscaux et administratifs qui régissent l'importation de véhicules particuliers au Maroc.</p>
<p>Ce guide s'adresse aux particuliers résidant au Maroc qui souhaitent importer un véhicule de moins de 5 ans depuis la Chine. Pour les véhicules d'occasion de plus de 5 ans, l'importation est soumise à des restrictions supplémentaires.</p>

<blockquote><p>« Dans 90 % des cas, acheter chez un concessionnaire officiel reste plus avantageux une fois les frais d'importation calculés. Mais pour les modèles non importés officiellement, c'est parfois la seule option. » — Douanes marocaines, note d'information 2024</p></blockquote>

<h2>Étape 1 : calculer le coût total</h2>
<p>Avant toute démarche, calculez précisément le coût réel d'acquisition. Sur le prix FOB (prix départ usine en Chine), il faut ajouter :</p>
<ul>
  <li><strong>Transport maritime</strong> : 1 500 à 3 000 € selon le port de départ (Shanghai, Tianjin, Guangzhou) et le port d'arrivée (Casablanca)</li>
  <li><strong>Droits de douane</strong> : 17,5 % de la valeur CAF (coût + assurance + fret)</li>
  <li><strong>TVA</strong> : 20 % appliquée sur la valeur CAF + droits de douane</li>
  <li><strong>Taxe parafiscale</strong> : 0,25 % de la valeur en douane</li>
  <li><strong>Frais de dédouanement</strong> : 2 000 à 5 000 DH selon le transitaire</li>
</ul>
<p>Exemple concret : une BYD Atto 3 achetée 25 000 € en Chine avec 2 000 € de transport revient à environ 395 000 DH une fois tous les frais intégrés — soit à peu près le prix concessionnaire officiel.</p>

<figure>
  <img src="https://picsum.photos/seed/importdoc/1200/700" alt="Documents nécessaires pour l'importation d'un véhicule au Maroc" />
  <figcaption>Les documents indispensables : facture d'achat, certificat de conformité, titre de propriété et assurance transport.</figcaption>
</figure>

<h2>Étape 2 : les documents obligatoires</h2>
<p>Pour dédouaner votre véhicule à Casablanca, vous devrez fournir :</p>
<ul>
  <li>La facture d'achat originale en anglais ou français (avec traduction certifiée si nécessaire)</li>
  <li>Le titre de propriété du véhicule (Certificate of Title)</li>
  <li>Le certificat de conformité (CoC) ou équivalent du constructeur</li>
  <li>La liste de colisage (packing list)</li>
  <li>La police d'assurance transport</li>
  <li>Le connaissement maritime (Bill of Lading)</li>
</ul>

<h2>Étape 3 : l'homologation NARSA</h2>
<p>Une fois dédouané, le véhicule doit être homologué par le <strong>NARSA</strong> (Agence Nationale de la Sécurité Routière) avant de pouvoir être immatriculé. Cette étape est souvent la plus complexe pour les modèles non encore officiellement importés au Maroc.</p>
<p>Le dossier d'homologation comprend une réception technique individuelle (RTI) qui vérifie la conformité du véhicule aux normes marocaines : feux, émissions, freinage, dimensions, résistance à la corrosion. Les délais sont de 4 à 8 semaines et les frais de 3 000 à 8 000 DH selon la complexité du dossier.</p>

<h2>Conseils pratiques</h2>
<ul>
  <li><strong>Passez par un transitaire agréé</strong> : les erreurs de déclaration douanière peuvent entraîner des pénalités et des retards coûteux</li>
  <li><strong>Vérifiez la disponibilité des pièces</strong> : avant d'importer un modèle rare, assurez-vous que les pièces détachées sont accessibles au Maroc</li>
  <li><strong>Renseignez-vous sur la garantie</strong> : les garanties constructeur ne sont généralement pas transférables à l'international</li>
  <li><strong>Anticipez le délai de livraison</strong> : comptez 6 à 10 semaines entre la commande et la réception du véhicule à Casablanca</li>
</ul>
`,
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
    bodyHtml: `
<h2>Un gabarit généreux pour une famille nombreuse</h2>
<p>Le Chery Tiggo 8 Pro s'attaque à l'un des segments les plus convoités du marché marocain : le SUV familial 7 places. Avec ses 4,74 m de long et son empattement de 2,71 m, il propose un habitacle à trois rangées de sièges dont la troisième est, fait rare dans sa catégorie de prix, réellement utilisable par des adultes.</p>
<p>Le design extérieur marque une nette évolution par rapport à la génération précédente. La calandre massive à double lame chromée, les blocs optiques effilés avec signature lumineuse LED et les jantes 19 pouces de série donnent au Tiggo 8 Pro une prestance indéniable. C'est un SUV qui assume pleinement son statut de véhicule familial premium abordable.</p>

<blockquote><p>« Sur ce segment, Chery fait mieux que de simples copies. Le Tiggo 8 Pro a une vraie personnalité et des équipements que des concurrents japonais réservent à leurs versions top de gamme. » — Auto Hebdo Maroc, mars 2024</p></blockquote>

<h2>Un cockpit centré sur la technologie</h2>
<p>À bord, l'écran central tactile de <strong>12,3 pouces</strong> domine la planche de bord, associé à un combiné numérique de 10,25 pouces. L'interface, traduite en français et en arabe, est réactive et bien organisée. On apprécie particulièrement le système de navigation embarqué avec mises à jour cartographiques gratuites.</p>

<figure>
  <img src="https://picsum.photos/seed/cherycockpit/1200/700" alt="Intérieur du Chery Tiggo 8 Pro avec écran 12,3 pouces" />
  <figcaption>Le poste de conduite du Tiggo 8 Pro : double écran panoramique, commandes tactiles et finitions soignées.</figcaption>
</figure>

<ul>
  <li>Toit panoramique double vitrage en série dès la version de base</li>
  <li>Sièges première rangée ventilés et chauffants</li>
  <li>Système audio 9 haut-parleurs</li>
  <li>Caméra 360° avec vue aérienne</li>
  <li>Recharge sans fil pour smartphones</li>
  <li>ADAS : freinage automatique d'urgence, régulateur adaptatif, alerte angle mort</li>
</ul>

<h2>La mécanique : fiable et bien tempérée</h2>
<p>Le Tiggo 8 Pro est animé par un moteur <strong>1.6 TGDI</strong> de 197 ch associé à une boîte DCT à 7 rapports. Ce couple de 290 Nm assure des reprises franches en ville et une aisance correcte sur autoroute, même à pleine charge des 7 places. La consommation mixte homologuée est de 8,1 L/100 km — dans la réalité marocaine, comptez 9 à 10 L avec la climatisation.</p>
<p>La transmission intégrale n'est pas disponible sur le marché marocain — seule la traction avant est proposée. Pour les pistes, il faudra se contenter du mode de contrôle de traction renforcé.</p>

<h2>Confort et comportement routier</h2>
<p>Sur route, le Tiggo 8 Pro révèle un caractère confortable et serein. La suspension à bras tirés à l'arrière filtre efficacement les imperfections de la chaussée, et l'insonorisation est de bon niveau pour la catégorie. La direction pourrait être un peu plus communicative, mais c'est un défaut commun à tous les SUV familiaux de ce gabarit.</p>

<h2>Prix et concurrence</h2>
<p>Le Chery Tiggo 8 Pro est proposé à partir de <strong>379 000 DH</strong> en version 5 places et <strong>399 000 DH</strong> en version 7 places. Face à un Hyundai Tucson (à partir de 380 000 DH en 5 places sans 7ème siège disponible) ou un Kia Sorento (à partir de 480 000 DH), l'argument prix est réel. La garantie de 5 ans ou 150 000 km renforce encore l'attractivité de l'offre.</p>
`,
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
    bodyHtml: `
<h2>Le protocole de test</h2>
<p>L'autonomie annoncée par les constructeurs est mesurée en cycle WLTP — un protocole standardisé en laboratoire, climatisation désactivée, à des températures idéales. La réalité marocaine est bien différente : autoroutes à 120 km/h, températures estivales de 35 à 40 °C, climatisation en continu. Nous avons voulu mesurer l'écart.</p>
<p>Notre protocole : départ de Casablanca (station de recharge rapide à Ain Sebaâ) avec batterie chargée à 100 %, trajet aller jusqu'à Rabat (90 km d'autoroute), puis retour. Climatisation réglée à 22 °C, vitesse de croisière à 110 km/h, deux adultes à bord. La Geely Geometry C emportée pour ce test est la version <strong>Long Range</strong> avec batterie de 70,3 kWh et autonomie WLTP annoncée de <strong>550 km</strong>.</p>

<blockquote><p>« Sur autoroute à vitesse soutenue et climatisation en marche, divisez le chiffre WLTP par 1,3 pour obtenir une estimation marocaine réaliste. » — Notre méthodologie de test</p></blockquote>

<h2>Résultats : Casa → Rabat (aller)</h2>
<p>Au départ, l'ordinateur de bord affichait 530 km d'autonomie estimée. À l'arrivée à Rabat après 92 km, il restait 416 km d'autonomie estimée — soit une consommation réelle de <strong>114 km</strong> pour 92 km parcourus. Le ratio est de 1,24, ce qui signifie que la Geometry C consomme 24 % de plus que son cycle WLTP sur autoroute à 110 km/h en été.</p>

<figure>
  <img src="https://picsum.photos/seed/geelytest/1200/700" alt="Geely Geometry C sur l'autoroute Casa-Rabat avec affichage autonomie" />
  <figcaption>L'affichage d'autonomie en temps réel sur l'autoroute Casa-Rabat : 416 km restants après 92 km parcourus.</figcaption>
</figure>

<h2>Résultats : Rabat → Casa (retour)</h2>
<p>Sur le trajet retour, effectué en fin d'après-midi avec une température extérieure de 38 °C, la consommation a légèrement augmenté : 118 km consommés pour 92 km parcourus. À l'arrivée à Casablanca, il restait <strong>298 km</strong> d'autonomie après 184 km réels parcourus.</p>
<p>En extrapolant ces résultats, la Geometry C Long Range offre une autonomie réelle d'environ <strong>420 km</strong> en conditions marocaines estivales sur autoroute — soit 76 % de l'autonomie WLTP. C'est un résultat honnête, dans la moyenne haute des électriques testées dans les mêmes conditions.</p>

<h2>Comportement de la batterie sous la chaleur</h2>
<p>Un point positif notable : la gestion thermique de la batterie s'est montrée efficace. Malgré les 38 °C extérieurs, le système de refroidissement actif liquide a maintenu la batterie dans sa plage de température optimale (25-35 °C). Aucune limitation de puissance ni de recharge n'a été observée pendant tout le test.</p>
<ul>
  <li>Consommation moyenne mesurée : 16,8 kWh/100 km</li>
  <li>Vitesse de croisière : 110 km/h</li>
  <li>Température extérieure : 36-38 °C</li>
  <li>Climatisation : 22 °C, ventilation niveau 3</li>
  <li>Autonomie réelle estimée : 420 km</li>
</ul>

<h2>Conclusion : une électrique honnête</h2>
<p>La Geely Geometry C Long Range tient ses promesses dans les grandes lignes. L'écart entre autonomie WLTP et autonomie réelle est certes présent (24 % en conditions difficiles), mais il est clairement communiqué et prévisible. Pour un usage Casablanca-Rabat au quotidien ou pour des trajets intercités fréquents, la Geometry C est une électrique parfaitement adaptée au réseau routier marocain — à condition de planifier une recharge sur les trajets dépassant 350 km.</p>
`,
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
    bodyHtml: `
<h2>Un marché de l'occasion encore immature</h2>
<p>Les premières voitures chinoises arrivent massivement au Maroc depuis 2021-2022. Trois ans plus tard, un marché de l'occasion commence à se structurer, notamment autour des MG ZS (premier modèle chinois à connaître un vrai succès de volume) et des Chery Tiggo. Mais acheter une chinoise d'occasion en 2024, c'est naviguer dans un territoire encore peu cartographié.</p>
<p>La question centrale est celle de la fiabilité à long terme. Les constructeurs chinois ont fait des progrès spectaculaires depuis les années 2000, mais les données sur la durabilité au-delà de 100 000 km restent rares, notamment sur le marché marocain où les conditions d'utilisation (chaleur, routes dégradées, carburant de qualité variable) sont plus exigeantes qu'en Europe.</p>

<blockquote><p>« Sur les MG ZS thermiques avec plus de 80 000 km, nous constatons une fiabilité comparable aux Toyota Yaris de la même époque. La réputation du passé ne reflète plus la réalité actuelle. » — Mécanicien indépendant à Casablanca, 2024</p></blockquote>

<h2>La décote : avantage ou signal d'alarme ?</h2>
<p>Les voitures chinoises se déprécient plus vite que les japonaises ou les européennes premium. Un MG ZS de 2022 avec 40 000 km se négocie aujourd'hui 30 à 35 % en dessous de son prix neuf, contre 20-25 % pour une Toyota RAV4 équivalente. Cette décote est en partie liée à la méfiance résiduelle de certains acheteurs, et représente donc une opportunité pour ceux qui ont fait leurs recherches.</p>

<figure>
  <img src="https://picsum.photos/seed/occasioncheck/1200/700" alt="Vérification d'une voiture chinoise d'occasion" />
  <figcaption>Points de contrôle prioritaires à l'achat : état de la batterie 12V, système infotainment et historique d'entretien.</figcaption>
</figure>

<h2>Ce qu'il faut vérifier avant d'acheter</h2>
<ul>
  <li><strong>Historique d'entretien</strong> : privilégiez les véhicules entretenus en concession officielle, avec carnet tamponné</li>
  <li><strong>État de la batterie haute tension</strong> (pour les électriques) : demandez un rapport de diagnostic SOH (State of Health) — en dessous de 85 %, négociez fortement</li>
  <li><strong>Système infotainment</strong> : vérifiez les mises à jour disponibles et le bon fonctionnement des écrans</li>
  <li><strong>Disponibilité des pièces</strong> : pour les modèles non officiellement importés, renseignez-vous sur les délais d'approvisionnement</li>
  <li><strong>Garantie restante</strong> : certains constructeurs proposent des garanties transférables — un atout précieux</li>
</ul>

<h2>Les modèles à privilégier</h2>
<p>En occasion, les modèles ayant le meilleur bilan sont le <strong>MG ZS</strong> (thermique et électrique), le <strong>Chery Tiggo 4</strong> et le <strong>BYD Atto 3</strong> (pour les VE). Ces modèles bénéficient d'un réseau de concessions officiel au Maroc, ce qui facilite les réparations et les mises à jour logicielles.</p>
<p>À éviter en première approche d'occasion : les modèles de marques sans réseau officiel au Maroc (certains Geely, Haval d'import gris) où le support technique peut s'avérer problématique.</p>

<h2>Notre verdict</h2>
<p>Acheter une chinoise d'occasion en 2024 peut être une excellente affaire — à condition de bien choisir le modèle, de vérifier l'historique d'entretien et de passer par un vendeur sérieux. La décote plus marquée qu'ailleurs représente une vraie opportunité pour les acheteurs avertis. L'essentiel est de se concentrer sur les marques disposant d'un réseau officiel au Maroc, garantes d'un suivi technique fiable.</p>
`,
  },
  {
    slug: 'byd-atto-3-autonomie-test-maroc',
    title: 'BYD Atto 3 : autonomie réelle testée sous la chaleur marocaine',
    excerpt:
      "Entre Casablanca et Marrakech, nous avons mesuré la consommation réelle du BYD Atto 3 à 38 °C. Résultats surprenants.",
    image: 'https://picsum.photos/seed/bydatto/1200/800',
    category: 'Électrique',
    categorySlug: 'electrique',
    publishedAt: '2024-03-20T09:00:00+01:00',
    readingTime: 7,
    author: 'Rédaction ChinaCarsMA',
    bodyHtml: `
<h2>Le défi marocain pour les véhicules électriques</h2>
<p>L'autoroute Casablanca-Marrakech est l'une des plus fréquentées du Maroc. Avec ses 240 km de distance et les températures qui peuvent dépasser 40 °C en été, elle représente un test de vérité pour tout véhicule électrique. Nous avons entrepris ce trajet à bord du <strong>BYD Atto 3</strong> (batterie 60,48 kWh, autonomie WLTP annoncée 420 km) en conditions estivales réelles.</p>
<p>Le BYD Atto 3 est l'un des SUV compacts électriques les plus vendus au Maroc depuis son lancement en 2023. Sa technologie de batterie Blade et son système de gestion thermique actif en font, sur le papier, l'un des mieux armés pour faire face à la chaleur.</p>

<blockquote><p>« La batterie Blade de BYD est intrinsèquement plus résistante à la chaleur que les batteries NMC classiques. Sa chimie LFP perd moins de capacité au-delà de 35 °C. » — Ingénieur BYD, Shanghai Motor Show 2023</p></blockquote>

<h2>Conditions du test</h2>
<ul>
  <li>Trajet : Casablanca (Ain Sebaâ) → Marrakech (centre-ville), 240 km</li>
  <li>Date : juillet 2024, départ à 13h00</li>
  <li>Température extérieure : 37 à 41 °C selon les points du trajet</li>
  <li>Climatisation : 21 °C, ventilation automatique</li>
  <li>Vitesse : 110-120 km/h sur autoroute, 50-80 km/h en agglomération</li>
  <li>Passagers : 2 adultes, 40 kg de bagages</li>
  <li>Charge de départ : 100 % (420 km affichés)</li>
</ul>

<figure>
  <img src="https://picsum.photos/seed/bydattotest/1200/700" alt="BYD Atto 3 sur l'autoroute Casablanca-Marrakech" />
  <figcaption>Le BYD Atto 3 à mi-chemin sur l'A7, par 39 °C. La batterie maintient une température de 28 °C grâce au refroidissement liquide actif.</figcaption>
</figure>

<h2>Les résultats, kilomètre par kilomètre</h2>
<p>À l'arrivée à Marrakech après 240 km, il restait <strong>142 km</strong> d'autonomie affichée. La consommation réelle a donc été de <strong>278 km</strong> d'autonomie pour 240 km parcourus, soit un ratio de 1,16. Autrement dit, la batterie Blade de l'Atto 3 ne perd que 16 % d'efficacité dans des conditions extrêmes de chaleur — un résultat exceptionnellement bon.</p>
<p>À titre de comparaison, d'autres SUV électriques testés dans des conditions similaires affichent des ratios de 1,25 à 1,35. La technologie LFP (Lithium Fer Phosphate) de BYD se montre nettement plus robuste à haute température que les chimies NMC utilisées par la concurrence.</p>

<h2>La recharge en route : un point à améliorer</h2>
<p>Si les performances de la batterie sont rassurantes, l'infrastructure de recharge sur cet axe reste perfectible. Nous avons localisé une borne de recharge rapide à Settat (115 km) et deux à Marrakech. La borne de Settat, opérée par l'ONEE, délivrait 50 kW — insuffisant pour une recharge rapide et efficace. En 20 minutes de pause, nous avons récupéré 45 km d'autonomie.</p>
<p>BYD Maroc travaille avec des partenaires pour déployer des bornes 120 kW sur cet axe d'ici fin 2024. En attendant, planifiez votre trajet avec une marge de sécurité de 50 km.</p>

<h2>Conclusion</h2>
<p>Le BYD Atto 3 passe le test marocain avec mention. Sa batterie Blade résiste remarquablement bien à la chaleur, et les 142 km de réserve à l'arrivée prouvent qu'un aller Casablanca-Marrakech est parfaitement réalisable sans recharge intermédiaire — à condition de respecter les 110 km/h. La principale limite reste l'infrastructure de recharge rapide sur cet axe, qui devrait s'améliorer significativement d'ici 2025.</p>
`,
  },
  {
    slug: 'mg4-electric-prix-maroc-2024',
    title: 'MG4 Electric : la compacte à 280 000 DH qui change la donne',
    excerpt:
      "Avec son prix d'entrée agressif et ses 350 km d'autonomie WLTP, la MG4 Electric est l'électrique accessible du moment.",
    image: 'https://picsum.photos/seed/mg4ev/1200/800',
    category: 'Électrique',
    categorySlug: 'electrique',
    publishedAt: '2024-03-15T09:00:00+01:00',
    readingTime: 6,
    bodyHtml: `
<h2>La démocratisation de l'électrique, enfin ?</h2>
<p>Depuis l'arrivée des premiers véhicules électriques au Maroc, la même critique revenait systématiquement : trop chers pour le grand public. La BYD Atto 3 à 350 000 DH, la Tesla Model 3 à plus de 500 000 DH — autant de voitures réservées à une clientèle aisée. Avec la <strong>MG4 Electric</strong> affichée à <strong>279 000 DH</strong> en version Standard et <strong>319 000 DH</strong> en version Luxury, SAIC Motor change enfin la donne.</p>
<p>Présentée comme la "Golf électrique" de MG, la MG4 partage sa plateforme MSP (Modular Scalable Platform) dédiée aux véhicules électriques avec le MG Cyberster. Une architecture moderne, optimisée dès la conception pour l'électrique, qui lui confère un centre de gravité bas et une dynamique de conduite saine.</p>

<blockquote><p>« À 280 000 DH, la MG4 Electric rend la transition vers l'électrique accessible pour la première fois à la classe moyenne marocaine. C'est un moment historique pour le marché. » — Directeur commercial MG Maroc, janvier 2024</p></blockquote>

<h2>Design : jeune et affirmé</h2>
<p>La MG4 Electric ne ressemble à aucune autre compacte sur le marché marocain. Ses lignes tendues, son hayon fuyant et ses boucliers sculptés lui donnent un profil athlétique qui tranche avec la sagesse des Peugeot e-208 ou Renault Zoe. L'empattement long de 2,70 m pour une longueur totale de 4,29 m crée un habitacle spacieux, avec notamment 520 mm de dégagement aux genoux aux places arrière.</p>

<figure>
  <img src="https://picsum.photos/seed/mg4evint/1200/700" alt="Intérieur MG4 Electric avec écran central 10,25 pouces" />
  <figcaption>L'habitacle de la MG4 Electric : simple, aéré, avec l'écran central de 10,25 pouces comme pièce maîtresse.</figcaption>
</figure>

<h2>Deux batteries, deux usages</h2>
<p>La MG4 Electric est déclinée en deux versions :</p>
<ul>
  <li><strong>Standard (51 kWh)</strong> : 170 ch, autonomie WLTP 350 km, recharge DC jusqu'à 87 kW — à partir de 279 000 DH</li>
  <li><strong>Luxury (64 kWh)</strong> : 204 ch, autonomie WLTP 435 km, recharge DC jusqu'à 135 kW — à partir de 319 000 DH</li>
</ul>
<p>Pour un usage urbain et périurbain, la version Standard couvre la grande majorité des besoins. La version Luxury se justifie pour les grands rouleurs ou les utilisateurs réalisant régulièrement des trajets intercités.</p>

<h2>À bord : fonctionnel et bien pensé</h2>
<p>L'habitacle de la MG4 est épuré avec intention. L'écran central de 10,25 pouces est réactif et dispose de la compatibilité Apple CarPlay et Android Auto sans fil. Les matériaux ne prétendent pas au luxe, mais l'assemblage est soigné et les commandes bien placées.</p>
<p>Le coffre offre 363 litres — dans la moyenne du segment. Un frunk (coffre avant) de 27 litres permet de ranger câbles et accessoires de recharge sans empiéter sur l'espace arrière.</p>

<h2>Notre verdict</h2>
<p>La MG4 Electric est exactement ce que le marché marocain attendait : une électrique bien finie, agréable à conduire, avec une autonomie honnête et un prix enfin accessible. Elle inaugure une nouvelle ère pour la mobilité électrique au Maroc. Son seul défaut ? Un réseau de recharge rapide encore insuffisant hors des grandes villes — un problème qui ne lui est pas propre mais qui conditionne l'expérience quotidienne.</p>
`,
  },
  {
    slug: 'recharge-voiture-electrique-maroc-bornes',
    title: 'Recharge VE au Maroc : état des bornes en 2024',
    excerpt:
      "Réseau ONEE, stations Totalenergies, bornes domicile : où en est l'infrastructure de recharge pour les électriques au Maroc ?",
    image: 'https://picsum.photos/seed/bornes/1200/800',
    category: 'Électrique',
    categorySlug: 'electrique',
    publishedAt: '2024-03-10T09:00:00+01:00',
    readingTime: 8,
    bodyHtml: `
<h2>La grande question qui freine l'adoption</h2>
<p>Avant d'acheter un véhicule électrique au Maroc, la question revient invariablement : « Mais où est-ce que je vais recharger ? » En 2024, la réponse est plus rassurante qu'il y a deux ans, même si le réseau reste inégalement réparti entre grandes villes et zones rurales. Voici un état des lieux complet et honnête.</p>

<h2>Le réseau ONEE : la colonne vertébrale</h2>
<p>L'Office National de l'Électricité et de l'Eau Potable (ONEE) est l'acteur principal du déploiement des bornes de recharge publiques. En 2024, le réseau ONEE compte environ <strong>280 points de charge</strong> répartis dans 45 villes, avec une concentration forte sur l'axe Casablanca-Rabat-Tanger et les grandes métropoles (Marrakech, Fès, Agadir).</p>
<p>Les bornes ONEE proposent principalement de la recharge <strong>AC 22 kW</strong> (standard), avec une quarantaine de bornes DC 50 kW sur les axes autoroutiers. La tarification est de 2,5 DH/kWh pour l'AC et 4 DH/kWh pour le DC — parmi les plus abordables d'Afrique du Nord.</p>

<blockquote><p>« Notre objectif est d'atteindre 1 000 points de charge publics d'ici 2026, avec au moins 200 bornes DC rapides sur les axes autoroutiers stratégiques. » — Direction ONEE, Plan Électromobilité 2024-2026</p></blockquote>

<figure>
  <img src="https://picsum.photos/seed/bornesmaroc/1200/700" alt="Borne de recharge rapide DC sur l'autoroute marocaine" />
  <figcaption>Une borne de recharge DC 50 kW de l'ONEE sur l'autoroute A1. Le déploiement de bornes 120 kW est prévu pour 2025.</figcaption>
</figure>

<h2>Les opérateurs privés</h2>
<p><strong>Totalenergies Maroc</strong> a déployé des bornes AC 22 kW dans une soixantaine de stations-service sur les grands axes. Si ces bornes sont pratiques pour une recharge d'appoint, leur puissance limitée les rend inadaptées à une recharge rapide.</p>
<p><strong>Shell Maroc</strong> a annoncé l'installation de 30 bornes DC 120 kW d'ici fin 2024, prioritairement sur l'autoroute A1 (Casablanca-Tanger) et l'A7 (Casablanca-Marrakech). Ces bornes, compatibles CCS2 et CHAdeMO, permettront de récupérer 200 km d'autonomie en 20 minutes.</p>
<p>Des opérateurs émergents comme <strong>Vert Maroc</strong> et <strong>EcoCharge</strong> proposent également des bornes dans les centres commerciaux et les hôtels des principales villes.</p>

<h2>La recharge à domicile : la solution la plus pratique</h2>
<p>Dans les faits, 80 % des charges des propriétaires de VE se font à domicile. Trois options existent :</p>
<ul>
  <li><strong>Prise domestique 220V (3,7 kW)</strong> : la plus simple, mais la plus lente — 12 à 16 heures pour une charge complète</li>
  <li><strong>Wallbox 7,4 kW</strong> : l'idéal pour la plupart des usages — charge complète en 6 à 9 heures. Coût d'installation : 5 000 à 12 000 DH selon le modèle</li>
  <li><strong>Wallbox 11 kW triphasé</strong> : pour les gros VE (BYD Seal, Tesla) — charge complète en 4 à 7 heures</li>
</ul>

<h2>Ce qui manque encore</h2>
<p>Le principal point faible du réseau marocain reste la fiabilité des bornes publiques. Les pannes fréquentes, le manque de maintenance préventive et l'absence d'un service client réactif constituent des freins réels à l'adoption des VE par des profils plus prudents.</p>
<p>L'autre lacune majeure est l'absence de bornes haute puissance (150 kW et plus) qui permettraient des temps de charge inférieurs à 20 minutes — comparables à un arrêt à une station-service classique. Ces bornes sont en cours de déploiement mais ne seront pas généralisées avant 2025-2026.</p>

<h2>Notre recommandation</h2>
<p>Si vous habitez Casablanca, Rabat, Marrakech ou Tanger, et que vous disposez d'un parking privé pour installer une Wallbox, les conditions pour passer à l'électrique sont réunies en 2024. Pour les autres, attendez encore 12 à 18 mois que le réseau public se densifie avant de faire le saut.</p>
`,
  },
  {
    slug: 'voiture-chinoise-maroc-fiscalite-taxes',
    title: 'Fiscalité des voitures chinoises au Maroc : ce qui change en 2024',
    excerpt:
      "Droits de douane, TVA, vignette : le point complet sur les taxes applicables aux véhicules importés de Chine.",
    image: 'https://picsum.photos/seed/fiscalite/1200/800',
    category: 'Maroc',
    categorySlug: 'maroc',
    publishedAt: '2024-03-05T09:00:00+01:00',
    readingTime: 9,
    bodyHtml: `
<h2>Un cadre fiscal en évolution rapide</h2>
<p>L'essor des marques chinoises sur le marché marocain s'est accompagné d'ajustements réguliers du cadre fiscal. La Loi de Finances 2024 a introduit plusieurs modifications qui impactent directement le prix final des véhicules importés de Chine — en bien et en mal selon les cas. Décryptage complet.</p>

<h2>Les droits de douane : 17,5 % en vigueur</h2>
<p>Les véhicules automobiles importés hors Union Européenne et hors pays signataires d'un accord de libre-échange avec le Maroc sont soumis à un droit de douane de <strong>17,5 %</strong> calculé sur la valeur CAF (Coût + Assurance + Fret). La Chine ne bénéficiant pas d'accord préférentiel avec le Maroc, tous les véhicules chinois sont soumis à ce taux.</p>
<p>À noter : les discussions pour un accord commercial maroco-chinois progressent, et certains analystes anticipent une réduction de ces droits à horizon 2026-2027.</p>

<blockquote><p>« Les droits de douane à 17,5 % représentent entre 40 000 et 80 000 DH par véhicule selon sa valeur. C'est significatif, mais les constructeurs chinois ont largement absorbé cette taxe dans leur marge pour rester compétitifs. » — Économiste CGEM, 2024</p></blockquote>

<figure>
  <img src="https://picsum.photos/seed/douaneport/1200/700" alt="Port de Casablanca : débarquement de véhicules importés" />
  <figcaption>Le port de Casablanca traite plus de 60 000 véhicules importés par an. Les chinoises représentent désormais 12 % du total.</figcaption>
</figure>

<h2>La TVA : 20 % sur les véhicules thermiques</h2>
<p>La TVA automobile au Maroc est de <strong>20 %</strong> et s'applique sur la base : valeur CAF + droits de douane + taxe parafiscale. Elle est incluse dans le prix TTC affiché en concession. Pour les véhicules électriques, le taux de TVA est identique — contrairement à certains pays européens qui ont réduit la TVA sur les VE.</p>

<h2>La taxe spéciale annuelle (vignette) : avantage VE</h2>
<p>La vignette est calculée sur la puissance fiscale du véhicule. Le barème 2024 est le suivant :</p>
<ul>
  <li>Jusqu'à 8 CV fiscaux : 350 DH/an</li>
  <li>9 à 10 CV fiscaux : 650 DH/an</li>
  <li>11 à 14 CV fiscaux : 2 000 DH/an</li>
  <li>15 CV fiscaux et plus : 4 000 DH/an</li>
</ul>
<p>Les véhicules électriques bénéficient d'une <strong>réduction de 50 %</strong> sur la vignette. Ainsi, une BYD Atto 3 classée à 10 CV fiscaux paiera 325 DH/an au lieu de 650 DH — un avantage modeste mais réel.</p>

<h2>La nouvelle taxe sur la pollution (2024)</h2>
<p>La Loi de Finances 2024 a introduit une taxe sur les émissions de CO₂ pour les véhicules émettant plus de 150 g/km. Concrètement :</p>
<ul>
  <li>150-180 g/km : 5 000 DH/an</li>
  <li>180-220 g/km : 10 000 DH/an</li>
  <li>Plus de 220 g/km : 20 000 DH/an</li>
</ul>
<p>Les véhicules électriques et hybrides rechargeables (PHEV avec moins de 50 g/km en mode combiné) sont exonérés de cette taxe. C'est un avantage annuel significatif pour les propriétaires de BYD, MG Electric ou Geely électriques.</p>

<h2>Exemple de calcul complet</h2>
<p>Pour un BYD Atto 3 (prix FOB Chine : 180 000 DH, fret : 10 000 DH) :</p>
<ul>
  <li>Valeur CAF : 190 000 DH</li>
  <li>Droits de douane 17,5 % : 33 250 DH</li>
  <li>Taxe parafiscale 0,25 % : 475 DH</li>
  <li>Base TVA : 223 725 DH</li>
  <li>TVA 20 % : 44 745 DH</li>
  <li><strong>Prix hors marge importateur : 268 470 DH</strong></li>
</ul>
<p>On comprend mieux pourquoi le prix concessionnaire officiel de 350 000 DH intègre une marge commerciale raisonnable après toutes ces charges.</p>
`,
  },
  {
    slug: 'concessionnaires-voitures-chinoises-maroc',
    title: 'Où acheter sa voiture chinoise au Maroc ? Le guide des concessionnaires',
    excerpt:
      "BYD Casablanca, MG Maroc, Chery Morocco : tour d'horizon des réseaux officiels et de leurs services après-vente.",
    image: 'https://picsum.photos/seed/concession/1200/800',
    category: 'Maroc',
    categorySlug: 'maroc',
    publishedAt: '2024-02-28T09:00:00+01:00',
    readingTime: 7,
    bodyHtml: `
<h2>L'importance du réseau officiel</h2>
<p>Acheter une voiture chinoise chez un concessionnaire agréé versus un importateur parallèle, ce n'est pas la même chose. Le réseau officiel garantit : une garantie constructeur valable et honorée, des pièces détachées d'origine, des mises à jour logicielles officielles et un service après-vente formé par le constructeur. Dans un marché encore jeune, ces garanties valent de l'or.</p>

<h2>BYD Maroc</h2>
<p>BYD Maroc, dont la distribution est assurée par <strong>CFAO Motors</strong> (groupe CFAO, filiale de Toyota Tsusho), est l'un des réseaux les plus structurés parmi les marques chinoises. CFAO dispose d'une longue expérience de distribution automobile en Afrique, ce qui se ressent dans la qualité de l'accueil et du service.</p>
<ul>
  <li><strong>Casablanca</strong> : showroom principal Boulevard Zerktouni, espace de 2 000 m², 8 véhicules en exposition</li>
  <li><strong>Rabat</strong> : agence Avenue Mohammed VI, ouverture 2023</li>
  <li><strong>Marrakech</strong> : agence Guéliz, ouverture prévue T2 2024</li>
</ul>

<blockquote><p>« Notre objectif est de couvrir 12 villes marocaines d'ici 2025. Le marché est là, la demande est réelle. » — Directeur général BYD Maroc, Autoexpo Casablanca 2024</p></blockquote>

<figure>
  <img src="https://picsum.photos/seed/showroomcasa/1200/700" alt="Showroom BYD à Casablanca avec les modèles Atto 3 et Seal" />
  <figcaption>Le showroom BYD Boulevard Zerktouni à Casablanca : les modèles Atto 3, Han et Seal sont exposés en permanence.</figcaption>
</figure>

<h2>MG Maroc</h2>
<p>MG Maroc, géré par <strong>Smeia</strong> (filiale du groupe Auto Nejma), bénéficie du réseau de distribution le plus dense parmi les marques chinoises. Sa présence historique en tant que distributeur d'autres marques lui a permis de construire une infrastructure solide rapidement.</p>
<ul>
  <li><strong>Casablanca</strong> : 3 points de vente (Mers Sultan, Ain Sebaâ, Bouskoura)</li>
  <li><strong>Rabat</strong> : 2 points de vente (Agdal, Témara)</li>
  <li><strong>Marrakech, Fès, Agadir, Tanger</strong> : 1 point de vente chacun</li>
  <li><strong>Meknès, Oujda</strong> : agents agréés</li>
</ul>

<h2>Chery Morocco</h2>
<p>Chery est distribué par <strong>Auto Nejma</strong> (groupe Ynna). Le réseau est en développement rapide depuis le succès du Tiggo 4 Pro et du Tiggo 8 Pro. Les délais de livraison sont de 4 à 8 semaines selon les modèles.</p>
<ul>
  <li><strong>Casablanca</strong> : showroom principal Route de Médiouna</li>
  <li><strong>Rabat, Tanger, Fès, Marrakech</strong> : points de vente agréés</li>
</ul>

<h2>GWM (Haval) Maroc</h2>
<p>Great Wall Motor est représenté par <strong>Mutandis</strong> pour la gamme Haval. La présence reste concentrée sur Casablanca et Rabat, avec une extension prévue vers Marrakech et Tanger courant 2024.</p>

<h2>Ce qu'il faut exiger de votre concessionnaire</h2>
<ul>
  <li>Carnet de garantie en français avec tampons et signatures</li>
  <li>Accès aux mises à jour logicielles OTA (Over The Air) gratuites</li>
  <li>Engagement écrit sur les délais de disponibilité des pièces (48h pour pièces courantes)</li>
  <li>Techniciens certifiés par le constructeur — demandez à voir les attestations</li>
  <li>Véhicule de prêt pendant les opérations de maintenance longues</li>
</ul>
`,
  },
  {
    slug: 'marche-automobile-maroc-voitures-chinoises-2024',
    title: 'Le marché auto marocain en 2024 : les chinoises gagnent du terrain',
    excerpt:
      "Analyse des immatriculations : BYD et MG progressent de 40 % en un an. La part des marques chinoises dépasse désormais 8 % du marché.",
    image: 'https://picsum.photos/seed/marche/1200/800',
    category: 'Maroc',
    categorySlug: 'maroc',
    publishedAt: '2024-02-20T09:00:00+01:00',
    readingTime: 5,
    bodyHtml: `
<h2>Les chiffres qui changent tout</h2>
<p>L'Association des Importateurs de Véhicules au Maroc (AIVAM) a publié ses statistiques pour l'année 2023 et les deux premiers mois de 2024. Le verdict est sans appel : les marques chinoises ont représenté <strong>8,3 % des immatriculations neuves</strong> au Maroc en 2023, contre 4,9 % en 2022. Une progression de plus de 69 % en volume en seulement deux ans.</p>
<p>Pour contextualiser : le marché automobile marocain représente environ 160 000 véhicules neufs par an. Les marques chinoises ont donc immatriculé près de 13 000 véhicules en 2023 — plus que Ford, Volkswagen ou Toyota individuellement.</p>

<blockquote><p>« Ce n'est plus une tendance, c'est une transformation structurelle du marché. Les consommateurs marocains ont franchi le cap de la méfiance envers les marques chinoises. » — Analyste AIVAM, février 2024</p></blockquote>

<h2>Le podium des marques chinoises</h2>
<p>Sans surprise, le trio de tête est stable :</p>
<ul>
  <li><strong>MG Motor</strong> : 5 200 immatriculations en 2023 (+38 % vs 2022). Le MG ZS reste le modèle le plus vendu, devant le MG5 et le MG4 Electric</li>
  <li><strong>Chery</strong> : 4 100 immatriculations (+52 %). Le Tiggo 4 Pro tire la croissance, suivi du Tiggo 8 Pro</li>
  <li><strong>BYD</strong> : 2 800 immatriculations (+87 %). Arrivée récente, croissance explosive. L'Atto 3 est le modèle phare</li>
</ul>

<figure>
  <img src="https://picsum.photos/seed/marchegraph/1200/700" alt="Graphique parts de marché voitures chinoises Maroc 2021-2024" />
  <figcaption>Évolution de la part des marques chinoises dans les immatriculations neuves au Maroc entre 2021 et 2024.</figcaption>
</figure>

<h2>Qui achète des voitures chinoises au Maroc ?</h2>
<p>L'étude de profil des acheteurs révèle une clientèle plus jeune que la moyenne du marché (35-50 ans vs 42-55 ans), plus urbaine (80 % dans les 5 grandes villes) et plus connectée. Le bouche-à-oreille numérique — groupes WhatsApp de propriétaires, forums Facebook, vidéos YouTube — joue un rôle majeur dans les décisions d'achat.</p>
<p>Les acheteurs ciblent principalement le rapport équipement/prix : pour le même budget, une voiture chinoise propose systématiquement plus d'équipements technologiques qu'une européenne ou une japonaise équivalente.</p>

<h2>Les perspectives 2024-2025</h2>
<p>Plusieurs signaux indiquent que la progression va se poursuivre :</p>
<ul>
  <li>Arrivée de nouveaux modèles BYD (Dolphin, Seal) en 2024</li>
  <li>Extension des réseaux de concessions MG et Chery hors des grandes villes</li>
  <li>Premières offres de crédit-bail (LOA) sur les VE chinois</li>
  <li>Possible réduction des droits de douane dans le cadre des discussions maroco-chinoises</li>
</ul>
<p>Les analystes de l'AIVAM projettent une part de marché des marques chinoises entre <strong>11 et 14 %</strong> d'ici fin 2025. Si ces projections se confirment, le Maroc deviendra le premier marché africain par pénétration des marques automobiles chinoises — devant l'Égypte et l'Afrique du Sud.</p>
`,
  },
];

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
