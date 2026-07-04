import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, TrendingUp, ChevronRight } from 'lucide-react';
import ArticleCard from '@/src/components/articles/ArticleCard';
import { articles } from '@/src/data/articles';
import { BRANDS } from '@/src/lib/constants';
import { carLabel } from '@/src/data/cars';
import { VALID_DUELS } from '@/src/data/duels';

export const metadata: Metadata = {
  title: "L'actualité des voitures chinoises au Maroc",
  description:
    "Actualités, essais et guides d'achat sur les voitures chinoises (BYD, MG, Chery, Geely, GWM) au Maroc.",
  alternates: { canonical: '/' },
};

const featuredArticles = articles.slice(0, 3);
const latestArticle = articles[0];
const brandLogos = BRANDS.slice(0, 6);

const featuredDuels = [
  'byd-seal-vs-zeekr-001',
  'mg-zs-hybrid-vs-dacia-duster',
  'byd-atto-3-vs-xpeng-g6',
  'byd-tang-vs-chery-tiggo-8-pro',
  'mg3-hybrid-vs-renault-clio-e-tech',
]
  .map((slug) => VALID_DUELS.find((d) => d.slug === slug))
  .filter((d): d is NonNullable<typeof d> => Boolean(d));

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-900 pt-14">
        <Image
          src="https://www.wandaloo.com/files/Voiture-Neuve/zeekr-001.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-30"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-8 flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                {latestArticle.title}{' '}
                <Link
                  href={`/actualites/${latestArticle.slug}`}
                  className="font-semibold text-red-500"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Lire plus <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              L&apos;avenir de l&apos;automobile chinoise au Maroc
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Expertise, actualités et guides complets sur les marques qui
              révolutionnent le marché automobile. De BYD à MG, restez informé
              sur les dernières innovations.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/actualites"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Dernières actus
              </Link>
              <Link href="/marques" className="text-sm font-semibold leading-6 text-white">
                Voir les marques <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Marques</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Les constructeurs qui comptent
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {brandLogos.map((brand) => (
              <Link
                key={brand.slug}
                href={`/marques/${brand.slug}`}
                aria-label={`Voir la marque ${brand.name}`}
                className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-100 p-3">
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-gray-600">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                À la une
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Les informations essentielles sur le marché automobile chinois.
              </p>
            </div>
            <Link
              href="/actualites"
              className="hidden sm:flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
            >
              Toute l&apos;actualité <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2">
            <div>
              <h2 className="text-base font-semibold leading-7 text-red-500">
                Comparateur intelligent
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Quelle voiture est faite pour vous ?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Dites-nous quel conducteur vous êtes et ce que vous recherchez :
                notre comparateur note deux modèles selon <em>vos</em> priorités,
                désigne le gagnant et détaille tout — prix, autonomie, sécurité,
                coût d&apos;usage.
              </p>
              <Link
                href="/comparateur"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
              >
                Lancer le comparateur <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                Comparaisons populaires
              </p>
              <ul className="mt-4 space-y-3">
                {featuredDuels.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/comparateur/${d.slug}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-red-500/50 hover:text-white"
                    >
                      <span>
                        {carLabel(d.a)} <span className="text-gray-500">vs</span> {carLabel(d.b)}
                      </span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-500" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Pourquoi choisir une voiture chinoise ?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Le paysage automobile mondial change. Les constructeurs chinois
                ne se contentent plus de suivre, ils mènent l&apos;innovation,
                particulièrement dans l&apos;électrique.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Zap
                      className="absolute left-1 top-1 h-5 w-5 text-red-600"
                      aria-hidden="true"
                    />
                    Technologie de pointe.
                  </dt>{' '}
                  <dd className="inline">
                    Leader mondial des batteries et des systèmes
                    d&apos;infodivertissement intelligents.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Shield
                      className="absolute left-1 top-1 h-5 w-5 text-red-600"
                      aria-hidden="true"
                    />
                    Sécurité 5 étoiles.
                  </dt>{' '}
                  <dd className="inline">
                    La majorité des nouveaux modèles obtiennent les notes
                    maximales aux tests Euro NCAP.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <TrendingUp
                      className="absolute left-1 top-1 h-5 w-5 text-red-600"
                      aria-hidden="true"
                    />
                    Rapport qualité-prix imbattable.
                  </dt>{' '}
                  <dd className="inline">
                    Des équipements premium accessibles à des tarifs compétitifs.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <Image
                src="https://www.wandaloo.com/files/Voiture-Neuve/byd-han.jpg"
                alt="BYD Han — berline électrique chinoise haut de gamme"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à passer à l&apos;électrique ?
          </h2>
          <div className="flex items-center gap-x-6">
            <Link
              href="/guides"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-red-600 shadow-sm hover:bg-gray-100"
            >
              Consulter nos guides
            </Link>
            <Link
              href="/comparateur"
              className="text-sm font-semibold leading-6 text-white flex items-center gap-1"
            >
              Comparer les modèles <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
