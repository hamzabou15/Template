// import { Link } from 'lucide-react';
import React from 'react'
// import { Button } from '../ui/button';

const FAQSection = () => {
  const faqs = [
    {
      question: "Quel est le délai d'intervention pour une urgence électrique à Nice ?",
      answer: "Nous intervenons en moins de 30 minutes sur Nice et ses environs pour les urgences électriques. Notre service est disponible 24h/24 et 7j/7, y compris les week-ends et jours fériés."
    },
    {
      question: "Proposez-vous des devis gratuits pour les travaux d'électricité ?",
      answer: "Oui, nous établissons gratuitement et sans engagement des devis détaillés pour tous vos projets électriques. Le devis comprend la main d&apos;œuvre, les matériaux et les frais de déplacement."
    },
    {
      question: "Êtes-vous spécialisé dans la mise aux normes NFC 15-100 ?",
      answer: "Absolument. Nos électriciens sont formés et expérimentés dans la mise aux normes NFC 15-100. Nous pouvons diagnostiquer votre installation et réaliser les travaux nécessaires pour la rendre conforme et sécurisée."
    },
    {
      question: "Intervenez-vous dans tous les quartiers de Nice ?",
      answer: "Oui, notre équipe d'électriciens intervient dans tous les quartiers de Nice ainsi que dans les villes alentours. N'hésitez pas à nous contacter pour vérifier notre zone d'intervention précise."
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
          <p className="text-lg text-gray-600">
            Retrouvez les réponses aux questions les plus fréquentes concernant nos services d&apos;électricien à Nice.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous avez une question spécifique ? N&apos;hésitez pas à nous contacter.
          </p>
          <button  variant="send" className="inline-flex">
            <Link href="/contact">Nous contacter</Link>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection