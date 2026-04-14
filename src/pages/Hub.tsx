import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/src/components/seo/Seo';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

interface HubProps {
  title: string;
  description: string;
  canonical: string;
  breadcrumbLabel: string;
  ctaPrimary?: { label: string; to: string };
  children?: React.ReactNode;
}

/**
 * Generic landing/hub page used for sections whose detailed content is still
 * being produced (Comparatifs, Guides, Électrique, Maroc).
 */
export default function Hub({
  title,
  description,
  canonical,
  breadcrumbLabel,
  ctaPrimary,
  children,
}: HubProps) {
  return (
    <>
      <Seo title={title} description={description} canonical={canonical} />
      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumb items={[{ name: breadcrumbLabel, url: canonical }]} className="mb-8" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">{description}</p>

          {children}

          {ctaPrimary && (
            <div className="mt-12">
              <Link
                to={ctaPrimary.to}
                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
              >
                {ctaPrimary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
