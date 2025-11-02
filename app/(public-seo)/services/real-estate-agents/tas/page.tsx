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

// Enhanced SEO Metadata for TAS Real Estate Trust Account Auditing
export const metadata: Metadata = {
  title: {
    default:
      "TAS Real Estate Trust Account Auditing | REIT Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional TAS real estate trust account auditing services compliant with REIT and Property Agents and Land Transactions Act 2016. Consumer, Building and Occupational Services registered auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert Tasmania compliance.",
  keywords: [
    "TAS real estate trust account auditing",
    "Tasmania real estate trust account auditing",
    "trust account auditing TAS",
    "professional trust account auditing Tasmania",
    "TAS trust account auditing services",
    "Tasmania real estate auditing",
    "REIT audit requirements",
    "Property Agents and Land Transactions Act 2016",
    "TAS trust account compliance",
    "Tasmania real estate audit requirements",
    "TAS estate agent trust account",
    "Tasmania real estate compliance audit",
    "TAS property agent audit",
    "Tasmania trust account auditor",
    "TAS real estate audit cost",
    "Tasmania estate agent audit deadline",
    "TAS real estate audit report",
    "Tasmania trust account audit due date",
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
    canonical: "/services/real-estate-agents/tas",
  },
  openGraph: {
    title:
      "TAS Real Estate Trust Account Auditing | REIT Compliant | AuditsPro AU",
    description:
      "Professional TAS real estate trust account auditing services compliant with REIT and Property Agents and Land Transactions Act 2016. Consumer, Building and Occupational Services registered auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST.",
    url: "/services/real-estate-agents/tas",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/tas-real-estate-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "TAS Real Estate Trust Account Auditing Services - REIT Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAS Real Estate Trust Account Auditing | AuditsPro AU",
    description:
      "REIT compliant trust account auditing for real estate agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/tas-real-estate-audit-auditspro-au.png"],
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

// Tasmania State Data for LocalBusiness Schema
const tasStateData: StateBusinessData = {
  state: "Tasmania",
  stateCode: "TAS",
  serviceType: "Real Estate Trust Account Auditing",
  regulatoryBody: "Real Estate Institute of Tasmania (REIT)",
  complianceAct: "Property Agents and Land Transactions Act 2016",
  majorCities: ["Hobart", "Launceston", "Devonport", "Burnie", "Kingston", "Ulverstone", "Glenorchy", "Clarence"]
};

// Generate Enhanced LocalBusiness Schema for Tasmania
const localBusinessSchema = generateStateLocalBusinessSchema(tasStateData);

export default function TASRealEstateAgentsPage() {
  // Service Schema for TAS Real Estate Trust Account Auditing
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TAS Real Estate Trust Account Auditing",
    "description": "Professional trust account auditing services for Tasmania real estate agents, compliant with REIT and Property Agents and Land Transactions Act 2016.",
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
      "name": "Tasmania",
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
      "name": "TAS Real Estate Trust Account Auditing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Trust Account Auditing",
            "description": "Comprehensive trust account auditing for TAS real estate agents"
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
        "name": "What are the TAS real estate trust account auditing requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tasmania real estate agents must have their trust accounts audited annually by a qualified auditor, as required under the Property Agents and Land Transactions Act 2016 and REIT regulations."
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
          { label: "TAS", href: "/services/real-estate-agents/tas" },
        ]}
      />

      {/* Page Sections */}
      <HeroSection state="TAS" stateName="Tasmania" />
      <BenefitsSection />
      <FeaturesSection />
      <InternalLinks links={realEstateLinks} />
      <RequirementsSection state="TAS" stateName="Tasmania" />
      <PricingSection state="TAS" stateName="Tasmania" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <TrustAccountAuditSection state="TAS" />
    </>
  );
}