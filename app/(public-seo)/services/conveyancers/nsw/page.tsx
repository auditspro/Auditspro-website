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

// Enhanced SEO Metadata for NSW Conveyancer Trust Account Audits
export const metadata: Metadata = {
  title: {
    default:
      "NSW Conveyancer Trust Account Audit | Fair Trading Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional NSW conveyancer trust account audits compliant with Fair Trading requirements. Due 30 September annually. Qualified trust account auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert NSW Conveyancers Licensing Act 2003 compliance.",
  keywords: [
    "NSW conveyancer trust account audit",
    "NSW Fair Trading conveyancer audit",
    "NSW licensed conveyancer audit",
    "Conveyancers Licensing Act 2003",
    "NSW conveyancer trust account compliance",
    "NSW conveyancer audit requirements",
    "Fair Trading NSW conveyancer audit",
    "NSW conveyancer trust account",
    "NSW conveyancing compliance audit",
    "NSW property settlement audit",
    "NSW conveyancer trust account auditor",
    "NSW conveyancer audit cost",
    "NSW Fair Trading compliance",
    "NSW conveyancer audit deadline",
    "NSW conveyancer audit report",
    "NSW trust account audit due date",
    "NSW property conveyancing audit",
    "NSW conveyancer licensing audit",
    "NSW trust account reconciliation",
    "NSW conveyancer audit online portal",
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
    canonical: "/services/conveyancers/nsw",
  },
  openGraph: {
    title:
      "NSW Conveyancer Trust Account Audit | Fair Trading Compliant | AuditsPro AU",
    description:
      "Professional NSW conveyancer trust account audits compliant with Fair Trading requirements. Qualified trust account auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST. NSW Conveyancers Licensing Act 2003 compliance.",
    url: "/services/conveyancers/nsw",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/nsw-conveyancer-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "NSW Conveyancer Trust Account Audit Services - Fair Trading Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NSW Conveyancer Trust Account Audit | AuditsPro AU",
    description:
      "NSW Fair Trading compliant trust account audits for licensed conveyancers. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/nsw-conveyancer-audit-auditspro-au.png"],
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
  "@id": "https://auditspro.com.au/services/conveyancers/nsw#service",
  name: "NSW Conveyancer Trust Account Audit",
  description:
    "Professional NSW conveyancer trust account audit services compliant with Fair Trading requirements and Conveyancers Licensing Act 2003. Qualified trust account auditors providing comprehensive compliance audits for NSW licensed conveyancers.",
  url: "https://auditspro.com.au/services/conveyancers/nsw",
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
  serviceType: "NSW Conveyancer Trust Account Auditing",
  category: "Professional Services",
  audience: {
    "@type": "Audience",
    audienceType: "NSW Licensed Conveyancers",
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
      "Professional NSW conveyancer trust account audit starting from $549 + GST, compliant with Fair Trading requirements",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-01",
    priceValidUntil: "2024-12-31",
    seller: {
      "@id": "https://auditspro.com.au/#organization",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NSW Conveyancer Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NSW Annual Trust Account Audit",
          description:
            "Comprehensive annual trust account compliance audit for NSW licensed conveyancers ensuring Fair Trading compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NSW Trust Account Compliance Review",
          description:
            "Detailed NSW trust account compliance assessment for conveyancer trust account handling and Fair Trading requirements",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "89",
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
        "Excellent NSW Fair Trading compliant audit service for conveyancers. Professional team completed our trust account audit efficiently and submitted to Fair Trading on time.",
    },
  ],
};

// FAQ Schema for NSW Conveyancers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the NSW conveyancer trust account audit due?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NSW conveyancer trust account audits must be submitted to Fair Trading within 3 months after the end of the audit period and no later than 30 September each year. The audit period runs from 1 July to 30 June.",
      },
    },
    {
      "@type": "Question",
      name: "Who must have their trust accounts audited in NSW?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In NSW, licensed conveyancers who received or held trust money during the financial year ending 30 June must have their trust accounts audited under the Conveyancers Licensing Act 2003.",
      },
    },
    {
      "@type": "Question",
      name: "Who can conduct NSW conveyancer trust account audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NSW conveyancer trust account audits must be conducted by auditors registered with professional accounting bodies or qualified under the Conveyancers Licensing Act 2003. This includes registered audit companies, authorised company auditors, and members of Professional Accounting Bodies holding a Public Practising Certificate.",
      },
    },
    {
      "@type": "Question",
      name: "How are NSW conveyancer trust account audits submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All NSW conveyancer trust account audits must be completed and submitted online by the auditor through the Fair Trading Auditor's Report Online portal. The auditor lodges all audit results directly with Fair Trading.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't submit my NSW conveyancer trust account audit on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a NSW conveyancer trust account audit is not submitted by the due date (30 September), licensed conveyancers could face penalties and possibly be prevented from renewing their licence.",
      },
    },
  ],
};

export default function NSWConveyancersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conveyancers", href: "/services/conveyancers" },
          { label: "NSW", href: "/services/conveyancers/nsw" },
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
      <HeroSection state="NSW" stateName="New South Wales" />
      <FeaturesSection />
      <RequirementsSection state="NSW" stateName="New South Wales" />
      <PricingSection state="NSW" stateName="New South Wales" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
