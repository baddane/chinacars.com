import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/src/lib/utils';
import { formatArticleDate } from '@/src/data/articles';

export interface ArticleCardData {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  readingTime?: number;
}

interface ArticleCardProps {
  article: ArticleCardData;
  className?: string;
  priority?: boolean;
}

export default function ArticleCard({ article, className, priority = false }: ArticleCardProps) {
  const href = `/actualites/${article.slug}`;
  return (
    <article className={cn('flex flex-col items-start', className)}>
      <Link
        href={href}
        className="relative block w-full overflow-hidden rounded-2xl bg-gray-100 mb-6 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
        aria-label={article.title}
      >
        <div className="aspect-[16/9] relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-4 left-4">
          {/* Badge catégorie cliquable */}
          <Link
            href={`/actualites?categorie=${article.categorySlug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center rounded-full bg-red-600 px-2.5 py-0.5 text-xs font-semibold text-white hover:bg-red-700 transition-colors"
            aria-label={`Catégorie : ${article.category}`}
          >
            {article.category}
          </Link>
        </div>
      </Link>
      <div className="flex items-center gap-x-3 text-xs text-gray-500 mb-3">
        <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
        {article.readingTime ? (
          <>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime} min de lecture</span>
          </>
        ) : null}
      </div>
      <h3 className="text-xl font-bold leading-7 text-gray-900 hover:text-red-600 transition-colors">
        <Link href={href}>{article.title}</Link>
      </h3>
      <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">{article.excerpt}</p>
      <Link
        href={href}
        className="mt-4 text-sm font-semibold text-red-600 hover:underline"
        aria-label={`Lire : ${article.title}`}
      >
        Lire l&apos;article →
      </Link>
    </article>
  );
}
