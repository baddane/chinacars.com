import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, TrendingUp, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ArticleCard from '@/src/components/articles/ArticleCard';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Voitures chinoises au Maroc — Prix, importation et SAV',
  description:
    'Tout sur les voitures chinoises au Maroc : prix officiels, réseau de concessionnaires, fiscalité, importation et service après-vente.',
  alternates: { canonical: '/maroc' },
};

const marocArticles = articles.filter(
  (a) => a.categorySlug === 'maroc' || a.categorySlug === 'guide',
);

const marketStats = [
  { icon: TrendingUp, value: '8,3 %', label: 'de part de marché des marques chinoises en 2024' },
  { icon: MapPin, value: '6', label: 'marques chinoises avec réseau de concessionnaires officiel' },
  { icon: ShieldCheck, value: '5 ★', label: 'Euro NCAP pour BYD, MG et Chery' },
  { icon: Wrench, value: '2 ans', label: 'garantie constructeur minimum sur tous les modèles' },
];

const keyInfos = [
  {
    title: 'Importation',
    description:
      "Les véhicules achetés chez un concessionnaire agréé sont déjà dédouanés. Pour une importation personnelle depuis la Chine, comptez 17,5 % de droits de douane + 20 % de TVA + taxe parafiscale.",
    href: '/actualites/importer-voiture-chinoise-maroc-2024',
    linkLabel: 'Guide complet',
  },
  {
    title: 'Fiscalité & vignette',
    description:
      "La taxe spéciale annuelle (vignette) est calculée sur la puissance fiscale. Les VE bénéficient d'une réduction de 50 % sur la vignette et sont exonérés de la taxe sur la pollution.",
    href: '/actualites/voiture-chinoise-maroc-fiscalite-taxes',
    linkLabel: 'Détails fiscaux',
  },
  {
    title: 'Réseau SAV',
    description:
      "BYD, MG et Chery disposent de réseaux après-vente dans les principales villes (Casablanca, Rabat, Marrakech, Fès). Pièces détachées disponibles sous 48 h.",
    href: '/actualites/concessionnaires-voitures-chinoises-maroc',
    linkLabel: 'Trouver un concessionnaire',
  },
];

export default function MarocPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-red-700 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb
            items={[{ name: 'Maroc', url: '/maroc' }]}
            className="mb-8 [&_*]:text-red-200 [&_a]:hover:text-white"
          />
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/20 mb-6">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Marché marocain
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Voitures chinoises au Maroc
            </h1>
            <p className="mt-6 text-lg leading-8 text-red-100">
              Prix, concessionnaires, fiscalité, importation : tout ce qu&apos;il faut savoir
              pour acheter une voiture chinoise au Maroc en toute sérénité.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/guides"
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-50"
              >
                Nos guides pratiques
              </Link>
              <Link href="/marques" className="text-sm font-semibold text-red-100 hover:text-white flex items-center gap-1">
                Voir les marques <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {marketStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 text-center">
                <Icon className="mx-auto h-6 w-6 text-red-600 mb-3" aria-hidden="true" />
                <dd className="text-3xl font-bold tracking-tight text-gray-900">{value}</dd>
                <dt className="mt-1 text-sm text-gray-500">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Key info cards */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Informations pratiques</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {keyInfos.map((info) => (
              <div
                key={info.title}
                className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-sm leading-7 text-gray-600 mb-6">{info.description}</p>
                <Link
                  href={info.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:underline"
                >
                  {info.linkLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      {marocArticles.length > 0 && (
        <div className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Actualités Maroc
              </h2>
              <Link
                href="/actualites"
                className="hidden sm:flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
              >
                Tout voir <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {marocArticles.slice(0, 6).map((article, index) => (
                <ArticleCard key={article.slug} article={article} priority={index === 0} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
