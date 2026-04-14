import { Helmet } from 'react-helmet-async';
import ArticleCard from '@/src/components/articles/ArticleCard';

const articles = [
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
  {
    id: 4,
    title: "Chery Tiggo 8 Pro : Le SUV 7 places qui bouscule les codes",
    excerpt: "Confort, technologie et espace : le nouveau fleuron de Chery arrive avec des arguments solides.",
    image: "https://picsum.photos/seed/chery/800/600",
    category: "Essai",
    date: "05 Avril 2024",
  },
  {
    id: 5,
    title: "Geely Geometry C : L'autonomie réelle testée sur l'autoroute Casa-Rabat",
    excerpt: "Nous avons poussé la Geometry C dans ses retranchements pour vérifier ses promesses d'autonomie.",
    image: "https://picsum.photos/seed/geely/800/600",
    category: "Test",
    date: "01 Avril 2024",
  },
  {
    id: 6,
    title: "Le marché de l'occasion : Faut-il acheter une chinoise de seconde main ?",
    excerpt: "Analyse de la décote et de la fiabilité à long terme des premiers modèles arrivés sur le marché.",
    image: "https://picsum.photos/seed/occasion/800/600",
    category: "Conseil",
    date: "28 Mars 2024",
  },
];

export default function News() {
  return (
    <>
      <Helmet>
        <title>Actualités Auto Chinoise | ChinaCarsMA</title>
        <meta name="description" content="Toute l'actualité des voitures chinoises au Maroc : nouveautés, essais, prix et guides d'achat." />
      </Helmet>

      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Actualités</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Restez informé des derniers lancements, des essais détaillés et des évolutions du marché automobile chinois au Maroc.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-x-1" aria-label="Pagination">
              <button className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                <span>Précédent</span>
              </button>
              <div className="flex items-center gap-x-1">
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none" aria-current="page">1</button>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">2</button>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">3</button>
              </div>
              <button className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                <span>Suivant</span>
                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
