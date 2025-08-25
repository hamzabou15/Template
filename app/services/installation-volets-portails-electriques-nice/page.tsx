// app/services/installation-volets-portails-electriques-nice/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield, Zap, Home, FileText, Euro, Wrench, Settings, Lock, GitCommit } from 'lucide-react';

export const metadata: Metadata = {
  title: "Installation Volets Roulants & Portails Électriques à Nice | Expert Motorisation",
  description: "🚪 Installation de volets roulants et portails électriques à Nice. Motorisation, automatisation et dépannage par des experts certifiés. Devis gratuit et intervention rapide.",
  keywords: "installation volets roulants électriques Nice, portail électrique Nice, motorisation volet roulant Nice, automatisation portail Nice, volet roulant motorisé Nice, électricien portail Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/installation-volets-portails-electriques-nice',
  },
  openGraph: {
    title: "Installation Volets Roulants & Portails Électriques à Nice - Expert Motorisation",
    description: "Installation de volets roulants et portails électriques à Nice. Motorisation, automatisation et dépannage par des experts certifiés.",
    url: 'https://electriciennice-expert.fr/services/installation-volets-portails-electriques-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/installation-volets-portails-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Installation volets roulants et portails électriques à Nice',
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

export default function InstallationVoletsPortailsElectriquesNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Installation de volets roulants et portails électriques",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"]
            },
            "description": "Installation de volets roulants et portails électriques à Nice",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services d&apos;Installation Automatisme",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation de volets roulants électriques"
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
              <Settings className="mr-2" size={16} />
              Automatisation sur mesure
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Installation Volets & Portails Électriques à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Motorisation de vos volets roulants et portails à Nice par des experts certifiés. Confort, sécurité et économies d&apos;énergie garantis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <GitCommit className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Motorisation</h3>
              <p className="text-blue-100">Installation de moteurs performants et silencieux pour vos ouvrants</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Lock className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Sécurité</h3>
              <p className="text-blue-100">Systèmes de sécurité avancés pour protéger votre habitation</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis gratuit</h3>
              <p className="text-blue-100">Évaluation précise sans engagement et transparente sur les prix</p>
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
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Diagnostic offert</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Installation de Volets Roulants et Portails Électriques à Nice
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                l&apos;automatisation de vos volets roulants et portails à Nice apporte un confort quotidien 
                significatif tout en renforçant la sécurité de votre habitation. Plus besoin de manipuler 
                manuellement vos ouvrants, especially sous le climat méditerranéen où les températures 
                peuvent être élevées et où la sécurité est une préoccupation majeure.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe d&apos;électriciens spécialisés en automatismes à Nice vous propose des solutions 
                sur mesure adaptées à vos besoins et à la configuration de votre habitation. Nous travaillons 
                avec les meilleures marques du marché pour vous garantir fiabilité, silence et longévité.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  🚪 <span className="text-[#f25000]">Économies d&apos;énergie</span> - 
                  La programmation de vos volets roulants permet de réaliser jusqu&apos;à 15% d&apos;économies 
                  sur votre facture de chauffage et de climatisation.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/installation-volets-portails-nice.webp"
                alt="Installation de volets roulants et portails électriques à Nice"
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
            Nos services d&apos;automatisme à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <GitCommit className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Motorisation de volets roulants</h3>
              </div>
              <p className="text-gray-600">
                Installation de moteurs tubulaires ou sur axe pour automatiser vos volets roulants existants 
                ou neufs. Solutions silencieuses, puissantes et économiques avec télécommandes, interrupteurs 
                ou commande centralisée.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Settings className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Automatisation de portails</h3>
              </div>
              <p className="text-gray-600">
                Installation de motorisation pour portails coulissants ou battants. Systèmes complets incluant 
                moteurs, cartes électroniques, automatismes de sécurité, détecteurs et commandes à distance 
                pour un confort et une sécurité optimaux.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Lock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Systèmes de sécurité</h3>
              </div>
              <p className="text-gray-600">
                Installation de dispositifs de sécurité : détecteurs d&apos;obstacles, photocellules, 
                anti-cisaillage, verrouillages automatiques et systèmes d&apos;alarme intégrés pour 
                une protection complète de votre habitation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Wrench className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Dépannage et maintenance</h3>
              </div>
              <p className="text-gray-600">
                Réparation et entretien de tous types d&apos;automatismes : remplacement de moteurs défectueux, 
                réparation de cartes électroniques, reprogrammation de télécommandes, réglage des limites 
                de course et maintenance préventive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Les avantages de l&apos;automatisation à Nice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Confort au quotidien</h3>
              <p className="text-gray-600">
                Commandez vos volets et portails sans effort depuis l&apos;intérieur de votre habitation, 
                votre voiture ou même à distance via smartphone. Un gain de temps et de confort appréciable.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sécurité renforcée</h3>
              <p className="text-gray-600">
                Simulation de présence, fermeture automatique, systèmes anti-intrusion et contrôle 
                d&apos;accès : l&apos;automatisation renforce significativement la sécurité de votre domicile.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Euro className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Économies d&apos;énergie</h3>
              <p className="text-gray-600">
                Programmation optimale de l&apos;ouverture et fermeture des volets pour réguler la température 
                intérieure et réduire votre consommation de chauffage et climatisation.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Home className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Valorisation du bien</h3>
              <p className="text-gray-600">
                l&apos;automatisation des ouvrants est un atout valorisant pour votre propriété, apprécié 
                des acquéreurs et locataires sur le marché immobilier niçois.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gain de temps</h3>
              <p className="text-gray-600">
                Plus besoin de parcourir toute la maison pour fermer les volets le soir ou les ouvrir le matin. 
                Une simple commande centralisée ou programmation automatique suffit.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conformité aux normes</h3>
              <p className="text-gray-600">
                Nos installations respectent strictement les normes de sécurité en vigueur (NF EN 13241-1 
                pour les portails, NF EN 60335-2-103 pour les volets) pour une utilisation en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Technologies et options disponibles à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Commandes multiples</h3>
                    <p className="text-gray-600">
                      Télécommandes radio, interrupteurs muraux, commandes à distance via smartphone, 
                      assistants vocaux (Google Home, Alexa) ou centralisation de tous vos automatismes 
                      sur une seule interface.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Programmation avancée</h3>
                    <p className="text-gray-600">
                      Réglage des horaires d&apos;ouverture et fermeture, mode vacances, simulation de présence, 
                      gestion en fonction de l&apos;ensoleillement ou de la température extérieure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité intégrée</h3>
                    <p className="text-gray-600">
                      Détecteurs d&apos;obstacles, anti-cisaillage, verrouillages automatiques, alarmes 
                      d&apos;effraction, et conformité aux normes de sécurité les plus strictes pour 
                      protéger les personnes et les biens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Motorisations adaptées</h3>
                  <p className="text-gray-600">
                    Choix de motorisations en fonction du poids et de la taille de vos ouvrants : 
                    moteurs tubulaires pour volets, moteurs enterrés ou à bras pour portails battants, 
                    moteurs linéaires pour portails coulissants.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Alimentation de secours</h3>
                  <p className="text-gray-600">
                    Systèmes avec batterie de secours permettant de fonctionner même en cas de coupure 
                    de courant, essentiel pour la sécurité et le confort, especially à Nice où les orages 
                    peuvent occasionner des coupures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Intégration domotique</h3>
                  <p className="text-gray-600">
                    Connexion de vos automatismes à un système domotique complet pour une gestion 
                    centralisée de l&apos;éclairage, chauffage, sécurité et multimédias de votre habitation.
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
            Prêt à automatiser vos volets et portails à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens spécialistes des automatismes vous propose des solutions sur mesure 
            pour apporter confort, sécurité et économies d&apos;énergie à votre habitation niçoise.
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
            Diagnostic offert - Interventions sur Nice et toute la Côte d&apos;Azur
          </p>
        </div>
      </section>
    </>
  );
}