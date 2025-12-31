import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/pagerefactors/services/mortgage-brokers/HeroSection";
import { TrustAccountAuditSection } from "@/components/pagerefactors/services/mortgage-brokers/TrustAccountAuditSection";
import { BenefitsSection } from "@/components/pagerefactors/services/mortgage-brokers/BenefitsSection";
import { FeaturesSection } from "@/components/pagerefactors/services/mortgage-brokers/FeaturesSection";
import { RequirementsSection } from "@/components/pagerefactors/services/mortgage-brokers/RequirementsSection";
import { PricingSection } from "@/components/pagerefactors/services/mortgage-brokers/PricingSection";
import { ProcessSection } from "@/components/pagerefactors/services/mortgage-brokers/ProcessSection";
import { FAQSection } from "@/components/pagerefactors/services/mortgage-brokers/FAQSection";
import { ContactSection } from "@/components/pagerefactors/services/mortgage-brokers/ContactSection";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";

export const metadata: Metadata = {
  title: "Mortgage Broker Trust Account Audits NSW | Fixed Price $549",
  description: "Specialized trust account audits for NSW mortgage brokers and ACL holders. ASIC compliant, fast turnaround, and fixed pricing from $549. Book online.",
  keywords: "mortgage broker audit nsw, trust account audit nsw, acl audit nsw, asic audit nsw, finance broker audit",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Audits AU",
  image: "https://audits.com.au/images/logo.png",
  url: "https://audits.com.au/services/mortgage-brokers/nsw",
  telephone: "1300 000 000", // Placeholder
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  priceRange: "$549",
  description: "Specialized trust account audits for NSW mortgage brokers and ACL holders.",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mortgage Broker Trust Account Audit",
  provider: {
    "@type": "AccountingService",
    name: "Audits AU",
  },
  areaServed: {
    "@type": "State",
    name: "New South Wales",
  },
  description: "ASIC compliant trust account audits for mortgage brokers and credit licensees in NSW.",
  offers: {
    "@type": "Offer",
    price: "549.00",
    priceCurrency: "AUD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do NSW mortgage brokers need a trust account audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you hold an Australian Credit Licence (ACL) and hold client funds in a trust account, you are generally required to have that account audited annually under the NCCP Act.",
      },
    },
    {
      "@type": "Question",
      name: "When is the mortgage broker audit due in NSW?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The trust account audit report is typically due to be lodged with ASIC by 30 September (3 months after the financial year ends on 30 June).",
      },
    },
    {
      "@type": "Question",
      name: "How much does a mortgage broker audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our fixed fee for a mortgage broker trust account audit in NSW is $549 + GST per trust account.",
      },
    },
    {
      "@type": "Question",
      name: "How do I submit my audit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Audit reports (Form 70) are typically lodged online via the ASIC Regulatory Portal.",
      },
    },
  ],
};

export default function NSWMortgageBrokersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Mortgage Brokers", href: "/services/mortgage-brokers" },
          { label: "NSW", href: "/services/mortgage-brokers/nsw" },
        ]}
      />

      <HeroSection state="NSW" stateName="New South Wales" />
      <TrustAccountAuditSection state="NSW" />
      <BenefitsSection />
      <FeaturesSection />
      <RequirementsSection state="NSW" stateName="New South Wales" />
      <PricingSection state="NSW" stateName="New South Wales" />
      <ProcessSection />
      <FAQSection state="NSW" />
      <ContactSection />
    </>
  );
}
