// import Link from 'next/link';
import React from 'react'
// import { Button } from '../ui/button';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "Marie D.",
      location: "Nice Centre",
      rating: 5,
      content: "Intervention rapide et professionnelle pour une panne électrique un dimanche soir. L'électricien était là en moins de 30 minutes et a résolu le problème efficacement. Je recommande vivement !"
    },
    {
      name: "Pierre L.",
      location: "Cimiez",
      rating: 5,
      content: "J'ai fait appel à eux pour une rénovation complète de mon appartement. Devis détaillé, travail soigné et respect des délais. Très satisfait du résultat."
    },
    {
      name: "Sophie M.",
      location: "Saint-Laurent-du-Var",
      rating: 5,
      content: "Urgence électrique traitée avec professionnalisme. Prix transparents et intervention rapide. Je ne vais plus ailleurs pour mes problèmes électriques."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre priorité est votre satisfaction. Découvrez les témoignages de nos clients
            qui nous font confiance pour leurs travaux d&apos;électricité à Nice et ses alentours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">&quot;{review.content}&quot;</p>
              <div>
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <Link href="/avis-clients">
            <Button variant="outline" className="border-[#f25000] text-[#f25000] hover:bg-[#f25000] hover:text-white">
              Lire tous nos avis clients
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials