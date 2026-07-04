import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    "Politique de confidentialité et de gestion des cookies du site Véhicules Chinois : données collectées, cookies publicitaires (Google AdSense), consentement et vos droits.",
  alternates: { canonical: '/confidentialite' },
};

const UPDATED = '4 juillet 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[{ name: 'Politique de confidentialité', url: '/confidentialite' }]}
          className="mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm text-gray-500">Dernière mise à jour : {UPDATED}</p>

        <div className="prose prose-gray mt-10 max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-red-600">
          <p>
            La présente politique décrit comment le site <strong>vehiculeschinois.com</strong>{' '}
            (« nous ») collecte, utilise et protège vos données personnelles, ainsi que
            l&apos;usage des cookies, notamment à des fins publicitaires. En naviguant sur
            le site, vous êtes invité à prendre connaissance de cette politique et à
            exprimer vos choix via notre bandeau de consentement.
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données est l&apos;éditeur du site,
            Véhicules Chinois. Pour toute question relative à vos données, vous pouvez
            nous écrire à{' '}
            <a href="mailto:contact@vehiculeschinois.com">contact@vehiculeschinois.com</a>.
          </p>

          <h2>2. Données que nous collectons</h2>
          <ul>
            <li>
              <strong>Données de navigation</strong> : pages consultées, date et heure,
              type d&apos;appareil et de navigateur, données de connexion — collectées via
              les cookies et technologies similaires (voir section 4).
            </li>
            <li>
              <strong>Données que vous nous transmettez</strong> : lorsque vous utilisez
              le formulaire de contact ou vous inscrivez à la newsletter (adresse e-mail,
              message).
            </li>
          </ul>
          <p>
            Nous ne collectons aucune donnée sensible et ne vendons pas vos données
            personnelles.
          </p>

          <h2>3. Finalités et bases légales</h2>
          <ul>
            <li>Fournir et améliorer le contenu du site (intérêt légitime) ;</li>
            <li>Mesurer l&apos;audience de manière agrégée (consentement) ;</li>
            <li>Afficher de la publicité, y compris personnalisée (consentement) ;</li>
            <li>Répondre à vos demandes via le formulaire de contact (intérêt légitime) ;</li>
            <li>Vous envoyer la newsletter si vous y avez souscrit (consentement).</li>
          </ul>

          <h2>4. Cookies et technologies similaires</h2>
          <p>Le site utilise différentes catégories de cookies :</p>
          <ul>
            <li>
              <strong>Cookies strictement nécessaires</strong> : indispensables au
              fonctionnement du site (dont la mémorisation de vos choix de consentement).
            </li>
            <li>
              <strong>Cookies de mesure d&apos;audience</strong> : pour comprendre
              l&apos;usage du site de façon agrégée.
            </li>
            <li>
              <strong>Cookies publicitaires</strong> : pour afficher des annonces et,
              avec votre accord, des annonces personnalisées.
            </li>
          </ul>
          <p>
            Les cookies non essentiels ne sont déposés qu&apos;<strong>après votre
            consentement</strong>, recueilli via notre bandeau. Vous pouvez modifier ou
            retirer votre choix à tout moment en cliquant sur «&nbsp;Gérer les
            cookies&nbsp;» en bas de chaque page.
          </p>

          <h2>5. Publicité — Google AdSense</h2>
          <p>
            Ce site fait appel à <strong>Google AdSense</strong>, une régie publicitaire
            fournie par Google. À ce titre :
          </p>
          <ul>
            <li>
              Google, en tant que fournisseur tiers, utilise des cookies (notamment le
              cookie <em>DoubleClick</em>) pour diffuser des annonces.
            </li>
            <li>
              Ces cookies permettent à Google et à ses partenaires de diffuser des
              annonces basées sur vos visites sur ce site et/ou d&apos;autres sites Internet.
            </li>
            <li>
              Nous avons déployé le <strong>mode Consentement (Consent Mode v2)</strong>{' '}
              de Google : tant que vous n&apos;avez pas donné votre accord, les cookies
              publicitaires et de personnalisation sont <strong>désactivés par défaut</strong>,
              et seules des annonces non personnalisées peuvent être diffusées.
            </li>
          </ul>
          <p>Vous pouvez à tout moment :</p>
          <ul>
            <li>
              désactiver la publicité personnalisée via les{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Paramètres des annonces Google
              </a>{' '};
            </li>
            <li>
              gérer vos préférences sur{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                www.aboutads.info
              </a>{' '}
              et{' '}
              <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">
                youronlinechoices.eu
              </a>{' '};
            </li>
            <li>
              consulter la{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
                politique de Google relative aux sites partenaires
              </a>.
            </li>
          </ul>

          <h2>6. Durée de conservation</h2>
          <p>
            Les données de contact sont conservées le temps nécessaire au traitement de
            votre demande. Les cookies ont une durée de vie limitée, généralement de
            quelques mois à treize mois maximum pour les cookies soumis à consentement.
          </p>

          <h2>7. Vos droits</h2>
          <p>
            Conformément au Règlement général sur la protection des données (RGPD) et à la
            loi marocaine 09-08 relative à la protection des données à caractère
            personnel, vous disposez d&apos;un droit d&apos;accès, de rectification,
            d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos
            données, ainsi que du droit de retirer votre consentement à tout moment. Pour
            exercer ces droits, écrivez-nous à{' '}
            <a href="mailto:contact@vehiculeschinois.com">contact@vehiculeschinois.com</a>.
          </p>

          <h2>8. Modifications</h2>
          <p>
            Cette politique peut être mise à jour pour refléter des évolutions légales ou
            techniques. La date de dernière mise à jour figure en haut de page.
          </p>

          <p className="mt-10 text-sm text-gray-500">
            Voir aussi nos{' '}
            <Link href="/mentions-legales">mentions légales</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
