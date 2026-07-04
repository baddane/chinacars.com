import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales, éditeur, hébergeur et politique de confidentialité du site Véhicules Chinois.',
  alternates: { canonical: '/mentions-legales' },
};

export default function LegalNoticePage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[{ name: 'Mentions légales', url: '/mentions-legales' }]}
          className="mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Mentions légales
        </h1>

        <div className="prose prose-gray mt-10 max-w-none text-gray-700">
          <h2 className="text-xl font-bold text-gray-900">Éditeur du site</h2>
          <p>
            Le site <strong>vehiculeschinois.com</strong> est édité par Véhicules Chinois.
            <br />
            Directeur de la publication : le représentant légal de Véhicules Chinois.
            <br />
            Contact :{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600 hover:underline">
              contact@vehiculeschinois.com
            </a>
            .
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, États-Unis.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus publiés sur ce site (textes, images,
            graphismes, logo, vidéos) sont la propriété exclusive de
            Véhicules Chinois ou de ses partenaires, sauf mention contraire. Toute
            reproduction, représentation ou diffusion, totale ou partielle,
            sans autorisation écrite préalable est interdite.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">Données personnelles</h2>
          <p>
            Conformément à la loi 09-08 relative à la protection des personnes
            physiques à l&apos;égard du traitement des données à caractère
            personnel, vous disposez d&apos;un droit d&apos;accès, de rectification et
            de suppression des données vous concernant. Pour l&apos;exercer,
            contactez-nous à l&apos;adresse indiquée ci-dessus.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">Cookies et publicité</h2>
          <p>
            Le site utilise des cookies à des fins de mesure d&apos;audience et
            d&apos;affichage publicitaire (via Google AdSense). Les cookies non essentiels
            ne sont déposés qu&apos;après votre consentement. Pour le détail des données
            traitées, des cookies utilisés et de vos droits, consultez notre{' '}
            <a href="/confidentialite" className="text-red-600 hover:underline">
              politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
