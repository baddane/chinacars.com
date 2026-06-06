import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et de protection des données personnelles du site Véhicules Chinois. Informations sur la collecte, le traitement et la conservation de vos données.',
  alternates: { canonical: '/politique-de-confidentialite' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[{ name: 'Politique de confidentialité', url: '/politique-de-confidentialite' }]}
          className="mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Politique de confidentialité
        </h1>

        <div className="prose prose-gray mt-10 max-w-none text-gray-700">
          <p className="text-sm text-gray-500">Dernière mise à jour : 1er juin 2025</p>

          <h2 className="mt-8 text-xl font-bold text-gray-900">1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données collectées sur le site{' '}
            <strong>vehiculeschinois.com</strong> est Véhicules Chinois.
            <br />
            Contact :{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600 hover:underline">
              contact@vehiculeschinois.com
            </a>
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">2. Données collectées</h2>
          <p>Nous pouvons collecter les données suivantes :</p>
          <ul>
            <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages consultées, durée de visite (via cookies analytiques).</li>
            <li><strong>Données fournies volontairement</strong> : adresse e-mail (inscription à la newsletter), nom et message (formulaire de contact).</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">3. Finalités du traitement</h2>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Mesurer l&apos;audience et améliorer l&apos;expérience utilisateur.</li>
            <li>Envoyer la newsletter aux abonnés qui en ont fait la demande.</li>
            <li>Répondre aux demandes envoyées via le formulaire de contact.</li>
            <li>Assurer la sécurité et le bon fonctionnement du site.</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">4. Base légale</h2>
          <p>
            Le traitement des données repose sur votre consentement (newsletter, cookies non essentiels)
            et sur l&apos;intérêt légitime de l&apos;éditeur (statistiques de fréquentation, sécurité du site).
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">5. Durée de conservation</h2>
          <ul>
            <li><strong>Données de navigation</strong> : 13 mois maximum (conformément aux recommandations de la CNIL).</li>
            <li><strong>Données de contact</strong> : conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées sous 12 mois.</li>
            <li><strong>Données newsletter</strong> : conservées jusqu&apos;à votre désinscription.</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">6. Cookies</h2>
          <p>
            Le site utilise des cookies pour mesurer l&apos;audience et améliorer votre expérience.
            Vous pouvez accepter ou refuser les cookies non essentiels via le bandeau de consentement
            affiché lors de votre première visite. Pour en savoir plus, consultez notre{' '}
            <a href="/mentions-legales" className="text-red-600 hover:underline">page mentions légales</a>.
          </p>
          <p>Types de cookies utilisés :</p>
          <ul>
            <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site (pas de consentement requis).</li>
            <li><strong>Cookies analytiques</strong> : mesure d&apos;audience (Google Analytics ou équivalent).</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">7. Partage des données</h2>
          <p>
            Vos données personnelles ne sont ni vendues, ni louées, ni cédées à des tiers
            à des fins commerciales. Elles peuvent être partagées avec :
          </p>
          <ul>
            <li>Notre hébergeur (Vercel Inc.) pour le fonctionnement technique du site.</li>
            <li>Nos outils d&apos;analyse (pour les statistiques anonymisées).</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-gray-900">8. Vos droits</h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données personnelles.</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes.</li>
            <li><strong>Droit de suppression</strong> : demander l&apos;effacement de vos données.</li>
            <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré.</li>
            <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données.</li>
            <li><strong>Droit de retrait du consentement</strong> : retirer votre consentement à tout moment.</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600 hover:underline">
              contact@vehiculeschinois.com
            </a>.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">9. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
            pour protéger vos données contre tout accès non autorisé, modification, divulgation
            ou destruction. Le site utilise le protocole HTTPS pour sécuriser les échanges.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">10. Contact et réclamation</h2>
          <p>
            Pour toute question relative à cette politique, contactez-nous à{' '}
            <a href="mailto:contact@vehiculeschinois.com" className="text-red-600 hover:underline">
              contact@vehiculeschinois.com
            </a>.
          </p>
          <p>
            Si vous estimez que le traitement de vos données ne respecte pas la réglementation,
            vous pouvez introduire une réclamation auprès de la CNIL (
            <a href="https://www.cnil.fr" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">
              www.cnil.fr
            </a>).
          </p>
        </div>
      </div>
    </div>
  );
}
