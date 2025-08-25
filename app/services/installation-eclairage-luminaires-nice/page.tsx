// app/services/installation-eclairage-luminaires-nice/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Zap, Home, Euro, Wrench, Lightbulb, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: "Installation Éclairage & Luminaires à Nice | Expert Éclairage Design",
  description: "💡 Installation d&apos;éclairage et luminaires à Nice par des électriciens spécialisés. Solutions modernes, économiques et design pour votre intérieur. Devis gratuit et conseils experts.",
  keywords: "installation éclairage Nice, pose luminaires Nice, électricien éclairage Nice, éclairage design Nice, spot LED Nice, installation lustre Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/services/installation-eclairage-luminaires-nice',
  },
  openGraph: {
    title: "Installation Éclairage & Luminaires à Nice - Expert Éclairage Design",
    description: "Installation d&apos;éclairage et luminaires à Nice par des électriciens spécialisés. Solutions modernes, économiques et design pour votre intérieur.",
    url: 'https://electriciennice-expert.fr/services/installation-eclairage-luminaires-nice',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/installation-eclairage-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Installation éclairage et luminaires à Nice',
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

export default function InstallationEclairageLuminairesNice() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Installation d&apos;éclairage et luminaires",
            "provider": {
              "@type": "Electrician",
              "name": "Electricien Nice Expert",
              "telephone": "+33756935200",
              "areaServed": ["Nice", "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"]
            },
            "description": "Installation d&apos;éclairage et luminaires à Nice par des électriciens spécialisés",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services d&apos;Installation d&apos;Éclairage",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation de luminaires et éclairage"
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
              <Lightbulb className="mr-2" size={16} />
              Solutions d&apos;éclairage sur mesure
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Installation Éclairage & Luminaires à <span className="text-[#f25000]">Nice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Création et installation de solutions d&apos;éclairage modernes et design à Nice. Éclairage intérieur, extérieur, spots LED et luminaires décoratifs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Sun className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Éclairage design</h3>
              <p className="text-blue-100">Solutions esthétiques et modernes adaptées à vos espaces</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Zap className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">LED économique</h3>
              <p className="text-blue-100">Technologies LED performantes pour réduire votre consommation</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <Euro className="mx-auto mb-4 text-[#f25000]" size={32} />
              <h3 className="text-lg font-semibold mb-2">Devis gratuit</h3>
              <p className="text-blue-100">Conseils experts et devis transparent sans engagement</p>
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
            <p className="text-blue-200 mt-4 text-sm">Appel gratuit - Conseil en éclairage offert</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Installation d&apos;Éclairage et Luminaires à Nice
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                l&apos;éclairage est un élément essentiel de votre habitat ou de votre espace professionnel à Nice. 
                Bien au-delà de sa fonction utilitaire, un éclairage bien conçu transforme les ambiances, 
                met en valeur l&apos;architecture et le design intérieur, et contribue au bien-être des occupants.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe d&apos;électriciens spécialisés en éclairage à Nice vous propose des solutions sur mesure 
                adaptées à vos besoins, à votre style et aux spécificités de vos espaces. De l&apos;éclairage fonctionnel 
                aux installations design, nous maîtrisons toutes les techniques et technologies actuelles.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f25000]">
                <p className="text-gray-700 font-semibold">
                  💡 <span className="text-[#f25000]">Économies d&apos;énergie garanties</span> - 
                  Nos solutions LED modernes permettent de réduire jusqu&apos;à 80% votre consommation d&apos;énergie 
                  tout en offrant un meilleur confort visuel.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/installation-eclairage-nice.webp"
                alt="Installation d&apos;éclairage et luminaires à Nice"
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
            Nos services d&apos;éclairage à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Éclairage intérieur</h3>
              </div>
              <p className="text-gray-600">
                Installation de lustres, suspensions, spots encastrés, appliques murales, bandeaux LED 
                et tous types de luminaires d&apos;intérieur. Création d&apos;ambiances lumineuses pour chaque pièce 
                de votre habitation ou local professionnel.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Sun className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Éclairage extérieur</h3>
              </div>
              <p className="text-gray-600">
                Installation de bornes, projecteurs, spots encastrés, lampadaires et éclairages de façade 
                pour mettre en valeur votre jardin, terrasse ou entrée. Solutions étanches et résistantes 
                aux conditions climatiques niçoises.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Éclairage LED</h3>
              </div>
              <p className="text-gray-600">
                Installation de solutions LED performantes et économiques : spots LED, rubans LED, 
                ampoules connectées, éclairage intelligent. Réduction de votre consommation d&apos;énergie 
                et augmentation de la durée de vie de votre éclairage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#f25000] p-3 rounded-full">
                  <Wrench className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Dépannage éclairage</h3>
              </div>
              <p className="text-gray-600">
                Réparation et dépannage de tous types de systèmes d&apos;éclairage : remplacement de transformateurs, 
                réparation de circuits, changement d&apos;interrupteurs va-et-vient, dépannage d&apos;éclairage extérieur 
                défectueux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Types de luminaires installés à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "💎", title: "Lustres et suspensions", description: "Installation de lustres design, suspensions contemporaines et plafonniers pour apporter une touche d&apos;élégance à vos intérieurs niçois." },
              { icon: "🔦", title: "Spots encastrés et en saillie", description: "Pose de spots d&apos;éclairage directionnel pour mettre en valeur des zones spécifiques ou créer un éclairage d&apos;ambiance discret." },
              { icon: "🖼️", title: "Appliques murales", description: "Installation d&apos;appliques design pour un éclairage d&apos;appoint ou décoratif dans les couloirs, chambres, salons et salles de bains." },
              { icon: "📏", title: "Bandes LED", description: "Pose de bandeaux LED pour un éclairage moderne et discret sous les meubles, dans les placards ou pour créer des ambiances lumineuses originales." },
              { icon: "🌳", title: "Éclairage de jardin", description: "Installation de bornes, projecteurs et spots extérieurs pour illuminer vos allées, massifs et terrasses et profiter de vos extérieurs même la nuit." },
              { icon: "🏢", title: "Éclairage de façade", description: "Mise en lumière architecturale des façades de maisons et bâtiments pour valoriser votre patrimoine immobilier niçois." },
              { icon: "🎭", title: "Éclairage scénographique", description: "Création d&apos;ambiances lumineuses spécifiques pour mettre en valeur des œuvres d&apos;art, des collections ou des éléments architecturaux remarquables." },
              { icon: "🚶", title: "Éclairage de sécurité", description: "Installation de détecteurs de présence et d&apos;éclairage automatique pour sécuriser les abords de votre habitation ou local professionnel." },
              { icon: "📱", title: "Éclairage connecté", description: "Installation de systèmes d&apos;éclairage intelligent pilotables à distance via smartphone, tablette ou assistant vocal." }
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

      {/* Advice Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Conseils pour un éclairage réussi à Nice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Adapter l&apos;éclairage à chaque pièce</h3>
                    <p className="text-gray-600">
                      Chaque pièce nécessite un éclairage spécifique : lumière douce et tamisée pour les chambres, 
                      éclairage fonctionnel pour la cuisine, lumière d&apos;ambiance pour le salon, et éclairage intense 
                      pour les bureaux et salles de bains.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Profiter de la lumière naturelle</h3>
                    <p className="text-gray-600">
                      À Nice, où l&apos;ensoleillement est important, il est essentiel de concevoir un éclairage 
                      qui complète la lumière naturelle sans la contrarier. Positionnez judicieusement 
                      vos sources lumineuses en fonction des ouvertures et de l&apos;orientation de votre logement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Penser aux ambiances variables</h3>
                    <p className="text-gray-600">
                      Optez pour des variateurs d&apos;intensité et des systèmes multi-éclairages pour pouvoir 
                      adapter la luminosité en fonction des moments de la journée et des activités. 
                      Cette approche permet de créer différentes ambiances dans un même espace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Choisir les bonnes températures de couleur</h3>
                  <p className="text-gray-600">
                    Les LED offrent différentes températures de couleur : blanc chaud (2700-3000K) pour 
                    une ambiance cozy, blanc neutre (4000-4500K) pour les espaces de travail, et blanc froid 
                    (5000-6500K) pour les zones nécessitant une grande visibilité.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Éclairer les espaces extérieurs</h3>
                  <p className="text-gray-600">
                    À Nice, où la vie extérieure est importante, pensez à un éclairage de terrasse, 
                    de jardin et de façade. Choisissez des luminaires étanches (IP44 minimum) et 
                    résistants aux conditions méditerranéennes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f25000] rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Penser à l&apos;éclairage de sécurité</h3>
                  <p className="text-gray-600">
                    Installez des détecteurs de mouvement pour l&apos;éclairage des entrées, allées et 
                    zones sombres. Cela améliore la sécurité tout en réalisant des économies d&apos;énergie, 
                    la lumière ne s&apos;allumant que lorsqu&apos;elle est nécessaire.
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
            Prêt à illuminer votre intérieur à Nice ?
          </h2>
          <p className="text-xl mb-8">
            Notre équipe d&apos;électriciens spécialistes de l&apos;éclairage vous propose des solutions sur mesure 
            pour créer des ambiances lumineuses adaptées à vos espaces et à votre style de vie.
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
            Conseil en éclairage offert - Interventions sur Nice et toute la Côte d&apos;Azur
          </p>
        </div>
      </section>
    </>
  );
}