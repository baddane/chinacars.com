import type { Metadata } from 'next';
import CategoryArticlesPage from '@/src/components/layout/CategoryArticlesPage';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Comparatifs voitures chinoises — Duels et face-à-face',
  description:
    'Tous nos comparatifs détaillés entre voitures chinoises et leurs rivales européennes, coréennes et japonaises : performances, autonomie, prix, équipements.',
  alternates: { canonical: '/comparatifs' },
  openGraph: {
    title: 'Comparatifs voitures chinoises — Duels et face-à-face',
    description: 'Tous nos comparatifs détaillés entre voitures chinoises et leurs rivales européennes, coréennes et japonaises.',
    url: '/comparatifs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparatifs voitures chinoises — Duels et face-à-face',
    description: 'Tous nos comparatifs détaillés entre voitures chinoises et leurs rivales.',
  },
};

const comparatifs = articles.filter((a) => a.categorySlug === 'comparatif');

export default function ComparatifsPage() {
  return (
    <CategoryArticlesPage
      title="Comparatifs"
      description="Face-à-face détaillés entre les voitures chinoises et leurs rivales : performances, autonomie, prix, équipements."
      canonical="/comparatifs"
      breadcrumbLabel="Comparatifs"
      articles={comparatifs}
    />
  );
}
