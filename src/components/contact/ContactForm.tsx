'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '@/src/components/ui/Button';
import { CONTACT_SUBJECTS } from '@/src/lib/contactSubjects';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
          company: data.get('company'), // honeypot
        }),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.error || "Envoi impossible pour le moment.");
        setStatus('error');
      }
    } catch {
      setError('Erreur réseau. Vérifiez votre connexion et réessayez.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="mt-16 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">
          Merci, votre message a bien été envoyé.
        </p>
        <p className="mt-2 text-sm text-green-700">
          Nous revenons vers vous dès que possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-green-800 underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-16 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nom" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">
          Objet
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
        >
          <option value="" disabled>
            Choisissez un objet…
          </option>
          {CONTACT_SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
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

      {/* Honeypot anti-spam : masqué aux humains, laissé vide. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Ne pas remplir</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" rightIcon={<Send className="h-4 w-4" />} disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
      </Button>

      {status === 'error' && <p className="text-sm font-semibold text-red-600">{error}</p>}
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
