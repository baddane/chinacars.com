import type { Metadata } from 'next';
import HubSection from '@/src/components/layout/HubSection';

export const metadata: Metadata = {
  title: 'Comparatifs',
  description:
    'Retrouvez tous nos comparatifs détaillés entre les voitures chinoises vendues au Maroc et leurs rivales.',
  alternates: { canonical: '/comparatifs' },
};

export default function ComparatifsPage() {
  return (
    <HubSection
      title="Comparatifs"
      description="Retrouvez tous nos comparatifs détaillés entre les voitures chinoises vendues au Maroc et leurs rivales."
      canonical="/comparatifs"
      breadcrumbLabel="Comparatifs"
      ctaPrimary={{ label: "Voir l'actualité", href: '/actualites' }}
    />
  );
}
