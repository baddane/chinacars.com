import Link from 'next/link';
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerNavigation = {
  rubriques: [
    { name: 'Actualités', href: '/actualites' },
    { name: 'Essais', href: '/essais' },
    { name: 'Comparatifs', href: '/comparatifs' },
    { name: 'Guides pratiques', href: '/guides' },
    { name: 'Électrique', href: '/electrique' },
  ],
  marques: [
    { name: 'BYD', href: '/marques/byd' },
    { name: 'MG Motor', href: '/marques/mg' },
    { name: 'Chery', href: '/marques/chery' },
    { name: 'Geely', href: '/marques/geely' },
    { name: 'GWM', href: '/marques/gwm' },
    { name: 'Zeekr', href: '/marques/zeekr' },
    { name: 'Toutes les marques', href: '/marques' },
  ],
  pratique: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
    { name: 'CGU', href: '/conditions-generales' },
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
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-red-500" aria-hidden="true" />
              <span className="text-xl font-bold tracking-tight text-white">
                Véhicules<span className="text-red-500">Chinois</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-300 max-w-xs">
              Le média francophone de référence sur l&apos;automobile chinoise.
              Actualités, essais, fiches techniques et guides d&apos;achat.
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
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-3 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Rubriques
              </h3>
              <ul className="mt-6 space-y-4">
                {footerNavigation.rubriques.map((item) => (
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
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Marques
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
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Pratique
              </h3>
              <ul className="mt-6 space-y-4">
                {footerNavigation.pratique.map((item) => (
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
              <div className="mt-10 bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Newsletter
                </h3>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  Recevez chaque semaine le meilleur de l&apos;actu auto chinoise.
                </p>
                <form className="mt-4" action="/api/newsletter" method="post">
                  <label htmlFor="email-address" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-500"
                    placeholder="votre@email.com"
                  />
                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    S&apos;abonner
                  </button>
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
