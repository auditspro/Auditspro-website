import React from "react";
import { Metadata } from "next";
import { PricingPageClient } from "./pricing-client";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";

// SEO Metadata
export const metadata: Metadata = {
  title: "Trust Account Audit Pricing | Fixed Rates by State & Profession | AuditsPro AU",
  description:
    "Transparent trust account audit pricing for all Australian states and professions. Fixed rates from $549 + GST with no hidden fees. Compare pricing for Real Estate, Solicitors, Accountants, and more.",
  keywords: [
    "trust account audit pricing",
    "audit fees australia",
    "trust account audit cost",
    "fixed audit pricing",
    "state audit pricing",
    "professional audit rates",
    "transparent audit fees",
    "no hidden audit costs",
    "audit pricing by state",
    "trust account audit rates",
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
    canonical: "/pricing",
  },
  openGraph: {
    title: "Trust Account Audit Pricing | AuditsPro AU",
    description:
      "Transparent fixed pricing for trust account audits across Australia. No hidden fees, professional service, fast turnaround.",
    url: "/pricing",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Trust Account Audit Pricing - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audit Pricing | AuditsPro AU",
    description:
      "Fixed transparent pricing for trust account audits. No hidden fees, professional service.",
    images: ["/twitter-pricing.jpg"],
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
  name: "Trust Account Audit Pricing",
  description:
    "Transparent fixed pricing for professional trust account audits across all Australian states and professions.",
  url: "https://auditspro.com.au/pricing",
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
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Standard Trust Account Audit",
      price: "549",
      priceCurrency: "AUD",
      description: "Professional trust account audit for most professions",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Solicitor Trust Account Audit",
      price: "649",
      priceCurrency: "AUD",
      description: "Specialized trust account audit for legal practices",
      availability: "https://schema.org/InStock",
    },
  ],
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
        name: "Pricing",
        item: "https://auditspro.com.au/pricing",
      },
    ],
  },
};

// FAQ Structured Data
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a trust account audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our trust account audits start from $549 + GST for most professions, with specialized pricing for solicitors at $649 + GST. All pricing is fixed with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do prices vary by state?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our pricing is consistent across all Australian states and territories. We maintain fixed transparent pricing regardless of your location.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any additional fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, our pricing is all-inclusive with no hidden fees. The quoted price covers the complete audit process including report delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for multiple trust accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer volume discounts for businesses with multiple trust accounts. Contact us for a customized quote.",
      },
    },
  ],
};



export default function PricingPage() {
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
        name: "Pricing",
        item: "/pricing",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Set Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />
      
      {/* Structured Data */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <PricingPageClient />
    </div>
  );
}