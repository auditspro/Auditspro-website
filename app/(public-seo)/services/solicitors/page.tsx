import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ui/contact-form";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Gavel,
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
    "Trust Account Audit for Solicitors | Legal Practice Compliant Audits",
  description:
    "Professional trust account audits for solicitors and legal practices in Australia. Law Society compliant audits with 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert auditors specializing in legal trust account compliance.",
  keywords: [
    "solicitor trust account audit",
    "legal practice audit australia",
    "law society trust account audit",
    "legal trust account audit",
    "solicitor compliance audit",
    "legal practice trust account",
    "solicitor audit services",
    "trust account auditor legal",
    "solicitor compliance",
    "legal practice trust account audit",
    "solicitor audit requirements",
    "trust account audit cost legal",
    "client money audit solicitor",
    "legal practice compliance",
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
    canonical: "/services/solicitors",
  },
  openGraph: {
    title: "Trust Account Audit for Solicitors | AuditsPro AU",
    description:
      "Professional Law Society compliant trust account audits for solicitors. Expert auditors, fast turnaround, fixed pricing. Ensure legal practice compliance.",
    url: "/services/solicitors",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-solicitor-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Trust Account Audit for Solicitors - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audit for Solicitors | AuditsPro AU",
    description:
      "Law Society compliant trust account audits for solicitors. Professional auditors, fast completion, fixed pricing.",
    images: ["/twitter-solicitor-audit.jpg"],
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
  name: "Trust Account Audit for Solicitors",
  description:
    "Professional trust account audit services specifically designed for solicitors and legal practices in Australia, ensuring compliance with Law Society requirements.",
  url: "https://auditspro.com.au/services/solicitors",
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
    audienceType: "Solicitors",
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
    name: "Solicitor Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual Trust Account Audit",
          description: "Comprehensive annual trust account compliance audit for legal practices",
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
        name: "Solicitors",
        item: "https://auditspro.com.au/services/solicitors",
      },
    ],
  },
};

export default function SolicitorsPage() {
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
        name: "Solicitors",
        item: "/services/solicitors",
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
          { label: "Solicitors", href: "/services/solicitors" },
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

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container relative mx-auto px-4 sm:px-6">
            <div className="flex justify-center">
              {/* Content Column */}
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
                className="text-center"
              >
                {/* Header with respectful icon */}
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-xs font-medium text-blue-950 mb-3">
                    <Gavel className="size-4" />
                    <span className="tracking-widest">Solicitors</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    Trust Account Audits for Solicitors
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    Law Society compliant trust account audits for legal practices and solicitors.
                    Our comprehensive <Link href="/services" className="text-blue-800 hover:text-blue-900 underline underline-offset-2">professional audit services</Link> also cover <Link href="/services/conveyancers" className="text-blue-800 hover:text-blue-900 underline underline-offset-2">conveyancers</Link> and <Link href="/services/real-estate-agents" className="text-blue-800 hover:text-blue-900 underline underline-offset-2">real estate agents</Link>.
                    Expert auditors with{" "}
                    <Link
                      href="/contact"
                      className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
                    >
                      24-hour response times
                    </Link>{" "}
                    and 5-10 day completion. Fixed pricing from $549 + GST. Learn more about{" "}
                    <Link
                      href="/how-it-works"
                      className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
                    >
                      our audit process
                    </Link>
                    .
                  </p>
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
                title: "Law Society Compliant",
                desc: "All reports meet Law Society requirements and legal practice standards",
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
                desc: "Certified auditors specializing in legal practice trust accounts",
              },
            ].map((benefit, index) => (
              <Motion
                key={benefit.title}
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <benefit.icon className="size-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-950 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </Motion>
            ))}
          </div>
        </section>

        {/* Why Solicitors Need Trust Account Audits */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Why Solicitors Need Trust Account Audits
            </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Solicitors handle substantial client funds and must comply with strict Law Society requirements. 
                Regular audits ensure compliance and protect your legal practice.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: BookOpen,
                  title: "Legal Compliance",
                  desc: "Meet Law Society requirements and avoid disciplinary action. Trust account audits are mandatory for legal practices.",
                },
                {
                  icon: Shield,
                  title: "Professional Protection",
                  desc: "Protect your legal practice from regulatory action and maintain professional standing.",
                },
                {
                  icon: Building,
                  title: "Client Confidence",
                  desc: "Demonstrate professional integrity and build client trust through transparent financial practices.",
                },
                {
                  icon: FileText,
                  title: "Client Money Management",
                  desc: "Ensure proper handling of client funds, settlements, and trust account operations.",
                },
                {
                  icon: AlertTriangle,
                  title: "Risk Management",
                  desc: "Identify potential compliance issues before they become regulatory problems.",
                },
                {
                  icon: Users,
                  title: "Ethical Standards",
                  desc: "Maintain the highest ethical standards in client money handling and trust account management.",
                },
              ].map((item, index) => (
                <Motion
                  key={item.title}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
                >
                  <item.icon className="size-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-blue-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Trust Account Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-6">
                  Legal Practice Trust Account Requirements
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Solicitors must comply with strict trust account requirements under Law Society regulations. 
                  Our <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">professional audit services</Link> ensure full compliance with legal practice standards, similar to our audits for <Link href="/services/conveyancers" className="text-blue-600 hover:text-blue-700 font-medium">conveyancers</Link> and <Link href="/services/real-estate-agents" className="text-blue-600 hover:text-blue-700 font-medium">real estate agents</Link>.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Annual trust account audits are mandatory",
                    "Auditor must be qualified and independent",
                    "Compliance with Law Society trust account rules",
                    "Proper segregation of client and practice funds",
                    "Accurate record keeping and reconciliations",
                    "Professional indemnity insurance requirements",
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </Motion>

              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.2 }}
                className="p-8 rounded-lg border border-slate-200"
              >
                <h3 className="text-xl font-semibold text-blue-950 mb-4">
                  Key Audit Areas for Legal Practices
                </h3>
                <ul className="space-y-3">
                  {[
                    "Trust account reconciliations",
                    "Client fund management",
                    "Settlement fund handling",
                    "Controlled money procedures",
                    "Interest calculations and distributions",
                    "Regulatory reporting compliance",
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="size-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </Motion>
            </div>
          </div>
        </section>

        {/* State Law Society Requirements */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                State Law Society Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Each Australian state has specific Law Society requirements for solicitor trust account audits. 
                Our auditors understand all state regulations.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  state: "NSW",
                  society: "Law Society of NSW",
                  requirements: [
                    "Annual audit required",
                    "Submit to Law Society of NSW",
                    "Compliance with Legal Profession Uniform Law",
                  ],
                },
                {
                  state: "VIC",
                  society: "Law Institute of Victoria",
                  requirements: [
                    "Annual audit required",
                    "Submit to Law Institute of Victoria",
                    "Compliance with Legal Profession Uniform Law",
                  ],
                },
                {
                  state: "QLD",
                  society: "Queensland Law Society",
                  requirements: [
                    "Annual audit required",
                    "Submit to Queensland Law Society",
                    "Compliance with Legal Profession Act",
                  ],
                },
                {
                  state: "WA",
                  society: "Law Society of WA",
                  requirements: [
                    "Annual audit required",
                    "Submit to Law Society of WA",
                    "Compliance with Legal Profession Act",
                  ],
                },
                {
                  state: "SA",
                  society: "Law Society of SA",
                  requirements: [
                    "Annual audit required",
                    "Submit to Law Society of SA",
                    "Compliance with Legal Practitioners Act",
                  ],
                },
                {
                  state: "TAS",
                  society: "Law Society of Tasmania",
                  requirements: [
                    "Annual audit required",
                    "Submit to Law Society of Tasmania",
                    "Compliance with Legal Profession Act",
                  ],
                },
              ].map((item, index) => (
                <Motion
                  key={item.state}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
                >
                  <h3 className="font-semibold text-blue-950 mb-1 text-lg">{item.state}</h3>
                  <p className="text-sm text-slate-600 mb-3">{item.society}</p>
                  <ul className="space-y-2">
                    {item.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                How Our Audit Process Works
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Streamlined audit process designed specifically for legal practices, 
                ensuring minimal disruption to your client services.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  desc: "Review your trust account structure and legal practice requirements",
                },
                {
                  step: "2",
                  title: "Documentation Review",
                  desc: "Examine trust account records, client funds, and compliance procedures",
                },
                {
                  step: "3",
                  title: "Compliance Testing",
                  desc: "Test compliance with Law Society requirements and legal standards",
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
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-blue-950 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Transparent Pricing for Legal Practices
            </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fixed pricing with no hidden costs. Professional trust account audits 
                designed specifically for legal practices and solicitors.
              </p>
            </Motion>

            <div className="max-w-md mx-auto">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-slate-200"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">
                  Professional Trust Account Audit
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                    $549 <span className="text-lg font-normal text-slate-600">+ GST</span>
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    {[
                      "Law Society compliant audit report",
                      "24-hour response time",
                      "5-10 day completion",
                      "Expert legal auditors",
                      "Comprehensive compliance review",
                      "Professional audit certificate",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-blue-600" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Start Audit
                  </Link>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-6">
              Get Your Legal Practice Audit Started
            </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Ready to ensure compliance with Law Society requirements? 
                  Contact our expert auditors for a professional audit tailored to legal practices.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24-hour response guarantee" },
                    { icon: Shield, text: "Law Society compliant reports" },
                    { icon: Award, text: "Expert legal auditors" },
                    { icon: DollarSign, text: "Fixed pricing from $549 + GST" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="size-5 text-blue-600" />
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
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Professional Trust Account Audit Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We provide specialized trust account audits for various professionals across Australia. 
                Explore our comprehensive <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">audit services</Link> for your industry.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  title: "Real Estate Agents",
                  desc: "ASIC compliant trust account audits for real estate professionals. Ensure compliance with Property and Stock Agents Act requirements and state regulations.",
                  link: "/services/real-estate-agents",
                  keywords: "real estate trust account audit, property agent compliance"
                },
                {
                  title: "Conveyancers",
                  desc: "ASIC compliant audits for conveyancing practices. Comprehensive audits ensuring compliance with settlement fund regulations and trust account requirements.",
                  link: "/services/conveyancers",
                  keywords: "conveyancer trust account audit, settlement fund compliance"
                },
                {
                  title: "Accountants",
                  desc: "APES 310 compliant audits for accounting practices. Professional standards audits for CPA, CA, and IPA members ensuring regulatory compliance.",
                  link: "/services/accountants",
                  keywords: "accountant compliance audit, APES 310 audit"
                },
                {
                  title: "SMSF Trustees",
                  desc: "Self-Managed Super Fund audit services. ATO compliant SMSF audits ensuring compliance with superannuation regulations and tax obligations.",
                  link: "/services/smsf-trustees",
                  keywords: "SMSF audit, self managed super fund audit"
                },
                {
                  title: "Business Brokers",
                  desc: "Trust account audits for business brokers and intermediaries. Ensure compliance with business sale regulations and trust account requirements.",
                  link: "/services/business-brokers",
                  keywords: "business broker audit, intermediary compliance"
                },
                {
                  title: "Financial Planners",
                  desc: "Compliance audits for financial planning practices. ASIC RG 146 compliant audits ensuring adherence to financial services regulations.",
                  link: "/services/financial-planners",
                  keywords: "financial planner audit, AFSL compliance audit"
                },
                {
                  title: "Mortgage Brokers",
                  desc: "Trust account audits for mortgage brokers and credit licensees. Ensure compliance with NCCP and credit legislation requirements.",
                  link: "/services/mortgage-brokers",
                  keywords: "mortgage broker audit, credit compliance audit"
                },
              ].map((service, index) => (
                <Motion
                  key={service.title}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-blue-950 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
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
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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