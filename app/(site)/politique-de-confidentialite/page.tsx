import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et cookies de VéhiculesChinois — collecte de données, cookies Google Analytics et Google AdSense, droits RGPD.',
  alternates: { canonical: '/politique-de-confidentialite' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Politique de confidentialité', url: '/politique-de-confidentialite' },
          ]}
          className="mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm text-gray-500">Dernière mise à jour : avril 2026</p>

        <div className="prose prose-gray mt-10 max-w-none text-gray-700">
          <h2 className="mt-10 text-xl font-bold text-gray-900">1. Éditeur</h2>
          <p>
            Le présent site <strong>vehiculeschinois.com</strong> est édité par VéhiculesChinois.
            Pour toute question relative à vos données personnelles, contactez-nous à{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600 hover:underline">
              contact@vehiculeschinois.com
            </a>
            .
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">2. Données collectées</h2>
          <p>Nous collectons des données personnelles dans les cas suivants :</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Formulaire de contact :</strong> nom, adresse e-mail, sujet et message. Ces
              données sont utilisées exclusivement pour répondre à votre demande et ne sont pas
              conservées au-delà du traitement de celle-ci.
            </li>
            <li>
              <strong>Newsletter :</strong> adresse e-mail uniquement, pour l&apos;envoi de notre
              lettre d&apos;information. Vous pouvez vous désabonner à tout moment via le lien
              présent dans chaque e-mail.
            </li>
            <li>
              <strong>Mesure d&apos;audience :</strong> données de navigation anonymisées via
              Google Analytics (voir section 3).
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">3. Cookies et traceurs</h2>
          <p>
            Ce site utilise des cookies — de petits fichiers texte déposés sur votre terminal —
            à des fins de mesure d&apos;audience et d&apos;affichage publicitaire. Vous pouvez
            gérer vos préférences via la bannière affichée lors de votre première visite.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Cookies strictement nécessaires
          </h3>
          <p>
            Ces cookies garantissent le bon fonctionnement du site (mémorisation de vos préférences
            de consentement). Ils ne nécessitent pas votre accord préalable.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">Google Analytics 4</h3>
          <p>
            Nous utilisons Google Analytics 4, un service de mesure d&apos;audience fourni par
            Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Ce service
            collecte des données anonymisées sur la navigation (pages visitées, durée de session,
            pays, type d&apos;appareil) afin de nous aider à améliorer le contenu du site. Les
            adresses IP sont tronquées et aucune donnée permettant de vous identifier directement
            n&apos;est transmise à Google.
          </p>
          <p>
            Pour en savoir plus, consultez la{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              politique de confidentialité de Google
            </a>
            . Pour désactiver Google Analytics, installez l&apos;
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              extension de désactivation officielle
            </a>
            .
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">Google AdSense</h3>
          <p>
            Ce site participe au programme <strong>Google AdSense</strong>, géré par Google LLC.
            Ce service affiche des annonces publicitaires personnalisées en fonction de vos
            centres d&apos;intérêt. À cette fin, Google et ses partenaires déposent des cookies
            tiers (notamment le cookie DoubleClick/DART) pour diffuser des annonces pertinentes
            sur notre site et sur d&apos;autres sites du Réseau Display de Google.
          </p>
          <p>
            Vous pouvez désactiver la publicité personnalisée via les{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              Paramètres des annonces Google
            </a>{' '}
            ou le portail{' '}
            <a
              href="https://www.aboutads.info/choices"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              YourAdChoices
            </a>
            .
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">4. Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement général sur la protection des données (RGPD — UE 2016/679),
            vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Droit d&apos;accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, adressez-nous un message à{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600 hover:underline">
              contact@vehiculeschinois.com
            </a>
            . Nous nous engageons à répondre dans un délai de 30 jours.
          </p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une
            réclamation auprès de la CNIL (France) :{' '}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              cnil.fr
            </a>
            .
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">5. Partage des données</h2>
          <p>
            Nous ne vendons, ne louons ni ne cédons vos données personnelles à des tiers. Les
            seules transmissions sont celles décrites ci-dessus (Google Analytics, Google AdSense,
            Resend pour les e-mails transactionnels) et strictement limitées à leur finalité.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            6. Durée de conservation
          </h2>
          <p>
            Les données de contact sont supprimées dès le traitement de votre demande. Les adresses
            e-mail de la newsletter sont conservées jusqu&apos;à votre désinscription. Les données
            de navigation collectées par Google Analytics sont conservées selon la durée paramétrée
            dans notre propriété GA4 (14 mois par défaut).
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">7. Modifications</h2>
          <p>
            Nous nous réservons le droit de mettre à jour cette politique à tout moment. La date
            de dernière mise à jour est indiquée en haut de page. En cas de modification
            substantielle, une notice sera affichée sur le site.
          </p>
        </div>
      </div>
    </div>
  );
}
