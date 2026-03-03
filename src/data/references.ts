export interface Reference {
  id: string;
  title: string;
  description: string;
  category: 'Innen' | 'Außen';
  imageAlt: string;
}

export const references: Reference[] = [
  {
    id: 'ref-1',
    title: 'Komplettumbau Altbauwohnung',
    description:
      'Vollständige Renovierung einer 120m² Altbauwohnung in Monheim inkl. neuem Badezimmer, Küche und Bodenbelägen.',
    category: 'Innen',
    imageAlt: 'Renovierte Altbauwohnung mit modernem Interieur in Monheim',
  },
  {
    id: 'ref-2',
    title: 'Fassadensanierung Mehrfamilienhaus',
    description:
      'Energetische Fassadensanierung eines Mehrfamilienhauses mit Wärmedämmverbundsystem und neuem Anstrich.',
    category: 'Außen',
    imageAlt: 'Sanierte Fassade eines Mehrfamilienhauses',
  },
  {
    id: 'ref-3',
    title: 'Badezimmer-Modernisierung',
    description:
      'Komplette Badmodernisierung mit bodengleicher Dusche, Großformatfliesen und moderner Beleuchtung.',
    category: 'Innen',
    imageAlt: 'Modernes Badezimmer mit bodengleicher Dusche',
  },
  {
    id: 'ref-4',
    title: 'Terrassenanlage mit Naturstein',
    description:
      'Gestaltung einer 45m² Terrasse mit Natursteinplatten, integrierter Beleuchtung und Pflanzbeeten.',
    category: 'Außen',
    imageAlt: 'Terrasse mit Natursteinplatten und Beleuchtung',
  },
  {
    id: 'ref-5',
    title: 'Dachgeschossausbau',
    description:
      'Ausbau eines Dachgeschosses zu einer vollwertigen Wohneinheit mit Trockenbau, Dämmung und Innenausstattung.',
    category: 'Innen',
    imageAlt: 'Ausgebautes Dachgeschoss mit Holzbalken',
  },
  {
    id: 'ref-6',
    title: 'Eingangsbereich & Vorgarten',
    description:
      'Neugestaltung des Eingangsbereichs mit Pflasterarbeiten, Treppenanlage und Bepflanzung.',
    category: 'Außen',
    imageAlt: 'Neugestalteter Eingangsbereich mit Pflasterung',
  },
];
