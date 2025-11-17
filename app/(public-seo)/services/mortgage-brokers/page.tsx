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
import { RequirementsSection } from "@/components/pagerefactors/services/mortgage-brokers/RequirementsSection";
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
} from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Mortgage Broker Trust Account Audit Services | NCCP Compliance Audits",
  description:
    "Professional trust account audit services for mortgage brokers in Australia. Ensure regulatory compliance and NCCP requirements. 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert auditors specializing in mortgage broker trust account compliance.",
  keywords: [
    "mortgage broker trust account audit",
    "mortgage broker audit",
    "trust account audit mortgage broker",
    "mortgage broker compliance audit",
    "regulatory mortgage broker audit",
    "NCCP compliance audit",
    "mortgage broker trust fund audit",
    "home loan broker audit",
    "mortgage broker audit cost",
    "mortgage broker audit requirements",
    "regulatory trust account audit",
    "mortgage broker compliance",
    "home loan trust account",
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
    canonical: "/services/mortgage-brokers",
  },
  openGraph: {
    title: "Mortgage Broker Trust Account Audit Services | AuditsPro AU",
    description:
      "Professional trust account audits for mortgage brokers. Ensure regulatory compliance and NCCP requirements. Expert auditors, fast turnaround, fixed pricing.",
    url: "/services/mortgage-brokers",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-mortgage-broker-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Mortgage Broker Trust Account Audit Services - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Broker Trust Account Audit Services | AuditsPro AU",
    description:
      "Professional trust account audits for mortgage brokers. Regulatory compliance, NCCP requirements, expert auditors, fast completion.",
    images: ["/twitter-mortgage-broker-audit.jpg"],
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
  name: "Mortgage Broker Trust Account Audit Services",
  description:
    "Professional trust account audit services for mortgage brokers in Australia, ensuring regulatory compliance and NCCP requirements.",
  url: "https://auditspro.com.au/services/mortgage-brokers",
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
    audienceType: "Mortgage Brokers",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description: "Mortgage broker trust account audit starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mortgage Broker Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trust Account Audit",
          description: "Comprehensive trust account audit for mortgage brokers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Regulatory Compliance Review",
          description: "Regulatory compliance assessment and review for mortgage brokers",
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
        name: "Mortgage Brokers",
        item: "https://auditspro.com.au/services/mortgage-brokers",
      },
    ],
  },
};

export default function MortgageBrokersPage() {
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
        name: "Mortgage Brokers",
        item: "/services/mortgage-brokers",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50">
      {/* Set Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Mortgage Brokers", href: "/services/mortgage-brokers" },
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

        {/* Hero Section - matched to Real Estate layout and classes */}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                {/* Service Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
                  <Home className="size-4" />
                  <span>Mortgage Brokers</span>
                </div>

                <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
                  Professional Trust Account Auditing for {" "}
                  <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">Mortgage Brokers</span>
                </h1>

                <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  State regulator compliant trust account auditing services for mortgage brokers across Australia. Our comprehensive {" "}
                  <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">professional audit services</Link>{" "}
                  also cover {" "}
                  <Link href="/services/conveyancers" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">conveyancers</Link>{" "}
                  and {" "}
                  <Link href="/services/real-estate-agents" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">real estate agents</Link>. Expert auditors with {" "}
                  <Link href="/contact" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">24-hour response times</Link>{" "}
                  and 5–10 day completion.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link href="/contact">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                      <CheckCircle2 className="size-5" />
                      Start Your Audit
                    </button>
                  </Link>
                  <Link href="/how-it-works">
                    <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                      <FileText className="size-5" />
                      How It Works
                    </button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-brand-700" />
                    <span>5–10 Day Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="size-4 text-brand-700" />
                    <span>Fixed Pricing – No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-brand-700" />
                    <span>Qualified Trust Account Auditors</span>
                  </div>
                </div>

                {/* Additional Trust Elements */}
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                    <Shield className="size-4 text-brand-700" />
                    <span>State Regulator Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                    <CheckCircle2 className="size-4 text-brand-700" />
                    <span>Expert Mortgage Broker Auditors</span>
                  </div>
                </div>
              </Motion>

              {/* Image Column */}
              <Motion
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative mx-auto max-w-lg">
                  {/* Background blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full blur-3xl opacity-15"></div>

                  {/* Professional Mortgage Broker Services Image - Ellipse */}
                  <div className="relative overflow-hidden rounded-full aspect-square shadow-2xl">
                    <Image
                      src="/images/auditspro-services.png"
                      alt="Professional Trust Account Audit Services for Mortgage Brokers - Regulatory Compliant - AuditsPro Australia"
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
                title: "Regulatory Compliant",
                desc: "All reports meet regulatory requirements and NCCP compliance standards",
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
                desc: "Qualified auditors specializing in mortgage broker compliance",
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

        {/* Why Mortgage Brokers Need Audits */}
        <section className="py-16 bg-brand-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
                Why Mortgage Brokers Need Trust Account Audits
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Mortgage brokers holding client funds or receiving commissions must maintain 
                trust accounts and ensure compliance with regulatory requirements and NCCP requirements.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: FileText,
                  title: "Regulatory Compliance",
                  desc: "Meet regulatory requirements for mortgage brokers holding client funds.",
                },
                {
                  icon: Shield,
                  title: "Client Protection",
                  desc: "Protect client funds and demonstrate proper stewardship during loan processes.",
                },
                {
                  icon: TrendingUp,
                  title: "NCCP Requirements",
                  desc: "Comply with National Consumer Credit Protection Act obligations.",
                },
                {
                  icon: Building,
                  title: "Professional Standards",
                  desc: "Maintain professional standards and industry best practices for trust account management.",
                },
                {
                  icon: AlertTriangle,
                  title: "Risk Management",
                  desc: "Identify and mitigate risks associated with trust account operations.",
                },
                {
                  icon: Users,
                  title: "Lender Confidence",
                  desc: "Build confidence with lenders, clients, and regulatory bodies through independent audits.",
                },
              ].map((item, index) => (
                <Motion
                  key={item.title}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-brand-200"
                >
                  <item.icon className="size-8 text-brand-700 mb-4" />
              <h3 className="font-semibold text-brand-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory and NCCP Requirements - Replaced with state cards */}

        {/* Regulatory License Types */}
        <section className="py-16 bg-brand-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
                License Types and Trust Account Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Different license types have varying trust account requirements. 
                Our audits ensure compliance with your specific license obligations.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  license: "Australian Credit License",
                  type: "Full License",
                  requirements: [
                    "Trust account for client funds",
                    "Annual compliance audit",
                    "NCCP compliance obligations",
                    "Professional indemnity insurance",
                    "Adequate compensation arrangements",
                  ],
                },
                {
                  license: "Credit Representative",
                  type: "Authorized Representative",
                  requirements: [
                    "Compliance with licensee requirements",
                    "Trust account if handling client funds",
                    "Adherence to credit guide obligations",
                    "Record keeping requirements",
                    "Training and competency standards",
                  ],
                },
                {
                  license: "Mortgage Aggregator",
                  type: "Group License",
                  requirements: [
                    "Trust account for commission distribution",
                    "Representative oversight obligations",
                    "Compliance monitoring systems",
                    "Training and support programs",
                    "Regular audit requirements",
                  ],
                },
              ].map((item, index) => (
                <Motion
                  key={item.license}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-brand-200"
                >
                <h3 className="font-semibold text-brand-950 mb-1 text-lg">{item.license}</h3>
                  <p className="text-sm text-slate-600 mb-3">{item.type}</p>
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
                Our Mortgage Broker Audit Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive audit process designed to ensure full compliance 
                with regulatory requirements and NCCP requirements for mortgage brokers.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "License Assessment",
                  desc: "Review license type, conditions, and trust account obligations",
                },
                {
                  step: "2",
                  title: "Trust Account Review",
                  desc: "Examine trust account records, commission handling, and client fund management",
                },
                {
                  step: "3",
                  title: "Compliance Testing",
                  desc: "Test compliance with regulatory requirements and NCCP requirements",
                },
                {
                  step: "4",
                  title: "Report & Recommendations",
                  desc: "Provide comprehensive audit report with compliance recommendations",
                },
              ].map((item, index) => (
                <Motion
                  key={item.step}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-brand-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-brand-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* State Requirements */}
  <RequirementsSection />

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
                  Get Your Mortgage Broker Audit Today
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Ready to ensure your regulatory compliance and trust account obligations? 
                  Contact our expert auditors for a professional audit tailored to your mortgage brokerage needs.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24-hour response guarantee" },
                    { icon: Shield, text: "Regulatory compliant reports" },
                    { icon: Award, text: "Expert mortgage broker auditors" },
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
        <section className="py-16 bg-brand-50">
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
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We provide specialized trust account audit services for various professional industries across Australia. 
                <Link href="/services" className="text-brand-700 hover:text-brand-800 font-medium ml-1">
                  Explore all our professional audit services
                </Link> to ensure regulatory compliance and financial integrity.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  title: "Real Estate Agents",
                  desc: "Comprehensive trust account audits for real estate agencies ensuring compliance with state Property Services Acts and ACCC regulations for property transactions.",
                  link: "/services/real-estate-agents",
                  keywords: "real estate trust account audit, property services compliance, ACCC regulations"
                },
                {
                  title: "Business Brokers",
                  desc: "Specialized audit services for business brokers managing client funds, transaction deposits, and ensuring compliance with regulatory business transfer requirements.",
                  link: "/services/business-brokers",
                  keywords: "business broker audit, regulatory compliance, transaction deposit audits"
                },
                {
                  title: "Accountants",
                  desc: "Trust account audits for accounting firms handling client money under APES 310 requirements, ensuring professional standards and CPA Australia compliance.",
                  link: "/services/accountants",
                  keywords: "accounting trust audit, APES 310 compliance, CPA Australia standards"
                },
                {
                  title: "Solicitors",
                  desc: "Legal practice trust account audits ensuring compliance with Law Society regulations, Legal Profession Acts, and professional conduct rules across all states.",
                  link: "/services/solicitors",
                  keywords: "legal trust account audit, law society compliance, legal profession act"
                },
                {
                  title: "Conveyancers",
                  desc: "Specialized conveyancing trust account audits for licensed conveyancers ensuring compliance with state conveyancing regulations and settlement fund management.",
                  link: "/services/conveyancers",
                  keywords: "conveyancing audit, settlement fund compliance, licensed conveyancer audit"
                },
                {
                  title: "Financial Planners",
                  desc: "AFSL trust account audits for financial planning firms ensuring compliance with regulatory requirements, client money handling, and professional indemnity standards.",
                  link: "/services/financial-planners",
                  keywords: "financial planner audit, AFSL compliance, regulatory trust account requirements"
                },
                {
                  title: "SMSF Trustees",
                  desc: "Self-Managed Super Fund audit services ensuring compliance with SIS Act, ATO regulations, and trustee obligations for retirement fund management.",
                  link: "/services/smsf-trustees",
                  keywords: "SMSF audit, SIS Act compliance, ATO superannuation regulations"
                }
              ].map((service, index) => (
                <Motion
                  key={service.title}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-brand-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-brand-950 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <Link
                    href={service.link}
                    title={service.keywords}
                    className="text-brand-700 hover:text-brand-800 text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </Motion>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.3 }}
              >
                <Link 
                  href="/services"
                  className="inline-flex items-center bg-brand-700 text-white px-6 py-3 rounded-lg hover:bg-brand-800 transition-colors font-medium"
                >
                  View All Professional Audit Services
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </Motion>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}