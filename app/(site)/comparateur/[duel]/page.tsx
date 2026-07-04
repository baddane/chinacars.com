import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { breadcrumbSchema } from '@/src/lib/seo/schemas';
import StaticComparison from '@/src/components/compare/StaticComparison';
import { carLabel } from '@/src/data/cars';
import { getDuel, VALID_DUELS } from '@/src/data/duels';

interface PageProps {
  params: { duel: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return VALID_DUELS.map((d) => ({ duel: d.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const duel = getDuel(params.duel);
  if (!duel) return { title: 'Comparaison introuvable' };
  const title = `${carLabel(duel.a)} vs ${carLabel(duel.b)} : le comparatif`;
  const description = `${carLabel(duel.a)} ou ${carLabel(duel.b)} ? Comparatif complet : prix, autonomie, performances, sécurité, coût d'usage — et notre verdict sur le modèle qui l'emporte.`;
  const canonical = `/comparateur/${duel.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: 'website', title, description, url: canonical },
  };
}

export default function DuelPage({ params }: PageProps) {
  const duel = getDuel(params.duel);
  if (!duel) notFound();
  const { a, b } = duel;

  const others = VALID_DUELS.filter((d) => d.slug !== duel.slug).slice(0, 6);

  return (
    <div className="bg-white pt-32 pb-24">
      <JsonLd
        id="duel"
        data={[
          breadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Comparateur', url: '/comparateur' },
            { name: `${carLabel(a)} vs ${carLabel(b)}`, url: `/comparateur/${duel.slug}` },
          ]),
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Comparateur', url: '/comparateur' },
            { name: `${carLabel(a)} vs ${carLabel(b)}`, url: `/comparateur/${duel.slug}` },
          ]}
          className="mb-8"
        />

        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">Comparatif</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {carLabel(a)} <span className="text-gray-400">vs</span> {carLabel(b)}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Lequel choisir entre la {carLabel(a)} et la {carLabel(b)} ? On les départage
          sur le prix, l'autonomie, les performances, la sécurité et le coût d'usage —
          avec un verdict clair et le comparatif technique complet.
        </p>

        <div className="mt-14">
          <StaticComparison a={a} b={b} />
        </div>

        {/* Autres comparaisons (maillage interne) */}
        {others.length > 0 && (
          <section className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-xl font-bold text-gray-900">Autres comparaisons</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {others.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/comparateur/${d.slug}`}
                    className="block rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:border-red-400 hover:text-red-600"
                  >
                    {carLabel(d.a)} <span className="text-gray-400">vs</span> {carLabel(d.b)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
