import { Shield, Clock, ThumbsUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Qualität',
    text: 'Hochwertige Materialien und sorgfältige Verarbeitung in jedem Projekt.',
  },
  {
    icon: Clock,
    title: 'Zuverlässigkeit',
    text: 'Wir halten, was wir versprechen – termingerecht und im vereinbarten Budget.',
  },
  {
    icon: ThumbsUp,
    title: 'Termintreue',
    text: 'Verbindliche Zeitpläne und transparente Kommunikation von Anfang an.',
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-3xl font-extrabold text-primary">SD</span>
                  </div>
                  <p className="text-sm text-gray-400">Bild: Team bei der Arbeit</p>
                </div>
              </div>
            </div>
            {/* Accent bar */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-accent/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
              Über Uns
            </span>
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
              Bauhandwerk mit Leidenschaft
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Sevri Destani steht für erstklassiges Bauhandwerk in Monheim und Umgebung.
              Mit langjähriger Erfahrung im Innen- und Außenbau realisieren wir Projekte
              jeder Größenordnung – von der Badezimmerrenovierung bis zur kompletten
              Fassadensanierung.
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              Unser Anspruch: Jedes Projekt wird mit der gleichen Sorgfalt und
              Professionalität ausgeführt. Denn Ihr Zuhause verdient nur das Beste.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <v.icon className="h-5 w-5 text-accent-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{v.title}</h3>
                    <p className="text-sm text-gray-600">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
