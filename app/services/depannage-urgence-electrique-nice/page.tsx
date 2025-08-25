import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield, Zap, AlertTriangle, MapPin, Euro, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: "Dépannage Électrique Urgence à Nice | Intervention 24h/24 en 30min",
  description: "🔌 Électricien urgentiste à Nice pour dépannage électrique 24h/24 et 7j/7. Intervention express en 30 minutes maximum pour panne de courant, disjoncteur qui saute, prise défectueuse. Devis gratuit immédiat.",
  keywords: "dépannage électrique urgence Nice, électricien urgence Nice, panne électrique Nice, dépannage électricité 24h/24 Nice, réparation électrique urgente Nice, électricien 06",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/depannage-urgence-electrique-nice',
  },
  openGraph: {
    title: "Dépannage Électrique Urgence à Nice - Intervention 24h/24",
    description: "Électricien urgentiste à Nice pour dépannage électrique 24h/24. Intervention en 30 minutes maximum pour toutes pannes.",
    url: 'https://electriciennice-expert.fr/services/depannage-urgence-electrique-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/depannage-urgence-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Dépannage électrique urgence à Nice - Intervention 24h/24',
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

export default function DepannageUrgenceElectriqueNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Dépannage électrique d&apos;urgence",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"],
              "availability": "24/7"
            },
            "description": "Service de dépannage électrique urgent à Nice 24h/24 et 7j/7",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de Dépannage Urgent",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dépannage panne électrique complète"
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
              Service d&apos;urgence disponible 24h/24
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dépannage Électrique d&apos;Urgence à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Intervention express en <strong>30 minutes maximum</strong> pour toutes pannes électriques à Nice et ses alentours. Disponible 24h/24 et 7j/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Clock className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Intervention 24h/24</h3>
              <p className="text-blue-100">Disponible même les week-ends et jours fériés</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Zap className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">30 minutes max</h3>
              <p className="text-blue-100">Temps d&apos;intervention moyen sur Nice</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis gratuit</h3>
              <p className="text-blue-100">Prix transparents sans surprise</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+33756935200">
                <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  <Phone className="mr-2" size={20} />
                  Appel d&apos;urgence : 07 56 93 52 00
                </Button>
              </Link>
              <Link href="/devis-electricien-gratuit">
                <Button variant="outline" size="xlg" className="border-white text-[#1b1e3f]  hover:bg-white hover:text-[#1b1e3f]">
                  Devis gratuit en ligne
                </Button>
              </Link>
            </div>
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Service disponible immédiatement</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Urgence Électricité à Nice : Service de Dépannage 24h/24
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Une panne électrique peut survenir à tout moment, souvent au moment le plus inopportun. 
                Que vous soyez confronté à une coupure de courant totale, un disjoncteur qui saute 
                répétitivement ou des prises défectueuses, notre équipe d&apos;électriciens urgentistes 
                intervient rapidement sur Nice et toute sa région.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Basés au cœur de Nice, nous comprenons les spécificités des installations électriques 
                niçoises, des vieux appartements du Vieux-Nice aux villas modernes de Cimiez ou de l&apos;Arenas. 
                Notre connaissance locale nous permet d&apos;intervenir avec une efficacité optimale, en identifiant 
                rapidement la source du problème et en apportant une solution durable.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  ⚡ <span className="text-[#f25000]">Service urgent disponible 24h/24 et 7j/7</span> - 
                  Même les week-ends et jours fériés, notre équipe est mobilisable pour 
                  répondre à vos urgences électriques à Nice.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/depannage-urgence-nice.webp"
                alt="Électricien en intervention d&apos;urgence à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Types d&apos;urgences électriques traitées à Nice 
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "⚡", title: "Panne de courant générale", description: "Coupure totale d&apos;électricité dans votre logement ou local professionnel à Nice. Nous intervenons rapidement pour identifier la source du problème et rétablir l&apos;alimentation." },
              { icon: "🔌", title: "Panne de courant partielle", description: "Certains circuits électriques hors service tandis que d&apos;autres fonctionnent normalement. Nous diagnostiquons l&apos;origine de la panne et effectuons les réparations nécessaires." },
              { icon: "🔁", title: "Disjoncteur qui saute", description: "Disjoncteur qui déclenche répétitivement, signe d&apos;un problème électrique potentiellement dangereux. Nous identifions la cause (surcharge, court-circuit, défaut d&apos;isolement) et apportons une solution." },
              { icon: "🔥", title: "Odeur de brûlé", description: "Odeur suspecte provenant des installations électriques, prises ou tableau électrique. Situation d&apos;urgence nécessitant une intervention immédiate pour éviter tout risque d&apos;incendie." },
              { icon: "⚠️", title: "Prise qui chauffe", description: "Prises électriques surchauffées, fondues ou présentant des traces de brûlure. Nous remplaçons les éléments défectueux et vérifions l&apos;ensemble de l&apos;installation." },
              { icon: "💡", title: "Court-circuit", description: "Problème de court-circuit dans l&apos;installation se manifestant par des étincelles, des disjonctements ou des équipements endommagés. Nous localisons et réparons le défaut." },
              { icon: "🚪", title: "Volet roulant bloqué", description: "Volets roulants électriques en panne, ne répondant plus aux commandes. Nous réparons le mécanisme ou remplaçons le moteur défectueux." },
              { icon: "🌡️", title: "Chauffe-eau en panne", description: "Ballon d&apos;eau chaude électrique défaillant, ne produisant plus d&apos;eau chaude. Nous diagnostiquons la panne (thermostat, résistance, sécurité) et effectuons la réparation." },
              { icon: "🔍", title: "Recherche de panne", description: "Diagnostic de pannes électriques complexes nécessitant une expertise technique et un matériel de mesure professionnel pour identifier la source du problème." }
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
            Notre Processus d&apos;Intervention d&apos;Urgence à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Appel d&apos;urgence</h3>
                    <p className="text-gray-600">
                      Dès votre appel au <strong>07 56 93 52 00</strong>, notre standardiste recueille 
                      les informations essentielles sur votre problème électrique. Nous localisons 
                      votre adresse à Nice ou dans les alentours et organisons l&apos;intervention 
                      en fonction de l&apos;urgence de la situation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Déplacement express</h3>
                    <p className="text-gray-600">
                      Notre électricien se rend sur place en moins de 30 minutes en moyenne sur Nice. 
                      Nos véhicules sont équipés de tout le matériel nécessaire pour la plupart des 
                      interventions d&apos;urgence, nous permettant de commencer les travaux immédiatement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnostic expert</h3>
                    <p className="text-gray-600">
                      À son arrivée, notre technicien procède à un diagnostic complet de votre 
                      installation électrique. À l&apos;aide d&apos;appareils de mesure professionnels, 
                      il identifie la source de la panne et vous présente un devis détaillé 
                      et transparent avant toute intervention.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Réparation immédiate</h3>
                    <p className="text-gray-600">
                      Après votre accord, notre électricien procède à la réparation ou au remplacement 
                      des éléments défectueux. Nous utilisons des matériaux de qualité et respectons 
                      scrupuleusement les normes de sécurité en vigueur (NFC 15-100).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full rounded-xl overflow-hidden">
              <Image
                src="/images/process-intervention-nice.webp"
                alt="Processus d&apos;intervention d&apos;urgence électrique à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi choisir notre service de dépannage à Nice ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Électriciens certifiés</h3>
              </div>
              <p className="text-gray-600">
                Notre équipe est composée d&apos;électriciens diplômés et certifiés, disposant 
                d&apos;une expérience solide dans le dépannage électrique urgent. Chaque technicien 
                suit des formations régulières pour maintenir ses compétences à jour avec les 
                dernières normes et technologies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Disponibilité permanente</h3>
              </div>
              <p className="text-gray-600">
                Nous intervenons 24 heures sur 24 et 7 jours sur 7, y compris les week-ends 
                et jours fériés. Notre service de garde assure une permanence téléphonique 
                permanente pour répondre à vos urgences électriques à toute heure.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Wrench className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Matériel professionnel</h3>
              </div>
              <p className="text-gray-600">
                Nos véhicules sont équipés d&apos;un stock important de pièces détachées et 
                d&apos;outillage professionnel, nous permettant de résoudre la majorité des 
                pannes lors de la première intervention, sans avoir à effectuer de multiples 
                déplacements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Euro className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Transparence tarifaire</h3>
              </div>
              <p className="text-gray-600">
                Nous établissons un devis détaillé et transparent avant toute intervention, 
                sans surprise à la fin des travaux. Nos tarifs sont clairs et compétitifs, 
                incluant le déplacement, la main d&apos;œuvre et les fournitures de base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Zone d&apos;intervention à Nice et alentours 
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
          
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vous ne trouvez pas votre ville ?</h3>
            <p className="text-gray-600 mb-6">
              Notre zone d&apos;intervention couvre un rayon de 30km autour de Nice. 
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

      {/* Emergency CTA */}
      <section className="py-16 bg-[#1b1e3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Urgence électrique à Nice ? Ne restez pas dans le noir ! 
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens urgentistes intervient 24h/24 et 7j/7 sur Nice et sa région. 
            Appelez-nous pour une intervention immédiate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33756935200">
              <Button size="xlg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                <Phone className="mr-2" size={24} />
                07 56 93 52 00
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="xlg" className="border-white text-[#1b1e3f] hover:bg-white hover:text-[#1b1e3f]">
                Contact rapide
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-blue-200">
            Service disponible immédiatement - Intervention en moins de 30 minutes
          </p>
        </div>
      </section>
    </>
  );
}