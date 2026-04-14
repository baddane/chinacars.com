import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import Badge from '@/src/components/ui/Badge';
import ImageWithFallback from '@/src/components/ui/ImageWithFallback';
import { formatArticleDate } from '@/src/data/articles';

export interface ArticleCardData {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt: string; // ISO 8601
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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className={cn('flex flex-col items-start', className)}
    >
      <Link
        to={href}
        className="relative block w-full overflow-hidden rounded-2xl bg-gray-100 mb-6 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
        aria-label={article.title}
      >
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          aspectRatio="16/9"
          priority={priority}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
        <Link to={href}>{article.title}</Link>
      </h3>
      <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">{article.excerpt}</p>
    </motion.article>
  );
}
