'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  }

  function refuse() {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-gray-900/95 backdrop-blur-sm px-6 py-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-gray-300">
          Ce site utilise des cookies pour mesurer l&apos;audience et améliorer votre expérience.
          En poursuivant votre navigation, vous acceptez leur utilisation.{' '}
          <Link
            href="/politique-de-confidentialite"
            className="font-semibold text-white underline hover:text-red-400"
          >
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={refuse}
            className="rounded-md px-4 py-2 text-sm font-semibold text-gray-300 ring-1 ring-gray-600 hover:bg-gray-800"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
