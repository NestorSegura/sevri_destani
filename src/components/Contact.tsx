import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const projectTypes = [
  'Bitte wählen...',
  'Innenausbau',
  'Außenbau',
  'Renovierung & Sanierung',
  'Trockenbau',
  'Fliesenarbeiten',
  'Malerarbeiten',
  'Sonstiges',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Kontakt
          </span>
          <h2 className="mb-4 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            Kostenloses Angebot anfordern
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Beschreiben Sie uns Ihr Projekt und wir melden uns innerhalb von 24 Stunden
            mit einem unverbindlichen Angebot bei Ihnen.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    Vielen Dank für Ihre Anfrage!
                  </h3>
                  <p className="text-gray-600">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="project"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Projektart
                      </label>
                      <select
                        id="project"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      >
                        {projectTypes.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-base">
                    <Send className="h-5 w-5" />
                    Anfrage absenden
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Ihre Daten werden vertraulich behandelt und nicht an Dritte
                    weitergegeben.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6 lg:col-span-2">
            {/* Contact cards */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-primary">Kontaktdaten</h3>
              <div className="space-y-4">
                <a
                  href="tel:+4921737654321"
                  className="flex items-start gap-3 text-gray-600 transition-colors hover:text-primary-500"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <p>02173 / 765 4321</p>
                  </div>
                </a>
                <a
                  href="mailto:info@destani-bau.de"
                  className="flex items-start gap-3 text-gray-600 transition-colors hover:text-primary-500"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <p className="font-semibold text-gray-900">E-Mail</p>
                    <p>info@destani-bau.de</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p>Musterstraße 12</p>
                    <p>40789 Monheim am Rhein</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex aspect-[4/3] items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-primary/30" />
                  <p className="text-sm text-gray-400">Google Maps</p>
                  <p className="text-xs text-gray-400">Monheim am Rhein</p>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="rounded-2xl bg-primary p-6">
              <h3 className="mb-3 text-lg font-bold text-white">Geschäftszeiten</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Mo – Fr</span>
                  <span className="font-medium text-white">07:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span className="font-medium text-white">08:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag</span>
                  <span className="font-medium text-white/60">Geschlossen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
