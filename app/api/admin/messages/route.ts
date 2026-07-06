import { NextResponse } from 'next/server';
import { isAdmin } from '@/src/lib/adminAuth';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/src/lib/supabase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function guard(): NextResponse | null {
  if (!isAdmin()) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: 'Supabase non configuré.' }, { status: 503 });
  }
  return null;
}

export async function GET() {
  const denied = guard();
  if (denied) return denied;
  const { data, error } = await getSupabaseAdmin()
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ messages: data });
}

export async function PATCH(request: Request) {
  const denied = guard();
  if (denied) return denied;
  const body = await request.json().catch(() => ({}));
  const id = String((body as Record<string, unknown>).id ?? '');
  const isRead = Boolean((body as Record<string, unknown>).is_read);
  if (!id) return NextResponse.json({ error: 'id manquant.' }, { status: 400 });
  const { error } = await getSupabaseAdmin()
    .from('contact_messages')
    .update({ is_read: isRead })
    .eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const denied = guard();
  if (denied) return denied;
  const body = await request.json().catch(() => ({}));
  const id = String((body as Record<string, unknown>).id ?? '');
  if (!id) return NextResponse.json({ error: 'id manquant.' }, { status: 400 });
  const { error } = await getSupabaseAdmin()
    .from('contact_messages')
    .delete()
    .eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
