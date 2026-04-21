import type { Metadata } from 'next';
import HubSection from '@/src/components/layout/HubSection';

export const metadata: Metadata = {
  title: 'Guides pratiques',
  description:
    "Importation, homologation, assurance, entretien : nos guides pour tout savoir sur l'achat et l'utilisation d'une voiture chinoise en France, Belgique, Suisse et Maroc.",
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return (
    <HubSection
      title="Guides pratiques"
      description="Importation, homologation, assurance, entretien : nos guides pour tout savoir sur l'achat et l'utilisation d'une voiture chinoise, où que vous soyez dans l'espace francophone."
      canonical="/guides"
      breadcrumbLabel="Guides"
      ctaPrimary={{ label: 'Voir les marques', href: '/marques' }}
    />
  );
}
