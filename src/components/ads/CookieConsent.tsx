'use client';

import { useState, useEffect } from 'react';

const CONSENT_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }
  }

  function refuse() {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setVisible(false);
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-gray-900 border-t border-gray-700 p-4 sm:p-6 shadow-2xl">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-sm text-gray-300 flex-1">
          Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et
          afficher des publicités pertinentes. En cliquant sur « Accepter », vous consentez
          à l&apos;utilisation de ces cookies.{' '}
          <a href="/mentions-legales" className="text-red-400 underline hover:text-red-300">
            En savoir plus
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={refuse}
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 ring-1 ring-gray-600 hover:bg-gray-800 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
