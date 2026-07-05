import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import { IMAGE_CREDITS } from '@/src/data/imageCredits';

export const metadata: Metadata = {
  title: 'Crédits photos',
  description:
    'Crédits et licences des photographies de véhicules utilisées sur Véhicules Chinois (Wikimedia Commons, CC BY-SA 4.0).',
  alternates: { canonical: '/credits-images' },
};

export default function ImageCreditsPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[{ name: 'Crédits photos', url: '/credits-images' }]}
          className="mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Crédits photos
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Certaines photographies de véhicules publiées sur ce site proviennent de{' '}
          <a
            href="https://commons.wikimedia.org/"
            className="text-red-600 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Wikimedia Commons
          </a>{' '}
          et sont réutilisées sous licence libre. Conformément à ces licences, nous
          créditons ci-dessous chaque auteur, avec un lien vers la source et la
          licence. Les images peuvent avoir été recadrées ou redimensionnées pour
          l&apos;affichage.
        </p>

        <ul className="mt-10 divide-y divide-gray-100 border-t border-gray-100">
          {IMAGE_CREDITS.map((c) => (
            <li key={c.slug} className="py-4">
              <p className="font-semibold text-gray-900">{c.model}</p>
              <p className="mt-1 text-sm text-gray-600">
                © {c.author} —{' '}
                <a
                  href={c.licenseUrl}
                  className="text-red-600 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {c.license}
                </a>{' '}
                ·{' '}
                <a
                  href={c.sourceUrl}
                  className="text-red-600 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  source
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
