import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';
import { ArrowRightIcon, PhoneCallIcon } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="w-full py-16 bg-[#f25000] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d&apos;un électricien à Nice ?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Intervention rapide en moins de 30 minutes sur Nice et ses alentours.
          Devis gratuit et sans engagement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/devis-electricien-gratuit">
            <Button size="xlg" className="bg-white text-[#f25000] hover:bg-gray-100 font-semibold text-lg py-3 px-6">
              Demander un devis gratuit
              <ArrowRightIcon className="ml-2" size={20} />
            </Button>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#e34d02] rounded-full flex items-center justify-center">
              <PhoneCallIcon className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <p className="text-blue-200 text-sm">Appel gratuit 24/7</p>
              <Link href="tel:+33756935200" className="text-white font-bold text-xl">07 56 93 52 00</Link>
            </div>
          </div>
        </div>

        <p className="text-blue-200 mt-6 text-sm">
          Service disponible 7j/7 de 8h à 20h, et en urgence 24h/24
        </p>
      </div>
    </section>
  );
};

export default CTASection