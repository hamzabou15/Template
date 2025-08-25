import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import SchemaLocalBusiness from "@/components/SEO/SchemaLocalBusiness";

// Configuration de la police Roboto optimisée
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

// Viewport configuration (NEW) - Move themeColor here
export const viewport: Viewport = {
  themeColor: "#f25000",
};

// Métadonnées de base pour tout le site
export const metadata: Metadata = {
  title: {
    default: "Électricien Nice 🔌 Urgence 24/7 - Dépannage & Installation | Electricien Nice Expert",
    template: "%s | Electricien Nice Expert"
  },
  description: "Électricien certifié à Nice pour dépannages urgents 24h/24, installations électriques, rénovations et mises aux normes. Intervention rapide sur Nice et les Alpes-Maritimes. ☎ 07.56.93.52.00",
  keywords: ["électricien Nice", "dépannage électrique Nice", "urgence électricité Nice", "installation électrique Nice", "artisan électricien Nice", "réparation électrique Nice", "mise aux normes électrique Nice", "électricien 24/7 Nice", "devis électricité gratuit Nice"],

  authors: [{ name: "Electricien Nice Expert" }],
  creator: "Electricien Nice Expert",
  publisher: "Electricien Nice Expert",
  metadataBase: new URL("https://electriciennice-expert.fr"),
  alternates: {
    canonical: "/",
  },

  // Open Graph pour les réseaux sociaux
  openGraph: {
    title: "Électricien Nice 🔌 Urgence 24/7 - Devis Gratuit",
    description: "Électricien expert à Nice. Intervention rapide 24h/24 pour tous vos problèmes électriques. Dépannage, installation et rénovation.",
    url: "https://electriciennice-expert.fr",
    siteName: "Electricien Nice Expert",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-electricien-nice.jpg",
        width: 1200,
        height: 630,
        alt: "Électricien Nice Expert - Intervention rapide 24h/24",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Électricien Nice 🔌 Urgence 24/7 - Devis Gratuit",
    description: "Électricien expert à Nice. Intervention rapide 24h/24 pour tous vos problèmes électriques.",
    images: ["/images/og-electricien-nice.jpg"],
    creator: "@ElectricienNice",
  },

  // Icons et apparence
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#f25000",
      },
    ],
  },

  // Apparence sur mobile et thème
  // REMOVED: themeColor from here (moved to viewport)
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Electricien Nice Expert",
  },

  // Verification pour les outils de webmaster
  verification: {
    google: "votre-code-verification-google",
    yandex: "votre-code-verification-yandex",
    yahoo: "votre-code-verification-yahoo",
  },

  // Autres métadonnées importantes
  category: "construction",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${roboto.className} ${roboto.variable}`}>
      <head>
        {/* Balises meta pour la géolocalisation */}
        <meta name="geo.region" content="FR-PAC" />
        <meta name="geo.placename" content="Nice, Alpes-Maritimes" />
        <meta name="geo.position" content="43.7031;7.2661" />
        <meta name="ICBM" content="43.7031, 7.2661" />

        {/* Balises pour l'entreprise locale */}
        <meta name="business:contact_data:street_address" content="12 Rue Masséna" />
        <meta name="business:contact_data:locality" content="Nice" />
        <meta name="business:contact_data:postal_code" content="06000" />
        <meta name="business:contact_data:country_name" content="France" />
        <meta name="business:contact_data:email" content="contact@electriciennice-expert.fr" />
        <meta name="business:contact_data:phone_number" content="+33756935200" />

        {/* Balise de temps de rafraîchissement pour les crawlers */}
        <meta name="revisit-after" content="7 days" />

        {/* Schema.org LocalBusiness */}
        <SchemaLocalBusiness />
      </head>
      <body className="antialiased">
        <Header />
        <CTA />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}