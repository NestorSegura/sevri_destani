import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Kundenstimmen
          </span>
          <h2 className="mb-4 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
            Das sagen unsere Kunden
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Kundenzufriedenheit ist unser wichtigstes Qualitätsmerkmal.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="relative rounded-2xl border border-gray-100 bg-gray-50 p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary-100" />
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-sm text-gray-500">{t.project}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
