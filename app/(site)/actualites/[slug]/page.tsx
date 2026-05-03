import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Tag } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import RelatedArticles from '@/src/components/articles/RelatedArticles';
import { articles, formatArticleDate, type ArticleSeed } from '@/src/data/articles';
import { articleBodies } from '@/src/data/articleBodies';
import { newsArticleSchema } from '@/src/lib/seo/schemas';
import { truncateDescription } from '@/src/lib/seo/metadata';
import { BRANDS } from '@/src/lib/constants';

interface PageProps {
  params: { slug: string };
}

function findArticle(slug: string): ArticleSeed | undefined {
  return articles.find((a) => a.slug === slug);
}

function getRelatedArticles(article: ArticleSeed): ArticleSeed[] {
  if (article.relatedSlugs?.length) {
    return article.relatedSlugs
      .map((s) => articles.find((a) => a.slug === s))
      .filter((a): a is ArticleSeed => !!a)
      .slice(0, 3);
  }
  return articles.filter((a) => a.slug !== article.slug && a.categorySlug === article.categorySlug).slice(0, 3);
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
    keywords: article.tags?.join(', '),
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: canonical,
      publishedTime: article.publishedAt,
      images: [{ url: article.image }],
      authors: article.author ? [article.author] : undefined,
      tags: article.tags,
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
  const maybeArticle = findArticle(params.slug);
  if (!maybeArticle) notFound();
  // notFound() throws — assertion needed since types aren't narrowed without it
  const article = maybeArticle as ArticleSeed;

  const related = getRelatedArticles(article);
  const brand = article.brandSlug ? BRANDS.find((b) => b.slug === article.brandSlug) : null;
  const body = articleBodies[article.slug];

  return (
    <article className="bg-white pt-32 pb-24">
      <JsonLd
        data={newsArticleSchema({
          title: article.title,
          description: article.excerpt,
          url: `/actualites/${article.slug}`,
          image: article.image,
          datePublished: article.publishedAt,
          authorName: article.author,
          section: article.category,
          tags: article.tags,
        })}
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

        {/* Catégorie — lien vers filtre */}
        <Link
          href={`/actualites?categorie=${article.categorySlug}`}
          className="text-sm font-semibold text-red-600 uppercase tracking-widest hover:underline"
        >
          {article.category}
        </Link>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {article.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
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
          {brand && (
            <>
              <span aria-hidden="true">·</span>
              <Link
                href={`/marques/${brand.slug}`}
                className="font-semibold text-red-600 hover:underline"
              >
                {brand.name}
              </Link>
            </>
          )}
        </div>

        <p className="mt-6 text-xl leading-8 text-gray-700">{article.excerpt}</p>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-gray prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline mt-12 max-w-none">
          {body ?? (
            <p className="text-gray-500 italic">
              Le contenu éditorial complet sera chargé depuis Sanity CMS.
            </p>
          )}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-gray-400" aria-hidden="true" />
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/actualites?tag=${encodeURIComponent(tag)}`}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* CTA marque */}
        {brand && (
          <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                Marque
              </p>
              <p className="text-lg font-bold text-gray-900">
                Découvrez tous les modèles {brand.name}
              </p>
            </div>
            <Link
              href={`/marques/${brand.slug}`}
              className="shrink-0 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
            >
              Voir la marque →
            </Link>
          </div>
        )}

        {/* Navigation inter-articles */}
        <div className="mt-10 flex justify-between text-sm font-semibold">
          <Link href="/actualites" className="text-red-600 hover:underline">
            ← Toutes les actualités
          </Link>
          <Link href="/guides" className="text-red-600 hover:underline">
            Nos guides →
          </Link>
        </div>
      </div>

      {/* Articles similaires */}
      {related.length > 0 && (
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <RelatedArticles articles={related} />
        </div>
      )}
    </article>
  );
}
