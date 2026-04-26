import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { faqSchema } from '@/src/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Guides pratiques — Voitures chinoises au Maroc',
  description:
    "Importation, homologation, assurance, entretien : nos guides pour tout savoir sur l'achat d'une voiture chinoise au Maroc.",
  alternates: { canonical: '/guides' },
};

const faqs = [
  {
    question: 'Les voitures chinoises sont-elles fiables ?',
    answer:
      "Oui. Les grandes marques comme BYD, MG et Chery ont considérablement amélioré leur qualité de fabrication. Plusieurs modèles obtiennent 5 étoiles Euro NCAP. Les études de fiabilité à long terme (après 3-5 ans) montrent des résultats comparables aux marques japonaises d'entrée de gamme.",
  },
  {
    question: "Comment importer une voiture chinoise au Maroc ?",
    answer:
      "Pour une importation personnelle depuis la Chine, vous devez vous acquitter de droits de douane (17,5 %), TVA (20 %) et une taxe parafiscale. La voiture doit ensuite passer une réception technique au NARSA pour homologation. Acheter chez un concessionnaire agréé au Maroc simplifie grandement les démarches.",
  },
  {
    question: 'Quelle garantie pour une voiture chinoise au Maroc ?',
    answer:
      "La garantie constructeur est généralement de 2 ans / kilométrage illimité chez les concessionnaires officiels. BYD offre 8 ans sur la batterie de ses véhicules électriques. MG propose jusqu'à 5 ans de garantie sur certains modèles.",
  },
  {
    question: 'Les pièces détachées sont-elles disponibles au Maroc ?',
    answer:
      "Pour les marques disposant d'un réseau officiel (BYD, MG, Chery, GWM), les pièces sont disponibles sous 24 à 72 h dans les grandes villes. Pour les marques sans réseau officiel, il faut compter 1 à 3 semaines pour l'importation des pièces depuis la Chine.",
  },
  {
    question: 'Comment financer une voiture chinoise au Maroc ?',
    answer:
      "Les concessionnaires agréés proposent des solutions de financement via des partenaires bancaires marocains (CIH, Banque Populaire, Crédit du Maroc). Des offres avec LOA (Location avec Option d'Achat) commencent à apparaître, notamment chez BYD et MG.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} id="faq-guides" />

      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Guides', url: '/guides' }]} className="mb-8" />

          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Guides pratiques
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Importation, homologation, assurance, entretien : tout ce qu&apos;il faut savoir
              pour acheter et vivre avec une voiture chinoise au Maroc.
            </p>
            <Link
              href="/marques"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              Voir les marques <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
