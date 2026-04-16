import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { guidesPages } from '@/src/data/silos';

export const metadata: Metadata = {
  title: "Guides d'achat voitures chinoises en France",
  description:
    "Droits de douane UE, bonus écologique, fiabilité, décote, LOA : les guides pour acheter une voiture chinoise en France en 2026.",
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Guides', url: '/guides' }]} className="mb-8" />

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Guides d&apos;achat
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Droits de douane UE, bonus écologique, fiabilité à long terme, LOA
            sociale : les réponses indépendantes aux questions concrètes qu&apos;on
            se pose avant d&apos;acheter une voiture chinoise en France.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {guidesPages.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-3xl border border-gray-200 bg-gray-50 p-6 hover:border-red-500 hover:bg-white hover:shadow-lg transition"
            >
              {guide.priority && (
                <div className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase text-white mb-4">
                  <Star className="h-3 w-3" aria-hidden="true" />
                  Priorité
                </div>
              )}
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-600">
                {guide.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {guide.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-red-600 group-hover:gap-2 transition-all">
                Lire le guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
