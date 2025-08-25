// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electriciennice-expert.fr'
  
  // Date de dernière modification - aujourd'hui
  const lastModified = new Date()

  return [
    // Page d'accueil - priorité maximale
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    
    // Pages principales
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/devis`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    
    // Articles de blog
    {
      url: `${baseUrl}/blog/normes-electrique-2024`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/choisir-electricien-nice`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/renovation-electrique-ancien-nice`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/securite-electrique-maison-nice`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/economies-energie-nice`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/installation-borne-recharge-voiture-electrique-nice`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    
    // Services détaillés
    {
      url: `${baseUrl}/services/depannage-electrique-domestique-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/depannage-urgence-electrique-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/domotique-automatisme-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/installation-climatisation-ventilation-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/installation-eclairage-luminaires-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/installation-electrique-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/installation-prise-tableau-electrique-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/installation-volets-portails-electriques-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/mise-aux-normes-electrique-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/renovation-electrique-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Portfolio et réalisations
    {
      url: `${baseUrl}/portfolio/installation-electrique-complete-hauteurs-nice`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/renovation-electrique-villa-bellet`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/mise-aux-normes-cuisine-feric`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/installation-bornes-recharge-ve`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/eclairage-exterieur-villa`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/portfolio/renovation-bureau-commercial`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    
    // Zones d'intervention
    {
      url: `${baseUrl}/zones/nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/zones/nice/electricien-nice-centre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/zones/nice/electricien-vieux-nice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/zones/nice/electricien-cimiez`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/zones/villes-alentour/cagnes-sur-mer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/zones/villes-alentour/saint-laurent-du-var`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/zones/villes-alentour/antibes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    
    // Page de devis (URL alternative)
    {
      url: `${baseUrl}/devis-electricien-gratuit`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}