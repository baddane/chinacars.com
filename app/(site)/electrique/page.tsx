import type { Metadata } from 'next';
import CategoryArticlesPage from '@/src/components/layout/CategoryArticlesPage';
import { articles } from '@/src/data/articles';

export const metadata: Metadata = {
  title: 'Voitures électriques chinoises',
  description:
    "L'essentiel sur les voitures électriques chinoises : autonomie réelle, recharge rapide, prix et disponibilité.",
  alternates: { canonical: '/electrique' },
};

const EV_KEYWORDS = [
  'electri', 'batterie', 'charge', 'autonomie', 'byd-seal', 'byd-atto',
  'byd-seagull', 'byd-han', 'byd-tang', 'byd-sealion', 'zeekr', 'nio',
  'xpeng', 'leapmotor', 'mg-zs-ev', 'omoda-e5', 'xiaomi-su7', 'mg4',
];

const electrique = articles.filter(
  (a) =>
    a.categorySlug === 'electrique' ||
    a.categorySlug === 'technologie' ||
    EV_KEYWORDS.some((kw) => a.slug.includes(kw)),
);

export default function ElectriquePage() {
  return (
    <CategoryArticlesPage
      title="Voitures électriques chinoises"
      description="Autonomie réelle, recharge rapide 800 V, batteries solid-state : le meilleur de la technologie électrique chinoise décrypté."
      canonical="/electrique"
      breadcrumbLabel="Électrique"
      articles={electrique}
    />
  );
}
