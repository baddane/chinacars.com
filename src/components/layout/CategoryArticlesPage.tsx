import Link from 'next/link';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ArticleCard from '@/src/components/articles/ArticleCard';
import AdSlot from '@/src/components/ads/AdSlot';
import JsonLd from '@/src/components/seo/JsonLd';
import { breadcrumbSchema, collectionPageSchema } from '@/src/lib/seo/schemas';
import type { ArticleSeed } from '@/src/data/articles';

interface Props {
  title: string;
  description: string;
  canonical: string;
  breadcrumbLabel: string;
  articles: ArticleSeed[];
  accentColor?: string;
}

export default function CategoryArticlesPage({
  title,
  description,
  canonical,
  breadcrumbLabel,
  articles,
}: Props) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: breadcrumbLabel, url: canonical },
          ]),
          collectionPageSchema({
            name: title,
            description,
            url: canonical,
            items: articles.slice(0, 20).map((a) => ({
              name: a.title,
              url: `/actualites/${a.slug}`,
            })),
          }),
        ]}
        id={`cat-${canonical.replace(/\//g, '-')}`}
      />
      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ name: breadcrumbLabel, url: canonical }]} className="mb-8" />

        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>

        {articles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} priority={index < 3} />
              ))}
            </div>
            <AdSlot
              slot={process.env.NEXT_PUBLIC_ADSENSE_LISTING_SLOT || ''}
              format="horizontal"
              className="mt-12"
            />
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun article dans cette catégorie pour l&apos;instant.</p>
            <Link
              href="/actualites"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              Voir toute l&apos;actualité
            </Link>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
