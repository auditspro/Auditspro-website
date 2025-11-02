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

// Enhanced SEO Metadata for NT Real Estate Trust Account Auditing
export const metadata: Metadata = {
  title: {
    default:
      "NT Real Estate Trust Account Auditing | REINT Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional NT real estate trust account auditing services compliant with REINT and Agents Licensing Act 1979. Department of Business registered auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert Northern Territory compliance.",
  keywords: [
    "NT real estate trust account auditing",
    "Northern Territory real estate trust account auditing",
    "trust account auditing NT",
    "professional trust account auditing Northern Territory",
    "NT trust account auditing services",
    "Northern Territory real estate auditing",
    "REINT audit requirements",
    "Agents Licensing Act 1979",
    "NT trust account compliance",
    "Northern Territory real estate audit requirements",
    "NT estate agent trust account",
    "Northern Territory real estate compliance audit",
    "NT property agent audit",
    "Northern Territory trust account auditor",
    "NT real estate audit cost",
    "Northern Territory estate agent audit deadline",
    "NT real estate audit report",
    "Northern Territory trust account audit due date",
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
    canonical: "/services/real-estate-agents/nt",
  },
  openGraph: {
    title:
      "NT Real Estate Trust Account Auditing | REINT Compliant | AuditsPro AU",
    description:
      "Professional NT real estate trust account auditing services compliant with REINT and Agents Licensing Act 1979. Department of Business registered auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST.",
    url: "/services/real-estate-agents/nt",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/nt-real-estate-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "NT Real Estate Trust Account Auditing Services - REINT Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NT Real Estate Trust Account Auditing | AuditsPro AU",
    description:
      "REINT compliant trust account auditing for real estate agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/nt-real-estate-audit-auditspro-au.png"],
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

// Northern Territory State Data for LocalBusiness Schema
const ntStateData: StateBusinessData = {
  state: "Northern Territory",
  stateAbbr: "NT",
  serviceType: "Real Estate Trust Account Auditing",
  regulatoryBody: "Real Estate Institute of Northern Territory (REINT)",
  complianceAct: "Agents Licensing Act 1979",
  majorCities: ["Darwin", "Alice Springs", "Palmerston", "Katherine", "Nhulunbuy", "Tennant Creek", "Casuarina", "Marrara"],
  complianceDetails: {
    auditDeadline: "Within 3 months of financial year end",
    penaltyAmount: "Up to $15,000 for non-compliance",
    licenseRequirement: "Agent license under Agents Licensing Act 1979"
  }
};

// Generate Enhanced LocalBusiness Schema for Northern Territory
const localBusinessSchema = generateStateLocalBusinessSchema(ntStateData);

export default function NTRealEstateAgentsPage() {
  // Service Schema for NT Real Estate Trust Account Auditing
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NT Real Estate Trust Account Auditing",
    "description": "Professional trust account auditing services for Northern Territory real estate agents, compliant with REINT and Agents Licensing Act 1979.",
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
      "name": "Northern Territory",
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
      "name": "NT Real Estate Trust Account Auditing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Trust Account Auditing",
            "description": "Comprehensive trust account auditing for NT real estate agents"
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
        "name": "What are the NT real estate trust account auditing requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Northern Territory real estate agents must have their trust accounts audited annually by a qualified auditor, as required under the Agents Licensing Act 1979 and REINT regulations."
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
          { label: "NT", href: "/services/real-estate-agents/nt" },
        ]}
      />

      {/* Page Sections */}
      <HeroSection state="NT" stateName="Northern Territory" />
      <BenefitsSection />
      <FeaturesSection />
      <InternalLinks linkSet="realEstate" />
      <RequirementsSection state="NT" stateName="Northern Territory" />
      <PricingSection state="NT" stateName="Northern Territory" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <TrustAccountAuditSection state="NT" />
    </>
  );
}