import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import { generateMetadata, organizationSchema } from "@/lib/seo-utils";
import { generateStateLocalBusinessSchema, StateBusinessData } from "@/lib/schema-templates";
import { InternalLinks } from "@/components/seo/internal-links";
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

// Enhanced SEO Metadata for WA Real Estate Trust Account Auditing
export const metadata: Metadata = {
  title: {
    default:
      "WA Real Estate Trust Account Auditing | REIWA Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional WA real estate trust account auditing services compliant with REIWA and Real Estate and Business Agents Act 1978. Department of Commerce WA registered auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert Western Australia compliance.",
  keywords: [
    "WA real estate trust account auditing",
    "Western Australia real estate trust account auditing",
    "trust account auditing WA",
    "professional trust account auditing Western Australia",
    "WA trust account auditing services",
    "Western Australia real estate auditing",
    "REIWA audit requirements",
    "Real Estate and Business Agents Act 1978",
    "WA trust account compliance",
    "Western Australia real estate audit requirements",
    "WA estate agent trust account",
    "Western Australia real estate compliance audit",
    "WA property agent audit",
    "Western Australia trust account auditor",
    "WA real estate audit cost",
    "Western Australia estate agent audit deadline",
    "WA real estate audit report",
    "Western Australia trust account audit due date",
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
    canonical: "/services/real-estate-agents/wa",
  },
  openGraph: {
    title:
      "WA Real Estate Trust Account Auditing | REIWA Compliant | AuditsPro AU",
    description:
      "Professional WA real estate trust account auditing services compliant with REIWA and Real Estate and Business Agents Act 1978. Department of Commerce WA registered auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST.",
    url: "/services/real-estate-agents/wa",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/wa-real-estate-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "WA Real Estate Trust Account Auditing Services - REIWA Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WA Real Estate Trust Account Auditing | AuditsPro AU",
    description:
      "REIWA compliant trust account auditing for real estate agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/wa-real-estate-audit-auditspro-au.png"],
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

// Western Australia State Data for LocalBusiness Schema
const waStateData: StateBusinessData = {
  state: "Western Australia",
  stateAbbr: "WA",
  serviceType: "Real Estate Trust Account Auditing",
  regulatoryBody: "Real Estate Institute of Western Australia (REIWA)",
  complianceAct: "Real Estate and Business Agents Act 1978",
  majorCities: ["Perth", "Fremantle", "Joondalup", "Rockingham", "Mandurah", "Bunbury", "Geraldton", "Kalgoorlie"],
  complianceDetails: {
    auditDeadline: "Within 3 months of financial year end",
    penaltyAmount: "Up to $25,000 for non-compliance",
    licenseRequirement: "Real estate license under Real Estate and Business Agents Act 1978"
  }
};

// Generate Enhanced LocalBusiness Schema for Western Australia
const localBusinessSchema = generateStateLocalBusinessSchema(waStateData);

export default function WARealEstateAgentsPage() {
  // Service Schema for WA Real Estate Trust Account Auditing
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "WA Real Estate Trust Account Auditing",
    "description": "Professional trust account auditing services for Western Australia real estate agents, compliant with REIWA and Real Estate and Business Agents Act 1978.",
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
      "name": "Western Australia",
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
      "name": "WA Real Estate Trust Account Auditing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Trust Account Auditing",
            "description": "Comprehensive trust account auditing for WA real estate agents"
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
        "name": "What are the WA real estate trust account auditing requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Western Australia real estate agents must have their trust accounts audited annually by a qualified auditor, as required under the Real Estate and Business Agents Act 1978 and REIWA regulations."
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
          { label: "WA", href: "/services/real-estate-agents/wa" },
        ]}
      />

      {/* Page Sections */}
      <HeroSection state="WA" stateName="Western Australia" />
      <BenefitsSection />
      <FeaturesSection />
      <InternalLinks linkSet="realEstate" />
      <RequirementsSection state="WA" stateName="Western Australia" />
      <PricingSection state="WA" stateName="Western Australia" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <TrustAccountAuditSection state="WA" />
    </>
  );
}