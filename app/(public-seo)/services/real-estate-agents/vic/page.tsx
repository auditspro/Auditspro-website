import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo-utils";
import { organizationSchema, generateStateLocalBusinessSchema, StateBusinessData } from "@/lib/schema-templates";
import { InternalLinks, realEstateLinks } from "@/components/seo/internal-links";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
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

// Enhanced SEO Metadata for VIC Real Estate Trust Account Audits
export const metadata: Metadata = {
  title: {
    default:
      "VIC Real Estate Trust Account Auditing | Consumer Affairs Victoria Compliant | AuditsPro AU",
    template: "%s | AuditsPro AU",
  },
  description:
    "Professional VIC real estate trust account auditing services compliant with Consumer Affairs Victoria requirements. Consumer Affairs Victoria registered auditors, 5-10 day completion, fixed pricing from $549 + GST. Expert Estate Agents Act 1980 compliance.",
  keywords: [
    "VIC real estate trust account auditing",
    "Victoria real estate trust account auditing",
    "trust account auditing VIC",
    "trust account auditing Victoria",
    "VIC trust account audit",
    "Victoria real estate audit",
    "Consumer Affairs Victoria audit",
    "Estate Agents Act 1980",
    "VIC trust account compliance",
    "Victoria real estate audit requirements",
    "VIC estate agent trust account",
    "Victoria real estate compliance audit",
    "VIC property agent audit",
    "Victoria trust account auditor",
    "VIC real estate audit cost",
    "Victoria estate agent audit deadline",
    "VIC real estate audit report",
    "Victoria trust account audit due date",
    "VIC property management audit",
    "Victoria real estate licensing audit",
    "VIC trust account reconciliation",
    "Victoria real estate audit online",
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
    canonical: "/services/real-estate-agents/vic",
  },
  openGraph: {
    title:
      "VIC Real Estate Trust Account Audit | Consumer Affairs Victoria Compliant | AuditsPro AU",
    description:
      "Professional VIC real estate trust account audits compliant with Consumer Affairs Victoria requirements. Consumer Affairs Victoria registered auditors, fast 5-10 day turnaround, fixed pricing from $549 + GST.",
    url: "/services/real-estate-agents/vic",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/images/vic-real-estate-audit-auditspro-au.png",
        width: 1200,
        height: 630,
        alt: "VIC Real Estate Trust Account Audit Services - Consumer Affairs Victoria Compliant - AuditsPro Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIC Real Estate Trust Account Audit | AuditsPro AU",
    description:
      "Consumer Affairs Victoria compliant trust account audits for real estate agents. Professional auditors, fast completion, transparent fixed pricing.",
    images: ["/images/vic-real-estate-audit-auditspro-au.png"],
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

// Victoria-specific state data for LocalBusiness schema
const vicStateData: StateBusinessData = {
  state: "Victoria",
  stateCode: "VIC",
  serviceType: "Real Estate Agents",
  regulatoryBody: "Consumer Affairs Victoria",
  complianceAct: "Estate Agents Act 1980",
  dueDate: "31 March annually",
  majorCities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"]
};

// Enhanced VIC-specific JSON-LD structured data with LocalBusiness schema
const localBusinessSchema = generateStateLocalBusinessSchema(vicStateData);

export default function VICRealEstateAgentsPage() {
  return (
    <>
      {/* Enhanced Structured Data with LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Real Estate Agents", href: "/services/real-estate-agents" },
          { label: "VIC", href: "/services/real-estate-agents/vic" },
        ]}
      />

      {/* Page Sections */}
      <HeroSection state="VIC" stateName="Victoria" />
      <BenefitsSection />
      <FeaturesSection />
      <RequirementsSection state="VIC" stateName="Victoria" />
      <PricingSection state="VIC" stateName="Victoria" />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <TrustAccountAuditSection state="VIC" />
      
      {/* Enhanced Internal Linking for SEO */}
      <InternalLinks links={realEstateLinks} />
    </>
  );
}