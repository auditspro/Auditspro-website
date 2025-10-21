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
  TrendingUp,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  FileText,
  Users,
  AlertTriangle,

  DollarSign,
  Building,
  PieChart,
} from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Financial Planner Trust Account Audit Services | ASIC Compliance Audits",
  description:
    "Professional trust account audit services for financial planners in Australia. Ensure ASIC compliance and AFSL requirements. 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert auditors specializing in financial planning trust account compliance.",
  keywords: [
    "financial planner trust account audit",
    "financial planner audit",
    "trust account audit financial planner",
    "financial planner compliance audit",
    "ASIC financial planner audit",
    "AFSL compliance audit",
    "financial planner trust fund audit",
    "financial advisor audit",
    "financial planner audit cost",
    "financial planner audit requirements",
    "ASIC trust account audit",
    "financial planner compliance",
    "client money trust account",
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
    canonical: "/services/financial-planners",
  },
  openGraph: {
    title: "Financial Planner Trust Account Audit Services | AuditsPro AU",
    description:
      "Professional trust account audits for financial planners. Ensure ASIC compliance and AFSL requirements. Expert auditors, fast turnaround, fixed pricing.",
    url: "/services/financial-planners",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-financial-planner-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Planner Trust Account Audit Services - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Planner Trust Account Audit Services | AuditsPro AU",
    description:
      "Professional trust account audits for financial planners. ASIC compliance, AFSL requirements, expert auditors, fast completion.",
    images: ["/twitter-financial-planner-audit.jpg"],
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
  name: "Financial Planner Trust Account Audit Services",
  description:
    "Professional trust account audit services for financial planners in Australia, ensuring ASIC compliance and AFSL requirements.",
  url: "https://auditspro.com.au/services/financial-planners",
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
    audienceType: "Financial Planners",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description: "Financial planner trust account audit starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Planner Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trust Account Audit",
          description: "Comprehensive trust account audit for financial planners",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ASIC Compliance Review",
          description: "ASIC compliance assessment and review for financial planners",
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
        name: "Financial Planners",
        item: "https://auditspro.com.au/services/financial-planners",
      },
    ],
  },
};

export default function FinancialPlannersPage() {
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
        name: "Financial Planners",
        item: "/services/financial-planners",
      },
    ],
  };

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Set Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Financial Planners", href: "/services/financial-planners" },
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
                className="text-center lg:text-left"
              >
                {/* Header with respectful icon */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-xs font-medium text-blue-950 mb-3">
                    <TrendingUp className="size-4" />
                    <span className="tracking-widest">FINANCIAL PLANNERS</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    Trust Account Audits for Financial Planners
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    Professional trust account audits for financial planners ensuring ASIC compliance and AFSL requirements.
                    Ensure regulatory compliance with{" "}
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

              {/* Image Column */}
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <Image
                  src="/images/financial-planner-audit.png"
                  alt="Financial Planner Trust Account Audit Services - ASIC Compliance"
                  width={320}
                  height={320}
                  className="w-80 h-80 object-cover rounded-lg shadow-lg"
                />
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
                title: "ASIC Compliant",
                desc: "All reports meet ASIC requirements and AFSL compliance standards",
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
                desc: "Qualified auditors specializing in financial planning compliance",
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

        {/* Why Financial Planners Need Audits */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Why Financial Planners Need Trust Account Audits
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Financial planners holding client funds or receiving fees must maintain 
                trust accounts and ensure compliance with ASIC regulations and AFSL requirements.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: FileText,
                  title: "ASIC Compliance",
                  desc: "Meet ASIC regulatory requirements for financial planners holding client funds.",
                },
                {
                  icon: Shield,
                  title: "Client Protection",
                  desc: "Protect client funds and demonstrate proper stewardship during financial planning processes.",
                },
                {
                  icon: PieChart,
                  title: "AFSL Requirements",
                  desc: "Comply with Australian Financial Services License obligations.",
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
                  title: "Client Confidence",
                  desc: "Build confidence with clients and regulatory bodies through independent audits.",
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

        {/* ASIC and AFSL Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-6">
                  ASIC and AFSL Trust Account Requirements
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Financial planners must comply with ASIC regulations and AFSL requirements 
                  when handling client funds, receiving fees, or managing trust accounts.
                </p>
                
                <div className="space-y-4">
                  {[
                    "ASIC Australian Financial Services License compliance",
                    "Trust account for client funds and fees",
                    "Client money handling obligations",
                    "Regular audit and compliance reviews",
                    "Client fund protection measures",
                    "Proper authorization for fund movements",
                    "Record keeping and reporting requirements",
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
                  Key Audit Areas for Financial Planners
                </h3>
                <ul className="space-y-3">
                  {[
                    "Trust account reconciliation",
                    "Client money handling and segregation",
                    "Fee collection and distribution",
                    "ASIC compliance verification",
                    "AFSL obligation assessment",
                    "Record keeping compliance",
                    "Fund movement tracking",
                    "Interest calculation and distribution",
                    "Client agreement compliance",
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

        {/* AFSL License Types */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                AFSL License Types and Trust Account Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Different AFSL license types have varying trust account requirements. 
                Our audits ensure compliance with your specific license obligations.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  license: "Full AFSL",
                  type: "Financial Services License",
                  requirements: [
                    "Trust account for client money",
                    "Annual compliance audit",
                    "Client money handling obligations",
                    "Professional indemnity insurance",
                    "Adequate compensation arrangements",
                  ],
                },
                {
                  license: "Authorised Representative",
                  type: "AR of AFSL Holder",
                  requirements: [
                    "Compliance with licensee requirements",
                    "Trust account if handling client money",
                    "Adherence to FSG obligations",
                    "Record keeping requirements",
                    "Training and competency standards",
                  ],
                },
                {
                  license: "Limited AFSL",
                  type: "Restricted License",
                  requirements: [
                    "Trust account for specific services",
                    "Limited service compliance",
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
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
                >
                  <h3 className="font-semibold text-blue-950 mb-1 text-lg">{item.license}</h3>
                  <p className="text-sm text-slate-600 mb-3">{item.type}</p>
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
                Our Financial Planner Audit Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive audit process designed to ensure full compliance 
                with ASIC regulations and AFSL requirements for financial planners.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "License Assessment",
                  desc: "Review AFSL type, conditions, and trust account obligations",
                },
                {
                  step: "2",
                  title: "Trust Account Review",
                  desc: "Examine trust account records, client money handling, and fee management",
                },
                {
                  step: "3",
                  title: "Compliance Testing",
                  desc: "Test compliance with ASIC regulations and AFSL requirements",
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
                Transparent Financial Planner Audit Pricing
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fixed pricing with no hidden costs. Professional trust account audits 
                designed specifically for financial planners and financial advisors.
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
                    Trust Account Audit
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $549 <span className="text-lg font-normal text-slate-600">+ GST</span>
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    {[
                      "Comprehensive trust account audit",
                      "ASIC compliance verification",
                      "AFSL requirement assessment",
                      "24-hour response time",
                      "5-10 day completion",
                      "Expert financial planning auditors",
                      "Detailed compliance report",
                      "Recommendations for improvement",
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
                    Book Your Audit
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
                  Get Your Financial Planner Audit Today
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Ready to ensure your ASIC compliance and trust account obligations? 
                  Contact our expert auditors for a professional audit tailored to your financial planning practice.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24-hour response guarantee" },
                    { icon: Shield, text: "ASIC compliant reports" },
                    { icon: Award, text: "Expert financial planning auditors" },
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
                Other Professional Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We also provide trust account audits for other professionals. 
                Explore our specialized audit services.
              </p>
            </Motion>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Mortgage Brokers",
                  desc: "Trust account audits for mortgage brokerage practices",
                  link: "/services/mortgage-brokers",
                },
                {
                  title: "Real Estate Agents",
                  desc: "Trust account audits for real estate professionals",
                  link: "/services/real-estate-agents",
                },
                {
                  title: "Accountants",
                  desc: "APES 310 compliant audits for accounting practices",
                  link: "/services/accountants",
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
                  <p className="text-slate-600 text-sm mb-4">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </Motion>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}