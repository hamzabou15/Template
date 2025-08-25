// blog/index.js
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Blog Électricité Nice | Conseils Experts & Actualités",
  description: "Découvrez tous nos conseils électricité à Nice. Actualités, normes NFC 15-100, rénovation électrique et guide pour choisir un électricien à Nice.",
  keywords: "blog électricité Nice, conseils électricien Nice, actualités électricité, normes électriques, rénovation électrique Nice",
  authors: [{ name: "Electricien Nice Expert" }],
  metadataBase: new URL('https://electriciennice-expert.fr'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Blog Électricité Nice | Conseils Experts & Actualités",
    description: "Conseils et actualités électricité par des experts niçois. Normes, rénovation et guide pour choisir un électricien à Nice.",
    url: 'https://electriciennice-expert.fr/blog',
    siteName: 'Electricien Nice Expert',
    images: [
      {
        url: '/images/og-blog-nice.webp',
        width: 1200,
        height: 630,
        alt: 'Blog électricité Nice - Conseils experts',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

// Données des articles de blog (6 articles comme demandé)
const blogPosts = [
  {
    slug: "normes-electrique-2024",
    title: "Nouvelles Normes Électriques 2024 à Nice : Ce Qui Change",
    excerpt: "Découvrez les nouvelles réglementations électriques qui impactent les propriétaires niçois en 2024. Mise à jour NFC 15-100 et obligations légales.",
    image: "/images/normes-2024-nice.webp",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Normes & Réglementation"
  },
  {
    slug: "choisir-electricien-nice",
    title: "Comment Bien Choisir Son Électricien à Nice : Guide Complet",
    excerpt: "6 critères essentiels pour sélectionner un électricien compétent et fiable à Nice. Certifications, devis, garanties et avis clients.",
    image: "/images/choisir-electricien-nice.webp",
    date: "2024-01-10",
    readTime: "7 min",
    category: "Conseils"
  },
  {
    slug: "renovation-electrique-ancien-nice",
    title: "Rénovation Électrique dans l'Ancien à Nice : Défis et Solutions",
    excerpt: "Spécificités de la rénovation électrique dans les vieux appartements niçois. Cas pratiques du Vieux-Nice et des maisons Belle Époque.",
    image: "/images/renovation-ancien-nice.webp",
    date: "2023-12-05",
    readTime: "8 min",
    category: "Rénovation"
  },
  {
    slug: "economie-energie-electrique-nice",
    title: "10 Solutions pour Faire des Économies d'Énergie à Nice",
    excerpt: "Astuces concrètes pour réduire votre facture d'électricité à Nice. Éclairage LED, domotique, et équipements économes adaptés au climat niçois.",
    image: "/images/economie-energie-nice.webp",
    date: "2023-11-20",
    readTime: "6 min",
    category: "Économies d'énergie"
  },
  {
    slug: "installation-charge-voiture-electrique-nice",
    title: "Installation Borne de Recharge Voiture Électrique à Nice",
    excerpt: "Guide complet pour installer une borne de recharge à Nice. Aides financières, démarches et spécificités des copropriétés niçoises.",
    image: "/images/borne-recharge-nice.webp",
    date: "2023-11-05",
    readTime: "9 min",
    category: "Mobilité électrique"
  },
  {
    slug: "securite-electrique-maison-nice",
    title: "Sécurité Électrique : Protéger Votre Maison à Nice des Risques",
    excerpt: "Les risques électriques spécifiques à Nice et comment les prévenir. Dispositifs de protection, entretien et diagnostic obligatoire.",
    image: "/images/securite-electrique-nice.webp",
    date: "2023-10-15",
    readTime: "5 min",
    category: "Sécurité"
  }
];

export default function BlogIndex() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Electricien Nice Expert",
            "description": "Conseils et actualités électricité par des experts niçois",
            "url": "https://electriciennice-expert.fr/blog",
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1b1e3f] to-[#2a2f5d] text-white py-16">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog Électricité <span className="text-[#f25000]">Nice</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Conseils, actualités et guides pratiques par des électriciens experts niçois
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Derniers Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#f25000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[#f25000] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="border-[#f25000] text-[#f25000] hover:bg-[#f25000] hover:text-white">
                      Lire la suite
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Restez informé des dernières actualités électriques à Nice
            </h3>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos conseils d&apos;experts et les nouvelles réglementations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f25000]"
              />
              <Button className="bg-[#f25000] hover:bg-[#e34600] text-white">
                S&apos;inscrire
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Catégories du Blog
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Normes & Réglementation", count: 12, icon: "📋" },
              { name: "Rénovation", count: 8, icon: "🏗️" },
              { name: "Conseils", count: 15, icon: "💡" },
              { name: "Sécurité", count: 10, icon: "🔒" },
              { name: "Économies d'énergie", count: 7, icon: "💰" },
              { name: "Domotique", count: 6, icon: "🏠" },
              { name: "Actualités", count: 9, icon: "📰" },
              { name: "Questions/Réponses", count: 20, icon: "❓" }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}