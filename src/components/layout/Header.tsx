'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Car, Search, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import SearchModal from '@/src/components/ui/SearchModal';

const navigation = [
  { name: 'Actualités', href: '/actualites' },
  { name: 'Marques', href: '/marques' },
  { name: 'Comparatifs', href: '/comparatifs' },
  { name: 'Guides', href: '/guides' },
  { name: 'Électrique', href: '/electrique' },
  { name: 'Maroc', href: '/maroc' },
];

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex="0"]';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  const menuRef = useRef<HTMLDivElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Focus first element when menu opens; restore focus when it closes
  useEffect(() => {
    if (mobileMenuOpen) {
      const first = menuRef.current?.querySelector<HTMLElement>(FOCUSABLE);
      first?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      openBtnRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Escape to close + focus trap
  const handleMenuKeyDown = useCallback((e: { key: string; shiftKey: boolean; preventDefault: () => void }) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false);
      return;
    }
    if (e.key !== 'Tab') return;

    const focusable = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [],
    );
    if (focusable.length === 0) return;

    const first = focusable[0] as HTMLElement;
    const last = focusable[focusable.length - 1] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

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
            ref={openBtnRef}
            type="button"
            className={cn(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5',
              transparent ? 'text-white' : 'text-gray-700',
            )}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
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
            onClick={() => setSearchOpen(true)}
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

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile menu — full-screen dialog */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        onKeyDown={handleMenuKeyDown}
        className={cn(
          'lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        // keep it in the DOM for CSS transition; hide from AT when closed
        aria-hidden={!mobileMenuOpen}
        // prevent focus from entering when visually hidden
        inert={!mobileMenuOpen ? ('' as unknown as boolean) : undefined}
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
