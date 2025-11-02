import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import { CrossPageCTA } from "@/components/ui/cross-page-cta";
import {
  HeroSection,
  BenefitsSection,
  ServicesGrid,
  ProcessSection,
  FAQSection,
  faqSchema,
} from "@/components/pagerefactors/services";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Trust Account Auditing Services Australia | Professional Trust Account Audits",
  description:
    "Expert trust account auditing services for Australian professionals. Regulatory compliant trust account audits for real estate agents, conveyancers, solicitors, accountants & more. Professional trust account auditing from $549 + GST. Fast 5-10 day completion.",
  keywords: [
    "trust account auditing",
    "trust account auditing services",
    "professional trust account auditing",
    "trust account auditing australia",
    "trust account audit",
    "trust account audit services",
    "state regulator trust account audit",
    "professional trust account audit",
    "trust account compliance audit",
    "real estate trust account auditing",
    "conveyancer trust account auditing",
    "solicitor trust account auditing",
    "accountant trust account auditing",
    "mortgage broker trust account auditing",
    "SMSF trust account auditing",
    "business broker trust account auditing",
    "trust account auditing cost",
    "trust account auditing requirements",
    "trust account compliance",
    "state regulator compliance audit",
    "professional auditing services",
    "trust fund auditing",
    "client money auditing",
    "statutory trust account auditing",
    "annual trust account auditing",
    "trust account auditing report",
    "trust account auditor",
    "Australian trust account auditing",
    "trust account auditing Melbourne",
    "trust account auditing Sydney",
    "trust account auditing Brisbane",
    "trust account auditing Perth",
    "trust account auditing Adelaide",
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
    canonical: "/services",
  },
  openGraph: {
    title: "Trust Account Auditing Services Australia | Professional Trust Account Audits",
    description:
      "Expert trust account auditing services for Australian professionals. Regulatory compliant trust account audits with fixed pricing, fast turnaround, and professional auditors.",
    url: "/services",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-services-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Trust Account Audit Services Australia - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Trust Account Audit Services Australia | AuditsPro AU",
    description:
      "Leading trust account audit services for Australian professionals. State regulator compliant audits, fixed pricing, expert auditors.",
    images: ["/twitter-services-audit.jpg"],
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
};

// JSON-LD Structured Data for Services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Trust Account Audit Services",
  description:
    "Comprehensive trust account audit services for Australian professionals including real estate agents, conveyancers, solicitors, accountants, mortgage brokers, SMSF trustees, and business brokers. State regulator compliant audits with fixed pricing and fast turnaround.",
  url: "https://auditspro.com.au/services",
  provider: {
    "@type": "Organization",
    name: "AuditsPro AU",
    url: "https://auditspro.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Albert Coates Lane",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-1300-AUDITS",
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "AU",
    },
  },
  serviceType: "Trust Account Auditing",
  audience: {
    "@type": "Audience",
    audienceType: "Australian Professional Services",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description:
      "Professional trust account audit services starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate Agent Trust Account Audit",
          description:
            "State regulator compliant trust account audits for real estate agents",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conveyancer Trust Account Audit",
          description: "Professional trust account audits for conveyancers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solicitor Trust Account Audit",
          description: "Legal profession trust account audits for solicitors",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Accountant Trust Account Audit",
          description: "Professional trust account audits for accountants",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Broker Trust Account Audit",
          description:
            "NCCP compliant trust account audits for mortgage brokers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SMSF Trustee Trust Account Audit",
          description:
            "SMSF trust account audits for self-managed super fund trustees",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Broker Trust Account Audit",
          description: "Professional trust account audits for business brokers",
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
    ],
  },
};

export default function ServicesPage() {
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
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50">
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
      <ServicesGrid />
      <ProcessSection />
      <FAQSection />

      {/* Cross-Page CTA */}
      <CrossPageCTA variant="services-to-pricing" />
    </div>
  );
}
