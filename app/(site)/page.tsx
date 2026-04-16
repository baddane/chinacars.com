import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, TrendingUp, ChevronRight, Truck, Star } from 'lucide-react';
import ArticleCard from '@/src/components/articles/ArticleCard';
import { articles } from '@/src/data/articles';
import { BRANDS, SILOS } from '@/src/lib/constants';
import { utilitairesPages, guidesPages } from '@/src/data/silos';

export const metadata: Metadata = {
  title: "L'actualité des voitures chinoises en France",
  description:
    "Actualités, essais et guides d'achat sur les voitures et utilitaires chinois (BYD, MG, Xpeng, Leapmotor, Maxus, Denza) en France.",
  alternates: { canonical: '/' },
};

const featuredArticles = articles.slice(0, 3);
const brandLogos = BRANDS.slice(0, 6).map((brand) => ({
  name: brand.name,
  slug: brand.slug,
  logo: `https://picsum.photos/seed/${brand.slug}logo/200/200`,
}));
const priorityUtilitaires = utilitairesPages.filter((p) => p.priority).slice(0, 3);
const priorityGuides = guidesPages.filter((p) => p.priority).slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-900 pt-14">
        <Image
          src="https://picsum.photos/seed/carhero/1920/1080?blur=2"
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
                Denza ouvre son premier showroom en France.{' '}
                <Link href="/marques/denza" className="font-semibold text-red-500">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Lire plus <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Voitures et utilitaires chinois en France
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Fiches modèles, fiches marques, comparateurs et guides réglementaires
              (droits de douane UE, bonus, ZFE). Tout ce qu&apos;il faut savoir pour
              acheter chinois en France, en particulier comme en flotte pro.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/voitures"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
              >
                Explorer les voitures
              </Link>
              <Link href="/utilitaires" className="text-sm font-semibold leading-6 text-white">
                Silo utilitaires <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Navigation</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Les 5 grands silos
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Chaque silo couvre un univers distinct. Les articles ne se mélangent pas :
              maillage interne uniquement entre pages du même silo.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-5 lg:mx-0 lg:max-w-none">
            {SILOS.map((silo) => (
              <Link
                key={silo.slug}
                href={`/${silo.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-red-500 hover:bg-white transition"
              >
                <span className="text-lg font-bold text-gray-900 group-hover:text-red-600">
                  {silo.name}
                </span>
                <span className="text-sm text-gray-600">{silo.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Marques</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              13 marques chinoises en France
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {brandLogos.map((brand) => (
              <Link
                key={brand.slug}
                href={`/marques/${brand.slug}`}
                aria-label={`Voir la marque ${brand.name}`}
                className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 rounded-full"
              >
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  width={64}
                  height={64}
                  className="rounded-full object-cover shadow-lg"
                />
                <span className="text-sm font-bold text-gray-600">{brand.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/marques"
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
            >
              Toutes les marques <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-red-600">
                <Truck className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Opportunité #1
                </span>
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Utilitaires chinois
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Fourgons, pick-ups et flottes pro. Bonus utilitaire, ZFE,
                Maxus, BYD, Farizon : le silo le plus rémunérateur.
              </p>
            </div>
            <Link
              href="/utilitaires"
              className="hidden sm:flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
            >
              Tout le silo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {priorityUtilitaires.map((page) => (
              <Link
                key={page.slug}
                href={`/utilitaires/${page.slug}`}
                className="group rounded-2xl border border-gray-200 p-6 hover:border-red-500 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
                  <Star className="h-3 w-3" aria-hidden="true" />
                  Priorité
                </div>
                <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-red-600">
                  {page.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{page.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                À la une
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Les informations essentielles sur le marché automobile chinois en France.
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

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Guides d&apos;achat
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Droits de douane UE, bonus, fiabilité, LOA : les réponses aux questions
                qu&apos;on se pose avant de passer à la caisse.
              </p>
            </div>
            <Link
              href="/guides"
              className="hidden sm:flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
            >
              Tous les guides <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {priorityGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-2xl bg-gray-50 p-6 hover:bg-white hover:shadow-lg hover:border-red-500 border border-transparent transition"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Pourquoi choisir une voiture chinoise ?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Les constructeurs chinois mènent désormais l&apos;innovation
                mondiale, en particulier sur l&apos;électrique et les
                utilitaires pros.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Zap className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                    Technologie de pointe.
                  </dt>{' '}
                  <dd className="inline">
                    Leaders mondiaux des batteries LFP (Blade BYD) et des plateformes 800 V.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Shield className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                    Sécurité 5 étoiles Euro NCAP.
                  </dt>{' '}
                  <dd className="inline">
                    La quasi-totalité des modèles récents décroche la note maximale.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <TrendingUp className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                    Rapport qualité-prix imbattable.
                  </dt>{' '}
                  <dd className="inline">
                    Des équipements premium à des tarifs que l&apos;Europe n&apos;égale pas.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <Image
                src="https://picsum.photos/seed/interior/800/600"
                alt="Intérieur moderne d'une voiture chinoise"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à passer au chinois ?
          </h2>
          <div className="flex items-center gap-x-6">
            <Link
              href="/guides"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-red-600 shadow-sm hover:bg-gray-100"
            >
              Consulter nos guides
            </Link>
            <Link
              href="/voitures/comparateur-suv-chinois"
              className="text-sm font-semibold leading-6 text-white flex items-center gap-1"
            >
              Comparer les SUV <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
