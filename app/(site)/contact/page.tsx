import type { Metadata } from 'next';
import Breadcrumb from '@/src/components/layout/Breadcrumb';
import ContactForm from '@/src/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez la rédaction Véhicules Chinois pour toute question, suggestion ou demande de partenariat.',
  alternates: { canonical: '/contact' },
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

        <ContactForm />
      </div>
    </div>
  );
}
