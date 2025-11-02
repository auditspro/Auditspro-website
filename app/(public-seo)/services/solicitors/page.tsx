import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  HeroSection,
  BenefitsSection,
  RequirementsSection,
  ProcessSection,
  PricingSection,
  FAQSection,
  ContactSection,
} from "@/components/pagerefactors/services/solicitors";

// Enhanced SEO Metadata following Next.js 15 best practices
export const metadata: Metadata = {
  title: {
    default:
      "Trust Account Audit for Solicitors | Legal Practice Compliant Audits Australia",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional trust account audits for solicitors and legal practices across Australia. Law Society compliant audits with 24-hour response, 5-10 day completion. Fixed pricing from $1,949 + GST per trust account (additional $100 + GST for each control account). Expert IPA qualified auditors specializing in legal trust account compliance and regulatory requirements.",
  keywords: [
    "solicitor trust account audit",
    "legal practice audit australia",
    "law society trust account audit",
    "legal trust account audit",
    "solicitor compliance audit",
    "legal practice trust account",
    "solicitor audit services",
    "trust account auditor legal",
    "solicitor compliance",
    "legal practice trust account audit",
    "solicitor audit requirements",
    "trust account audit cost legal",
    "client money audit solicitor",
    "legal practice compliance",
    "law society compliance audit",
    "legal profession audit",
    "solicitor regulatory audit",
    "trust account audit melbourne",
    "trust account audit sydney",
    "trust account audit brisbane",
    "trust account audit perth",
    "trust account audit adelaide",
    "legal practice audit nsw",
    "legal practice audit vic",
    "legal practice audit qld",
    "legal practice audit wa",
    "legal practice audit sa",
    "legal practice audit tas",
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
    canonical: "/services/solicitors",
  },
  openGraph: {
    title:
      "Trust Account Audit for Solicitors | Law Society Compliant Audits Australia",
    description:
      "Professional Law Society compliant trust account audits for solicitors and legal practices. Expert IPA qualified auditors, fast 5-10 day turnaround, fixed pricing from $1,949 + GST per trust account (additional $100 + GST for each control account). Ensure legal practice compliance across all Australian states.",
    url: "/services/solicitors",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/og-solicitor-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Trust Account Audit Services for Solicitors - Law Society Compliant - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audit for Solicitors | AuditsPro AU",
    description:
      "Law Society compliant trust account audits for solicitors. Professional IPA qualified auditors, fast completion, transparent fixed pricing.",
    images: ["/images/twitter-solicitor-audit.jpg"],
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

// Enhanced Structured Data following Schema.org best practices
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auditspro.com.au/services/solicitors#service",
  name: "Trust Account Audit for Solicitors",
  description:
    "Professional trust account audit services specifically designed for solicitors and legal practices across Australia, ensuring full compliance with Law Society requirements and legal profession standards.",
  url: "https://auditspro.com.au/services/solicitors",
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
    audienceType: "Legal Professionals",
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
    price: "1949",
    priceCurrency: "AUD",
    description:
      "Professional trust account audit for solicitors starting from $1,949 + GST per trust account (additional $100 + GST for each control account)",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
    priceValidUntil: "2024-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solicitor Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for legal practices ensuring Law Society compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Client Money Compliance Review",
          description:
            "Detailed trust account compliance assessment for client money handling and regulatory requirements",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Legal Practice Compliance Audit",
          description:
            "Complete legal practice compliance audit covering all trust account and regulatory requirements",
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
        "Excellent service for our legal practice. Law Society compliant audit completed efficiently with professional support throughout.",
    },
  ],
};

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do solicitors need trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, solicitors are required to have annual trust account audits under Law Society regulations across all Australian states. These audits ensure compliance with legal profession requirements and client money handling standards.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a solicitor trust account audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional trust account audits for solicitors start from $1,949 + GST per trust account. Additional control accounts are $100 + GST each. This includes comprehensive Law Society compliant audit reports, expert legal auditors, and ongoing support.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a legal practice audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most solicitor trust account audits are completed within 5-10 business days from commencement. We provide 24-hour initial response and dedicated project management throughout the process.",
      },
    },
    {
      "@type": "Question",
      name: "Are the audits Law Society compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our audit reports meet Law Society requirements across all Australian states. Our IPA qualified auditors specialize in legal practice compliance and understand state-specific regulatory requirements.",
      },
    },
  ],
};

export default function SolicitorsPage() {
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
        name: "Solicitors",
        item: "https://auditspro.com.au/services/solicitors",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50">
      {/* Set Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Solicitors", href: "/services/solicitors" },
        ]}
      />

      {/* Enhanced Structured Data */}
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

      {/* Page Components */}
      <HeroSection />
      <BenefitsSection />
      <RequirementsSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
