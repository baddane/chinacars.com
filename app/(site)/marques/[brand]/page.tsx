import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { BRANDS } from '@/src/lib/constants';
import { voituresPages, utilitairesPages } from '@/src/data/silos';

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
    title: `${brand.name} France — Modèles, prix et actualités`,
    description: `Découvrez tous les modèles ${brand.name} disponibles en France, leurs prix, leurs caractéristiques et les dernières actualités.`,
    alternates: { canonical: `/marques/${brand.slug}` },
  };
}

export default function BrandPage({ params }: PageProps) {
  const brand = findBrand(params.brand);
  if (!brand) notFound();

  const relatedBrands = BRANDS.filter((b) => b.slug !== brand.slug).slice(0, 4);
  const brandModels = [...voituresPages, ...utilitairesPages].filter(
    (p) => p.brand === brand.slug,
  );

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Marques', url: '/marques' },
            { name: brand.name, url: `/marques/${brand.slug}` },
          ]}
          className="mb-8"
        />

        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {brand.name} France
          </h1>
          {brand.priority && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase text-white">
              <Star className="h-3 w-3" aria-hidden="true" />
              Priorité
            </span>
          )}
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Fiche complète de {brand.name} en France : histoire, modèles
          commercialisés, tarifs, score environnemental (bonus), droits de douane
          UE applicables et actualités. Pages en cours de rédaction, plan H2 ci-dessous.
        </p>

        <section id="modeles" className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Modèles {brand.name} en France
          </h2>
          {brandModels.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {brandModels.map((model) => {
                const silo = voituresPages.includes(model) ? 'voitures' : 'utilitaires';
                return (
                  <Link
                    key={model.slug}
                    href={`/${silo}/${model.slug}`}
                    className="group rounded-2xl border border-gray-200 p-5 hover:border-red-500 hover:shadow transition"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600">
                      {model.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{model.excerpt}</p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="mt-4 text-base leading-7 text-gray-600">
              Les fiches modèles {brand.name} seront publiées au fur et à mesure
              du calendrier éditorial (Phase 1 quick wins).
            </p>
          )}
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Plan éditorial de la fiche
          </h2>
          <ol className="mt-6 space-y-2 text-base leading-7 text-gray-700 list-decimal list-inside">
            <li>Histoire et positionnement de {brand.name}</li>
            <li>Gamme commercialisée en France (dates de lancement)</li>
            <li>Tarifs catalogue et éligibilité bonus écologique</li>
            <li>Droits de douane UE applicables (barème constructeur)</li>
            <li>Réseau de distribution et SAV en France</li>
            <li>Fiabilité : retours d&apos;expérience et garanties</li>
            <li>Actualités {brand.name}</li>
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Autres marques chinoises
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {relatedBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/marques/${b.slug}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-red-500 hover:text-red-600 transition text-center"
              >
                {b.name}
              </Link>
            ))}
          </div>
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
  );
}
