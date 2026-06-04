import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, TrendingUp, ChevronRight, Star, BarChart3 } from 'lucide-react';
import { resolveArticleImage } from '@/src/lib/images';
import ArticleCard from '@/src/components/articles/ArticleCard';
import Badge from '@/src/components/ui/Badge';
import { articles } from '@/src/data/articles';
import { BRANDS } from '@/src/lib/constants';

export const metadata: Metadata = {
  title: "Véhicules Chinois — Actualités, essais et guides sur l'automobile chinoise",
  description:
    "Le média francophone de référence sur les voitures chinoises. Actualités, essais, comparatifs et guides d'achat sur BYD, MG, Chery, Geely, GWM, Zeekr, NIO et XPeng.",
  alternates: { canonical: '/' },
};

const heroArticle = articles[0];
const secondaryHeroArticles = articles.slice(1, 4);
const latestArticles = articles.slice(4, 10);
const essais = articles.filter((a) => a.categorySlug === 'essai').slice(0, 4);
const comparatifs = articles.filter((a) => a.categorySlug === 'comparatif').slice(0, 3);
const guides = articles.filter((a) => a.categorySlug === 'guide').slice(0, 4);
const brandLogos = BRANDS;

export default function Home() {
  const heroImage = resolveArticleImage(heroArticle.image, heroArticle.slug, heroArticle.categorySlug);

  return (
    <>
      {/* Hero — style magazine avec article principal + grille latérale */}
      <section className="relative bg-gray-900 pt-20">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Article principal */}
            <div className="lg:col-span-3 relative">
              <Link
                href={`/actualites/${heroArticle.slug}`}
                className="block relative overflow-hidden rounded-2xl group focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={heroImage}
                    alt={heroArticle.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <Badge tone="red">{heroArticle.category}</Badge>
                  <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {heroArticle.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-300 line-clamp-2 max-w-2xl">
                    {heroArticle.excerpt}
                  </p>
                </div>
              </Link>
            </div>
            {/* Articles secondaires */}
            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              {secondaryHeroArticles.map((article) => {
                const img = resolveArticleImage(article.image, article.slug, article.categorySlug);
                return (
                  <Link
                    key={article.slug}
                    href={`/actualites/${article.slug}`}
                    className="relative overflow-hidden rounded-xl group flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
                  >
                    <div className="relative w-32 sm:w-40 shrink-0">
                      <Image
                        src={img}
                        alt={article.title}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4 bg-gray-800">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                        {article.category}
                      </span>
                      <h3 className="text-sm font-bold text-white leading-snug line-clamp-3">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Barre de marques */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide py-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider shrink-0">Marques</span>
            {brandLogos.map((brand) => (
              <Link
                key={brand.slug}
                href={`/marques/${brand.slug}`}
                className="flex items-center gap-2 shrink-0 grayscale hover:grayscale-0 transition-all"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-100 p-1.5">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-gray-600 hidden sm:block">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dernières actualités */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Dernières actualités
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Nouveautés, lancements et tendances du marché automobile chinois.
              </p>
            </div>
            <Link
              href="/actualites"
              className="hidden sm:flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all"
            >
              Toutes les actus <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} priority={index < 2} />
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              Toutes les actualités <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Essais récents */}
      {essais.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-red-600" aria-hidden="true" />
                  <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Essais</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Nos derniers essais
                </h2>
              </div>
              <Link
                href="/essais"
                className="hidden sm:flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all"
              >
                Tous les essais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {essais.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparatifs */}
      {comparatifs.length > 0 && (
        <section className="py-16 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-red-500" aria-hidden="true" />
                  <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Comparatifs</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Face-à-face
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Des duels et comparatifs détaillés pour vous aider à choisir.
                </p>
              </div>
              <Link
                href="/comparatifs"
                className="hidden sm:flex items-center gap-2 text-red-500 font-bold text-sm hover:gap-3 transition-all"
              >
                Tous les comparatifs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {comparatifs.map((article) => {
                const img = resolveArticleImage(article.image, article.slug, article.categorySlug);
                return (
                  <Link
                    key={article.slug}
                    href={`/actualites/${article.slug}`}
                    className="group relative overflow-hidden rounded-2xl bg-gray-800 ring-1 ring-white/10 hover:ring-red-500/50 transition-all"
                  >
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={img}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 p-5">
                      <Badge tone="red">Comparatif</Badge>
                      <h3 className="mt-2 text-lg font-bold text-white leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center text-xs font-semibold text-red-400 group-hover:gap-2 transition-all">
                        Lire le comparatif <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Pourquoi les voitures chinoises */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Décryptage</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Pourquoi l&apos;automobile chinoise change la donne
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Les constructeurs chinois ne se contentent plus de suivre — ils redéfinissent les standards
                de l&apos;industrie, de la batterie au logiciel embarqué.
              </p>
              <dl className="mt-8 space-y-6 text-sm leading-6 text-gray-600">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Zap className="absolute left-0 top-0.5 h-5 w-5 text-red-600" aria-hidden="true" />
                    Technologie de pointe.
                  </dt>{' '}
                  <dd className="inline">
                    Leaders mondiaux des batteries, de la recharge ultra-rapide 800V et des systèmes intelligents.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Shield className="absolute left-0 top-0.5 h-5 w-5 text-red-600" aria-hidden="true" />
                    Sécurité 5 étoiles.
                  </dt>{' '}
                  <dd className="inline">
                    La majorité des nouveaux modèles obtiennent les notes maximales aux tests Euro NCAP.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <TrendingUp className="absolute left-0 top-0.5 h-5 w-5 text-red-600" aria-hidden="true" />
                    Rapport qualité-prix.
                  </dt>{' '}
                  <dd className="inline">
                    Des équipements premium à des tarifs très compétitifs face aux marques européennes et coréennes.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <Image
                src="https://www.wandaloo.com/files/Voiture-Neuve/byd-han.jpg"
                alt="BYD Han — berline électrique haut de gamme"
                width={800}
                height={600}
                className="w-full rounded-2xl shadow-xl ring-1 ring-gray-400/10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guides pratiques */}
      {guides.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Guides pratiques
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Tout ce qu&apos;il faut savoir avant d&apos;acheter une voiture chinoise.
                </p>
              </div>
              <Link
                href="/guides"
                className="hidden sm:flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all"
              >
                Tous les guides <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {guides.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Newsletter */}
      <section className="bg-red-600 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Restez informé chaque semaine
            </h2>
            <p className="mt-2 text-sm text-red-100">
              Nouveautés, essais exclusifs et bons plans — directement dans votre boîte mail.
            </p>
          </div>
          <form className="flex gap-3 w-full md:w-auto" action="/api/newsletter" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="votre@email.com"
              className="min-w-0 flex-1 md:w-64 rounded-lg border-0 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-red-200 ring-1 ring-white/20 focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-red-600 shadow-sm hover:bg-red-50 transition-colors"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
