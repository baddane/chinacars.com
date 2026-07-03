import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { BRANDS } from '@/src/lib/constants';
import { BRAND_DETAILS } from '@/src/data/brands';
import { articles } from '@/src/data/articles';

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
  const detail = BRAND_DETAILS[brand.slug];
  const description = detail
    ? `${brand.name} : ${detail.tagline}. Histoire, modèles, garanties et actualités.`
    : `Découvrez tous les modèles ${brand.name}, leurs caractéristiques et les dernières actualités.`;
  return {
    title: `${brand.name} — Histoire, modèles, garanties et actualités`,
    description,
    alternates: { canonical: `/marques/${brand.slug}` },
  };
}

export default function BrandPage({ params }: PageProps) {
  const brand = findBrand(params.brand);
  if (!brand) notFound();
  const detail = BRAND_DETAILS[brand.slug];

  const relatedArticles = detail
    ? detail.relatedArticles
        .map((slug) => articles.find((a) => a.slug === slug))
        .filter((a): a is NonNullable<typeof a> => Boolean(a))
    : [];

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

        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Marque {brand.country ? `· ${brand.country}` : ''}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {brand.name}
        </h1>

        {detail ? (
          <>
            <p className="mt-4 text-xl leading-8 text-gray-700">{detail.tagline}</p>

            {/* Chips d'identité */}
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Fondée
                </dt>
                <dd className="mt-1 text-sm font-medium text-gray-900">{detail.founded}</dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Groupe
                </dt>
                <dd className="mt-1 text-sm font-medium text-gray-900">{detail.parent}</dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Siège
                </dt>
                <dd className="mt-1 text-sm font-medium text-gray-900">{detail.headquarters}</dd>
              </div>
            </dl>

            {/* Présentation */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Présentation
              </h2>
              <div className="mt-4 space-y-4">
                {detail.intro.map((paragraph, i) => (
                  <p key={i} className="text-base leading-7 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600">
                <span className="font-semibold text-gray-900">Positionnement — </span>
                {detail.positioning}
              </p>
            </section>

            {/* Modèles */}
            <section id="modeles" className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Modèles clés
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {detail.models.map((model) => (
                  <div
                    key={model.name}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <p className="text-base font-semibold text-gray-900">{model.name}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-red-600">
                      {model.segment}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{model.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Points forts & garantie */}
            <section className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Points forts
                </h2>
                <ul className="mt-6 space-y-3">
                  {detail.strengths.map((strength) => (
                    <li key={strength} className="flex gap-3 text-base leading-7 text-gray-600">
                      <span aria-hidden="true" className="mt-1 text-red-600">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Garantie</h2>
                <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <p className="text-base leading-7 text-gray-700">{detail.warranty}</p>
                </div>
              </div>
            </section>

            {/* Articles liés (maillage interne) */}
            {relatedArticles.length > 0 && (
              <section className="mt-16 border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Nos articles sur {brand.name}
                </h2>
                <ul className="mt-6 space-y-3">
                  {relatedArticles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/actualites/${article.slug}`}
                        className="group flex items-start gap-3 text-base leading-7 text-gray-700 hover:text-red-600"
                      >
                        <ArrowRight
                          className="mt-1 h-4 w-4 flex-shrink-0 text-red-600"
                          aria-hidden="true"
                        />
                        <span className="font-medium group-hover:underline">
                          {article.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </>
        ) : (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            La fiche détaillée de {brand.name} sera bientôt disponible.
          </p>
        )}

        <div className="mt-16">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
          >
            Toute l&apos;actualité auto
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
