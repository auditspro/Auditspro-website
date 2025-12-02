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

// Enhanced SEO Metadata for NT Conveyancer Trust Account Audits
export const metadata: Metadata = {
  title: {
    default:
      "NT Conveyancer Trust Account Audit | Department of Attorney-General & Justice Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional NT conveyancer trust account audits compliant with Department of Attorney-General and Justice requirements. Due 31 October annually. Qualified trust account auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert NT Conveyancers Act 2006 compliance.",
  keywords: [
    "NT conveyancer trust account audit",
    "Northern Territory conveyancer audit",
    "Department Attorney-General Justice NT conveyancer audit",
    "Conveyancers Act 2006",
    "NT conveyancer trust account compliance",
    "Northern Territory conveyancer audit requirements",
    "DAGJ NT conveyancer audit",
    "NT conveyancer trust account",
    "Northern Territory conveyancing compliance audit",
    "NT property settlement audit",
    "Northern Territory conveyancer trust account auditor",
    "NT conveyancer audit cost",
    "Department Attorney-General Justice NT compliance",
    "NT conveyancer audit deadline",
    "Northern Territory conveyancer audit report",
    "NT trust account audit due date",
    "Northern Territory property conveyancing audit",
    "NT conveyancer licensing audit",
    "Northern Territory trust account reconciliation",
    "NT conveyancer audit online portal",
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
    canonical: "/services/conveyancers/nt",
  },
  openGraph: {
    title:
      "NT Conveyancer Trust Account Audit | Department of Attorney-General & Justice Compliant | AuditsPro AU",
    description:
      "Professional NT conveyancer trust account audits compliant with Department of Attorney-General & Justice NT requirements. Qualified trust account auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST. Conveyancers Act 2006 compliance.",
    url: "/services/conveyancers/nt",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/nt-conveyancer-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "NT Conveyancer Trust Account Audit Services - Department of Attorney-General & Justice Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NT Conveyancer Trust Account Audit | AuditsPro AU",
    description:
      "Department of Attorney-General & Justice NT compliant trust account audits for licensed conveyancers. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/nt-conveyancer-audit-auditspro-au.png"],
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
  "@id": "https://auditspro.com.au/services/conveyancers/nt#service",
  name: "NT Conveyancer Trust Account Audit",
  description:
    "Professional NT conveyancer trust account audit services compliant with Department of Attorney-General & Justice NT requirements and Conveyancers Act 2006. Qualified trust account auditors providing comprehensive compliance audits for Northern Territory licensed conveyancers.",
  url: "https://auditspro.com.au/services/conveyancers/nt",
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
        areaServed: "NT",
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
  serviceType: "NT Conveyancer Trust Account Auditing",
  category: "Professional Services",
  audience: {
    "@type": "Audience",
    audienceType: "NT Licensed Conveyancers",
    geographicArea: {
      "@type": "State",
      name: "Northern Territory",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
  },
  areaServed: {
    "@type": "State",
    name: "Northern Territory",
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
      "Professional NT conveyancer trust account audit starting from $549 + GST, compliant with Department of Attorney-General & Justice NT requirements",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
    priceValidUntil: "2024-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NT Conveyancer Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NT Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for NT licensed conveyancers ensuring Department of Attorney-General & Justice NT compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NT Trust Account Compliance Review",
          description:
            "Detailed NT trust account compliance assessment for conveyancer trust account handling and Department of Attorney-General & Justice NT requirements",
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
        name: "James Anderson",
      },
      reviewBody:
        "Outstanding NT Department of Attorney-General & Justice compliant audit service for conveyancers. Professional team completed our trust account audit efficiently and submitted to DAGJ NT on time.",
    },
  ],
};

// FAQ Schema for NT Conveyancers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the NT conveyancer trust account audit due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NT conveyancer trust account audits must be submitted to the Department of Attorney-General & Justice NT by 31 October each year. The audit period runs from 1 July to 30 June.",
      },
    },
    {
      "@type": "Question",
      name: "Who must have their trust accounts audited in NT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Northern Territory, licensed conveyancers who received or held trust money during the financial year ending 30 June must have their trust accounts audited under the Conveyancers Act 2006.",
      },
    },
    {
      "@type": "Question",
      name: "Who can conduct NT conveyancer trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NT conveyancer trust account audits must be conducted by auditors registered with professional accounting bodies or qualified under the Conveyancers Act 2006. This includes registered audit companies, authorised company auditors, and members of Professional Accounting Bodies holding a Public Practising Certificate.",
      },
    },
    {
      "@type": "Question",
      name: "How are NT conveyancer trust account audits submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NT conveyancer trust account audits must be completed and submitted to the Department of Attorney-General & Justice NT by the qualified auditor. The auditor lodges all audit results directly with DAGJ NT.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't submit my NT conveyancer trust account audit on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a NT conveyancer trust account audit is not submitted by the due date (31 October), licensed conveyancers could face penalties and possibly be prevented from renewing their licence.",
      },
    },
  ],
};

export default function NTConveyancersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conveyancers", href: "/services/conveyancers" },
          { label: "NT", href: "/services/conveyancers/nt" },
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
      <HeroSection state="NT" stateName="Northern Territory" />
      <FeaturesSection />
      <RequirementsSection state="NT" stateName="Northern Territory" />
      <PricingSection state="NT" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
