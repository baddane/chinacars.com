import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ArticleCard from '@/src/components/articles/ArticleCard';
import Pagination from '@/src/components/ui/Pagination';
import { articles } from '@/src/data/articles';
import { CATEGORIES } from '@/src/lib/constants';

const PAGE_SIZE = 9;

interface PageProps {
  searchParams: { page?: string; categorie?: string };
}

export function generateMetadata({ searchParams }: PageProps): Metadata {
  const page = Math.max(1, parseInt(searchParams.page || '1', 10));
  const cat = CATEGORIES.find((c) => c.slug === searchParams.categorie);
  const title = cat
    ? `${cat.name}${page > 1 ? ` — Page ${page}` : ''}`
    : page > 1
    ? `Actualités — Page ${page}`
    : 'Actualités';
  const canonical = searchParams.categorie
    ? `/actualites?categorie=${searchParams.categorie}${page > 1 ? `&page=${page}` : ''}`
    : page > 1
    ? `/actualites?page=${page}`
    : '/actualites';
  return {
    title,
    description:
      "Toute l'actualité des voitures chinoises au Maroc : nouveautés, essais, prix et guides d'achat.",
    alternates: { canonical },
  };
}

export default function NewsPage({ searchParams }: PageProps) {
  const page = Math.max(1, parseInt(searchParams.page || '1', 10));
  const activeCategory = searchParams.categorie ?? null;

  const filtered = activeCategory
    ? articles.filter((a) => a.categorySlug === activeCategory)
    : articles;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pageArticles = filtered.slice(start, start + PAGE_SIZE);

  const basePath = activeCategory ? `/actualites?categorie=${activeCategory}` : '/actualites';

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Actualités', url: '/actualites' }]} className="mb-8" />

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Actualités
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Restez informé des derniers lancements, des essais détaillés et
            des évolutions du marché automobile chinois au Maroc.
          </p>
        </div>

        {/* Filtre par catégorie */}
        <nav className="mt-10 flex flex-wrap gap-2" aria-label="Filtrer par catégorie">
          <Link
            href="/actualites"
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              !activeCategory
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tous
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/actualites?categorie=${cat.slug}`}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeCategory === cat.slug
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {pageArticles.length > 0 ? (
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pageArticles.map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                priority={safePage === 1 && index === 0}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-lg">
              Aucun article dans cette catégorie pour le moment.
            </p>
            <Link href="/actualites" className="mt-4 inline-block text-red-600 font-semibold hover:underline">
              Voir tous les articles →
            </Link>
          </div>
        )}

        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          basePath={basePath}
          className="mt-16"
        />
      </div>
    </div>
  );
}
