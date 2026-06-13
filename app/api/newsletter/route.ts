import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    const formData = !body ? await request.formData().catch(() => null) : null;

    const email = body?.email || formData?.get('email');

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // TODO: integrate with email service (Mailchimp, Brevo, ConvertKit, etc.)
    // For now, log the subscription
    console.log(`[Newsletter] New subscriber: ${email}`);

    const referer = request.headers.get('referer') || '/';
    const acceptsJson =
      request.headers.get('accept')?.includes('application/json') ||
      request.headers.get('content-type')?.includes('application/json');

    if (acceptsJson) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.redirect(new URL(referer, request.url), 303);
  } catch {
    return NextResponse.json(
      { error: 'Erreur interne' },
      { status: 500 }
    );
  }
}
