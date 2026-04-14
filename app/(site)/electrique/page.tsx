import type { Metadata } from 'next';
import HubSection from '@/src/components/layout/HubSection';

export const metadata: Metadata = {
  title: 'Véhicules électriques chinois',
  description:
    "L'essentiel sur les voitures électriques chinoises : autonomie, recharge, prix et disponibilité au Maroc.",
  alternates: { canonical: '/electrique' },
};

export default function ElectriquePage() {
  return (
    <HubSection
      title="Véhicules électriques chinois"
      description="L'essentiel sur les voitures électriques chinoises : autonomie, recharge, prix et disponibilité au Maroc."
      canonical="/electrique"
      breadcrumbLabel="Électrique"
    />
  );
}
