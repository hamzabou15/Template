// app/blog/[slug]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Mail, Eye, BookOpen } from 'lucide-react';

// Données des articles (contenu détaillé)
const blogPosts = [
    {
        slug: "normes-electrique-2024",
        title: "Nouvelles Normes Électriques 2024 à Nice : Ce Qui Change",
        excerpt: "Découvrez les nouvelles réglementations électriques qui impactent les propriétaires niçois en 2024. Mise à jour NFC 15-100 et obligations légales.",
        image: "/images/normes-2024-nice.webp",
        date: "2024-01-15",
        readTime: "5 min",
        category: "Normes & Réglementation",
        author: "Jean Dupont",
        authorImage: "/images/team/jean-dupont.webp",
        authorBio: "Électricien expert certifié à Nice avec plus de 15 ans d'expérience. Spécialiste des normes NFC 15-100 et de la rénovation électrique dans le bâti ancien niçois.",
        views: 1250,
        content: `
      <h2>Les évolutions réglementaires pour 2024</h2>
      <p>L'année 2024 apporte son lot de modifications réglementaires dans le domaine électrique, avec des implications directes pour les propriétaires et locataires niçois. La norme NFC 15-100, référence en matière d'installation électrique, a été mise à jour pour renforcer la sécurité et s'adapter aux nouvelles technologies.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <p class="text-blue-800 font-semibold">💡 À savoir : Les nouvelles normes électriques 2024 s'appliquent à tous les logements niçois, des appartements du Vieux-Nice aux villas modernes de Cimiez.</p>
      </div>
      
      <h3>Les principaux changements à Nice</h3>
      <p>À Nice, où le parc immobilier mixe architectures anciennes et constructions modernes, ces évolutions impactent différemment selon le type de logement :</p>
      
      <ul class="space-y-3 my-6">
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⚡</span><span><strong>Obligation de disjoncteur différentiel de type A</strong> pour tous les circuits spécialisés (lave-linge, lave-vaisselle, etc.)</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⚡</span><span><strong>Renforcement des exigences pour les salles d'eau</strong> avec des zones de sécurité étendues</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⚡</span><span><strong>Nouvelles règles pour les prises de recharge véhicule électrique</strong> dans les parkings d'immeubles</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⚡</span><span><strong>Obligation de mise en sécurité</strong> pour toute vente immobilière à Nice</span></li>
      </ul>
      
      <h3>Implications pour les propriétaires niçois</h3>
      <p>Les propriétaires d'appartements dans le Vieux-Nice ou de villas sur les collines doivent particulièrement attention à ces évolutions. La rénovation électrique devient souvent nécessaire pour respecter ces nouvelles normes, surtout dans les bâtiments datant d'avant les années 80.</p>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
        <h4 class="text-orange-800 font-semibold mb-2">Conseil d'expert</h4>
        <p class="text-orange-700">Pour les propriétaires niçois, nous recommandons une vérification préventive de votre installation électrique avant toute transaction immobilière. Cela peut vous éviter des mauvaises surprises et des travaux urgents.</p>
      </div>
      
      <h2>Focus sur les spécificités niçoises</h2>
      <p>Le climat méditerranéen de Nice impose des contraintes particulières sur les installations électriques. L'humidité marine, les fortes chaleurs estivales et l'ensoleillement important nécessitent des matériaux adaptés et une attention particulière à la ventilation des tableaux électriques.</p>
      
      <h3>Conseils pour se mettre en conformité</h3>
      <p>Pour les Niçois souhaitant mettre leur installation aux normes, nous recommandons une approche méthodique :</p>
      
      <ol class="list-decimal pl-6 my-6 space-y-3">
        <li class="pl-2"><strong>Diagnostic complet</strong> par un professionnel certifié pour identifier les priorités</li>
        <li class="pl-2"><strong>Planification des travaux</strong> en fonction des risques identifiés et du budget disponible</li>
        <li class="pl-2"><strong>Choix de matériaux adaptés</strong> au climat niçois (anti-UV, résistance à l'humidité)</li>
        <li class="pl-2"><strong>Mise à niveau progressive</strong> si le budget est limité, en commençant par les éléments de sécurité</li>
      </ol>
      
      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4">Les délais de mise en conformité à Nice</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 p-3 text-left">Type de transaction</th>
                <th class="border border-gray-300 p-3 text-left">Délai de conformité</th>
                <th class="border border-gray-300 p-3 text-left">Sanctions possibles</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Vente immobilière</td>
                <td class="border border-gray-300 p-3">Diagnostic de moins de 3 ans obligatoire</td>
                <td class="border border-gray-300 p-3">Nullité de la vente ou indemnisation</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3">Location</td>
                <td class="border border-gray-300 p-3">Conformité NFC 15-100 obligatoire</td>
                <td class="border border-gray-300 p-3">Réduction de loyer ou résiliation</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Construction neuve</td>
                <td class="border border-gray-300 p-3">Application immédiate des nouvelles normes</td>
                <td class="border border-gray-300 p-3">Refus de certificat de conformité</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h2>Conclusion : L'importance de la conformité électrique à Nice</h2>
      <p>Les nouvelles normes électriques 2024 représentent une avancée significative pour la sécurité des installations à Nice. Bien que leur mise en œuvre puisse représenter un investissement, celui-ci est largement compensé par l'amélioration de la sécurité, du confort et de la valeur de votre bien immobilier.</p>
      
      <p class="font-semibold">Notre équipe d'électriciens certifiés à Nice reste à votre disposition pour vous accompagner dans cette mise en conformité et vous conseiller sur les solutions les plus adaptées à votre situation spécifique.</p>
    `
    },
    {
        slug: "choisir-electricien-nice",
        title: "Comment Bien Choisir Son Électricien à Nice : Guide Complet",
        excerpt: "6 critères essentiels pour sélectionner un électricien compétent et fiable à Nice. Certifications, devis, garanties et avis clients.",
        image: "/images/choisir-electricien-nice.webp",
        date: "2024-01-10",
        readTime: "7 min",
        category: "Conseils",
        author: "Marie Laurent",
        authorImage: "/images/team/marie-laurent.webp",
        authorBio: "Électricienne diplômée et formatrice aux normes électriques. Experte des installations domestiques et des solutions économes en énergie sur la Côte d'Azur.",
        views: 980,
        content: `
      <h2>Pourquoi le choix de votre électricien à Nice est crucial</h2>
      <p>À Nice, où le marché de l'électricité est très concurrentiel, choisir le bon professionnel est essentiel pour garantir la sécurité et la qualité de votre installation. Un mauvais choix peut entraîner des surcoûts, des risques électriques, voire des problèmes lors de la revente de votre bien.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <p class="text-blue-800 font-semibold">💡 À savoir : À Nice, près de 30% des installations électriques présentent des anomalies selon le rapport de l'Observatoire national de la sécurité électrique.</p>
      </div>
      
      <h3>6 critères indispensables pour faire le bon choix</h3>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          Vérifiez les certifications et assurances
        </h4>
        <p>Un électricien niçois sérieux doit détenir la certification Qualifelec ou une attestation de conformité Consuel. Vérifiez également qu'il est assuré en responsabilité civile professionnelle.</p>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          Examinez l'expérience et les références
        </h4>
        <p>Privilégiez les électriciens ayant une expérience spécifique dans le type de travaux que vous envisagez. À Nice, l'expérience avec les vieux immeubts du centre-ville ou les villas modernes de Cimiez est un plus.</p>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
          Analysez les devis dans le détail
        </h4>
        <p>Un devis sérieux doit mentionner clairement :</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>Le détail des prestations et matériaux</li>
          <li>Les délais de réalisation</li>
          <li>Les garanties proposées</li>
          <li>Le prix TTC toutes taxes comprises</li>
        </ul>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
        <h4 class="text-orange-800 font-semibold mb-2">Notre conseil niçois</h4>
        <p class="text-orange-700">Demandez toujours au moins trois devis comparatifs à des électriciens niçois différents. Cela vous permettra non seulement de comparer les prix, mais aussi d'évaluer le professionnalisme de chaque intervenant.</p>
      </div>
      
      <h3>Les pièges à éviter à Nice</h3>
      <p>Méfiez-vous des artisans qui :</p>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
        <ul class="space-y-3">
          <li class="flex items-start"><span class="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">⚠️</span><span>Proposent des tarifs anormalement bas</span></li>
          <li class="flex items-start"><span class="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">⚠️</span><span>Demandent un acompte important avant le début des travaux</span></li>
          <li class="flex items-start"><span class="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">⚠️</span><span>N'ont pas de numéro SIRET ou d'adresse physique vérifiable</span></li>
          <li class="flex items-start"><span class="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">⚠️</span><span>Refusent de fournir un devis détaillé écrit</span></li>
        </ul>
      </div>
      
      <h2>Questions à poser à votre électricien niçois</h2>
      <p>Pour vous assurer de faire le bon choix, n'hésitez pas à poser ces questions :</p>
      
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <ol class="list-decimal pl-6 space-y-4">
          <li class="pl-2"><strong>Êtes-vous certifié Qualifelec ou disposez-vous d'une attestation Consuel ?</strong></li>
          <li class="pl-2"><strong>Pouvez-vous me fournir des références de travaux similaires à Nice ?</strong></li>
          <li class="pl-2"><strong>Quelle est votre expérience avec le type de bâtiment que j'habite (ancien, moderne, copropriété) ?</strong></li>
          <li class="pl-2"><strong>Proposez-vous une garantie sur les travaux et les matériaux ?</strong></li>
          <li class="pl-2"><strong>Comment gérez-vous les imprévus durant les travaux ?</strong></li>
        </ol>
      </div>
      
      <h2>Conclusion : Un investissement qui vaut la peine</h2>
      <p>Choisir le bon électricien à Nice est un investissement en temps qui vous évitera bien des soucis et des dépenses imprévues. En suivant ces conseils et en prenant le temps de comparer plusieurs professionnels, vous maximiserez vos chances de trouver un électricien compétent et fiable, capable de réaliser des travaux de qualité dans les délais et budget convenus.</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
        <h4 class="text-green-800 font-semibold mb-2">En résumé</h4>
        <p class="text-green-700">Un bon électricien niçois se distingue par sa transparence, son professionnalisme et sa connaissance des spécificités locales. N'hésitez pas à prendre le temps nécessaire pour faire le bon choix.</p>
      </div>
      
      <p class="font-semibold">Notre équipe d'électriciens certifiés à Nice reste à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets électriques.</p>
    `
    },
    {
        slug: "renovation-electrique-ancien-nice",
        title: "Rénovation Électrique dans l'Ancien à Nice : Défis et Solutions",
        excerpt: "Spécificités de la rénovation électrique dans les vieux appartements niçois. Cas pratiques du Vieux-Nice et des maisons Belle Époque.",
        image: "/images/renovation-ancien-nice.webp",
        date: "2023-12-05",
        readTime: "8 min",
        category: "Rénovation",
        author: "Pierre Martin",
        authorImage: "/images/team/pierre-martin.webp",
        authorBio: "Expert en rénovation électrique du bâti ancien à Nice. Spécialiste des installations dans le Vieux-Nice et les quartiers historiques.",
        views: 890,
        content: `
      <h2>Les particularités du bâti ancien niçois</h2>
      <p>Nice possède un patrimoine architectural exceptionnel, allant des immeubles haussmanniens du XIXe siècle aux villas Belle Époque et aux bâtiments du Vieux-Nice. Chaque type de construction présente ses propres défis en matière de rénovation électrique.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <p class="text-blue-800 font-semibold">🏛️ À savoir : Le Vieux-Nice compte plus de 200 immeubles classés ou inscrits aux monuments historiques, ce qui impose des contraintes spécifiques pour toute rénovation.</p>
      </div>
      
      <h3>Défis techniques rencontrés</h3>
      <p>La rénovation électrique dans l'ancien à Nice présente plusieurs défis spécifiques :</p>
      
      <ul class="space-y-3 my-6">
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⚡</span><span><strong>Murs en pierre épais</strong> difficiles à percer sans endommager la structure</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⚡</span><span><strong>Absence de gaines techniques</strong> dans les constructions anciennes</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⚡</span><span><strong>Humidité persistante</strong> due à la proximité de la mer et aux vieilles infrastructures</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⚡</span><span><strong>Contraintes architecturales</strong> pour préserver le caractère des lieux classés</span></li>
      </ul>
      
      <h3>Solutions adaptées au bâti niçois</h3>
      <p>Face à ces défis, nos équipes ont développé des solutions spécifiques :</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          Techniques de saignées préservatrices
        </h4>
        <p>Utilisation de techniques non invasives pour créer les saignées nécessaires sans compromettre l'intégrité des murs anciens. Nous privilégions les tracés existants et utilisons des outils spécifiques pour limiter les poussières et les vibrations.</p>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          Matériaux adaptés à l'humidité
        </h4>
        <p>Sélection de câbles et équipements spécifiquement conçus pour résister à l'humidité marine. Utilisation de gaines étanches et de boîtiers IP55 pour les zones exposées.</p>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
        <h4 class="text-orange-800 font-semibold mb-2">Cas pratique : Appartement dans le Vieux-Nice</h4>
        <p class="text-orange-700">Pour un appartement de 60m² dans le Vieux-Nice, nous avons réalisé une rénovation complète en utilisant des techniques de micro-saignées et en intégrant le tableau électrique dans une ancienne armoire murale pour préserver le caractère authentique des lieux.</p>
      </div>
      
      <h2>Étapes d'une rénovation réussie</h2>
      <p>Une rénovation électrique dans l'ancien à Nice suit un processus précis :</p>
      
      <ol class="list-decimal pl-6 my-6 space-y-3">
        <li class="pl-2"><strong>Diagnostic complet</strong> avec caméra thermique pour identifier les humidités et ponts thermiques</li>
        <li class="pl-2"><strong>Étude préalable</strong> en collaboration avec l'architecte des Bâtiments de France si nécessaire</li>
        <li class="pl-2"><strong>Choix des matériaux</strong> adaptés aux contraintes techniques et architecturales</li>
        <li class="pl-2"><strong>Réalisation des travaux</strong> avec des techniques préservant le bâti existant</li>
        <li class="pl-2"><strong>Contrôle et certification</strong> par un organisme indépendant</li>
      </ol>
      
      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4">Budget moyen pour une rénovation à Nice</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 p-3 text-left">Type de logement</th>
                <th class="border border-gray-300 p-3 text-left">Surface</th>
                <th class="border border-gray-300 p-3 text-left">Budget moyen</th>
                <th class="border border-gray-300 p-3 text-left">Délai</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Studio Vieux-Nice</td>
                <td class="border border-gray-300 p-3">30m²</td>
                <td class="border border-gray-300 p-3">4 000 - 6 000 €</td>
                <td class="border border-gray-300 p-3">3-5 jours</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3">Appartement haussmannien</td>
                <td class="border border-gray-300 p-3">80m²</td>
                <td class="border border-gray-300 p-3">8 000 - 12 000 €</td>
                <td class="border border-gray-300 p-3">7-10 jours</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Villa Belle Époque</td>
                <td class="border border-gray-300 p-3">150m²</td>
                <td class="border border-gray-300 p-3">15 000 - 25 000 €</td>
                <td class="border border-gray-300 p-3">2-3 semaines</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h2>Conclusion : Valoriser son patrimoine niçois</h2>
      <p>Une rénovation électrique bien menée dans un logement ancien à Nice permet non seulement de garantir la sécurité des occupants, mais aussi de valoriser significativement le bien immobilier. En respectant les contraintes architecturales et en utilisant des techniques adaptées, il est possible de concilier modernité et préservation du patrimoine.</p>
      
      <p class="font-semibold">Notre équipe spécialisée dans la rénovation du bâti ancien niçois vous accompagne dans tous vos projets, en respectant les spécificités architecturales de notre belle ville.</p>
    `
    },
    {
        slug: "economie-energie-electrique-nice",
        title: "10 Solutions pour Faire des Économies d'Énergie à Nice",
        excerpt: "Astuces concrètes pour réduire votre facture d'électricité à Nice. Éclairage LED, domotique, et équipements économes adaptés au climat niçois.",
        image: "/images/economie-energie-nice.webp",
        date: "2023-11-20",
        readTime: "6 min",
        category: "Économies d'énergie",
        author: "Sophie Bernard",
        authorImage: "/images/team/sophie-bernard.webp",
        authorBio: "Experte en efficacité énergétique et solutions durables. Spécialiste des adaptations climatiques pour la région niçoise.",
        views: 1120,
        content: `
      <h2>Le contexte énergétique à Nice</h2>
      <p>Avec plus de 300 jours d'ensoleillement par an, Nice offre des opportunités uniques pour réaliser des économies d'énergie. Cependant, les étés chauds et la climatisation représentent souvent une part importante de la consommation électrique des Niçois.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <p class="text-blue-800 font-semibold">☀️ À savoir : À Nice, la climatisation peut représenter jusqu'à 50% de la facture électrique estivale des ménages selon l'ADEME.</p>
      </div>
      
      <h3>10 solutions concrètes pour économiser</h3>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          Optimisation de l'éclairage
        </h4>
        <p>Remplacer toutes les ampoules par des LED permet de réduire la consommation d'éclairage de 80%. À Nice, privilégiez les LED à spectre chaud pour un éclairage agréable qui s'accorde avec la lumière naturelle abondante.</p>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          Gestion intelligente de la climatisation
        </h4>
        <p>Installation de thermostats programmables et de systèmes de climatisation réversibles haute performance. Programmez la climatisation pour maintenir 25-26°C, la température idéale sous le climat niçois.</p>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
          Protection solaire passive
        </h4>
        <p>Utilisation de stores extérieurs, volets et films solaires pour réduire l'apport thermique. À Nice, une protection solaire efficace peut réduire de 30% les besoins en climatisation.</p>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
        <h4 class="text-orange-800 font-semibold mb-2">Solution niçoise : Le free-cooling nocturne</h4>
        <p class="text-orange-700">À Nice, où les nuits sont souvent fraîches même en été, profitez du free-cooling : ouvrez les fenêtres la nuit pour refroidir naturellement votre logement, et fermez tout le jour pour conserver la fraîcheur.</p>
      </div>
      
      <h3>Les aides financières disponibles à Nice</h3>
      <p>Plusieurs dispositifs peuvent vous aider à financer vos travaux d'économies d'énergie :</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
        <ul class="space-y-3">
          <li class="flex items-start"><span class="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">💰</span><span><strong>MaPrimeRénov'</strong> : Aide de l'État pour les travaux de rénovation énergétique</span></li>
          <li class="flex items-start"><span class="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">💰</span><span><strong>Éco-prêt à taux zéro</strong> : Prêt sans intérêt pour financer vos travaux</span></li>
          <li class="flex items-start"><span class="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">💰</span><span><strong>Aides de la Métropole Nice Côte d'Azur</strong> : Subventions locales complémentaires</span></li>
          <li class="flex items-start"><span class="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">💰</span><span><strong>Certificats d'Économies d'Énergie (CEE)</strong> : Prime versée par les fournisseurs d'énergie</span></li>
        </ul>
      </div>
      
      <h2>Impact des économies d'énergie à Nice</h2>
      <p>Les économies réalisables sont significatives, surtout sous notre climat :</p>
      
      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4">Potentiel d'économies annuelles pour un foyer niçois</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 p-3 text-left">Solution</th>
                <th class="border border-gray-300 p-3 text-left">Investissement</th>
                <th class="border border-gray-300 p-3 text-left">Économie annuelle</th>
                <th class="border border-gray-300 p-3 text-left">Retour sur investissement</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">LED complète</td>
                <td class="border border-gray-300 p-3">200-400 €</td>
                <td class="border border-gray-300 p-3">100-150 €</td>
                <td class="border border-gray-300 p-3">2-3 ans</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3">Clim réversible</td>
                <td class="border border-gray-300 p-3">3 000-5 000 €</td>
                <td class="border border-gray-300 p-3">300-500 €</td>
                <td class="border border-gray-300 p-3">6-8 ans</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Protection solaire</td>
                <td class="border border-gray-300 p-3">1 500-3 000 €</td>
                <td class="border border-gray-300 p-3">200-350 €</td>
                <td class="border border-gray-300 p-3">5-7 ans</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h2>Conclusion : Un investissement rentable</h2>
      <p>Les solutions d'économies d'énergie sont particulièrement efficaces à Nice grâce à notre ensoleillement exceptionnel. En combinant plusieurs approches, il est possible de réduire sa facture électrique de 30 à 50% tout en améliorant son confort.</p>
      
      <p class="font-semibold">Notre équipe d'experts en efficacité énergétique vous accompagne dans le choix des solutions les plus adaptées à votre logement niçois et dans le montage des dossiers de financement.</p>
    `
    },
    {
        slug: "installation-charge-voiture-electrique-nice",
        title: "Installation Borne de Recharge Voiture Électrique à Nice",
        excerpt: "Guide complet pour installer une borne de recharge à Nice. Aides financières, démarches et spécificités des copropriétés niçoises.",
        image: "/images/borne-recharge-nice.webp",
        date: "2023-11-05",
        readTime: "9 min",
        category: "Mobilité électrique",
        author: "Thomas Leroy",
        authorImage: "/images/team/thomas-leroy.webp",
        authorBio: "Expert en infrastructures de recharge pour véhicules électriques. Certifié IRVE pour les installations à Nice et sa région.",
        views: 760,
        content: `
      <h2>L'essor du véhicule électrique à Nice</h2>
      <p>Nice se positionne comme une ville pionnière dans la mobilité électrique, avec un objectif ambitieux de déploiement de bornes de recharge. La Métropole Nice Côte d'Azur encourage activement cette transition grâce à diverses subventions et infrastructures.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <p class="text-blue-800 font-semibold">🚗 À savoir : Nice ambitionne d'installer 5 000 points de recharge d'ici 2025, avec un maillage dense dans tous les quartiers de la ville.</p>
      </div>
      
      <h3>Types de bornes de recharge disponibles</h3>
      <p>Plusieurs solutions s'offrent aux propriétaires niçois selon leur situation :</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          Borne de recharge domestique
        </h4>
        <p>Installation dans un garage privé ou parking individuel. Puissance de 3,7 kW à 22 kW. Solution idéale pour les maisons individuelles et appartements avec place de parking attitrée.</p>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          Borne collective en copropriété
        </h4>
        <p>Installation dans les parkings d'immeubles avec gestion intelligente de la puissance. Nécessite l'accord de la copropriété et une étude préalable des capacités électriques.</p>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
        <h4 class="text-orange-800 font-semibold mb-2">Spécificité niçoise : Les parkings souterrains</h4>
        <p class="text-orange-700">À Nice, de nombreux parkings sont en souterrain ou en sous-sol, ce qui impose des contraintes spécifiques pour l'installation des bornes (ventilation, sécurité incendie, accessibilité).</p>
      </div>
      
      <h3>Démarches administratives à Nice</h3>
      <p>L'installation d'une borne de recharge suit un processus réglementé :</p>
      
      <ol class="list-decimal pl-6 my-6 space-y-3">
        <li class="pl-2"><strong>Étude de faisabilité</strong> : Vérification de la capacité électrique disponible</li>
        <li class="pl-2"><strong>Accord de copropriété</strong> si nécessaire (vote en assemblée générale)</li>
        <li class="pl-2"><strong>Déclaration préalable de travaux</strong> pour les immeubles concernés</li>
        <li class="pl-2"><strong>Demande de financement</strong> auprès des différents dispositifs d'aide</li>
        <li class="pl-2"><strong>Installation par un professionnel certifié IRVE</strong></li>
        <li class="pl-2"><strong>Contrôle et certification</strong> de l'installation</li>
      </ol>
      
      <h3>Aides financières disponibles</h3>
      <p>Plusieurs dispositifs facilitent l'installation à Nice :</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
        <ul class="space-y-3">
          <li class="flex items-start"><span class="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">💰</span><span><strong>Advenir</strong> : Jusqu'à 50% du coût HT pour les particuliers (plafond 1 060 €)</span></li>
          <li class="flex items-start"><span class="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">💰</span><span><strong>Prime à la conversion</strong> : Cumulable avec Advenir pour certains véhicules</span></li>
          <li class="flex items-start"><span class="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">💰</span><span><strong>Aides de la Métropole Nice Côte d'Azur</strong> : Complément local spécifique</span></li>
          <li class="flex items-start"><span class="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">💰</span><span><strong>Crédit d'impôt</strong> : Pour certains types d'installation</span></li>
        </ul>
      </div>
      
      <h2>Coûts et rentabilité</h2>
      <p>L'investissement dans une borne de recharge varie selon plusieurs paramètres :</p>
      
      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4">Budget moyen pour une installation à Nice</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 p-3 text-left">Type d'installation</th>
                <th class="border border-gray-300 p-3 text-left">Puissance</th>
                <th class="border border-gray-300 p-3 text-left">Coût moyen</th>
                <th class="border border-gray-300 p-3 text-left">Aides déduites</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Borne domestique simple</td>
                <td class="border border-gray-300 p-3">3,7 kW</td>
                <td class="border border-gray-300 p-3">800 - 1 200 €</td>
                <td class="border border-gray-300 p-3">400 - 600 €</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3">Borne connectée</td>
                <td class="border border-gray-300 p-3">7,4 kW</td>
                <td class="border border-gray-300 p-3">1 200 - 1 800 €</td>
                <td class="border border-gray-300 p-3">600 - 900 €</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Installation collective</td>
                <td class="border border-gray-300 p-3">11-22 kW</td>
                <td class="border border-gray-300 p-3">2 500 - 4 000 €/point</td>
                <td class="border border-gray-300 p-3">1 250 - 2 000 €/point</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h2>Conclusion : Se préparer à la mobilité de demain</h2>
      <p>L'installation d'une borne de recharge à domicile est un investissement d'avenir qui améliore significativement le confort d'utilisation d'un véhicule électrique. À Nice, où la politique municipale encourage activement cette transition, les aides disponibles rendent cet investissement particulièrement attractif.</p>
      
      <p class="font-semibold">Notre équipe certifiée IRVE vous accompagne dans toutes les étapes de votre projet, de l'étude de faisabilité à l'installation et à la demande de subventions.</p>
    `
    },
    {
        slug: "securite-electrique-maison-nice",
        title: "Sécurité Électrique : Protéger Votre Maison à Nice des Risques",
        excerpt: "Les risques électriques spécifiques à Nice et comment les prévenir. Dispositifs de protection, entretien et diagnostic obligatoire.",
        image: "/images/securite-electrique-nice.webp",
        date: "2023-10-15",
        readTime: "5 min",
        category: "Sécurité",
        author: "Élodie Petit",
        authorImage: "/images/team/elodie-petit.webp",
        authorBio: "Spécialiste en sécurité électrique et prévention des risques. Formatrice aux normes de sécurité pour les particuliers et professionnels.",
        views: 950,
        content: `
      <h2>Les risques électriques spécifiques à Nice</h2>
      <p>Le climat méditerranéen de Nice, avec son humidité marine et ses orages violents occasionnels, crée des conditions particulières qui peuvent accélérer la dégradation des installations électriques et augmenter certains risques.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <p class="text-blue-800 font-semibold">⚡ À savoir : Selon l'Observatoire national de la sécurité électrique, 30% des logements niçois présentent au moins une anomaly électrique potentiellement dangereuse.</p>
      </div>
      
      <h3>Risques spécifiques à la région niçoise</h3>
      <p>Plusieurs facteurs locaux augmentent les risques électriques :</p>
      
      <ul class="space-y-3 my-6">
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">🌊</span><span><strong>Humidité marine</strong> qui corrode les connexions et réduit l'isolation</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">⛈️</span><span><strong>Orages violents</strong> avec risque de surtensions importantes</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">🔥</span><span><strong>Vieillissement accéléré</strong> des installations due à la chaleur estivale</span></li>
        <li class="flex items-start"><span class="bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">🏘️</span><span><strong>Bâti ancien</strong> avec des installations parfois vétustes</span></li>
      </ul>
      
      <h3>Dispositifs de protection indispensables</h3>
      <p>Plusieurs équipements sont essentiels pour garantir la sécurité à Nice :</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          Disjoncteur différentiel haute sensibilité
        </h4>
        <p>Obligatoire pour protéger les personnes contre les électrisations. À Nice, privilégiez les différentiels de type A ou H pour une protection optimale contre tous les types de défauts.</p>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          Parafoudre et protection contre les surtensions
        </h4>
        <p>Particulièrement important à Nice où les orages peuvent être violents. Protège les appareils électroniques contre les surtensions dues à la foudre.</p>
      </div>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
        <h4 class="text-orange-800 font-semibold mb-2">Solution niçoise : Les détecteurs autonomes</h4>
        <p class="text-orange-700">À Nice, où de nombreux logements sont en copropriété, les détecteurs autonomes de fumée (DAF) et de monoxyde de carbone (DAC) sont indispensables et obligatoires. Vérifiez régulièrement leur fonctionnement.</p>
      </div>
      
      <h3>Diagnostic électrique obligatoire</h3>
      <p>Le diagnostic électrique est obligatoire pour :</p>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
        <ul class="space-y-3">
          <li class="flex items-start"><span class="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">📋</span><span><strong>Vente immobilière</strong> : Diagnostic de moins de 3 ans obligatoire</span></li>
          <li class="flex items-start"><span class="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">📋</span><span><strong>Location</strong> : Installation必须 être conforme à la norme NFC 15-100</span></li>
          <li class="flex items-start"><span class="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">📋</span><span><strong>Logements de plus de 15 ans</strong> : Contrôle recommandé tous les 10 ans</span></li>
        </ul>
      </div>
      
      <h2>Entretien préventif à Nice</h2>
      <p>Un entretien régulier est essentiel sous le climat niçois :</p>
      
      <ol class="list-decimal pl-6 my-6 space-y-3">
        <li class="pl-2"><strong>Vérification visuelle trimestrielle</strong> des prises, interrupteurs et appareils</li>
        <li class="pl-2"><strong>Test semestriel des différentiels</strong> en appuyant sur le bouton test</li>
        <li class="pl-2"><strong>Nettoyage annuel</strong> des tableaux électriques et des ventilations</li>
        <li class="pl-2"><strong>Contrôle professionnel tous les 10 ans</strong> pour les installations anciennes</li>
      </ol>
      
      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <h4 class="text-xl font-semibold text-gray-900 mb-4">Calendrier d'entretien recommandé à Nice</h4>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 p-3 text-left">Fréquence</th>
                <th class="border border-gray-300 p-3 text-left">Action</th>
                <th class="border border-gray-300 p-3 text-left">Importance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Trimestrielle</td>
                <td class="border border-gray-300 p-3">Vérification visuelle</td>
                <td class="border border-gray-300 p-3">✅ Essentielle</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3">Semestrielle</td>
                <td class="border border-gray-300 p-3">Test des différentiels</td>
                <td class="border border-gray-300 p-3">✅ Essentielle</td>
              </tr>
              <tr class="bg-white">
                <td class="border border-gray-300 p-3">Annuelle</td>
                <td class="border border-gray-300 p-3">Nettoyage tableau</td>
                <td class="border border-gray-300 p-3">⚠️ Recommandée</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 p-3">Tous les 10 ans</td>
                <td class="border border-gray-300 p-3">Contrôle complet</td>
                <td class="border border-gray-300 p-3">⚠️ Obligatoire si vente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h2>Conclusion : La sécurité avant tout</h2>
      <p>À Nice, où les conditions climatiques particulières peuvent accélérer la dégradation des installations électriques, une vigilance accrue est nécessaire. Les dispositifs de protection modernes et un entretien régulier sont les meilleures garanties contre les risques électriques.</p>
      
      <p class="font-semibold">Notre équipe de spécialistes en sécurité électrique vous propose des diagnostics complets et des solutions sur mesure adaptées aux spécificités du climat niçois.</p>
    `
    }
];

// Articles similaires
const relatedPosts = [
    {
        slug: "renovation-electrique-ancien-nice",
        title: "Rénovation Électrique dans l'Ancien à Nice : Défis et Solutions",
        excerpt: "Spécificités de la rénovation électrique dans les vieux appartements niçois.",
        image: "/images/renovation-ancien-nice.webp",
        date: "2023-12-05",
        readTime: "8 min",
        category: "Rénovation"
    },
    {
        slug: "securite-electrique-maison-nice",
        title: "Sécurité Électrique : Protéger Votre Maison à Nice des Risques",
        excerpt: "Les risques électriques spécifiques à Nice et comment les prévenir.",
        image: "/images/securite-electrique-nice.webp",
        date: "2023-10-15",
        readTime: "5 min",
        category: "Sécurité"
    },
    {
        slug: "economie-energie-electrique-nice",
        title: "10 Solutions pour Faire des Économies d'Énergie à Nice",
        excerpt: "Astuces concrètes pour réduire votre facture d'électricité à Nice.",
        image: "/images/economie-energie-nice.webp",
        date: "2023-11-20",
        readTime: "6 min",
        category: "Économies d'énergie"
    }
];

interface BlogProps {
    params: Promise<{ slug: string }>;

}

export async function generateMetadata({ params }: BlogProps) {

    const { slug } = await params;

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return {
            title: "Article non trouvé - Electricien Nice Expert",
        };
    }

    return {
        title: `${post.title} | Electricien Nice Expert`,
        description: post.excerpt,
        keywords: `${post.title}, électricien Nice, ${post.category}`,
        authors: [{ name: "Electricien Nice Expert" }],
        metadataBase: new URL('https://electriciennice-expert.fr'),
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://electriciennice-expert.fr/blog/${post.slug}`,
            siteName: 'Electricien Nice Expert',
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            locale: 'fr_FR',
            type: 'article',
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: BlogProps) {

    const { slug } = await params;

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt,
                        "image": post.image,
                        "datePublished": post.date,
                        "dateModified": post.date,
                        "author": {
                            "@type": "Person",
                            "name": post.author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Electricien Nice Expert",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://electriciennice-expert.fr/logo.png"
                            }
                        }
                    })
                }}
            />

            {/* Navigation */}
            <section className="bg-gray-50 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <Link href="/blog">
                        <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                            <ArrowLeft size={16} className="mr-2" />
                            Retour au blog
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Article Header */}
            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="mb-6">
                        <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                            {post.category}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6">
                            <div className="flex items-center mr-6">
                                <Calendar size={16} className="mr-1" />
                                <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center mr-6">
                                <Clock size={16} className="mr-1" />
                                <span>{post.readTime} de lecture</span>
                            </div>
                            <div className="flex items-center mr-6">
                                <Eye size={16} className="mr-1" />
                                <span>{post.views} vues</span>
                            </div>
                            <div className="flex items-center">
                                <User size={16} className="mr-1" />
                                <span>Par {post.author}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                    {/* Share Buttons */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Partager cet article</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="outline" className="flex items-center">
                                <Facebook size={18} className="mr-2" />
                                Facebook
                            </Button>
                            <Button variant="outline" className="flex items-center">
                                <Twitter size={18} className="mr-2" />
                                Twitter
                            </Button>
                            <Button variant="outline" className="flex items-center">
                                <Linkedin size={18} className="mr-2" />
                                LinkedIn
                            </Button>
                            <Button variant="outline" className="flex items-center">
                                <Mail size={18} className="mr-2" />
                                Email
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author Bio */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex items-start">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-6 flex-shrink-0">
                            <Image
                                src={post.authorImage}
                                alt={post.author}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author}</h3>
                            <p className="text-gray-600">{post.authorBio}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 bg-orange-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d&apos;un électricien à Nice ?</h2>
                    <p className="text-gray-700 mb-6">
                        Notre équipe d&apos;électriciens certifiés est à votre disposition pour tous vos projets électriques à Nice et sur la Côte d&apos;Azur.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={"/devis-electricien-gratuit"}>
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                                Demander un devis
                            </Button>
                        </Link>

                        <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                            Nous contacter
                        </Button>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Continuez votre lecture
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedPosts.map((relatedPost, index) => (
                            <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-48">
                                    <Image
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {relatedPost.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">
                                        {new Date(relatedPost.date).toLocaleDateString('fr-FR')} • {relatedPost.readTime}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-orange-500 transition-colors">
                                        <Link href={`/blog/${relatedPost.slug}`}>
                                            {relatedPost.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                                    <Link href={`/blog/${relatedPost.slug}`}>
                                        <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm">
                                            Lire la suite
                                        </Button>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                        <BookOpen size={20} className="mr-2" />
                        <span>Restez informé</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Ne manquez aucun conseil d&apos;expert</h2>
                    <p className="text-xl mb-8">
                        Inscrivez-vous à notre newsletter pour recevoir nos conseils d&apos;experts et les dernières actualités électriques à Nice
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Mail size={20} className="mr-2" />
                            S&apos;inscrire
                        </Button>
                    </form>
                    <p className="text-sm text-white/70 mt-4">
                        Nous respectons votre vie privée. Désabonnez-vous à tout moment.
                    </p>
                </div>
            </section>
        </>
    );
}