import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ui/contact-form";
import { PricingSection } from "@/components/pagerefactors/services/accountants/PricingSection";
import { RequirementsSection as AccountantsRequirementsSection } from "@/components/pagerefactors/services/accountants/RequirementsSection";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Calculator,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  FileText,
  Users,
  AlertTriangle,

  DollarSign,
  Building,
  BookOpen,
} from "lucide-react";

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
          { label: "Who We Are", href: "/#overview" },
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

        {/* Hero Section - aligned to Real Estate UI/UX with brand palette */}
        <section className="relative overflow-hidden border-b border-brand-200/70 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40 mt-8">
          {/* Background Pattern */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/4 top-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
            <div className="absolute -right-1/4 bottom-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
                className="text-center lg:text-left"
              >
                {/* Service Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
                  <Calculator className="size-4" />
                  <span>Accountants</span>
                </div>

                <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
                  Trust Account Audits for <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">Accountants</span>
                </h1>

                <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  CPA, CA ANZ, and IPA compliant trust account audits under APES 310 for accounting professionals.
                  Our comprehensive <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">audit services</Link> also cover <Link href="/services/solicitors" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">solicitors</Link> and <Link href="/services/real-estate-agents" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">real estate agents</Link>. Expert auditors with{" "}
                  <Link href="/contact" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">24-hour response times</Link>{" "}
                  and 5-10 day completion. Fixed pricing from $549 + GST. Learn more about{" "}
                  <Link href="/how-it-works" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">our audit process</Link>.
                </p>

                {/* CTA Buttons (visual parity with Real Estate) */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link href="/contact">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                      <CheckCircle2 className="size-5" />
                      Start Your Audit
                    </button>
                  </Link>
                  <Link href="/how-it-works">
                    <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                      <BookOpen className="size-5" />
                      How It Works
                    </button>
                  </Link>
                </div>
              </Motion>

              {/* Image Column with ellipse shape */}
              <Motion
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative mx-auto max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full blur-3xl opacity-15"></div>
                  <div className="relative overflow-hidden rounded-full aspect-square shadow-2xl">
                    <Image
                      src="/images/auditspro-services.png"
                      alt="Professional trust account audit services for accountants - AuditsPro Australia"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      priority={true}
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                  </div>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="container relative mx-auto px-4 sm:px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "APES 310 Compliant",
                desc: "All reports meet APES 310 requirements and professional body standards",
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                desc: "24-hour response time with audit completion in 5-10 business days",
              },
              {
                icon: DollarSign,
                title: "Fixed Pricing",
                desc: "Transparent pricing from $549 + GST with no hidden costs",
              },
              {
                icon: Award,
                title: "Expert Auditors",
                desc: "Certified auditors specializing in accounting practice trust accounts",
              },
            ].map((benefit, index) => (
              <Motion
                key={benefit.title}
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-white border border-brand-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <benefit.icon className="size-8 text-brand-700 mx-auto mb-3" />
                <h3 className="font-semibold text-brand-950 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </Motion>
            ))}
          </div>
        </section>

        {/* Why Accountants Need Trust Account Audits */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
                Why Accountants Need Trust Account Audits
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Accountants handling client money must comply with APES 310 and professional body requirements. 
                Regular audits ensure compliance and protect your practice.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: BookOpen,
                  title: "APES 310 Compliance",
                  desc: "Meet Accounting Professional & Ethical Standards Board requirements for client money handling.",
                },
                {
                  icon: Shield,
                  title: "Professional Body Requirements",
                  desc: "Comply with CPA Australia, CA ANZ, and IPA trust account audit obligations.",
                },
                {
                  icon: Building,
                  title: "Practice Protection",
                  desc: "Protect your accounting practice from regulatory action and maintain professional standing.",
                },
                {
                  icon: FileText,
                  title: "Client Money Management",
                  desc: "Ensure proper handling of tax refunds, advance payments, and client account funds.",
                },
                {
                  icon: AlertTriangle,
                  title: "Risk Mitigation",
                  desc: "Identify potential compliance issues before they become regulatory problems.",
                },
                {
                  icon: Users,
                  title: "Client Trust",
                  desc: "Demonstrate professional integrity and build client confidence in your services.",
                },
              ].map((item, index) => (
                <Motion
                  key={item.title}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
                >
                  <item.icon className="size-8 text-brand-700 mb-4" />
                  <h3 className="font-semibold text-brand-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* APES 310 Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-6">
                  APES 310 Trust Account Audit Requirements
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  APES 310 sets out the requirements for accountants dealing with client money. 
                  Our <Link href="/services" className="text-brand-600 hover:text-brand-700 font-medium">professional audit services</Link> ensure full compliance with these standards, similar to our audits for <Link href="/services/solicitors" className="text-brand-600 hover:text-brand-700 font-medium">solicitors</Link> and <Link href="/services/real-estate-agents" className="text-brand-600 hover:text-brand-700 font-medium">real estate agents</Link>.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Annual trust account audits are mandatory",
                    "Auditor must hold practicing certificate from CPA, CA ANZ, or IPA",
                    "Compliance with client money handling requirements",
                    "Proper segregation of client and practice funds",
                    "Accurate record keeping and reconciliations",
                    "Professional indemnity insurance requirements",
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-brand-700 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </Motion>

              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.2 }}
                className="p-8 rounded-lg border border-brand-200"
              >
                <h3 className="text-xl font-semibold text-brand-950 mb-4">
                  When Accountants Need Trust Account Audits
                </h3>
                <ul className="space-y-3">
                  {[
                    "Receiving tax refunds on behalf of clients",
                    "Handling advance payments from clients",
                    "Being a signatory on client bank accounts",
                    "Managing client investment funds",
                    "Holding client money for any purpose",
                    "Operating as a registered tax agent",
                  ].map((situation, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="size-4 text-brand-700 flex-shrink-0" />
                      <span className="text-slate-700">{situation}</span>
                    </li>
                  ))}
                </ul>
              </Motion>
            </div>
          </div>
        </section>

        {/* Professional Body Requirements */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
                Professional Body Compliance Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Each professional accounting body has specific requirements for trust account audits. 
                Our auditors understand all professional body obligations.
              </p>
            </Motion>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  body: "CPA Australia",
                  requirements: [
                    "Annual trust account audit required",
                    "Auditor must hold CPA practicing certificate",
                    "Compliance with CPA professional standards",
                    "Submit audit report to CPA Australia",
                  ],
                },
                {
                  body: "CA ANZ",
                  requirements: [
                    "Annual trust account audit required",
                    "Auditor must hold CA practicing certificate",
                    "Compliance with CA ANZ professional standards",
                    "Submit audit report to CA ANZ",
                  ],
                },
                {
                  body: "IPA",
                  requirements: [
                    "Annual trust account audit required",
                    "Auditor must hold IPA practicing certificate",
                    "Compliance with IPA professional standards",
                    "Submit audit report to IPA",
                  ],
                },
              ].map((item, index) => (
                <Motion
                  key={item.body}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-brand-200"
                >
                  <h3 className="font-semibold text-brand-950 mb-3 text-lg">{item.body}</h3>
                  <ul className="space-y-2">
                    {item.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-brand-700 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
                Our Accounting Trust Account Audit Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Streamlined audit process designed specifically for accounting practices, 
                ensuring minimal disruption to your business operations.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  desc: "Review your trust account structure and client money handling procedures",
                },
                {
                  step: "2",
                  title: "Documentation Review",
                  desc: "Examine trust account records, reconciliations, and client money transactions",
                },
                {
                  step: "3",
                  title: "Compliance Testing",
                  desc: "Test compliance with APES 310 and professional body requirements",
                },
                {
                  step: "4",
                  title: "Report Delivery",
                  desc: "Provide comprehensive audit report and compliance certificate",
                },
              ].map((item, index) => (
                <Motion
                  key={item.step}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-brand-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-brand-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Unified component */}
  <PricingSection />
  <AccountantsRequirementsSection />

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-6">
                  Get Your Accounting Practice Trust Account Audit
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Ready to ensure compliance with APES 310 and professional body requirements? 
                  Contact our expert auditors for a professional audit tailored to accounting practices.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24-hour response guarantee" },
                    { icon: Shield, text: "APES 310 compliant reports" },
                    { icon: Award, text: "Expert accounting auditors" },
                    { icon: DollarSign, text: "Fixed pricing from $549 + GST" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="size-5 text-brand-700" />
                      <span className="text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </Motion>

              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.2 }}
              >
                <ContactForm />
              </Motion>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
                Professional Trust Account Audit Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We provide specialized trust account audits for various professionals across Australia. 
                Explore our comprehensive <Link href="/services" className="text-brand-600 hover:text-brand-700 font-medium">audit services</Link> for different industries.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  title: "Real Estate Agents",
                  desc: "PEXA compliant trust account audits for real estate professionals under state regulations",
                  link: "/services/real-estate-agents",
                  keywords: "real estate trust account audit, PEXA compliance, property agent audit"
                },
                {
                  title: "Conveyancers",
                  desc: "Regulatory compliant audits for conveyancing practices under Corporations Act requirements",
                  link: "/services/conveyancers",
                  keywords: "conveyancer trust account audit, regulatory compliance, conveyancing audit"
                },
                {
                  title: "Solicitors",
                  desc: "Legal Practice Act compliant trust account audits for law firms and legal practitioners",
                  link: "/services/solicitors",
                  keywords: "solicitor trust account audit, legal practice audit, law firm compliance"
                },
                {
                  title: "SMSF Trustees",
                  desc: "Self-managed superannuation fund compliance audits under SIS Act and SMSF regulations",
                  link: "/services/smsf-trustees",
                  keywords: "SMSF audit, superannuation fund audit, SMSF trustee compliance"
                },
                {
                  title: "Business Brokers",
                  desc: "Trust account audits for business brokers handling client deposits and transaction funds",
                  link: "/services/business-brokers",
                  keywords: "business broker audit, commercial transaction audit, broker compliance"
                },
                {
                  title: "Financial Planners",
                  desc: "AFSL compliant audits for financial planning practices managing client investment funds",
                  link: "/services/financial-planners",
                  keywords: "financial planner audit, AFSL compliance, investment fund audit"
                },
                {
                  title: "Mortgage Brokers",
                  desc: "Trust account compliance audits for mortgage brokers under NCCP and aggregator requirements",
                  link: "/services/mortgage-brokers",
                  keywords: "mortgage broker audit, NCCP compliance, loan broker audit"
                },
              ].map((service, index) => (
                <Motion
                  key={service.title}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-brand-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-brand-950 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                    title={service.keywords}
                  >
                    Learn More →
                  </Link>
                </Motion>
              ))}
            </div>

            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={{ ...motionTransitions.smooth, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-brand-900 text-white font-medium rounded-lg hover:bg-brand-800 transition-colors"
              >
                View All Professional Audit Services
              </Link>
            </Motion>
          </div>
        </section>

      </main>
    </div>
  );
}