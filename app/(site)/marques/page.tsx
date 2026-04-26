import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Info } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { BRANDS } from '@/src/lib/constants';

export const metadata: Metadata = {
  title: 'Marques de voitures chinoises au Maroc',
  description:
    'Découvrez toutes les marques de voitures chinoises disponibles au Maroc : BYD, MG, Chery, Geely, GWM, Zeekr, NIO, XPeng, Leapmotor.',
  alternates: { canonical: '/marques' },
};

export default function BrandsPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Marques', url: '/marques' }]} className="mb-8" />

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Marques
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explorez l&apos;univers des {BRANDS.length} constructeurs chinois présents ou attendus
            au Maroc. De l&apos;entrée de gamme accessible au luxe technologique, chaque marque
            apporte sa vision de l&apos;automobile.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {BRANDS.map((brand) => (
            <article
              key={brand.slug}
              className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="shrink-0">
                <Image
                  src={`https://picsum.photos/seed/${brand.slug}logo/400/400`}
                  alt={`Logo ${brand.name}`}
                  width={128}
                  height={128}
                  className="rounded-2xl object-cover shadow-md group-hover:rotate-3 transition-transform"
                />
              </div>
              <div className="grow">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{brand.name}</h2>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {brand.origin}
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-600 mb-6">{brand.description}</p>
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
                    {brand.modelsCount} modèles
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
