import type { Metadata } from 'next';
import CategoryArticlesPage from '@/src/components/layout/CategoryArticlesPage';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Guides pratiques — Voitures chinoises',
  description:
    "Importation, homologation, assurance, entretien, leasing : nos guides complets pour tout savoir sur l'achat d'une voiture chinoise.",
  alternates: { canonical: '/guides' },
};

const guides = articles.filter((a) => a.categorySlug === 'guide');

export default function GuidesPage() {
  return (
    <CategoryArticlesPage
      title="Guides pratiques"
      description="Importation, homologation, assurance, entretien, leasing : nos guides complets pour tout savoir sur l'achat d'une voiture chinoise."
      canonical="/guides"
      breadcrumbLabel="Guides"
      articles={guides}
    />
  );
}
