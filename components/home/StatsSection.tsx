import React from 'react';
import { FaCalendarAlt, FaTools, FaSmile, FaClock } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    { value: "15", label: "Ans d'expérience", icon: <FaCalendarAlt className="text-2xl" /> },
    { value: "2500+", label: "Interventions réalisées", icon: <FaTools className="text-2xl" /> },
    { value: "98%", label: "Clients satisfaits", icon: <FaSmile className="text-2xl" /> },
    { value: "24/7", label: "Disponibilité", icon: <FaClock className="text-2xl" /> },
  ];

  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chiffres clés à <span className="text-orange-500">Nice</span>
          </h2>
          <p className="text-xl text-gray-300">
            Notre engagement depuis plus de 15 ans au service des Niçois
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-orange-500 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-[#f25000] mb-2">{stat.value}</div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;