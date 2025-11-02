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

// Enhanced SEO Metadata for ACT Real Estate Trust Account Auditing
export const metadata: Metadata = {
  title: {
    default:
      "ACT Real Estate Trust Account Auditing | ACTREIQ Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional ACT real estate trust account auditing services compliant with ACTREIQ and Agents Act 2003. Access Canberra registered auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert Australian Capital Territory compliance.",
  keywords: [
    "ACT real estate trust account auditing",
    "Australian Capital Territory real estate trust account auditing",
    "trust account auditing ACT",
    "professional trust account auditing Australian Capital Territory",
    "ACT trust account auditing services",
    "Australian Capital Territory real estate auditing",
    "ACTREIQ audit requirements",
    "Agents Act 2003",
    "ACT trust account compliance",
    "Australian Capital Territory real estate audit requirements",
    "ACT estate agent trust account",
    "Australian Capital Territory real estate compliance audit",
    "ACT property agent audit",
    "Australian Capital Territory trust account auditor",
    "ACT real estate audit cost",
    "Australian Capital Territory estate agent audit deadline",
    "ACT real estate audit report",
    "Australian Capital Territory trust account audit due date",
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
    canonical: "/services/real-estate-agents/act",
  },
  openGraph: {
    title:
      "ACT Real Estate Trust Account Auditing | ACTREIQ Compliant | AuditsPro AU",
    description:
      "Professional ACT real estate trust account auditing services compliant with ACTREIQ and Agents Act 2003. Access Canberra registered auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST.",
    url: "/services/real-estate-agents/act",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/act-real-estate-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "ACT Real Estate Trust Account Auditing Services - ACTREIQ Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT Real Estate Trust Account Auditing | AuditsPro AU",
    description:
      "ACTREIQ compliant trust account auditing for real estate agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/act-real-estate-audit-auditspro-au.png"],
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

// Australian Capital Territory State Data for LocalBusiness Schema
const actStateData: StateBusinessData = {
  state: "Australian Capital Territory",
  stateCode: "ACT",
  serviceType: "Real Estate Trust Account Auditing",
  regulatoryBody: "ACT Real Estate Institute of Queensland (ACTREIQ)",
  complianceAct: "Agents Act 2003",
  majorCities: ["Canberra", "Gungahlin", "Tuggeranong", "Woden", "Belconnen", "Molonglo Valley", "Jerrabomberra", "Queanbeyan"]
};

// Generate Enhanced LocalBusiness Schema for Australian Capital Territory
const localBusinessSchema = generateStateLocalBusinessSchema(actStateData);

export default function ACTRealEstateAgentsPage() {
  // Service Schema for ACT Real Estate Trust Account Auditing
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ACT Real Estate Trust Account Auditing",
    "description": "Professional trust account auditing services for Australian Capital Territory real estate agents, compliant with ACTREIQ and Agents Act 2003.",
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
      "name": "Australian Capital Territory",
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
      "name": "ACT Real Estate Trust Account Auditing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Trust Account Auditing",
            "description": "Comprehensive trust account auditing for ACT real estate agents"
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
        "name": "What are the ACT real estate trust account auditing requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Australian Capital Territory real estate agents must have their trust accounts audited annually by a qualified auditor, as required under the Agents Act 2003 and ACTREIQ regulations."
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
          { label: "ACT", href: "/services/real-estate-agents/act" },
        ]}
      />

      {/* Page Sections */}
      <HeroSection state="ACT" stateName="Australian Capital Territory" />
      <BenefitsSection />
      <FeaturesSection />
      <InternalLinks links={realEstateLinks} />
      <RequirementsSection state="ACT" stateName="Australian Capital Territory" />
      <PricingSection state="ACT" stateName="Australian Capital Territory" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <TrustAccountAuditSection state="ACT" />
    </>
  );
}