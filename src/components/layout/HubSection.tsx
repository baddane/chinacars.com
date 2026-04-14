import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';

interface HubSectionProps {
  title: string;
  description: string;
  canonical: string;
  breadcrumbLabel: string;
  ctaPrimary?: { label: string; href: string };
  children?: React.ReactNode;
}

/**
 * Generic landing/hub layout used for sections whose detailed content is
 * still being produced (Comparatifs, Guides, Électrique, Maroc).
 */
export default function HubSection({
  title,
  description,
  canonical,
  breadcrumbLabel,
  ctaPrimary,
  children,
}: HubSectionProps) {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: breadcrumbLabel, url: canonical }]} className="mb-8" />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">{description}</p>

        {children}

        {ctaPrimary && (
          <div className="mt-12">
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              {ctaPrimary.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
