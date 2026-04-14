import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Shield, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredArticles = [
  {
    id: 1,
    title: "BYD Seal : La berline qui fait trembler Tesla arrive au Maroc",
    excerpt: "Avec son design fluide et ses performances de haut vol, la BYD Seal s'apprête à conquérir le marché marocain des VE.",
    image: "https://picsum.photos/seed/bydseal/800/600",
    category: "Nouveauté",
    date: "12 Avril 2024",
  },
  {
    id: 2,
    title: "MG Cyberster : Le roadster électrique enfin dévoilé",
    excerpt: "MG renoue avec son passé sportif en lançant un cabriolet 100% électrique aux performances décoiffantes.",
    image: "https://picsum.photos/seed/mgcyber/800/600",
    category: "Sportive",
    date: "10 Avril 2024",
  },
  {
    id: 3,
    title: "Guide : Comment importer sa voiture de Chine en 2024 ?",
    excerpt: "Tout ce qu'il faut savoir sur les taxes, le dédouanement et l'homologation pour le marché marocain.",
    image: "https://picsum.photos/seed/import/800/600",
    category: "Guide",
    date: "08 Avril 2024",
  },
];

const brands = [
  { name: 'BYD', logo: 'https://picsum.photos/seed/bydlogo/200/200' },
  { name: 'MG', logo: 'https://picsum.photos/seed/mglogo/200/200' },
  { name: 'Chery', logo: 'https://picsum.photos/seed/cherylogo/200/200' },
  { name: 'Geely', logo: 'https://picsum.photos/seed/geelylogo/200/200' },
  { name: 'GWM', logo: 'https://picsum.photos/seed/gwmlogo/200/200' },
  { name: 'Zeekr', logo: 'https://picsum.photos/seed/zeekrlogo/200/200' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ChinaCarsMA | L'actualité des voitures chinoises au Maroc</title>
        <meta name="description" content="Découvrez les dernières actualités, tests et prix des voitures chinoises (BYD, MG, Chery, Geely) au Maroc." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 pt-14">
        <img
          src="https://picsum.photos/seed/carhero/1920/1080?blur=2"
          alt="Hero background"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-8 flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                L'Atto 3 est maintenant disponible au Maroc.{' '}
                <Link to="/actualites/byd-atto-3" className="font-semibold text-red-500">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Lire plus <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              L'avenir de l'automobile chinoise au Maroc
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Expertise, actualités et guides complets sur les marques qui révolutionnent le marché automobile. De BYD à MG, restez informé sur les dernières innovations.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/actualites"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Dernières actus
              </Link>
              <Link to="/marques" className="text-sm font-semibold leading-6 text-white">
                Voir les marques <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-content lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Marques</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Les constructeurs qui comptent
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {brands.map((brand) => (
              <motion.div 
                key={brand.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  className="h-16 w-16 rounded-full object-cover shadow-lg"
                  src={brand.logo}
                  alt={brand.name}
                  referrerPolicy="no-referrer"
                />
                <span className="text-sm font-bold text-gray-600">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">À la une</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Les informations essentielles sur le marché automobile chinois.
              </p>
            </div>
            <Link to="/actualites" className="hidden sm:flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all">
              Toute l'actualité <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <motion.article 
                key={article.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-start"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 mb-6 group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 text-xs text-gray-500 mb-3">
                  <time dateTime="2024-04-12">{article.date}</time>
                </div>
                <h3 className="text-xl font-bold leading-7 text-gray-900 hover:text-red-600 transition-colors">
                  <Link to={`/actualites/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
                  {article.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Chinese Cars? */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Pourquoi choisir une voiture chinoise ?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Le paysage automobile mondial change. Les constructeurs chinois ne se contentent plus de suivre, ils mènent l'innovation, particulièrement dans l'électrique.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Zap className="absolute left-1 top-1 h-5 w-5 text-red-600" />
                    Technologie de pointe.
                  </dt>{' '}
                  <dd className="inline">Leader mondial des batteries et des systèmes d'infodivertissement intelligents.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Shield className="absolute left-1 top-1 h-5 w-5 text-red-600" />
                    Sécurité 5 étoiles.
                  </dt>{' '}
                  <dd className="inline">La majorité des nouveaux modèles obtiennent les notes maximales aux tests Euro NCAP.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <TrendingUp className="absolute left-1 top-1 h-5 w-5 text-red-600" />
                    Rapport qualité-prix imbattable.
                  </dt>{' '}
                  <dd className="inline">Des équipements premium accessibles à des tarifs compétitifs.</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/interior/800/600"
                alt="Interior of a modern Chinese car"
                className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à passer à l'électrique ?
          </h2>
          <div className="flex items-center gap-x-6">
            <Link
              to="/guides/electrique"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-red-600 shadow-sm hover:bg-gray-100"
            >
              Consulter nos guides
            </Link>
            <Link to="/comparatifs" className="text-sm font-semibold leading-6 text-white flex items-center gap-1">
              Comparer les modèles <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
