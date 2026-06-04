import type { Metadata } from 'next';
import CategoryArticlesPage from '@/src/components/layout/CategoryArticlesPage';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Essais voitures chinoises — Tests et prises en main',
  description:
    'Retrouvez tous nos essais et tests détaillés de voitures chinoises : BYD, MG, Chery, Geely, Zeekr, NIO. Performances, autonomie réelle, confort et verdict.',
  alternates: { canonical: '/essais' },
};

const ESSAI_KEYWORDS = [
  'essai', 'test', 'prise-en-main', 'premier-contact', 'conduite',
  'volant', 'route', 'performance',
];

const essais = articles.filter(
  (a) =>
    a.categorySlug === 'essai' ||
    ESSAI_KEYWORDS.some((kw) => a.slug.includes(kw)),
);

export default function EssaisPage() {
  return (
    <CategoryArticlesPage
      title="Essais & tests"
      description="Nos essais détaillés, prises en main et verdicts sur les derniers modèles chinois. Performances, autonomie réelle, qualité de finition : on vous dit tout."
      canonical="/essais"
      breadcrumbLabel="Essais"
      articles={essais}
    />
  );
}
