import React from "react";
import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  HeroSection,
  PricingSection,
  FeaturesSection,
  WhyChooseSection,
  ProcessSection,
  ContactSection,
} from "@/components/pagerefactors/pricing";
import { CrossPageCTA } from "@/components/ui/cross-page-cta";

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

// Enhanced Pricing Schema - Comprehensive Product/Offer Structured Data
const pricingSchemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Trust Account Audit Pricing",
  description: "Transparent pricing for professional trust account audit services across Australia",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Standard Trust Account Audit",
      description: "Comprehensive trust account audit for small to medium practices including Real Estate Agents, Accountants, and Conveyancers",
      offers: {
        "@type": "Offer",
        price: "549",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2024-12-31",
        seller: {
          "@type": "Organization",
          name: "AuditsPro AU",
          url: "https://auditspro.com.au"
        },
        description: "Fixed price includes complete audit examination, compliance report, and recommendations"
      },
      category: "Professional Services",
      audience: {
        "@type": "Audience",
        audienceType: "Real Estate Agents, Accountants, Conveyancers, Mortgage Brokers"
      }
    },
    {
      "@type": "Product", 
      position: 2,
      name: "Solicitor Trust Account Audit",
      description: "Specialized trust account audit for legal practices with enhanced compliance requirements",
      offers: {
        "@type": "Offer",
        price: "649",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2024-12-31",
        seller: {
          "@type": "Organization",
          name: "AuditsPro AU",
          url: "https://auditspro.com.au"
        },
        description: "Specialized legal practice audit with enhanced regulatory compliance"
      },
      category: "Legal Services",
      audience: {
        "@type": "Audience",
        audienceType: "Solicitors, Legal Practices, Law Firms"
      }
    },
    {
      "@type": "Product",
      position: 3, 
      name: "Premium Trust Account Audit",
      description: "Advanced audit solution for large organizations with multiple trust accounts",
      offers: {
        "@type": "Offer",
        price: "749",
        priceCurrency: "AUD", 
        availability: "https://schema.org/InStock",
        priceValidUntil: "2024-12-31",
        seller: {
          "@type": "Organization",
          name: "AuditsPro AU",
          url: "https://auditspro.com.au"
        },
        description: "Comprehensive audit for complex trust account structures with priority support"
      },
      category: "Enterprise Services",
      audience: {
        "@type": "Audience",
        audienceType: "Large Practices, Multi-location Businesses, Enterprise Clients"
      }
    }
  ]
};

// Service Schema for SEO
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trust Account Audit Services",
  description: "Professional trust account audit services with transparent fixed pricing across all Australian states",
  url: "https://auditspro.com.au/pricing",
  provider: {
    "@type": "Organization",
    name: "AuditsPro AU",
    url: "https://auditspro.com.au",
    logo: "https://auditspro.com.au/audits_pro_icon/apple-touch-icon.png",
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
      telephone: "+61-2-8006-2335",
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
  serviceOutput: "Regulatory Compliant Trust Account Audit Report",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
};

// Enhanced FAQ Structured Data for Pricing
const pricingFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a trust account audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our trust account audits start from $549 + GST with transparent fixed pricing. Costs vary by profession and audit complexity: Standard audits $549, Solicitor audits $649, Premium audits $749. No hidden fees included."
      }
    },
    {
      "@type": "Question", 
      name: "Are there different prices for different states?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, pricing varies slightly by state due to different regulatory requirements. NSW, VIC, QLD, WA, SA, TAS, ACT, and NT each have specific compliance needs reflected in our transparent pricing structure."
      }
    },
    {
      "@type": "Question",
      name: "What's included in the audit price?",
      acceptedAnswer: {
        "@type": "Answer", 
        text: "Our fixed price includes complete audit examination, comprehensive compliance report, detailed recommendations, ongoing support, and regulatory-compliant documentation. No additional fees for standard audit requirements."
      }
    },
    {
      "@type": "Question",
      name: "How long does the audit process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most trust account audits are completed within 5-10 business days from receipt of all required documentation, depending on complexity and state-specific requirements."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for multiple trust accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide volume discounts for businesses with multiple trust accounts or recurring audit needs. Contact us for a customized enterprise quote with preferential pricing."
      }
    },
    {
      "@type": "Question",
      name: "Is GST included in the quoted prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All quoted prices are exclusive of GST. GST will be added to the final invoice as required by Australian tax regulations. Final price = quoted price + 10% GST."
      }
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept all major payment methods including credit cards, bank transfers, and business accounts. Payment terms are flexible with options for upfront or completion-based billing."
      }
    }
  ]
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50">
      {/* Set Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />
      
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFAQSchema) }}
      />
      
      {/* Page Content */}
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <WhyChooseSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}