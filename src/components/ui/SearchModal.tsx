'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Search, X, Clock, Tag } from 'lucide-react';
import { articles } from '@/src/data/articles';
import { formatArticleDate } from '@/src/data/articles';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length >= 2
    ? articles.filter((a) => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
        );
      })
    : [];

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Rechercher sur ChinaCarsMA"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
          <Search className="h-5 w-5 text-gray-400 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Rechercher un article, une marque…"
            className="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la recherche"
            className="p-1 rounded-md text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length >= 2 && results.length === 0 && (
            <p className="px-5 py-10 text-center text-sm text-gray-500">
              Aucun résultat pour &ldquo;{query}&rdquo;
            </p>
          )}

          {results.length > 0 && (
            <ul role="listbox">
              {results.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/actualites/${article.slug}`}
                    onClick={onClose}
                    className="flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="grow min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {article.title}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-1.5 flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Tag className="h-3 w-3" aria-hidden="true" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {formatArticleDate(article.publishedAt)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {query.trim().length < 2 && (
            <div className="px-5 py-8 text-center text-sm text-gray-400">
              Tapez au moins 2 caractères pour lancer la recherche
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
