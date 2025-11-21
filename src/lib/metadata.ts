import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rad-guinee.com"
const siteName = "RAD - Réseau Africain de Développement"
const siteDescription =
  "Partenaire de confiance pour le développement industriel et économique en Afrique depuis 2008. Commerce, Mining, Transport, Construction, Services Généraux."

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "RAD",
    "Réseau Africain de Développement",
    "Guinée",
    "Conakry",
    "Mining",
    "Commerce",
    "Transport",
    "Construction",
    "Afrique de l'Ouest",
    "Développement industriel",
    "Logistique minière",
    "Services généraux",
    "Consulting",
  ],
  authors: [{ name: "RAD Guinée" }],
  creator: "RAD - Réseau Africain de Développement",
  publisher: "RAD - Réseau Africain de Développement",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_GN",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "RAD - Réseau Africain de Développement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@RADGuinee",
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
  verification: {
    google: "your-google-verification-code", // À remplacer
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-GN": `${siteUrl}/fr`,
      "en-US": `${siteUrl}/en`,
    },
  },
}

// Schema.org JSON-LD pour Organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RAD - Réseau Africain de Développement",
  alternateName: "RAD Guinée",
  url: siteUrl,
  logo: `${siteUrl}/rad-logo.jpeg`,
  description: siteDescription,
  foundingDate: "2008",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Conakry",
    addressCountry: "GN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["French", "English"],
  },
  sameAs: [
    // Ajouter vos réseaux sociaux ici
    // "https://www.linkedin.com/company/rad-guinee",
    // "https://twitter.com/RADGuinee",
    // "https://www.facebook.com/RADGuinee",
  ],
  areaServed: {
    "@type": "Country",
    name: "Guinea",
  },
  knowsAbout: [
    "Mining",
    "Commerce",
    "Transport",
    "Construction",
    "Industrial Development",
    "Logistics",
  ],
}

// Schema.org pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      name: "Commerce & Distribution",
      provider: {
        "@type": "Organization",
        name: "RAD",
      },
      areaServed: {
        "@type": "Country",
        name: "Guinea",
      },
    },
    {
      "@type": "Service",
      name: "Mining & Extraction",
      provider: {
        "@type": "Organization",
        name: "RAD",
      },
      areaServed: {
        "@type": "Country",
        name: "Guinea",
      },
    },
    {
      "@type": "Service",
      name: "Transport & Logistics",
      provider: {
        "@type": "Organization",
        name: "RAD",
      },
      areaServed: {
        "@type": "Country",
        name: "Guinea",
      },
    },
    {
      "@type": "Service",
      name: "Construction & Infrastructure",
      provider: {
        "@type": "Organization",
        name: "RAD",
      },
      areaServed: {
        "@type": "Country",
        name: "Guinea",
      },
    },
  ],
}
