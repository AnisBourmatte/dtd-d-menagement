import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Déménagement & Monte-Meuble Saint-Maur-des-Fossés (94) - DTD",
  description: "Expert du déménagement et location de monte-meuble à Saint-Maur-des-Fossés (94) et Val-de-Marne. Déménageurs qualifiés, devis gratuit, intervention rapide.",
  keywords: [
    "déménagement saint-maur-des-fossés",
    "location monte-meuble 94",
    "déménageur 94",
    "société de déménagement val-de-marne",
    "monte-charge saint-maur",
    "déménagement pas cher 94",
    "location monte meuble saint maur",
    "débarras 94"
  ],
  authors: [{ name: "DTD Déménagement" }],
  creator: "DTD Déménagement",
  publisher: "DTD Déménagement",
  metadataBase: new URL("https://www.top-demenagement.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DTD Déménagement - Monte-Meuble & Déménagement 94",
    description: "Besoin d'un monte-meuble ou de déménageurs à Saint-Maur (94) ? Service professionnel pour particuliers et pros. Devis gratuit immédiat.",
    url: "https://www.top-demenagement.com",
    siteName: "DTD Déménagement",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Déménagement DTD Saint-Maur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DTD Déménagement 94 - Location Monte-Meuble",
    description: "Votre expert déménagement et monte-meuble dans le Val-de-Marne (94).",
    images: ["https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&h=630&fit=crop"],
  },
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
  icons: {
    icon: "https://ext.same-assets.com/3342823941/2626511006.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "DTD Déménagement Toute Distance",
  "image": "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
  "url": "https://www.top-demenagement.com",
  "telephone": "+33143394667",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30 rue de la Varenne",
    "addressLocality": "Saint-Maur-des-Fossés",
    "postalCode": "94100",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.7977,
    "longitude": 2.4833
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/dtddemenagement",
    "https://www.instagram.com/dtddemenagement"
  ],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Saint-Maur-des-Fossés"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Val-de-Marne"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Île-de-France"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Location de monte-meuble"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Déménagement Particulier"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Déménagement Entreprise"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ClientBody>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </ClientBody>
    </html>
  );
}
