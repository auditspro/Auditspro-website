import { Metadata } from "next";
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
} from "@/components/pagerefactors/services/mortgage-brokers";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Mortgage Broker Trust Account Audit Services | NCCP Compliance Audits",
  description:
    "Professional trust account audit services for mortgage brokers in Australia. Ensure regulatory compliance and NCCP requirements. 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert auditors specializing in mortgage broker trust account compliance.",
  keywords: [
    "mortgage broker trust account audit",
    "mortgage broker audit",
    "trust account audit mortgage broker",
    "mortgage broker compliance audit",
    "regulatory mortgage broker audit",
    "NCCP compliance audit",
    "mortgage broker trust fund audit",
    "home loan broker audit",
    "mortgage broker audit cost",
    "mortgage broker audit requirements",
    "regulatory trust account audit",
    "mortgage broker compliance",
    "home loan trust account",
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
    canonical: "/services/mortgage-brokers",
  },
  openGraph: {
    title: "Mortgage Broker Trust Account Audit Services | AuditsPro AU",
    description:
      "Professional trust account audits for mortgage brokers. Ensure regulatory compliance and NCCP requirements. Expert auditors, fast turnaround, fixed pricing.",
    url: "/services/mortgage-brokers",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-mortgage-broker-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Mortgage Broker Trust Account Audit Services - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Broker Trust Account Audit Services | AuditsPro AU",
    description:
      "Professional trust account audits for mortgage brokers. Regulatory compliance, NCCP requirements, expert auditors, fast completion.",
    images: ["/twitter-mortgage-broker-audit.jpg"],
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

// Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mortgage Broker Trust Account Audit Services",
  description:
    "Professional trust account audit services for mortgage brokers in Australia, ensuring regulatory compliance and NCCP requirements.",
  url: "https://auditspro.com.au/services/mortgage-brokers",
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
    audienceType: "Mortgage Brokers",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description: "Mortgage broker trust account audit starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mortgage Broker Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trust Account Audit",
          description: "Comprehensive trust account audit for mortgage brokers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Regulatory Compliance Review",
          description: "Regulatory compliance assessment and review for mortgage brokers",
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
        name: "Mortgage Brokers",
        item: "https://auditspro.com.au/services/mortgage-brokers",
      },
    ],
  },
};

export default function MortgageBrokersPage() {
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
        name: "Mortgage Brokers",
        item: "/services/mortgage-brokers",
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
          { label: "Mortgage Brokers", href: "/services/mortgage-brokers" },
        ]}
      />
      
      {/* Structured Data */}
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

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <RequirementsSection />
        <PricingSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}