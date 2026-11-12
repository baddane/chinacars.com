'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { normalize, type SearchItem, type SearchType } from '@/src/lib/searchTypes';

interface Props {
  open: boolean;
  onClose: () => void;
}

const GROUP_ORDER: SearchType[] = ['Article', 'Comparaison', 'Marque'];
const GROUP_LABELS: Record<SearchType, string> = {
  Article: 'Articles',
  Comparaison: 'Comparaisons',
  Marque: 'Marques',
};
const MAX_PER_GROUP = 6;

// Index chargé une seule fois, à la première ouverture (partagé entre montages).
let indexPromise: Promise<SearchItem[]> | null = null;
function loadIndex(): Promise<SearchItem[]> {
  if (!indexPromise) {
    indexPromise = fetch('/search-index.json')
      .then((r) => (r.ok ? r.json() : []))
      .catch(() => {
        indexPromise = null;
        return [];
      });
  }
  return indexPromise;
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<SearchItem[]>([]);

  useEffect(() => {
    if (open && index.length === 0) loadIndex().then(setIndex);
  }, [open, index.length]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const grouped = useMemo(() => {
    const q = normalize(query.trim());
    if (q.length < 2) return null;
    const terms = q.split(/\s+/);
    const matches = index.filter((item) => terms.every((t) => item.keywords.includes(t)));
    const byType = {} as Record<SearchType, SearchItem[]>;
    for (const type of GROUP_ORDER) byType[type] = [];
    for (const m of matches) {
      if (byType[m.type].length < MAX_PER_GROUP) byType[m.type].push(m);
    }
    const total = matches.length;
    return { byType, total };
  }, [query, index]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-gray-900/60 p-4 pt-[10vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-gray-200 px-4">
          <Search className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article, une marque, une comparaison…"
            className="w-full bg-transparent py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
            aria-label="Rechercher"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la recherche"
            className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {!grouped && (
            <p className="px-5 py-8 text-center text-sm text-gray-500">
              Tapez au moins 2 caractères pour lancer la recherche.
            </p>
          )}
          {grouped && grouped.total === 0 && (
            <p className="px-5 py-8 text-center text-sm text-gray-500">
              Aucun résultat pour «&nbsp;{query.trim()}&nbsp;».
            </p>
          )}
          {grouped &&
            grouped.total > 0 &&
            GROUP_ORDER.filter((type) => grouped.byType[type].length > 0).map((type) => (
              <div key={type} className="py-2">
                <p className="px-5 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {GROUP_LABELS[type]}
                </p>
                <ul>
                  {grouped.byType[type].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between gap-4 px-5 py-2.5 hover:bg-gray-50"
                      >
                        <span className="min-w-0 truncate text-sm font-medium text-gray-900">
                          {item.title}
                        </span>
                        <span className="flex-shrink-0 text-xs text-gray-400">{item.subtitle}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
