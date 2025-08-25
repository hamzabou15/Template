import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { FaClock, FaCogs, FaLightbulb, FaShieldAlt, FaTools, FaUserTie } from 'react-icons/fa';

const RichContentSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      {/* Schema.org data - hidden from users but visible to search engines */}
      <div itemScope itemType="https://schema.org/Electrician" className="hidden">
        <span itemProp="name">Electricien Nice Expert</span>
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Nice</span>,
          <span itemProp="addressRegion">Alpes-Maritimes</span>
        </span>
        <span itemProp="telephone">+33756935200</span>
        <span itemProp="areaServed">Nice, Cagnes-sur-Mer, Saint-Laurent-du-Var, Villefranche-sur-Mer</span>
        <span itemProp="description">Électricien urgentiste à Nice pour dépannage 24h/24</span>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-blue-100 text-[#f25000] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaTools className="mr-2" /> Expertise Locale
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Expertise Électrique à <span className="text-[#f25000]">Nice</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez pourquoi nous sommes l&apos;électricien de confiance des Niçois depuis 2008
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section 1 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaUserTie className="text-[#f25000] text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Un électricien de confiance à Nice depuis 2008
                </h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Forts de plus de 15 ans d&apos;expérience au service des Niçois, nous avons développé une expertise
                  unique dans le domaine de l&apos;électricité générale. Notre entreprise, implantée au cœur de Nice,
                  intervient quotidiennement pour répondre aux besoins électriques des particuliers et professionnels
                  de la Côte d&apos;Azur.
                </p>

                <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/equipe-electriciens-nice.webp"
                    alt="Notre équipe d&apos;électriciens qualifiés à Nice"
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 p-3 bg-gray-100 text-center">Notre équipe d&apos;électriciens expérimentés intervenant sur Nice et sa région</p>
                </div>

                <p>
                  Notre connaissance approfondie des spécificités techniques des logements niçois,
                  des vieux appartements du Vieux-Nice aux constructions modernes de l&apos;Arenas, nous permet de vous
                  proposer des solutions sur mesure, parfaitement adaptées à votre habitat et à vos besoins.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaClock className="text-red-600 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Interventions 24h/24 pour dépannage électrique à Nice
                </h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Les pannes électriques n&apos;attendent pas, et nous non plus. Notre service d&apos;urgence est disponible
                  24 heures sur 24 et 7 jours sur 7 pour intervenir rapidement sur tout type de panne électrique
                  à Nice et ses alentours.
                </p>

                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-[#f25000]">
                  <h4 className="font-semibold text-orange-800 mb-2">Types d&apos;urgences traitées :</h4>
                  <ul className="list-disc list-inside space-y-1 text-orange-700">
                    <li>Coupures de courant totales ou partielles</li>
                    <li>Disjoncteurs qui sautent répétitivement</li>
                    <li>Prises ou interrupteurs défectueux</li>
                    <li>Tableaux électriques défaillants</li>
                    <li>Problèmes d&apos;éclairage urgents</li>
                  </ul>
                </div>

                <p>
                  Nous intervenons en moyenne en moins de 30 minutes sur Nice, garantissant une prise en charge
                  rapide et efficace de votre dépannage électrique. Notre flotte de véhicules équipés nous permet
                  de nous déplacer rapidement dans tous les quartiers de Nice, du Vieux-Nice à Saint-Augustin.
                </p>
              </div>
            </div>


          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Services Summary */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nos Services à Nice</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <FaTools className="text-[#f25000] text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dépannage Urgent</h4>
                    <p className="text-sm text-gray-600">Intervention 24h/24 sur Nice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <FaShieldAlt className="text-green-600 text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mise aux Normes</h4>
                    <p className="text-sm text-gray-600">Conformité NFC 15-100</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full mt-1">
                    <FaLightbulb className="text-purple-600 text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Installation</h4>
                    <p className="text-sm text-gray-600">Neuve et rénovation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full mt-1">
                    <FaCogs className="text-orange-600 text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Solutions Globales</h4>
                    <p className="text-sm text-gray-600">Domotique, sécurité, etc.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-[#f25000] to-[#d84800] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Besoin d&apos;un électricien à Nice ?</h3>
              <p className="mb-4">Intervention rapide en moins de 30 minutes</p>
              <div className="space-y-3">
                <Link href="/devis-electricien-gratuit" className="block">
                  <Button className="w-full bg-white text-[#f25000] hover:bg-gray-100 font-semibold">
                    Devis Gratuit
                  </Button>
                </Link>
                <Link href="tel:+33756935200" className="block">
                  <Button variant="outline" className="w-full bg-white/10 border-white text-white hover:bg-white/20">
                    Appeler Maintenant
                  </Button>
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-orange-100">Service disponible 24h/24 et 7j/7</p>
              </div>
            </div>

            {/* Zones d'Intervention */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zones d&apos;Intervention</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Nice Centre", "Vieux Nice", "Cimiez", "Carabacel",
                  "Libération", "Riquier", "Port", "Magnan",
                  "Saint-Augustin", "Cagnes", "St-Laurent", "Villefranche"
                ].map((zone, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#f25000] rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className="bg-gray-50 rounded-xl p-8 mb-10 mt-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <FaShieldAlt className="text-green-600 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Rénovation électrique et mise aux normes NFC 15-100 à Nice
            </h3>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              La sécurité électrique est notre priorité absolue. De nombreux logements niçois, particulièrement
              dans les quartiers historiques, nécessitent une mise aux normes de leur installation électrique.
              Nos électriciens certifiés sont spécialistes de la norme NFC 15-100.
            </p>

            <div className="my-8 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/renovation-electrique-nice.webp"
                alt="Rénovation électrique et mise aux normes à Nice"
                width={800}
                height={450}
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-500 p-3 bg-gray-100 text-center">Exemple de rénovation électrique aux normes NFC 15-100 dans un appartement niçois</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Diagnostic Complet</h4>
                <p className="text-sm text-gray-600">Inspection détaillée de votre installation pour identifier risques et non-conformités</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Solutions Adaptées</h4>
                <p className="text-sm text-gray-600">Proposition de travaux sur mesure selon votre logement et votre budget</p>
              </div>
            </div>

            <p>
              Nous proposons des solutions de rénovation électrique adaptées à votre logement et à votre budget, en veillant
              toujours à minimiser la gêne occasionnée pendant les travaux. De la simple mise en sécurité au
              remplacement complet de l&apos;installation, nous garantissons un travail soigné et durable, respectant
              strictement les normes en vigueur.
            </p>
          </div>
        </div>

        {/* Additional sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Installation Section */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaLightbulb className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Installation électrique neuve pour particuliers et professionnels
              </h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                Que vous fassiez construire une nouvelle villa sur les collines niçoises, aménagiez un local commercial
                dans le centre-ville ou réhabilitiez un appartement, nous vous accompagnons dans tous vos projets
                d&apos;installation électrique neuve.
              </p>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-2">Services inclus :</h4>
                <ul className="list-disc list-inside space-y-1 text-purple-700">
                  <li>Étude technique personnalisée</li>
                  <li>Conseils sur les matériaux et équipements</li>
                  <li>Planification détaillée du chantier</li>
                  <li>Intégration domotique et solutions innovantes</li>
                </ul>
              </div>

              <p>
                Nous concevons des installations électriques performantes, économes en énergie et
                adaptées à vos usages, en intégrant si vous le souhaitez les dernières innovations comme la domotique,
                les systèmes de gestion de l&apos;énergie ou les bornes de recharge pour véhicules électriques.
              </p>
            </div>
          </div>

          {/* Global Solutions Section */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-100 p-3 rounded-full">
                <FaCogs className="text-orange-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Solutions globales pour tous vos besoins électriques à Nice
              </h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                Au-delà des services traditionnels d&apos;électricité, nous proposons une gamme complète de solutions
                pour répondre à l&apos;ensemble de vos besoins.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  {
                    image: "/images/volets-roulants.webp",
                    text: "Volets roulants",
                    alt: "Installation de volets roulants électriques à Nice"
                  },
                  {
                    image: "/images/eclairage-exterieur.webp",
                    text: "Éclairage extérieur",
                    alt: "Éclairage extérieur et jardin pour maisons niçoises"
                  },
                  {
                    image: "/images/home-cinema.webp",
                    text: "Home cinéma",
                    alt: "Installation home cinéma et systèmes audio à Nice"
                  },
                  {
                    image: "/images/systemes-alarme.webp",
                    text: "Systèmes d&apos;alarme",
                    alt: "Installation de systèmes d&apos;alarme et sécurité à Nice"
                  },
                  {
                    image: "/images/borne-recharge.webp",
                    text: "Borne de recharge VE",
                    alt: "Installation de borne de recharge véhicule électrique à Nice"
                  },
                  {
                    image: "/images/domotique.webp",
                    text: "Domotique",
                    alt: "Solutions domotiques et maison connectée à Nice"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="w-full h-[100px] relative mb-3">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6">
                Notre expertise technique nous permet de vous accompagner dans tous vos projets, des plus simples
                aux plus complexes. Chaque intervention est l&apos;occasion pour nous de vous conseiller et de vous proposer
                des solutions innovantes pour améliorer votre confort et optimiser votre consommation d&apos;énergie.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <FaUserTie className="text-[#f25000] text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Une équipe d&apos;électriciens qualifiés au service des Niçois
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-700">
              <p>
                Notre force, c&apos;est avant tout notre équipe. Composée d&apos;électriciens qualifiés, expérimentés et
                régulièrement formés aux nouvelles technologies et normes, elle incarne notre engagement pour
                un service de qualité.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#f25000] rounded-full"></div>
                  <span className="font-medium">Certifications :</span>
                  <span className="text-gray-600">Qualifelec, Certibat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#f25000] rounded-full"></div>
                  <span className="font-medium">Assurance :</span>
                  <span className="text-gray-600">RC Pro 2M€</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#f25000] rounded-full"></div>
                  <span className="font-medium">Garantie :</span>
                  <span className="text-gray-600">2 ans sur les travaux</span>
                </div>
              </div>

              <p>
                Chaque technicien allie savoir-faire technique et sens du relationnel,
                pour vous garantir une intervention professionnelle dans le respect de votre domicile et de vos
                contraintes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#f25000]">{item * 5}+</div>
                    <div className="text-xs text-gray-500">ans d&apos;expérience</div>
                  </div>
                ))}
              </div>
              <p className="text-center mt-4 text-sm text-gray-500">
                Notre équipe cumule plus de 50 ans d&apos;expérience dans l&apos;électricité à Nice
              </p>
            </div>
          </div>
        </div>
        {/* Final CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#f25000] to-[#e34d02] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Vous avez un projet électrique à Nice ?</h3>
          <p className="mb-6 text-orange-100 max-w-2xl mx-auto">
            N&apos;hésitez pas à nous contacter pour une étude personnalisée de vos besoins. Notre équipe se tient
            à votre disposition pour vous conseiller et vous proposer un devis détaillé et gratuit, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis-electricien-gratuit">
              <Button className="bg-white text-[#f25000] hover:bg-gray-100 font-semibold px-8">
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichContentSection;