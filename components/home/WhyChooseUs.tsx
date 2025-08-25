import { CheckIcon } from 'lucide-react';
import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Électriciens Qualifiés",
      description: "Notre équipe est composée d'artisans expérimentés et certifiés, garants d'un travail de qualité et conforme aux normes en vigueur."
    },
    {
      title: "Intervention Rapide",
      description: "Basés à Nice, nous intervenons en moins de 30 minutes en urgence sur toute la Côte d'Azur. Service disponible 24h/24 et 7j/7."
    },
    {
      title: "Prix Transparents",
      description: "Devis détaillé et gratuit avant tout travail. Pas de surprise à la fin de l'intervention. Tarifs compétitifs pour tous vos travaux d'électricité."
    },
    {
      title: "Disponible 7j/7",
      description: "Nous sommes disponibles tous les jours de l'année, week-ends et jours fériés inclus, pour répondre à vos urgences électriques."
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir notre entreprise ?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Votre satisfaction est notre priorité absolue. Nous mettons tout en œuvre pour vous offrir
            le meilleur service d&apos;électricité à Nice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full mt-1 flex-shrink-0">
                <CheckIcon className="text-[#f25000]" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;