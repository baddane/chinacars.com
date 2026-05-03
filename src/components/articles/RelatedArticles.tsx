import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Badge from '@/src/components/ui/Badge';
import { formatArticleDate, type ArticleSeed } from '@/src/data/articles';

interface RelatedArticlesProps {
  articles: ArticleSeed[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles.length) return null;

  return (
    <aside className="mt-16 border-t border-gray-200 pt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Articles similaires</h2>
        <Link
          href="/actualites"
          className="flex items-center gap-1 text-sm font-semibold text-red-600 hover:gap-2 transition-all"
        >
          Toute l&apos;actualité <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.slug} className="flex flex-col">
            <Link
              href={`/actualites/${article.slug}`}
              className="relative block overflow-hidden rounded-xl bg-gray-100 mb-4 group"
              aria-label={article.title}
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-3 left-3">
                <Badge tone="red">{article.category}</Badge>
              </div>
            </Link>
            <time dateTime={article.publishedAt} className="text-xs text-gray-400 mb-1">
              {formatArticleDate(article.publishedAt)}
            </time>
            <h3 className="text-base font-bold leading-6 text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
              <Link href={`/actualites/${article.slug}`}>{article.title}</Link>
            </h3>
          </article>
        ))}
      </div>
    </aside>
  );
}
