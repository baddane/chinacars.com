import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Info } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { brands } from '@/src/data/brands';
import type { BrandSeed } from '@/src/data/brands';
import { sanityFetch } from '@/src/lib/sanity/client';
import { brandsQuery } from '@/src/lib/sanity/queries';
import { toBrandSeed, type SanityBrand } from '@/src/lib/sanity/normalize';

export const metadata: Metadata = {
  title: 'Marques de voitures chinoises',
  description:
    'Découvrez toutes les marques de voitures chinoises : BYD, MG, Chery, Geely, GWM, Zeekr. Histoire, modèles, prix et actualités.',
  alternates: { canonical: '/marques' },
};

export default async function BrandsPage() {
  const sanityBrands = await sanityFetch<SanityBrand[]>(brandsQuery);
  const allBrands: BrandSeed[] = sanityBrands?.length ? sanityBrands.map(toBrandSeed) : brands;

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Marques', url: '/marques' }]} className="mb-8" />

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Marques
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explorez l&apos;univers des constructeurs chinois. De l&apos;entrée de gamme
            accessible au luxe technologique, chaque marque apporte sa vision de l&apos;automobile.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {allBrands.map((brand) => (
            <article
              key={brand.slug}
              className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="shrink-0">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={128}
                    height={128}
                    className="rounded-2xl object-cover shadow-md group-hover:rotate-3 transition-transform"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-2xl bg-gray-200 shadow-md flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="grow">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{brand.name}</h2>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {brand.headquarters || brand.country}
                  </span>
                </div>
                {brand.founded > 0 && (
                  <p className="text-xs text-gray-400 mb-2">Fondée en {brand.founded}</p>
                )}
                <p className="text-sm leading-6 text-gray-600 mb-6 line-clamp-3">
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
                  {brand.modelsCount > 0 && (
                    <Link
                      href={`/marques/${brand.slug}#modeles`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:underline"
                    >
                      {brand.modelsCount} modèle{brand.modelsCount > 1 ? 's' : ''}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
