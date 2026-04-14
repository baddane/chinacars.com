import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/src/lib/utils';
import Badge from '@/src/components/ui/Badge';
import { formatArticleDate } from '@/src/data/articles';

export interface ArticleCardData {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
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
          <Badge tone="red">{article.category}</Badge>
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
    </article>
  );
}
