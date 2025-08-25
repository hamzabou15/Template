import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Home, Zap, Shield, CheckCircle, FileText, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: "Électricien Riquier | Urgence 24/7 - Devis Gratuit",
  description: "🔌 Électricien professionnel à Riquier pour dépannage, installation et rénovation électrique. Service d&apos;urgence 24h/24, 7j/7. Devis gratuit et intervention rapide.",
  keywords: "électricien riquier nice, dépannage électrique riquier, électricien urgence riquier, rénovation électrique riquier, installateur électricité riquier, artisan électricien riquier",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/zones/nice/electricien-riquier',
  },
  openGraph: {
    title: "Électricien Riquier - Dépannage & Installation - Devis Gratuit",
    description: "Électricien professionnel à Riquier pour tous travaux électriques. Intervention rapide 24h/24 dans ce quartier populaire et authentique de Nice.",
    url: 'https://electriciennice-expert.fr/zones/nice/electricien-riquier',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/riquier-og.webp',
        width: 1200,
        height: 630,
        alt: 'Électricien professionnel à Riquier - Intervention rapide',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ElectricienRiquier() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            "name": "Electricien Nice Expert - Riquier",
            "telephone": "+33756935200",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nice",
              "postalCode": "06300",
              "addressRegion": "Alpes-Maritimes",
              "addressCountry": "FR",
              "streetAddress": "Riquier"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.7030",
              "longitude": "7.2900"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "43.7030",
                "longitude": "7.2900"
              },
              "geoRadius": "1500"
            },
            "url": "https://electriciennice-expert.fr/zones/nice/electricien-riquier",
            "description": "Électricien professionnel à Riquier pour dépannage, installation et rénovation électrique. Service d&apos;urgence 24h/24, 7j/7.",
            "areaServed": ["Riquier", "Gare du Sud", "Place Île-de-Beauté", "Rue Cassini", "Quartier Riquier"]
          })
        }}
      />

      {/* Hero Section avec image de fond de Riquier */}
      <section className="relative bg-gradient-to-r from-[#1b1e3f] to-[#2a2f5d] text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-[#f25000] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="mr-2" size={16} />
              Service d&apos;Urgence 24/7
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Électricien Professionnel à <span className="text-[#f25000]">Riquier</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Intervention rapide pour dépannage électrique, installation et rénovation dans le quartier Riquier à Nice. 
              Service disponible 24h/24 et 7j/7 pour répondre à vos urgences électriques.
            </p>
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
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Intervention sous 1h à Riquier</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Électricien à Riquier : Expert en Dépannage et Installation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Le quartier Riquier, situé à d&apos;est de Nice, est un secteur populaire et authentique 
                qui présente un mélange d&apos;habitations anciennes et de petits commerces. Nos électriciens 
                spécialistes de Riquier connaissent parfaitement les spécificités de ce quartier en 
                pleine mutation et renouvellement urbain.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Que vous soyez particulier, commerçant ou gestionnaire de copropriété dans le quartier Riquier, 
                nous intervenons pour tous types de travaux électriques : dépannage urgent, 
                rénovation complète, mise aux normes NFC 15-100, installation de bornes de recharge 
                ou éclairage commercial.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ⚡ <span className="text-[#f25000]">Expertise locale</span> - 
                  Notre connaissance des particularités des installations électriques de Riquier 
                  nous permet d&apos;intervenir efficacement dans ce quartier en pleine transformation.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/electricien-riquier-intervention.webp"
                alt="Électricien professionnel intervenant dans le quartier Riquier à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section avec focus sur les services locaux */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Services d&apos;Électricité à Riquier
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
                interviennent rapidement dans tout Riquier pour résoudre vos problèmes électriques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Intervention sous 1h à Riquier</span>
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
                <h3 className="text-xl font-semibold text-gray-900">Rénovation Électrique</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Rénovation complète de votre installation électrique aux normes NFC 15-100 
                pour garantir votre sécurité et moderniser votre habitation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Tableau électrique neuf</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Mise à la terre</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Gestion des circuits</span>
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
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Ils nous font confiance à Riquier
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;Intervention rapide pour une panne électrique dans mon appartement de Riquier. 
                Technicien très professionnel et prix très correct. Je recommande !&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                  <Users className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Thomas M.</p>
                  <p className="text-sm text-gray-500">Riquier</p>
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
                &quot;Rénovation complète de d&apos;électricité de notre commerce place Île-de-Beauté. 
                Travail soigné et respect des délais. Excellente communication.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                  <Users className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Sophie L.</p>
                  <p className="text-sm text-gray-500">Commerçante Riquier</p>
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
                &quot;Installation de spots LED dans tout notre appartement. Devis respecté et finitions parfaites. 
                Service très professionnel.&quot;
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                  <Users className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Marc D.</p>
                  <p className="text-sm text-gray-500">Riquier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1b1e3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d&apos;un Électricien à Riquier ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens qualifiés intervient dans tout le quartier Riquier 
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
            Interventions sur Riquier, Place Île-de-Beauté, Rue Cassini et tous les secteurs du quartier
          </p>
        </div>
      </section>
    </>
  );
}