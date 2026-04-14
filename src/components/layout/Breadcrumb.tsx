import { Fragment } from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import JsonLd from '@/src/components/seo/JsonLd';
import { breadcrumbSchema, type BreadcrumbItem } from '@/src/lib/seo/schemas';
import { cn } from '@/src/lib/utils';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (items.length < 1) return null;

  const fullItems: BreadcrumbItem[] =
    items[0]?.url === '/' ? items : [{ name: 'Accueil', url: '/' }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(fullItems)} id="breadcrumb" />
      <nav aria-label="Fil d'Ariane" className={cn('text-sm', className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-gray-600">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <Fragment key={`${item.url}-${index}`}>
                <li className="flex items-center">
                  {isLast ? (
                    <span className="font-semibold text-gray-900" aria-current="page">
                      {index === 0 ? <Home className="h-4 w-4" aria-hidden="true" /> : item.name}
                    </span>
                  ) : (
                    <Link href={item.url} className="hover:text-red-600 transition-colors">
                      {index === 0 ? (
                        <span className="flex items-center gap-1">
                          <Home className="h-4 w-4" aria-hidden="true" />
                          <span className="sr-only">{item.name}</span>
                        </span>
                      ) : (
                        item.name
                      )}
                    </Link>
                  )}
                </li>
                {!isLast && (
                  <li aria-hidden="true" className="text-gray-300">
                    <ChevronRight className="h-4 w-4" />
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
