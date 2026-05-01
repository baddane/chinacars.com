import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { brandSchema, breadcrumbSchema } from '@/src/lib/seo/schemas';
import { BRANDS } from '@/src/lib/constants';

interface PageProps {
  params: { brand: string };
}

export function generateStaticParams() {
  return BRANDS.map((brand) => ({ brand: brand.slug }));
}

function findBrand(slug: string) {
  return BRANDS.find((b) => b.slug === slug);
}

export function generateMetadata({ params }: PageProps): Metadata {
  const brand = findBrand(params.brand);
  if (!brand) return { title: 'Marque introuvable' };
  return {
    title: `${brand.name} au Maroc — Modèles, prix et actualités`,
    description: brand.description,
    alternates: { canonical: `/marques/${brand.slug}` },
    openGraph: {
      title: `${brand.name} au Maroc — Modèles, prix et actualités`,
      description: brand.description,
      url: `/marques/${brand.slug}`,
    },
  };
}

export default function BrandPage({ params }: PageProps) {
  const brand = findBrand(params.brand);
  if (!brand) notFound();
  const b = brand as NonNullable<typeof brand>;

  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
    { name: 'Marques', url: '/marques' },
    { name: b.name, url: `/marques/${b.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          brandSchema({
            name: b.name,
            url: `/marques/${b.slug}`,
            description: b.description,
            foundingLocation: b.origin,
          }),
          breadcrumbSchema(breadcrumbItems),
        ]}
        id={`brand-${b.slug}`}
      />

      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems.slice(1)} className="mb-8" />

          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-4">
              {b.origin}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {b.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{b.description}</p>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-6">
              <dt className="text-sm text-gray-500">Modèles disponibles</dt>
              <dd className="mt-1 text-3xl font-bold text-gray-900">{b.modelsCount}</dd>
            </div>
            <div className="rounded-2xl bg-gray-50 p-6">
              <dt className="text-sm text-gray-500">Pays d&apos;origine</dt>
              <dd className="mt-1 text-xl font-bold text-gray-900">{b.country}</dd>
            </div>
            <div className="rounded-2xl bg-gray-50 p-6">
              <dt className="text-sm text-gray-500">Siège social</dt>
              <dd className="mt-1 text-xl font-bold text-gray-900 leading-tight">{b.origin}</dd>
            </div>
          </dl>

          <section id="modeles" className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              Gamme {b.name} au Maroc
            </h2>
            <p className="text-base leading-7 text-gray-600">
              Les fiches modèles détaillées ({b.modelsCount} véhicules) seront disponibles
              prochainement. En attendant, consultez nos articles pour les dernières
              informations sur la gamme {b.name}.
            </p>
          </section>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              Actualités {b.name}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/marques"
              className="text-sm font-semibold text-gray-600 hover:text-red-600"
            >
              ← Toutes les marques
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
