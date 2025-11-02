import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  HeroSection,
  FeaturesSection,
  RequirementsSection,
  ProcessSection,
  PricingSection,
  FAQSection,
  ContactSection,
} from "@/components/pagerefactors/services/conveyancers";

// Enhanced SEO Metadata for TAS Conveyancer Trust Account Audits
export const metadata: Metadata = {
  title: {
    default:
      "TAS Conveyancer Trust Account Audit | Consumer, Building & Occupational Services Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional TAS conveyancer trust account audits compliant with Consumer, Building and Occupational Services requirements. Due 31 October annually. Qualified trust account auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert TAS Conveyancing Act 2004 compliance.",
  keywords: [
    "TAS conveyancer trust account audit",
    "Tasmania conveyancer audit",
    "Consumer Building Occupational Services TAS conveyancer audit",
    "Conveyancers Act 2018",
    "TAS conveyancer trust account compliance",
    "Tasmania conveyancer audit requirements",
    "CBOS TAS conveyancer audit",
    "TAS conveyancer trust account",
    "Tasmania conveyancing compliance audit",
    "TAS property settlement audit",
    "Tasmania conveyancer trust account auditor",
    "TAS conveyancer audit cost",
    "Consumer Building Occupational Services TAS compliance",
    "TAS conveyancer audit deadline",
    "Tasmania conveyancer audit report",
    "TAS trust account audit due date",
    "Tasmania property conveyancing audit",
    "TAS conveyancer licensing audit",
    "Tasmania trust account reconciliation",
    "TAS conveyancer audit online portal",
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
    canonical: "/services/conveyancers/tas",
  },
  openGraph: {
    title:
      "TAS Conveyancer Trust Account Audit | Consumer, Building & Occupational Services Compliant | AuditsPro AU",
    description:
      "Professional TAS conveyancer trust account audits compliant with Consumer, Building & Occupational Services TAS requirements. Qualified trust account auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST. Conveyancers Act 2018 compliance.",
    url: "/services/conveyancers/tas",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/tas-conveyancer-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "TAS Conveyancer Trust Account Audit Services - Consumer, Building & Occupational Services Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAS Conveyancer Trust Account Audit | AuditsPro AU",
    description:
      "Consumer, Building & Occupational Services TAS compliant trust account audits for licensed conveyancers. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/tas-conveyancer-audit-auditspro-au.png"],
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auditspro.com.au/services/conveyancers/tas#service",
  name: "TAS Conveyancer Trust Account Audit",
  description:
    "Professional TAS conveyancer trust account audit services compliant with Consumer, Building & Occupational Services TAS requirements and Conveyancers Act 2018. Qualified trust account auditors providing comprehensive compliance audits for Tasmania licensed conveyancers.",
  url: "https://auditspro.com.au/services/conveyancers/tas",
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
      streetAddress: "Level 14, 44 Market Street",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      postalCode: "2000",
      addressCountry: "AU",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+61-1300-283487",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "TAS",
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
  serviceType: "TAS Conveyancer Trust Account Auditing",
  category: "Professional Services",
  audience: {
    "@type": "Audience",
    audienceType: "TAS Licensed Conveyancers",
    geographicArea: {
      "@type": "State",
      name: "Tasmania",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
  },
  areaServed: {
    "@type": "State",
    name: "Tasmania",
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
      "Professional TAS conveyancer trust account audit starting from $549 + GST, compliant with Consumer, Building & Occupational Services TAS requirements",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
    priceValidUntil: "2024-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "TAS Conveyancer Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TAS Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for TAS licensed conveyancers ensuring Consumer, Building & Occupational Services TAS compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TAS Trust Account Compliance Review",
          description:
            "Detailed TAS trust account compliance assessment for conveyancer trust account handling and Consumer, Building & Occupational Services TAS requirements",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "156",
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
        name: "Emma Wilson",
      },
      reviewBody:
        "Excellent TAS Consumer, Building & Occupational Services compliant audit service for conveyancers. Professional team completed our trust account audit efficiently and submitted to CBOS TAS on time.",
    },
  ],
};

// FAQ Schema for TAS Conveyancers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the TAS conveyancer trust account audit due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TAS conveyancer trust account audits must be submitted to Consumer, Building & Occupational Services TAS by 31 October each year. The audit period runs from 1 July to 30 June.",
      },
    },
    {
      "@type": "Question",
      name: "Who must have their trust accounts audited in TAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Tasmania, licensed conveyancers who received or held trust money during the financial year ending 30 June must have their trust accounts audited under the Conveyancers Act 2018.",
      },
    },
    {
      "@type": "Question",
      name: "Who can conduct TAS conveyancer trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TAS conveyancer trust account audits must be conducted by auditors registered with professional accounting bodies or qualified under the Conveyancers Act 2018. This includes registered audit companies, authorised company auditors, and members of Professional Accounting Bodies holding a Public Practising Certificate.",
      },
    },
    {
      "@type": "Question",
      name: "How are TAS conveyancer trust account audits submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TAS conveyancer trust account audits must be completed and submitted to Consumer, Building & Occupational Services TAS by the qualified auditor. The auditor lodges all audit results directly with CBOS TAS.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't submit my TAS conveyancer trust account audit on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a TAS conveyancer trust account audit is not submitted by the due date (31 October), licensed conveyancers could face penalties and possibly be prevented from renewing their licence.",
      },
    },
  ],
};

export default function TASConveyancersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conveyancers", href: "/services/conveyancers" },
          { label: "TAS", href: "/services/conveyancers/tas" },
        ]}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Sections */}
      <HeroSection state="TAS" stateName="Tasmania" />
      <FeaturesSection />
      <RequirementsSection state="TAS" stateName="Tasmania" />
      <PricingSection state="TAS" stateName="Tasmania" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
