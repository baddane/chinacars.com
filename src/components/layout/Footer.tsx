import Link from 'next/link';
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import CookieSettingsButton from '@/src/components/legal/CookieSettingsButton';

const footerNavigation = {
  marques: [
    { name: 'BYD', href: '/marques/byd' },
    { name: 'MG Motor', href: '/marques/mg' },
    { name: 'Chery', href: '/marques/chery' },
    { name: 'Geely', href: '/marques/geely' },
    { name: 'GWM', href: '/marques/gwm' },
    { name: 'Zeekr', href: '/marques/zeekr' },
  ],
  explorer: [
    { name: 'Actualités', href: '/actualites' },
    { name: 'Comparateur', href: '/comparateur' },
    { name: 'Comparatifs', href: '/comparatifs' },
    { name: 'Guides', href: '/guides' },
  ],
  support: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Confidentialité', href: '/confidentialite' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-red-500" aria-hidden="true" />
              <span className="text-xl font-bold tracking-tight text-white">
                Véhicules<span className="text-red-500">Chinois</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-300 max-w-xs">
              Votre source n°1 d&apos;actualités, de tests et de prix sur les voitures
              chinoises au Maroc et dans le monde.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Explorer
                </h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.explorer.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Marques populaires
                </h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.marques.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Informations
                </h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <CookieSettingsButton className="text-left text-sm leading-6 text-gray-300 hover:text-white" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Newsletter
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Recevez les dernières actus auto directement dans votre boîte mail.
                </p>
                <form className="mt-6 sm:flex sm:max-w-md" action="/api/newsletter" method="post">
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
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Véhicules Chinois. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
