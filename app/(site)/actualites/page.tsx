import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ArticleCard from '@/src/components/articles/ArticleCard';
import Pagination from '@/src/components/ui/Pagination';
import { articles } from '@/src/data/articles';
import { actualitesDossiers } from '@/src/data/silos';

const PAGE_SIZE = 9;

interface PageProps {
  searchParams: { page?: string };
}

export function generateMetadata({ searchParams }: PageProps): Metadata {
  const page = Math.max(1, parseInt(searchParams.page || '1', 10));
  const title = page > 1 ? `Actualités — Page ${page}` : 'Actualités';
  const canonical = page > 1 ? `/actualites?page=${page}` : '/actualites';
  return {
    title,
    description:
      "Toute l'actualité des voitures chinoises en France : nouveautés, essais, prix et droits de douane UE.",
    alternates: { canonical },
  };
}

export default function NewsPage({ searchParams }: PageProps) {
  const page = Math.max(1, parseInt(searchParams.page || '1', 10));
  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pageArticles = articles.slice(start, start + PAGE_SIZE);

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
            des évolutions du marché automobile chinois en France.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {actualitesDossiers.slice(0, 3).map((dossier) => (
              <a
                key={dossier.slug}
                href={`/actualites/${dossier.slug}`}
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 hover:border-red-500 hover:text-red-600 transition"
              >
                Dossier : {dossier.title.split(' :')[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pageArticles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              priority={safePage === 1 && index === 0}
            />
          ))}
        </div>

        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          basePath="/actualites"
          className="mt-16"
        />
      </div>
    </div>
  );
}
