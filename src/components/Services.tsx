import {
  Home,
  Building2,
  Wrench,
  LayoutGrid,
  Grid3x3,
  Paintbrush,
  type LucideIcon,
} from 'lucide-react';
import { services } from '../data/services';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Wrench,
  LayoutGrid,
  Grid3x3,
  Paintbrush,
};

export default function Services() {
  return (
    <section id="leistungen" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Unsere Leistungen
          </span>
          <h2 className="mb-4 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            Alles aus einer Hand
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Von der ersten Beratung bis zur Fertigstellung – wir bieten Ihnen ein
            umfassendes Leistungsspektrum im Bauhandwerk.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <article
                key={service.id}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 transition-colors group-hover:bg-primary-500">
                  <Icon className="h-7 w-7 text-primary-500 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
