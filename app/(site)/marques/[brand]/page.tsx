import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe, MapPin, Calendar } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import CarCard from '@/src/components/cars/CarCard';
import { brands } from '@/src/data/brands';
import { getModelsByBrand } from '@/src/data/models';
import type { ModelSeed } from '@/src/data/models';
import { sanityFetch } from '@/src/lib/sanity/client';
import { brandBySlugQuery, brandSlugsQuery } from '@/src/lib/sanity/queries';
import { toBrandSeed, toModelSeed, type SanityBrand, type SanityModel } from '@/src/lib/sanity/normalize';
import { buildImageUrl } from '@/src/lib/sanity/image';

interface PageProps {
  params: { brand: string };
}

interface SanityBrandWithModels extends SanityBrand {
  models?: SanityModel[];
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(brandSlugsQuery);
  if (slugs?.length) return slugs.map((brand) => ({ brand }));
  return brands.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sanityBrand = await sanityFetch<SanityBrandWithModels>(brandBySlugQuery, {
    slug: params.brand,
  });
  const name = sanityBrand?.name ?? brands.find((b) => b.slug === params.brand)?.name;
  if (!name) return { title: 'Marque introuvable' };
  return {
    title: `${name} — Modèles, prix et actualités`,
    description: `Découvrez tous les modèles ${name} : prix, caractéristiques, autonomie et actualités sur le marché francophone.`,
    alternates: { canonical: `/marques/${params.brand}` },
  };
}

export default async function BrandPage({ params }: PageProps) {
  const sanityBrand = await sanityFetch<SanityBrandWithModels>(brandBySlugQuery, {
    slug: params.brand,
  });

  const seedBrand = brands.find((b) => b.slug === params.brand);

  if (!sanityBrand && !seedBrand) notFound();

  const brand = sanityBrand ? toBrandSeed(sanityBrand) : seedBrand!;
  const carModels: ModelSeed[] = sanityBrand?.models?.length
    ? sanityBrand.models.map(toModelSeed)
    : getModelsByBrand(params.brand);

  const logoUrl = sanityBrand?.logo
    ? buildImageUrl(sanityBrand.logo, { width: 200 })
    : brand.logo;

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Marques', url: '/marques' },
            { name: brand.name, url: `/marques/${brand.slug}` },
          ]}
          className="mb-8"
        />

        {/* Header marque */}
        <div className="flex flex-col sm:flex-row items-start gap-8 pb-12 border-b border-gray-100">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={`Logo ${brand.name}`}
              width={100}
              height={100}
              className="rounded-2xl object-cover shadow-md shrink-0"
            />
          ) : (
            <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-gray-400">{brand.name.charAt(0)}</span>
            </div>
          )}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {brand.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
              {brand.founded > 0 && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Fondée en {brand.founded}
                </span>
              )}
              {brand.headquarters && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {brand.headquarters}
                </span>
              )}
              {brand.website && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-red-600 hover:underline"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  Site officiel
                </a>
              )}
            </div>
            {brand.description && (
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                {brand.description}
              </p>
            )}
          </div>
        </div>

        {/* Modèles */}
        <section id="modeles" className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">
            Modèles {brand.name}
          </h2>
          {carModels.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {carModels.map((model) => (
                <CarCard key={model.slug} car={model} />
              ))}
            </div>
          ) : (
            <p className="text-base leading-7 text-gray-500">
              Les fiches modèles seront disponibles prochainement.
            </p>
          )}
        </section>

        <div className="mt-16">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
          >
            Actualités {brand.name}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
