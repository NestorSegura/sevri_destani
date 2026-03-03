import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary pt-20"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px)',
          }}
        />
      </div>

      {/* Accent diagonal */}
      <div className="absolute -right-20 top-0 h-full w-1/3 skew-x-[-6deg] bg-accent/10" />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Bauhandwerk aus Monheim
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ihr Partner für{' '}
            <span className="text-accent">Innen-&nbsp;und Außenbau</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Qualität, Zuverlässigkeit und Termintreue – seit Jahren Ihr kompetenter
            Ansprechpartner für Bauhandwerk in Monheim und Umgebung.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#kontakt" className="btn-accent text-base">
              Kostenloses Angebot anfordern
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#referenzen" className="btn-outline text-base">
              Unsere Referenzen
            </a>
          </div>

          {/* Phone */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-white/60">Rufen Sie uns an</p>
              <a
                href="tel:+4921737654321"
                className="text-lg font-bold text-white hover:text-accent"
              >
                02173 / 765 4321
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
