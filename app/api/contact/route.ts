import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 });
  }

  const { name, email, subject, message } = body as ContactPayload;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
  }

  if (message.trim().length < 10) {
    return NextResponse.json({ error: 'Le message doit contenir au moins 10 caractères.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? 'contact@chinacarsma.com';

  if (apiKey) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ChinaCarsMA <noreply@chinacarsma.com>',
        to: [toEmail],
        reply_to: email,
        subject: `[Contact] ${subject}`,
        text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
        html: `<p><strong>Nom :</strong> ${name}<br><strong>Email :</strong> ${email}</p><p>${message.replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!response.ok) {
      console.error('Resend error:', await response.text());
      return NextResponse.json({ error: 'Erreur lors de l\'envoi. Réessayez.' }, { status: 502 });
    }
  } else {
    // No email service configured — log for development
    console.log('[Contact form]', { name, email, subject, message });
  }

  return NextResponse.json({ success: true });
}
