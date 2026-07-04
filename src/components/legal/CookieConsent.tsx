'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie-consent';
export const OPEN_EVENT = 'open-cookie-consent';

type Choice = 'granted' | 'denied';

/** Met à jour Google Consent Mode v2 selon le choix de l'utilisateur. */
function updateConsent(choice: Choice) {
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  const consent = {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  };
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', consent);
  } else {
    (w.dataLayer = w.dataLayer || []).push(['consent', 'update', consent]);
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (stored === 'granted' || stored === 'denied') {
      updateConsent(stored);
    } else {
      setVisible(true);
    }

    const onOpen = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  function choose(choice: Choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    updateConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4"
      role="dialog"
      aria-modal="false"
      aria-label="Consentement aux cookies"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="sm:flex sm:items-start sm:gap-6">
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-900">Nous respectons votre vie privée</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Ce site utilise des cookies pour mesurer l&apos;audience et afficher des
              publicités (via Google&nbsp;AdSense). Les cookies non essentiels ne sont
              activés qu&apos;avec votre accord. Vous pouvez accepter, refuser, ou en
              savoir plus dans notre{' '}
              <Link href="/confidentialite" className="font-semibold text-red-600 hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div className="mt-4 flex flex-shrink-0 gap-3 sm:mt-0 sm:flex-col">
            <button
              type="button"
              onClick={() => choose('granted')}
              className="flex-1 rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:flex-none"
            >
              Accepter
            </button>
            <button
              type="button"
              onClick={() => choose('denied')}
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:flex-none"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
