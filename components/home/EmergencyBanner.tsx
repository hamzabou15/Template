import { PhoneCallIcon } from 'lucide-react';
import React from 'react'

const EmergencyBanner = () => {
  return (
    <div className="w-full bg-red-600 text-white py-3 px-4 flex justify-center items-center text-sm font-medium">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <PhoneCallIcon className="text-lg" />
        <span>🚨 Urgence Électricité à Nice : </span>
        <a href="tel:+33756935200" className="font-bold underline ml-1">07 56 93 52 00</a>
        <span> - Intervention 24h/24 et 7j/7 - Diagnostic Gratuit</span>
      </div>
    </div>
  );
};


export default EmergencyBanner
