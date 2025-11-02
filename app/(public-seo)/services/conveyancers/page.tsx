import { Metadata } from "next";
import { PageWrapper } from "@/components/ui/page-wrapper";
import {
  HeroSection,
  BenefitsSection,
  FeaturesSection,
  RequirementsSection,
  ProcessSection,
  PricingSection,
  FAQSection,
  ContactSection,
} from "@/components/pagerefactors/services/conveyancers";

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: {
    default:
      "Conveyancer Trust Account Audits Australia | Qualified Trust Account Auditors | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional conveyancer trust account audits across Australia. Qualified trust account auditors, state authority compliant, 5-10 day completion, fixed pricing from $549 + GST. Expert NSW, VIC, SA, WA, TAS, NT compliance. Licensed conveyancers, settlement agents & lawyers trust account auditing.",
  keywords: [
    "conveyancer trust account audit Australia",
    "licensed conveyancer audit services",
    "qualified trust account auditor conveyancer",
    "NSW conveyancer trust account audit",
    "VIC conveyancer trust account audit",
    "SA conveyancer trust account audit",
    "WA settlement agent trust account audit",
    "TAS conveyancer trust account audit",
    "NT conveyancer trust account audit",
    "QLD lawyer trust account audit",
    "ACT lawyer trust account audit",
    "conveyancer audit requirements Australia",
    "property settlement trust account audit",
    "conveyancing compliance audit services",
    "trust account audit conveyancer cost",
    "state authority compliant conveyancer audit",
    "conveyancer regulatory compliance audit",
    "property law trust account compliance",
    "conveyancer audit deadline 31 October",
    "licensed conveyancer annual audit",
    "settlement agent trust account audit",
    "conveyancer trust account reconciliation",
    "property conveyancing audit report",
    "conveyancer licensing compliance audit",
    "trust account audit online portal",
    "conveyancer audit fixed pricing",
    "professional conveyancer auditing services",
    "conveyancer trust account auditor near me",
    "conveyancer audit submission requirements",
    "state regulatory authority conveyancer audit",
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
    canonical: "/services/conveyancers",
  },
  openGraph: {
    title:
      "Conveyancer Trust Account Audits Australia | Qualified Trust Account Auditors | AuditsPro AU",
    description:
      "Professional conveyancer trust account audits across Australia. Qualified trust account auditors, state authority compliant, fast 5-10 day completion, transparent fixed pricing from $549 + GST. Expert NSW, VIC, SA, WA, TAS, NT compliance for licensed conveyancers, settlement agents & lawyers.",
    url: "/services/conveyancers",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/conveyancer-trust-account-audit-australia-auditspro.png",
        width: 1200,
        height: 630,
        alt: "Conveyancer Trust Account Audit Services Australia - Qualified Trust Account Auditors - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conveyancer Trust Account Audits Australia | AuditsPro AU",
    description:
      "Qualified trust account auditors providing professional conveyancer trust account audits across Australia. State authority compliant, fixed pricing, fast completion.",
    images: ["/images/conveyancer-trust-account-audit-australia-auditspro.png"],
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

// JSON-LD Structured Data - Multiple schemas for comprehensive SEO
const jsonLd = [
  // Main Service Schema
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Conveyancers Trust Account Audit Services",
    description:
      "Professional state regulator compliant trust account audit services for licensed conveyancers across Australia. State authority compliant reports with 3-7 day turnaround by IPA qualified auditors.",
    url: "https://auditspro.com.au/services/conveyancers",
    provider: {
      "@type": "Organization",
      name: "AuditsPro AU",
      url: "https://auditspro.com.au",
      telephone: "1300283487",
      email: "hello@auditspro.com.au",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "Australia",
      },
      sameAs: [
        "https://www.linkedin.com/company/auditspro-au",
        "https://www.facebook.com/auditsproau",
      ],
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
      {
        "@type": "State",
        name: "Australian Capital Territory",
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
      {
        "@type": "State",
        name: "Northern Territory",
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
    ],
    serviceType: "Trust Account Auditing",
    audience: {
      "@type": "Audience",
      audienceType: "Licensed Conveyancers",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Conveyancer Audit Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trust Account Audit",
            description: "Comprehensive trust account audit for conveyancers",
          },
          price: "549",
          priceCurrency: "AUD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "549",
            priceCurrency: "AUD",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1",
              unitText: "Trust Account Audit (NSW/VIC/TAS)",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trust Account Audit (Premium States)",
            description:
              "Comprehensive trust account audit for conveyancers in SA/NT/WA",
          },
          price: "749",
          priceCurrency: "AUD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "749",
            priceCurrency: "AUD",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1",
              unitText: "Trust Account Audit (SA/NT/WA)",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Additional Control Account Audit",
            description: "Additional control account audit for conveyancers",
          },
          price: "85",
          priceCurrency: "AUD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "85",
            priceCurrency: "AUD",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1",
              unitText: "Additional Control Account",
            },
          },
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://auditspro.com.au",
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
          name: "Conveyancers",
          item: "https://auditspro.com.au/services/conveyancers",
        },
      ],
    },
  },
  // LocalBusiness Schema for better local SEO
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://auditspro.com.au/#localbusiness",
    name: "AuditsPro AU",
    description:
      "Professional audit services for conveyancers, real estate agents, mortgage brokers, and business brokers across Australia.",
    url: "https://auditspro.com.au",
    telephone: "1300283487",
    email: "hello@auditspro.com.au",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "Australia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-25.2744",
      longitude: "133.7751",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceArea: {
      "@type": "Country",
      name: "Australia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Professional Audit Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conveyancer Trust Account Audits",
            serviceType: "Trust Account Auditing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Agent Trust Account Audits",
            serviceType: "Trust Account Auditing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mortgage Broker Audit Services",
            serviceType: "Financial Auditing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Broker Audit Services",
            serviceType: "Financial Auditing",
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/company/auditspro-au",
      "https://www.facebook.com/auditsproau",
    ],
  },
  // FAQ Schema for common conveyancer audit questions
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a conveyancer trust account audit cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conveyancer trust account audit costs vary by state: NSW, VIC, and TAS audits cost $549 + GST, while SA, WA, and NT audits cost $749 + GST. Additional control accounts are $85 + GST each.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a conveyancer audit take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most conveyancer trust account audits are completed within 5-10 business days from receipt of all required documentation. Rush services may be available for urgent deadlines.",
        },
      },
      {
        "@type": "Question",
        name: "What documents do I need for a conveyancer audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You'll need bank statements, trust account registers, reconciliations, client ledgers, and any relevant correspondence. Our team will provide a comprehensive checklist upon engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Are your auditors qualified and registered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our auditors are qualified trust account auditors and members of professional accounting bodies like IPA or CPA Australia, ensuring compliance with regulatory requirements.",
        },
      },
      {
        "@type": "Question",
        name: "When is the conveyancer audit deadline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The annual conveyancer trust account audit deadline is typically October 31st in most states, though specific requirements may vary. Check with your state regulatory authority for exact dates.",
        },
      },
    ],
  },
];

export default function ConveyancersPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Conveyancers",
        item: "/services/conveyancers",
      },
    ],
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Conveyancers", href: "/services/conveyancers" },
      ]}
      jsonLdData={[breadcrumbJsonLd, ...jsonLd]}
    >
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <RequirementsSection />
      <PricingSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </PageWrapper>
  );
}
