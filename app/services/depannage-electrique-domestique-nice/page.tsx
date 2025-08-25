// app/services/depannage-electrique-domestique-nice/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield, Euro, AlertTriangle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Dépannage Électrique Domestique à Nice | Réparation 7j/7",
  description: "🔌 Dépannage électrique domestique à Nice pour particuliers. Réparation de pannes, remplacement de matériel et maintenance préventive. Service rapide et professionnel.",
  keywords: "dépannage électrique domestique Nice, réparation électrique maison Nice, électricien particulier Nice, panne électrique habitation Nice, électricien domicile Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/depannage-electrique-domestique-nice',
  },
  openGraph: {
    title: "Dépannage Électrique Domestique à Nice - Réparation 7j/7",
    description: "Dépannage électrique domestique à Nice pour particuliers. Réparation de pannes, remplacement de matériel et maintenance préventive.",
    url: 'https://electriciennice-expert.fr/services/depannage-electrique-domestique-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/depannage-domestique-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Dépannage électrique domestique à Nice',
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

export default function DepannageElectriqueDomestiqueNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Dépannage électrique domestique",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"],
              "availability": "24/7"
            },
            "description": "Dépannage électrique domestique à Nice pour particuliers",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de Dépannage Domestique",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Réparation de pannes électriques domestiques"
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
              <AlertTriangle className="mr-2" size={16} />
              Service disponible 7j/7
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dépannage Électrique Domestique à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Intervention rapide pour toutes les pannes électriques domestiques à Nice. Réparation, dépannage et maintenance préventive pour votre habitation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Clock className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Intervention rapide</h3>
              <p className="text-blue-100">Disponible 7j/7 pour répondre à vos urgences domestiques</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Shield className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Expertise technique</h3>
              <p className="text-blue-100">Diagnostic précis et réparation durable de vos installations</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis gratuit</h3>
              <p className="text-blue-100">Transparence tarifaire sans surprise</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+33756935200">
                <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  <Phone className="mr-2" size={20} />
                  Appel dépannage : 07 56 93 52 00
                </Button>
              </Link>
              <Link href="/devis-electricien-gratuit">
                <Button variant="outline" size="xlg" className="border-white text-white bg-transparent hover:bg-white hover:text-[#1b1e3f]">
                  Devis gratuit en ligne
                </Button>
              </Link>
            </div>
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Service disponible 7j/7</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dépannage Électrique Domestique à Nice
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Une panne électrique dans votre habitation à Nice peut survenir à tout moment et perturber votre quotidien. 
                Que ce soit une coupure de courant, un disjoncteur qui saute, des prises défectueuses ou un problème d&apos;éclairage, 
                notre équipe d&apos;électriciens spécialisés en dépannage domestique intervient rapidement pour diagnostiquer et réparer 
                votre installation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nous comprenons l&apos;importance d&apos;une électricité fonctionnelle dans votre foyer et intervenons sur tous les types 
                d&apos;habitations niçoises : appartements du Vieux-Nice, maisons de Cimiez, villas de Mont Boron ou résidences 
                modernes de l&apos;Arenas. Notre connaissance du bâti local nous permet d&apos;intervenir avec efficacité et précision.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ⚡ <span className="text-[#f25000]">Service réactif 7j/7</span> - 
                  Nous intervenons même le week-end pour vos urgences domestiques et vous garantissons 
                  un retour à la normale rapide de votre installation électrique.
                </p>
              </div>
            </div>
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/depannage-domestique-nice.webp"
                alt="Dépannage électrique domestique à Nice"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Types de pannes domestiques traitées à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🔌", title: "Prises électriques défectueuses", description: "Réparation ou remplacement de prises électriques qui ne fonctionnent plus, chauffent anormalement ou présentent des signes de détérioration." },
              { icon: "💡", title: "Problèmes d&apos;éclairage", description: "Diagnostic et réparation des circuits d&apos;éclairage : ampoules qui grillent fréquemment, interrupteurs défectueux, va-et-vient qui ne fonctionnent plus." },
              { icon: "🔁", title: "Disjoncteur qui saute", description: "Identification de la cause des déclenchements intempestifs de disjoncteurs et mise en place de solutions durables." },
              { icon: "📺", title: "Pannes d&apos;appareils électriques", description: "Diagnostic des pannes liées à l&apos;alimentation électrique de vos appareils ménagers et électroménagers." },
              { icon: "🌡️", title: "Chauffe-eau électrique", description: "Dépannage des ballons d&apos;eau chaude électriques : résistance, thermostat, groupe de sécurité ou anode défectueuse." },
              { icon: "🚪", title: "Volets roulants électriques", description: "Réparation des moteurs de volets roulants, des télécommandes et des interrupteurs défectueux." },
              { icon: "🔍", title: "Recherche de panne", description: "Identification de pannes complexes nécessitant une expertise technique et un matériel de mesure professionnel." },
              { icon: "⚡", title: "Coupure de courant partielle", description: "Rétablissement de l&apos;alimentation électrique sur les circuits affectés par une coupure partielle." },
              { icon: "🛠️", title: "Remplacement de matériel", description: "Changement d&apos;éléments électriques défectueux : interrupteurs, prises, disjoncteurs, câbles, etc." }
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Notre processus d&apos;intervention à domicile à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnostic précis</h3>
                    <p className="text-gray-600">
                      À son arrivée, notre électricien procède à un diagnostic complet de votre installation 
                      à l&apos;aide d&apos;appareils de mesure professionnels. Il identifie la source de la panne et 
                      vous explique clairement le problème.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Devis transparent</h3>
                    <p className="text-gray-600">
                      Avant toute intervention, nous établissons un devis détaillé et transparent qui inclut 
                      la main d&apos;œuvre et les éventuels matériaux nécessaires. Aucune surprise à la fin des travaux.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Réparation efficace</h3>
                    <p className="text-gray-600">
                      Une fois le devis accepté, notre technicien procède à la réparation en utilisant des 
                      matériaux de qualité et en respectant scrupuleusement les normes de sécurité en vigueur.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Conseils personnalisés</h3>
                    <p className="text-gray-600">
                      Après l&apos;intervention, notre électricien vous donne des conseils pour optimiser 
                      votre installation électrique et prévenir les pannes futures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/process-depannage-domestique-nice.webp"
                alt="Processus de dépannage électrique domestique à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Zone d&apos;intervention pour dépannage domestique à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quartiers de Nice</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Nice Centre", "Vieux Nice", "Cimiez", "Carré d&apos;Or", 
                  "Libération", "Riquier", "Port", "Magnan", 
                  "Saint-Augustin", "Fabron", "Arenas", "Mont Boron",
                  "Saint-Roch", "Gambetta", "Pasteur", "Vauban"
                ].map((district, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin size={16} className="text-[#f25000] mr-2" />
                    <span className="text-gray-700">{district}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Villes autour de Nice</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer", 
                  "Beaulieu-sur-Mer", "Cap-d&apos;Ail", "Èze", "La Trinité", 
                  "Carros", "Colomars", "Aspremont", "Falicon", "Tourrette-Levens",
                  "Saint-André", "Saint-Jean-Cap-Ferrat", "Menton", "Antibes"
                ].map((city, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin size={16} className="text-[#f25000] mr-2" />
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vous ne trouvez pas votre ville ?</h3>
            <p className="text-gray-600 mb-6">
              Notre zone d&apos;intervention couvre un rayon de 25km autour de Nice. 
              Contactez-nous pour vérifier que nous intervenons bien dans votre commune.
            </p>
            <Link href="tel:+33756935200">
              <Button className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                <Phone className="mr-2" size={20} />
                07 56 93 52 00
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1b1e3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Panne électrique à votre domicile à Nice ? 
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens spécialistes du dépannage domestique intervient 7j/7 
            sur Nice et sa région pour vous dépanner rapidement et efficacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33756935200">
              <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                <Phone className="mr-2" size={24} />
                07 56 93 52 00
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="xlg" className="border-white text-white bg-transparent hover:bg-white hover:text-[#1b1e3f]">
                Contact rapide
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-blue-200">
            Service disponible 7j/7 - Intervention rapide sur Nice et alentours
          </p>
        </div>
      </section>
    </>
  );
}