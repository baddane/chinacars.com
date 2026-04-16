import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import type { PillarPage } from '@/src/data/silos';
import { actualitesDossiers } from '@/src/data/silos';

interface DossierPageProps {
  dossier: PillarPage;
}

export default function DossierPage({ dossier }: DossierPageProps) {
  const siblings = actualitesDossiers.filter((d) => d.slug !== dossier.slug);

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Actualités', url: '/actualites' },
            { name: dossier.title, url: `/actualites/${dossier.slug}` },
          ]}
          className="mb-8"
        />

        <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase text-red-700">
          Dossier
        </span>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {dossier.h1 ?? dossier.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">{dossier.excerpt}</p>

        {dossier.image && (
          <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={dossier.image}
              alt={dossier.title}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Plan du dossier
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Structure en H2 — rédaction en cours (Phase 1 quick wins).
          </p>
          <ol className="mt-6 space-y-3 text-base leading-7 text-gray-800 list-decimal list-inside">
            {dossier.outline.map((h2) => (
              <li key={h2}>{h2}</li>
            ))}
          </ol>
        </section>

        {siblings.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Autres dossiers
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/actualites/${s.slug}`}
                  className="group rounded-2xl border border-gray-200 p-5 hover:border-red-500 hover:shadow transition"
                >
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-red-600">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{s.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
          >
            Toutes les actualités <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
