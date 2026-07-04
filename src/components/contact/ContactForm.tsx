'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '@/src/components/ui/Button';

type Status = 'idle' | 'success';

const CONTACT_EMAIL = 'contact@vehiculeschinois.com';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const subject = String(data.get('subject') || '');
    const message = String(data.get('message') || '');
    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;
    // Ouvre la messagerie de l'utilisateur : envoi réel, sans backend requis.
    // (Un fournisseur type Resend pourra être branché ici plus tard.)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus('success');
  }

  return (
    <form onSubmit={handleSubmit} className="mt-16 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nom" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Sujet" name="subject" type="text" required />
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
        />
      </div>
      <Button type="submit" rightIcon={<Send className="h-4 w-4" />}>
        Envoyer le message
      </Button>
      {status === 'success' && (
        <p className="text-sm font-semibold text-green-700">
          Votre messagerie s&apos;est ouverte pour finaliser l&apos;envoi. Vous pouvez
          aussi nous écrire directement à {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}

function Field({ label, name, type, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
      />
    </div>
  );
}
