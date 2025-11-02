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

// Enhanced SEO Metadata for VIC Conveyancer Trust Account Audits
export const metadata: Metadata = {
  title: {
    default:
      "VIC Conveyancer Trust Account Audit | Consumer Affairs Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional VIC conveyancer trust account audits compliant with Consumer Affairs Victoria requirements. Due 31 October annually. Qualified trust account auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert VIC Sale of Land Act 1962 compliance.",
  keywords: [
    "VIC conveyancer trust account audit",
    "Victoria conveyancer audit",
    "Consumer Affairs Victoria conveyancer audit",
    "Sale of Land Act 1962",
    "VIC conveyancer trust account compliance",
    "Victoria conveyancer audit requirements",
    "Consumer Affairs VIC conveyancer audit",
    "VIC conveyancer trust account",
    "Victoria conveyancing compliance audit",
    "VIC property settlement audit",
    "Victoria conveyancer trust account auditor",
    "VIC conveyancer audit cost",
    "Consumer Affairs Victoria compliance",
    "VIC conveyancer audit deadline",
    "Victoria conveyancer audit report",
    "VIC trust account audit due date",
    "Victoria property conveyancing audit",
    "VIC conveyancer licensing audit",
    "Victoria trust account reconciliation",
    "VIC conveyancer audit online portal",
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
    canonical: "/services/conveyancers/vic",
  },
  openGraph: {
    title:
      "VIC Conveyancer Trust Account Audit | Consumer Affairs Compliant | AuditsPro AU",
    description:
      "Professional VIC conveyancer trust account audits compliant with Consumer Affairs Victoria requirements. Qualified trust account auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST. Sale of Land Act 1962 compliance.",
    url: "/services/conveyancers/vic",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/vic-conveyancer-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "VIC Conveyancer Trust Account Audit Services - Consumer Affairs Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIC Conveyancer Trust Account Audit | AuditsPro AU",
    description:
      "Consumer Affairs Victoria compliant trust account audits for licensed conveyancers. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/vic-conveyancer-audit-auditspro-au.png"],
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
  "@id": "https://auditspro.com.au/services/conveyancers/vic#service",
  name: "VIC Conveyancer Trust Account Audit",
  description:
    "Professional VIC conveyancer trust account audit services compliant with Consumer Affairs Victoria requirements and Sale of Land Act 1962. Qualified trust account auditors providing comprehensive compliance audits for Victoria licensed conveyancers.",
  url: "https://auditspro.com.au/services/conveyancers/vic",
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
        areaServed: "VIC",
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
  serviceType: "VIC Conveyancer Trust Account Auditing",
  category: "Professional Services",
  audience: {
    "@type": "Audience",
    audienceType: "VIC Licensed Conveyancers",
    geographicArea: {
      "@type": "State",
      name: "Victoria",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
  },
  areaServed: {
    "@type": "State",
    name: "Victoria",
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
      "Professional VIC conveyancer trust account audit starting from $549 + GST, compliant with Consumer Affairs Victoria requirements",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
    priceValidUntil: "2024-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VIC Conveyancer Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "VIC Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for VIC licensed conveyancers ensuring Consumer Affairs Victoria compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "VIC Trust Account Compliance Review",
          description:
            "Detailed VIC trust account compliance assessment for conveyancer trust account handling and Consumer Affairs Victoria requirements",
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
        name: "David Thompson",
      },
      reviewBody:
        "Outstanding VIC Consumer Affairs compliant audit service for conveyancers. Professional team completed our trust account audit efficiently and submitted to Consumer Affairs Victoria on time.",
    },
  ],
};

// FAQ Schema for VIC Conveyancers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the VIC conveyancer trust account audit due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIC conveyancer trust account audits must be submitted to Consumer Affairs Victoria by 31 October each year. The audit period runs from 1 July to 30 June.",
      },
    },
    {
      "@type": "Question",
      name: "Who must have their trust accounts audited in VIC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Victoria, licensed conveyancers who received or held trust money during the financial year ending 30 June must have their trust accounts audited under the Sale of Land Act 1962.",
      },
    },
    {
      "@type": "Question",
      name: "Who can conduct VIC conveyancer trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIC conveyancer trust account audits must be conducted by auditors registered with professional accounting bodies or qualified under the Sale of Land Act 1962. This includes registered audit companies, authorised company auditors, and members of Professional Accounting Bodies holding a Public Practising Certificate.",
      },
    },
    {
      "@type": "Question",
      name: "How are VIC conveyancer trust account audits submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VIC conveyancer trust account audits must be completed and submitted to Consumer Affairs Victoria by the qualified auditor. The auditor lodges all audit results directly with Consumer Affairs Victoria.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't submit my VIC conveyancer trust account audit on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a VIC conveyancer trust account audit is not submitted by the due date (31 October), licensed conveyancers could face penalties and possibly be prevented from renewing their licence.",
      },
    },
  ],
};

export default function VICConveyancersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conveyancers", href: "/services/conveyancers" },
          { label: "VIC", href: "/services/conveyancers/vic" },
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
      <HeroSection state="VIC" stateName="Victoria" />
      <FeaturesSection />
      <RequirementsSection state="VIC" stateName="Victoria" />
      <PricingSection state="VIC" stateName="Victoria" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
