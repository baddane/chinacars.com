import type { Metadata } from 'next';
import HubSection from '@/src/components/layout/HubSection';

export const metadata: Metadata = {
  title: 'Guides pratiques',
  description:
    "Importation, homologation, assurance, entretien : nos guides pour tout savoir sur l'achat d'une voiture chinoise au Maroc.",
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return (
    <HubSection
      title="Guides pratiques"
      description="Importation, homologation, assurance, entretien : nos guides pour tout savoir sur l'achat d'une voiture chinoise au Maroc."
      canonical="/guides"
      breadcrumbLabel="Guides"
      ctaPrimary={{ label: 'Voir les marques', href: '/marques' }}
    />
  );
}
