import ArticleCard from '@/src/components/articles/ArticleCard';
import type { ArticleSeed } from '@/src/data/articles';

interface RelatedArticlesProps {
  articles: ArticleSeed[];
  title?: string;
}

/**
 * Bloc de maillage interne affiché en bas d'un article.
 * Renforce la circulation du « jus » de lien et invite à poursuivre la lecture.
 */
export default function RelatedArticles({
  articles,
  title = 'À lire aussi',
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section
      aria-label={title}
      className="mx-auto mt-20 max-w-7xl border-t border-gray-200 px-6 pt-16 lg:px-8"
    >
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
