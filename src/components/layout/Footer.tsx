import Link from 'next/link';
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import NewsletterForm from './NewsletterForm';
import { SOCIAL_LINKS } from '@/src/lib/constants';

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
    { name: 'Lynk & Co', href: '/marques/lynk-co' },
    { name: 'JAECOO', href: '/marques/jaecoo' },
    { name: 'Changan', href: '/marques/changan' },
  ],
  support: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: SOCIAL_LINKS.facebook, icon: Facebook },
  { name: 'Instagram', href: SOCIAL_LINKS.instagram, icon: Instagram },
  { name: 'Twitter / X', href: SOCIAL_LINKS.twitter, icon: Twitter },
  { name: 'YouTube', href: SOCIAL_LINKS.youtube, icon: Youtube },
].filter((s) => s.href !== '');

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
              Le média francophone de référence sur les voitures chinoises — actualités,
              essais, comparatifs et guides d&apos;achat pour la France, la Belgique,
              la Suisse, le Maroc et au-delà.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
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
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} VéhiculesChinois. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="text-xs leading-5 text-gray-500 hover:text-gray-300">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-xs leading-5 text-gray-500 hover:text-gray-300">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
