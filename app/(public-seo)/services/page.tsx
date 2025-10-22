import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ui/contact-form";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Home,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  FileText,
  Users,
  AlertTriangle,
  DollarSign,
  Building,
  TrendingUp,
  Scale,
  Calculator,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Zap,
  Target,
} from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Professional Trust Account Audit Services Australia | ASIC Compliance Audits",
  description:
    "Leading trust account audit services for Australian professionals. ASIC compliant audits for real estate agents, conveyancers, solicitors, accountants, mortgage brokers, SMSF trustees & business brokers. Fixed pricing from $549 + GST. 24-hour response, 5-10 day completion.",
  keywords: [
    "trust account audit",
    "trust account audit services",
    "ASIC trust account audit",
    "professional trust account audit",
    "trust account compliance audit",
    "real estate trust account audit",
    "conveyancer trust account audit",
    "solicitor trust account audit",
    "accountant trust account audit",
    "mortgage broker trust account audit",
    "SMSF trust account audit",
    "business broker trust account audit",
    "trust account audit Australia",
    "trust account audit cost",
    "trust account audit requirements",
    "trust account compliance",
    "ASIC compliance audit",
    "professional audit services",
    "trust fund audit",
    "client money audit",
    "statutory trust account audit",
    "annual trust account audit",
    "trust account audit report",
    "trust account auditor",
    "Australian trust account audit",
    "trust account audit Melbourne",
    "trust account audit Sydney",
    "trust account audit Brisbane",
    "trust account audit Perth",
    "trust account audit Adelaide",
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
    canonical: "/services",
  },
  openGraph: {
    title: "Professional Trust Account Audit Services Australia | AuditsPro AU",
    description:
      "Leading trust account audit services for Australian professionals. ASIC compliant audits with fixed pricing, fast turnaround, and expert auditors.",
    url: "/services",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-services-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Trust Account Audit Services Australia - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Trust Account Audit Services Australia | AuditsPro AU",
    description:
      "Leading trust account audit services for Australian professionals. ASIC compliant audits, fixed pricing, expert auditors.",
    images: ["/twitter-services-audit.jpg"],
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
  name: "Professional Trust Account Audit Services",
  description:
    "Comprehensive trust account audit services for Australian professionals including real estate agents, conveyancers, solicitors, accountants, mortgage brokers, SMSF trustees, and business brokers. ASIC compliant audits with fixed pricing and fast turnaround.",
  url: "https://auditspro.com.au/services",
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
    audienceType: "Australian Professional Services",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description: "Professional trust account audit services starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate Agent Trust Account Audit",
          description: "ASIC compliant trust account audits for real estate agents",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conveyancer Trust Account Audit",
          description: "Professional trust account audits for conveyancers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solicitor Trust Account Audit",
          description: "Legal profession trust account audits for solicitors",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Accountant Trust Account Audit",
          description: "Professional trust account audits for accountants",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mortgage Broker Trust Account Audit",
          description: "NCCP compliant trust account audits for mortgage brokers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SMSF Trustee Trust Account Audit",
          description: "SMSF trust account audits for self-managed super fund trustees",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Broker Trust Account Audit",
          description: "Professional trust account audits for business brokers",
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
    ],
  },
};

// Service data with comprehensive SEO keywords
const services = [
  {
    title: "Real Estate Agents",
    description: "ASIC compliant trust account audits for real estate agents. Comprehensive review of client money handling, trust account reconciliations, and regulatory compliance requirements.",
    href: "/services/real-estate-agents",
    icon: Building,
    features: ["ASIC Compliance", "Client Money Audit", "Trust Account Reconciliation", "Regulatory Review"],
    keywords: "real estate trust account audit, ASIC real estate audit, property agent audit",
    pricing: "From $549 + GST",
    turnaround: "5-10 business days",
  },
  {
    title: "Conveyancers",
    description: "Professional trust account audits for conveyancers ensuring ASIC compliance and proper client money management throughout property settlement processes.",
    href: "/services/conveyancers",
    icon: FileText,
    features: ["ASIC Compliance", "Settlement Fund Audit", "Client Money Management", "Regulatory Standards"],
    keywords: "conveyancer trust account audit, conveyancing audit, property settlement audit",
    pricing: "From $549 + GST",
    turnaround: "5-10 business days",
  },
  {
    title: "Solicitors",
    description: "Legal profession trust account audits for solicitors. Comprehensive review of client funds, trust account operations, and Law Institute compliance requirements.",
    href: "/services/solicitors",
    icon: Scale,
    features: ["Law Institute Compliance", "Client Fund Audit", "Trust Account Operations", "Legal Profession Standards"],
    keywords: "solicitor trust account audit, legal profession audit, law firm trust audit",
    pricing: "From $549 + GST",
    turnaround: "5-10 business days",
  },
  {
    title: "Accountants",
    description: "Professional trust account audits for accountants handling client funds. Ensure compliance with professional standards and proper client money management.",
    href: "/services/accountants",
    icon: Calculator,
    features: ["Professional Standards", "Client Fund Management", "Trust Account Review", "Compliance Assessment"],
    keywords: "accountant trust account audit, accounting firm audit, CPA trust audit",
    pricing: "From $549 + GST",
    turnaround: "5-10 business days",
  },
  {
    title: "Mortgage Brokers",
    description: "NCCP compliant trust account audits for mortgage brokers. Comprehensive review of client money handling, ASIC compliance, and home loan settlement processes.",
    href: "/services/mortgage-brokers",
    icon: DollarSign,
    features: ["NCCP Compliance", "ASIC Requirements", "Settlement Process Audit", "Client Money Review"],
    keywords: "mortgage broker trust account audit, NCCP audit, home loan broker audit",
    pricing: "From $549 + GST",
    turnaround: "5-10 business days",
  },
  {
    title: "SMSF Trustees",
    description: "Specialized trust account audits for SMSF trustees. Ensure compliance with superannuation regulations and proper management of member funds.",
    href: "/services/smsf-trustees",
    icon: TrendingUp,
    features: ["SMSF Compliance", "Member Fund Audit", "Superannuation Regulations", "Trustee Obligations"],
    keywords: "SMSF trust account audit, self managed super fund audit, SMSF trustee audit",
    pricing: "From $549 + GST",
    turnaround: "5-10 business days",
  },
  {
    title: "Business Brokers",
    description: "Professional trust account audits for business brokers. Comprehensive review of client deposits, settlement funds, and regulatory compliance requirements.",
    href: "/services/business-brokers",
    icon: Briefcase,
    features: ["Client Deposit Audit", "Settlement Fund Review", "Regulatory Compliance", "Business Sale Process"],
    keywords: "business broker trust account audit, business sale audit, broker compliance audit",
    pricing: "From $549 + GST",
    turnaround: "5-10 business days",
  },
];

// Key benefits data
const keyBenefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "24-hour response time with 5-10 business day completion for most audits.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    description: "Transparent pricing from $549 + GST with no hidden fees or surprises.",
  },
  {
    icon: Shield,
    title: "ASIC Compliant",
    description: "All audits meet ASIC requirements and professional regulatory standards.",
  },
  {
    icon: Award,
    title: "Expert Auditors",
    description: "Qualified auditors with extensive experience in trust account compliance.",
  },
  {
    icon: Users,
    title: "Professional Support",
    description: "Dedicated support team available throughout the audit process.",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Reports",
    description: "Detailed audit reports with clear findings and recommendations.",
  },
];

// Process steps
const processSteps = [
  {
    step: "1",
    title: "Request Audit",
    description: "Submit your audit request through our online portal with required documentation.",
    icon: FileText,
  },
  {
    step: "2",
    title: "Document Review",
    description: "Our expert auditors review your trust account records and documentation.",
    icon: Users,
  },
  {
    step: "3",
    title: "Compliance Assessment",
    description: "Comprehensive assessment of trust account compliance and regulatory requirements.",
    icon: Shield,
  },
  {
    step: "4",
    title: "Report Delivery",
    description: "Receive detailed audit report with findings and recommendations within 5-10 days.",
    icon: CheckCircle2,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial="hidden"
            animate="visible"
            variants={motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Professional Trust Account{" "}
              <span className="text-blue-600">Audit Services</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
              Leading <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">trust account audit services</Link> for Australian professionals. 
              ASIC compliant audits for <Link href="/services/real-estate-agents" className="text-blue-600 hover:text-blue-700 underline">real estate agents</Link>, 
              <Link href="/services/conveyancers" className="text-blue-600 hover:text-blue-700 underline"> conveyancers</Link>, 
              <Link href="/services/solicitors" className="text-blue-600 hover:text-blue-700 underline"> solicitors</Link>, 
              <Link href="/services/accountants" className="text-blue-600 hover:text-blue-700 underline"> accountants</Link>, and more.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Get Your Audit Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                How It Works
              </Link>
            </div>
          </Motion>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Our Trust Account Audit Services?
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Professional <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">trust account audits</Link> with 
              fixed pricing, fast turnaround, and expert auditors ensuring ASIC compliance.
            </p>
          </Motion>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {keyBenefits.map((benefit, index) => (
              <Motion
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={motionViewport}
                variants={motionVariants.fadeInUp}
                transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Specialized Trust Account Audit Services
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Comprehensive <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">trust account audit services</Link> tailored 
              for different Australian professional industries with specific regulatory requirements.
            </p>
          </Motion>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Motion
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={motionViewport}
                variants={motionVariants.fadeInUp}
                transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-blue-200"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <service.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="mb-4 text-gray-600">{service.description}</p>
                
                <div className="mb-4 space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="font-semibold text-blue-600">{service.pricing}</span>
                  <span className="text-gray-500">{service.turnaround}</span>
                </div>
                
                <Link
                  href={service.href}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  title={service.keywords}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Trust Account Audit Process
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Simple, streamlined process for professional <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">trust account audits</Link> with 
              clear steps and transparent communication throughout.
            </p>
          </Motion>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Motion
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={motionViewport}
                variants={motionVariants.fadeInUp}
                transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="mb-2 text-2xl font-bold text-blue-600">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready for Your Trust Account Audit?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Get started with professional <Link href="/services" className="text-white hover:text-blue-200 underline">trust account audit services</Link>. 
              Fixed pricing, fast turnaround, and expert auditors.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-gray-50"
              >
                Get Your Quote Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-lg border border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Learn How It Works
              </Link>
            </div>
          </Motion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Get Your Trust Account Audit Quote
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Contact our expert team for professional <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">trust account audit services</Link>. 
              We'll provide a detailed quote and timeline for your specific requirements.
            </p>
          </Motion>

          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: 0.2 }}
            className="mx-auto max-w-2xl"
          >
            <ContactForm />
          </Motion>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </div>
  );
}