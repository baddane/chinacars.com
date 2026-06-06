import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ComparateurTool from '@/src/components/comparateur/ComparateurTool';

export const metadata: Metadata = {
  title: 'Comparateur de voitures chinoises — Comparez fiabilité, prix, sécurité',
  description:
    'Comparez deux voitures côte à côte : fiabilité, robustesse, sécurité, technologie, prix de revente, avis usagers. BYD, MG, Chery, Geely vs Renault, Toyota, Hyundai. Résultats visuels pour vous aider à choisir.',
  alternates: { canonical: '/comparateur' },
  openGraph: {
    title: 'Comparateur de voitures — Véhicules Chinois',
    description: 'Outil interactif pour comparer deux voitures sur 10 critères : fiabilité, sécurité, technologie, prix et plus.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparateur de voitures — Véhicules Chinois',
    description: 'Comparez deux voitures sur 10 critères et trouvez la meilleure option pour vous.',
  },
};

export default function ComparateurPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Breadcrumb
          items={[{ name: 'Comparateur', url: '/comparateur' }]}
          className="mb-8"
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Comparateur de voitures
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Sélectionnez deux véhicules et comparez-les sur 10 critères clés :
            fiabilité, sécurité, technologie, confort et plus encore.
            Des résultats visuels pour vous aider à faire le bon choix.
          </p>
        </div>

        <ComparateurTool />
      </div>
    </div>
  );
}
