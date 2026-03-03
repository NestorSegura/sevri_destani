import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import References from './components/References';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sevri Destani Bauhandwerk',
  description:
    'Bauhandwerk aus Monheim – Ihr Partner für Innen- und Außenbau, Renovierung, Trockenbau, Fliesen- und Malerarbeiten.',
  url: 'https://destani-bau.de',
  telephone: '+4921737654321',
  email: 'info@destani-bau.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Musterstraße 12',
    addressLocality: 'Monheim am Rhein',
    postalCode: '40789',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.0917,
    longitude: 6.8917,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Monheim am Rhein',
  },
  priceRange: '$$',
};

export default function App() {
  return (
    <>
      <Helmet>
        <title>Sevri Destani | Bauhandwerk Monheim – Innen- und Außenbau</title>
        <meta
          name="description"
          content="Sevri Destani Bauhandwerk Monheim – Ihr Experte für Innenausbau, Außenbau, Renovierung, Trockenbau, Fliesen- und Malerarbeiten. Jetzt kostenloses Angebot anfordern!"
        />
        <meta
          name="keywords"
          content="Bauhandwerk Monheim, Innenausbau, Außenbau, Renovierung, Trockenbau, Fliesenarbeiten, Malerarbeiten, Sevri Destani"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Sevri Destani | Bauhandwerk Monheim – Innen- und Außenbau"
        />
        <meta
          property="og:description"
          content="Ihr Partner für Innen- und Außenbau in Monheim. Qualität, Zuverlässigkeit und Termintreue seit über 15 Jahren."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <References />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
