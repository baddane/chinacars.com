import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { ADMIN_COOKIE, adminToken } from '@/src/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) {
    return NextResponse.json({ error: 'Espace admin non configuré.' }, { status: 500 });
  }

  const body = await request.json().catch(() => ({}));
  const password = String((body as Record<string, unknown>).password ?? '');

  const a = Buffer.from(password);
  const b = Buffer.from(pw);
  const ok = a.length === b.length && timingSafeEqual(a, b);
  if (!ok) {
    return NextResponse.json({ error: 'Mot de passe incorrect.' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, adminToken(), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  });
  return res;
}
