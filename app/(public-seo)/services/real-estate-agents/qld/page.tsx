import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import { generateMetadata } from "@/lib/seo-utils";
import { generateStateLocalBusinessSchema, StateBusinessData, organizationSchema } from "@/lib/schema-templates";
import { InternalLinks, realEstateLinks } from "@/components/seo/internal-links";
import {
  HeroSection,
  BenefitsSection,
  FeaturesSection,
  RequirementsSection,
  PricingSection,
  ProcessSection,
  FAQSection,
  ContactSection,
  TrustAccountAuditSection,
} from "@/components/pagerefactors/services/real-estate-agents";

// Enhanced SEO Metadata for QLD Real Estate Trust Account Auditing
export const metadata: Metadata = {
  title: {
    default:
      "QLD Real Estate Trust Account Auditing | REIAQ Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional QLD real estate trust account auditing services compliant with REIAQ and Property Occupations Act 2014. Queensland Law Society registered auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert Queensland compliance.",
  keywords: [
    "QLD real estate trust account auditing",
    "Queensland real estate trust account auditing",
    "trust account auditing QLD",
    "professional trust account auditing Queensland",
    "QLD trust account auditing services",
    "Queensland real estate auditing",
    "REIAQ audit requirements",
    "Property Occupations Act 2014",
    "QLD trust account compliance",
    "Queensland real estate audit requirements",
    "QLD estate agent trust account",
    "Queensland real estate compliance audit",
    "QLD property agent audit",
    "Queensland trust account auditor",
    "QLD real estate audit cost",
    "Queensland estate agent audit deadline",
    "QLD real estate audit report",
    "Queensland trust account audit due date",
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
    canonical: "/services/real-estate-agents/qld",
  },
  openGraph: {
    title:
      "QLD Real Estate Trust Account Audit | REIAQ Compliant | AuditsPro AU",
    description:
      "Professional QLD real estate trust account audits compliant with REIAQ and Property Occupations Act 2014. Queensland Law Society registered auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST.",
    url: "/services/real-estate-agents/qld",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/qld-real-estate-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "QLD Real Estate Trust Account Audit Services - REIAQ Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QLD Real Estate Trust Account Audit | AuditsPro AU",
    description:
      "REIAQ compliant trust account audits for real estate agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/qld-real-estate-audit-auditspro-au.png"],
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

// Queensland State Data for LocalBusiness Schema
const qldStateData: StateBusinessData = {
  state: "Queensland",
  stateCode: "QLD",
  serviceType: "Real Estate Trust Account Auditing",
  regulatoryBody: "Real Estate Institute of Queensland (REIQ)",
  complianceAct: "Property Occupations Act 2014",
  majorCities: ["Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns", "Toowoomba", "Rockhampton", "Mackay"]
};

// Generate Enhanced LocalBusiness Schema for Queensland
const localBusinessSchema = generateStateLocalBusinessSchema(qldStateData);

export default function QLDRealEstateAgentsPage() {
  // Service Schema for QLD Real Estate Trust Account Auditing
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "QLD Real Estate Trust Account Auditing",
    "description": "Professional trust account auditing services for Queensland real estate agents, compliant with REIAQ and Property Occupations Act 2014.",
    "provider": {
      "@type": "Organization",
      "name": "AuditsPro AU",
      "url": "https://auditspro.com.au",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-1300-AUDITS",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English"
      }
    },
    "serviceType": "Trust Account Auditing",
    "audience": {
      "@type": "Audience",
      "audienceType": "Real Estate Agents"
    },
    "areaServed": {
      "@type": "State",
      "name": "Queensland",
      "containedInPlace": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "549",
      "priceCurrency": "AUD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "549",
        "priceCurrency": "AUD",
        "valueAddedTaxIncluded": false
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "QLD Real Estate Trust Account Auditing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Trust Account Auditing",
            "description": "Comprehensive trust account auditing for QLD real estate agents"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Urgent Trust Account Auditing",
            "description": "Expedited trust account auditing with 3-5 day turnaround"
          }
        }
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the QLD real estate trust account auditing requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Queensland real estate agents must have their trust accounts audited annually by a qualified auditor, as required under the Property Occupations Act 2014 and REIAQ regulations."
        }
      }
    ]
  };

  return (
    <>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Real Estate Agents", href: "/services/real-estate-agents" },
          { label: "QLD", href: "/services/real-estate-agents/qld" },
        ]}
      />

      {/* Page Sections */}
      <HeroSection state="QLD" stateName="Queensland" />
      <BenefitsSection />
      <FeaturesSection />
      <InternalLinks links={realEstateLinks} />
      <RequirementsSection state="QLD" stateName="Queensland" />
      <PricingSection state="QLD" stateName="Queensland" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <TrustAccountAuditSection state="QLD" />
    </>
  );
}