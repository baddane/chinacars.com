import type { Metadata } from 'next';
import CategoryArticlesPage from '@/src/components/layout/CategoryArticlesPage';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Voitures chinoises au Maroc — Prix, importation et SAV',
  description:
    "Actualité, prix, importation et SAV des voitures chinoises sur le marché marocain : tout ce qu'il faut savoir avant d'acheter.",
  alternates: { canonical: '/maroc' },
  openGraph: {
    title: 'Voitures chinoises au Maroc — Prix en dirhams et disponibilité',
    description:
      "Prix, concessionnaires, homologation et garanties des voitures chinoises au Maroc.",
    url: '/maroc',
    type: 'website',
  },
};

const MAROC_KEYWORDS = [
  'maroc', 'marocain', 'casa', 'rabat', 'prix-maroc', 'importer',
  'importation', 'dh', 'homologation', 'garantie',
];

const maroc = articles.filter(
  (a) =>
    a.categorySlug === 'maroc' ||
    MAROC_KEYWORDS.some((kw) => a.slug.includes(kw)) ||
    a.categorySlug === 'analyse' ||
    a.categorySlug === 'selection',
);

export default function MarocPage() {
  return (
    <CategoryArticlesPage
      title="Voitures chinoises au Maroc"
      description="Prix en dirhams, réseau de concessionnaires, garanties, SAV et homologation : tout ce qu'il faut savoir pour acheter une voiture chinoise au Maroc."
      canonical="/maroc"
      breadcrumbLabel="Maroc"
      articles={maroc}
    />
  );
}
