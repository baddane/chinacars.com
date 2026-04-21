'use client';

import { Suspense, useState, useMemo, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, X, FileText, Car } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import Badge from '@/src/components/ui/Badge';
import { articles } from '@/src/data/articles';
import { models } from '@/src/data/models';
import { brands } from '@/src/data/brands';
import { formatArticleDate } from '@/src/data/articles';

type ResultType = 'article' | 'model' | 'brand';

interface SearchResult {
  type: ResultType;
  slug: string;
  href: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeTone: 'red' | 'green' | 'blue' | 'gray';
}

function normalise(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function matches(haystack: string, needle: string): boolean {
  return normalise(haystack).includes(normalise(needle));
}

function search(query: string): SearchResult[] {
  if (query.trim().length < 2) return [];
  const q = query.trim();
  const results: SearchResult[] = [];

  // Articles
  for (const a of articles) {
    if (matches(a.title, q) || matches(a.excerpt, q) || matches(a.category, q)) {
      results.push({
        type: 'article',
        slug: a.slug,
        href: `/actualites/${a.slug}`,
        title: a.title,
        subtitle: formatArticleDate(a.publishedAt),
        badge: a.category,
        badgeTone: 'red',
      });
    }
  }

  // Brands
  for (const b of brands) {
    if (matches(b.name, q) || matches(b.description, q)) {
      results.push({
        type: 'brand',
        slug: b.slug,
        href: `/marques/${b.slug}`,
        title: b.name,
        subtitle: b.headquarters,
        badge: 'Marque',
        badgeTone: 'gray',
      });
    }
  }

  // Models
  for (const m of models) {
    if (matches(m.name, q) || matches(m.brand, q) || matches(m.excerpt, q) || matches(m.segment, q)) {
      results.push({
        type: 'model',
        slug: m.slug,
        href: `/marques/${m.brandSlug}/${m.slug}`,
        title: `${m.brand} ${m.name}`,
        subtitle: m.price,
        badge: m.type === 'electrique' ? 'Électrique' : m.type === 'hybride-rechargeable' ? 'PHEV' : m.type === 'hybride' ? 'Hybride' : 'Thermique',
        badgeTone: m.type === 'electrique' ? 'green' : m.type.includes('hybride') ? 'blue' : 'gray',
      });
    }
  }

  return results;
}

const typeIcon: Record<ResultType, typeof FileText> = {
  article: FileText,
  model: Car,
  brand: Car,
};

function SearchInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQ);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Sync URL without hard navigation
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set('q', query.trim());
    } else {
      params.delete('q');
    }
    router.replace(`/recherche${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`, {
      scroll: false,
    });
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const results = useMemo(() => search(query), [query]);
  const hasQuery = query.trim().length >= 2;

  return (
    <div className="bg-white pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Recherche', url: '/recherche' }]} className="mb-8" />

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Recherche</h1>

        {/* Champ de recherche */}
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article, une marque, un modèle…"
            className="block w-full rounded-2xl border-0 py-4 pl-12 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 text-base"
            aria-label="Champ de recherche"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Effacer la recherche"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Résultats */}
        <div className="mt-8">
          {!hasQuery && (
            <p className="text-sm text-gray-400 text-center mt-16">
              Saisissez au moins 2 caractères pour lancer la recherche.
            </p>
          )}

          {hasQuery && results.length === 0 && (
            <p className="text-sm text-gray-500 text-center mt-16">
              Aucun résultat pour &laquo;&nbsp;{query}&nbsp;&raquo;.
            </p>
          )}

          {hasQuery && results.length > 0 && (
            <>
              <p className="text-sm text-gray-500 mb-6">
                {results.length} résultat{results.length > 1 ? 's' : ''} pour &laquo;&nbsp;{query}&nbsp;&raquo;
              </p>
              <ul className="divide-y divide-gray-100 rounded-2xl ring-1 ring-gray-100 overflow-hidden">
                {results.map((result) => {
                  const Icon = typeIcon[result.type];
                  return (
                    <li key={`${result.type}-${result.slug}`}>
                      <Link
                        href={result.href}
                        className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 group-hover:bg-red-50">
                          <Icon className="h-5 w-5 text-gray-400 group-hover:text-red-600" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-red-600">
                            {result.title}
                          </p>
                          <p className="text-xs text-gray-500 truncate">{result.subtitle}</p>
                        </div>
                        <Badge tone={result.badgeTone}>{result.badge}</Badge>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="bg-white pt-32 pb-24 min-h-screen" />}>
      <SearchInner />
    </Suspense>
  );
}
