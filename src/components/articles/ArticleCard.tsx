import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ArticleCardProps {
  article: {
    id: string | number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
  };
  className?: string;
}

export default function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("flex flex-col items-start", className)}
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
        <time dateTime={article.date}>{article.date}</time>
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
  );
}
