import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { findPillar, siblingPages, guidesPages } from '@/src/data/silos';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return guidesPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = findPillar('guides', params.slug);
  if (!page) return { title: 'Guide introuvable' };
  return {
    title: page.title,
    description: page.excerpt,
    alternates: { canonical: `/guides/${page.slug}` },
  };
}

export default function GuideDetailPage({ params }: PageProps) {
  const page = findPillar('guides', params.slug);
  if (!page) notFound();

  const siblings = siblingPages('guides', page.slug, 3);

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Guides', url: '/guides' },
            { name: page.title, url: `/guides/${page.slug}` },
          ]}
          className="mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {page.h1 ?? page.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">{page.excerpt}</p>

        {page.image && (
          <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={page.image}
              alt={page.title}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Plan éditorial du guide
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Structure en H2 — rédaction en cours (Phase 1 quick wins).
          </p>
          <ol className="mt-6 space-y-3 text-base leading-7 text-gray-800 list-decimal list-inside">
            {page.outline.map((h2) => (
              <li key={h2}>{h2}</li>
            ))}
          </ol>
        </section>

        {siblings.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Autres guides
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/guides/${s.slug}`}
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
            href="/guides"
            className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
          >
            Retour aux guides <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
