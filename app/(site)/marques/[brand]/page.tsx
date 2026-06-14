import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { breadcrumbSchema, organizationSchema } from '@/src/lib/seo/schemas';
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
    title: `${brand.name} — Modèles, prix et actualités au Maroc`,
    description: `Découvrez tous les modèles ${brand.name} disponibles au Maroc, leurs prix, leurs caractéristiques et les dernières actualités.`,
    alternates: { canonical: `/marques/${brand.slug}` },
    openGraph: {
      title: `${brand.name} — Modèles et prix au Maroc`,
      description: `Tous les modèles ${brand.name} : prix, caractéristiques et disponibilité au Maroc.`,
      url: `/marques/${brand.slug}`,
      type: 'website',
    },
  };
}

export default function BrandPage({ params }: PageProps) {
  const brand = findBrand(params.brand);
  if (!brand) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Accueil', url: '/' },
          { name: 'Marques', url: '/marques' },
          { name: brand.name, url: `/marques/${brand.slug}` },
        ])}
        id={`brand-${brand.slug}`}
      />
      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumb
          items={[
            { name: 'Marques', url: '/marques' },
            { name: brand.name, url: `/marques/${brand.slug}` },
          ]}
          className="mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {brand.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Retrouvez ici la fiche complète de {brand.name} : histoire, modèles
          commercialisés au Maroc, tarifs, homologation et actualités.
        </p>

        <section id="modeles" className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Modèles
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Les fiches modèles détaillées seront chargées depuis Sanity CMS dès
            publication.
          </p>
        </section>

        <div className="mt-12">
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
    </>
  );
}
