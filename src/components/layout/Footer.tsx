import Link from 'next/link';
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerNavigation = {
  marques: [
    { name: 'BYD', href: '/marques/byd' },
    { name: 'MG Motor', href: '/marques/mg' },
    { name: 'Chery', href: '/marques/chery' },
    { name: 'Geely', href: '/marques/geely' },
    { name: 'GWM', href: '/marques/gwm' },
    { name: 'Zeekr', href: '/marques/zeekr' },
    { name: 'NIO', href: '/marques/nio' },
    { name: 'XPeng', href: '/marques/xpeng' },
    { name: 'Leapmotor', href: '/marques/leapmotor' },
  ],
  categories: [
    { name: 'Nouveautés', href: '/actualites?categorie=nouveaute' },
    { name: 'Essais', href: '/actualites?categorie=essai' },
    { name: 'Comparatifs', href: '/comparatifs' },
    { name: 'Guides d\'achat', href: '/guides' },
    { name: 'Électrique', href: '/electrique' },
    { name: 'Hybride', href: '/actualites?categorie=hybride' },
    { name: 'Marché Maroc', href: '/maroc' },
  ],
  ressources: [
    { name: 'Toutes les actualités', href: '/actualites' },
    { name: 'Toutes les marques', href: '/marques' },
    { name: 'Euro NCAP', href: 'https://www.euroncap.com/fr', external: true },
    { name: 'Douanes Maroc', href: 'https://www.douane.gov.ma', external: true },
    { name: 'Min. Transport', href: 'https://www.mtpnet.gov.ma', external: true },
  ],
  support: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Mentions légales', href: '/mentions-legales' },
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
          {/* Branding */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-red-500" aria-hidden="true" />
              <span className="text-xl font-bold tracking-tight text-white">
                ChinaCars<span className="text-red-500">MA</span>
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

          {/* Navigation principale */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Marques */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Marques</h3>
              <ul className="mt-6 space-y-3">
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

            {/* Catégories + Ressources */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Catégories</h3>
                <ul className="mt-6 space-y-3">
                  {footerNavigation.categories.map((item) => (
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
                <h3 className="text-sm font-semibold leading-6 text-white">Informations</h3>
                <ul className="mt-6 space-y-3">
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
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter + Ressources externes */}
          <div className="mt-16 xl:mt-0 space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-sm font-semibold leading-6 text-white">Newsletter</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Recevez les dernières actus auto directement dans votre boîte mail.
              </p>
              <form className="mt-6 flex flex-col gap-3" action="/api/newsletter" method="post">
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-500"
                  placeholder="votre@email.com"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  S&apos;abonner
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Ressources utiles</h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.ressources.map((item) => (
                  <li key={item.name}>
                    {'external' in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-6 text-gray-400 hover:text-white flex items-center gap-1"
                      >
                        {item.name}
                        <span className="text-xs text-gray-500">↗</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} ChinaCarsMA. Tous droits réservés.
          </p>
          <nav className="flex gap-4" aria-label="Liens légaux">
            <Link href="/mentions-legales" className="text-xs text-gray-400 hover:text-white">
              Mentions légales
            </Link>
            <Link href="/contact" className="text-xs text-gray-400 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
