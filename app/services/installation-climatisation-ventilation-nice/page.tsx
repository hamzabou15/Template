// app/services/installation-climatisation-ventilation-nice/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Shield, Zap, Home, Thermometer, Wind, Euro, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: "Installation Climatisation & Ventilation à Nice | Expert Climatiseur",
  description: "❄️ Installation de climatisation et ventilation à Nice par des techniciens certifiés. Solutions réversibles, gainables et splits pour un confort optimal. Devis gratuit et conseils experts.",
  keywords: "installation climatisation Nice, climatiseur Nice, ventilation mécanique Nice, pompe à chaleur Nice, climatisation réversible Nice, entretien climatiseur Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/installation-climatisation-ventilation-nice',
  },
  openGraph: {
    title: "Installation Climatisation & Ventilation à Nice - Expert Climatiseur",
    description: "Installation de climatisation et ventilation à Nice par des techniciens certifiés. Solutions réversibles, gainables et splits pour un confort optimal.",
    url: 'https://electriciennice-expert.fr/services/installation-climatisation-ventilation-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/installation-climatisation-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Installation climatisation et ventilation à Nice',
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

export default function InstallationClimatisationVentilationNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Installation de climatisation et ventilation",
            "provider": {
              "@type": "HVACBusiness",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"]
            },
            "description": "Installation de climatisation et ventilation à Nice par des techniciens certifiés",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de Climatisation",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation de climatisation réversible"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1b1e3f] to-[#2a2f5d] text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-[#f25000] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Thermometer className="mr-2" size={16} />
              Expert climatisation certifié
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Installation Climatisation & Ventilation à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Solutions complètes de climatisation, ventilation et pompes à chaleur à Nice. Confort thermique optimal été comme hiver avec des experts certifiés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Thermometer className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Climatisation réversible</h3>
              <p className="text-blue-100">Rafraîchissement l&apos;été et chauffage l&apos;hiver avec un seul système</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Wind className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Ventilation performante</h3>
              <p className="text-blue-100">Renouvellement d&apos;air optimal pour un air sain et une maison respirable</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis gratuit</h3>
              <p className="text-blue-100">Évaluation précise sans engagement et aides financières étudiées</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+33756935200">
                <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  <Phone className="mr-2" size={20} />
                  Demander un devis : 07 56 93 52 00
                </Button>
              </Link>
              <Link href="/devis-electricien-gratuit">
                <Button variant="outline" size="xlg" className="border-white text-white bg-transparent hover:bg-white hover:text-[#1b1e3f]">
                  Devis gratuit en ligne
                </Button>
              </Link>
            </div>
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Étude thermique offerte</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Installation de Climatisation et Ventilation à Nice
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                À Nice, où les étés peuvent être chauds et étouffants, une climatisation efficace est devenue un équipement essentiel pour le confort des habitants. 
                Mais au-delà du simple rafraîchissement, une installation bien conçue combine climatisation, ventilation et parfois chauffage pour offrir 
                un confort thermique optimal toute l&apos;année.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe de techniciens certifiés à Nice vous propose des solutions sur mesure adaptées aux spécificités climatiques de la Côte d&apos;Azur 
                et aux caractéristiques de votre habitation. Nous privilégions les systèmes réversibles qui assurent à la fois le rafraîchissement estival 
                et le chauffage hivernal, pour un confort complet et des économies d&apos;énergie.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ❄️ <span className="text-[#f25000]">Économies d&apos;énergie garanties</span> - 
                  Les climatisations réversibles modernes offrent un rendement exceptionnel, permettant de réduire 
                  jusqu&apos;à 70% votre consommation d&apos;énergie par rapport aux systèmes de chauffage traditionnels.
                </p>
              </div>
            </div>
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/installation-climatisation-nice.webp"
                alt="Installation de climatisation et ventilation à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos services de climatisation et ventilation à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Thermometer className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Climatisation split</h3>
              </div>
              <p className="text-gray-600">
                Installation de systèmes split monosplit ou multisplit pour rafraîchir une ou plusieurs pièces. 
                Solutions discrètes, performantes et économiques, idéales pour les appartements et maisons niçoises.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Climatisation réversible</h3>
              </div>
              <p className="text-gray-600">
                Installation de pompes à chaleur air-air pour un confort toute l&apos;année : rafraîchissement en été 
                et chauffage en hiver. Systèmes haute performance avec des coefficients de performance (COP) élevés.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Wind className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Ventilation mécanique</h3>
              </div>
              <p className="text-gray-600">
                Installation de VMC simple flux, double flux ou hygroréglable pour assurer un renouvellement d&apos;air 
                optimal dans votre habitation. Prévention de l&apos;humidité et des problèmes de condensation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Wrench className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Entretien et dépannage</h3>
              </div>
              <p className="text-gray-600">
                Contrats d&apos;entretien annuel, réparation de pannes, recharge de gaz frigorigène, nettoyage 
                des unités et dépannage urgent pour garantir le bon fonctionnement de votre installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Les avantages de la climatisation à Nice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Thermometer className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Confort thermique optimal</h3>
              <p className="text-gray-600">
                Maintenez une température agréable dans votre habitation même pendant les pics de chaleur estivaux niçois. 
                Régulation précise et homogène dans toutes les pièces.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Euro className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Économies d&apos;énergie</h3>
              <p className="text-gray-600">
                Les systèmes réversibles modernes consomment jusqu&apos;à 4 fois moins d&apos;énergie qu&apos;ils n&apos;en restituent, 
                permettant des économies substantielles sur vos factures de chauffage.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wind className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Air sain et filtré</h3>
              <p className="text-gray-600">
                Filtration des pollens, poussières et allergènes pour un air intérieur plus sain, particulièrement 
                bénéfique pour les personnes sensibles ou allergiques.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Silence et discrétion</h3>
              <p className="text-gray-600">
                Les appareils modernes sont extrêmement silencieux et s&apos;intègrent parfaitement à votre décoration 
                intérieure sans en perturber l&apos;esthétique.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Home className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Valorisation du bien</h3>
              <p className="text-gray-600">
                Une installation de climatisation récente et performante augmente la valeur de votre bien immobilier 
                sur le marché niçois très concurrentiel.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Écologique</h3>
              <p className="text-gray-600">
                Les systèmes utilisent des réfrigérants respectueux de l&apos;environnement et consomment moins d&apos;énergie 
                que les climatiseurs traditionnels, réduisant votre empreinte carbone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Technologies et solutions disponibles à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Systèmes monosplit et multisplit</h3>
                    <p className="text-gray-600">
                      Solutions idéales pour les appartements et maisons individuelles. Unité extérieure unique 
                      connectée à une ou plusieurs unités intérieures pour un contrôle individualisé de chaque pièce.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Climatisation gainable</h3>
                    <p className="text-gray-600">
                      Solution discrète et esthétique où l&apos;unité intérieure est dissimulée dans les combles ou 
                      faux-plafonds, avec distribution de l&apos;air par des bouches encastrées dans les pièces.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pompes à chaleur air-air</h3>
                    <p className="text-gray-600">
                      Systèmes réversibles haut de gamme offrant à la fois le chauffage et la climatisation 
                      avec un excellent rendement énergétique, même par températures extérieures basses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">VMC double flux</h3>
                  <p className="text-gray-600">
                    Système de ventilation performant qui récupère la chaleur de l&apos;air extrait pour préchauffer 
                    l&apos;air neuf entrant, réduisant les déperditions énergétiques et les courants d&apos;air.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Climatisation solaire</h3>
                  <p className="text-gray-600">
                    Solutions innovantes utilisant l&apos;énergie solaire pour alimenter le système de climatisation, 
                    réduisant considérablement la consommation électrique et l&apos;impact environnemental.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Systèmes connectés</h3>
                  <p className="text-gray-600">
                    Pilotage à distance via smartphone, programmation horaire, géolocalisation pour une activation 
                    anticipée, et intégration avec les systèmes domotiques existants.
                  </p>
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
            Prêt à optimiser votre confort thermique à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe de techniciens certifiés vous propose des solutions sur mesure de climatisation 
            et ventilation adaptées au climat niçois et à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33756935200">
              <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                <Phone className="mr-2" size={24} />
                07 56 93 52 00
              </Button>
            </Link>
            <Link href="/devis-electricien-gratuit">
              <Button variant="outline" size="xlg" className="border-white text-white bg-transparent hover:bg-white hover:text-[#1b1e3f]">
                Devis gratuit en ligne
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-blue-200">
            Étude thermique offerte - Aides financières étudiées - Interventions sur Nice et toute la Côte d&apos;Azur
          </p>
        </div>
      </section>
    </>
  );
}