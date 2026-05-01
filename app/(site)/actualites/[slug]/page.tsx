import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { articles, formatArticleDate, type ArticleSeed } from '@/src/data/articles';
import { newsArticleSchema } from '@/src/lib/seo/schemas';
import { truncateDescription } from '@/src/lib/seo/metadata';

interface PageProps {
  params: { slug: string };
}

function findArticle(slug: string): ArticleSeed | undefined {
  return articles.find((a) => a.slug === slug);
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = findArticle(params.slug);
  if (!article) return { title: 'Article introuvable' };
  const canonical = `/actualites/${article.slug}`;
  return {
    title: article.title,
    description: truncateDescription(article.excerpt),
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: canonical,
      publishedTime: article.publishedAt,
      images: [{ url: article.image }],
      authors: article.author ? [article.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = findArticle(params.slug);
  if (!article) notFound();
  // notFound() throws, but TypeScript doesn't always narrow the union — assert here
  const a = article as NonNullable<typeof article>;

  return (
    <article className="bg-white pt-32 pb-24">
      <JsonLd
        data={newsArticleSchema({
          title: a.title,
          description: a.excerpt,
          url: `/actualites/${a.slug}`,
          image: a.image,
          datePublished: a.publishedAt,
          dateModified: a.updatedAt ?? a.publishedAt,
          authorName: a.author,
          section: a.category,
          tags: a.tags,
        })}
        id="article"
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Actualités', url: '/actualites' },
            { name: a.title, url: `/actualites/${a.slug}` },
          ]}
          className="mb-8"
        />

        <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">
          {a.category}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {a.title}
        </h1>
        <div className="mt-6 flex items-center gap-x-3 text-sm text-gray-500">
          <time dateTime={a.publishedAt}>
            {formatArticleDate(a.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{a.readingTime} min de lecture</span>
          {a.author && (
            <>
              <span aria-hidden="true">·</span>
              <span>Par {a.author}</span>
            </>
          )}
        </div>
        <p className="mt-6 text-xl leading-8 text-gray-700">{a.excerpt}</p>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={a.image}
            alt={a.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {a.bodyHtml ? (
          <div
            className="article-body mt-12"
            // Content comes from our own controlled seed data, not user input
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: a.bodyHtml }}
          />
        ) : (
          <div className="mt-12">
            <p className="text-gray-500 italic">
              Contenu en cours de rédaction — disponible prochainement.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
