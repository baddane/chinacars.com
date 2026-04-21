'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const STORAGE_KEY = 'vc-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage unavailable (SSR or private mode edge case)
    }
  }, []);

  function save(value: 'accepted' | 'declined') {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
    if (value === 'accepted') {
      window.dispatchEvent(new CustomEvent('cookie-consent', { detail: 'accepted' }));
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-700 bg-gray-950/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-gray-300 sm:max-w-2xl">
            Nous utilisons des cookies pour mesurer l&apos;audience et diffuser des publicités
            pertinentes (Google Analytics &amp; AdSense). Aucune donnée n&apos;est vendue à des
            tiers.{' '}
            <Link
              href="/politique-de-confidentialite"
              className="font-medium text-red-400 underline-offset-2 hover:underline"
            >
              En savoir plus
            </Link>
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => save('declined')}
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 ring-1 ring-inset ring-gray-600 transition hover:bg-gray-800 hover:ring-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              Refuser
            </button>
            <button
              onClick={() => save('accepted')}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Accepter
            </button>
            <button
              onClick={() => save('declined')}
              aria-label="Fermer"
              className="ml-1 rounded-md p-1.5 text-gray-500 transition hover:bg-gray-800 hover:text-gray-300"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
