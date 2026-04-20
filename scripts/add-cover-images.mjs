#!/usr/bin/env node
/**
 * add-cover-images.mjs
 * Fetches Wikipedia thumbnail URLs and injects coverImage into each article's frontmatter.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const ARTICLES_DIR = '/home/user/chinacars.com/content/articles';

// Map: article slug → { wiki: Wikipedia article name, alt: alt text }
const ARTICLE_MAP = {
  // --- Section 1 : Duels Chinois-Chinois ---
  'byd-seal-vs-tesla-model-3-highland-berline-ultime-2026':
    { wiki: 'BYD Seal', alt: 'BYD Seal 2026 – berline électrique' },
  'byd-seal-vs-xiaomi-su7-ultra-berline-electrique-rapide-2026':
    { wiki: 'BYD Seal', alt: 'BYD Seal face à la Xiaomi SU7 Ultra' },
  'zeekr-001-vs-tesla-model-s-silicon-valley-tremble-2026':
    { wiki: 'Zeekr 001', alt: 'Zeekr 001 – berline électrique premium chinoise' },
  'nio-et5-vs-bmw-i4-alternative-chinoise-premium':
    { wiki: 'NIO ET5', alt: 'NIO ET5 – berline électrique premium' },
  'xpeng-g6-vs-tesla-model-y-recharge-rapide':
    { wiki: 'Xpeng G6', alt: 'XPeng G6 – SUV électrique 800V' },
  'mg4-vs-byd-dolphin-compactes-electriques-moins-25000-euros':
    { wiki: 'MG4 Electric', alt: 'MG4 Electric – compacte électrique' },
  'zeekr-001-vs-nio-et7-luxe-technologique-chinois-2026':
    { wiki: 'Zeekr 001', alt: 'Zeekr 001 face au NIO ET7' },
  'leapmotor-t03-vs-byd-seagull-micro-citadine-ville':
    { wiki: 'Leapmotor T03', alt: 'Leapmotor T03 – micro-citadine électrique' },
  'omoda-5-vs-mg-zs-hybrid-suv-urbains-abordables':
    { wiki: 'Omoda 5', alt: 'Omoda 5 – SUV compact accessible' },
  'xpeng-g6-vs-byd-atto-3-evo-autonomie-reelle':
    { wiki: 'Xpeng G6', alt: 'XPeng G6 – autonomie réelle 800V' },
  'jaecoo-7-vs-chery-tiggo-8-pro-suv-familial-groupe-chery':
    { wiki: 'Jaecoo 7', alt: 'Jaecoo 7 – SUV familial du groupe Chery' },
  'mg-cyberster-vs-byd-seal-06-gt-plaisir-conduire-chinois':
    { wiki: 'MG Cyberster', alt: 'MG Cyberster – roadster électrique chinois' },
  'nio-el6-vs-xpeng-g9-grands-suv-electriques-premium':
    { wiki: 'NIO ES6', alt: 'NIO EL6 – grand SUV électrique premium' },
  'gwm-ora-03-vs-mg3-hybrid-design-retro-efficacite-hybride':
    { wiki: 'ORA Good Cat', alt: 'GWM Ora 03 – citadine électrique rétro' },
  'byd-tang-2026-vs-mg-s9-suv-7-places':
    { wiki: 'BYD Tang', alt: 'BYD Tang 2026 – grand SUV électrique 7 places' },
  'lynk-co-01-vs-mg-ehs-hybride-rechargeable-partage':
    { wiki: 'Lynk & Co 01', alt: 'Lynk & Co 01 – SUV hybride rechargeable par abonnement' },
  'hongqi-e-hs9-vs-nio-el7-luxe-presidentiel':
    { wiki: 'Hongqi E-HS9', alt: 'Hongqi E-HS9 – limousine électrique de prestige' },
  'seres-5-vs-voyah-free-outsiders-chinois':
    { wiki: 'Huawei Aito', alt: 'Seres 5 – SUV électrique chinois' },
  'avatr-11-vs-hiphi-z-design-chinois-futuriste':
    { wiki: 'Avatr 11', alt: 'Avatr 11 – design futuriste chinois' },
  'leapmotor-c11-vs-byd-seal-u-suv-familial':
    { wiki: 'Leapmotor C11', alt: 'Leapmotor C11 – SUV familial électrique' },
  'mg5-vs-byd-han-break-berline':
    { wiki: 'BYD Han', alt: 'BYD Han – berline électrique haut de gamme' },
  'mg3-hybrid-vs-renault-clio-etech-hegemonie-francaise':
    { wiki: 'MG 3 (2023)', alt: 'MG3 Hybrid+ – citadine hybride compétitive' },
  'mg-zs-hybrid-vs-dacia-duster-hybrid-low-cost-menace':
    { wiki: 'MG ZS', alt: 'MG ZS Hybrid+ face au Dacia Duster' },
  'byd-atto-3-evo-vs-renault-scenic-etech-suv-annee':
    { wiki: 'BYD Atto 3', alt: 'BYD Atto 3 Evo – SUV électrique familial' },
  'jaecoo-5-vs-volkswagen-tiguan-menace-chinoise':
    { wiki: 'Jaecoo 7', alt: 'Jaecoo 5 – SUV compact challenger du Tiguan' },

  // --- Section 2 : Défis aux Européennes ---
  'zeekr-x-vs-volvo-ex30-deux-cousins-chinois':
    { wiki: 'Zeekr X', alt: 'Zeekr X – SUV compact électrique premium' },
  'xiaomi-su7-vs-xpeng-p7i-interface-logicielle':
    { wiki: 'Xiaomi SU7', alt: 'Xiaomi SU7 – berline électrique HyperOS' },
  'byd-shark-vs-maxus-t90-ev-pickup-chinois-pros':
    { wiki: 'BYD Shark', alt: 'BYD Shark – pickup hybride rechargeable' },
  'mg4-xpower-vs-volkswagen-id3-gtx-compacte-electrique-sportive':
    { wiki: 'MG4 Electric', alt: 'MG4 XPower – compacte électrique sportive 435 ch' },
  'leapmotor-t03-vs-dacia-spring-citadine-electrique-abordable':
    { wiki: 'Leapmotor T03', alt: 'Leapmotor T03 face à la Dacia Spring' },
  'byd-han-vs-mercedes-eqe-berline-executive-electrique':
    { wiki: 'BYD Han', alt: 'BYD Han face à la Mercedes EQE' },
  'chery-omoda-e5-vs-hyundai-kona-electric-suv-electrique-compact':
    { wiki: 'Omoda 5', alt: 'Chery Omoda E5 – SUV électrique compact accessible' },
  'gwm-wey-05-vs-volvo-xc60-recharge-suv-hybride-premium':
    { wiki: 'Wey (brand)', alt: 'GWM Wey 05 PHEV – SUV hybride 100 km autonomie EV' },
  'mg-zs-ev-vs-peugeot-e2008-suv-electrique-compact-france':
    { wiki: 'MG ZS EV', alt: 'MG ZS EV face au Peugeot e-2008' },
  'byd-seagull-vs-citroen-ec3-citadine-electrique-populaire':
    { wiki: 'BYD Seagull', alt: 'BYD Seagull – citadine électrique ultra-accessible' },
  'zeekr-x-vs-audi-q4-etron-premium-compact':
    { wiki: 'Zeekr X', alt: 'Zeekr X vs Audi Q4 e-tron – SUV premium compact' },
  'lynk-co-02-vs-renault-megane-etech-compacte-electrique-partage':
    { wiki: 'Lynk & Co 02', alt: 'Lynk & Co 02 – compacte électrique par abonnement' },
  'hongqi-l5-vs-rolls-royce-ghost-limousine-ultime':
    { wiki: 'Hongqi L5', alt: 'Hongqi L5 – limousine d\'État chinoise' },

  // --- Section 3 : Technologie & Énergie ---
  'byd-blade-vs-tesla-4680-quelle-batterie-domine-2026':
    { wiki: 'BYD Blade battery', alt: 'Batterie BYD Blade LFP – technologie révolutionnaire' },
  'nio-swap-stations-vs-superchargeurs-tesla-recharge-avenir':
    { wiki: 'NIO Power', alt: 'Station de swap NIO Power – recharge en 3 minutes' },
  'xpeng-lidar-vs-tesla-vision-camera-conduite-autonome':
    { wiki: 'Xpeng G9', alt: 'XPeng G9 avec LiDAR – conduite autonome XNGP' },
  'hybride-shs-h-omoda-comment-ca-marche-explication':
    { wiki: 'Omoda 5', alt: 'Omoda 5 SHS-H – système hybride full HEV Chery' },
  '800v-vs-400v-architecture-recharge-ultra-rapide-expliquee':
    { wiki: 'Xpeng G6', alt: 'Architecture 800V – recharge ultra-rapide 280 kW' },
  'voiture-electrique-maroc-tout-savoir-2026':
    { wiki: 'BYD Atto 3', alt: 'Voiture électrique au Maroc – guide complet 2026' },
  'hyperscreen-hmii-interface-logicielle-voitures-chinoises':
    { wiki: 'Xiaomi SU7', alt: 'Interface HyperOS – tableau de bord voiture connectée' },
  'electrique-hybride-phev-quelle-motorisation-choisir-maroc-2026':
    { wiki: 'BYD Atto 3', alt: 'Choisir entre électrique, hybride et PHEV au Maroc' },

  // --- Section 4 : Budget, Achat & Revente ---
  'meilleure-voiture-chinoise-moins-30000-euros-2026':
    { wiki: 'MG4 Electric', alt: 'Meilleures voitures chinoises sous 30 000 € en 2026' },
  'valeur-residuelle-voitures-chinoises-combien-perdez-vous':
    { wiki: 'MG ZS EV', alt: 'Valeur résiduelle voitures chinoises – guide revente' },
  'garantie-sav-voitures-chinoises-maroc-france-2026':
    { wiki: 'BYD Atto 3', alt: 'Garantie et SAV voitures chinoises – BYD MG NIO' },
  'financement-loa-lld-voiture-chinoise-guide-2026':
    { wiki: 'MG4 Electric', alt: 'Financement LOA LLD voiture chinoise – guide 2026' },
  'bonus-ecologique-droits-douane-voitures-chinoises-europe-2026':
    { wiki: 'BYD Seal', alt: 'Bonus écologique et droits de douane voitures chinoises EU' },
  'assurance-voiture-chinoise-specificites-conseils-2026':
    { wiki: 'MG ZS EV', alt: 'Assurer une voiture chinoise – conseils 2026' },
  'entretien-cout-voiture-electrique-chinoise-vs-thermique':
    { wiki: 'BYD Atto 3', alt: 'Coûts entretien voiture électrique chinoise vs thermique' },
  'acheter-voiture-chinoise-occasion-guide-2026':
    { wiki: 'MG4 Electric', alt: 'Acheter voiture chinoise occasion – guide complet 2026' },
  'installer-borne-recharge-domicile-voiture-electrique-maroc-france':
    { wiki: 'BYD Atto 3', alt: 'Installer une borne de recharge à domicile – guide' },

  // --- Section 5 : Sélections Thématiques ---
  'top-10-voitures-chinoises-2026-classement':
    { wiki: 'BYD Seal', alt: 'Top 10 meilleures voitures chinoises 2026' },
  'top-5-suv-electriques-chinois-familles-2026':
    { wiki: 'BYD Tang', alt: 'Top 5 SUV électriques chinois pour les familles 2026' },
  'meilleures-voitures-chinoises-sous-25000-euros-2026':
    { wiki: 'MG4 Electric', alt: 'Meilleures voitures chinoises sous 25 000 € 2026' },
  'top-5-voitures-chinoises-longs-trajets-2026':
    { wiki: 'NIO ET7', alt: 'Top 5 voitures chinoises pour longs trajets 2026' },
  'voitures-chinoises-sportives-performances-2026':
    { wiki: 'Xiaomi SU7', alt: 'Voitures chinoises sportives et performances 2026' },
  'voitures-chinoises-luxe-premium-top-2026':
    { wiki: 'NIO ET9', alt: 'Voitures chinoises de luxe et premium – top 2026' },
  'pickups-electriques-chinois-professionnels-2026':
    { wiki: 'BYD Shark', alt: 'Pickups électriques chinois professionnels 2026' },
  'voitures-chinoises-design-retro-originales-2026':
    { wiki: 'ORA Good Cat', alt: 'Voitures chinoises au design rétro – Ora 03 MG Cyberster' },
  'marques-chinoises-disponibles-maroc-2026-guide':
    { wiki: 'BYD Atto 3', alt: 'Marques chinoises disponibles au Maroc en 2026' },

  // --- Section 6 : Motorisations ---
  'electrique-pur-vs-hybride-rechargeable-quel-choix-2026':
    { wiki: 'BYD Seal', alt: 'Électrique pur vs PHEV – quel choix en 2026 ?' },
  'traction-avant-arriere-awd-voiture-electrique-difference':
    { wiki: 'MG4 Electric', alt: 'Traction avant arrière AWD – différence en électrique' },
  'lfp-nmc-nca-quelle-chimie-batterie-choisir':
    { wiki: 'BYD Blade battery', alt: 'LFP NMC NCA – quelle chimie de batterie choisir ?' },

  // --- Section 7 : Marques ---
  'byd-marque-complete-guide-modeles-2026':
    { wiki: 'BYD Auto', alt: 'BYD – guide complet de la marque et modèles 2026' },
  'mg-saic-marque-histoire-gamme-2026':
    { wiki: 'MG Motor', alt: 'MG SAIC – histoire et gamme complète 2026' },
  'nio-marque-guide-modeles-baas-2026':
    { wiki: 'NIO (company)', alt: 'NIO – guide complet marque BaaS et modèles 2026' },
  'xpeng-guide-marque-xngp-modeles-2026':
    { wiki: 'Xpeng', alt: 'XPeng – guide complet XNGP et modèles 2026' },
  'geely-zeekr-lynk-co-groupe-guide-2026':
    { wiki: 'Zeekr 001', alt: 'Geely Zeekr Lynk & Co – guide du groupe 2026' },
  'chery-omoda-jaecoo-groupe-guide-2026':
    { wiki: 'Omoda 5', alt: 'Chery Omoda Jaecoo – guide du groupe 2026' },
  'gwm-haval-wey-ora-groupe-guide-2026':
    { wiki: 'Great Wall Motors', alt: 'GWM Haval Wey Ora – guide du groupe 2026' },
  'xiaomi-automobiles-su7-su7-ultra-guide-2026':
    { wiki: 'Xiaomi SU7', alt: 'Xiaomi Automobiles SU7 et SU7 Ultra – guide 2026' },

  // --- Section 8 : Essais Longue Durée ---
  'essai-longue-duree-mg4-100000-km-bilan':
    { wiki: 'MG4 Electric', alt: 'MG4 Electric – bilan essai longue durée 100 000 km' },
  'essai-longue-duree-byd-atto-3-evo-bilan-2026':
    { wiki: 'BYD Atto 3', alt: 'BYD Atto 3 Evo – bilan 60 000 km Blade LFP' },
  'essai-longue-duree-nio-et5-50000-km-bilan':
    { wiki: 'NIO ET5', alt: 'NIO ET5 – bilan 50 000 km BaaS et NOMI AI' },
  'essai-longue-duree-xpeng-g6-bilan-2026':
    { wiki: 'Xpeng G6', alt: 'XPeng G6 – bilan 45 000 km XNGP et 280 kW' },
  'essai-longue-duree-omoda-5-shsh-bilan-2026':
    { wiki: 'Omoda 5', alt: 'Omoda 5 SHS-H – bilan hybride 40 000 km' },

  // --- Section 9 : Analyses & Tendances ---
  'invasion-voitures-chinoises-europe-2026-analyse':
    { wiki: 'BYD Auto', alt: 'Voitures chinoises en Europe – état des lieux 2026' },
  'autonomie-reelle-vs-wltp-verite-chiffres-electriques':
    { wiki: 'BYD Seal', alt: 'Autonomie réelle vs WLTP – la vérité sur les chiffres' },
  'voitures-chinoises-securite-crash-tests-2026':
    { wiki: 'BYD Atto 3', alt: 'Crash tests Euro NCAP voitures chinoises 2026' },
  'qualite-voitures-chinoises-evolution-perception-2026':
    { wiki: 'NIO ET5', alt: 'Qualité voitures chinoises – évolution 2015-2026' },
  'chine-vs-coree-strategie-automobile-comparaison':
    { wiki: 'BYD Auto', alt: 'Chine vs Corée – stratégies automobiles comparées' },
  'voitures-chinoises-en-2030-ce-qui-nous-attend':
    { wiki: 'Xiaomi SU7', alt: 'Voitures chinoises en 2030 – batteries solides et autonomie L3' },
  'maroc-hub-automobile-africain-voitures-chinoises':
    { wiki: 'BYD Atto 3', alt: 'Maroc hub automobile africain – rôle des voitures chinoises' },
  'impact-voitures-chinoises-marques-europeennes-2026':
    { wiki: 'MG4 Electric', alt: 'Impact voitures chinoises sur marques européennes 2026' },
  'quelle-marque-chinoise-choisir-guide-ultime-2026':
    { wiki: 'BYD Seal', alt: 'Quelle marque chinoise choisir ? Guide ultime 2026' },

  // --- Comparatifs complémentaires ---
  'byd-atto-3-evo-vs-hyundai-kona-electric-suv-compact':
    { wiki: 'BYD Atto 3', alt: 'BYD Atto 3 Evo vs Hyundai Kona Electric 2026' },
  'recharge-itinerance-voiture-electrique-europe-maroc-2026':
    { wiki: 'BYD Seal', alt: 'Recharge en itinérance Europe et Maroc – guide 2026' },
  'nio-et7-vs-mercedes-eqs-berline-luxe-electrique':
    { wiki: 'NIO ET7', alt: 'NIO ET7 vs Mercedes EQS – berline de luxe électrique 2026' },
  'mg4-vs-renault-megane-etech-compacte-electrique':
    { wiki: 'MG4 Electric', alt: 'MG4 vs Renault Mégane E-Tech – compacte électrique 2026' },
  'xpeng-g6-vs-byd-seal-suv-berline-electrique-800v':
    { wiki: 'Xpeng G6', alt: 'XPeng G6 vs BYD Seal – 800V vs 400V' },
  'leapmotor-b10-vs-mg4-compacte-electrique-budget-2026':
    { wiki: 'MG4 Electric', alt: 'Leapmotor B10 vs MG4 – compacte électrique budget 2026' },
  'byd-dolphin-mini-vs-renault-r5-citadine-electrique-2026':
    { wiki: 'BYD Seagull', alt: 'BYD Dolphin Mini vs Renault R5 Electric 2026' },
  'comment-revendre-voiture-chinoise-guide-2026':
    { wiki: 'MG ZS EV', alt: 'Comment revendre sa voiture chinoise – guide pratique 2026' },
  'byd-seal-u-vs-xpeng-g9-grand-suv-electrique-famille':
    { wiki: 'BYD Tang', alt: 'BYD Seal U vs XPeng G9 – grand SUV électrique familial' },
  'xiaomi-su7-vs-porsche-taycan-eleve-depasse-maitre':
    { wiki: 'Xiaomi SU7', alt: 'Xiaomi SU7 Ultra vs Porsche Taycan – record Nürburgring' },
  'omoda-5-shs-h-vs-toyota-yaris-cross-hybride-japonais-nouveau-venu':
    { wiki: 'Omoda 5', alt: 'Omoda 5 SHS-H vs Toyota Yaris Cross – hybride japonais vs chinois' },
};

// Fallback image if Wikipedia has no thumbnail
const FALLBACK = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/BYD_Seal_EV_2022_%28cropped%29.jpg/1200px-BYD_Seal_EV_2022_%28cropped%29.jpg',
  alt: 'Voiture électrique chinoise 2026',
};

async function getWikiThumbnail(articleName) {
  try {
    const encoded = encodeURIComponent(articleName.replace(/ /g, '_'));
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
    const res = await fetch(url, {
      headers: { 'User-Agent': 'chinacars.com-bot/1.0 (content@chinacars.com)' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const src = data?.thumbnail?.source;
    if (!src) return null;
    // Upscale thumbnail to 1200px width
    return src.replace(/\/\d+px-/, '/1200px-');
  } catch {
    return null;
  }
}

function injectCoverImage(content, url, alt) {
  // Find the closing --- of the frontmatter
  const secondDash = content.indexOf('\n---', 3);
  if (secondDash === -1) return content;
  const yaml = `\ncoverImage:\n  url: "${url}"\n  alt: "${alt}"`;
  return content.slice(0, secondDash) + yaml + content.slice(secondDash);
}

// ── Main ──────────────────────────────────────────────────────────────────────

const files = readdirSync(ARTICLES_DIR)
  .filter(f => f.endsWith('.md'))
  .sort();

console.log(`\n🔍 ${files.length} articles trouvés\n`);

let ok = 0, fallbacks = 0, skipped = 0;

for (const file of files) {
  const slug = file.replace('.md', '');
  const filePath = join(ARTICLES_DIR, file);
  let content = readFileSync(filePath, 'utf-8');

  if (content.includes('coverImage:')) {
    console.log(`  ⏭  ${slug} (déjà traité)`);
    skipped++;
    continue;
  }

  const mapping = ARTICLE_MAP[slug];
  if (!mapping) {
    console.log(`  ⚠️  ${slug} (pas de mapping — fallback)`);
    content = injectCoverImage(content, FALLBACK.url, FALLBACK.alt);
    writeFileSync(filePath, content, 'utf-8');
    fallbacks++;
    continue;
  }

  process.stdout.write(`  ↓  ${slug} (wiki: "${mapping.wiki}") … `);
  const imgUrl = await getWikiThumbnail(mapping.wiki);

  if (imgUrl) {
    content = injectCoverImage(content, imgUrl, mapping.alt);
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✅`);
    ok++;
  } else {
    content = injectCoverImage(content, FALLBACK.url, mapping.alt);
    writeFileSync(filePath, content, 'utf-8');
    console.log(`⚠️  (fallback)`);
    fallbacks++;
  }

  // Small delay to be polite to the Wikipedia API
  await new Promise(r => setTimeout(r, 120));
}

console.log(`\n✅ OK: ${ok}  |  ⚠️  Fallback: ${fallbacks}  |  ⏭  Skipped: ${skipped}\n`);
