import type { Metadata } from 'next';
import CategoryArticlesPage from '@/src/components/layout/CategoryArticlesPage';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Guides pratiques — Achat, entretien et financement',
  description:
    "Achat, financement, assurance, entretien, importation : nos guides complets pour tout savoir avant d'acheter une voiture chinoise.",
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Guides pratiques — Achat, entretien et financement',
    description: "Achat, financement, assurance, entretien, importation : nos guides complets pour tout savoir avant d'acheter une voiture chinoise.",
    url: '/guides',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides pratiques — Achat, entretien et financement',
    description: "Nos guides complets pour tout savoir avant d'acheter une voiture chinoise.",
  },
};

const guides = articles.filter((a) => a.categorySlug === 'guide');

export default function GuidesPage() {
  return (
    <CategoryArticlesPage
      title="Guides pratiques"
      description="Achat, financement, assurance, entretien, importation : nos guides complets pour tout savoir avant d'acheter une voiture chinoise."
      canonical="/guides"
      breadcrumbLabel="Guides"
      articles={guides}
    />
  );
}
