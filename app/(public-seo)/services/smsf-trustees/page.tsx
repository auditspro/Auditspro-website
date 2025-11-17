import { Metadata } from "next";
import Link from "next/link";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  HeroSection as SmsfHeroSection,
  BenefitsSection as SmsfBenefitsSection,
  FeaturesSection as SmsfFeaturesSection,
  RequirementsSection as SmsfRequirementsSection,
  PricingSection as SmsfPricingSection,
  ProcessSection as SmsfProcessSection,
  FAQSection as SmsfFAQSection,
  ContactSection as SmsfContactSection,
} from "@/components/pagerefactors/services/smsf-trustees";
// Page-level utilities only; sections are rendered via modular components above

// SEO Metadata
export const metadata: Metadata = {
  title:
    "SMSF Audit Services | Self-Managed Super Fund Independent Audits",
  description:
    "Professional SMSF audit services for self-managed super fund trustees in Australia. ATO compliant independent audits with 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert SMSF auditors ensuring compliance with SIS Act and SISR.",
  keywords: [
    "SMSF audit",
    "self managed super fund audit",
    "SMSF auditor australia",
    "independent SMSF audit",
    "SMSF compliance audit",
    "super fund audit",
    "SMSF annual audit",
    "ATO SMSF audit",
    "SMSF audit cost",
    "SMSF audit requirements",
    "self managed superannuation audit",
    "SMSF trustee audit",
    "SMSF audit services",
    "SMSF compliance",
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
    canonical: "/services/smsf-trustees",
  },
  openGraph: {
    title: "SMSF Audit Services | AuditsPro AU",
    description:
      "Professional ATO compliant SMSF audits for self-managed super fund trustees. Expert auditors, fast turnaround, fixed pricing. Ensure SMSF compliance.",
    url: "/services/smsf-trustees",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-smsf-audit.jpg",
        width: 1200,
        height: 630,
        alt: "SMSF Audit Services - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMSF Audit Services | AuditsPro AU",
    description:
      "ATO compliant SMSF audits for self-managed super fund trustees. Professional auditors, fast completion, fixed pricing.",
    images: ["/twitter-smsf-audit.jpg"],
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
  name: "SMSF Audit Services",
  description:
    "Professional SMSF audit services for self-managed super fund trustees in Australia, ensuring compliance with ATO requirements and superannuation laws.",
  url: "https://auditspro.com.au/services/smsf-trustees",
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
  serviceType: "SMSF Auditing",
  audience: {
    "@type": "Audience",
    audienceType: "SMSF Trustees",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description: "SMSF audit starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SMSF Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual SMSF Audit",
          description: "Comprehensive annual SMSF compliance audit for trustees",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SMSF Compliance Review",
          description: "SMSF compliance assessment and regulatory review",
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
        name: "SMSF Trustees",
        item: "https://auditspro.com.au/services/smsf-trustees",
      },
    ],
  },
};

export default function SMSFTrusteesPage() {
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
        name: "SMSF Trustees",
        item: "/services/smsf-trustees",
      },
    ],
  };

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Set Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SMSF Trustees", href: "/services/smsf-trustees" },
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
      <main className="flex-1 bg-gradient-to-br from-slate-50 via-white to-brand-50">
        <SmsfHeroSection />
        <SmsfBenefitsSection />
        <SmsfFeaturesSection />
        <SmsfRequirementsSection />
        <SmsfPricingSection />
        <SmsfProcessSection />
        <SmsfFAQSection />
        <SmsfContactSection />
      </main>
    </div>
  );
}