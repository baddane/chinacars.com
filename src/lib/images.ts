const WANDALOO_BASE = 'https://www.wandaloo.com/files/Voiture-Neuve/';

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
  // Chery / Omoda / Jaecoo
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
  // Brands not on wandaloo → closest visual equivalent
  ['xiaomi', 'zeekr-7x.jpg'],
  ['nio', 'zeekr-001.jpg'],
  ['leapmotor', 'omoda-e5.jpg'],
  ['lynk', 'geely-coolray.jpg'],
  ['avatr', 'zeekr-7x.jpg'],
  ['hiphi', 'zeekr-7x.jpg'],
  ['hongqi', 'zeekr-001.jpg'],
  ['voyah', 'dongfeng-mage.jpg'],
  ['seres', 'gwm-wey-05.jpg'],
  ['maxus', 'gwm-poer-dc.jpg'],
];

function findWandaloo(slug: string): string | null {
  for (const [keyword, filename] of MODEL_IMAGE_MAP) {
    if (slug.includes(keyword)) return WANDALOO_BASE + filename;
  }
  return null;
}

export function resolveArticleImage(
  image: string,
  slug: string,
): string {
  if (!image.includes('picsum.photos') && !image.includes('loremflickr.com')) return image;
  const wandaloo = findWandaloo(slug);
  if (wandaloo) return wandaloo;
  return WANDALOO_BASE + 'byd-seal.jpg';
}
