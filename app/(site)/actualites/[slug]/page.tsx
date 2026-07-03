import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { articles, formatArticleDate, getRelatedArticles, type ArticleSeed } from '@/src/data/articles';
import RelatedArticles from '@/src/components/articles/RelatedArticles';
import { newsArticleSchema, breadcrumbSchema } from '@/src/lib/seo/schemas';
import { truncateDescription } from '@/src/lib/seo/metadata';
import { resolveArticleImage } from '@/src/lib/images';

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
      images: [{ url: resolveArticleImage(article.image, article.slug, article.categorySlug), width: 1200, height: 800, alt: article.title }],
      authors: article.author ? [article.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [resolveArticleImage(article.image, article.slug, article.categorySlug)],
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = findArticle(params.slug);
  if (!article) notFound();
  const imageSrc = resolveArticleImage(article.image, article.slug, article.categorySlug);
  const relatedArticles = getRelatedArticles(article);

  return (
    <article className="bg-white pt-32 pb-24">
      <JsonLd
        data={[
          newsArticleSchema({
            title: article.title,
            description: article.excerpt,
            url: `/actualites/${article.slug}`,
            image: imageSrc,
            datePublished: article.publishedAt,
            authorName: article.author,
            section: article.category,
          }),
          breadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: 'Actualités', url: '/actualites' },
            { name: article.title, url: `/actualites/${article.slug}` },
          ]),
        ]}
        id="article"
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Actualités', url: '/actualites' },
            { name: article.title, url: `/actualites/${article.slug}` },
          ]}
          className="mb-8"
        />

        <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">
          {article.category}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {article.title}
        </h1>
        <div className="mt-6 flex items-center gap-x-3 text-sm text-gray-500">
          <time dateTime={article.publishedAt}>
            {formatArticleDate(article.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime} min de lecture</span>
          {article.author && (
            <>
              <span aria-hidden="true">·</span>
              <span>Par {article.author}</span>
            </>
          )}
        </div>
        <p className="mt-6 text-xl leading-8 text-gray-700">{article.excerpt}</p>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={article.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {article.body ? (
          <div
            className="prose prose-gray mt-12 max-w-none prose-headings:text-gray-900 prose-a:text-red-600 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        ) : (
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <p className="text-lg font-semibold text-gray-900">
              Article en cours de rédaction
            </p>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Notre équipe rédige actuellement ce dossier en détail. En attendant,
              retrouvez ci-dessous nos articles sur des sujets similaires.
            </p>
          </div>
        )}
      </div>

      <RelatedArticles articles={relatedArticles} />
    </article>
  );
}
