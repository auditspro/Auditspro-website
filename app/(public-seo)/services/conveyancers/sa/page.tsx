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

// Enhanced SEO Metadata for SA Conveyancer Trust Account Audits
export const metadata: Metadata = {
  title: {
    default:
      "SA Conveyancer Trust Account Audit | Consumer & Business Services Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional SA conveyancer trust account audits compliant with Consumer and Business Services SA requirements. Due 31 October annually. Qualified trust account auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert SA Conveyancers Act 1994 compliance.",
  keywords: [
    "SA conveyancer trust account audit",
    "South Australia conveyancer audit",
    "Consumer Business Services SA conveyancer audit",
    "Conveyancers Act 1994",
    "SA conveyancer trust account compliance",
    "South Australia conveyancer audit requirements",
    "CBS SA conveyancer audit",
    "SA conveyancer trust account",
    "South Australia conveyancing compliance audit",
    "SA property settlement audit",
    "South Australia conveyancer trust account auditor",
    "SA conveyancer audit cost",
    "Consumer Business Services SA compliance",
    "SA conveyancer audit deadline",
    "South Australia conveyancer audit report",
    "SA trust account audit due date",
    "South Australia property conveyancing audit",
    "SA conveyancer licensing audit",
    "South Australia trust account reconciliation",
    "SA conveyancer audit online portal",
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
    canonical: "/services/conveyancers/sa",
  },
  openGraph: {
    title:
      "SA Conveyancer Trust Account Audit | Consumer & Business Services Compliant | AuditsPro AU",
    description:
      "Professional SA conveyancer trust account audits compliant with Consumer & Business Services SA requirements. Qualified trust account auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST. Conveyancers Act 1994 compliance.",
    url: "/services/conveyancers/sa",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/sa-conveyancer-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "SA Conveyancer Trust Account Audit Services - Consumer & Business Services Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SA Conveyancer Trust Account Audit | AuditsPro AU",
    description:
      "Consumer & Business Services SA compliant trust account audits for licensed conveyancers. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/sa-conveyancer-audit-auditspro-au.png"],
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
  "@id": "https://auditspro.com.au/services/conveyancers/sa#service",
  name: "SA Conveyancer Trust Account Audit",
  description:
    "Professional SA conveyancer trust account audit services compliant with Consumer & Business Services SA requirements and Conveyancers Act 1994. Qualified trust account auditors providing comprehensive compliance audits for South Australia licensed conveyancers.",
  url: "https://auditspro.com.au/services/conveyancers/sa",
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
        areaServed: "SA",
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
  serviceType: "SA Conveyancer Trust Account Auditing",
  category: "Professional Services",
  audience: {
    "@type": "Audience",
    audienceType: "SA Licensed Conveyancers",
    geographicArea: {
      "@type": "State",
      name: "South Australia",
      containedInPlace: {
        "@type": "Country",
        name: "Australia",
      },
    },
  },
  areaServed: {
    "@type": "State",
    name: "South Australia",
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
      "Professional SA conveyancer trust account audit starting from $549 + GST, compliant with Consumer & Business Services SA requirements",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
    priceValidUntil: "2024-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SA Conveyancer Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SA Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for SA licensed conveyancers ensuring Consumer & Business Services SA compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SA Trust Account Compliance Review",
          description:
            "Detailed SA trust account compliance assessment for conveyancer trust account handling and Consumer & Business Services SA requirements",
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
        name: "Sarah Mitchell",
      },
      reviewBody:
        "Excellent SA Consumer & Business Services compliant audit service for conveyancers. Professional team completed our trust account audit efficiently and submitted to CBS SA on time.",
    },
  ],
};

// FAQ Schema for SA Conveyancers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the SA conveyancer trust account audit due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SA conveyancer trust account audits must be submitted to Consumer & Business Services SA by 31 October each year. The audit period runs from 1 July to 30 June.",
      },
    },
    {
      "@type": "Question",
      name: "Who must have their trust accounts audited in SA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In South Australia, licensed conveyancers who received or held trust money during the financial year ending 30 June must have their trust accounts audited under the Conveyancers Act 1994.",
      },
    },
    {
      "@type": "Question",
      name: "Who can conduct SA conveyancer trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SA conveyancer trust account audits must be conducted by auditors registered with professional accounting bodies or qualified under the Conveyancers Act 1994. This includes registered audit companies, authorised company auditors, and members of Professional Accounting Bodies holding a Public Practising Certificate.",
      },
    },
    {
      "@type": "Question",
      name: "How are SA conveyancer trust account audits submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SA conveyancer trust account audits must be completed and submitted to Consumer & Business Services SA by the qualified auditor. The auditor lodges all audit results directly with CBS SA.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't submit my SA conveyancer trust account audit on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a SA conveyancer trust account audit is not submitted by the due date (31 October), licensed conveyancers could face penalties and possibly be prevented from renewing their licence.",
      },
    },
  ],
};

export default function SAConveyancersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conveyancers", href: "/services/conveyancers" },
          { label: "SA", href: "/services/conveyancers/sa" },
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
      <HeroSection state="SA" stateName="South Australia" />
      <FeaturesSection />
      <RequirementsSection state="SA" stateName="South Australia" />
      <PricingSection state="SA" stateName="South Australia" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
