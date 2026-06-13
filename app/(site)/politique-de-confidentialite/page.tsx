import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et gestion des données personnelles du site Véhicules Chinois.',
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

        <div className="prose prose-gray mt-10 max-w-none text-gray-700">
          <p>
            <strong>Dernière mise à jour :</strong> juin 2026
          </p>
          <p>
            Le site <strong>vehiculeschinois.com</strong> (ci-après « le Site ») est édité par
            Véhicules Chinois. La présente politique de confidentialité décrit comment nous
            collectons, utilisons et protégeons vos données personnelles lorsque vous visitez
            notre site.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            1. Responsable du traitement
          </h2>
          <p>
            Le responsable du traitement des données est Véhicules Chinois, joignable à
            l&apos;adresse{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600">
              contact@vehiculeschinois.com
            </a>.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            2. Données collectées
          </h2>
          <p>Nous collectons les données suivantes :</p>
          <ul>
            <li>
              <strong>Données de navigation</strong> : adresse IP, type de navigateur, pages
              visitées, durée de la visite, via Google Analytics 4. Ces données sont
              anonymisées et ne permettent pas de vous identifier personnellement.
            </li>
            <li>
              <strong>Adresse email</strong> : uniquement si vous vous inscrivez à notre
              newsletter. Votre email est utilisé exclusivement pour vous envoyer nos
              actualités et n&apos;est jamais cédé à des tiers.
            </li>
            <li>
              <strong>Données du formulaire de contact</strong> : nom, email et message
              que vous nous adressez. Ces données sont utilisées uniquement pour
              répondre à votre demande.
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            3. Cookies et technologies similaires
          </h2>
          <p>Le Site utilise les cookies suivants :</p>
          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Cookies strictement nécessaires
          </h3>
          <ul>
            <li>
              <strong>cookie-consent</strong> : enregistre votre choix d&apos;acceptation ou
              de refus des cookies. Durée : permanente (localStorage).
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Cookies analytiques (Google Analytics 4)
          </h3>
          <ul>
            <li>
              <strong>_ga, _ga_*</strong> : permettent de mesurer l&apos;audience du site
              (nombre de visiteurs, pages les plus consultées, sources de trafic).
              Durée : 13 mois. Activés uniquement après votre consentement.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Cookies publicitaires (Google AdSense)
          </h3>
          <ul>
            <li>
              <strong>Cookies Google Ads</strong> : permettent d&apos;afficher des publicités
              personnalisées en fonction de vos centres d&apos;intérêt. Ces cookies sont
              déposés par Google et ses partenaires. Durée : variable (jusqu&apos;à 13 mois).
              Activés uniquement après votre consentement.
            </li>
          </ul>
          <p>
            Vous pouvez à tout moment modifier vos préférences en supprimant vos cookies
            de navigateur. Pour les publicités Google, vous pouvez gérer vos préférences sur{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600"
            >
              les paramètres de publicité Google
            </a>.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            4. Finalités du traitement
          </h2>
          <ul>
            <li>Mesure d&apos;audience et amélioration du site</li>
            <li>Affichage de publicités via Google AdSense</li>
            <li>Envoi de la newsletter (sur consentement explicite)</li>
            <li>Réponse aux demandes de contact</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            5. Base légale du traitement
          </h2>
          <p>
            Le traitement de vos données repose sur votre <strong>consentement</strong>{' '}
            (cookies analytiques et publicitaires, newsletter) et sur notre{' '}
            <strong>intérêt légitime</strong> (cookies nécessaires au fonctionnement du site,
            sécurité).
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            6. Partage des données
          </h2>
          <p>
            Vos données de navigation peuvent être partagées avec Google (Analytics et
            AdSense) dans le cadre de leurs services. Google agit en tant que sous-traitant
            et est soumis à ses propres{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600"
            >
              conditions de confidentialité
            </a>.
          </p>
          <p>
            Nous ne vendons, ne louons et ne cédons jamais vos données personnelles à des
            tiers à des fins commerciales.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            7. Durée de conservation
          </h2>
          <ul>
            <li>Données de navigation : 14 mois maximum</li>
            <li>Adresses email (newsletter) : jusqu&apos;à votre désinscription</li>
            <li>Données de contact : 12 mois après votre dernière interaction</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            8. Vos droits
          </h2>
          <p>
            Conformément au RGPD et à la loi marocaine 09-08, vous disposez des droits
            suivants :
          </p>
          <ul>
            <li>Droit d&apos;accès à vos données personnelles</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit de suppression de vos données</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600">
              contact@vehiculeschinois.com
            </a>.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            9. Sécurité
          </h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
            pour protéger vos données contre tout accès non autorisé, modification,
            divulgation ou destruction. Le site est servi en HTTPS et hébergé sur une
            infrastructure sécurisée (Vercel).
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">
            10. Contact
          </h2>
          <p>
            Pour toute question relative à cette politique de confidentialité, écrivez-nous
            à{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600">
              contact@vehiculeschinois.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
