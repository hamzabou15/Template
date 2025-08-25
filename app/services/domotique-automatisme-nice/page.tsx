// app/services/domotique-automatisme-nice/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Shield, Zap, Home, Euro, Settings, Cpu, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Domotique & Automatisme à Nice | Maison Connectée Expert",
  description: "🏠 Installation domotique et automatismes à Nice par des spécialistes. Contrôle intelligent de l&apos;éclairage, chauffage, sécurité et volets. Devis gratuit et solutions sur mesure.",
  keywords: "domotique Nice, maison connectée Nice, automatisme domicile Nice, électricien domotique Nice, installation domotique Nice, système intelligent Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/domotique-automatisme-nice',
  },
  openGraph: {
    title: "Domotique & Automatisme à Nice - Maison Connectée Expert",
    description: "Installation domotique et automatismes à Nice par des spécialistes. Contrôle intelligent de l&apos;éclairage, chauffage, sécurité et volets.",
    url: 'https://electriciennice-expert.fr/services/domotique-automatisme-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/domotique-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Domotique et automatisme à Nice',
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

export default function DomotiqueAutomatismeNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Domotique et automatisme",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"]
            },
            "description": "Installation domotique et automatismes à Nice",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de Domotique",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation de système domotique"
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
              <Cpu className="mr-2" size={16} />
              Expert domotique certifié
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Domotique & Automatisme à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transformez votre habitation niçoise en maison connectée intelligente. Contrôle centralisé de l&apos;éclairage, chauffage, sécurité et multimédias pour un confort optimal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Smartphone className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Contrôle intelligent</h3>
              <p className="text-blue-100">Pilotage à distance de tous vos équipements depuis votre smartphone</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Zap className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Économies d&apos;énergie</h3>
              <p className="text-blue-100">Gestion optimisée du chauffage et de l&apos;éclairage pour réduire votre consommation</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis gratuit</h3>
              <p className="text-blue-100">Évaluation précise sans engagement et solutions personnalisées</p>
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
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Audit domotique offert</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Domotique et Automatisme à Nice
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                La domotique transforme votre habitation niçoise en un espace intelligent, connecté et économe en énergie. 
                Plus qu&apos;une simple technologie, c&apos;est une nouvelle façon de vivre qui apporte confort, sécurité et sérénité 
                au quotidien, en automatisant les tâches répétitives et en optimisant la gestion de votre maison.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe de spécialistes en domotique à Nice vous accompagne dans la transformation de votre logement 
                en maison connectée. Nous concevons des solutions sur mesure adaptées à vos besoins, votre mode de vie 
                et les spécificités de votre habitation, qu&apos;il s&apos;agisse d&apos;un appartement dans le Vieux-Nice ou d&apos;une villa 
                sur les collines niçoises.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  🏠 <span className="text-[#f25000]">Économies garanties</span> - 
                  Une installation domotique bien conçue permet de réduire jusqu&apos;à 30% votre consommation 
                  d&apos;énergie en optimisant le chauffage, l&apos;éclairage et les équipements électriques.
                </p>
              </div>
            </div>
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/domotique-nice.webp"
                alt="Domotique et automatisme à Nice"
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
            Nos services domotiques à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Gestion de l&apos;énergie</h3>
              </div>
              <p className="text-gray-600">
                Optimisation de la consommation énergétique : régulation intelligente du chauffage, 
                programmation de l&apos;éclairage, gestion des appareils en veille, et suivi en temps réel 
                de votre consommation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sécurité connectée</h3>
              </div>
              <p className="text-gray-600">
                Systèmes d&apos;alarme intelligents, détecteurs de mouvement, caméras de surveillance, 
                contrôle d&apos;accès, simulation de présence et alertes en temps réel sur votre smartphone.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Confort automatisé</h3>
              </div>
              <p className="text-gray-600">
                Scénarios personnalisés (réveil, départ, retour, coucher), gestion des volets roulants, 
                contrôle de la climatisation, ambiance lumineuse adaptée à chaque moment de la journée.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Settings className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Multimédia et communication</h3>
              </div>
              <p className="text-gray-600">
                Distribution audio/video dans toutes les pièces, interphonie visuelle, centralisation 
                des commandes, et intégration avec les assistants vocaux (Google Assistant, Amazon Alexa).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Solutions domotiques pour votre habitation à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "💡", title: "Éclairage intelligent", description: "Programmation et automatisation de l&apos;éclairage, variateurs d&apos;intensité, détecteurs de présence, et ambiances lumineuses personnalisées pour chaque pièce." },
              { icon: "🌡️", title: "Gestion du chauffage", description: "Thermostats connectés, régulation pièce par pièce, programmation horaire, et optimisation énergétique pour réduire votre consommation." },
              { icon: "🚪", title: "Volets automatisés", description: "Ouverture/fermeture automatique selon l&apos;ensoleillement, programmation horaire, simulation de présence et intégration avec les scénarios domotiques." },
              { icon: "📹", title: "Sécurité connectée", description: "Alarmes intelligentes, caméras IP, détecteurs d&apos;ouverture, visiophone et notifications en temps réel sur votre smartphone." },
              { icon: "🔌", title: "Gestion des prises", description: "Prises connectées pour contrôler à distance vos appareils électriques, suivi de consommation et programmation horaire." },
              { icon: "💧", title: "Arrosage automatique", description: "Gestion intelligente de l&apos;arrosage en fonction de la météo, programmation personnalisée et économies d&apos;eau." },
              { icon: "🎵", title: "Audio multiroom", description: "Diffusion audio synchronisée dans toutes les pièces, commande centralisée et intégration avec vos services de streaming." },
              { icon: "📱", title: "Interface unique", description: "Pilotage de tous vos équipements depuis une application unique sur smartphone, tablette ou écran tactile mural." },
              { icon: "🤖", title: "Assistants vocaux", description: "Intégration avec Google Assistant, Amazon Alexa et Apple HomeKit pour un contrôle vocal de votre maison connectée." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Technologies et protocoles utilisés à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">KNX - Standard professionnel</h3>
                    <p className="text-gray-600">
                      Protocole filaire standardisé et fiable pour les installations domotiques complètes. 
                      Solution idéale pour les rénovations lourdes et les constructions neuves, offrant 
                      stabilité et évolutivité.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Z-Wave - Sans fil fiable</h3>
                    <p className="text-gray-600">
                      Technologie radio à faible consommation énergétique et grande portée. Parfaite pour 
                      les rénovations légères sans travaux importants. Large gamme de produits compatibles 
                      et interopérabilité garantie.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Zigbee - Réseau maillé</h3>
                    <p className="text-gray-600">
                      Protocole radio formant un réseau maillé où chaque appareil relaie le signal, 
                      garantissant une couverture optimale dans toute la maison. Idéal pour les installations 
                      avec nombreux capteurs et actionneurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">EnOcean - Sans pile</h3>
                  <p className="text-gray-600">
                    Technologie innovante harvesting l&apos;énergie ambiante (lumière, pression, différence 
                    de température) pour alimenter les devices sans piles ni fils électriques. Solution 
                    écologique et sans maintenance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Wi-Fi - Connectivité universelle</h3>
                  <p className="text-gray-600">
                    Utilisation du réseau Wi-Fi existant pour connecter les devices domotiques. Solution 
                    simple pour une installation rapide, idéale pour des projets ponctuels ou complémentaires.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">LoRaWAN - Longue portée</h3>
                  <p className="text-gray-600">
                    Technologie basse consommation pour la domotique extérieure et les grandes propriétés. 
                    Permet de connecter des devices sur de longues distances avec une autonomie de plusieurs années.
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
            Prêt à transformer votre habitation niçoise en maison connectée ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe de spécialistes en domotique vous propose des solutions sur mesure 
            pour apporter confort, sécurité et économies d&apos;énergie à votre quotidien.
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
            Audit domotique offert - Solutions sur mesure - Interventions sur Nice et toute la Côte d&apos;Azur
          </p>
        </div>
      </section>
    </>
  );
}