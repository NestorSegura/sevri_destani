export interface Testimonial {
  id: string;
  name: string;
  project: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Familie Schneider',
    project: 'Komplettrenovierung',
    quote:
      'Herr Destani und sein Team haben unsere Wohnung komplett renoviert. Die Arbeit war erstklassig, der Zeitplan wurde eingehalten und die Kommunikation war jederzeit transparent. Absolute Empfehlung!',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Thomas Weber',
    project: 'Badezimmer & Fliesen',
    quote:
      'Unser neues Badezimmer ist ein Traum geworden. Die Fliesenarbeiten sind makellos und alles wurde termingerecht fertiggestellt. Das Preis-Leistungs-Verhältnis war hervorragend.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Petra & Klaus Hoffmann',
    project: 'Fassade & Terrasse',
    quote:
      'Die Fassadensanierung und der Terrassenbau wurden professionell und sauber ausgeführt. Man merkt, dass hier echte Handwerker am Werk sind. Wir würden jederzeit wieder mit Sevri Destani arbeiten.',
    rating: 5,
  },
];
