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
  Briefcase,
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
    "Business Broker Trust Account Audit Services | Professional Compliance Audits",
  description:
    "Professional trust account audit services for business brokers in Australia. Ensure compliance with state regulations and industry standards. 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert auditors specializing in business broker trust account compliance.",
  keywords: [
    "business broker trust account audit",
    "business broker audit",
    "trust account audit business broker",
    "business broker compliance audit",
    "business broker trust fund audit",
    "commercial broker audit",
    "business sale trust account",
    "broker trust account compliance",
    "business broker audit cost",
    "business broker audit requirements",
    "commercial real estate broker audit",
    "business transfer trust account",
    "broker compliance audit",
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
    canonical: "/services/business-brokers",
  },
  openGraph: {
    title: "Business Broker Trust Account Audit Services | AuditsPro AU",
    description:
      "Professional trust account audits for business brokers. Ensure compliance with state regulations. Expert auditors, fast turnaround, fixed pricing.",
    url: "/services/business-brokers",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-business-broker-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Business Broker Trust Account Audit Services - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Broker Trust Account Audit Services | AuditsPro AU",
    description:
      "Professional trust account audits for business brokers. Compliance with state regulations, expert auditors, fast completion.",
    images: ["/twitter-business-broker-audit.jpg"],
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
  name: "Business Broker Trust Account Audit Services",
  description:
    "Professional trust account audit services for business brokers in Australia, ensuring compliance with state regulations and industry standards.",
  url: "https://auditspro.com.au/services/business-brokers",
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
    audienceType: "Business Brokers",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    price: "549",
    priceCurrency: "AUD",
    description: "Business broker trust account audit starting from $549 + GST",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Broker Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trust Account Audit",
          description: "Comprehensive trust account audit for business brokers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Compliance Review",
          description: "Business broker compliance assessment and review",
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
        name: "Business Brokers",
        item: "https://auditspro.com.au/services/business-brokers",
      },
    ],
  },
};

export default function BusinessBrokersPage() {
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
        name: "Business Brokers",
        item: "/services/business-brokers",
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
          { label: "Business Brokers", href: "/services/business-brokers" },
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
                    <Briefcase className="size-4" />
                    <span className="tracking-widest">BUSINESS BROKERS</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    Trust Account Audits for Business Brokers
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    Professional trust account audits for business brokers handling client funds.
                    Ensure compliance with state regulations with{" "}
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
                <div className="relative">
                  <Image
                    src="/images/business-broker-audit.png"
                    alt="Business Broker Trust Account Audit Services - Professional Compliance"
                    width={320}
                    height={320}
                    className="w-80 h-80 object-cover rounded-lg shadow-lg"
                  />
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
                desc: "All reports meet state regulatory requirements and industry standards",
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
                desc: "Qualified auditors specializing in business broker compliance",
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

        {/* Why Business Brokers Need Audits */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Why Business Brokers Need Trust Account Audits
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Business brokers handling client funds during business sales and transfers 
                must maintain trust accounts and ensure proper compliance with regulatory requirements.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: FileText,
                  title: "Regulatory Compliance",
                  desc: "Meet state regulatory requirements for business brokers handling client funds.",
                },
                {
                  icon: Shield,
                  title: "Client Protection",
                  desc: "Protect client funds and demonstrate proper stewardship during business transactions.",
                },
                {
                  icon: TrendingUp,
                  title: "Professional Standards",
                  desc: "Maintain professional standards and industry best practices for trust account management.",
                },
                {
                  icon: Building,
                  title: "Business Integrity",
                  desc: "Demonstrate business integrity and proper financial controls to clients and regulators.",
                },
                {
                  icon: AlertTriangle,
                  title: "Risk Management",
                  desc: "Identify and mitigate risks associated with trust account operations.",
                },
                {
                  icon: Users,
                  title: "Stakeholder Confidence",
                  desc: "Build confidence with clients, vendors, and regulatory bodies through independent audits.",
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

        {/* Business Broker Trust Account Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-6">
                  Business Broker Trust Account Requirements
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Business brokers handling client funds during business sales, acquisitions, 
                  and transfers must comply with specific trust account requirements and maintain proper records.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Separate trust account for client funds",
                    "Proper record keeping and reconciliation",
                    "Compliance with state licensing requirements",
                    "Regular audit and compliance reviews",
                    "Client fund protection measures",
                    "Proper authorization for fund movements",
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
                  Key Audit Areas for Business Brokers
                </h3>
                <ul className="space-y-3">
                  {[
                    "Trust account reconciliation",
                    "Client fund segregation",
                    "Transaction documentation",
                    "Authorization procedures",
                    "Record keeping compliance",
                    "Fund movement tracking",
                    "Interest calculation and distribution",
                    "Regulatory compliance verification",
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

        {/* State-Specific Requirements */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                State-Specific Business Broker Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Business broker trust account requirements vary by state. 
                Our audits ensure compliance with specific state regulations and licensing requirements.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  state: "New South Wales",
                  authority: "NSW Fair Trading",
                  requirements: [
                    "Business broker license required",
                    "Trust account for client funds",
                    "Regular compliance reporting",
                    "Professional indemnity insurance",
                  ],
                },
                {
                  state: "Victoria",
                  authority: "Consumer Affairs Victoria",
                  requirements: [
                    "Estate agent license for business sales",
                    "Trust account compliance",
                    "Audit requirements as per regulations",
                    "Record keeping obligations",
                  ],
                },
                {
                  state: "Queensland",
                  authority: "Office of Fair Trading",
                  requirements: [
                    "Real estate license for business broking",
                    "Trust account management",
                    "Annual audit requirements",
                    "Compliance with PAMD Act",
                  ],
                },
                {
                  state: "Western Australia",
                  authority: "Department of Commerce",
                  requirements: [
                    "Real estate license required",
                    "Trust account compliance",
                    "Regular audit obligations",
                    "Consumer protection compliance",
                  ],
                },
                {
                  state: "South Australia",
                  authority: "Consumer and Business Services",
                  requirements: [
                    "Land and business agent license",
                    "Trust fund management",
                    "Audit and compliance requirements",
                    "Professional standards compliance",
                  ],
                },
                {
                  state: "Tasmania",
                  authority: "Consumer, Building and Occupational Services",
                  requirements: [
                    "Property agent license",
                    "Trust account obligations",
                    "Compliance monitoring",
                    "Professional conduct standards",
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
                  <p className="text-sm text-slate-600 mb-3">{item.authority}</p>
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
                Our Business Broker Audit Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive audit process designed to ensure full compliance 
                with state regulations and industry best practices for business brokers.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  desc: "Review business broker operations, licensing, and trust account structure",
                },
                {
                  step: "2",
                  title: "Trust Account Review",
                  desc: "Examine trust account records, reconciliations, and client fund management",
                },
                {
                  step: "3",
                  title: "Compliance Testing",
                  desc: "Test compliance with state regulations and industry requirements",
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
                Transparent Business Broker Audit Pricing
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fixed pricing with no hidden costs. Professional trust account audits 
                designed specifically for business brokers and commercial agents.
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
                      "State compliance verification",
                      "24-hour response time",
                      "5-10 day completion",
                      "Expert business broker auditors",
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
                  Get Your Business Broker Audit Today
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Ready to ensure your trust account compliance? 
                  Contact our expert auditors for a professional audit tailored to your business brokerage needs.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24-hour response guarantee" },
                    { icon: Shield, text: "State compliant reports" },
                    { icon: Award, text: "Expert business broker auditors" },
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
                  title: "Real Estate Agents",
                  desc: "Trust account audits for real estate professionals",
                  link: "/services/real-estate-agents",
                },
                {
                  title: "Conveyancers",
                  desc: "Trust account audits for conveyancing practices",
                  link: "/services/conveyancers",
                },
                {
                  title: "Solicitors",
                  desc: "Law Society compliant audits for legal practices",
                  link: "/services/solicitors",
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