'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const email = (
      event.currentTarget.elements.namedItem('email') as HTMLInputElement
    ).value.trim();

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error ?? "Une erreur est survenue.");
        setStatus('error');
        return;
      }

      setStatus('success');
      event.currentTarget.reset();
    } catch {
      setErrorMessage('Impossible de contacter le serveur. Réessayez.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="mt-6 text-sm font-semibold text-green-400">
        Merci ! Vous êtes bien inscrit à la newsletter.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="newsletter-email"
        autoComplete="email"
        required
        disabled={status === 'submitting'}
        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-500 disabled:opacity-50 sm:text-sm sm:leading-6"
        placeholder="votre@email.com"
      />
      <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Inscription…' : "S'abonner"}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400 sm:col-span-2">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
