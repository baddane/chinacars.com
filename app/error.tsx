'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-base font-semibold text-red-600">Erreur</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Une erreur est survenue
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-7 text-gray-600">
        Désolé, quelque chose s&apos;est mal passé. Veuillez réessayer ou
        revenir à l&apos;accueil.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-red-600"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
