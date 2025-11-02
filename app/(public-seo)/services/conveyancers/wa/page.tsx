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

// Enhanced SEO Metadata for WA Settlement Agent Trust Account Audits
export const metadata: Metadata = {
  title: {
    default:
      "WA Settlement Agent Trust Account Audit | Department of Commerce Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional WA settlement agent trust account audits compliant with Department of Commerce WA requirements. Due 31 October annually. Qualified trust account auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert WA Settlement Agents Act 1981 compliance.",
  keywords: [
    "WA settlement agent trust account audit",
    "Western Australia settlement agent audit",
    "Department of Commerce WA settlement agent audit",
    "Settlement Agents Act 1981",
    "WA settlement agent trust account compliance",
    "Western Australia settlement agent audit requirements",
    "Department Commerce WA settlement agent audit",
    "WA settlement agent trust account",
    "Western Australia settlement compliance audit",
    "WA property settlement audit",
    "Western Australia settlement agent trust account auditor",
    "WA settlement agent audit cost",
    "Department of Commerce WA compliance",
    "WA settlement agent audit deadline",
    "Western Australia settlement agent audit report",
    "WA trust account audit due date",
    "Western Australia property settlement audit",
    "WA settlement agent licensing audit",
    "Western Australia trust account reconciliation",
    "WA settlement agent audit online portal",
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
    canonical: "/services/conveyancers/wa",
  },
  openGraph: {
    title:
      "WA Settlement Agent Trust Account Audit | Department of Commerce Compliant | AuditsPro AU",
    description:
      "Professional WA settlement agent trust account audits compliant with Department of Commerce WA requirements. Qualified trust account auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST. Settlement Agents Act 1981 compliance.",
    url: "/services/conveyancers/wa",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/wa-settlement-agent-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "WA Settlement Agent Trust Account Audit Services - Department of Commerce Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WA Settlement Agent Trust Account Audit | AuditsPro AU",
    description:
      "Department of Commerce WA compliant trust account audits for licensed settlement agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/wa-settlement-agent-audit-auditspro-au.png"],
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
  "@id": "https://auditspro.com.au/services/conveyancers/wa#service",
  name: "WA Settlement Agent Trust Account Audit",
  description:
    "Professional WA settlement agent trust account audit services compliant with Department of Commerce WA requirements and Settlement Agents Act 1981. Qualified trust account auditors providing comprehensive compliance audits for Western Australia licensed settlement agents.",
  url: "https://auditspro.com.au/services/conveyancers/wa",
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
        areaServed: "WA",
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
  serviceType: "WA Settlement Agent Trust Account Auditing",
  category: "Professional Services",
  audience: {
    "@type": "Audience",
    audienceType: "WA Licensed Settlement Agents",
    geographicArea: {
      "@type": "State",
      name: "Western Australia",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
  },
  areaServed: {
    "@type": "State",
    name: "Western Australia",
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
      "Professional WA settlement agent trust account audit starting from $549 + GST, compliant with Department of Commerce WA requirements",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
    priceValidUntil: "2024-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "WA Settlement Agent Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WA Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for WA licensed settlement agents ensuring Department of Commerce WA compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WA Trust Account Compliance Review",
          description:
            "Detailed WA trust account compliance assessment for settlement agent trust account handling and Department of Commerce WA requirements",
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
        name: "Michael Johnson",
      },
      reviewBody:
        "Outstanding WA Department of Commerce compliant audit service for settlement agents. Professional team completed our trust account audit efficiently and submitted to Department of Commerce WA on time.",
    },
  ],
};

// FAQ Schema for WA Settlement Agents
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the WA settlement agent trust account audit due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WA settlement agent trust account audits must be submitted to the Department of Commerce WA by 31 October each year. The audit period runs from 1 July to 30 June.",
      },
    },
    {
      "@type": "Question",
      name: "Who must have their trust accounts audited in WA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Western Australia, licensed settlement agents who received or held trust money during the financial year ending 30 June must have their trust accounts audited under the Settlement Agents Act 1981.",
      },
    },
    {
      "@type": "Question",
      name: "Who can conduct WA settlement agent trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WA settlement agent trust account audits must be conducted by auditors registered with professional accounting bodies or qualified under the Settlement Agents Act 1981. This includes registered audit companies, authorised company auditors, and members of Professional Accounting Bodies holding a Public Practising Certificate.",
      },
    },
    {
      "@type": "Question",
      name: "How are WA settlement agent trust account audits submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WA settlement agent trust account audits must be completed and submitted to the Department of Commerce WA by the qualified auditor. The auditor lodges all audit results directly with the Department of Commerce WA.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't submit my WA settlement agent trust account audit on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a WA settlement agent trust account audit is not submitted by the due date (31 October), licensed settlement agents could face penalties and possibly be prevented from renewing their licence.",
      },
    },
  ],
};

export default function WAConveyancersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conveyancers", href: "/services/conveyancers" },
          { label: "WA", href: "/services/conveyancers/wa" },
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
      <HeroSection state="WA" stateName="Western Australia" />
      <FeaturesSection />
      <RequirementsSection state="WA" stateName="Western Australia" />
      <PricingSection state="WA" stateName="Western Australia" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
