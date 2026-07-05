/**
 * Crédits des photos de véhicules hébergées localement (public/cars/…).
 *
 * Ces images proviennent de Wikimedia Commons sous licence CC BY-SA 4.0, qui
 * impose de créditer l'auteur, d'indiquer la licence et de lier vers la source.
 * La page /credits-images affiche ces mentions ; ne pas retirer une entrée sans
 * retirer l'image correspondante.
 */

export interface ImageCredit {
  /** slug de la voiture (src/data/cars.ts) */
  slug: string;
  /** Modèle affiché */
  model: string;
  /** Auteur de la photo (tel que crédité sur Wikimedia Commons) */
  author: string;
  /** Licence courte */
  license: string;
  /** Lien vers le texte de licence */
  licenseUrl: string;
  /** Page source (fichier Wikimedia Commons) */
  sourceUrl: string;
}

const CC_BY_SA_4 = 'https://creativecommons.org/licenses/by-sa/4.0/';

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    slug: 'byd-seal',
    model: 'BYD Seal',
    author: 'User3204',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2022_BYD_Seal.jpg',
  },
  {
    slug: 'byd-atto-3',
    model: 'BYD Atto 3',
    author: 'Alexander Migl',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:BYD_Atto_3_1X7A6491.jpg',
  },
  {
    slug: 'byd-han',
    model: 'BYD Han',
    author: 'Kevauto',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:2023_BYD_Han_DM-i_(facelift),_front_8.17.23.jpg',
  },
  {
    slug: 'byd-tang',
    model: 'BYD Tang',
    author: 'Taylormilan3216 / Mariordo',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:BYD_Tang_DM-p_front_quarter_trimmed_2.jpg',
  },
  {
    slug: 'mg-zs-ev',
    model: 'MG ZS EV',
    author: 'Cannonball walk',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:MG_ZS_EV_in_France_(front_left_quarter).jpg',
  },
  {
    slug: 'zeekr-001',
    model: 'Zeekr 001',
    author: 'User3204',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2022_Zeekr_001_(front).jpg',
  },
  {
    slug: 'zeekr-x',
    model: 'Zeekr X',
    author: 'User3204',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2023_Zeekr_X_(front).jpg',
  },
  {
    slug: 'xpeng-g6',
    model: 'XPeng G6',
    author: 'Alexander Migl',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:XPeng_G6_(2025)_IAA_2025_DSC_1710.jpg',
  },
  {
    slug: 'xpeng-g9',
    model: 'XPeng G9',
    author: 'Alexander-93',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:XPeng_G9_(2025)_IAA_2025_DSC_2054.jpg',
  },
  {
    slug: 'byd-seagull',
    model: 'BYD Dolphin Surf (Seagull)',
    author: 'User3204',
    license: 'CC BY-SA 4.0',
    licenseUrl: CC_BY_SA_4,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2023_%D0%92YD_Seagull_(front).jpg',
  },
];
