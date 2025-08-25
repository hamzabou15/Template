import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/entreprise-electricien-nice.webp"
              alt="L'équipe d&apos;électriciens professionnels à Nice"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#f25000] text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">15+</p>
              <p className="text-sm">ans d&apos;expérience</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Électricien à Nice et ses alentours
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Basée à <strong>Nice (06)</strong>, notre entreprise d&apos;électricité intervient dans un
              <strong> rayon de 20 km</strong> autour de la ville afin d&apos;accompagner aussi bien les
              <strong> particuliers</strong> que les <strong>professionnels</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Forte de <strong>près de 15 ans d&apos;expérience</strong>, notre équipe maîtrise
              l&apos;<strong>électricité générale</strong> et l&apos;<strong>ascensorisme</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Nos services couvrent l&apos;<strong>installation de réseaux électriques</strong>,
              la <strong>mise en place de systèmes de contrôle d&apos;accès</strong>, ainsi que le
              <strong> dépannage électrique</strong> pour les villas, appartements, copropriétés
              et locaux commerciaux.
            </p>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-[#f25000]">
              <p className="text-gray-700">
                <strong>Garantie :</strong> Tous nos travaux sont garantis 2 ans. Assurance décennale et responsabilité civile professionnelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;