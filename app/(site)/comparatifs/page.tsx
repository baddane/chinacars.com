import type { Metadata } from 'next';
import CategoryArticlesPage from '@/src/components/layout/CategoryArticlesPage';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Comparatifs voitures chinoises',
  description:
    'Retrouvez tous nos comparatifs détaillés entre les voitures chinoises et leurs rivales : performances, autonomie, prix, équipements.',
  alternates: { canonical: '/comparatifs' },
  openGraph: {
    title: 'Comparatifs voitures chinoises vs européennes',
    description:
      'Face-à-face détaillés entre BYD, MG, Zeekr et leurs rivales européennes : performances, autonomie, prix.',
    url: '/comparatifs',
    type: 'website',
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
