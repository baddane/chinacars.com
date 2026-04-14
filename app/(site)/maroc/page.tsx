import type { Metadata } from 'next';
import HubSection from '@/src/components/layout/HubSection';

export const metadata: Metadata = {
  title: 'Voitures chinoises au Maroc',
  description:
    'Actualité, prix, importation et SAV des voitures chinoises spécifiquement pour le marché marocain.',
  alternates: { canonical: '/maroc' },
};

export default function MarocPage() {
  return (
    <HubSection
      title="Voitures chinoises au Maroc"
      description="Actualité, prix, importation et SAV des voitures chinoises spécifiquement pour le marché marocain."
      canonical="/maroc"
      breadcrumbLabel="Maroc"
    />
  );
}
