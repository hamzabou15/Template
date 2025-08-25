const HistorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#191c25]">
          15 ans d&apos;Expertise à Nice
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#191c25]">Notre Parcours</h3>
            <p className="text-gray-700 mb-4">
              Depuis plus de deux décennies, Electricien Nice Expert s&apos;est imposé comme 
              un acteur majeur du paysage électrique niçois. Notre entreprise a été fondée 
              par Jean Dupont, artisan électricien passionné qui a transmis son savoir-faire 
              à toute notre équipe.
            </p>
            <p className="text-gray-700 mb-4">
              Au fil des années, nous avons su nous adapter aux évolutions technologiques 
              et réglementaires, tout en conservant les valeurs fondamentales qui font 
              notre force : l&apos;expertise technique, la qualité de service et la proximité 
              avec nos clients.
            </p>
            <p className="text-gray-700 mb-4">
              De la simple réparation à la rénovation complète d&apos;installations électriques, 
              en passant par les installations domotiques les plus modernes, nous avons 
              développé un savoir-faire complet qui nous permet de répondre à tous vos besoins.
            </p>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-[#191c25]">Chiffres Clés</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                <p className="text-gray-700">Ans d&apos;expérience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">3500+</div>
                <p className="text-gray-700">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <p className="text-gray-700">Service d&apos;urgence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">10</div>
                <p className="text-gray-700">Ans de garantie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;