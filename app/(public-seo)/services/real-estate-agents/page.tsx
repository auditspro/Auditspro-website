import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  HeroSection,
  BenefitsSection,
  FeaturesSection,
  RequirementsSection,
  PricingSection,
  ProcessSection,
  FAQSection,
  ContactSection,
} from "@/components/pagerefactors/services/real-estate-agents";

// Enhanced SEO Metadata following Next.js 15 and Google 2024 best practices
export const metadata: Metadata = {
  title: {
    default:
      "Trust Account Auditing for Real Estate Agents | Professional Trust Account Audits Australia",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional trust account auditing for real estate agents across Australia. State regulator compliant trust account audits with 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert trust account auditing specialists ensuring real estate compliance and regulatory requirements.",
  keywords: [
    "real estate trust account auditing",
    "trust account auditing real estate",
    "real estate trust account audit",
    "real estate agent audit australia",
    "state regulator compliant real estate audit",
    "trust account audit real estate",
    "real estate compliance audit",
    "property agent trust account auditing",
    "real estate auditing services",
    "trust account auditor real estate",
    "real estate agent compliance",
    "property trust account auditing",
    "real estate auditing requirements",
    "trust account auditing cost real estate",
    "real estate trust account auditing melbourne",
    "real estate trust account auditing sydney",
    "real estate trust account auditing brisbane",
    "real estate trust account auditing perth",
    "real estate trust account auditing adelaide",
    "real estate auditing nsw",
    "real estate auditing vic",
    "real estate auditing qld",
    "real estate auditing wa",
    "real estate auditing sa",
    "real estate auditing tas",
    "real estate trust account reconciliation",
    "property management auditing",
    "real estate compliance review",
  ],
  authors: [{ name: "AuditsPro AU" }],
  creator: "AuditsPro AU",
  publisher: "AuditsPro AU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://auditspro.com.au"),
  alternates: {
    canonical: "/services/real-estate-agents",
  },
  openGraph: {
    title: "Trust Account Audit for Real Estate Agents | State Regulator Compliant Audits Australia",
    description:
      "Professional state regulator compliant trust account audits for real estate agents. Expert auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST. Ensure compliance with Australian regulations. Server-side rendered for optimal performance.",
    url: "/services/real-estate-agents",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/real-estate-agent-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "Professional Trust Account Audit Services for Real Estate Agents - Regulatory Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audit for Real Estate Agents | AuditsPro AU",
    description:
      "Regulatory compliant trust account audits for real estate agents. Professional auditors, fast completion, transparent fixed pricing. Server-side rendered.",
    images: ["/images/real-estate-agent-auditspro-au.png"],
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
    google: "your-google-verification-code",
  },
  category: "Professional Services",
};

// Enhanced Structured Data following Schema.org and Google 2024 best practices
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auditspro.com.au/services/real-estate-agents#service",
  name: "Trust Account Audit for Real Estate Agents",
  description:
    "Professional trust account audit services specifically designed for real estate agents across Australia, ensuring regulatory compliance and regulatory requirements. Server-side rendered for optimal SEO performance.",
  url: "https://auditspro.com.au/services/real-estate-agents",
  provider: {
    "@type": "Organization",
    "@id": "https://auditspro.com.au/#organization",
    name: "AuditsPro AU",
    url: "https://auditspro.com.au",
    logo: {
      "@type": "ImageObject",
      url: "https://auditspro.com.au/images/logo.png",
      width: 300,
      height: 100,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Albert Coates Lane",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+61-1300-283487",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "AU",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/auditspro-au",
      "https://www.facebook.com/auditsproau",
    ],
  },
  serviceType: "Trust Account Auditing",
  category: "Professional Services",
  audience: {
    "@type": "Audience",
    audienceType: "Real Estate Agents",
    geographicArea: {
      "@type": "Country",
      name: "Australia",
    },
  },
  areaServed: [
    {
      "@type": "State",
      name: "New South Wales",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "State",
      name: "Victoria",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "State",
      name: "Queensland",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "State",
      name: "Western Australia",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "State",
      name: "South Australia",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "State",
      name: "Tasmania",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
  ],
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description:
      "Professional trust account audit for real estate agents starting from $549 + GST",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
    priceValidUntil: "2024-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for real estate agencies ensuring regulatory compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trust Account Compliance Review",
          description:
            "Detailed trust account compliance assessment for real estate trust account handling and regulatory requirements",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate Compliance Audit",
          description:
            "Complete real estate compliance audit covering all trust account and regulatory requirements",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah Mitchell",
      },
      reviewBody:
        "Excellent service for our real estate agency. Regulatory compliant audit completed efficiently with professional support throughout.",
    },
  ],
};

// Enhanced FAQ Schema for rich snippets and voice search optimization
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a real estate trust account audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our real estate trust account audits are typically completed within 5-10 business days from receipt of all required documentation. We provide 24-hour initial response and dedicated project management throughout the process.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of a trust account audit for real estate agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our trust account audits for real estate agents start from $549 + GST, with transparent fixed pricing and no hidden fees. This includes comprehensive regulatory compliant audit reports and ongoing support.",
      },
    },
    {
      "@type": "Question",
      name: "Are your audits regulatory compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our trust account audits are fully regulatory compliant and meet all Australian regulatory requirements for real estate agents. Our auditors are registered professionals with expertise in real estate compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need for a trust account audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll need bank statements, trust account registers, receipts, deposit books, and any relevant correspondence. We provide a complete checklist upon engagement and guide you through the documentation process.",
      },
    },
    {
      "@type": "Question",
      name: "Do real estate agents need annual trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, real estate agents are required to have annual trust account audits under regulatory requirements and state licensing requirements. These audits ensure compliance with trust account handling and client money protection standards.",
      },
    },
  ],
};

export default function RealEstateAgentsPage() {
  // Enhanced breadcrumb structured data for better navigation and SEO
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://auditspro.com.au/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://auditspro.com.au/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Real Estate Agents",
        item: "https://auditspro.com.au/services/real-estate-agents",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50">
      {/* Enhanced Breadcrumbs for better navigation and SEO */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Real Estate Agents", href: "/services/real-estate-agents" },
        ]}
      />

      {/* Enhanced Structured Data for optimal SEO performance */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Components - Server-side rendered for optimal SEO */}
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <RequirementsSection />
      <PricingSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
