'use client';

import { useState } from 'react';

const CONTACT_EMAIL = 'contact@vehiculeschinois.com';

/**
 * Inscription newsletter honnête et sans backend : ouvre la messagerie de
 * l'utilisateur pré-remplie vers notre adresse. Aucune fausse confirmation,
 * aucun endpoint inexistant. Un fournisseur (Brevo/Mailchimp…) pourra être
 * branché plus tard en remplaçant le corps de handleSubmit.
 */
export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get('email') || '').trim();
    if (!email) return;
    const subject = encodeURIComponent('Inscription à la newsletter');
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite m'inscrire à la newsletter avec cette adresse : ${email}.\n\nMerci.`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="mt-6 sm:flex sm:max-w-md" onSubmit={handleSubmit}>
      <label htmlFor="email-address" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email-address"
        autoComplete="email"
        required
        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
        placeholder="votre@email.com"
      />
      <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          S&apos;abonner
        </button>
      </div>
      {sent && (
        <p className="mt-3 text-xs leading-5 text-gray-300 sm:mt-0 sm:basis-full">
          Votre messagerie s&apos;est ouverte pour finaliser l&apos;inscription.
        </p>
      )}
    </form>
  );
}
