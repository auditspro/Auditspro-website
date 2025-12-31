import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo-utils";
import { organizationSchema, generateStateLocalBusinessSchema, StateBusinessData } from "@/lib/schema-templates";
import { InternalLinks } from "@/components/seo/internal-links";
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
import { TrustAccountAuditSection } from "@/components/pagerefactors/services/real-estate-agents/TrustAccountAuditSection";

// Enhanced SEO Metadata for NSW Real Estate Trust Account Audits
export const metadata: Metadata = {
  title: {
    default:
      "NSW Real Estate Trust Account Auditing | Fair Trading Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional NSW real estate trust account auditing compliant with Fair Trading requirements. Due 30 September annually. NSW Fair Trading registered auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert NSW Property, Stock and Business Agents Act 2002 compliance and trust account auditing services.",
  keywords: [
    "NSW real estate trust account auditing",
    "NSW trust account auditing",
    "NSW real estate trust account audit",
    "NSW Fair Trading audit",
    "NSW real estate agent audit",
    "Property Stock Business Agents Act 2002",
    "NSW trust account compliance",
    "NSW real estate auditing requirements",
    "Fair Trading NSW auditing",
    "NSW estate agent trust account auditing",
    "NSW real estate compliance auditing",
    "NSW property agent auditing",
    "NSW trust account auditor",
    "NSW real estate auditing cost",
    "NSW Fair Trading compliance",
    "NSW estate agent auditing deadline",
    "NSW real estate auditing report",
    "NSW trust account auditing due date",
    "NSW property management auditing",
    "NSW real estate licensing auditing",
    "NSW trust account reconciliation",
    "NSW real estate auditing online portal",
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
    canonical: "/services/real-estate-agents/nsw",
  },
  openGraph: {
    title:
      "NSW Real Estate Trust Account Audit | Fair Trading Compliant | AuditsPro AU",
    description:
      "Professional NSW real estate trust account audits compliant with Fair Trading requirements. NSW Fair Trading registered auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST. NSW Property, Stock and Business Agents Act 2002 compliance.",
    url: "/services/real-estate-agents/nsw",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/nsw-real-estate-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "NSW Real Estate Trust Account Audit Services - Fair Trading Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NSW Real Estate Trust Account Audit | AuditsPro AU",
    description:
      "NSW Fair Trading compliant trust account audits for real estate agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/nsw-real-estate-audit-auditspro-au.png"],
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

// NSW-specific state data for LocalBusiness schema
const nswStateData: StateBusinessData = {
  state: "New South Wales",
  stateCode: "NSW",
  serviceType: "Real Estate Agents",
  regulatoryBody: "NSW Fair Trading",
  complianceAct: "Property, Stock and Business Agents Act 2002",
  dueDate: "30 September annually",
  majorCities: ["Sydney", "Newcastle", "Wollongong", "Central Coast", "Albury"]
};

// Enhanced NSW-specific JSON-LD structured data with LocalBusiness schema
const localBusinessSchema = generateStateLocalBusinessSchema(nswStateData);

// NSW-specific Service JSON-LD structured data
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auditspro.com.au/services/real-estate-agents/nsw#service",
  name: "NSW Real Estate Trust Account Audit",
  description:
    "Professional NSW real estate trust account audit services compliant with Fair Trading requirements and Property, Stock and Business Agents Act 2002. NSW Fair Trading registered auditors providing comprehensive compliance audits for NSW real estate agencies.",
  url: "https://auditspro.com.au/services/real-estate-agents/nsw",
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
        areaServed: "NSW",
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
  serviceType: "NSW Real Estate Trust Account Auditing",
  category: "Professional Services",
  audience: {
    "@type": "Audience",
    audienceType: "NSW Real Estate Agents",
    geographicArea: {
      "@type": "State",
      name: "New South Wales",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
  },
  areaServed: {
    "@type": "State",
    name: "New South Wales",
    containedInPlace: {
      "@type": "Country",
      name: "Australia",
    },
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description:
      "Professional NSW real estate trust account audit starting from $549 + GST, compliant with Fair Trading requirements",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
    priceValidUntil: "2025-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NSW Real Estate Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NSW Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for NSW real estate agencies ensuring Fair Trading compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NSW Trust Account Compliance Review",
          description:
            "Detailed NSW trust account compliance assessment for real estate trust account handling and Fair Trading requirements",
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
        name: "Michael Chen",
      },
      reviewBody:
        "Excellent NSW Fair Trading compliant audit service. Professional team completed our trust account audit efficiently and submitted to Fair Trading on time.",
    },
  ],
};

// NSW-specific FAQ schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the NSW real estate trust account audit due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NSW real estate trust account audits must be submitted to Fair Trading within 3 months after the end of the audit period and no later than 30 September each year. The audit period runs from 1 July to 30 June.",
      },
    },
    {
      "@type": "Question",
      name: "Who must have their trust accounts audited in NSW?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In NSW, licensees (corporation or individual), former licensees, or personal representatives of licensees must have their trust accounts audited if they received or held trust money during the financial year ending 30 June.",
      },
    },
    {
      "@type": "Question",
      name: "Who can conduct NSW real estate trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NSW real estate trust account audits must be conducted by qualified auditors registered with regulatory bodies or qualified under section 115 of the Property Stock and Business Agents Act 2002. This includes registered audit companies, authorised company auditors, and members of Professional Accounting Bodies holding a Public Practising Certificate.",
      },
    },
    {
      "@type": "Question",
      name: "How are NSW trust account audits submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All NSW trust account audits must be completed and submitted online by the auditor through the Fair Trading Auditor's Report Online portal. The auditor lodges all audit results directly with Fair Trading.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't submit my NSW trust account audit on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a NSW trust account audit is not submitted by the due date (30 September), licensees could be disqualified from holding a licence and possibly prevented from renewing their licence.",
      },
    },
  ],
};

export default function NSWRealEstateAgentsPage() {
  return (
    <>
      {/* Enhanced Structured Data with LocalBusiness and Service schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Real Estate Agents", href: "/services/real-estate-agents" },
          { label: "NSW", href: "/services/real-estate-agents/nsw" },
        ]}
      />

      {/* Page Sections */}
      <HeroSection state="NSW" stateName="New South Wales" />
      <TrustAccountAuditSection state="NSW" />
      <BenefitsSection />
      <FeaturesSection />
      <RequirementsSection state="NSW" stateName="New South Wales" />
      <PricingSection state="NSW" stateName="New South Wales" />
      <ProcessSection />
      <FAQSection state="NSW" />
      <ContactSection />
    </>
  );
}
