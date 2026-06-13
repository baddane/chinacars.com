import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ComparateurTool from '@/src/components/comparateur/ComparateurTool';
import AdSlot from '@/src/components/ads/AdSlot';
import JsonLd from '@/src/components/seo/JsonLd';
import { faqSchema } from '@/src/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Comparateur de voitures chinoises vs européennes',
  description:
    'Comparez les voitures chinoises et européennes côte à côte : prix, autonomie, puissance, garantie. BYD, MG, Zeekr vs Volkswagen, Peugeot, BMW.',
  alternates: { canonical: '/comparateur' },
  openGraph: {
    title: 'Comparateur de voitures chinoises vs européennes',
    description:
      'Outil interactif : comparez prix, autonomie, performances et garantie entre voitures chinoises et européennes.',
  },
};

const faqs = [
  {
    question: 'Les voitures chinoises sont-elles moins chères que les européennes ?',
    answer:
      'En moyenne, les voitures chinoises électriques sont 15 à 30 % moins chères que leurs équivalentes européennes, principalement grâce à la maîtrise de la chaîne de production des batteries et des économies d\'échelle.',
  },
  {
    question: 'Les voitures chinoises sont-elles fiables ?',
    answer:
      'Les marques chinoises récentes (BYD, NIO, Zeekr) affichent des taux de fiabilité comparables aux marques européennes et obtiennent régulièrement 5 étoiles Euro NCAP. Les garanties longues (5 à 7 ans) offrent une sécurité supplémentaire.',
  },
  {
    question: 'Quelle est la garantie des voitures chinoises en Europe ?',
    answer:
      'MG et Chery offrent 7 ans / 150 000 km, BYD 6 ans / 150 000 km, NIO et Zeekr 5 ans / 120 000 km. C\'est 2 à 5 fois plus que la garantie standard européenne de 2 ans.',
  },
];

export default function ComparateurPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} id="comparateur-faq" />

      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumb
            items={[{ name: 'Comparateur', url: '/comparateur' }]}
            className="mb-8"
          />

          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">
              Outil interactif
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Comparateur de voitures
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comparez les voitures chinoises et européennes côte à côte. Prix,
              autonomie, performances, garantie — toutes les données pour faire
              le bon choix.
            </p>
          </div>

          <ComparateurTool />

          <AdSlot
            slot={process.env.NEXT_PUBLIC_ADSENSE_LISTING_SLOT || ''}
            format="horizontal"
            className="mt-16"
          />

          {/* FAQ section for SEO */}
          <section className="mt-20 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions fréquentes
            </h2>
            <dl className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </>
  );
}
