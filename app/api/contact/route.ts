import { NextResponse } from 'next/server';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/src/lib/supabase/admin';
import { isValidSubject } from '@/src/lib/contactSubjects';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  // Honeypot anti-bot : champ caché « company » qui doit rester vide.
  if (String(body.company ?? '').trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const subject = String(body.subject ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Merci de remplir tous les champs.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
  }
  if (!isValidSubject(subject)) {
    return NextResponse.json({ error: 'Objet invalide.' }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Contenu trop long.' }, { status: 400 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: 'Le service de contact est momentanément indisponible.' },
      { status: 503 },
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null;
    const userAgent = request.headers.get('user-agent') || null;
    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      subject,
      message,
      ip,
      user_agent: userAgent,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] insertion échouée', err);
    return NextResponse.json(
      { error: "Envoi impossible pour le moment. Réessayez plus tard." },
      { status: 500 },
    );
  }
}
