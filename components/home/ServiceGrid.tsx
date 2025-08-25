import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRightIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';
import { PiToolboxFill } from 'react-icons/pi';

const ServiceGrid = () => {
  const services = [
    {
      title: "Dépannage Électrique Urgent",
      description: "Intervention rapide 24h/24 pour toutes pannes : coupure, disjoncteur, prise défectueuse.",
      href: "/services/depannage-urgence-electrique-nice",
      icon: <ClockIcon className="text-[#f25000]" size={24} />
    },
    {
      title: "Rénovation Électrique",
      description: "Mise aux normes NFC 15-100 de votre installation pour garantir votre sécurité.",
      href: "/services/renovation-electrique-nice",
      icon: <ShieldCheckIcon className="text-[#f25000]" size={24} />
    },
    {
      title: "Installation Électrique",
      description: "Installation neuve ou complète pour appartement, maison, local commercial.",
      href: "/services/installation-electrique-nice",
      icon: <PiToolboxFill className="text-[#f25000]" size={24} />
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services d&apos;Électricien à Nice</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artisan électricien à Nice depuis plus de 15 ans, nous proposons une gamme complète de services
            électriques pour particuliers et professionnels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href={service.href} className="inline-flex items-center text-[#f25000] font-semibold hover:text-[#e34600] transition-colors">
                En savoir plus <ArrowRightIcon className="ml-2" size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vous ne trouvez pas votre service ?</h3>
          <p className="text-gray-600 mb-6">
            Domotique, pose de volet roulant, installation de borne de recharge, tableau électrique...
          </p>
          <Link href="/contact">
            <Button className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
              Demander un conseil personnalisé
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;