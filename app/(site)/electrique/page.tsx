import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Battery, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ArticleCard from '@/src/components/articles/ArticleCard';
import { articles } from '@/src/data/articles';
import { BRANDS } from '@/src/lib/constants';

export const metadata: Metadata = {
  title: 'Véhicules électriques chinois au Maroc',
  description:
    "L'essentiel sur les voitures électriques chinoises : autonomie, recharge, prix et disponibilité au Maroc. BYD, MG, Zeekr, NIO, XPeng.",
  alternates: { canonical: '/electrique' },
};

const evArticles = articles.filter((a) => a.categorySlug === 'electrique');

const evBrands = BRANDS.filter((b) =>
  ['byd', 'mg', 'zeekr', 'nio', 'xpeng', 'leapmotor'].includes(b.slug),
);

const stats = [
  { icon: TrendingUp, value: '+62 %', label: 'de croissance des VE au Maroc en 2023' },
  { icon: Battery, value: '620 km', label: "meilleure autonomie WLTP (BYD Han EV)" },
  { icon: Zap, value: '150 kW', label: 'recharge rapide DC disponible sur BYD & MG' },
  { icon: Clock, value: '30 min', label: 'pour passer de 20 % à 80 % en charge rapide' },
];

export default function ElectriquePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gray-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb
            items={[{ name: 'Électrique', url: '/electrique' }]}
            className="mb-8 [&_*]:text-gray-400 [&_a]:hover:text-white"
          />
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400 ring-1 ring-green-500/20 mb-6">
              <Zap className="h-4 w-4" aria-hidden="true" />
              100 % électrique
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Véhicules électriques chinois au Maroc
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Les constructeurs chinois dominent la révolution électrique mondiale.
              Autonomie record, recharge ultra-rapide, prix compétitifs : tout ce
              qu&apos;il faut savoir pour passer à l&apos;électrique au Maroc.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/comparatifs"
                className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-500"
              >
                Comparer les modèles
              </Link>
              <Link href="/guides" className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1">
                Guide d&apos;achat <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 text-center">
                <Icon className="mx-auto h-6 w-6 text-green-600 mb-3" aria-hidden="true" />
                <dd className="text-3xl font-bold tracking-tight text-gray-900">{value}</dd>
                <dt className="mt-1 text-sm text-gray-500">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* EV brands */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Les marques électriques à suivre</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {evBrands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/marques/${brand.slug}`}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-green-50 hover:ring-1 hover:ring-green-200 transition-all text-center group"
              >
                <span className="text-lg font-bold text-gray-900 group-hover:text-green-700">
                  {brand.name}
                </span>
                <span className="text-xs text-gray-500">{brand.modelsCount} modèles</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      {evArticles.length > 0 && (
        <div className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Actualités électrique
              </h2>
              <Link
                href="/actualites"
                className="hidden sm:flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all"
              >
                Tout voir <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {evArticles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} priority={index === 0} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
