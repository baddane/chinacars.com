import { revalidateTag, revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

/**
 * On-demand ISR revalidation endpoint for Sanity webhooks.
 *
 * Configure a Sanity webhook:
 *   URL    : https://vehiculeschinois.com/api/revalidate
 *   Secret : matches SANITY_REVALIDATE_SECRET env var
 *   Filter : _type in ["article","brand","carModel","comparison","guide"]
 *   Trigger: Create, Update, Delete
 *
 * The webhook sends a JSON body with at least { _type, slug }.
 */

const DOCUMENT_TAG_MAP: Record<string, string[]> = {
  article: ['articles'],
  brand: ['brands'],
  carModel: ['models'],
  comparison: ['comparisons'],
  guide: ['guides'],
};

function docTypeToPaths(_type: string, slug?: string): string[] {
  switch (_type) {
    case 'article':
      return slug ? ['/actualites', `/actualites/${slug}`] : ['/actualites'];
    case 'brand':
      return slug ? ['/marques', `/marques/${slug}`] : ['/marques'];
    case 'carModel':
      return ['/marques'];
    case 'comparison':
      return ['/comparatifs'];
    case 'guide':
      return ['/guides'];
    default:
      return ['/'];
  }
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  // Verify shared secret passed as ?secret= query param or Authorization header
  const querySecret = request.nextUrl.searchParams.get('secret');
  const authHeader = request.headers.get('authorization');
  const bearerSecret = authHeader?.startsWith('Bearer ')
    ? authHeader.slice(7)
    : null;

  if (secret && querySecret !== secret && bearerSecret !== secret) {
    return NextResponse.json({ error: 'Invalid secret.' }, { status: 401 });
  }

  let body: { _type?: string; slug?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { _type, slug } = body;

  if (!_type) {
    return NextResponse.json({ error: '_type is required.' }, { status: 400 });
  }

  // Revalidate cache tags
  const tags = DOCUMENT_TAG_MAP[_type] ?? [];
  tags.forEach((tag) => revalidateTag(tag));

  // Revalidate specific paths
  const paths = docTypeToPaths(_type, slug);
  paths.forEach((path) => revalidatePath(path));

  // Also revalidate home (featured articles block)
  revalidatePath('/');

  return NextResponse.json({
    revalidated: true,
    type: _type,
    tags,
    paths,
    now: Date.now(),
  });
}
