import { ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full grid grid-cols-1 md:grid-cols-2 h-full text-white bg-[#0a0a0f] overflow-hidden">
      {/* IMAGE avec overlay gradient */}
      <div className="relative h-[500px] md:h-full">
        <Image
          src="/images/electricien-a-nice.webp"
          alt="Électricien en intervention à Nice"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0f]/70 via-[#0a0a0f]/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative px-8 py-16 md:py-24 lg:px-20 flex flex-col justify-center gap-8 bg-gradient-to-br from-[#0a0a0f] via-[#141428] to-[#1b1e3f]">
        <div className="max-w-2xl mx-auto flex flex-col gap-6 text-center md:text-left">
          
          {/* Tagline */}
          <span className="px-4 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#f25000] to-[#ff7d33] text-white w-fit mx-auto md:mx-0 shadow-lg">
            ⚡ Artisan Électricien Certifié
          </span>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f25000] to-[#ffb347]">Électricien</span> de Confiance <br /> à Nice & Alentours
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            Dépannage <strong>rapide</strong>, installations <strong>aux normes</strong> et devis <strong>100% gratuits</strong>.  
            Nous intervenons en moins de <span className="font-semibold text-[#ff7d33]">30 minutes</span>, 24h/24 et 7j/7.
          </p>

          {/* LISTE AVANTAGES avec icônes plus modernes */}
          <ul className="grid gap-3 text-gray-200 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#f25000]/10 text-[#f25000] flex items-center justify-center">⚡</span>
              Intervention en <strong>moins de 30 minutes</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#f25000]/10 text-[#f25000] flex items-center justify-center">⏰</span>
              Disponible <strong>24h/24 & 7j/7</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#f25000]/10 text-[#f25000] flex items-center justify-center">📍</span>
              <strong>Artisan local</strong> basé à Nice
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#f25000]/10 text-[#f25000] flex items-center justify-center">💰</span>
              <strong>Prix transparents</strong> et sans surprise
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
            <Link href="/devis-electricien-gratuit" className="flex-1">
              <Button
                size="lg"
                className="w-full font-semibold text-lg bg-gradient-to-r from-[#f25000] to-[#ff7d33] hover:opacity-90 shadow-lg shadow-[#f25000]/40 rounded-2xl transition-all"
              >
                Demander un Devis Gratuit
                <ArrowRightIcon className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="tel:+33756935200" className="flex-1">
              <Button
                size="lg"
                className="w-full font-semibold text-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-2xl transition-all backdrop-blur-md"
              >
                <PhoneCallIcon className="mr-2" size={20} />
                Nous Appeler
              </Button>
            </Link>
          </div>

          {/* Avis clients moderne */}
          <div className="flex flex-col items-center md:items-start gap-2 mt-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-md">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#ffc107]" />
              ))}
              <span className="ml-1 font-semibold">4.95/5</span>
            </div>
            <span className="text-sm text-gray-400">Basé sur 320+ avis vérifiés Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
