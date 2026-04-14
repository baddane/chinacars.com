'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Car, Search, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navigation = [
  { name: 'Actualités', href: '/actualites' },
  { name: 'Marques', href: '/marques' },
  { name: 'Comparatifs', href: '/comparatifs' },
  { name: 'Guides', href: '/guides' },
  { name: 'Électrique', href: '/electrique' },
  { name: 'Maroc', href: '/maroc' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent py-5'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-3',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow"
      >
        Aller au contenu principal
      </a>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Car className={cn('h-8 w-8', transparent ? 'text-red-500' : 'text-red-600')} aria-hidden="true" />
            <span
              className={cn(
                'text-xl font-bold tracking-tight',
                transparent ? 'text-white' : 'text-gray-900',
              )}
            >
              ChinaCars
              <span className={transparent ? 'text-red-500' : 'text-red-600'}>MA</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5',
              transparent ? 'text-white' : 'text-gray-700',
            )}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm font-semibold leading-6 transition-colors',
                  active
                    ? transparent
                      ? 'text-red-400'
                      : 'text-red-600'
                    : transparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-gray-900 hover:text-red-600',
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <button
            type="button"
            aria-label="Rechercher"
            className={cn(
              'p-2 transition-colors',
              transparent ? 'text-white hover:text-red-400' : 'text-gray-700 hover:text-red-600',
            )}
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Changer de langue"
            className={cn(
              'flex items-center gap-1 p-2 transition-colors',
              transparent ? 'text-white hover:text-red-400' : 'text-gray-700 hover:text-red-600',
            )}
          >
            <Globe className="h-5 w-5" aria-hidden="true" />
            <span className="text-xs font-bold">FR</span>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="-m-1.5 p-1.5 flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Car className="h-8 w-8 text-red-600" aria-hidden="true" />
            <span className="text-xl font-bold tracking-tight text-gray-900">ChinaCarsMA</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            aria-label="Fermer le menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
