import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, Info } from 'lucide-react';

const brands = [
  {
    name: 'BYD',
    slug: 'byd',
    description: 'Build Your Dreams est le leader mondial des véhicules électrifiés. Présent au Maroc avec une gamme complète de la citadine à la berline de luxe.',
    logo: 'https://picsum.photos/seed/bydlogo/400/400',
    modelsCount: 5,
    origin: 'Shenzhen, Chine',
  },
  {
    name: 'MG Motor',
    slug: 'mg',
    description: 'Marque d\'origine britannique sous pavillon chinois (SAIC), MG propose des véhicules au design dynamique et au rapport qualité-prix agressif.',
    logo: 'https://picsum.photos/seed/mglogo/400/400',
    modelsCount: 4,
    origin: 'Shanghai, Chine',
  },
  {
    name: 'Chery',
    slug: 'chery',
    description: 'L\'un des plus grands exportateurs chinois, Chery se distingue par ses SUV technologiques et robustes sous la gamme Tiggo.',
    logo: 'https://picsum.photos/seed/cherylogo/400/400',
    modelsCount: 6,
    origin: 'Wuhu, Chine',
  },
  {
    name: 'Geely',
    slug: 'geely',
    description: 'Propriétaire de Volvo et Lotus, Geely insuffle une rigueur européenne à ses modèles, offrant une expérience de conduite premium.',
    logo: 'https://picsum.photos/seed/geelylogo/400/400',
    modelsCount: 3,
    origin: 'Hangzhou, Chine',
  },
  {
    name: 'GWM',
    slug: 'gwm',
    description: 'Great Wall Motor est le spécialiste des SUV (Haval) et des pick-ups, avec une incursion remarquée dans l\'électrique avec ORA.',
    logo: 'https://picsum.photos/seed/gwmlogo/400/400',
    modelsCount: 4,
    origin: 'Baoding, Chine',
  },
  {
    name: 'Zeekr',
    slug: 'zeekr',
    description: 'La marque de luxe électrique du groupe Geely, visant le très haut de gamme avec des performances et une finition exceptionnelles.',
    logo: 'https://picsum.photos/seed/zeekrlogo/400/400',
    modelsCount: 2,
    origin: 'Ningbo, Chine',
  },
];

export default function Brands() {
  return (
    <>
      <Helmet>
        <title>Marques de Voitures Chinoises au Maroc | ChinaCarsMA</title>
        <meta name="description" content="Découvrez toutes les marques de voitures chinoises disponibles au Maroc : BYD, MG, Chery, Geely, GWM, Zeekr et plus encore." />
      </Helmet>

      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Marques</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explorez l'univers des constructeurs chinois. De l'entrée de gamme accessible au luxe technologique, chaque marque apporte sa vision de l'automobile.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {brands.map((brand) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="flex-shrink-0">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-32 w-32 rounded-2xl object-cover shadow-md group-hover:rotate-3 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{brand.name}</h2>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{brand.origin}</span>
                  </div>
                  <p className="text-sm leading-6 text-gray-600 mb-6">
                    {brand.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      to={`/marques/${brand.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <Info className="h-4 w-4 text-red-600" />
                      Fiche marque
                    </Link>
                    <Link
                      to={`/marques/${brand.slug}/modeles`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:underline"
                    >
                      {brand.modelsCount} modèles <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
