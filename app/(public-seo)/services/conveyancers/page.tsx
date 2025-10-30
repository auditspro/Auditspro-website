import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  HeroSection,
  FeaturesSection,
  StateRequirements,
  WhyChooseSection,
  ProcessSection,
  ContactSection,
} from "@/components/pagerefactors/services/conveyancers";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Conveyancers Trust Account Audits | ASIC Compliant Auditing Services Australia",
  description:
    "Professional trust account audit services for licensed conveyancers across Australia. ASIC compliant, fixed pricing, 5-10 day turnaround. Online cloud-based portal with IPA qualified auditors.",
  keywords: [
    "conveyancer trust account audit",
    "licensed conveyancer audit",
    "conveyancing trust account compliance",
    "ASIC compliant conveyancer audit",
    "NSW conveyancer audit",
    "VIC conveyancer audit",
    "QLD conveyancer audit",
    "conveyancer audit requirements",
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
    title: "Conveyancers Trust Account Audits - AuditsPro AU",
    description:
      "Professional ASIC compliant trust account audits for licensed conveyancers. Fixed pricing, fast turnaround, cloud-based secure portal.",
    url: "/services/conveyancers",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-conveyancers.jpg",
        width: 1200,
        height: 630,
        alt: "Conveyancers Trust Account Audit Services - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conveyancers Trust Account Audits - AuditsPro AU",
    description:
      "ASIC compliant trust account audits for licensed conveyancers across Australia.",
    images: ["/twitter-conveyancers.jpg"],
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conveyancers Trust Account Audit Services",
  description:
    "Professional ASIC compliant trust account audit services for licensed conveyancers across Australia",
  url: "https://auditspro.com.au/services/conveyancers",
  provider: {
    "@type": "Organization",
    name: "AuditsPro AU",
    url: "https://auditspro.com.au",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  serviceType: "Trust Account Auditing",
  audience: {
    "@type": "Audience",
    audienceType: "Licensed Conveyancers",
  },
  offers: {
    "@type": "Offer",
    price: "600-800",
    priceCurrency: "AUD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "600-800",
      priceCurrency: "AUD",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: "1",
        unitText: "Audit",
      },
    },
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
};

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
    <>
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
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conveyancers", href: "/services/conveyancers" },
        ]}
      />

      <HeroSection />
      <FeaturesSection />
      <StateRequirements />
      <WhyChooseSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
