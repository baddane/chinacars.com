const WANDALOO_BASE = 'https://www.wandaloo.com/files/Voiture-Neuve/';

// Ordered most-specific first so the first match wins
const MODEL_IMAGE_MAP: [string, string][] = [
  // BYD
  ['byd-seal-u', 'byd-seal-u-phev.jpg'],
  ['byd-seal-5', 'byd-seal-5-phev.jpg'],
  ['byd-sealion', 'byd-sealion-7.jpg'],
  ['byd-atto-2', 'byd-atto-2-phev.jpg'],
  ['byd-atto-3', 'byd-atto-3.jpg'],
  ['byd-seagull', 'byd-seagull.jpg'],
  ['byd-tang', 'byd-tang.jpg'],
  ['byd-han', 'byd-han.jpg'],
  ['byd-seal', 'byd-seal.jpg'],
  ['byd', 'byd-seal.jpg'],
  // MG
  ['mg-marvel', 'mg-marvel-r.jpg'],
  ['mg-zs-ev', 'mg-zs-ev.jpg'],
  ['mg-zs', 'mg-zs-hev.jpg'],
  ['mg-hs-hev', 'mg-hs-hev.jpg'],
  ['mg-hs', 'mg-hs.jpg'],
  ['mg-mg5', 'mg-mg-5.jpg'],
  ['mg-5', 'mg-mg-5.jpg'],
  ['mg-mg3', 'mg-mg3.jpg'],
  ['mg', 'mg-zs-ev.jpg'],
  // Chery / Omoda / Jaecoo (shared group)
  ['chery-arrizo', 'chery-arrizo-6.jpg'],
  ['chery-tiggo-8', 'chery-tiggo-8-pro-phev.jpg'],
  ['chery-tiggo-7', 'chery-tiggo-7-pro-phev.jpg'],
  ['chery-tiggo-4-cross', 'chery-tiggo-4-cross-hev.jpg'],
  ['chery-tiggo-4', 'chery-tiggo-4-pro.jpg'],
  ['chery-tiggo-3', 'chery-tiggo-3-x.jpg'],
  ['chery-tiggo-2', 'chery-tiggo-2-pro.jpg'],
  ['chery', 'chery-tiggo-4-pro.jpg'],
  ['omoda-e5', 'omoda-e5.jpg'],
  ['omoda-c5', 'omoda-c5-.jpg'],
  ['omoda-5', 'omoda-5-shs-h.jpg'],
  ['omoda-3', 'omoda--3-.jpg'],
  ['omoda', 'omoda-c5-.jpg'],
  ['jaecoo-j7-phev', 'jaecoo-j7-phev.jpg'],
  ['jaecoo-j7', 'jaecoo-j7.jpg'],
  ['jaecoo', 'jaecoo-j7.jpg'],
  // Geely
  ['geely-riddara', 'geely-riddara-rd6-phev.jpg'],
  ['geely-ex5', 'geely-ex5-phev.jpg'],
  ['geely-geometry', 'geely-geometry-c.jpg'],
  ['geely-cityray', 'geely-cityray.jpg'],
  ['geely-coolray', 'geely-coolray.jpg'],
  ['geely-emgrand', 'geely-emgrand.jpg'],
  ['geely-gx3', 'geely-gx3-pro.jpg'],
  ['geely', 'geely-coolray.jpg'],
  // GWM / Haval
  ['gwm-tank', 'gwm-tank-300.jpg'],
  ['gwm-wey', 'gwm-wey-05.jpg'],
  ['gwm-poer', 'gwm-poer-dc.jpg'],
  ['gwm-ora', 'gwm-ora-03.jpg'],
  ['ora-03', 'gwm-ora-03.jpg'],
  ['haval-h6-phev', 'gwm-haval-h6-phev.jpg'],
  ['haval-jolion-pro', 'gwm-haval-jolion-pro.jpg'],
  ['haval-jolion', 'gwm-haval-jolion.jpg'],
  ['haval-h7', 'gwm-haval-h7.jpg'],
  ['haval-h6', 'gwm-haval-h6.jpg'],
  ['haval', 'gwm-haval-jolion.jpg'],
  ['tank-300', 'gwm-tank-300.jpg'],
  ['gwm', 'gwm-haval-jolion.jpg'],
  // XPeng
  ['xpeng-g9', 'xpeng-g9.jpg'],
  ['xpeng-g6', 'xpeng-g6.jpg'],
  ['xpeng', 'xpeng-g6.jpg'],
  // Zeekr
  ['zeekr-7x', 'zeekr-7x.jpg'],
  ['zeekr-001', 'zeekr-001.jpg'],
  ['zeekr-x', 'zeekr-x.jpg'],
  ['zeekr', 'zeekr-x.jpg'],
  // Changan
  ['changan-uni-k', 'changan-uni-k.jpg'],
  ['changan-cs55', 'changan-cs55-.jpg'],
  ['changan-cs35', 'changan-cs35-.jpg'],
  ['changan-alsvin', 'changan-alsvin.jpg'],
  ['changan', 'changan-cs55-.jpg'],
  // Soueast
  ['soueast-s09', 'soueast-s09.jpg'],
  ['soueast-s07', 'soueast-s07.jpg'],
  ['soueast-s06-dm', 'soueast-s06-dm.jpg'],
  ['soueast-s06', 'soueast-s06-ice.jpg'],
  ['soueast-s05', 'soueast-s05-ice.jpg'],
  ['soueast', 'soueast-s07.jpg'],
  // DFSK
  ['dfsk-e5', 'dfsk-e5-.jpg'],
  ['dfsk-glory', 'dfsk-glory-500.jpg'],
  ['dfsk', 'dfsk-glory-500.jpg'],
  // Dongfeng
  ['dongfeng-shine-max', 'dongfeng-shine-max.jpg'],
  ['dongfeng-shine', 'dongfeng-shine.jpg'],
  ['dongfeng-mage', 'dongfeng-mage.jpg'],
  ['dongfeng-huge', 'dongfeng-huge.jpg'],
  ['dongfeng-box', 'dongfeng-box.jpg'],
  ['dongfeng', 'dongfeng-box.jpg'],
  // Brands not on wandaloo → closest visual/segment equivalent
  // Xiaomi (tech performance sedan) → Zeekr 7X (same segment, same tech-forward positioning)
  ['xiaomi', 'zeekr-7x.jpg'],
  // NIO (Chinese premium EV) → Zeekr 001 (same premium segment)
  ['nio', 'zeekr-001.jpg'],
  // Leapmotor (compact/affordable EV) → Omoda E5 (same compact EV segment)
  ['leapmotor', 'omoda-e5.jpg'],
  // Lynk & Co (Geely sub-brand) → Geely Coolray
  ['lynk', 'geely-coolray.jpg'],
  // Avatr (futuristic luxury EV by Chery+Huawei) → Zeekr 7X
  ['avatr', 'zeekr-7x.jpg'],
  // HiPhi (ultra-premium design EV) → Zeekr 7X
  ['hiphi', 'zeekr-7x.jpg'],
  // Hongqi (state luxury brand) → Zeekr 001 (premium sedan)
  ['hongqi', 'zeekr-001.jpg'],
  // Voyah (Dongfeng luxury SUV) → Dongfeng Mage (same group)
  ['voyah', 'dongfeng-mage.jpg'],
  // Seres (Huawei-partnered SUV brand) → GWM WEY 05 (same PHEV SUV segment)
  ['seres', 'gwm-wey-05.jpg'],
  // Maxus (pickup/LCV by SAIC) → GWM Poer (same pickup segment)
  ['maxus', 'gwm-poer-dc.jpg'],
];

/**
 * Correspondance explicite slug d'article → photo wandaloo la plus
 * pertinente. Pour les comparatifs, on privilégie le modèle chinois mis en
 * avant ; pour les sujets génériques, un modèle représentatif du thème.
 * Les modèles absents de wandaloo (Xiaomi, NIO, Leapmotor, Avatr, HiPhi,
 * Hongqi, Voyah, Seres, Maxus, MG4/Cyberster…) utilisent l'équivalent
 * visuel/segment le plus proche.
 */
const ARTICLE_IMAGE_OVERRIDES: Record<string, string> = {
  // --- Articles d'origine ---
  'mg-zs-hybrid-plus-perte-de-puissance-cause-solution': 'mg-zs-hev.jpg',
  'byd-seal-prix-maroc-2024': 'byd-seal.jpg',
  'mg-cyberster-roadster-electrique': 'mg-marvel-r.jpg',
  'importer-voiture-chinoise-maroc-2024': 'byd-atto-3.jpg',
  'chery-tiggo-8-pro-suv-7-places': 'chery-tiggo-8-pro-phev.jpg',
  'geely-geometry-c-autonomie-autoroute-casa-rabat': 'geely-geometry-c.jpg',
  'voiture-chinoise-occasion-fiabilite': 'mg-zs-ev.jpg',

  // --- Lot A : comparatifs chinois ---
  'byd-seal-vs-xiaomi-su7-ultra-2026': 'byd-seal.jpg',
  'mg4-vs-byd-dolphin-compactes-electriques': 'mg-mg3.jpg',
  'zeekr-001-vs-nio-et7-luxe-technologique-chinois': 'zeekr-001.jpg',
  'omoda-5-vs-mg-zs-hybrid-suv-urbains-abordables': 'omoda-5-shs-h.jpg',
  'leapmotor-t03-vs-byd-seagull-micro-citadines': 'byd-seagull.jpg',
  'xpeng-g6-vs-byd-atto-3-evo-autonomie-reelle': 'xpeng-g6.jpg',
  'jaecoo-7-vs-chery-tiggo-8-pro-suv-familial-chery': 'jaecoo-j7.jpg',
  'mg-cyberster-vs-byd-seal-06-gt-plaisir-conduite': 'mg-marvel-r.jpg',
  'nio-el6-vs-xpeng-g9-grands-suv-electriques-premium': 'xpeng-g9.jpg',
  'gwm-ora-03-vs-mg3-hybrid-design-retro-efficacite': 'gwm-ora-03.jpg',
  'zeekr-x-vs-volvo-ex30-cousins-chinois': 'zeekr-x.jpg',
  'avatr-11-vs-hiphi-z-design-chinois-futuriste': 'zeekr-7x.jpg',
  'byd-shark-vs-maxus-t90-ev-pickup-chinois-pros': 'gwm-poer-dc.jpg',
  'lynk-co-01-vs-mg-ehs-hybride-rechargeable-partage': 'mg-hs-hev.jpg',
  'hongqi-e-hs9-vs-nio-el7-luxe-presidentiel-technologie': 'zeekr-7x.jpg',
  'byd-tang-2026-vs-mg-s9-suv-7-places': 'byd-tang.jpg',
  'xiaomi-su7-vs-xpeng-p7i-interface-logicielle': 'zeekr-7x.jpg',
  'leapmotor-c11-vs-byd-seal-u-suv-familial-prix': 'byd-seal-u-phev.jpg',
  'seres-5-vs-voyah-free-outsiders-chinois': 'gwm-wey-05.jpg',
  'mg5-vs-byd-han-break-vs-berline': 'mg-mg-5.jpg',

  // --- Lot B : défis aux européennes ---
  'xiaomi-su7-vs-porsche-taycan-eleve-depasse-maitre': 'zeekr-7x.jpg',
  'mg-zs-hybrid-vs-dacia-duster-hybrid-low-cost': 'mg-zs-hev.jpg',
  'byd-atto-3-evo-vs-renault-scenic-e-tech-suv-annee': 'byd-atto-3.jpg',
  'zeekr-001-vs-tesla-model-s-silicon-valley-tremble-2026': 'zeekr-001.jpg',
  'omoda-5-shs-h-vs-toyota-yaris-cross-hybride': 'omoda-5-shs-h.jpg',
  'mg3-hybrid-vs-renault-clio-e-tech-hegemonie-francaise': 'mg-mg3.jpg',
  'byd-seal-vs-tesla-model-3-highland-berline-ultime-2026': 'byd-seal.jpg',
  'jaecoo-5-vs-volkswagen-tiguan-menace-chinoise': 'jaecoo-j7.jpg',
  'nio-et5-vs-bmw-i4-alternative-premium-chinoise': 'zeekr-001.jpg',
  'xpeng-g6-vs-tesla-model-y-recharge-rapide': 'xpeng-g6.jpg',
  'mg4-xpower-vs-volkswagen-id3-gtx-compactes-sportives': 'mg-mg3.jpg',
  'leapmotor-t03-vs-dacia-spring-electrique-15000': 'byd-seagull.jpg',
  'byd-han-vs-mercedes-eqe-luxe-chinois-confort-allemand': 'byd-han.jpg',
  'omoda-e5-vs-hyundai-kona-electric-design-futuriste': 'omoda-e5.jpg',
  'gwm-wey-05-vs-volvo-xc60-recharge-phev-autonomie': 'gwm-wey-05.jpg',
  'mg-zs-ev-vs-peugeot-e2008-suv-urbain-electrique': 'mg-zs-ev.jpg',
  'byd-seagull-vs-citroen-ec3-guerre-petites-electriques': 'byd-seagull.jpg',
  'zeekr-x-vs-audi-q4-etron-style-sobriete': 'zeekr-x.jpg',
  'lynk-co-02-vs-renault-megane-e-tech-crossover-compacte': 'geely-coolray.jpg',
  'hongqi-l5-vs-rolls-royce-ghost-ultra-luxe-chinois': 'zeekr-001.jpg',

  // --- Lot C : technologie ---
  'batterie-byd-blade-vs-tesla-4680-durabilite': 'byd-seal.jpg',
  'nio-echange-batterie-vs-tesla-superchargeur-voyage': 'zeekr-001.jpg',
  'lidar-xpeng-vs-vision-tesla-conduite-autonome-france': 'xpeng-g6.jpg',
  'omoda-shs-h-hybride-comment-ca-marche': 'omoda-5-shs-h.jpg',
  'mg3-hybrid-moteur-electrique-plus-puissant-concurrents': 'mg-mg3.jpg',
  'hyperos-xiaomi-voiture-integration-smartphone': 'zeekr-7x.jpg',
  'charge-800v-zeekr-xpeng-humilient-constructeurs-historiques': 'xpeng-g6.jpg',
  'v2l-vehicle-to-load-byd-alimenter-maison': 'byd-atto-3.jpg',
  'batteries-solid-state-nio-1000-km-2026': 'zeekr-001.jpg',
  'moteurs-roue-xiaomi-revolution-technologique': 'zeekr-7x.jpg',

  // --- Lot C : budget & achat ---
  'decote-voitures-chinoises-risque-mg-byd-2026': 'byd-seal.jpg',
  'garantie-7-ans-10-ans-constructeurs-chinois-comparatif': 'mg-zs-ev.jpg',
  'bonus-ecologique-2026-voitures-chinoises-eligibles': 'byd-seagull.jpg',
  'location-vs-achat-lynk-co-nouvelle-consommation': 'geely-coolray.jpg',
  'entretien-voiture-chinoise-france-reseaux-sav': 'mg-zs-ev.jpg',
  'prix-pieces-detachees-mg-vs-renault-apres-vente': 'mg-hs-hev.jpg',
  'leasing-loa-lld-meilleures-offres-marques-chinoises': 'geely-emgrand.jpg',
  'assurance-auto-marques-chinoises-assureurs-francais': 'byd-atto-3.jpg',
  'mandataires-vs-concessions-acheter-byd-meilleur-prix': 'byd-seal.jpg',
  'fiabilite-long-terme-mg4-2023-premiers-retours': 'mg-mg3.jpg',

  // --- Lot C : sélections & top 10 ---
  'top-10-voitures-chinoises-meilleure-autonomie-2026': 'zeekr-001.jpg',
  'suv-chinois-famille-3-enfants-quel-choisir': 'byd-tang.jpg',
  '5-meilleures-citadines-chinoises-ville': 'byd-seagull.jpg',
  'top-7-voitures-chinoises-plus-sures-ncap-2026': 'zeekr-x.jpg',
  'voitures-chinoises-meilleur-infodivertissement-2026': 'zeekr-7x.jpg',
  'top-5-electriques-chinoises-moins-30000-euros': 'mg-mg3.jpg',
  'suv-chinois-confortables-longs-trajets-autoroute': 'xpeng-g9.jpg',
  '3-voitures-chinoises-pour-oublier-tesla-2026': 'byd-seal.jpg',
  'voitures-chinoises-plus-attendues-fin-2026': 'xpeng-g6.jpg',
  'classement-marques-chinoises-fiabilite-2026': 'mg-zs-ev.jpg',

  // --- Lot C : motorisations ---
  'mg3-hybrid-vs-mg4-electric-hybride-ou-electrique': 'mg-mg3.jpg',
  'byd-seal-u-phev-vs-byd-seal-u-ev-hybride-rechargeable': 'byd-seal-u-phev.jpg',
  'omoda-5-thermique-vs-omoda-5-ev-duel-interne': 'omoda-e5.jpg',
  'hybride-vs-phev-comparatif-mg-byd': 'mg-hs-hev.jpg',
  'moteurs-thermiques-chinois-retour-en-force-europe': 'chery-tiggo-4-pro.jpg',

  // --- Lot C : marques ---
  'guide-achat-byd-2026-quel-modele-quel-profil': 'byd-seal.jpg',
  'mg-motor-heritage-anglais-domination-chinoise': 'mg-zs-ev.jpg',
  'zeekr-france-prix-modeles-reseau-2026': 'zeekr-001.jpg',
  'omoda-jaecoo-nouveau-geant-marche-automobile': 'omoda-5-shs-h.jpg',
  'xiaomi-auto-peut-on-acheter-voiture-fabricant-telephones': 'zeekr-7x.jpg',
  'nio-battery-as-a-service-louer-ou-acheter-batterie': 'zeekr-001.jpg',
  'xpeng-marque-intelligence-artificielle-automobile': 'xpeng-g6.jpg',
  'leapmotor-alliance-stellantis-sav-europe': 'omoda-e5.jpg',
  'gwm-ora-citadines-electriques-design-audacieux': 'gwm-ora-03.jpg',
  'lynk-co-abonnement-ne-pas-acheter-voiture': 'geely-coolray.jpg',

  // --- Lot C : essais ---
  '1000-km-mg4-consommation-reelle-autoroute': 'mg-mg3.jpg',
  'byd-atto-3-quotidien-5-details-qui-changent-tout': 'byd-atto-3.jpg',
  'xiaomi-su7-conditions-hivernales-batterie-promesses': 'zeekr-7x.jpg',
  'chery-tiggo-8-voyage-famille-test-habitabilite': 'chery-tiggo-8-pro-phev.jpg',
  'navigation-byd-vs-google-maps-fiabilite': 'byd-seal.jpg',

  // --- Lot C : analyses ---
  'pourquoi-voitures-chinoises-moins-cheres-durable': 'byd-seal.jpg',
  'taxes-europeennes-impact-prix-voitures-chinoises-2026': 'byd-atto-3.jpg',
  'design-chinois-identite-visuelle-marques-auto': 'zeekr-7x.jpg',
  'marques-chinoises-production-europe-hongrie-espagne': 'geely-coolray.jpg',
  'securite-voitures-chinoises-niveau-europeen-2026': 'zeekr-x.jpg',
  'arrivee-xiaomi-tournant-historique-industrie-automobile': 'zeekr-7x.jpg',
  'mg-motor-marque-preferee-jeunes-conducteurs': 'mg-mg3.jpg',
  'byd-vs-volkswagen-bataille-numero-1-mondial': 'byd-seal.jpg',
  'voitures-chinoises-occasion-marche-en-expansion': 'mg-zs-ev.jpg',
  '2026-chine-conquete-coeur-europeens': 'zeekr-001.jpg',
};

/**
 * Pool de repli 100 % sur-thème : de vraies photos de voitures chinoises
 * (wandaloo.com), utilisé pour les articles génériques (guides, sélections,
 * analyses) qui ne citent pas un modèle précis dans leur slug. Choisi de
 * façon déterministe par slug pour garantir de la variété.
 */
const THEME_FALLBACK_IMAGES = [
  'byd-seal.jpg',
  'byd-atto-3.jpg',
  'byd-tang.jpg',
  'mg-zs-ev.jpg',
  'mg-mg3.jpg',
  'zeekr-001.jpg',
  'zeekr-x.jpg',
  'zeekr-7x.jpg',
  'xpeng-g6.jpg',
  'xpeng-g9.jpg',
  'omoda-5-shs-h.jpg',
  'omoda-e5.jpg',
  'chery-tiggo-8-pro-phev.jpg',
  'geely-coolray.jpg',
  'gwm-ora-03.jpg',
  'gwm-wey-05.jpg',
  'jaecoo-j7.jpg',
];

function slugToLock(slug: string): number {
  return Math.abs(slug.split('').reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 0)) % 10000;
}

function findWandaloo(slug: string): string | null {
  for (const [keyword, filename] of MODEL_IMAGE_MAP) {
    if (slug.includes(keyword)) return WANDALOO_BASE + filename;
  }
  return null;
}

/**
 * Résout la meilleure image pour un article :
 * 1. Vraie URL (CMS ou photo wandaloo déjà renseignée) → conservée
 * 2. Image placeholder (loremflickr / picsum, hors-thème) → remplacée :
 *    a. par la photo wandaloo du modèle si le slug matche une marque/modèle
 *    b. sinon par une photo de voiture chinoise du pool sur-thème
 */
export function resolveArticleImage(
  image: string,
  slug: string,
  _categorySlug?: string,
): string {
  // 1. Image la plus pertinente choisie explicitement pour cet article
  const override = ARTICLE_IMAGE_OVERRIDES[slug];
  if (override) return WANDALOO_BASE + override;

  // 2. Vraie URL déjà renseignée (CMS ou photo wandaloo) → conservée
  const isPlaceholder =
    image.includes('loremflickr.com') || image.includes('picsum.photos');
  if (!isPlaceholder) return image;

  // 3. Repli : modèle déduit du slug, sinon photo chinoise du pool sur-thème
  const wandaloo = findWandaloo(slug);
  if (wandaloo) return wandaloo;

  const idx = slugToLock(slug) % THEME_FALLBACK_IMAGES.length;
  return WANDALOO_BASE + THEME_FALLBACK_IMAGES[idx];
}
