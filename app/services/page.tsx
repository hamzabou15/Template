// app/services/page.js
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, FileText, ArrowLeft, Wrench, Home, Shield, Lightbulb, Zap, Settings, Fan, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: "Services Électricité à Nice | Installation, Dépannage, Rénovation",
  description: "🔧 Électricien professionnel à Nice pour tous vos services: dépannage urgent, installation électrique, rénovation, mise aux normes, domotique et bornes de recharge.",
  keywords: "électricien Nice, services électricité, dépannage électrique Nice, installation électrique, rénovation électrique, mise aux normes électrique Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Services Électricité à Nice | Installation, Dépannage, Rénovation",
    description: "Électricien professionnel à Nice pour tous vos services: dépannage urgent, installation électrique, rénovation, mise aux normes, domotique et bornes de recharge.",
    url: 'https://electriciennice-expert.fr/services',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/equipe-electriciens-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Services électriques à Nice',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

const services = [
  {
    id: 1,
    slug: "depannage-electrique-domestique-nice",
    title: "Dépannage Électrique Domestique",
    location: "Nice et environs",
    type: "Dépannage",
    description: "Intervention rapide pour toutes pannes électriques domestiques à Nice. Réparation de circuits, panneaux et prises défectueuses.",
    image: "/images/depannage-domestique-nice.webp",
    service: "Dépannage électrique",
    details: [
      "Diagnostic gratuit de la panne",
      "Réparation de circuits électriques",
      "Remplacement de prises et interrupteurs",
      "Dépannage de tableau électrique",
      "Intervention d&apos;urgence 7j/7"
    ],
    duration: "1-3 heures",
    budget: "À partir de 90€",
    icon: <Wrench className="text-3xl" />
  },
  {
    id: 2,
    slug: "depannage-urgence-electrique-nice",
    title: "Dépannage d'Urgence Électrique",
    location: "Nice et Côte d'Azur",
    type: "Urgence",
    description: "Service d&apos;urgence 24h/24 et 7j/7 pour les pannes électriques critiques nécessitant une intervention immédiate.",
    image: "/images/depannage-urgence-nice.webp",
    service: "Dépannage urgent",
    details: [
      "Disponible 24h/24 et 7j/7",
      "Intervention en moins de 2h",
      "Électriciens certifiés et expérimentés",
      "Matériel professionnel de diagnostic",
      "Solution rapide et efficace"
    ],
    duration: "2-4 heures",
    budget: "À partir de 120€",
    icon: <Zap className="text-3xl" />
  },
  {
    id: 3,
    slug: "domotique-automatisme-nice",
    title: "Domotique et Automatismes",
    location: "Nice et région",
    type: "Domotique",
    description: "Installation de systèmes domotiques pour automatiser votre habitat et optimiser votre consommation énergétique.",
    image: "/images/domotique-nice.webp",
    service: "Domotique",
    details: [
      "Gestion centralisée de l'éclairage",
      "Automatisation des volets et portails",
      "Systèmes de sécurité connectés",
      "Contrôle à distance via smartphone",
      "Optimisation énergétique"
    ],
    duration: "1-3 jours",
    budget: "À partir de 1500€",
    icon: <Cpu className="text-3xl" />
  },
  {
    id: 4,
    slug: "installation-climatisation-ventilation-nice",
    title: "Climatisation et Ventilation",
    location: "Nice et alentours",
    type: "Climatisation",
    description: "Installation et maintenance de systèmes de climatisation et ventilation pour un confort optimal toute l'année.",
    image: "/images/installation-climatisation-nice.webp",
    service: "Climatisation",
    details: [
      "Installation de climatiseurs réversibles",
      "Systèmes de ventilation mécanique",
      "Maintenance préventive et curative",
      "Dépannage de systèmes existants",
      "Conseils en efficacité énergétique"
    ],
    duration: "1-2 jours",
    budget: "À partir de 1200€",
    icon: <Fan className="text-3xl" />
  },
  {
    id: 5,
    slug: "installation-eclairage-luminaires-nice",
    title: "Éclairage et Luminaires",
    location: "Nice et sa région",
    type: "Éclairage",
    description: "Conception et installation de solutions d&apos;éclairage intérieur et extérieur pour valoriser votre habitat.",
    image: "/images/installation-eclairage-nice.webp",
    service: "Éclairage",
    details: [
      "Éclairage intérieur design",
      "Solutions LED économiques",
      "Éclairage extérieur sécuritaire",
      "Installation de lustres et appliques",
      "Éclairage d&apos;ambiance et scénarios"
    ],
    duration: "1-2 jours",
    budget: "À partir de 800€",
    icon: <Lightbulb className="text-3xl" />
  },
  {
    id: 6,
    slug: "installation-electrique-nice",
    title: "Installation Électrique Complète",
    location: "Nice et environs",
    type: "Installation",
    description: "Installation électrique neuve aux normes NFC 15-100 pour constructions neuves, extensions et rénovations complètes.",
    image: "/images/installation-electrique-nice.webp",
    service: "Installation électrique",
    details: [
      "Tableau électrique aux normes",
      "Circuits spécialisés cuisine/salle de bain",
      "Prises et interrupteurs sécurisés",
      "Câblage structurel professionnel",
      "Certificat de conformité Consuel"
    ],
    duration: "3-7 jours",
    budget: "À partir de 3500€",
    icon: <Home className="text-3xl" />
  },
  {
    id: 7,
    slug: "installation-prise-tableau-electrique-nice",
    title: "Prises et Tableaux Électriques",
    location: "Nice et Côte d'Azur",
    type: "Installation",
    description: "Installation et mise à niveau de prises électriques, tableaux et disjoncteurs pour une sécurité optimale.",
    image: "/images/installation-prise-tableau-nice.webp",
    service: "Prises et tableaux",
    details: [
      "Prises renforcées pour électroménagers",
      "Tableaux électriques modernes",
      "Disjoncteurs différentiels haute sensibilité",
      "Prises RJ45 et multimédias",
      "Protection contre les surtensions"
    ],
    duration: "1-2 jours",
    budget: "À partir de 600€",
    icon: <Settings className="text-3xl" />
  },
  {
    id: 8,
    slug: "installation-volets-portails-electriques-nice",
    title: "Volets et Portails Automatiques",
    location: "Nice et région",
    type: "Automatismes",
    description: "Installation et dépannage de volets roulants, portails et portes de garage électriques pour plus de confort.",
    image: "/images/installation-volets-portails-nice.webp",
    service: "Automatismes",
    details: [
      "Moteurs pour volets roulants",
      "Portails électriques coulissants ou battants",
      "Portes de garage sectionnelles",
      "Télécommandes et centralisation",
      "Dépannage et maintenance"
    ],
    duration: "1-2 jours",
    budget: "À partir de 900€",
    icon: <Settings className="text-3xl" />
  },
  {
    id: 9,
    slug: "mise-aux-normes-electrique-nice",
    title: "Mise aux Normes Électriques",
    location: "Nice et alentours",
    type: "Conformité",
    description: "Mise en conformité de votre installation électrique avec la norme NFC 15-100 pour une sécurité optimale.",
    image: "/images/mise-aux-normes-nice..webp",
    service: "Mise aux normes",
    details: [
      "Diagnostic complet de l'installation",
      "Mise à la terre conforme",
      "Protection différentielle adaptée",
      "Tableau électrique aux normes",
      "Certificat de conformité"
    ],
    duration: "1-3 jours",
    budget: "À partir de 1500€",
    icon: <Shield className="text-3xl" />
  },
  {
    id: 10,
    slug: "renovation-electrique-nice",
    title: "Rénovation Électrique Complète",
    location: "Nice et sa région",
    type: "Rénovation",
    description: "Rénovation complète d'installations électriques anciennes pour améliorer sécurité, confort et efficacité énergétique.",
    image: "/images/renovation-electrique-nice.webp",
    service: "Rénovation électrique",
    details: [
      "Remplacement des anciens circuits",
      "Modernisation du tableau électrique",
      "Augmentation de la puissance",
      "Installation de prises de communication",
      "Optimisation énergétique"
    ],
    duration: "2-5 jours",
    budget: "À partir de 2500€",
    icon: <Wrench className="text-3xl" />
  }
];

export default function Services() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Services d&apos;électricien à Nice",
            "description": "Services électriques complets à Nice et ses environs",
            "url": "https://electriciennice-expert.fr/services",
            "numberOfItems": 10,
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "areaServed": service.location
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1b1e3f] to-[#2a2f5d] text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Retour à l&apos;accueil
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-[#f25000]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez l&apos;ensemble de nos services électriques professionnels pour particuliers et professionnels à Nice et ses environs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#f25000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.service}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <span className="text-sm">{service.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                      {service.icon}
                      <span className="text-sm text-gray-600 ml-2">{service.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{service.duration}</span>
                    <span className="text-sm font-semibold text-[#f25000]">{service.budget}</span>
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full bg-[#f25000] hover:bg-[#e34600] text-white">
                      Découvrir ce service
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vous ne trouvez pas le service dont vous avez besoin ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Notre équipe d&apos;électriciens qualifiés est à votre disposition pour étudier votre projet
              et vous proposer une solution sur mesure adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis">
                <Button size="lg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                  <FileText className="mr-2" size={20} />
                  Demander un devis
                </Button>
              </Link>
              <Link href="tel:+33756935200">
                <Button size="lg" variant="outline" className="border-[#1b1e3f] text-[#1b1e3f] hover:bg-[#1b1e3f] hover:text-white">
                  <Phone className="mr-2" size={20} />
                  07 56 93 52 00
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1b1e3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un projet électrique à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens certifiés est à votre service pour tous vos projets,
            de la simple réparation à l&apos;installation complète.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <Button size="lg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                <FileText className="mr-2" size={20} />
                Demander un devis
              </Button>
            </Link>
            <Link href="tel:+33756935200">
              <Button size="lg" className="bg-white text-[#1b1e3f] hover:bg-gray-100 font-semibold">
                <Phone className="mr-2" size={20} />
                07 56 93 52 00
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}