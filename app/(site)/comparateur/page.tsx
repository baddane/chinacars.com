import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { breadcrumbSchema } from '@/src/lib/seo/schemas';
import Link from 'next/link';
import Comparateur from '@/src/components/compare/Comparateur';
import { carLabel } from '@/src/data/cars';
import { VALID_DUELS } from '@/src/data/duels';

export const metadata: Metadata = {
  title: 'Comparateur intelligent de voitures chinoises',
  description:
    "Comparez deux voitures chinoises selon votre profil de conducteur et vos priorités. Notre comparateur intelligent calcule un score personnalisé, désigne la voiture faite pour vous et détaille toutes les caractéristiques techniques.",
  alternates: { canonical: '/comparateur' },
  openGraph: {
    type: 'website',
    title: 'Comparateur intelligent de voitures chinoises',
    description:
      'Dites-nous quel conducteur vous êtes, choisissez deux modèles, et découvrez lequel vous correspond le mieux — avec un score et un comparatif détaillé.',
    url: '/comparateur',
  },
};

export default function ComparateurPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <JsonLd
        id="comparateur"
        data={[
          breadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Comparateur', url: '/comparateur' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Comparateur intelligent de voitures chinoises',
            applicationCategory: 'AutomotiveApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
            description:
              "Comparateur qui recommande la voiture chinoise la plus adaptée au profil et aux priorités de l'utilisateur, avec un score et une fiche technique détaillée.",
          },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Comparateur', url: '/comparateur' }]} className="mb-8" />

        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Outil
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Comparateur intelligent
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Toutes les voitures ne se valent pas… pour <em>vous</em>. Indiquez quel
          conducteur vous êtes et ce que vous recherchez, choisissez deux modèles
          chinois, et notre comparateur calcule un <strong>score personnalisé</strong> pour
          désigner celui qui vous correspond le mieux — résumé d'abord, comparatif
          technique détaillé ensuite.
        </p>

        <div className="mt-14">
          <Comparateur />
        </div>

        {/* Comparaisons populaires (pages dédiées, maillage interne + SEO) */}
        <section className="mt-20 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Comparaisons populaires
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Des duels prêts à consulter, avec verdict et comparatif technique détaillé.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {VALID_DUELS.map((d) => (
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
      </div>
    </div>
  );
}
