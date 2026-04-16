import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales, éditeur, hébergeur et politique de confidentialité du site VehiculesChinois.com.',
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
            Le site <strong>vehiculeschinois.com</strong> est édité par la rédaction VehiculesChinois.com.
            <br />
            Directeur de la publication : à renseigner.
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
            VehiculesChinois.com ou de ses partenaires, sauf mention contraire. Toute
            reproduction, représentation ou diffusion, totale ou partielle,
            sans autorisation écrite préalable est interdite.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">Données personnelles (RGPD)</h2>
          <p>
            Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
            Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès,
            de rectification, d&apos;effacement, de portabilité, de limitation
            et d&apos;opposition au traitement de vos données personnelles.
            Pour l&apos;exercer, contactez-nous à l&apos;adresse indiquée
            ci-dessus ou déposez une réclamation auprès de la CNIL
            (www.cnil.fr).
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">Cookies</h2>
          <p>
            Le site utilise des cookies de mesure d&apos;audience et, le cas
            échéant, des cookies publicitaires soumis à votre consentement
            préalable (bannière cookies). Vous pouvez à tout moment retirer
            votre consentement ou configurer vos préférences via votre navigateur.
          </p>
        </div>
      </div>
    </div>
  );
}
