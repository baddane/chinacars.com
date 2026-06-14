import type { Metadata } from 'next';
import { Mail, MessageSquare } from 'lucide-react';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ContactForm from '@/src/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Véhicules Chinois',
  description:
    'Contactez la rédaction Véhicules Chinois pour toute question, suggestion ou demande de partenariat.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contactez Véhicules Chinois',
    description:
      'Questions, partenariats, suggestions : contactez notre rédaction.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Contact', url: '/contact' }]} className="mb-8" />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Contactez la rédaction
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Une question, une info, une suggestion d&apos;article ou une demande de
          partenariat ? Écrivez-nous.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <a
            href="mailto:contact@vehiculeschinois.com"
            className="flex items-start gap-4 rounded-2xl border border-gray-200 p-6 hover:border-red-500 transition-colors"
          >
            <Mail className="h-6 w-6 shrink-0 text-red-600" aria-hidden="true" />
            <div>
              <h2 className="text-base font-semibold text-gray-900">Email</h2>
              <p className="mt-1 text-sm text-gray-600">contact@vehiculeschinois.com</p>
            </div>
          </a>
          <a
            href="mailto:redaction@vehiculeschinois.com"
            className="flex items-start gap-4 rounded-2xl border border-gray-200 p-6 hover:border-red-500 transition-colors"
          >
            <MessageSquare
              className="h-6 w-6 shrink-0 text-red-600"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-base font-semibold text-gray-900">Rédaction</h2>
              <p className="mt-1 text-sm text-gray-600">
                redaction@vehiculeschinois.com
              </p>
            </div>
          </a>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
