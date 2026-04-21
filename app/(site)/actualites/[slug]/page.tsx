import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import JsonLd from '@/src/components/seo/JsonLd';
import { articles, formatArticleDate, type ArticleBlock } from '@/src/data/articles';
import { newsArticleSchema } from '@/src/lib/seo/schemas';
import { truncateDescription } from '@/src/lib/seo/metadata';
import { sanityFetch } from '@/src/lib/sanity/client';
import { articleBySlugQuery, articleSlugsQuery } from '@/src/lib/sanity/queries';
import { buildImageUrl } from '@/src/lib/sanity/image';
import { portableTextComponents } from '@/src/lib/sanity/portableText';
import type { SanityArticle } from '@/src/lib/sanity/normalize';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(articleSlugsQuery);
  if (slugs?.length) return slugs.map((slug) => ({ slug }));
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sanityArticle = await sanityFetch<SanityArticle>(articleBySlugQuery, {
    slug: params.slug,
  });

  if (sanityArticle) {
    const canonical = `/actualites/${sanityArticle.slug}`;
    const image =
      buildImageUrl(sanityArticle.seo?.ogImage ?? sanityArticle.mainImage, { width: 1200 }) || '';
    return {
      title: sanityArticle.seo?.metaTitle ?? sanityArticle.title,
      description: truncateDescription(
        sanityArticle.seo?.metaDescription ?? sanityArticle.excerpt,
      ),
      alternates: { canonical },
      openGraph: {
        type: 'article',
        title: sanityArticle.title,
        description: sanityArticle.excerpt,
        url: canonical,
        publishedTime: sanityArticle.publishedAt,
        modifiedTime: sanityArticle.updatedAt,
        images: image ? [{ url: image }] : undefined,
        authors: sanityArticle.author ? [sanityArticle.author.name] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: sanityArticle.title,
        description: sanityArticle.excerpt,
        images: image ? [image] : undefined,
      },
    };
  }

  const seed = articles.find((a) => a.slug === params.slug);
  if (!seed) return { title: 'Article introuvable' };
  const canonical = `/actualites/${seed.slug}`;
  return {
    title: seed.title,
    description: truncateDescription(seed.excerpt),
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: seed.title,
      description: seed.excerpt,
      url: canonical,
      publishedTime: seed.publishedAt,
      images: [{ url: seed.image }],
      authors: seed.author ? [seed.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seed.title,
      description: seed.excerpt,
      images: [seed.image],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const sanityArticle = await sanityFetch<SanityArticle>(articleBySlugQuery, {
    slug: params.slug,
  });

  if (sanityArticle) {
    const coverImage = buildImageUrl(sanityArticle.mainImage, { width: 1200 });
    const authorName = sanityArticle.author?.name;

    return (
      <article className="bg-white pt-32 pb-24">
        <JsonLd
          data={newsArticleSchema({
            title: sanityArticle.title,
            description: sanityArticle.excerpt,
            url: `/actualites/${sanityArticle.slug}`,
            image: coverImage,
            datePublished: sanityArticle.publishedAt,
            dateModified: sanityArticle.updatedAt,
            authorName,
            section: sanityArticle.category?.title,
          })}
          id="article"
        />

        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Actualités', url: '/actualites' },
              { name: sanityArticle.title, url: `/actualites/${sanityArticle.slug}` },
            ]}
            className="mb-8"
          />

          <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">
            {sanityArticle.category?.title}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {sanityArticle.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
            <time dateTime={sanityArticle.publishedAt}>
              {formatArticleDate(sanityArticle.publishedAt)}
            </time>
            {sanityArticle.readingTime && (
              <>
                <span aria-hidden="true">·</span>
                <span>{sanityArticle.readingTime} min de lecture</span>
              </>
            )}
            {authorName && (
              <>
                <span aria-hidden="true">·</span>
                <span>Par {authorName}</span>
              </>
            )}
          </div>
          <p className="mt-6 text-xl leading-8 text-gray-700">{sanityArticle.excerpt}</p>

          {coverImage && (
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={coverImage}
                alt={sanityArticle.mainImage?.alt ?? sanityArticle.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mt-12">
            {sanityArticle.body?.length ? (
              <PortableText
                value={sanityArticle.body as Parameters<typeof PortableText>[0]['value']}
                components={portableTextComponents}
              />
            ) : (
              <p className="text-base leading-7 text-gray-500 italic">
                Le contenu de cet article sera disponible prochainement.
              </p>
            )}
          </div>
        </div>
      </article>
    );
  }

  // Fallback to seed data
  const seed = articles.find((a) => a.slug === params.slug);
  if (!seed) notFound();

  return (
    <article className="bg-white pt-32 pb-24">
      <JsonLd
        data={newsArticleSchema({
          title: seed.title,
          description: seed.excerpt,
          url: `/actualites/${seed.slug}`,
          image: seed.image,
          datePublished: seed.publishedAt,
          authorName: seed.author,
          section: seed.category,
        })}
        id="article"
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Actualités', url: '/actualites' },
            { name: seed.title, url: `/actualites/${seed.slug}` },
          ]}
          className="mb-8"
        />

        <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">
          {seed.category}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {seed.title}
        </h1>
        <div className="mt-6 flex items-center gap-x-3 text-sm text-gray-500">
          <time dateTime={seed.publishedAt}>{formatArticleDate(seed.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{seed.readingTime} min de lecture</span>
          {seed.author && (
            <>
              <span aria-hidden="true">·</span>
              <span>Par {seed.author}</span>
            </>
          )}
        </div>
        <p className="mt-6 text-xl leading-8 text-gray-700">{seed.excerpt}</p>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={seed.image}
            alt={seed.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {seed.body?.length ? (
          <div className="mt-12">
            {seed.body.map((block: ArticleBlock, i: number) =>
              block.tag === 'h2' ? (
                <h2 key={i} className="mt-12 text-2xl font-bold tracking-tight text-gray-900">
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="mt-4 text-base leading-7 text-gray-700">
                  {block.text}
                </p>
              ),
            )}
          </div>
        ) : (
          <p className="mt-12 text-base leading-7 text-gray-500 italic">
            Le contenu éditorial complet sera disponible prochainement.
          </p>
        )}
      </div>
    </article>
  );
}
