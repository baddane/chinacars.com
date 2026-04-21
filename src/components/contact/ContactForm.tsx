'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '@/src/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error ?? 'Une erreur est survenue.');
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setErrorMessage('Impossible de contacter le serveur. Réessayez.');
      setStatus('error');
    }
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
          minLength={10}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm"
        />
      </div>
      <Button
        type="submit"
        loading={status === 'submitting'}
        rightIcon={<Send className="h-4 w-4" />}
      >
        Envoyer le message
      </Button>
      {status === 'success' && (
        <p className="text-sm font-semibold text-green-700">
          Merci ! Votre message a bien été envoyé.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm font-semibold text-red-700">
          {errorMessage || 'Une erreur est survenue, réessayez.'}
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
