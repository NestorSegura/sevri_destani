import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#ueber-uns', label: 'Über Uns' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#warum-wir', label: 'Warum Wir' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-primary-100/20 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-heading text-lg font-extrabold text-white">
            SD
          </div>
          <div className="hidden sm:block">
            <span className="block text-lg font-bold leading-tight text-primary">
              Sevri Destani
            </span>
            <span className="block text-xs font-medium text-gray-500">
              Bauhandwerk Monheim
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+4921737654321"
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" />
            02173 / 765 4321
          </a>
          <a href="#kontakt" className="btn-primary text-sm">
            Angebot anfordern
          </a>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+4921737654321"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white"
            aria-label="Anrufen"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-gray-700 transition-colors hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-2 w-full text-center text-sm"
          >
            Kostenloses Angebot anfordern
          </a>
        </nav>
      )}
    </header>
  );
}
