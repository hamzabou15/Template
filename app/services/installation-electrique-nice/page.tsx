import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Home, Zap, Shield, CheckCircle, Euro, FileText, Lightbulb, Cpu, Car, Store, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: "Installation Électrique à Nice | Neuf & Rénovation | Devis Gratuit 06",
  description: "🔌 Installation électrique neuve à Nice par des électriciens certifiés. Tableaux, prises, éclairage, domotique. Devis gratuit pour maison, appartement, local commercial. Normes NFC 15-100.",
  keywords: "installation électrique Nice, électricien installation neuve Nice, tableau électrique Nice, éclairage Nice, domotique Nice, électricien 06",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/installation-electrique-nice',
  },
  openGraph: {
    title: "Installation Électrique Neuve à Nice - Électricien Certifié",
    description: "Installation électrique neuve à Nice par des électriciens certifiés. Devis gratuit pour maison, appartement, local commercial.",
    url: 'https://electriciennice-expert.fr/services/installation-electrique-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/installation-electrique-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Installation électrique neuve à Nice - Électricien certifié',
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

export default function InstallationElectriqueNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Installation électrique",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"],
            },
            "description": "Service d&apos;installation électrique neuve à Nice",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services d&apos;Installation Électrique",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation électrique neuve"
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
              <Zap className="mr-2" size={16} />
              Installation Neuve
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Installation Électrique à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Installation électrique neuve aux normes NFC 15-100 pour votre maison, 
              appartement ou local commercial à Nice. Devis gratuit et projet clé en main.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Home className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Maison & Appartement</h3>
              <p className="text-blue-100">Installation complète pour particuliers</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Shield className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Aux Normes NFC 15-100</h3>
              <p className="text-blue-100">Conformité et sécurité garanties</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis Gratuit</h3>
              <p className="text-blue-100">Prix transparents sans surprise</p>
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
            <p className="text-blue-200 mt-4 text-sm">Expertise et conseils personnalisés sans engagement</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Installation Électrique Neuve à Nice 
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Que vous fassiez construire une nouvelle villa sur les collines niçoises, 
                aménagiez un appartement dans le centre-ville de Nice ou réhabilitiez un 
                local commercial, une installation électrique neuve et bien conçue est 
                essentielle pour votre confort et votre sécurité.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe d&apos;électriciens certifiés à Nice vous accompagne dans tous 
                vos projets d&apos;installation électrique neuve. De la conception à la réalisation, 
                nous veillons à respecter les normes en vigueur (NFC 15-100) et à adapter 
                l&apos;installation à vos besoins spécifiques et à vos usages.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ⚡ <span className="text-[#f25000]">Expertise locale</span> - 
                  Notre connaissance des spécificités des logements niçois nous permet 
                  de proposer des solutions adaptées à votre habitat et à votre mode de vie.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/installation-electrique-nice.webp"
                alt="Installation électrique neuve à Nice par des professionnels"
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
            Nos Services d&apos;Installation Électrique à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Installation Maison Individuelle</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Installation électrique complète pour maison neuve ou en construction. 
                Conception sur mesure, tableau électrique, circuits spécialisés, 
                éclairage intérieur et extérieur.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Étude et conception personnalisée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Tableau électrique divisionnaire</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Circuits dédiés (cuisine, salle de bain)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Building className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Installation Appartement</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Installation électrique pour appartement neuf ou en rénovation à Nice. 
                Optimisation de l&apos;espace, solutions gain de place, intégration esthétique.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Solutions pour petits espaces</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Intégration discrète et esthétique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Gestion des contraintes techniques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Store className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Local Commercial & Bureau</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Installation électrique pour locaux commerciaux, bureaux et professionnels 
                à Nice. Circuits spécifiques, éclairage commercial, prises techniques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Éclairage commercial adapté</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Prises techniques et réseaux</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Solutions pour vitrines et enseignes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Éclairage & Ambiance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Conception et installation de solutions d&apos;éclairage intérieur et extérieur 
                pour créer des ambiances chaleureuses et fonctionnelles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Éclairage intérieur design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Éclairage extérieur et jardin</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Solutions LED économiques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Cpu className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Domotique & Smart Home</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Intégration de solutions domotiques pour une maison connectée et intelligente. 
                Gestion de l&apos;éclairage, chauffage, sécurité et multimédias.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Gestion centralisée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Scénarios d&apos;éclairage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Contrôle à distance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Car className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Borne de Recharge VE</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Installation de borne de recharge pour véhicule électrique à domicile 
                ou en copropriété à Nice. Solutions wallbox et infrastructures complètes.
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
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Notre Processus d&apos;Installation à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Étude et Conception</h3>
                    <p className="text-gray-600">
                      Notre électricien se déplace à votre domicile ou futur logement à Nice 
                      pour réaliser une étude complète de vos besoins. Nous concevons ensemble 
                      l&apos;installation idéale adaptée à votre mode de vie et à vos équipements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Devis Détaillé</h3>
                    <p className="text-gray-600">
                      Nous établissons un devis transparent et complet incluant tous les 
                      travaux, les matériaux sélectionnés (marques, modèles) et le planning 
                      d&apos;intervention. Aucun frais caché, aucun surprise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Préparation du Chantier</h3>
                    <p className="text-gray-600">
                      Avant le début des travaux, nous préparons minutieusement le chantier 
                      pour garantir un déroulement optimal. Commandes de matériaux, organisation 
                      logistique, protection des surfaces.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation et Câblage</h3>
                    <p className="text-gray-600">
                      Nos électriciens procèdent à l&apos;installation complète avec soin et 
                      professionnalisme. Pose des gaines, tirage des câbles, installation 
                      du tableau électrique, pose des prises et interrupteurs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mise en Service et Contrôle</h3>
                    <p className="text-gray-600">
                      Une fois l&apos;installation terminée, nous procédons à une série de tests 
                      et contrôles pour vérifier la conformité et le parfait fonctionnement 
                      de l&apos;installation. Nous vous remettons l&apos;attestation de conformité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/process-installation-nice.webp"
                alt="Processus d&apos;installation électrique à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Matériaux et Technologies Utilisés
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Matériaux de Qualité</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tableaux électriques</h4>
                    <p className="text-gray-600">Tableaux divisionnaires de marques reconnues (Legrand, Schneider, Hager) avec dispositifs de protection différentielle et disjoncteurs adaptés</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Câbles et conducteurs</h4>
                    <p className="text-gray-600">Câbles électriques de section adaptée aux usages, gaines ICTA pour installations encastrées, chemins de câbles esthétiques</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Appareillages</h4>
                    <p className="text-gray-600">Prises, interrupteurs et commandes de qualité avec finitions au choix (standard, design, luxe) et fonctions innovantes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technologies Modernes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gestion de l&apos;énergie</h4>
                    <p className="text-gray-600">Solutions pour optimiser la consommation d&apos;énergie, gestion des circuits, monitoring de la consommation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Éclairage connecté</h4>
                    <p className="text-gray-600">Systèmes d&apos;éclairage LED connectés, gradables, avec variations de couleur et scénarios programmables</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f25000] p-2 rounded-full mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sécurité renforcée</h4>
                    <p className="text-gray-600">Dispositifs de protection avancés, parafoudres, protection contre les surtensions, disjoncteurs différentiels haute sensibilité</p>
                  </div>
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
            Projet d&apos;Installation Électrique à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens qualifiés intervient dans tout Nice et ses alentours 
            pour vos projets d&apos;installation électrique neuve. Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis-electricien-gratuit">
              <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                <FileText className="mr-2" size={24} />
                Demander un devis
              </Button>
            </Link>
            <Link href="tel:+33756935200">
              <Button variant="outline" size="xlg" className="border-white text-[#1b1e3f] hover:bg-white hover:text-[#1b1e3f]">
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

