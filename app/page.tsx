import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';
import Hero from '@/components/home/Hero';
import RecentWorkSection from '@/components/home/RecentWorkSection';
import RichContentSection from '@/components/home/RichContentSection';
import ServiceAreas from '@/components/home/ServiceAreas';
import ServiceGrid from '@/components/home/ServiceGrid';
import StatsSection from '@/components/home/StatsSection';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import SchemaLocalBusiness from '@/components/SEO/SchemaLocalBusiness';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Électricien Nice | Dépannage Urgence 24/7 - Devis Gratuit & Sans Engagement | Besoin d'un Électricien Fiable à Nice ?",
  description: "🔌 Électricien de confiance à Nice pour dépannage urgent 24h/24, installation et rénovation électrique. Artisan qualifié, prix raisonnables. Intervention rapide en 30 min ! Devis gratuit immédiat.",
  keywords: "électricien nice, dépannage électrique nice, urgence électricien nice, artisan électricien nice, électricien pas cher nice, devis électricité nice, rénovation électrique nice, installation électrique nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Électricien Nice | Urgence 24/7 - Devis Gratuit",
    description: "Électricien de confiance à Nice pour dépannage urgent 24h/24. Artisan qualifié, prix raisonnables. Intervention rapide.",
    url: 'https://electriciennice-expert.fr',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/og-image-electricien-nice.jpg',
        width: 1200,
        height: 630,
        alt: 'Electricien Nice Expert - Intervention Urgence',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "geo.region": "FR-PAC",
    "geo.placename": "Nice",
    "geo.position": "43.710173;7.261953",
    "ICBM": "43.710173, 7.261953",
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaLocalBusiness />
      <Hero />
      <ServiceGrid />
      <WhyChooseUs />
      <AboutSection />
      <RichContentSection />
      <RecentWorkSection />
      <ServiceAreas />
      <StatsSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </ >
  );
}

















