'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Car, Search, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navigation = [
  { name: 'Actualités', href: '/actualites' },
  { name: 'Essais', href: '/essais' },
  {
    name: 'Marques',
    href: '/marques',
    children: [
      { name: 'BYD', href: '/marques/byd' },
      { name: 'MG Motor', href: '/marques/mg' },
      { name: 'Chery', href: '/marques/chery' },
      { name: 'Geely', href: '/marques/geely' },
      { name: 'GWM', href: '/marques/gwm' },
      { name: 'Zeekr', href: '/marques/zeekr' },
      { name: 'NIO', href: '/marques/nio' },
      { name: 'XPeng', href: '/marques/xpeng' },
      { name: 'Leapmotor', href: '/marques/leapmotor' },
      { name: 'Toutes les marques', href: '/marques' },
    ],
  },
  { name: 'Comparatifs', href: '/comparatifs' },
  { name: 'Électrique', href: '/electrique' },
  { name: 'Guides', href: '/guides' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent py-5'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3',
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
              Véhicules
              <span className={transparent ? 'text-red-500' : 'text-red-600'}>Chinois</span>
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
            if (item.children) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'text-sm font-semibold leading-6 transition-colors inline-flex items-center gap-1',
                      active
                        ? transparent ? 'text-red-400' : 'text-red-600'
                        : transparent ? 'text-white/90 hover:text-white' : 'text-gray-900 hover:text-red-600',
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  {openDropdown === item.name && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                      <div className="w-56 rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 p-2">
                        {item.children.map((child, idx) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors',
                              idx === item.children!.length - 1 && 'mt-1 border-t border-gray-100 pt-2 font-bold text-red-600',
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm font-semibold leading-6 transition-colors',
                  active
                    ? transparent ? 'text-red-400' : 'text-red-600'
                    : transparent ? 'text-white/90 hover:text-white' : 'text-gray-900 hover:text-red-600',
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
        </div>
      </nav>

      <div
        className={cn(
          'lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 transition-transform duration-300 ease-in-out overflow-y-auto',
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
            <span className="text-xl font-bold tracking-tight text-gray-900">Véhicules<span className="text-red-600">Chinois</span></span>
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
            <div className="space-y-1 py-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
                      {item.children.slice(0, -1).map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
