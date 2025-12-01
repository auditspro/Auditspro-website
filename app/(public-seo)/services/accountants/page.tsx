import { Metadata } from "next";
import {
  HeroSection,
  BenefitsSection,
  FeaturesSection,
  RequirementsSection,
  PricingSection,
  ProcessSection,
  FAQSection,
  ContactSection,
} from "@/components/pagerefactors/services/accountants";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
// Removed lucide-react icon imports to align with shared Heroicons usage

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Trust Account Audit for Accountants | CPA CAANZ IPA Compliant Audits",
  description:
    "Professional trust account audits for accountants in Australia. CPA, CA ANZ, and IPA compliant audits under APES 310. 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert auditors specializing in accounting practice compliance.",
  keywords: [
    "accountant trust account audit",
    "accounting practice audit australia",
    "CPA trust account audit",
    "CA ANZ trust account audit",
    "IPA trust account audit",
    "APES 310 compliance audit",
    "accounting trust account",
    "accountant audit services",
    "trust account auditor accounting",
    "accountant compliance",
    "accounting practice trust account audit",
    "accountant audit requirements",
    "trust account audit cost accounting",
    "client money audit accountant",
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
    canonical: "/services/accountants",
  },
  openGraph: {
    title: "Trust Account Audit for Accountants | AuditsPro AU",
    description:
      "Professional CPA, CA ANZ, and IPA compliant trust account audits for accountants. Expert auditors, fast turnaround, fixed pricing. Ensure APES 310 compliance.",
    url: "/services/accountants",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-accountant-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Trust Account Audit for Accountants - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audit for Accountants | AuditsPro AU",
    description:
      "CPA, CA ANZ, and IPA compliant trust account audits for accountants. Professional auditors, fast completion, fixed pricing.",
    images: ["/twitter-accountant-audit.jpg"],
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
  name: "Trust Account Audit for Accountants",
  description:
    "Professional trust account audit services specifically designed for accountants in Australia, ensuring compliance with CPA, CA ANZ, IPA, and APES 310 requirements.",
  url: "https://auditspro.com.au/services/accountants",
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
    audienceType: "Accountants",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description: "Trust account audit starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Accountant Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual Trust Account Audit",
          description: "Comprehensive annual trust account compliance audit under APES 310",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Client Money Compliance Review",
          description: "Trust account compliance assessment for client money handling",
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
        name: "Accountants",
        item: "https://auditspro.com.au/services/accountants",
      },
    ],
  },
};

export default function AccountantsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do accountants require APES 310 compliant trust account audits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Accounting practices handling client money must have APES 310 compliant trust account audits, supported by CPA, CA ANZ, and IPA requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the accounting trust account audit take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Completion typically occurs within 5–10 business days from receiving complete documentation, with a 24‑hour initial response.",
        },
      },
      {
        "@type": "Question",
        name: "What is the pricing for accounting trust account audits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Audits start from $549 + GST with transparent fixed pricing for standard scope.",
        },
      },
    ],
  };
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
        name: "Accountants",
        item: "/services/accountants",
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
          { label: "Accountants", href: "/services/accountants" },
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
        {/* Inject structured data blocks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Page Components - aligned with Real Estate/Conveyancers/Solicitors */}
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