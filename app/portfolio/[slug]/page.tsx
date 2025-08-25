import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Phone, FileText, ArrowLeft, Home, Building, Calendar, DollarSign, AlertCircle, CheckCircle, Users } from 'lucide-react';

// Données des projets
const projects = [
    {
        id: 1,
        slug: "installation-electrique-complete-hauteurs-nice",
        title: "Installation électrique complète aux normes NFC 15-100 avec domotique intégrée",
        location: "Hauteurs de Nice",
        type: "Appartement",
        description: "Installation électrique neuve aux normes NFC 15-100 pour un appartement de 80m² avec intégration domotique pour un contrôle intelligent de l'éclairage et des appareils.",
        image: "/images/installation-nice-hauteurs.webp",
        service: "Installation électrique Nice",
        details: [
            "Tableau électrique moderne avec disjoncteurs différentiels",
            "Circuits spécialisés pour cuisine équipée",
            "Installation domotique pour gestion intelligente de l'éclairage",
            "Prises et interrupteurs design",
            "Éclairage LED économique",
            "Câblage structuré et organisé",
            "Protection contre les surtensions",
            "Communication interphonaire intégrée"
        ],
        duration: "5 jours",
        budget: "À partir de 4500€",
        challenges: "Intégration dans un bâtiment ancien avec contraintes architecturales et respect du patrimoine",
        fullDescription: `
    <p>Notre client, propriétaire d'un appartement de 80m² situé dans les hauteurs de Nice, nous a contactés pour une rénovation complète de son installation électrique. L'appartement, datant des années 1980, avait une installation vétuste qui ne répondait plus aux normes de sécurité actuelles et ne permettait pas l'utilisation confortable des appareils électroménagers modernes.</p>
    
    <p>Notre mission consistait à réaliser une installation neuve conforme à la norme NFC 15-100, avec une intégration domotique pour permettre au client de contrôler son éclairage et ses appareils électriques à distance. Nous avons commencé par une étude approfondie des besoins du client et une analyse technique des lieux.</p>
    
    <h3>Étapes du projet</h3>
    
    <p>Le projet comprenait plusieurs étapes clés :</p>
    
    <p><strong>1. Diagnostic initial :</strong> Nous avons réalisé un diagnostic complet de l'installation existante pour identifier les non-conformités et établir un plan d'intervention détaillé.</p>
    
    <p><strong>2. Démolition de l'ancienne installation :</strong> Nous avons soigneusement retiré l'ancien tableau électrique, les câbles et les prises obsolètes, en veillant à ne pas endommager la structure de l'appartement.</p>
    
    <p><strong>3. Installation des gaines et des conduits :</strong> Nous avons mis en place un nouveau réseau de gaines techniques pour acheminer les câbles électriques en toute sécurité, en respectant les règles de pose et en prévoyant des passages pour d'éventuels travaux futurs.</p>
    
    <p><strong>4. Mise en place du tableau électrique :</strong> Nous avons installé un tableau divisionnaire moderne équipé de disjoncteurs différentiels haute sensibilité (30 mA) pour protéger les personnes, et de disjoncteurs divisionnaires pour chaque circuit. Le tableau a été organisé de manière logique pour faciliter la maintenance future.</p>
    
    <p><strong>5. Création des circuits spécialisés :</strong> Nous avons prévu des circuits dédiés pour la cuisine (plaques de cuisson, four, lave-vaisselle), pour la salle de bain (chauffe-eau, sèche-serviettes), et pour les prises de courant dans chaque pièce.</p>
    
    <p><strong>6. Installation de l'éclairage :</strong> Tous les points d'éclairage ont été équipés de technologies LED économes en énergie. Nous avons également installé des variateurs d'intensité dans le salon et la chambre pour permettre au client d'ajuster l'ambiance lumineuse.</p>
    
    <p><strong>7. Intégration domotique :</strong> Le système domotique choisi permet de contrôler l'éclairage, le chauffage et les stores à distance via une application smartphone. Des scénarios prédéfinis (comme le mode "absence" ou "soirée cinéma") ont été programmés pour simplifier la vie du client.</p>
    
    <p><strong>8. Mise en service et tests :</strong> Après l'installation, nous avons procédé à une série de tests rigoureux pour vérifier la conformité de l'installation, la sensibilité des différentiels, et la fonctionnalité de la domotique.</p>
    
    <h3>Défis techniques et solutions</h3>
    
    <p>Les défis techniques de ce projet incluaient l'intégration dans un bâtiment ancien avec des contraintes architecturales (murs épais, présence de matériaux durs) et la nécessité de travailler sans perturber les voisins. Nous avons utilisé des techniques de perçage et de fixation spéciales pour minimiser les nuisances.</p>
    
    <p>La gestion des câbles dans les faux plafonds existants a nécessité une planification minutieuse pour éviter d'endommager les structures. Nous avons également dû adapter notre approche pour intégrer la domotique sans affecter l'esthétique de l'appartement.</p>
    
    <h3>Résultats et bénéfices pour le client</h3>
    
    <p>Le client était particulièrement satisfait de l'intégration discrète des équipements et de la facilité d'utilisation du système domotique. L'installation respecte désormais parfaitement la norme NFC 15-100 et offre une sécurité optimale pour les occupants.</p>
    
    <p>Les bénéfices concrets pour le client incluent :</p>
    
    <ul>
      <li>Une sécurité électrique renforcée avec une protection différentielle adaptée</li>
      <li>Des économies d'énergie grâce à l'éclairage LED et à la gestion intelligente</li>
      <li>Un confort d'utilisation amélioré avec la domotique</li>
      <li>Une valorisation de son patrimoine immobilier</li>
      <li>Une maintenance simplifiée grâce à l'organisation du tableau électrique</li>
    </ul>
    
    <p>Ce projet illustre parfaitement comment une rénovation électrique complète peut transformer le confort et la sécurité d'un logement, tout en intégrant les technologies modernes pour une expérience utilisateur optimale.</p>
  `,
        testimonial: {
            text: "Je suis extrêmement satisfait du travail réalisé par Electricien Nice Expert. Leur professionnalisme et leur expertise ont transformé mon appartement. L'installation domotique fonctionne parfaitement et me fait gagner un temps précieux au quotidien.",
            author: "M. Martin",
            role: "Propriétaire"
        },
        technologies: ["Domotique KNX", "Éclairage LED", "Disjoncteurs différentiels", "Gaines ICTA", "Prises renforcées"]
    },
    {
        id: 2,
        slug: "renovation-electrique-villa-bellet",
        title: "Rénovation complète d'installation électrique pour villa de prestige à Nice Bellet",
        location: "Nice Bellet",
        type: "Villa",
        description: "Rénovation complète de l'installation électrique d'une villa avec mise aux normes NFC 15-100 et modernisation du tableau électrique, incluant des circuits spécialisés pour piscine et spa.",
        image: "/images/renovation-villa-bellet.webp",
        service: "Rénovation électrique Nice",
        details: [
            "Mise aux normes NFC 15-100 complète",
            "Remplacement de l'ancien tableau électrique",
            "Installation de prises de terre performante",
            "Création de circuits spécialisés pour piscine et spa",
            "Éclairage extérieur avec détecteurs de mouvement",
            "Installation d'un parafoudre",
            "Circuit dédié pour climatisation",
            "Système de sécurité avec alarme technique"
        ],
        duration: "8 jours",
        budget: "À partir de 7500€",
        challenges: "Modernisation d'une installation datant des années 70 sans casser les murs et en préservant les finitions existantes",
        fullDescription: `
    <p>Cette prestigieuse villa située dans le quartier huppé de Bellet à Nice nécessitait une rénovation complète de son installation électrique. L'installation datait des années 1970 et présentait de nombreuses non-conformités par rapport à la norme NFC 15-100 en vigueur. Le propriétaire souhaitait moderniser son installation tout en préservant l'esthétique de sa villa.</p>
    
    <h3>Analyse initiale et diagnostic</h3>
    
    <p>Notre première intervention a consisté en un diagnostic complet de l'existant. Nous avons identifié plusieurs problèmes majeurs : absence de prise de terre efficace, tableau électrique obsolète, câblage en mauvais état, absence de circuits spécialisés pour les équipements spécifiques (piscine, spa, climatisation).</p>
    
    <p>Nous avons élaboré un plan de rénovation en plusieurs phases pour minimiser les perturbations pour les occupants tout en garantissant une mise en conformité totale.</p>
    
    <h3>Déroulement des travaux</h3>
    
    <p><strong>Phase 1 : Mise en sécurité temporaire</strong> - Avant toute intervention, nous avons installé une mise en sécurité temporaire pour permettre la continuité de l'alimentation électrique pendant les travaux.</p>
    
    <p><strong>Phase 2 : Installation de la nouvelle prise de terre</strong> - Nous avons foré et installé une prise de terre performante conforme aux exigences de la norme NFC 15-100, avec mesure de la résistivité du sol et installation de piquets de terre copperweld.</p>
    
    <p><strong>Phase 3 : Remplacement du tableau électrique</strong> - Installation d'un tableau divisionnaire moderne avec disjoncteurs différentiels haute sensibilité (30 mA) et parafoudre pour protéger l'installation contre les surtensions.</p>
    
    <p><strong>Phase 4 : Création des circuits spécialisés</strong> - Nous avons créé des circuits dédiés pour :
    <ul>
      <li>La piscine (filtration, éclairage, robot nettoyeur)</li>
      <li>Le spa et le jacuzzi</li>
      <li>La climatisation réversible</li>
      <li>La cuisine équipée (plaques induction, four, lave-vaisselle)</li>
      <li>Le home cinema et l'équipement audiovisuel</li>
    </ul></p>
    
    <p><strong>Phase 5 : Installation de l'éclairage extérieur</strong> - Mise en place d'un éclairage paysager avec détecteurs de mouvement, projecteurs LED encastrés et éclairage de piscine subaquatique.</p>
    
    <p><strong>Phase 6 : Mise en service et vérifications</strong> - Après l'installation, nous avons procédé à une série de tests rigoureux et remis au client une attestation de conformité Consuel.</p>
    
    <h3>Solutions techniques innovantes</h3>
    
    <p>Pour ce projet, nous avons mis en œuvre plusieurs solutions techniques avancées :</p>
    
    <p><strong>Gestion centralisée de l'énergie :</strong> Installation d'un système de mesure de la consommation énergétique pour permettre au client de suivre et optimiser sa consommation d'électricité.</p>
    
    <p><strong>Protection contre la foudre :</strong> Installation d'un parafoudre de type 2 pour protéger les équipements électroniques sensibles contre les surtensions d'origine atmosphérique.</p>
    
    <p><strong>Alarme technique :</strong> Mise en place d'un système d'alarme technique qui prévient le propriétaire en cas de coupure de courant, de déclenchement des différentiels ou de détection d'anomalie.</p>
    
    <h3>Défis et solutions</h3>
    
    <p>Le principal défi de ce projet était de moderniser l'installation sans endommager les finitions existantes de la villa. Nous avons utilisé des techniques de tirage de câbles sans perçage et des gaines techniques discrètes pour préserver l'esthétique des lieux.</p>
    
    <p>La gestion des différents corps de métier intervenant simultanément (électricien, pisciniste, climatiseur) a nécessité une coordination rigoureuse et une planification précise des interventions.</p>
    
    <h3>Résultats et bénéfices</h3>
    
    <p>À l'issue des travaux, la villa dispose désormais d'une installation électrique moderne, sûre et performante, parfaitement adaptée aux besoins de ses occupants. Les bénéfices pour le client incluent :</p>
    
    <ul>
      <li>Une sécurité électrique renforcée pour les personnes et les biens</li>
      <li>Une meilleure gestion de l'énergie avec des économies substantielles</li>
      <li>Un confort d'utilisation accru avec des circuits dédiés pour chaque usage</li>
      <li>Une valorisation significative du patrimoine immobilier</li>
      <li>Une maintenance simplifiée grâce à l'organisation du tableau électrique</li>
    </ul>
    
    <p>Ce projet démontre notre expertise dans la rénovation électrique de villas de prestige, avec une approche sur mesure qui allie performance technique et respect de l'esthétique des lieux.</p>
  `,
        testimonial: {
            text: "La rénovation de notre installation électrique était un projet complexe que l'équipe d'Electricien Nice Expert a mené avec professionnalisme et expertise. Le résultat est parfait : une installation moderne, sécurisée et parfaitement adaptée à nos besoins. Je recommande vivement leurs services.",
            author: "Mme Dubois",
            role: "Propriétaire"
        },
        technologies: ["Tableau électrique Hager", "Parafoudre", "Éclairage LED extérieur", "Gestion technique du bâtiment", "Alarme technique"]
    },
    {
        id: 3,
        slug: "mise-aux-normes-cuisine-feric",
        title: "Mise aux normes NFC 15-100 d'une cuisine avec installation de prises spécifiques et circuits dédiés",
        location: "St Pierre de Féric",
        type: "Cuisine",
        description: "Mise en conformité NFC 15-100 d'une cuisine avec installation de prises spécifiques et circuit dédié pour électroménagers, éclairage LED sous meubles et vérification de la prise de terre.",
        image: "/images/mise-aux-normes-cuisine.webp",
        service: "Mise aux normes électrique",
        details: [
            "Circuit dédié pour plaques de cuisson",
            "Prises renforcées pour électroménagers",
            "Disjoncteur différentiel haute sensibilité",
            "Éclairage LED sous meubles",
            "Vérification de la prise de terre",
            "Interrupteurs différentiels 30mA",
            "Prises de courant 16A et 20A",
            "Protection contre les surintensités"
        ],
        duration: "2 jours",
        budget: "À partir de 1200€",
        challenges: "Intervention dans une cuisine déjà équipée sans endommager les meubles et avec minimum de perturbation pour les occupants",
        fullDescription: `
    <p>Cette intervention concernait la mise aux normes NFC 15-100 d'une cuisine déjà équipée dans le quartier de St Pierre de Féric à Nice. La cuisine, bien qu'esthétiquement moderne, présentait plusieurs non-conformités électriques potentiellement dangereuses : absence de circuits dédiés pour les gros électroménagers, prises inadaptées, et absence de protection différentielle spécifique.</p>
    
    <h3>Diagnostic initial et enjeux de sécurité</h3>
    
    <p>Lors de notre diagnostic initial, nous avons identifié plusieurs problèmes de sécurité :</p>
    
    <ul>
      <li>Absence de circuit dédié pour les plaques de cuisson, entraînant des surcharges sur le circuit existant</li>
      <li>Prises de courant 16A standard utilisées pour des appareils nécessitant des prises renforcées 20A</li>
      <li>Éclairage insuffisant au niveau des plans de travail</li>
      <li>Absence de protection différentielle adaptée aux spécificités d'une cuisine</li>
      <li>Prise de terre non vérifiée depuis plusieurs années</li>
    </ul>
    
    <p>Ces non-conformités représentaient un risque réel pour la sécurité des occupants, avec possibilité de surchauffe des câbles, de déclenchements intempestifs, voire de risques d'électrisation.</p>
    
    <h3>Déroulement de l'intervention</h3>
    
    <p>Notre intervention s'est déroulée en plusieurs étapes minutieusement planifiées pour minimiser la gêne pour les occupants :</p>
    
    <p><strong>Étape 1 : Préparation et protection</strong> - Avant toute intervention, nous avons protégé les meubles et les sols avec des bâches spéciales pour éviter tout dommage pendant les travaux.</p>
    
    <p><strong>Étape 2 : Vérification de la prise de terre</strong> - Mesure de la résistance de terre et vérification de sa conformité. Dans ce cas, la prise de terre existante était satisfaisante et n'a pas nécessité de travaux complémentaires.</p>
    
    <p><strong>Étape 3 : Installation des circuits dédiés</strong> - Création de circuits spécialisés pour :
    <ul>
      <li>Les plaques de cuisson (circuit 32A avec prise adaptée)</li>
      <li>Le four et le micro-ondes (circuit 20A)</li>
      <li>Le lave-vaisselle et le lave-linge (circuits 16A avec prises spécifiques)</li>
      <li>Les petits électroménagers (circuit 16A avec plusieurs prises)</li>
    </ul></p>
    
    <p><strong>Étape 4 : Mise en place de l'éclairage fonctionnel</strong> - Installation de spots LED sous les meubles hauts pour éclairer les plans de travail, avec interrupteur spécifique et variateur d'intensité.</p>
    
    <p><strong>Étape 5 : Adaptation du tableau électrique</strong> - Ajout de disjoncteurs divisionnaires dédiés et remplacement de l'interrupteur différentiel existant par un modèle haute sensibilité (30mA) adapté aux spécificités d'une cuisine.</p>
    
    <p><strong>Étape 6 : Tests et vérifications finales</strong> - Contrôle de l'ensemble de l'installation, mesure des intensités, vérification de la sensibilité des différentiels, et remise des documents techniques au client.</p>
    
    <h3>Solutions techniques mises en œuvre</h3>
    
    <p>Pour ce projet, nous avons utilisé des solutions techniques spécifiques :</p>
    
    <p><strong>Câblage en 2,5mm² et 6mm² :</strong> Utilisation de sections de câbles adaptées aux intensités requises par chaque appareil, avec une marge de sécurité conforme aux préconisations de la norme NFC 15-100.</p>
    
    <p><strong>Prises renforcées 20A :</strong> Installation de prises spécifiques pour les appareils à forte consommation, avec indicateur lumineux de mise sous tension.</p>
    
    <p><strong>Éclairage LED à faible profil :</strong> Choix de bandeaux LED ultra-plats pour un éclairage discret et efficace des plans de travail, avec une température de lumière adaptée aux activités culinaires (4000K).</p>
    
    <p><strong>Gestion des gaines techniques :</strong> Intégration discrète des câbles dans les gaines existantes ou création de nouveaux passages invisibles pour préserver l'esthétique de la cuisine.</p>
    
    <h3>Défis et solutions</h3>
    
    <p>Le principal défi de cette intervention était de réaliser des travaux électriques complets dans une cuisine déjà équipée et meublée, sans endommager les éléments existants. Nous avons utilisé des techniques de perçage précis et des outils spécifiques pour travailler dans des espaces restreints.</p>
    
    <p>La coordination avec le planning des occupants a été essentielle pour minimiser les perturbations. Nous avons planifié les travaux sur deux jours consécutifs pour réduire la durée d'intervention au strict nécessaire.</p>
    
    <h3>Résultats et bénéfices</h3>
    
    <p>À l'issue des travaux, la cuisine dispose désormais d'une installation électrique parfaitement conforme à la norme NFC 15-100, avec :</p>
    
    <ul>
      <li>Une sécurité électrique renforcée pour les occupants</li>
      <li>Une meilleure répartition des circuits évitant les surcharges</li>
      <li>Un éclairage fonctionnel optimisé pour les activités culinaires</li>
      <li>Une facilité d'utilisation avec des circuits dédiés pour chaque appareil</li>
      <li>Une économie d'énergie grâce à l'éclairage LED</li>
    </ul>
    
    <p>Ce projet démontre notre expertise dans les mises aux normes électriques de cuisines, avec une approche pragmatique qui allie sécurité, fonctionnalité et respect de l'existant.</p>
  `,
        testimonial: {
            text: "Intervention rapide et professionnelle pour la mise aux normes de ma cuisine. L'équipe a fait preuve de minutie et a su travailler sans abîmer mes meubles. Je recommande vivement leurs services pour ce type de projet.",
            author: "M. Lambert",
            role: "Propriétaire"
        },
        technologies: ["Prises 20A renforcées", "Éclairage LED 4000K", "Disjoncteurs différentiels 30mA", "Gaines techniques", "Conducteurs 6mm²"]
    },
    {
        id: 4,
        slug: "installation-bornes-recharge-ve",
        title: "Installation de bornes de recharge pour véhicules électriques dans une copropriété à Cagnes-sur-Mer",
        location: "Cagnes-sur-Mer",
        type: "Parking copropriété",
        description: "Installation de 6 bornes de recharge pour véhicules électriques dans le parking d'une copropriété avec gestion intelligente de la puissance et système de facturation individuelle.",
        image: "/images/bornes-recharge-ve.webp",
        service: "Bornes de recharge VE",
        details: [
            "Étude technique préalable",
            "Installation de 6 bornes Wallbox 7kW",
            "Gestion intelligente de la puissance",
            "Système de facturation individuelle",
            "Conformité aux normes IRVE",
            "Communication avec le syndic",
            "Gestion des autorisations",
            "Mise en service et formation"
        ],
        duration: "4 jours",
        budget: "À partir de 8500€",
        challenges: "Coordination avec le syndic et gestion des autorisations, adaptation à l'infrastructure existante du parking",
        fullDescription: `
    <p>Ce projet concernait l'installation de bornes de recharge pour véhicules électriques dans le parking d'une copropriété de Cagnes-sur-Mer. Face à l'augmentation du nombre de véhicules électriques parmi les résidents, le syndicat de copropriété a décidé d'équiper le parking de bornes de recharge accessibles à tous les habitants.</p>
    
    <h3>Étude préalable et dimensionnement</h3>
    
    <p>Notre intervention a commencé par une étude technique approfondie pour déterminer la solution la plus adaptée aux besoins spécifiques de cette copropriété :</p>
    
    <ul>
      <li>Analyse de la puissance électrique disponible au tableau général</li>
      <li>Identification des emplacements optimaux pour les bornes</li>
      <li>Évaluation des contraintes techniques (longueur des câbles, sections requises)</li>
      <li>Étude de la répartition des coûts et des modalités de facturation</li>
      <li>Vérification de la conformité avec le règlement de copropriété</li>
    </ul>
    
    <p>Cette étude nous a permis de recommander l'installation de 6 bornes Wallbox 7kW avec un système de gestion dynamique de la puissance, permettant d'optimiser la charge sans saturer l'installation existante.</p>
    
    <h3>Déroulement du projet</h3>
    
    <p>Le projet s'est déroulé en plusieurs phases coordonnées avec le syndic de copropriété :</p>
    
    <p><strong>Phase 1 : Coordination administrative</strong> - obtention des autorisations nécessaires, information des résidents, adaptation du règlement de copropriété si nécessaire.</p>
    
    <p><strong>Phase 2 : Installation de l'infrastructure</strong> - création des chemins de câbles, installation des gaines techniques, mise en place des alimentations dédiées depuis le tableau principal.</p>
    
    <p><strong>Phase 3 : Pose des bornes de recharge</strong> - installation des 6 bornes Wallbox aux emplacements définis, avec respect des distances de sécurité et des normes d'accessibilité.</p>
    
    <p><strong>Phase 4 : Mise en place du système de gestion</strong> - installation du système de gestion intelligent permettant une répartition équitable de la puissance disponible entre les différentes bornes.</p>
    
    <p><strong>Phase 5 : Mise en service et tests</strong> - vérification du fonctionnement de chaque borne, tests de charge, formation des résidents à l'utilisation du système.</p>
    
    <p><strong>Phase 6 : Remise des documents</strong> - fourniture du schéma électrique, de la notice d'utilisation, et des documents de conformité IRVE.</p>
    
    <h3>Solutions techniques mises en œuvre</h3>
    
    <p>Pour ce projet, nous avons choisi des solutions techniques adaptées aux spécificités d'une copropriété :</p>
    
    <p><strong>Bornes Wallbox 7kW :</strong> Choix de bornes de recharge domestiques de 7kW, puissance optimale pour une recharge nocturne complète de la plupart des véhicules électriques.</p>
    
    <p><strong>Système de gestion dynamique :</strong> Installation d'un contrôleur central qui répartit intelligemment la puissance disponible entre les différentes bornes, évitant les surcharges du tableau électrique principal.</p>
    
    <p><strong>Comptage individuel :</strong> Mise en place d'un système de comptage individualisé pour chaque borne, permettant une facturation équitable en fonction de la consommation réelle de chaque utilisateur.</p>
    
    <p><strong>Connectivité :</strong> Bornes équipées de connectivité WiFi ou 4G permettant une surveillance à distance, des mises à jour logicielles, et un diagnostic à distance.</p>
    
    <h3>Défis techniques et solutions</h3>
    
    <p>Le principal défi de ce projet était l'adaptation à l'infrastructure existante du parking, qui n'avait pas été conçue initialement pour accueillir des bornes de recharge. Nous avons dû :</p>
    
    <ul>
      <li>Créer de nouveaux chemins de câbles sans perturber les places de parking existantes</li>
      <li>Adapter les sections de câbles aux longueurs nécessaires pour limiter les chutes de tension</li>
      <li>Intégrer le système de gestion dans le tableau électrique principal sans le saturer</li>
      <li>Respecter les normes de sécurité spécifiques aux parkings (antidéflagrance, résistance aux chocs)</li>
    </ul>
    
    <p>La coordination avec le syndic et les différents intervenants a été essentielle pour mener à bien ce projet complexe.</p>
    
    <h3>Bénéfices pour la copropriété</h3>
    
    <p>Cette installation apporte de nombreux bénéfices à la copropriété :</p>
    
    <ul>
      <li>Réponse à la demande croissante de recharge VE parmi les résidents</li>
      <li>Valorisation de l'immeuble avec une infrastructure moderne et durable</li>
      <li>Système de facturation équitable basé sur la consommation réelle</li>
      <li>Gestion optimisée de la puissance électrique disponible</li>
      <li>Conformité avec la loi relative à l'installation de bornes de recharge dans les copropriétés</li>
    </ul>
    
    <p>Ce projet démontre notre expertise dans l'installation de bornes de recharge pour véhicules électriques en milieu collectif, avec une approche globale qui intègre à la fois les aspects techniques, administratifs et financiers.</p>
  `,
        testimonial: {
            text: "L'installation des bornes de recharge dans notre copropriété s'est parfaitement déroulée. L'équipe a fait preuve de professionnalisme et a su coordonner l'ensemble du projet avec le syndic. Les résidents sont ravis de pouvoir recharger leurs véhicules électriques facilement.",
            author: "Président du syndic",
            role: "Copropriété Les Oliviers"
        },
        technologies: ["Bornes Wallbox 7kW", "Gestion dynamique de puissance", "Comptage individuel", "Conformité IRVE", "Connectivité 4G"]
    },
    {
        id: 5,
        slug: "eclairage-exterieur-villa",
        title: "Éclairage extérieur ambiance pour une villa avec jardin et piscine à Villefranche-sur-Mer",
        location: "Villefranche-sur-Mer",
        type: "Villa",
        description: "Création d'un éclairage extérieur ambiance pour une villa avec jardin et piscine, incluant projecteurs LED, éclairage subaquatique et système automatisé avec détecteurs.",
        image: "/images/eclairage-exterieur-villa.webp",
        service: "Éclairage extérieur",
        details: [
            "Projecteurs LED encastrés pour allées",
            "Éclairage subaquatique piscine",
            "Spots orientables pour végétation",
            "Système automatisé avec détecteurs",
            "Télécommande et application mobile",
            "Programmation horaire et scénarios",
            "Alimentation basse tension de sécurité",
            "Conformité aux normes extérieures"
        ],
        duration: "3 jours",
        budget: "À partir de 3200€",
        challenges: "Intégration discrète dans le paysage existant et respect de la végétation mature",
        fullDescription: `
    <p>Ce projet concernait la création d'un éclairage extérieur ambiance pour une villa prestigieuse de Villefranche-sur-Mer, avec un jardin paysager mature et une piscine. Le propriétaire souhaitait mettre en valeur l'architecture de sa villa et son jardin tout en créant des ambiances lumineuses variées selon les moments de la journée et les usages.</p>
    
    <h3>Étude préalable et conception</h3>
    
    <p>Notre intervention a débuté par une étude approfondie des lieux en collaboration avec le paysagiste :</p>
    
    <ul>
      <li>Analyse des points de vue et des perspectives à mettre en valeur</li>
      <li>Identification des zones fonctionnelles (allées, terrasses, accès)</li>
      <li>Repérage des arbres et massifs végétaux dignes d'intérêt</li>
      <li>Évaluation des contraintes techniques (alimentations existantes, passage des câbles)</li>
      <li>Définition des ambiances lumineuses souhaitées (accueil, détente, sécurité)</li>
    </ul>
    
    <p>Cette étude nous a permis de concevoir un plan d'éclairage sur mesure avec différents types d'éclairage : fonctionnel pour les circulations, d'ambiance pour les zones de détente, et mis en valeur pour les éléments architecturaux et paysagers remarquables.</p>
    
    <h3>Déroulement des travaux</h3>
    
    <p>Les travaux se sont déroulés en parfaite coordination avec le paysagiste pour une intégration harmonieuse :</p>
    
    <p><strong>Phase 1 : Installation des alimentations</strong> - mise en place des circuits électriques dédiés, avec transformateurs basse tension pour les éclairages de jardin, et disjoncteurs différentiels 30mA spécifiques pour les éclairages de piscine.</p>
    
    <p><strong>Phase 2 : Pose des projecteurs d'allées</strong> - installation de bornes et projecteurs encastrés le long des allées principales et secondaires, avec un éclairage doux et directionnel pour guider les pas sans éblouissement.</p>
    
    <p><strong>Phase 3 : Mise en place de l'éclairage paysager</strong> - installation de spots orientables pour mettre en valeur les arbres remarquables et les massifs floraux, avec des angles précis pour créer des jeux d'ombre et de lumière.</p>
    
    <p><strong>Phase 4 : Installation de l'éclairage de piscine</strong> - pose de projecteurs subaquatiques LED multicolores pour illuminer la piscine, avec des effets de transition chromatique et différentes intensités selon l'ambiance souhaitée.</p>
    
    <p><strong>Phase 5 : Intégration des détecteurs de mouvement</strong> - installation de détecteurs infrarouges pour les zones de circulation et d'accès, avec réglage de la sensibilité et de la durée d'éclairage.</p>
    
    <p><strong>Phase 6 : Programmation du système</strong> - configuration de l'automate de gestion avec différents scénarios (accueil, détente, sécurité) et programmation horaire automatique.</p>
    
    <h3>Solutions techniques mises en œuvre</h3>
    
    <p>Pour ce projet d'éclairage extérieur haut de gamme, nous avons sélectionné des équipements spécifiques :</p>
    
    <p><strong>Éclairage LED professionnel :</strong> Choix de modules LED haute performance avec un excellent rendu des couleurs (IRC > 80) et une longue durée de vie, adaptés aux conditions extérieures (indice de protection IP67 minimum).</p>
    
    <p><strong>Système basse tension 12V :</strong> Utilisation d'une alimentation basse tension de sécurité pour les éclairages de jardin, garantissant la sécurité des personnes et permettant une installation plus flexible.</p>
    
    <p><strong>Projecteurs subaquatiques :</strong> Installation de projecteurs étanches spécial piscine avec changement de couleur RVB et effets de fondu enchaîné pour créer des ambiances lumineuses variées.</p>
    
    <p><strong>Gestion centralisée :</strong> Mise en place d'un système de gestion programmable avec télécommande et application smartphone, permettant de contrôler l'ensemble de l'éclairage extérieur à distance.</p>
    
    <h3>Défis techniques et solutions</h3>
    
    <p>Les principaux défis de ce projet concernaient l'intégration discrète dans un jardin mature et la protection des installations contre les conditions extérieures :</p>
    
    <ul>
      <li>Installation des câbles sans endommager les racines des arbres existants</li>
      <li>Choix de matériaux résistants aux conditions maritimes (sel, humidité)</li>
      <li>Intégration discrète des projecteurs dans la végétation sans perturber l'esthétique du jardin</li>
      <li>Respect des normes électriques spécifiques aux environnements extérieurs et humides</li>
    </ul>
    
    <p>La collaboration étroite avec le paysagiste nous a permis de surmonter ces défis et de créer une installation parfaitement intégrée à son environnement.</p>
    
    <h3>Bénéfices pour le propriétaire</h3>
    
    <p>Cette installation d'éclairage extérieur apporte de nombreux avantages :</p>
    
    <ul>
      <li>Mise en valeur de l'architecture de la villa et des éléments paysagers remarquables</li>
      <li>Amélioration de la sécurité avec un éclairage adapté des zones de circulation</li>
      <li>Création d'ambiances variées pour différents usages (dîners en terrasse, soirées piscine)</li>
      <li>Économies d'énergie grâce à la technologie LED et à la gestion programmée</li>
      <li>Facilité d'utilisation avec le contrôle à distance et l'automatisation</li>
    </ul>
    
    <p>Ce projet démontre notre expertise dans la création d'éclairages extérieurs sur mesure, qui allient esthétique, fonctionnalité et innovation technique pour transformer l'expérience des espaces extérieurs.</p>
  `,
        testimonial: {
            text: "L'éclairage extérieur réalisé par Electricien Nice Expert a complètement transformé notre jardin et notre piscine. Les ambiances créées sont magnifiques et le système est très simple à utiliser. Un travail d'une grande qualité !",
            author: "M. et Mme Laurent",
            role: "Propriétaires"
        },
        technologies: ["LED professionnelle IP67", "Éclairage subaquatique RGB", "Automate programmable", "Alimentation 12V sécurité", "Détecteurs infrarouges"]
    },
    {
        id: 6,
        slug: "renovation-bureau-commercial",
        title: "Rénovation complète de l'installation électrique d'un espace commercial de 120m² à Nice Libération",
        location: "Nice Libération",
        type: "Bureau",
        description: "Rénovation complète de l'installation électrique d'un espace commercial de 120m² avec nouveau tableau divisionnaire, éclairage LED professionnel et système de sécurité incendie.",
        image: "/images/renovation-bureau-commercial.webp",
        service: "Électricité commerciale",
        details: [
            "Nouveau tableau électrique divisionnaire",
            "Éclairage LED professionnel",
            "Prises de courant et RJ45",
            "Circuit dédié serveurs",
            "Système de sécurité incendie",
            "Alimentation onduleur",
            "Gestion technique centralisée",
            "Câblage structuré"
        ],
        duration: "6 jours",
        budget: "À partir de 6800€",
        challenges: "Travail en horaires décalés pour ne pas perturber l'activité commerciale et respect des délais serrés",
        fullDescription: `
    <p>Ce projet concernait la rénovation complète de l'installation électrique d'un espace commercial de 120m² situé dans le quartier animé de Libération à Nice. Le local, qui abritait une activité de conseil, nécessitait une mise aux normes complète de son installation électrique vieillissante, qui ne répondait plus aux besoins modernes en termes de puissance, de connectivité et de sécurité.</p>
    
    <h3>Diagnostic initial et enjeux</h3>
    
    <p>Notre diagnostic initial a révélé plusieurs problèmes majeurs :</p>
    
    <ul>
      <li>Tableau électrique obsolète et saturé, ne permettant pas l'ajout de nouveaux circuits</li>
      <li>Éclairage insuffisant et inadapté au travail sur écran</li>
      <li>Manque de prises de courant et de prises RJ45 pour les postes de travail</li>
      <li>Absence de circuit dédié pour les serveurs et équipements informatiques</li>
      <li>Installation de sécurité incendie non conforme à la réglementation ERP</li>
      <li>Câblage désorganisé présentant des risques de surchauffe</li>
    </ul>
    
    <p>L'enjeu principal était de réaliser ces travaux sans interrompre l'activité commerciale, ce qui a nécessité une planification minutieuse en horaires décalés.</p>
    
    <h3>Déroulement des travaux</h3>
    
    <p>Le projet s'est déroulé en plusieurs phases planifiées en coordination étroite avec le client :</p>
    
    <p><strong>Phase 1 : Travaux préparatoires (soirée)</strong> - Installation d'une alimentation temporaire, démontage de l'ancienne installation, préparation des chemins de câbles.</p>
    
    <p><strong>Phase 2 : Installation de la nouvelle infrastructure (week-end)</strong> - Pose des gaines techniques, installation du nouveau tableau divisionnaire, tirage des câbles principaux.</p>
    
    <p><strong>Phase 3 : Mise en place des circuits finaux (nuit)</strong> - Installation des boîtes d'encastrement, pose des prises et interrupteurs, câblage des points d'éclairage.</p>
    
    <p><strong>Phase 4 : Installation de l'éclairage (nuit)</strong> - Pose des luminaires LED professionnels avec réglage de l'intensité et de la température de couleur pour un confort visuel optimal.</p>
    
    <p><strong>Phase 5 : Mise en service et tests (week-end)</strong> - Raccordement définitif, tests de fonctionnement, mesure des intensités, réglage des différentiels.</p>
    
    <p><strong>Phase 6 : Formation et remise des documents (journée)</strong> - Formation du personnel à l'utilisation du nouveau tableau, remise des schémas électriques et de l'attestation de conformité.</p>
    
    <h3>Solutions techniques mises en œuvre</h3>
    
    <p>Pour répondre aux besoins spécifiques de cet espace commercial, nous avons mis en place plusieurs solutions techniques avancées :</p>
    
    <p><strong>Tableau divisionnaire modulaire :</strong> Installation d'un tableau électrique modulaire avec emplacements réservés pour les extensions futures, organisation logique des circuits, et indicateurs visuels de fonctionnement.</p>
    
    <p><strong>Éclairage LED professionnel :</strong> Choix de luminaires LED à haut rendu de couleur (IRC > 90) avec réglage de la température de couleur (3000K-4000K-5000K) pour s'adapter aux différents besoins (accueil, travail, détente).</p>
    
    <p><strong>Câblage structuré :</strong> Mise en place d'une infrastructure de câblage structuré avec séparation des circuits puissance, données, et sécurité, permettant une maintenance simplifiée et des interventions futures facilitées.</p>
    
    <p><strong>Alimentation sécurisée :</strong> Installation d'un onduleur pour les serveurs et équipements sensibles, protégeant contre les micro-coupures et les variations de tension.</p>
    
    <p><strong>Système de sécurité :</strong> Mise en conformité de l'installation de sécurité incendie avec détecteurs autonomes, éclairage de sécurité, et balisage d'évacuation conforme à la réglementation ERP.</p>
    
    <h3>Défis techniques et solutions</h3>
    
    <p>Les principaux défis de ce projet concernaient la réalisation des travaux sans perturber l'activité commerciale :</p>
    
    <ul>
      <li>Planification en horaires décalés (soir, nuit, week-end) pour travailler en dehors des heures d'ouverture</li>
      <li>Mise en place d'une alimentation temporaire pour maintenir l'activité pendant les travaux</li>
      <li>Gestion des nuisances sonores et des poussières pour ne pas gêner les commerces adjacents</li>
      <li>Respect des délais serrés pour minimiser la durée du chantier</li>
    </ul>
    
    <p>La coordination avec le client et la planification minutieuse nous ont permis de surmonter ces défis et de livrer le projet dans les temps impartis.</p>
    
    <h3>Bénéfices pour l'entreprise cliente</h3>
    
    <p>Cette rénovation complète apporte de nombreux bénéfices à l'entreprise cliente :</p>
    
    <ul>
      <li>Une sécurité électrique renforcée pour les personnes et les équipements</li>
      <li>Un confort de travail amélioré avec un éclairage adapté aux activités sur écran</li>
      <li>Une flexibilité accrue avec suffisamment de prises et de connexions réseau</li>
      <li>Des économies d'énergie grâce à l'éclairage LED et à la gestion optimisée</li>
      <li>Une conformité totale avec la réglementation des établissements recevant du public</li>
      <li>Une valorisation du local commercial avec une installation moderne et professionnelle</li>
    </ul>
    
    <p>Ce projet démontre notre expertise dans la rénovation électrique d'espaces commerciaux, avec une approche qui intègre à la fois les aspects techniques, réglementaires et opérationnels pour minimiser l'impact sur l'activité des entreprises.</p>
  `,
        testimonial: {
            text: "La rénovation de notre espace commercial s'est parfaitement déroulée malgré les contraintes horaires. L'équipe a fait preuve de professionnalisme et a respecté les délais承诺. Notre installation électrique est maintenant parfaitement adaptée à nos besoins professionnels.",
            author: "Directeur d'agence",
            role: "Société de conseil"
        },
        technologies: ["Tableau divisionnaire", "Éclairage LED professionnel", "Onduleur", "Câblage structuré", "Sécurité incendie"]
    }
    // ... autres projets
];

interface PorfolioProps {
    params: Promise<{ slug: string }>;

}
export async function generateMetadata({ params }: PorfolioProps) {
    const { slug } = await params;

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return {
            title: "Projet non trouvé",
            description: "Le projet demandé n'existe pas."
        };
    }

    return {
        title: `${project.title} | Réalisation Electricien Nice`,
        description: project.description,
        keywords: `${project.service}, électricien nice, ${project.type.toLowerCase()}`,
        authors: [{ name: "Electricien Nice Expert" }],
        openGraph: {
            title: `${project.title} | Electricien Nice Expert`,
            description: project.description,
            url: `https://electriciennice-expert.fr/portfolio/${project.slug}`,
            siteName: 'Electricien Nice Expert',
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            locale: 'fr_FR',
            type: 'website',
        },
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: PorfolioProps) {

    const { slug } = await params;

    const project = projects.find(p => p.slug === slug);

    if (!project) {
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
                        "@type": "Service",
                        "name": project.title,
                        "description": project.description,
                        "provider": {
                            "@type": "Electrician",
                            "name": "Electricien Nice Expert",
                            "telephone": "+33756935200",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Nice",
                                "postalCode": "06000",
                                "addressRegion": "Alpes-Maritimes",
                                "addressCountry": "FR"
                            }
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": project.location
                        },
                        "serviceType": project.service
                    })
                }}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#1b1e3f] to-[#2a2f5d] text-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-8">
                        <Link href="/portfolio" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
                            <ArrowLeft size={16} className="mr-2" />
                            Retour au portfolio
                        </Link>
                        <div className="bg-[#f25000] w-[max-content] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            {project.service}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 max-w-3xl">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Image du projet */}
            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Project Details Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Détails du projet</h2>

                            {/* Description détaillée avec HTML intégré */}
                            <div
                                className="prose prose-lg max-w-none text-gray-700 mb-8"
                                dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                            />

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Travaux réalisés</h3>
                            <ul className="space-y-3 mb-8">
                                {project.details.map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                                        <span className="text-gray-600">{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies utilisées */}
                            {project.technologies && (
                                <>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies utilisées</h3>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}

                            {project.challenges && (
                                <>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Défis techniques</h3>
                                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                                        <div className="flex items-start">
                                            <AlertCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                                            <p className="text-blue-800">{project.challenges}</p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Témoignage client */}
                            {project.testimonial && (
                                <>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Témoignage client</h3>
                                    <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-[#f25000]">
                                        <p className="text-gray-600 italic mb-4">&quot;{project.testimonial.text}&quot;</p>
                                        <div className="flex items-center">
                                            <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                                                <Users className="text-gray-600" size={20} />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{project.testimonial.author}</p>
                                                <p className="text-sm text-gray-500">{project.testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="md:col-span-1">
                            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Informations projet</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="bg-gray-100 p-3 rounded-full mr-4">
                                            <Home className="text-[#f25000]" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Type de projet</p>
                                            <p className="font-semibold text-gray-900">{project.type}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="bg-gray-100 p-3 rounded-full mr-4">
                                            <Calendar className="text-[#f25000]" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Durée</p>
                                            <p className="font-semibold text-gray-900">{project.duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="bg-gray-100 p-3 rounded-full mr-4">
                                            <DollarSign className="text-[#f25000]" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Budget</p>
                                            <p className="font-semibold text-gray-900">{project.budget}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="bg-gray-100 p-3 rounded-full mr-4">
                                            <Building className="text-[#f25000]" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Localisation</p>
                                            <p className="font-semibold text-gray-900">{project.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link href="/devis-electricien-gratuit">
                                        <Button className="w-full bg-[#f25000] hover:bg-[#e34600] text-white mb-4">
                                            <FileText className="mr-2" size={20} />
                                            Demander un devis
                                        </Button>
                                    </Link>
                                    <Link href="tel:+33756935200">
                                        <Button variant="outline" className="w-full border-[#1b1e3f] text-[#1b1e3f] hover:bg-[#1b1e3f] hover:text-white">
                                            <Phone className="mr-2" size={20} />
                                            07 56 93 52 00
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Projects Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Autres réalisations</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects
                            .filter(p => p.id !== project.id)
                            .slice(0, 3)
                            .map((otherProject) => (
                                <div key={otherProject.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={otherProject.image}
                                            alt={otherProject.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-[#f25000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {otherProject.service}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{otherProject.title}</h3>

                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                                                <span className="text-sm text-gray-600">{otherProject.type}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4 line-clamp-2">{otherProject.description}</p>

                                        <Link href={`/portfolio/${otherProject.slug}`}>
                                            <Button variant="outline" className="w-full border-[#f25000] text-[#f25000] hover:bg-[#f25000] hover:text-white">
                                                Voir les détails
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#1b1e3f] text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Un projet similaire ?
                    </h2>
                    <p className="text-xl mb-8">
                        Contactez-nous pour discuter de votre projet électrique et obtenir un devis personnalisé.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/devis-electricien-gratuit">
                            <Button size="lg" className="bg-[#f25000] hover:bg-[#e34600] text-white font-semibold">
                                <FileText className="mr-2" size={20} />
                                Demander un devis
                            </Button>
                        </Link>
                        <Link href="tel:+33756935200">
                            <Button size="lg" className="bg-white text-[#1b1e3f] hover:bg-gray-100 font-semibold">
                                <Phone className="mr-2" size={20} />
                                07 56 93 52 00
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}