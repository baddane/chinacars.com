import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page introuvable (404)',
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-base font-semibold text-red-600">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-7 text-gray-600">
        Cette page a peut-être été déplacée ou supprimée. Revenez à
        l&apos;accueil ou parcourez les dernières actualités.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/actualites"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-red-600"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Voir les actualités
        </Link>
      </div>
    </section>
  );
}
