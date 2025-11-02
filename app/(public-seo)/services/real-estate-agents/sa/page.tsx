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

// Enhanced SEO Metadata for SA Real Estate Trust Account Auditing
export const metadata: Metadata = {
  title: {
    default:
      "SA Real Estate Trust Account Auditing | REISA Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional SA real estate trust account auditing services compliant with REISA and Land and Business (Sale and Conveyancing) Act 1994. Consumer and Business Services SA registered auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert South Australia compliance.",
  keywords: [
    "SA real estate trust account auditing",
    "South Australia real estate trust account auditing",
    "trust account auditing SA",
    "professional trust account auditing South Australia",
    "SA trust account auditing services",
    "South Australia real estate auditing",
    "REISA audit requirements",
    "Land and Business Sale and Conveyancing Act 1994",
    "SA trust account compliance",
    "South Australia real estate audit requirements",
    "SA estate agent trust account",
    "South Australia real estate compliance audit",
    "SA property agent audit",
    "South Australia trust account auditor",
    "SA real estate audit cost",
    "South Australia estate agent audit deadline",
    "SA real estate audit report",
    "South Australia trust account audit due date",
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
    canonical: "/services/real-estate-agents/sa",
  },
  openGraph: {
    title:
      "SA Real Estate Trust Account Audit | REISA Compliant | AuditsPro AU",
    description:
      "Professional SA real estate trust account audits compliant with REISA and Land and Business (Sale and Conveyancing) Act 1994. Consumer and Business Services SA registered auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST.",
    url: "/services/real-estate-agents/sa",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/sa-real-estate-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "SA Real Estate Trust Account Audit Services - REISA Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SA Real Estate Trust Account Audit | AuditsPro AU",
    description:
      "REISA compliant trust account audits for real estate agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/sa-real-estate-audit-auditspro-au.png"],
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

// South Australia State Data for LocalBusiness Schema
const saStateData: StateBusinessData = {
  state: "South Australia",
  stateCode: "SA",
  serviceType: "Real Estate Trust Account Auditing",
  regulatoryBody: "Real Estate Institute of South Australia (REISA)",
  complianceAct: "Land and Business (Sale and Conveyancing) Act 1994",
  majorCities: ["Adelaide", "Mount Gambier", "Whyalla", "Murray Bridge", "Port Augusta", "Port Pirie", "Victor Harbor", "Gawler"]
};

// Generate Enhanced LocalBusiness Schema for South Australia
const localBusinessSchema = generateStateLocalBusinessSchema(saStateData);

export default function SARealEstateAgentsPage() {
  // Service Schema for SA Real Estate Trust Account Auditing
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SA Real Estate Trust Account Auditing",
    "description": "Professional trust account auditing services for South Australia real estate agents, compliant with REISA and Land and Business (Sale and Conveyancing) Act 1994.",
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
      "name": "South Australia",
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
      "name": "SA Real Estate Trust Account Auditing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Trust Account Auditing",
            "description": "Comprehensive trust account auditing for SA real estate agents"
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
        "name": "What are the SA real estate trust account auditing requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "South Australia real estate agents must have their trust accounts audited annually by a qualified auditor, as required under the Land and Business (Sale and Conveyancing) Act 1994 and REISA regulations."
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
          { label: "SA", href: "/services/real-estate-agents/sa" },
        ]}
      />

      {/* Page Sections */}
      <HeroSection state="SA" stateName="South Australia" />
      <BenefitsSection />
      <FeaturesSection />
      <InternalLinks links={realEstateLinks} />
      <RequirementsSection state="SA" stateName="South Australia" />
      <PricingSection state="SA" stateName="South Australia" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <TrustAccountAuditSection state="SA" />
    </>
  );
}