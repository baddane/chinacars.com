import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Car className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              ChinaCars<span className="text-red-600">MA</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors",
                location.pathname === item.href ? "text-red-600" : "text-gray-900 hover:text-red-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <button className="p-2 text-gray-700 hover:text-red-600 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-1 p-2 text-gray-700 hover:text-red-600 transition-colors">
            <Globe className="h-5 w-5" />
            <span className="text-xs font-bold">FR</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <Car className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold tracking-tight text-gray-900">ChinaCarsMA</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Fermer le menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 flex flex-col gap-4">
              <button className="flex items-center gap-2 text-base font-semibold leading-7 text-gray-900">
                <Search className="h-5 w-5" /> Rechercher
              </button>
              <button className="flex items-center gap-2 text-base font-semibold leading-7 text-gray-900">
                <Globe className="h-5 w-5" /> Langue: Français
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
