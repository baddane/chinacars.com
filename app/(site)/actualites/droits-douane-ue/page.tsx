import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DossierPage from '@/src/components/layout/DossierPage';
import { findPillar } from '@/src/data/silos';

const SLUG = 'droits-douane-ue';

export function generateMetadata(): Metadata {
  const dossier = findPillar('actualites-dossiers', SLUG);
  if (!dossier) return { title: 'Dossier introuvable' };
  return {
    title: dossier.title,
    description: dossier.excerpt,
    alternates: { canonical: `/actualites/${SLUG}` },
  };
}

export default function DroitsDouaneUePage() {
  const dossier = findPillar('actualites-dossiers', SLUG);
  if (!dossier) notFound();
  return <DossierPage dossier={dossier} />;
}
