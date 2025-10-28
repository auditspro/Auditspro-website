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
  PiggyBank,
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
    "SMSF Audit Services | Self-Managed Super Fund Independent Audits",
  description:
    "Professional SMSF audit services for self-managed super fund trustees in Australia. ATO compliant independent audits with 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert SMSF auditors ensuring compliance with SIS Act and SISR.",
  keywords: [
    "SMSF audit",
    "self managed super fund audit",
    "SMSF auditor australia",
    "independent SMSF audit",
    "SMSF compliance audit",
    "super fund audit",
    "SMSF annual audit",
    "ATO SMSF audit",
    "SMSF audit cost",
    "SMSF audit requirements",
    "self managed superannuation audit",
    "SMSF trustee audit",
    "SMSF audit services",
    "SMSF compliance",
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
    canonical: "/services/smsf-trustees",
  },
  openGraph: {
    title: "SMSF Audit Services | AuditsPro AU",
    description:
      "Professional ATO compliant SMSF audits for self-managed super fund trustees. Expert auditors, fast turnaround, fixed pricing. Ensure SMSF compliance.",
    url: "/services/smsf-trustees",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-smsf-audit.jpg",
        width: 1200,
        height: 630,
        alt: "SMSF Audit Services - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMSF Audit Services | AuditsPro AU",
    description:
      "ATO compliant SMSF audits for self-managed super fund trustees. Professional auditors, fast completion, fixed pricing.",
    images: ["/twitter-smsf-audit.jpg"],
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
  name: "SMSF Audit Services",
  description:
    "Professional SMSF audit services for self-managed super fund trustees in Australia, ensuring compliance with ATO requirements and superannuation laws.",
  url: "https://auditspro.com.au/services/smsf-trustees",
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
  serviceType: "SMSF Auditing",
  audience: {
    "@type": "Audience",
    audienceType: "SMSF Trustees",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description: "SMSF audit starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SMSF Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual SMSF Audit",
          description: "Comprehensive annual SMSF compliance audit for trustees",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SMSF Compliance Review",
          description: "SMSF compliance assessment and regulatory review",
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
        name: "SMSF Trustees",
        item: "https://auditspro.com.au/services/smsf-trustees",
      },
    ],
  },
};

export default function SMSFTrusteesPage() {
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
        name: "SMSF Trustees",
        item: "/services/smsf-trustees",
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
          { label: "SMSF Trustees", href: "/services/smsf-trustees" },
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
                    <PiggyBank className="size-4" />
                    <span className="tracking-widest">SMSF TRUSTEES</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    SMSF Audit Services for Trustees
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    ATO compliant SMSF audits for self-managed super fund trustees.
                    As part of our comprehensive <Link href="/services" className="text-blue-800 hover:text-blue-900 underline underline-offset-2">professional audit services</Link>, 
                    we provide specialized SMSF audits alongside our <Link href="/services/accountants" className="text-blue-800 hover:text-blue-900 underline underline-offset-2">accounting</Link> and 
                    <Link href="/services/financial-planners" className="text-blue-800 hover:text-blue-900 underline underline-offset-2 ml-1">financial planning</Link> audit services.
                    Independent auditors with{" "}
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
                      our SMSF audit process
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
                title: "ATO Compliant",
                desc: "All reports meet ATO requirements and superannuation law standards",
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
                title: "Independent Auditors",
                desc: "Qualified independent auditors specializing in SMSF compliance",
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

        {/* Why SMSF Trustees Need Audits */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Why SMSF Trustees Need Independent Audits
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                SMSF trustees are legally required to have their fund audited annually by an independent auditor. This ensures compliance with superannuation laws and protects members&apos; retirement savings.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: FileText,
                  title: "Legal Requirement",
                  desc: "Annual independent audits are mandatory under the SIS Act for all SMSFs.",
                },
                {
                  icon: Shield,
                  title: "ATO Compliance",
                  desc: "Ensure compliance with ATO requirements and avoid penalties or fund disqualification.",
                },
                {
                  icon: TrendingUp,
                  title: "Member Protection",
                  desc: "Protect members&apos; retirement savings through independent oversight and compliance verification.",
                },
                {
                  icon: Building,
                  title: "Fund Integrity",
                  desc: "Maintain fund integrity and demonstrate proper governance to the ATO.",
                },
                {
                  icon: AlertTriangle,
                  title: "Risk Management",
                  desc: "Identify compliance issues and contraventions before they become serious problems.",
                },
                {
                  icon: Users,
                  title: "Trustee Duties",
                  desc: "Fulfill trustee duties and demonstrate proper stewardship of member funds.",
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

        {/* SMSF Audit Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-6">
                  SMSF Audit Requirements & Compliance
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  SMSFs must comply with strict requirements under the Superannuation Industry (Supervision) Act 1993 (SIS Act) 
                  and Superannuation Industry (Supervision) Regulations 1994 (SISR). Similar to other professional trust account audits for{" "}
                  <Link href="/services/accountants" className="text-blue-600 hover:text-blue-700 font-medium">
                    accountants
                  </Link>, {" "}
                  <Link href="/services/financial-planners" className="text-blue-600 hover:text-blue-700 font-medium">
                    financial planners
                  </Link>, {" "}
                  <Link href="/services/mortgage-brokers" className="text-blue-600 hover:text-blue-700 font-medium">
                    mortgage brokers
                  </Link>, and {" "}
                  <Link href="/services/conveyancers" className="text-blue-600 hover:text-blue-700 font-medium">
                    conveyancers
                  </Link>, SMSF audits require specialized expertise and regulatory knowledge. Our comprehensive{" "}
                  <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                    professional audit services
                  </Link> ensure full compliance across all industries.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Annual independent audit is mandatory",
                    "Auditor must be qualified and independent",
                    "Compliance with SIS Act and SISR",
                    "Financial statements must be audited",
                    "Contraventions must be reported to ATO",
                    "Audit must be completed before lodging annual return",
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
                  Key SMSF Audit Areas
                </h3>
                <ul className="space-y-3">
                  {[
                    "Financial statement accuracy",
                    "Investment strategy compliance",
                    "In-house asset rules",
                    "Sole purpose test compliance",
                    "Member benefit payments",
                    "Contribution and withdrawal procedures",
                    "Related party transactions",
                    "Asset valuation methods",
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </Motion>
            </div>
          </div>
        </section>

        {/* SMSF Compliance Framework */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                SMSF Compliance Framework
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our SMSF audits ensure compliance with all relevant legislation and ATO requirements. 
                We understand the complex regulatory environment governing SMSFs.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "SIS Act 1993",
                  subtitle: "Superannuation Industry (Supervision) Act",
                  requirements: [
                    "Sole purpose test",
                    "Trustee duties and responsibilities",
                    "Investment restrictions",
                    "Member benefit rules",
                  ],
                },
                {
                  title: "SISR 1994",
                  subtitle: "Superannuation Industry (Supervision) Regulations",
                  requirements: [
                    "In-house asset rules",
                    "Related party transactions",
                    "Investment strategy requirements",
                    "Administrative requirements",
                  ],
                },
                {
                  title: "ATO Requirements",
                  subtitle: "Australian Taxation Office",
                  requirements: [
                    "Annual return lodgment",
                    "Contravention reporting",
                    "Record keeping obligations",
                    "Audit completion deadlines",
                  ],
                },
                {
                  title: "ASIC Requirements",
                  subtitle: "Australian Securities and Investments Commission",
                  requirements: [
                    "Corporate trustee obligations",
                    "Director duties",
                    "Company compliance",
                    "ASIC annual review",
                  ],
                },
                {
                  title: "Auditing Standards",
                  subtitle: "Professional Auditing Requirements",
                  requirements: [
                    "ASA 805 compliance",
                    "Independence requirements",
                    "Professional competence",
                    "Quality control procedures",
                  ],
                },
                {
                  title: "Trustee Obligations",
                  subtitle: "Fiduciary Duties",
                  requirements: [
                    "Act in members&apos; best interests",
                    "Maintain fund for retirement benefits",
                    "Comply with trust deed",
                    "Keep proper records",
                  ],
                },
              ].map((item, index) => (
                <Motion
                  key={item.title}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
                >
                  <h3 className="font-semibold text-blue-950 mb-1 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{item.subtitle}</p>
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
                Our SMSF Audit Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive SMSF audit process designed to ensure full compliance 
                with superannuation laws and ATO requirements.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Review",
                  desc: "Review SMSF structure, trust deed, and investment strategy",
                },
                {
                  step: "2",
                  title: "Financial Analysis",
                  desc: "Examine financial statements, transactions, and asset valuations",
                },
                {
                  step: "3",
                  title: "Compliance Testing",
                  desc: "Test compliance with SIS Act, SISR, and ATO requirements",
                },
                {
                  step: "4",
                  title: "Report & Certificate",
                  desc: "Provide audit report and independent auditor&apos;s report",
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
                Transparent SMSF Audit Pricing
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fixed pricing with no hidden costs. Professional SMSF audits 
                designed specifically for self-managed super fund trustees.
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
                    SMSF Annual Audit
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $549 <span className="text-lg font-normal text-slate-600">+ GST</span>
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    {[
                      "ATO compliant audit report",
                      "Independent auditor&apos;s report",
                      "24-hour response time",
                      "5-10 day completion",
                      "Expert SMSF auditors",
                      "Comprehensive compliance review",
                      "Contravention reporting",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-blue-600" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-demo"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Book Your SMSF Audit
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
                  Get Your SMSF Audit Today
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Ready to ensure your SMSF compliance? 
                  Contact our expert SMSF auditors for a professional audit tailored to your fund&apos;s needs.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24-hour response guarantee" },
                    { icon: Shield, text: "ATO compliant reports" },
                    { icon: Award, text: "Independent SMSF auditors" },
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
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We provide specialized trust account audit services for various professional industries across Australia. 
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                  Explore all our professional audit services
                </Link> to ensure regulatory compliance and financial integrity.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  title: "Accountants",
                  desc: "Trust account audits for accounting firms handling client money under APES 310 requirements, ensuring professional standards and CPA Australia compliance.",
                  link: "/services/accountants",
                  keywords: "accounting trust audit, APES 310 compliance, CPA Australia standards"
                },
                {
                  title: "Real Estate Agents",
                  desc: "Comprehensive trust account audits for real estate agencies ensuring compliance with state Property Services Acts and ACCC regulations for property transactions.",
                  link: "/services/real-estate-agents",
                  keywords: "real estate trust account audit, property services compliance, ACCC regulations"
                },
                {
                  title: "Solicitors",
                  desc: "Legal practice trust account audits ensuring compliance with Law Society regulations, Legal Profession Acts, and professional conduct rules across all states.",
                  link: "/services/solicitors",
                  keywords: "legal trust account audit, law society compliance, legal profession act"
                },
                {
                  title: "Financial Planners",
                  desc: "AFSL trust account audits for financial planning firms ensuring compliance with ASIC requirements, client money handling, and professional indemnity standards.",
                  link: "/services/financial-planners",
                  keywords: "financial planner audit, AFSL compliance, ASIC trust account requirements"
                },
                {
                  title: "Mortgage Brokers",
                  desc: "ASIC and NCCP compliant trust account audits for mortgage brokers handling client funds, commissions, and ensuring responsible lending obligations.",
                  link: "/services/mortgage-brokers",
                  keywords: "mortgage broker audit, ASIC compliance, NCCP requirements"
                },
                {
                  title: "Business Brokers",
                  desc: "Trust account audits for business brokers handling client funds during business sales, acquisitions, and transfers with state licensing compliance.",
                  link: "/services/business-brokers",
                  keywords: "business broker audit, commercial transaction compliance, state licensing"
                },
                {
                  title: "Conveyancers",
                  desc: "Specialized conveyancing trust account audits for licensed conveyancers ensuring compliance with state conveyancing regulations and settlement fund management.",
                  link: "/services/conveyancers",
                  keywords: "conveyancing audit, settlement fund compliance, licensed conveyancer audit"
                }
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
                    title={service.keywords}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
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
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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