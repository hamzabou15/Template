import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, FileText, ArrowLeft, Home, Building, Wrench, Car, Warehouse } from 'lucide-react';

export const metadata: Metadata = {
  title: "Nos Réalisations | Portfolio d&apos;Électricien à Nice",
  description: "Découvrez nos réalisations en électricité à Nice et ses environs. Installation, rénovation et mise aux normes électrique pour particuliers et professionnels.",
  keywords: "réalisations électricien nice, portfolio électricien, travaux électriques nice, installation électrique nice, rénovation électrique nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: "Nos Réalisations - Portfolio d&apos;Électricien à Nice",
    description: "Découvrez nos réalisations en électricité à Nice et ses environs. Installation, rénovation et mise aux normes électrique.",
    url: 'https://electriciennice-expert.fr/portfolio',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/portfolio-og.webp',
        width: 1200,
        height: 630,
        alt: 'Portfolio de réalisations électriques à Nice',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

const projects = [
  {
    id: 1,
    slug: "installation-electrique-complete-hauteurs-nice",
    title: "Installation électrique complète",
    location: "Hauteurs de Nice",
    type: "Appartement",
    description: "Installation électrique neuve aux normes NFC 15-100 pour un appartement de 80m² avec intégration domotique.",
    image: "/images/installation-nice-hauteurs.webp",
    service: "Installation électrique Nice",
    details: [
      "Tableau électrique moderne avec disjoncteurs différentiels",
      "Circuits spécialisés pour cuisine équipée",
      "Installation domotique pour gestion intelligente de l'éclairage",
      "Prises et interrupteurs design",
      "Éclairage LED économique"
    ],
    duration: "5 jours",
    budget: "À partir de 4500€",
    challenges: "Intégration dans un bâtiment ancien avec contraintes architecturales"
  },
  {
    id: 2,
    slug: "renovation-electrique-villa-bellet",
    title: "Rénovation électrique de villa",
    location: "Nice Bellet",
    type: "Villa",
    description: "Rénovation complète de l'installation électrique d&apos;une villa avec mise aux normes et modernisation du tableau électrique.",
    image: "/images/renovation-villa-bellet.webp",
    service: "Rénovation électrique Nice",
    details: [
      "Mise aux normes NFC 15-100 complète",
      "Remplacement de l'ancien tableau électrique",
      "Installation de prises de terre",
      "Création de circuits spécialisés pour piscine et spa",
      "Éclairage extérieur avec détecteurs de mouvement"
    ],
    duration: "8 jours",
    budget: "À partir de 7500€",
    challenges: "Modernisation d&apos;une installation datant des années 70 sans casser les murs"
  },
  {
    id: 3,
    slug: "mise-aux-normes-cuisine-feric",
    title: "Mise aux normes cuisine",
    location: "St Pierre de Féric",
    type: "Cuisine",
    description: "Mise en conformité NFC 15-100 d&apos;une cuisine avec installation de prises spécifiques et circuit dédié pour électroménagers.",
    image: "/images/mise-aux-normes-cuisine.webp",
    service: "Mise aux normes électrique",
    details: [
      "Circuit dédié pour plaques de cuisson",
      "Prises renforcées pour électroménagers",
      "Disjoncteur différentiel haute sensibilité",
      "Éclairage LED sous meubles",
      "Vérification de la prise de terre"
    ],
    duration: "2 jours",
    budget: "À partir de 1200€",
    challenges: "Intervention dans une cuisine déjà équipée sans endommager les meubles"
  },
  {
    id: 4,
    slug: "installation-bornes-recharge-ve",
    title: "Installation de bornes de recharge VE",
    location: "Cagnes-sur-Mer",
    type: "Parking copropriété",
    description: "Installation de 6 bornes de recharge pour véhicules électriques dans le parking d&apos;une copropriété.",
    image: "/images/bornes-recharge-ve.webp",
    service: "Bornes de recharge VE",
    details: [
      "Étude technique préalable",
      "Installation de 6 bornes Wallbox 7kW",
      "Gestion intelligente de la puissance",
      "Système de facturation individuelle",
      "Conformité aux normes IRVE"
    ],
    duration: "4 jours",
    budget: "À partir de 8500€",
    challenges: "Coordination avec le syndic et gestion des autorisations"
  },
  {
    id: 5,
    slug: "eclairage-exterieur-villa",
    title: "Éclairage extérieur de villa",
    location: "Villefranche-sur-Mer",
    type: "Villa",
    description: "Création d&apos;un éclairage extérieur ambiance pour une villa avec jardin et piscine.",
    image: "/images/eclairage-exterieur-villa.webp",
    service: "Éclairage extérieur",
    details: [
      "Projecteurs LED encastrés pour allées",
      "Éclairage subaquatique piscine",
      "Spots orientables pour végétation",
      "Système automatisé avec détecteurs",
      "Télécommande et application mobile"
    ],
    duration: "3 jours",
    budget: "À partir de 3200€",
    challenges: "Intégration discrète dans le paysage existant"
  },
  {
    id: 6,
    slug: "renovation-bureau-commercial",
    title: "Rénovation bureau commercial",
    location: "Nice Libération",
    type: "Bureau",
    description: "Rénovation complète de l'installation électrique d&apos;un espace commercial de 120m².",
    image: "/images/renovation-bureau-commercial.webp",
    service: "Électricité commerciale",
    details: [
      "Nouveau tableau électrique divisionnaire",
      "Éclairage LED professionnel",
      "Prises de courant et RJ45",
      "Circuit dédié serveurs",
      "Système de sécurité incendie"
    ],
    duration: "6 jours",
    budget: "À partir de 6800€",
    challenges: "Travail en horaires décalés pour ne pas perturber l'activité commerciale"
  }
];

export default function Portfolio() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Réalisations d&apos;électricien à Nice",
            "description": "Portfolio des réalisations en électricité à Nice et ses environs",
            "url": "https://electriciennice-expert.fr/portfolio",
            "numberOfItems": 6,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": project.title,
                "description": project.description,
                "areaServed": project.location
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
              Nos <span className="text-[#f25000]">Réalisations</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez nos projets d&apos;installation, rénovation et mise aux normes électrique 
              réalisés à Nice et dans ses environs.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#f25000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.service}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                      {project.type === "Villa" && <Home className="text-[#f25000] h-4 w-4" />}
                      {project.type === "Appartement" && <Building className="text-[#f25000] h-4 w-4" />}
                      {project.type === "Cuisine" && <Wrench className="text-[#f25000] h-4 w-4" />}
                      {project.type === "Parking copropriété" && <Car className="text-[#f25000] h-4 w-4" />}
                      {project.type === "Bureau" && <Warehouse className="text-[#f25000] h-4 w-4" />}
                      <span className="text-sm text-gray-600">{project.type}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{project.duration}</span>
                    <span className="text-sm font-semibold text-[#f25000]">{project.budget}</span>
                  </div>
                  
                  <Link href={`/portfolio/${project.slug}`}>
                    <Button className="w-full bg-[#f25000] hover:bg-[#e34600] text-white">
                      Voir les détails du projet
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vous avez un projet similaire ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Notre équipe d&apos;électriciens qualifiés est à votre disposition pour réaliser 
              vos projets d&apos;installation, rénovation ou mise aux normes électrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis-electricien-gratuit">
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
            Prêt à réaliser votre projet ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de votre projet électrique et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis-electricien-gratuit">
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