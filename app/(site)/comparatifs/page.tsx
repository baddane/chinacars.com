import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { faqSchema } from '@/src/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Comparatifs voitures chinoises au Maroc',
  description:
    'Retrouvez tous nos comparatifs détaillés entre les voitures chinoises vendues au Maroc et leurs rivales. BYD vs MG, électrique vs hybride.',
  alternates: { canonical: '/comparatifs' },
};

const faqs = [
  {
    question: 'Quelle est la meilleure voiture chinoise au Maroc en 2024 ?',
    answer:
      "La BYD Atto 3 est le modèle le plus complet pour une usage quotidien avec 420 km d'autonomie et un réseau de service. Pour un budget plus serré, la MG4 Electric à partir de 280 000 DH offre le meilleur rapport équipement/prix. En SUV thermique, le Chery Tiggo 8 Pro 7 places domine sa catégorie.",
  },
  {
    question: 'BYD ou MG : laquelle choisir ?',
    answer:
      "BYD convient mieux si vous cherchez une autonomie maximale et une technologie de pointe (batterie Blade, plateforme e-Platform 3.0). MG est un excellent choix si vous privilégiez le réseau après-vente (présent dans plus de villes) et le prix d'achat plus accessible. Les deux marques obtiennent 5 étoiles Euro NCAP.",
  },
  {
    question: 'Les voitures chinoises sont-elles moins chères que les européennes ?',
    answer:
      "En moyenne 20 à 30 % moins chères à équipement équivalent. Une BYD Atto 3 avec toit panoramique, siège massant et ADAS complet coûte environ 350 000 DH là où une Volkswagen ID.4 équivalente dépasse 450 000 DH. L'écart se réduit sur le marché de l'occasion.",
  },
  {
    question: 'Quelle autonomie réelle pour un VE chinois au Maroc ?',
    answer:
      "En conditions réelles marocaines (chaleur estivale, climatisation), comptez 80 à 85 % de l'autonomie WLTP annoncée. Pour la BYD Atto 3 (420 km WLTP), cela représente environ 340-360 km réels. Sur autoroute à 120 km/h, la consommation augmente de 20 à 25 % par rapport au cycle WLTP.",
  },
  {
    question: 'Comment choisir entre thermique et électrique chez les marques chinoises ?',
    answer:
      "Choisissez l'électrique si vous faites moins de 400 km par trajet et avez accès à une recharge à domicile ou au bureau. Pour les longs trajets fréquents ou si vous habitez hors des grandes villes, un hybride rechargeable (PHEV) comme le Chery Tiggo 7 Pro PHEV offre le meilleur des deux mondes.",
  },
];

export default function ComparatifsPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} id="faq-comparatifs" />

      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Comparatifs', url: '/comparatifs' }]} className="mb-8" />

          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Comparatifs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              BYD vs MG, électrique vs hybride, chinoise vs européenne : nos analyses
              détaillées pour choisir le bon véhicule selon votre usage au Maroc.
            </p>
            <Link
              href="/actualites"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              Voir l&apos;actualité <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
            <dl className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-gray-50 ring-1 ring-gray-200 open:ring-red-200 open:bg-red-50 transition-colors"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-gray-900 list-none [&::-webkit-details-marker]:hidden">
                    <dt>{faq.question}</dt>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <dd className="px-6 pb-6 text-sm leading-7 text-gray-600">{faq.answer}</dd>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
