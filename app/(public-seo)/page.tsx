import type { Metadata } from "next";
import { Hero } from "@/components/homepage/hero";
import { InfoOverview } from "@/components/homepage/info-overview";
import { TrustProof } from "@/components/homepage/trust-proof";
import { HowItWorks } from "@/components/homepage/how-it-works";
import { PlatformOverview } from "@/components/homepage/platform-overview";
import { FAQ } from "@/components/homepage/faq";

export const metadata: Metadata = {
  title: "Trust Account Audits | AuditsPro",
  description:
    "Professional trust account audits with a unified, online workflow. Request audits and communicate directly in the portal. Fixed pricing and fast turnaround.",
  keywords: "trust account audit, ASIC compliance, real estate audit, conveyancer audit, solicitor audit, accountant audit, Australia",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Trust Account Audits | AuditsPro",
    description:
      "Professional trust account audits delivered online. Unified portal workflow for requests and communication.",
    url: "/",
    siteName: "AuditsPro",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AuditsPro - Professional Trust Account Audits"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audits | AuditsPro",
    description: "Professional trust account audits with unified online workflow, fixed pricing and fast turnaround.",
    images: ["/og-image.jpg"]
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

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Hero />
      <PlatformOverview />
      {/* Removed extra hero variants and logo comparison for finalised landing */}
      {/* <HeroTwo /> */}
      {/* <HeroThree /> */}
      {/* <LogoVariant /> */}

      {/* Overview: who we help, coverage, outcomes */}
      <InfoOverview />

      {/* Trust & Proof: credibility section */}
      <TrustProof />

      {/* How It Works: step-by-step guide */}
      <HowItWorks />

      {/* FAQ: bottom of landing page */}
      <FAQ />

      {/* Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AuditsPro",
            url: "https://auditspro.com.au/",
            description:
              "Professional trust account audit services provided via a unified online portal workflow.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+61-2-8006-2335",
              contactType: "customer service",
              areaServed: "AU",
              availableLanguage: "English"
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "AU"
            },
            sameAs: [
              "https://auditspro.com.au/"
            ]
          }),
        }}
      />
      
      {/* Website structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AuditsPro",
            alternateName: "AuditsPro Australia",
            url: "https://auditspro.com.au/",
            description: "Professional trust account audits with unified online workflow, fixed pricing and fast turnaround for Australian businesses.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://auditspro.com.au/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />

      {/* Service structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Trust Account Audit Services",
            description: "Professional trust account audits for real estate agents, conveyancers, solicitors and accountants in Australia.",
            provider: {
              "@type": "Organization",
              name: "AuditsPro"
            },
            areaServed: "Australia",
            serviceType: "Trust Account Auditing",
            offers: {
              "@type": "Offer",
              price: "549",
              priceCurrency: "AUD",
              description: "Fixed pricing from $549 + GST for trust account audits"
            }
          }),
        }}
      />
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://auditspro.com.au/"
              }
            ]
          }),
        }}
      />

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a trust account audit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A trust account audit is a mandatory examination of trust funds held by real estate agents, conveyancers, and solicitors to ensure compliance with regulatory requirements and proper handling of client funds."
                }
              },
              {
                "@type": "Question", 
                name: "How much does a trust account audit cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our trust account audits start from $549 + GST with fixed pricing and no hidden fees. The exact cost depends on the complexity and size of your trust account operations."
                }
              },
              {
                "@type": "Question",
                name: "How long does a trust account audit take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most trust account audits are completed within 5-10 business days from when we receive all required documentation and system access."
                }
              },
              {
                "@type": "Question",
                name: "What documents do I need for a trust account audit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You&apos;ll need bank statements, reconciliation reports, trial balance, ledger reports, and optionally your previous audit report. We provide a comprehensive checklist to guide you through the process."
                }
              }
            ]
          }),
        }}
      />
    </div>
  );
}
