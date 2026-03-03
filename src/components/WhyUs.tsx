import { Award, ShieldCheck, BadgeEuro, CalendarCheck } from 'lucide-react';

const usps = [
  {
    icon: Award,
    title: 'Erfahrung',
    description:
      'Über 15 Jahre Erfahrung im Bauhandwerk. Wir kennen jede Herausforderung und finden die beste Lösung.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualität',
    description:
      'Erstklassige Materialien und sorgfältige Verarbeitung. Wir arbeiten nach höchsten Standards.',
  },
  {
    icon: BadgeEuro,
    title: 'Festpreisgarantie',
    description:
      'Keine versteckten Kosten. Sie erhalten ein verbindliches Angebot und zahlen genau den vereinbarten Preis.',
  },
  {
    icon: CalendarCheck,
    title: 'Termintreue',
    description:
      'Wir halten unsere Termine ein. Verbindliche Zeitpläne und pünktliche Fertigstellung sind für uns selbstverständlich.',
  },
];

export default function WhyUs() {
  return (
    <section id="warum-wir" className="section-padding bg-primary">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Warum Wir
          </span>
          <h2 className="mb-4 font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Das zeichnet uns aus
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Warum sich Kunden in Monheim und Umgebung für Sevri Destani entscheiden.
          </p>
        </div>

        {/* USP cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/20">
                <usp.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{usp.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
