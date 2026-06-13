'use client';

import { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';

const DISMISSED_KEY = 'newsletter-popup-dismissed';
const SHOW_DELAY_MS = 30_000;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISSED_KEY);
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem(DISMISSED_KEY, Date.now().toString());
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      // silently fail
    }
    setSubmitted(true);
    setTimeout(dismiss, 3000);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <Mail className="mx-auto h-12 w-12 text-red-600" />
            <p className="mt-4 text-lg font-semibold text-gray-900">Merci !</p>
            <p className="mt-1 text-sm text-gray-500">
              Vous recevrez nos prochaines actus par email.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-red-100 p-2">
                <Mail className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Restez informé
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Recevez chaque semaine les dernières actus, essais et bons plans sur les
              voitures chinoises. Gratuit, sans spam.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500 transition-colors shrink-0"
              >
                S&apos;abonner
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
