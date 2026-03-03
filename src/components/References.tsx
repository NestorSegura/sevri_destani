import { useState } from 'react';
import { references } from '../data/references';

const categories = ['Alle', 'Innen', 'Außen'] as const;

export default function References() {
  const [active, setActive] = useState<string>('Alle');

  const filtered =
    active === 'Alle'
      ? references
      : references.filter((r) => r.category === active);

  return (
    <section id="referenzen" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Referenzen
          </span>
          <h2 className="mb-4 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            Unsere Projekte
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Überzeugen Sie sich selbst von der Qualität unserer Arbeit. Hier finden Sie
            eine Auswahl unserer erfolgreich abgeschlossenen Projekte.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === cat
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ref) => (
            <article
              key={ref.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex h-full items-center justify-center">
                  <p className="text-xs text-gray-400">{ref.imageAlt}</p>
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                  {ref.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">{ref.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{ref.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
