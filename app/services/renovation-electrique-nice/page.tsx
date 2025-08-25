import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Home, Shield, CheckCircle, Zap, FileText, Award, Euro } from 'lucide-react';

export const metadata: Metadata = {
  title: "Rénovation Électrique à Nice | Mise aux Normes NFC 15-100 | Devis Gratuit",
  description: "🔧 Rénovation complète de votre installation électrique à Nice. Mise aux normes NFC 15-100 par des électriciens certifiés. Devis gratuit et intervention rapide dans tout Nice 06.",
  keywords: "rénovation électrique Nice, mise aux normes électrique Nice, norme NFC 15-100 Nice, électricien rénovation Nice, tableau électrique Nice, installation électrique aux normes Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/renovation-electrique-nice',
  },
  openGraph: {
    title: "Rénovation Électrique à Nice - Mise aux Normes NFC 15-100",
    description: "Rénovation complète de votre installation électrique à Nice par des électriciens certifiés. Devis gratuit et intervention rapide.",
    url: 'https://electriciennice-expert.fr/services/renovation-electrique-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/renovation-electrique-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Rénovation électrique à Nice - Mise aux normes NFC 15-100',
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

export default function RenovationElectriqueNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Rénovation électrique",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"],
            },
            "description": "Service de rénovation électrique et mise aux normes NFC 15-100 à Nice",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de Rénovation Électrique",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rénovation complète installation électrique"
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
              <Shield className="mr-2" size={16} />
              Spécialistes NFC 15-100
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rénovation Électrique à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Mise aux normes NFC 15-100 de votre installation électrique par des artisans électriciens certifiés. 
              Sécurité garantie et devis gratuit pour tous vos projets à Nice et alentours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Award className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Normes NFC 15-100</h3>
              <p className="text-blue-100">Respect strict de la réglementation en vigueur</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Zap className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Installation sécurisée</h3>
              <p className="text-blue-100">Protection des personnes et des biens</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis gratuit</h3>
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
                Rénovation Électrique Complète à Nice 
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Une installation électrique vétuste ou non conforme représente un danger potentiel 
                pour les occupants d&apos;un logement. À Nice, où de nombreux appartements datent de 
                plusieurs décennies, la rénovation électrique est souvent nécessaire pour garantir 
                la sécurité des personnes et des biens.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre entreprise d&apos;électricité générale à Nice intervient pour la rénovation complète 
                de votre installation électrique, en la mettant aux normes NFC 15-100 en vigueur. 
                Nous travaillons avec précision et professionnalisme, que ce soit pour un studio 
                dans le Vieux-Nice, un appartement à Jean-Médecin ou une villa sur les hauteurs de Cimiez.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ⚡ <span className="text-[#f25000]">Savoir-faire niçois</span> - 
                  Notre connaissance des spécificités des logements de Nice nous permet 
                  d&apos;adapter parfaitement nos solutions à votre habitat.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/renovation-electrique-nice.webp"
                alt="Rénovation électrique à Nice par des professionnels"
                fill
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Renovate Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi rénover votre installation électrique à Nice ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sécurité des occupants</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Une installation électrique vétuste est la cause de nombreux incendies domestiques 
                chaque année. La rénovation permet d&apos;éliminer les risques d&apos;électrocution, 
                de court-circuit et de surchauffe des conducteurs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Protection contre les risques d&apos;incendie</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Dispositifs de protection différentielle</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Sectionnement des circuits</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Conformité réglementaire</h3>
              </div>
              <p className="text-gray-600 mb-4">
                La norme NFC 15-100 évolue régulièrement pour améliorer la sécurité électrique. 
                Une installation aux normes est obligatoire pour la vente d&apos;un logement et 
                pour la location (diagnostic électrique de moins de 6 ans).
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Conformité pour la vente ou location</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Valorisation de votre patrimoine</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Assurabilité du logement</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Confort et modernité</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Une installation rénovée permet de répondre aux besoins contemporains en électricité 
                : recharge de véhicules électriques, domotique, home cinéma, équipements high-tech, etc.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Augmentation du nombre de prises</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Éclairage moderne et économique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Préparation pour la domotique</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Euro className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Économies d&apos;énergie</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Une installation moderne et optimisée consomme moins d&apos;énergie et permet de réaliser 
                des économies sur votre facture d&apos;électricité, particulièrement importante à Nice 
                où la climatisation est souvent nécessaire.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Optimisation des circuits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Gestion intelligente de l&apos;énergie</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Compatibilité avec les équipements économes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NFC 15-100 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            La norme NFC 15-100 : Exigences pour une installation sécurisée à Nice
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p>
              La norme NFC 15-100 régit les installations électriques basse tension en France. 
              Elle évolue régulièrement pour s&apos;adapter aux nouveaux usages et améliorer la sécurité. 
              À Nice, où le parc immobilier est ancien, de nombreuses installations ne sont pas 
              conformes aux dernières exigences de cette norme.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Les principales exigences de la norme :</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Tableau électrique</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Disjoncteur différentiel 30mA de type A</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Disjoncteurs divisionnaires pour chaque circuit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Repères de circuit obligatoires</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Sectionnement rapide et accessible</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Circuits et protections</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Section des conducteurs adaptée aux usage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Protection des circuits spécifiques (lave-linge, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Gaine ICTA pour les installations encastrées</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Protection contre les surtensions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Prises et commandes</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Nombre minimal de prises par pièce</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Prises avec terre obligatoires</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Interrupteurs va-et-vient pour les circulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Commandes accessibles et ergonomiques</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pièces humides</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Volume de protection autour des points d&apos;eau</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Appareils spécifiques pour salles d&apos;eau</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Protection différentielle haute sensibilité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Liaison équipotentielle supplémentaire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Notre processus de rénovation électrique à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnostic initial</h3>
                    <p className="text-gray-600">
                      Notre électricien se déplace à votre domicile à Nice pour réaliser un état des lieux 
                      complet de votre installation existante. Il identifie les non-conformités, évalue 
                      vos besoins et établit un plan de rénovation détaillé.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Devis détaillé</h3>
                    <p className="text-gray-600">
                      Nous établissons un devis transparent et complet incluant tous les travaux nécessaires, 
                      les matériaux utilisés et le planning d&apos;intervention. Aucun frais caché, aucun surprise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Préparation des travaux</h3>
                    <p className="text-gray-600">
                      Avant le début des travaux, nous préparons minutieusement le chantier pour minimiser 
                      la gêne occasionnée. Protection des sols et meubles, organisation du matériel, 
                      planification précise des différentes phases.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Réalisation des travaux</h3>
                    <p className="text-gray-600">
                      Nos électriciens procèdent à la rénovation complète avec soin et professionnalisme. 
                      Remplacement du tableau électrique, mise en place des nouveaux circuits, installation 
                      des prises et interrupteurs, etc.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Contrôle et mise en service</h3>
                    <p className="text-gray-600">
                      Une fois les travaux terminés, nous procédons à une série de tests et contrôles 
                      pour vérifier la conformité et la parfaite fonctionnement de l&apos;installation. 
                      Nous vous remettons ensuite l&apos;attestation de conformité (Consuel).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/process-renovation-nice.webp"
                alt="Processus de rénovation électrique à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1b1e3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à rénover votre installation électrique à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens qualifiés intervient dans tout Nice et ses alentours 
            pour vos projets de rénovation électrique complète. Devis gratuit et sans engagement.
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