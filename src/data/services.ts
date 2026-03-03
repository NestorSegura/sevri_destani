export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'innenausbau',
    title: 'Innenausbau',
    description:
      'Kompletter Innenausbau nach Ihren Wünschen – von der Planung bis zur Fertigstellung. Wir gestalten Ihre Räume funktional und ästhetisch.',
    icon: 'Home',
  },
  {
    id: 'aussenbau',
    title: 'Außenbau',
    description:
      'Fassadenarbeiten, Terrassenbau und Außenanlagen. Wir sorgen für ein ansprechendes Erscheinungsbild Ihres Gebäudes.',
    icon: 'Building2',
  },
  {
    id: 'renovierung',
    title: 'Renovierung & Sanierung',
    description:
      'Fachgerechte Renovierung und Sanierung von Wohn- und Gewerbeimmobilien. Wir hauchen alten Räumen neues Leben ein.',
    icon: 'Wrench',
  },
  {
    id: 'trockenbau',
    title: 'Trockenbau',
    description:
      'Professioneller Trockenbau für Wände, Decken und Böden. Schnelle und saubere Ausführung mit hochwertigen Materialien.',
    icon: 'LayoutGrid',
  },
  {
    id: 'fliesen',
    title: 'Fliesenarbeiten',
    description:
      'Präzise Fliesenverlegung in Bad, Küche und Wohnbereich. Wir arbeiten mit allen gängigen Formaten und Materialien.',
    icon: 'Grid3x3',
  },
  {
    id: 'maler',
    title: 'Malerarbeiten',
    description:
      'Professionelle Malerarbeiten für Innen und Außen. Farbberatung, Tapezierarbeiten und dekorative Wandgestaltung.',
    icon: 'Paintbrush',
  },
];
