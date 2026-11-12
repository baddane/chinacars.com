import { NextResponse } from 'next/server';
import { buildSearchIndex } from '@/src/lib/search';

/**
 * Index de recherche servi en fichier statique, chargé seulement quand le
 * visiteur ouvre la recherche. Il était auparavant passé en prop au Header
 * depuis le layout : ~128 Ko recopiés dans le HTML et le payload RSC de
 * CHAQUE page (et de chaque lien préchargé), soit ~80 % des « ISR Reads »
 * Vercel du site.
 */
export const dynamic = 'force-static';

export function GET() {
  return NextResponse.json(buildSearchIndex());
}
