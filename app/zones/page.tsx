import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Home, Zap, Shield, CheckCircle, Euro, FileText, Lightbulb, MapPin, Clock, Users, Award, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: "Électricien Nice 06 | Urgence & Installation - Devis Gratuit 24/7",
  description: "🔌 Électricien professionnel à Nice pour dépannage, installation et rénovation électrique. Service d&apos;urgence 24h/24, 7j/7. Devis gratuit et intervention rapide dans tous les quartiers de Nice.",
  keywords: "électricien nice, dépannage électrique nice, électricien urgence nice, rénovation électrique nice, installateur électricité nice, artisan électricien nice, devis électricité gratuit nice, mise aux normes électrique nice, panne électricité nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/zones/nice',
  },
  openGraph: {
    title: "Électricien Nice 06 - Dépannage & Installation - Devis Gratuit",
    description: "Électricien professionnel à Nice pour tous travaux électriques. Intervention rapide 24h/24 dans tous les quartiers niçois.",
    url: 'https://electriciennice-expert.fr/zones/nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/electricien-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Électricien professionnel à Nice - Intervention rapide',
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
};

export default function ElectricienNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            "name": "Electricien Nice Expert",
            "telephone": "+33756935200",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nice",
              "postalCode": "06000",
              "addressRegion": "Alpes-Maritimes",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.7102",
              "longitude": "7.2620"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "43.7102",
                "longitude": "7.2620"
              },
              "geoRadius": "15000"
            },
            "url": "https://electriciennice-expert.fr/zones/nice",
            "description": "Électricien professionnel à Nice pour dépannage, installation et rénovation électrique. Service d&apos;urgence 24h/24, 7j/7.",
            "areaServed": ["Nice", "Cimiez", "Vieux-Nice", "Nice Centre", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"]
          })
        }}
      />

      {/* Hero Section avec image de fond de Nice */}
      <section className="relative bg-gradient-to-r from-[#1b1e3f] to-[#2a2f5d] text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* <div className="absolute inset-0">
          <Image
            src="/images/nice-panorama.webp"
            alt="Panorama de Nice avec la Promenade des Anglais"
            fill
            className="object-cover"
          />
        </div> */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-[#f25000] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="mr-2" size={16} />
              Service d&apos;Urgence 24/7
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Électricien Professionnel à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Intervention rapide pour dépannage électrique, installation et rénovation dans tous les quartiers de Nice. 
              Service disponible 24h/24 et 7j/7 pour répondre à vos urgences électriques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Clock className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Disponible 24h/24</h3>
              <p className="text-blue-100">Intervention rapide pour urgences électriques</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <MapPin className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Sur Tout Nice</h3>
              <p className="text-blue-100">De Cimiez au Vieux-Nice en passant par le Centre</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis Gratuit</h3>
              <p className="text-blue-100">Transparence des prix sans surprise</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis-electricien-gratuit">
                <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  <FileText className="mr-2" size={20} />
                  Devis gratuit en ligne
                </Button>
              </Link>
              <Link href="tel:+33756935200">
                <Button variant="outline" size="xlg" className="border-white text-[#1b1e3f] hover:bg-white hover:text-[#1b1e3f]">
                  <Phone className="mr-2" size={20} />
                  07 56 93 52 00
                </Button>
              </Link>
            </div>
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Intervention sous 1h à Nice</p>
          </div>
        </div>
      </section>

      {/* Introduction Section avec image typique de Nice */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Électricien à Nice : Expert en Dépannage et Installation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Située au cœur de la Côte d&apos;Azur, Nice présente des spécificités électriques uniques 
                liées à son architecture variée, son climat méditerranéen et son patrimoine historique. 
                Que vous habitiez une résidence moderne près de la Promenade des Anglais, un appartement 
                haussmannien dans le centre-ville ou une villa ancienne sur les collines de Cimiez, 
                nos électriciens niçois connaissent parfaitement les particularités de chaque quartier.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe d&apos;électriciens certifiés intervient dans tout Nice et ses alentours 
                pour tous types de travaux électriques. De la simple réparation à l&apos;installation 
                complète, en passant par la mise aux normes NFC 15-100, nous mettons notre expertise 
                à votre service pour garantir votre sécurité et votre confort.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ⚡ <span className="text-[#f25000]">Expertise locale</span> - 
                  Notre connaissance des spécificités des installations électriques niçoises nous permet 
                  d&apos;intervenir efficacement dans tous les quartiers, du Vieux-Nice aux zones résidentielles de l&apos;ouest.
                </p>
              </div>
            </div>
            <div className="relative h-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/electricien-intervention-nice.webp"
                alt="Électricien professionnel intervenant à Nice dans le quartier de la Promenade des Anglais"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nouvelle Section Témoignages */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Ils nous font confiance à Nice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                Intervention rapide et professionnelle pour une panne électrique dans mon appartement du Vieux-Nice. 
                Je recommande vivement ce service !
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                  <Users className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Marie L.</p>
                  <p className="text-sm text-gray-500">Vieux-Nice</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                Rénovation complète de l&apos;électricité de notre villa à Cimiez. Travail soigné, respect des délais et devis respecté. 
                Excellente communication tout au long du projet.
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                  <Users className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Pierre D.</p>
                  <p className="text-sm text-gray-500">Cimiez</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                Installation de bornes de recharge pour véhicules électriques dans notre copropriété près de Jean Médecin. 
                Service professionnel et conseils avisés.
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                  <Users className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Sophie M.</p>
                  <p className="text-sm text-gray-500">Nice Centre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section avec focus sur les services locaux */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Services d&apos;Électricité à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Dépannage Électrique Urgent</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Panne de courant, disjoncteur qui saute, prise défectueuse? Nos électriciens 
                interviennent rapidement dans tout Nice pour résoudre vos problèmes électriques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Intervention sous 1h à Nice</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Diagnostic précis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Réparation efficace</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Installation Neuve</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Construction neuve ou rénovation complète? Nous réalisons vos installations 
                électriques aux normes NFC 15-100 pour votre sécurité.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Tableau électrique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Circuits spécialisés</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Éclairage et prises</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mise aux Normes</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Votre installation est ancienne ou non conforme? Nous procédons à la mise 
                aux normes NFC 15-100 pour garantir votre sécurité.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Diagnostic complet</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Mise à niveau</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Attestation de conformité</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Éclairage & Ambiance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Création d&apos;ambiances lumineuses, éclairage design, spots LED, 
                éclairage extérieur pour valoriser votre propriété niçoise.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Éclairage intérieur</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Éclairage extérieur</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Solutions LED économiques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Bornes de Recharge VE</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Installation de bornes de recharge pour véhicules électriques 
                à domicile ou en copropriété dans tout Nice.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Wallbox domicile</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Solutions copropriété</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Aides et subventions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Diagnostic & Devis</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Bilan complet de votre installation électrique avec rapport détaillé 
                et devis transparent sans engagement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Diagnostic gratuit</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Devis détaillé</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Conseils personnalisés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nouvelle Section Zones d&apos;Intervention */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Zones d&apos;Intervention à Nice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/zones/nice/electricien-nice-centre">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/electricien-nice-centre-intervention.webp"
                    alt="Électricien dans le centre-ville de Nice"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nice Centre</h3>
                <p className="text-gray-600">
                  Intervention dans le centre-ville de Nice, Jean Médecin, Liberation, 
                  et tous les quartiers centraux pour dépannage et installation électrique.
                </p>
              </div>
            </Link>
            
            <Link href="/zones/nice/electricien-vieux-nice">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/electricien-vieux-nice-intervention.webp"
                    alt="Électricien dans le Vieux-Nice"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vieux-Nice</h3>
                <p className="text-gray-600">
                  Spécialiste des interventions dans le Vieux-Nice et son patrimoine historique, 
                  avec une approche respectueuse de l&apos;architecture ancienne.
                </p>
              </div>
            </Link>
            
            <Link href="/zones/nice/electricien-cimiez">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/electricien-cimiez-intervention.webp"
                    alt="Électricien à Cimiez"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cimiez</h3>
                <p className="text-gray-600">
                  Expert des villas et résidences de standing de Cimiez, avec des solutions 
                  électriques haut de gamme pour propriétés exigeantes.
                </p>
              </div>
            </Link>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Nous intervenons également dans tous les autres quartiers de Nice : 
              <span className="text-[#f25000] font-semibold"> Saint-Augustin, Pasteur, Magnan, Riquier, Port, Mont Boron, Fabron</span>, 
              et les communes environnantes comme <span className="text-[#f25000] font-semibold">Cagnes-sur-Mer, Saint-Laurent-du-Var, Villefranche-sur-Mer</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section avec badges de certification */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi Choisir un Électricien Local à Nice ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Avantages d&apos;un électricien niçois</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Connaissance du bâti niçois</h4>
                    <p className="text-gray-600">
                      Notre expérience des spécificités architecturales de Nice (immeubles haussmanniens, 
                      villas Belle Époque, constructions modernes) nous permet d&apos;intervenir avec efficacité 
                      et respect du patrimoine.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Intervention rapide</h4>
                    <p className="text-gray-600">
                      Basés à Nice, nous pouvons intervenir en moins d&apos;une heure dans la plupart des quartiers, 
                      essentiel en cas d&apos;urgence électrique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adaptation au climat méditerranéen</h4>
                    <p className="text-gray-600">
                      Nous connaissons les contraintes spécifiques au climat niçois (humidité marine, 
                      forte chaleur estivale) et proposons des solutions adaptées pour une installation durable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Notre engagement qualité</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Électriciens certifiés</h4>
                    <p className="text-gray-600">
                      Tous nos techniciens sont certifiés et formés régulièrement aux dernières normes 
                      et technologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Matériaux de qualité</h4>
                    <p className="text-gray-600">
                      Nous utilisons exclusivement des matériaux aux normes françaises et européennes, 
                      garantissant sécurité et durabilité.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Garantie décennale</h4>
                    <p className="text-gray-600">
                      Tous nos travaux sont couverts par une garantie décennale, vous assurant 
                      une protection à long terme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Badges de certification */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Award className="mx-auto mb-2 text-[#f25000]" size={32} />
              <p className="font-semibold">Certifié Qualifelec</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="mx-auto mb-2 text-[#f25000]" size={32} />
              <p className="font-semibold">Normes NFC 15-100</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Zap className="mx-auto mb-2 text-[#f25000]" size={32} />
              <p className="font-semibold">Expert Installation</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="mx-auto mb-2 text-[#f25000]" size={32} />
              <p className="font-semibold">Service 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Questions Fréquentes - Électricien à Nice
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Combien de temps faut-il pour une intervention électrique à Nice ?
              </h3>
              <p className="text-gray-600">
                Pour une urgence électrique, nous intervenons généralement en moins d&apos;une heure dans 
                la plupart des quartiers de Nice. Pour une installation complète ou une rénovation, 
                le délai dépend de l&apos;ampleur des travaux mais nous nous efforçons toujours de minimiser 
                les délais d&apos;intervention.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Proposez-vous des services d&apos;urgence 24h/24 à Nice ?
              </h3>
              <p className="text-gray-600">
                Oui, notre service d&apos;urgence est disponible 24 heures sur 24 et 7 jours sur 7, 
                y compris les week-ends et jours fériés. Nous comprenons qu&apos;une panne électrique 
                n&apos;attend pas et pouvons intervenir rapidement dans tout Nice et ses environs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Comment se déroule une mise aux normes électrique à Nice ?
              </h3>
              <p className="text-gray-600">
                La mise aux normes NFC 15-100 commence par un diagnostic complet de votre installation. 
                Nous identifions les points non conformes et établissons un devis détaillé. 
                Une fois validé, nous procédons aux travaux qui peuvent inclure le remplacement du tableau 
                électrique, l&apos;ajout de prises de terre, l&apos;installation de disjoncteurs différentiels, etc. 
                Nous vous remettons enfin une attestation de conformité.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quels sont les tarifs d&apos;un électricien à Nice ?
              </h3>
              <p className="text-gray-600">
                Nos tarifs sont transparents et communiqués à l&apos;avance dans le devis détaillé. 
                Ils varient selon la nature et l&apos;ampleur des travaux, mais nous nous engageons 
                à proposer des prix justes et compétitifs pour Nice et sa région. 
                Contactez-nous pour un devis personnalisé gratuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section avec numéro de téléphone bien visible */}
      <section className="py-16 bg-[#1b1e3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d&apos;un Électricien à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens qualifiés intervient dans tout Nice et ses alentours 
            pour tous vos travaux électriques. Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis-electricien-gratuit">
              <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                <FileText className="mr-2" size={24} />
                Demander un devis
              </Button>
            </Link>
            <Link href="tel:+33756935200">
              <Button size="xlg" className="bg-white text-[#1b1e3f] hover:bg-gray-100 font-semibold">
                <Phone className="mr-2" size={24} />
                07 56 93 52 00
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-blue-200">
            Interventions sur Nice, Cagnes-sur-Mer, Saint-Laurent-du-Var et toutes les Alpes-Maritimes
          </p>
        </div>
      </section>
    </>
  );
}