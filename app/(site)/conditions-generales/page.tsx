import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site Véhicules Chinois. Règles d'accès, responsabilités et droits de propriété intellectuelle.",
  alternates: { canonical: '/conditions-generales' },
};

export default function TermsPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[{ name: "Conditions générales d'utilisation", url: '/conditions-generales' }]}
          className="mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Conditions générales d&apos;utilisation
        </h1>

        <div className="prose prose-gray mt-10 max-w-none text-gray-700">
          <p className="text-sm text-gray-500">Dernière mise à jour : 1er juin 2025</p>

          <h2 className="mt-8 text-xl font-bold text-gray-900">1. Objet</h2>
          <p>
            Les présentes Conditions Générales d&apos;Utilisation (CGU) définissent les modalités
            d&apos;accès et d&apos;utilisation du site <strong>vehiculeschinois.com</strong> (ci-après « le Site »),
            édité par Véhicules Chinois. L&apos;accès au Site implique l&apos;acceptation pleine et entière
            de ces CGU.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">2. Accès au site</h2>
          <p>
            Le Site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet.
            L&apos;éditeur se réserve le droit de suspendre ou de modifier tout ou partie du Site
            sans préavis, notamment pour des raisons de maintenance ou de mise à jour.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur le Site (articles, textes, images, vidéos,
            graphismes, logos, icônes) sont protégés par le droit de la propriété intellectuelle
            et sont la propriété exclusive de Véhicules Chinois ou de ses partenaires, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, distribution ou
            retransmission, totale ou partielle, est strictement interdite sans l&apos;autorisation
            écrite préalable de l&apos;éditeur.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">4. Contenu éditorial</h2>
          <p>
            Les articles, essais, comparatifs et guides publiés sur le Site sont fournis à titre
            informatif. L&apos;éditeur s&apos;efforce de fournir des informations exactes et à jour,
            mais ne garantit pas l&apos;exhaustivité, la précision ou l&apos;actualité des contenus.
          </p>
          <p>
            Les avis et opinions exprimés dans les articles reflètent le point de vue de la
            rédaction et ne constituent en aucun cas un conseil d&apos;achat personnalisé.
            L&apos;utilisateur est invité à effectuer ses propres recherches avant toute décision d&apos;achat.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">5. Liens hypertextes</h2>
          <p>
            Le Site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre
            indicatif et n&apos;engagent pas la responsabilité de l&apos;éditeur quant au contenu
            de ces sites externes. L&apos;utilisateur accède à ces sites sous sa propre responsabilité.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">6. Responsabilité</h2>
          <p>
            L&apos;éditeur ne saurait être tenu responsable des dommages directs ou indirects
            résultant de l&apos;accès ou de l&apos;utilisation du Site, y compris l&apos;inaccessibilité,
            les pertes de données, les dommages causés par des virus ou tout autre logiciel malveillant.
          </p>
          <p>
            L&apos;utilisateur est responsable de la protection de son équipement informatique
            et de ses données contre toute forme de virus ou d&apos;intrusion.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">7. Newsletter</h2>
          <p>
            L&apos;inscription à la newsletter est facultative et repose sur le consentement
            de l&apos;utilisateur. Ce dernier peut se désinscrire à tout moment en cliquant sur le lien
            de désinscription présent dans chaque e-mail ou en contactant l&apos;éditeur.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">8. Données personnelles</h2>
          <p>
            Le traitement des données personnelles est décrit dans notre{' '}
            <a href="/politique-de-confidentialite" className="text-red-600 hover:underline">
              Politique de confidentialité
            </a>.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">9. Modification des CGU</h2>
          <p>
            L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment.
            Les modifications prennent effet dès leur publication sur le Site.
            L&apos;utilisateur est invité à consulter régulièrement cette page.
          </p>

          <h2 className="mt-10 text-xl font-bold text-gray-900">10. Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. Tout litige relatif à
            l&apos;interprétation ou à l&apos;exécution des présentes sera de la compétence
            exclusive des tribunaux français.
          </p>
        </div>
      </div>
    </div>
  );
}
