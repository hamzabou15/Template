import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';

const ServiceAreas = () => {
  const niceDistricts = [
    "Nice Centre", "Vieux Nice", "Cimiez", "Carabacel", "Gambetta",
    "Libération", "Riquier", "Port", "Magnan", "Fabron", "Saint-Augustin"
  ];

  const surroundingCities = [
    "Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer",
    "Beaulieu-sur-Mer", "Saint-Jean-Cap-Ferrat", "La Trinité",
    "Èze", "Cap-d&apos;Ail", "Falicon", "Aspremont", "Tourrette-Levens"
  ];

  return (
    <section className="w-full py-16 .bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zones d&apos;Intervention</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre équipe d&apos;électriciens intervient dans tous les quartiers de Nice et les villes
            alentours pour vos dépannages, installations et rénovations électriques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quartiers de Nice</h3>
            <div className="grid grid-cols-2 gap-4">
              {niceDistricts.map((district, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" size={16} />
                  <span className="text-gray-700">{district}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Villes autour de Nice</h3>
            <div className="grid grid-cols-2 gap-4">
              {surroundingCities.map((city, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckIcon className="text-green-500" size={16} />
                  <span className="text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous ne voyez pas votre ville ? Contactez-nous pour vérifier notre zone d&apos;intervention.
          </p>
          <Link href="/zones">
            <Button variant="outline" className="border-[#f25000] text-[#f25000] hover:bg-[#f25000] hover:text-white">
              Voir toutes nos zones d&apos;intervention
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas