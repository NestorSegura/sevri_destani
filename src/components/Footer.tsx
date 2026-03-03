import { Phone, Mail, MapPin } from 'lucide-react';

const serviceLinks = [
  'Innenausbau',
  'Außenbau',
  'Renovierung & Sanierung',
  'Trockenbau',
  'Fliesenarbeiten',
  'Malerarbeiten',
];

const quickLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über Uns', href: '#ueber-uns' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 pt-16 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 font-heading text-lg font-extrabold">
                SD
              </div>
              <div>
                <span className="block text-lg font-bold leading-tight">
                  Sevri Destani
                </span>
                <span className="block text-xs text-white/60">
                  Bauhandwerk Monheim
                </span>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Ihr zuverlässiger Partner für Innen- und Außenbau in Monheim am Rhein und
              Umgebung.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <a
                href="tel:+4921737654321"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4" /> 02173 / 765 4321
              </a>
              <a
                href="mailto:info@destani-bau.de"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4" /> info@destani-bau.de
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Monheim am Rhein
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-bold">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-bold">Leistungen</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#leistungen" className="hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-bold">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Sevri Destani Bauhandwerk. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}
