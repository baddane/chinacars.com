import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/src/lib/utils';
import { absoluteUrl } from '@/src/lib/seo/metadata';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  /** Base path, without the trailing /page param (ex: /actualites) */
  basePath: string;
  /** Page 1 uses the base URL only when true (SEO-friendly). */
  page1UsesBasePath?: boolean;
  className?: string;
}

function buildPageUrl(
  basePath: string,
  page: number,
  page1UsesBasePath: boolean,
): string {
  if (page <= 1 && page1UsesBasePath) return basePath;
  return `${basePath}?page=${page}`;
}

/**
 * SEO-friendly pagination: emits <link rel="prev/next"> and aria-current.
 */
export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  page1UsesBasePath = true,
  className,
}: PaginationProps) {
  const location = useLocation();
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  // Window of pages to show around the current one.
  const windowSize = 2;
  const pages: Array<number | 'ellipsis'> = [];
  for (let i = 1; i <= totalPages; i += 1) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - windowSize && i <= currentPage + windowSize)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== 'ellipsis') {
      pages.push('ellipsis');
    }
  }

  return (
    <>
      <Helmet>
        {prevPage && (
          <link
            rel="prev"
            href={absoluteUrl(buildPageUrl(basePath, prevPage, page1UsesBasePath))}
          />
        )}
        {nextPage && (
          <link
            rel="next"
            href={absoluteUrl(buildPageUrl(basePath, nextPage, page1UsesBasePath))}
          />
        )}
        <link
          rel="canonical"
          href={absoluteUrl(location.pathname + location.search)}
        />
      </Helmet>
      <nav
        className={cn('flex items-center justify-center gap-1', className)}
        aria-label="Pagination"
      >
        <PageLink
          to={prevPage ? buildPageUrl(basePath, prevPage, page1UsesBasePath) : undefined}
          label="Précédent"
          icon={<ChevronLeft className="h-4 w-4" />}
          disabled={!prevPage}
        />
        {pages.map((p, idx) =>
          p === 'ellipsis' ? (
            <span
              key={`e-${idx}`}
              className="min-w-[38px] text-center text-sm text-gray-400"
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <PageLink
              key={p}
              to={buildPageUrl(basePath, p, page1UsesBasePath)}
              label={String(p)}
              current={p === currentPage}
            />
          ),
        )}
        <PageLink
          to={nextPage ? buildPageUrl(basePath, nextPage, page1UsesBasePath) : undefined}
          label="Suivant"
          icon={<ChevronRight className="h-4 w-4" />}
          iconRight
          disabled={!nextPage}
        />
      </nav>
    </>
  );
}

interface PageLinkProps {
  to?: string;
  label: string;
  icon?: React.ReactNode;
  iconRight?: boolean;
  current?: boolean;
  disabled?: boolean;
}

function PageLink({ to, label, icon, iconRight, current, disabled }: PageLinkProps) {
  const base =
    'min-h-[38px] min-w-[38px] inline-flex items-center justify-center gap-1.5 px-3 text-sm rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600';
  if (disabled || !to) {
    return (
      <span
        className={cn(base, 'text-gray-300 pointer-events-none')}
        aria-disabled="true"
      >
        {!iconRight && icon}
        {label}
        {iconRight && icon}
      </span>
    );
  }
  return (
    <Link
      to={to}
      aria-current={current ? 'page' : undefined}
      className={cn(
        base,
        current
          ? 'bg-gray-900 text-white font-semibold'
          : 'text-gray-800 hover:bg-gray-100',
      )}
    >
      {!iconRight && icon}
      {label}
      {iconRight && icon}
    </Link>
  );
}
