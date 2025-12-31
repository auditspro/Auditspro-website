import React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "NSW SMSF Audit Services | Independent ATO-Compliant Audits",
  description:
    "Independent SMSF audits for NSW trustees. ATO-compliant financial and compliance audits under the SIS Act. Fast turnaround and fixed pricing from $549 + GST.",
  keywords: [
    "NSW SMSF audit",
    "self managed super fund audit NSW",
    "ATO SMSF audit NSW",
    "SIS Act SMSF compliance NSW",
    "SMSF audit pricing NSW",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "AuditsPro AU",
  url: "https://auditspro.com.au/services/smsf-trustees/nsw",
  areaServed: {
    "@type": "State",
    name: "New South Wales",
  },
  priceRange: "$549",
  description: "Independent ATO-compliant SMSF audits for NSW trustees.",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SMSF Audit",
  provider: {
    "@type": "AccountingService",
    name: "AuditsPro AU",
  },
  areaServed: {
    "@type": "State",
    name: "New South Wales",
  },
  description:
    "SMSF financial and compliance audits for trustees in NSW under the SIS Act and ATO guidance.",
  offers: {
    "@type": "Offer",
    price: "549.00",
    priceCurrency: "AUD",
  },
};

export default function NSWSMSFTrusteesPage() {
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

      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SMSF Trustees", href: "/services/smsf-trustees" },
          { label: "NSW", href: "/services/smsf-trustees/nsw" },
        ]}
      />

      <main className="flex-1 bg-gradient-to-br from-slate-50 via-white to-brand-50">
        <SmsfHeroSection state="NSW" stateName="New South Wales" />
        <SmsfBenefitsSection />
        <SmsfFeaturesSection />
        <SmsfRequirementsSection state="NSW" stateName="New South Wales" />
        <SmsfPricingSection state="NSW" stateName="New South Wales" />
        <SmsfProcessSection />
        <SmsfFAQSection />
        <SmsfContactSection />
      </main>
    </>
  );
}

