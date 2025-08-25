// app/services/installation-prise-tableau-electrique-nice/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Shield, Zap, CheckCircle, Euro, Settings, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: "Installation Prise & Tableau Électrique à Nice | Expert NFC 15-100",
  description: "⚡ Installation de prises, tableau électrique et disjoncteurs à Nice par des électriciens certifiés. Service professionnel aux normes en vigueur. Devis gratuit et intervention rapide.",
  keywords: "installation prise électrique Nice, tableau électrique Nice, électricien installation Nice, pose prise NFC 15-100 Nice, installation disjoncteur différentiel Nice, électricien certifié Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/installation-prise-tableau-electrique-nice',
  },
  openGraph: {
    title: "Installation Prise & Tableau Électrique à Nice - Expert NFC 15-100",
    description: "Installation de prises, tableau électrique et disjoncteurs à Nice par des électriciens certifiés. Service professionnel aux normes en vigueur.",
    url: 'https://electriciennice-expert.fr/services/installation-prise-tableau-electrique-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/installation-prise-tableau-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Installation prise et tableau électrique à Nice',
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

export default function InstallationPriseTableauElectriqueNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Installation de prises et tableau électrique",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"],
              "hasCredential": "Certification NFC 15-100"
            },
            "description": "Installation de prises électriques et tableau électrique à Nice aux normes NFC 15-100",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services d&apos;Installation Électrique",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation de prises électriques"
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
              Installation aux normes NFC 15-100
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Installation Prise & Tableau Électrique à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Installation et remplacement de prises, tableau électrique et disjoncteurs à Nice par des électriciens certifiés. Conformité et sécurité garanties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Cpu className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Tableau électrique</h3>
              <p className="text-blue-100">Installation de tableaux électriques modernes et sécurisés</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Zap className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Prises électriques</h3>
              <p className="text-blue-100">Pose de prises aux normes, sécurisées et fonctionnelles</p>
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
                Installation de Prises et Tableau Électrique à Nice
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Une installation électrique moderne et sécurisée commence par un tableau électrique aux normes et des prises en nombre suffisant et correctement installées. À Nice, où les logements peuvent être anciens, il est essentiel de faire appel à des électriciens certifiés pour garantir la sécurité et le bon fonctionnement de votre installation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe d&apos;électriciens à Nice intervient pour installer, remplacer ou mettre aux normes votre tableau électrique et vos prises. Nous veillons à respecter scrupuleusement la norme NFC 15-100 et à adapter nos solutions à vos besoins et à la configuration de votre logement.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ⚡ <span className="text-[#f25000]">Nombre de prises réglementaire</span> - 
                  La norme NFC 15-100 impose un nombre minimal de prises par pièce pour éviter les surcharges et les risques d&apos;incendie.
                </p>
              </div>
            </div>
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/installation-prise-tableau-nice.webp"
                alt="Installation de prise et tableau électrique à Nice"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos services d&apos;installation électrique à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Cpu className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tableau électrique</h3>
              </div>
              <p className="text-gray-600">
                Installation ou remplacement de tableau électrique aux normes NFC 15-100. Nous installons des disjoncteurs différentiels, des interrupteurs différentiels et des disjoncteurs divisionnaires pour protéger chaque circuit de votre installation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Prises électriques</h3>
              </div>
              <p className="text-gray-600">
                Pose de prises électriques supplémentaires pour répondre à vos besoins et à la norme. Installation de prises renforcées pour gros électroménager, prises HDMI, USB et prises communicantes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Settings className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Disjoncteurs et différentiels</h3>
              </div>
              <p className="text-gray-600">
                Remplacement ou installation de disjoncteurs et interrupteurs différentiels pour protéger votre installation contre les surtensions, les courts-circuits et les fuites de courant.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mise en sécurité</h3>
              </div>
              <p className="text-gray-600">
                Mise en sécurité de votre installation électrique avec la pose de dispositifs de protection adaptés et la vérification de la conformité de l&apos;ensemble de l&apos;installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Norms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Les exigences de la norme NFC 15-100 pour les prises et tableaux à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nombre de prises minimal</h3>
                    <p className="text-gray-600">
                      La norme impose un nombre minimal de prises par pièce : 3 dans les chambres, 5 dans le séjour, 
                      6 dans la cuisine, etc. Ces exigences visent à éviter l&apos;utilisation de multiprises dangereuses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hauteur des prises</h3>
                    <p className="text-gray-600">
                      Les prises doivent être installées à une hauteur précise : entre 5 et 130 cm du sol pour les prises de courant, 
                      et à 120 cm minimum pour les prises de communication.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Protection des circuits</h3>
                    <p className="text-gray-600">
                      Chaque circuit doit être protégé par un disjoncteur divisionnaire calibré selon la section des conducteurs, 
                      et les circuits doivent être répartis de manière équilibrée dans le tableau.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Disjoncteur différentiel</h3>
                  <p className="text-gray-600">
                    Le tableau doit comporter au moins deux disjoncteurs différentiels 30mA de type A et AC pour protéger 
                    les différents circuits et éviter les coupures intempestives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Section des câbles</h3>
                  <p className="text-gray-600">
                    Les câbles doivent avoir une section adaptée à leur usage : 1,5mm² pour l&apos;éclairage, 
                    2,5mm² pour les prises, 4 ou 6mm² pour les gros appareils électroménagers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Espace autour du tableau</h3>
                  <p className="text-gray-600">
                    Un espace de 60 cm doit être dégagé devant le tableau électrique pour faciliter son accès et son utilisation 
                    en cas d&apos;intervention ou d&apos;urgence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Tarifs pour l&apos;installation de prises et tableau électrique à Nice
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prises supplémentaires</h3>
              <div className="text-3xl font-bold text-[#f25000] mb-4">60 - 120 €</div>
              <p className="text-gray-600 mb-6">par prise</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Prise standard
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Percage et saignée inclus
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Matériel fourni
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
                Le plus demandé
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tableau électrique</h3>
              <div className="text-3xl font-bold text-[#f25000] mb-4">800 - 1 500 €</div>
              <p className="text-gray-600 mb-6">pose comprise</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  12 à 24 circuits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Disjoncteurs différentiels
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Main d&apos;œuvre incluse
                </li>
              </ul>
              <Link href="/devis-electricien-gratuit">
                <Button className="w-full bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  Demander un devis
                </Button>
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mise aux normes complète</h3>
              <div className="text-3xl font-bold text-[#f25000] mb-4">1 200 - 3 000 €</div>
              <p className="text-gray-600 mb-6">pour un T2/T3</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Tableau neuf
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Prises supplémentaires
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mise à la terre
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
            <p>* Ces tarifs sont indicatifs et variables selon la complexité de l&apos;installation et l&apos;accessibilité.</p>
            <p>Demandez un devis personnalisé gratuit pour connaître le coût exact de vos travaux.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1b1e3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d&apos;installer ou de remplacer vos prises et tableau électrique à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens certifiés vous propose des installations sécurisées et aux normes, 
            adaptées à vos besoins et à votre logement.
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
            Intervention rapide sur Nice et ses alentours - Devis gratuit et sans engagement
          </p>
        </div>
      </section>
    </>
  );
}