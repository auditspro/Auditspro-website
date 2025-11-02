import { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  HowItWorksHero,
  DetailedProcessSteps,
  StateComplianceSection,
  TimelineSection,
  RequirementsChecklist,
  PricingBreakdown,
  SecuritySection,
  FAQSection,
  FinalCTA,
} from "@/components/pagerefactors/services/how-it-works";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "How It Works - Trust Account Audit Process | Step-by-Step Guide | AuditsPro AU",
  description:
    "Complete guide to our trust account audit process. Learn how to submit your audit in 15-30 minutes with email verification, ABN lookup, state-specific compliance, and secure submission. IPA qualified auditors.",
  keywords: [
    "trust account audit process",
    "how to submit audit",
    "audit process steps",
    "ABN verification audit",
    "NSW UID requirements",
    "trust account compliance",
    "audit submission guide",
    "online audit process",
    "Regulatory audit submission",
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
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works - Complete Trust Account Audit Guide - AuditsPro AU",
    description:
      "Step-by-step guide to submitting your trust account audit online. Email verification, ABN lookup, state compliance, and secure submission in 15-30 minutes.",
    url: "/how-it-works",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-how-it-works.jpg",
        width: 1200,
        height: 630,
        alt: "How It Works - Trust Account Audit Process Guide",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works - Trust Account Audit Process Guide",
    description:
      "Complete guide to submitting your trust account audit online in 15-30 minutes.",
    images: ["/twitter-how-it-works.jpg"],
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Submit a Trust Account Audit with AuditsPro AU",
  description:
    "Step-by-step guide to submitting your trust account audit online through AuditsPro AU's secure portal",
  totalTime: "PT30M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "AUD",
    value: "549-749",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Email Verification & Registration",
      text: "Enter your email address and verify with the code sent to your inbox. Complete your profile with contact details and business information.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Visit /start-audit and enter your email address",
        },
        {
          "@type": "HowToDirection",
          text: "Check your inbox for verification code",
        },
        {
          "@type": "HowToDirection",
          text: "Complete profile setup with name, mobile, and company details",
        },
      ],
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Business Verification via ABN",
      text: "Search for your business using ABN or company name. We automatically populate business details from the Australian Business Register.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Enter your 11-digit ABN or business name",
        },
        {
          "@type": "HowToDirection",
          text: "Review auto-populated business information",
        },
        {
          "@type": "HowToDirection",
          text: "Confirm business details are correct",
        },
      ],
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Trust Account Configuration",
      text: "Add your trust account details including account name, BSB, account number, and state-specific compliance information like NSW UID.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Select trust account type (Rental or Sales)",
        },
        {
          "@type": "HowToDirection",
          text: "Enter BSB and account number",
        },
        {
          "@type": "HowToDirection",
          text: "Add state-specific details (NSW UID, licenses, etc.)",
        },
        {
          "@type": "HowToDirection",
          text: "Select property management software",
        },
      ],
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review & Submit",
      text: "Review all information, see transparent pricing breakdown, and securely submit your audit request.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Review business and trust account information",
        },
        {
          "@type": "HowToDirection",
          text: "View pricing breakdown with GST",
        },
        {
          "@type": "HowToDirection",
          text: "Submit secure encrypted audit request",
        },
        {
          "@type": "HowToDirection",
          text: "Receive confirmation and audit timeline",
        },
      ],
    },
  ],
  tool: [
    {
      "@type": "HowToTool",
      name: "ABN (Australian Business Number)",
    },
    {
      "@type": "HowToTool",
      name: "Trust Account BSB and Account Number",
    },
    {
      "@type": "HowToTool",
      name: "NSW Unique Identifying Number (if applicable)",
    },
    {
      "@type": "HowToTool",
      name: "License Numbers and Details",
    },
  ],
};

export default function HowItWorksPage() {
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
        name: "How It Works",
        item: "/how-it-works",
      },
    ],
  };

  return (
    <>
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
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "How It Works", href: "/how-it-works" },
        ]}
      />

      <HowItWorksHero />
      <DetailedProcessSteps />
      <StateComplianceSection />
      <RequirementsChecklist />
      <TimelineSection />
      <PricingBreakdown />
      <SecuritySection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
