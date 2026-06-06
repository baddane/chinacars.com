import type { Metadata } from 'next';
import CategoryArticlesPage from '@/src/components/layout/CategoryArticlesPage';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Voitures chinoises au Maroc — Prix, disponibilité et réseau',
  description:
    "Prix en dirhams, réseau de concessionnaires, garanties et homologation : tout savoir sur les voitures chinoises disponibles au Maroc.",
  alternates: { canonical: '/maroc' },
  openGraph: {
    title: 'Voitures chinoises au Maroc — Prix, disponibilité et réseau',
    description: "Prix en dirhams, réseau de concessionnaires, garanties et homologation : tout savoir sur les voitures chinoises disponibles au Maroc.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voitures chinoises au Maroc',
    description: "Tout savoir sur les voitures chinoises disponibles au Maroc.",
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
      title="Focus Maroc"
      description="Prix en dirhams, réseau de concessionnaires, garanties, SAV et homologation : tout ce qu'il faut savoir pour acheter une voiture chinoise au Maroc."
      canonical="/maroc"
      breadcrumbLabel="Maroc"
      articles={maroc}
    />
  );
}
