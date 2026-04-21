import { NextRequest, NextResponse } from 'next/server';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let email: string | undefined;

  const contentType = request.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => ({}));
    email = body?.email;
  } else {
    const form = await request.formData().catch(() => new FormData());
    email = form.get('email')?.toString();
  }

  if (!email?.trim()) {
    return NextResponse.json({ error: 'Adresse email requise.' }, { status: 400 });
  }

  if (!isValidEmail(email.trim())) {
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (apiKey && audienceId) {
    const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.trim(), unsubscribed: false }),
    });

    if (!response.ok) {
      const text = await response.text();
      // 409 = already subscribed — treat as success
      if (response.status !== 409) {
        console.error('Resend contacts error:', text);
        return NextResponse.json(
          { error: "Erreur lors de l'inscription. Réessayez." },
          { status: 502 },
        );
      }
    }
  } else {
    console.log('[Newsletter] new subscriber:', email.trim());
  }

  return NextResponse.json({ success: true });
}
