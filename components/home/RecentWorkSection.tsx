import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { FaMapMarkerAlt, FaHome, FaBuilding, FaTools } from 'react-icons/fa';

const RecentWorkSection = () => {
  const projects = [
    {
      title: "Installation électrique complète",
      location: "Hauteurs de Nice",
      type: "Appartement",
      description: "Installation électrique neuve aux normes NFC 15-100 pour un appartement de 80m² avec intégration domotique.",
      image: "/images/installation-nice-hauteurs.webp",
      service: "Installation électrique Nice",
      slug: "installation-electrique-complete-hauteurs-nice",

    },
    {
      title: "Rénovation électrique de villa",
      location: "Nice Bellet",
      type: "Villa",
      description: "Rénovation complète de l'installation électrique d'une villa avec mise aux normes et modernisation du tableau électrique.",
      image: "/images/renovation-villa-bellet.webp",
      service: "Rénovation électrique Nice",
      slug: "renovation-electrique-villa-bellet",

    },
    {
      title: "Mise aux normes cuisine",
      location: "St Pierre de Féric",
      type: "Cuisine",
      description: "Mise en conformité NFC 15-100 d'une cuisine avec installation de prises spécifiques et circuit dédié pour électroménagers.",
      image: "/images/mise-aux-normes-cuisine.webp",
      service: "Mise aux normes électrique",
      slug: "mise-aux-normes-cuisine-feric",

    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Derniers travaux d&apos;électricité sur <span className="text-[#f25000]">Nice</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations récentes pour des particuliers et professionnels de Nice et sa région.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#f25000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.service}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <FaMapMarkerAlt className="text-[#f25000]" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    {project.type === "Villa" && <FaHome className="text-[#f25000]" />}
                    {project.type === "Appartement" && <FaBuilding className="text-[#f25000]" />}
                    {project.type === "Cuisine" && <FaTools className="text-[#f25000]" />}
                    <span className="text-sm text-gray-600">{project.type}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <Link href={`/portfolio/${project.slug}`}>
                  <Button variant="outline" className="w-full border-[#f25000] text-[#f25000] hover:bg-[#f25000] hover:text-white">
                    Voir les détails du projet
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous avez un projet similaire à Nice ?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe d&apos;électriciens qualifiés intervient dans tout Nice et ses alentours
            pour vos projets d&apos;installation, rénovation ou mise aux normes électriques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis-electricien-gratuit">
              <Button variant={"read"} >
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant={"send"}>
                Voir toutes nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;