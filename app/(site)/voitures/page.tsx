import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { voituresPages } from '@/src/data/silos';

export const metadata: Metadata = {
  title: 'Voitures chinoises en France : fiches modèles et comparateurs',
  description:
    "Fiches détaillées des voitures chinoises vendues en France : BYD Atto 3, Xpeng G6, MG ZS EV, comparateurs SUV et guide occasion.",
  alternates: { canonical: '/voitures' },
};

export default function VoituresPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Voitures', url: '/voitures' }]} className="mb-8" />

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Voitures chinoises en France
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fiches modèles détaillées, comparateurs et guide occasion : tout ce
            qu&apos;il faut savoir avant d&apos;acheter une voiture chinoise en
            France. Prix, autonomie WLTP, bonus, équipements.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {voituresPages.map((page) => (
            <Link
              key={page.slug}
              href={`/voitures/${page.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white hover:border-red-500 hover:shadow-xl transition"
            >
              {page.image && (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  {page.priority && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase text-white">
                      <Star className="h-3 w-3" aria-hidden="true" />
                      Priorité
                    </span>
                  )}
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-600">
                  {page.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">{page.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-red-600 group-hover:gap-2 transition-all">
                  Lire la fiche <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
