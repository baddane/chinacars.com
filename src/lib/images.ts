/**
 * Maps article slugs/categories to car-relevant image keywords.
 * Used to replace generic picsum placeholders with actual vehicle photos
 * until real images are loaded from Sanity CMS.
 */

const BRAND_KEYWORDS: Record<string, string> = {
  byd: 'BYD,electric,car',
  mg: 'MG,electric,hatchback',
  zeekr: 'electric,car,luxury,sedan',
  nio: 'electric,sedan,luxury',
  xpeng: 'electric,car,autonomous',
  chery: 'SUV,car,automotive',
  omoda: 'SUV,electric,car',
  jaecoo: 'SUV,offroad,car',
  xiaomi: 'electric,sedan,sports,car',
  leapmotor: 'electric,city,car',
  gwm: 'SUV,haval,car',
  geely: 'electric,car,geely',
  hongqi: 'luxury,car,limousine',
  avatr: 'electric,car,futuristic',
  hiphi: 'electric,car,design',
  voyah: 'electric,SUV,luxury',
  seres: 'electric,car,SUV',
  lynk: 'car,subscription,electric',
  maxus: 'pickup,electric,truck',
  tesla: 'Tesla,electric,car',
  porsche: 'Porsche,sports,car',
  volkswagen: 'Volkswagen,car,automotive',
  renault: 'Renault,electric,car',
  peugeot: 'Peugeot,electric,car',
  citroen: 'Citroen,electric,city,car',
  bmw: 'BMW,electric,premium,car',
  mercedes: 'Mercedes,luxury,electric,car',
  audi: 'Audi,electric,premium,car',
  volvo: 'Volvo,electric,SUV',
  toyota: 'Toyota,hybrid,car',
  hyundai: 'Hyundai,electric,car',
  dacia: 'Dacia,electric,budget,car',
};

const CATEGORY_KEYWORDS: Record<string, string> = {
  comparatif: 'electric,car,comparison,road',
  technologie: 'electric,car,technology,battery',
  guide: 'car,showroom,dealership,automotive',
  selection: 'luxury,electric,car,lineup',
  analyse: 'automotive,cars,road,industry',
  essai: 'car,test,drive,road,speed',
  nouveaute: 'new,electric,car,launch',
  electrique: 'electric,car,charging,EV',
  hybride: 'hybrid,car,eco,drive',
  maroc: 'electric,car,road,sunny',
  conseil: 'car,advice,dealership',
};

/**
 * Returns a hash-stable integer from a string for consistent image locking.
 */
function slugToLock(slug: string): number {
  return Math.abs(slug.split('').reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 0)) % 10000;
}

/**
 * Picks relevant car keywords from an article slug.
 */
function slugToKeywords(slug: string, categorySlug: string): string {
  for (const [brand, keywords] of Object.entries(BRAND_KEYWORDS)) {
    if (slug.includes(brand)) return keywords;
  }
  return CATEGORY_KEYWORDS[categorySlug] ?? 'electric,car,automotive,road';
}

/**
 * Converts a picsum.photos placeholder URL to a loremflickr.com URL
 * that returns an actual car photo matching the article context.
 * Real Sanity CMS images pass through unchanged.
 */
export function resolveArticleImage(
  image: string,
  slug: string,
  categorySlug: string,
  width = 1200,
  height = 800,
): string {
  if (!image.includes('picsum.photos')) return image;
  const keywords = slugToKeywords(slug, categorySlug);
  const lock = slugToLock(slug);
  return `https://loremflickr.com/${width}/${height}/${keywords}?lock=${lock}`;
}
