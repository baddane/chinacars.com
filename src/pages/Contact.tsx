import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import Seo from '@/src/components/seo/Seo';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import Button from '@/src/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    // TODO: plug Resend / API route once backend is available.
    setTimeout(() => setStatus('success'), 800);
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contactez la rédaction ChinaCarsMA pour toute question, suggestion ou demande de partenariat."
        canonical="/contact"
      />

      <div className="bg-white pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Contact', url: '/contact' }]} className="mb-8" />

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contactez la rédaction
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une question, une info, une suggestion d'article ou une demande de
            partenariat ? Écrivez-nous.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <a
              href="mailto:contact@chinacarsma.com"
              className="flex items-start gap-4 rounded-2xl border border-gray-200 p-6 hover:border-red-500 transition-colors"
            >
              <Mail className="h-6 w-6 shrink-0 text-red-600" aria-hidden="true" />
              <div>
                <h2 className="text-base font-semibold text-gray-900">Email</h2>
                <p className="mt-1 text-sm text-gray-600">
                  contact@chinacarsma.com
                </p>
              </div>
            </a>
            <a
              href="mailto:redaction@chinacarsma.com"
              className="flex items-start gap-4 rounded-2xl border border-gray-200 p-6 hover:border-red-500 transition-colors"
            >
              <MessageSquare
                className="h-6 w-6 shrink-0 text-red-600"
                aria-hidden="true"
              />
              <div>
                <h2 className="text-base font-semibold text-gray-900">Rédaction</h2>
                <p className="mt-1 text-sm text-gray-600">
                  redaction@chinacarsma.com
                </p>
              </div>
            </a>
          </div>

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
                Une erreur est survenue, réessayez.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
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
