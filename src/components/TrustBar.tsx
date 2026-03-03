import { Award, CheckCircle, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'Jahre Erfahrung' },
  { icon: CheckCircle, value: '500+', label: 'Projekte abgeschlossen' },
  { icon: Users, value: '300+', label: 'Zufriedene Kunden' },
  { icon: Award, value: '100%', label: 'Festpreisgarantie' },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl md:grid-cols-4 md:gap-8 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <stat.icon className="mb-2 h-8 w-8 text-primary-500" />
              <span className="text-3xl font-extrabold text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-medium text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
