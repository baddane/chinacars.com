import type { Metadata } from 'next';
import { Target, Users, Newspaper } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { organizationSchema } from '@/src/lib/seo/schemas';

const values = [
  {
    icon: Target,
    title: 'Indépendance éditoriale',
    text: 'Aucun constructeur ne finance nos tests. Nos avis sont libres et documentés.',
  },
  {
    icon: Newspaper,
    title: 'Expertise terrain',
    text: "Essais en conditions réelles, visites de salons internationaux et suivi des lancements sur tous les marchés francophones.",
  },
  {
    icon: Users,
    title: 'Couverture francophone',
    text: 'France, Belgique, Suisse, Maroc, Afrique : nos guides s\'adaptent aux réalités de chaque marché.',
  },
];

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "Véhicules Chinois est le média indépendant de référence sur l'automobile chinoise dans le monde francophone.",
  alternates: { canonical: '/a-propos' },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} id="about-org" />

      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'À propos', url: '/a-propos' }]} className="mb-8" />

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            À propos de Véhicules Chinois
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Véhicules Chinois est le premier média francophone dédié à l&apos;automobile
            chinoise dans le monde francophone. Depuis notre lancement, nous décryptons un marché
            en pleine révolution : l&apos;arrivée massive des constructeurs chinois,
            l&apos;explosion du véhicule électrique et les nouvelles habitudes
            d&apos;achat des automobilistes européens.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Notre mission
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Fournir aux automobilistes francophones une information
            fiable, documentée et indépendante sur les marques, modèles et
            technologies venues de Chine. Nous testons, comparons et
            contextualisons pour vous aider à faire les bons choix, que vous
            soyez en France, en Belgique, en Suisse, au Maroc ou ailleurs.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <value.icon
                  className="h-8 w-8 text-red-600"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
