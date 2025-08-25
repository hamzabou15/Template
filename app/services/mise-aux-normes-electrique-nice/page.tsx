// app/services/mise-aux-normes-electrique-nice/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Shield, Zap, CheckCircle, Home, FileText, Euro, Wrench } from 'lucide-react';
import { FaCertificate } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';

export const metadata: Metadata = {
  title: "Mise aux Normes Électrique à Nice | Certification NFC 15-100 | Devis Gratuit",
  description: "🔧 Électricien certifié à Nice pour la mise aux normes NFC 15-100 de votre installation électrique. Diagnostic, rénovation complète et certification pour votre sécurité. Devis gratuit et intervention rapide.",
  keywords: "mise aux normes électrique Nice, norme NFC 15-100 Nice, électricien certifié Nice, rénovation électrique normes, certification électrique Nice, mise aux normes appartement Nice, électricien NFC 15-100 Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/mise-aux-normes-electrique-nice',
  },
  openGraph: {
    title: "Mise aux Normes Électrique NFC 15-100 à Nice - Certification",
    description: "Électricien certifié pour la mise aux normes NFC 15-100 à Nice. Diagnostic et rénovation complète de votre installation électrique.",
    url: 'https://electriciennice-expert.fr/services/mise-aux-normes-electrique-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/mise-aux-normes-nice..webp',
        width: 1200,
        height: 630,
        alt: 'Mise aux normes électrique NFC 15-100 à Nice',
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

export default function MiseAuxNormesElectriqueNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mise aux normes électrique NFC 15-100",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"],
              "hasCredential": "Certification NFC 15-100"
            },
            "description": "Service de mise aux normes électrique NFC 15-100 à Nice",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de Mise aux Normes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Diagnostic conformité électrique"
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
              <GrCertificate className="mr-2" size={16} />
              Certification NFC 15-100 garantie
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mise aux Normes Électrique à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Certification complète de votre installation aux normes <strong>NFC 15-100</strong> par des électriciens certifiés à Nice. Sécurité garantie et conformité légale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Shield className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Sécurité optimale</h3>
              <p className="text-blue-100">Protection des personnes et des biens contre les risques électriques</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <FileText className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Conformité légale</h3>
              <p className="text-blue-100">Respect des obligations réglementaires pour la vente ou location</p>
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
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Diagnostic de conformité offert</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mise aux Normes NFC 15-100 à Nice : Sécurité et Conformité
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                La norme NFC 15-100 est la référence en matière de sécurité électrique en France. Elle définit les règles de conception, 
                d&apos;installation et d&apos;entretien des installations électriques basse tension. À Nice, où de nombreux logements datent 
                de plusieurs décennies, une mise aux normes est souvent nécessaire pour garantir la sécurité des occupants et 
                la conformité légale, surtout en cas de vente ou de location.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe d&apos;électriciens certifiés à Nice intervient pour diagnostiquer votre installation et réaliser tous 
                les travaux nécessaires à sa mise en conformité avec la norme NFC 15-100. Nous connaissons parfaitement les 
                spécificités du bâti niçois, des appartements haussmanniens du centre-ville aux villas modernes des collines, 
                et nous adaptons nos solutions à chaque configuration.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ⚡ <span className="text-[#f25000]">Obligation légale</span> - 
                  La mise aux normes électrique est obligatoire pour toute vente immobilière (diagnostic électrique de moins de 3 ans) 
                  et pour les locations (installation conforme à la norme NFC 15-100).
                </p>
              </div>
            </div>
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/mise-aux-normes-nice..webp"
                alt="Électricien réalisant une mise aux normes électrique à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi une mise aux normes électrique à Nice est-elle essentielle ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sécurité des personnes</h3>
              </div>
              <p className="text-gray-600">
                Une installation aux normes prévient les risques d&apos;électrocution, d&apos;incendie d&apos;origine électrique 
                et autres accidents domestiques. À Nice, où l&apos;humidité marine peut accélérer la dégradation des 
                installations, cette protection est particulièrement importante.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Conformité légale</h3>
              </div>
              <p className="text-gray-600">
                Pour vendre ou louer un bien immobilier à Nice, vous devez fournir un diagnostic électrique 
                de moins de 3 ans attestant de la conformité de l&apos;installation. Une installation non conforme 
                peut entraîner la nullité du contrat de vente ou de location.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Performance énergétique</h3>
              </div>
              <p className="text-gray-600">
                Une installation moderne et aux normes consomme moins d&apos;énergie et permet de faire des économies 
                sur votre facture d&apos;électricité. Elle supporte également mieux les appareils électriques modernes 
                et les nouvelles technologies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Euro className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Valorisation du bien</h3>
              </div>
              <p className="text-gray-600">
                Une installation électrique aux normes augmente la valeur de votre bien immobilier sur le marché 
                niçois, souvent très concurrentiel. Les acquéreurs et locataires sont rassurés par une installation 
                récente et sécurisée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Norms Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Les exigences de la norme NFC 15-100 à respecter à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Tableau électrique moderne</h3>
                    <p className="text-gray-600">
                      Le tableau doit comporter un disjoncteur différentiel 30mA par rangée, des interrupteurs différentiels 
                      adaptés, et chaque circuit doit être protégé par un disjoncteur divisionnaire calibré selon la section 
                      des conducteurs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nombre de prises suffisant</h3>
                    <p className="text-gray-600">
                      La norme impose un nombre minimal de prises par pièce : 3 dans les chambres, 5 dans le séjour, 
                      6 dans la cuisine, etc. Ces exigences visent à éviter l&apos;utilisation de multiprises dangereuses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Protection des salles d&apos;eau</h3>
                    <p className="text-gray-600">
                      Les volumes autour des points d&apos;eau doivent être respectés avec des matériels adaptés 
                      (IPx4 ou IPx5 selon les zones) et les circuits doivent être protégés par des disjoncteurs 
                      différentiels haute sensibilité (30mA).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mise à la terre efficace</h3>
                    <p className="text-gray-600">
                      Une prise de terre de qualité avec une résistance inférieure à 100 ohms est obligatoire. 
                      Tous les éléments métalliques doivent être reliés à la terre, et la continuité des conducteurs 
                      de protection doit être vérifiée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Éclairage de sécurité</h3>
                  <p className="text-gray-600">
                    Les logements de plus de 35m² doivent avoir au moins un éclairage de secours dans les circulations, 
                    et les maisons avec étage doivent avoir un éclairage au niveau des escaliers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gaine technique logement</h3>
                  <p className="text-gray-600">
                    Un GTL doit être installé pour regrouper les différents réseaux (électricité, communication, etc.) 
                    et faciliter leur gestion. Elle doit être accessible et dimensionnée correctement.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">7</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Section des conducteurs</h3>
                  <p className="text-gray-600">
                    Les fils électriques doivent avoir une section adaptée à leur usage : 1,5mm² pour l&apos;éclairage, 
                    2,5mm² pour les prises, 4 ou 6mm² pour les gros appareils électroménagers comme le lave-linge ou le four.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">8</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Communication et réseau</h3>
                  <p className="text-gray-600">
                    La norme impose la présence de prises de communication (RJ45) dans le séjour et chaque chambre, 
                    ainsi qu&apos;une prise TV dans le séjour. Ces exigences répondent aux besoins modernes en connectivité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Notre processus de mise aux normes à Nice
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: FileText, title: "Diagnostic complet", description: "Inspection minutieuse de votre installation existante et identification des non-conformités." },
              { icon: FileText, title: "Devis détaillé", description: "Établissement d&apos;un devis transparent avec options et planning des travaux." },
              { icon: Wrench, title: "Intervention", description: "Réalisation des travaux avec des matériaux certifiés et respect des normes." },
              { icon: FaCertificate, title: "Certification", description: "Attestation de conformité et conseils d&apos;utilisation de votre nouvelle installation." }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="bg-[#f25000] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Tarifs pour une mise aux normes électrique à Nice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Studio/T2</h3>
              <div className="text-3xl font-bold text-[#f25000] mb-4">1 200 - 2 000 €</div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Tableau électrique neuf
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  10-15 prises supplémentaires
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mise à la terre
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  2-3 jours de travaux
                </li>
              </ul>
              <Link href="/devis-electricien-gratuit">
                <Button className="w-full bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  Demander un devis
                </Button>
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-8 text-center shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f25000] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Le plus populaire
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Appartement T3/T4</h3>
              <div className="text-3xl font-bold text-[#f25000] mb-4">2 000 - 3 500 €</div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Tableau électrique divisionnaire
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  20-30 prises supplémentaires
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mise à la terre complète
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  3-5 jours de travaux
                </li>
              </ul>
              <Link href="/devis-electricien-gratuit">
                <Button className="w-full bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  Demander un devis
                </Button>
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maison individuelle</h3>
              <div className="text-3xl font-bold text-[#f25000] mb-4">3 500 - 6 000 €</div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Tableau électrique complet
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  30-50 prises supplémentaires
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mise à la terre professionnelle
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  5-8 jours de travaux
                </li>
              </ul>
              <Link href="/devis-electricien-gratuit">
                <Button className="w-full bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center text-gray-600">
            <p>* Ces tarifs sont indicatifs et variables selon l&apos;état initial de l&apos;installation et les spécificités du logement.</p>
            <p>Demandez un devis personnalisé gratuit pour connaître le coût exact de votre mise aux normes.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1b1e3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à mettre votre installation électrique aux normes à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens certifiés vous accompagne pour une mise en conformité 
            complète de votre installation électrique selon la norme NFC 15-100.
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
            Diagnostic de conformité offert - Interventions sur Nice et toute la Côte d&apos;Azur
          </p>
        </div>
      </section>
    </>
  );
}