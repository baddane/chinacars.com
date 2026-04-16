import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Info, Star } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { BRANDS } from '@/src/lib/constants';

const descriptions: Record<string, { description: string; origin: string }> = {
  byd: {
    description:
      "Leader mondial des véhicules électrifiés. Gamme complète en France : Atto 3, Dolphin, Seal, Seal U.",
    origin: 'Shenzhen',
  },
  mg: {
    description:
      "Marque britannique sous pavillon chinois (SAIC). L'un des best-sellers chinois en France avec la MG4.",
    origin: 'Shanghai',
  },
  chery: {
    description:
      "L'un des plus grands exportateurs chinois. SUV technologiques vendus en France via Omoda/Jaecoo.",
    origin: 'Wuhu',
  },
  geely: {
    description:
      'Propriétaire de Volvo, Polestar, Lotus et Lynk & Co. Rigueur européenne et poids lourds du marché.',
    origin: 'Hangzhou',
  },
  gwm: {
    description:
      'Great Wall Motor : spécialiste des SUV (Haval) et des pick-ups. Déploiement européen en cours.',
    origin: 'Baoding',
  },
  zeekr: {
    description: "Marque haut de gamme électrique du groupe Geely. Showrooms Paris, Amsterdam, Stockholm.",
    origin: 'Ningbo',
  },
  nio: {
    description:
      'Premium électrique avec stations de swap de batterie. Présence européenne ciblée.',
    origin: 'Shanghai',
  },
  xpeng: {
    description:
      'Leader de la conduite autonome chinoise. G6 et G9 vendus en France, plateforme 800 V.',
    origin: 'Guangzhou',
  },
  leapmotor: {
    description:
      'Distribué par Stellantis en Europe. T03 fabriquée en Pologne, éligible bonus.',
    origin: 'Hangzhou',
  },
  denza: {
    description:
      'Coentreprise BYD / Mercedes-Benz. Ultra-premium électrique, arrivée France 2026.',
    origin: 'Shenzhen',
  },
  hongqi: {
    description:
      'Marque de luxe historique de FAW. Berlines et SUV premium, déploiement Europe progressif.',
    origin: 'Changchun',
  },
  jaecoo: {
    description:
      'Marque aventure de Chery. SUV hybrides et thermiques, arrivée France via réseau indépendant.',
    origin: 'Wuhu',
  },
  omoda: {
    description:
      'Marque jeune de Chery. Design affirmé, SUV thermiques et électriques (Omoda 5, E5).',
    origin: 'Wuhu',
  },
};

const brandsContent = BRANDS.map((brand) => ({
  ...brand,
  description: descriptions[brand.slug]?.description ?? '',
  origin: descriptions[brand.slug]?.origin ?? '',
  logo: `https://picsum.photos/seed/${brand.slug}logo/400/400`,
}));

export const metadata: Metadata = {
  title: 'Marques de voitures chinoises en France',
  description:
    'Les 13 marques chinoises présentes ou attendues en France : BYD, MG, Chery, Geely, GWM, Zeekr, NIO, Xpeng, Leapmotor, Denza, Hongqi, Jaecoo, Omoda.',
  alternates: { canonical: '/marques' },
};

export default function BrandsPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Marques', url: '/marques' }]} className="mb-8" />

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Marques chinoises en France
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            13 constructeurs chinois distribuent déjà ou s&apos;apprêtent à
            distribuer en France. De l&apos;entrée de gamme accessible (Leapmotor,
            Omoda) au luxe électrique (Denza, Zeekr), chaque marque apporte sa
            vision de l&apos;automobile.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {brandsContent.map((brand) => (
            <article
              key={brand.slug}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all group"
            >
              <div className="shrink-0 relative">
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  width={112}
                  height={112}
                  className="rounded-2xl object-cover shadow-md group-hover:rotate-3 transition-transform"
                />
                {brand.priority && (
                  <span className="absolute -top-2 -right-2 flex items-center gap-1 rounded-full bg-red-600 px-2 py-1 text-[10px] font-bold uppercase text-white shadow-lg">
                    <Star className="h-3 w-3" aria-hidden="true" />
                    Priorité
                  </span>
                )}
              </div>
              <div className="grow">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h2 className="text-2xl font-bold text-gray-900">{brand.name}</h2>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider shrink-0">
                    {brand.origin}
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-600 mb-5">
                  {brand.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/marques/${brand.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <Info className="h-4 w-4 text-red-600" aria-hidden="true" />
                    Fiche marque
                  </Link>
                  <Link
                    href={`/marques/${brand.slug}#modeles`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:underline"
                  >
                    Modèles
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
