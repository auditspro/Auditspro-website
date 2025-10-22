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
  Scale,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  FileText,
  Users,
  AlertTriangle,

  DollarSign,
  Building,
} from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Trust Account Audit for Conveyancers | ASIC Compliant Audits Australia",
  description:
    "Professional trust account audits for conveyancers in Australia. ASIC compliant audits with 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert auditors specializing in conveyancing trust account compliance.",
  keywords: [
    "conveyancer trust account audit",
    "conveyancing audit australia",
    "ASIC compliant conveyancer audit",
    "trust account audit conveyancing",
    "conveyancer compliance audit",
    "conveyancing trust account",
    "conveyancer audit services",
    "trust account auditor conveyancing",
    "conveyancer compliance",
    "conveyancing trust account audit",
    "conveyancer audit requirements",
    "trust account audit cost conveyancing",
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
    canonical: "/services/conveyancers",
  },
  openGraph: {
    title: "Trust Account Audit for Conveyancers | AuditsPro AU",
    description:
      "Professional ASIC compliant trust account audits for conveyancers. Expert auditors, fast turnaround, fixed pricing. Ensure compliance with Australian regulations.",
    url: "/services/conveyancers",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-conveyancer-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Trust Account Audit for Conveyancers - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audit for Conveyancers | AuditsPro AU",
    description:
      "ASIC compliant trust account audits for conveyancers. Professional auditors, fast completion, fixed pricing.",
    images: ["/twitter-conveyancer-audit.jpg"],
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
  name: "Trust Account Audit for Conveyancers",
  description:
    "Professional trust account audit services specifically designed for conveyancers in Australia, ensuring ASIC compliance and regulatory requirements.",
  url: "https://auditspro.com.au/services/conveyancers",
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
    audienceType: "Conveyancers",
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
    name: "Conveyancer Trust Account Audit Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Annual Trust Account Audit",
          description: "Comprehensive annual trust account compliance audit",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Compliance Review",
          description: "Trust account compliance assessment and review",
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
        name: "Conveyancers",
        item: "https://auditspro.com.au/services/conveyancers",
      },
    ],
  },
};

export default function ConveyancersPage() {
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
        name: "Conveyancers",
        item: "/services/conveyancers",
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
          { label: "Conveyancers", href: "/services/conveyancers" },
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
                    <Scale className="size-4" />
                    <span className="tracking-widest">Conveyancers</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    Trust Account Audits for Conveyancers
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    ASIC compliant trust account audits specifically designed for conveyancing professionals.
                    Our comprehensive <Link href="/services" className="text-blue-800 hover:text-blue-900 underline underline-offset-2">professional audit services</Link> include specialized support for <Link href="/services/real-estate-agents" className="text-blue-800 hover:text-blue-900 underline underline-offset-2">real estate agents</Link> and <Link href="/services/solicitors" className="text-blue-800 hover:text-blue-900 underline underline-offset-2">solicitors</Link>.
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
                title: "ASIC Compliant",
                desc: "All reports meet ASIC requirements and conveyancing regulatory standards",
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
                desc: "Certified auditors specializing in conveyancing trust accounts",
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

        {/* Why Conveyancers Need Trust Account Audits */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Why Conveyancers Need Trust Account Audits
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Conveyancers handle substantial client funds during property transactions. 
                Regular audits ensure compliance with ASIC regulations and protect your practice.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Scale,
                  title: "Legal Compliance",
                  desc: "Meet ASIC requirements and avoid penalties. Trust account audits are mandatory for conveyancers handling client funds.",
                },
                {
                  icon: Shield,
                  title: "Risk Management",
                  desc: "Identify potential issues before they become problems. Protect your practice and client relationships.",
                },
                {
                  icon: Building,
                  title: "Professional Standards",
                  desc: "Demonstrate professionalism and build client trust through transparent financial practices.",
                },
                {
                  icon: FileText,
                  title: "Accurate Records",
                  desc: "Ensure your trust account records are accurate, complete, and compliant with regulatory standards.",
                },
                {
                  icon: AlertTriangle,
                  title: "Early Detection",
                  desc: "Identify discrepancies or compliance issues early to prevent regulatory action.",
                },
                {
                  icon: Users,
                  title: "Client Protection",
                  desc: "Safeguard client funds and maintain the integrity of your trust account operations.",
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

        {/* Audit Requirements for Conveyancers */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-6">
                  Conveyancing Trust Account Audit Requirements
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Conveyancers must comply with specific trust account audit requirements 
                  under Australian regulations. Our <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">professional audit services</Link> ensure full compliance with state and federal laws, similar to requirements for <Link href="/services/real-estate-agents" className="text-blue-600 hover:text-blue-700 font-medium">real estate agents</Link> and <Link href="/services/solicitors" className="text-blue-600 hover:text-blue-700 font-medium">solicitors</Link>. 
                  Our ASIC registered auditors also provide specialized audits for 
                  <Link href="/services/mortgage-brokers" className="text-blue-600 hover:text-blue-700 font-medium">mortgage brokers</Link>, 
                  <Link href="/services/business-brokers" className="text-blue-600 hover:text-blue-700 font-medium">business brokers</Link>, and 
                  <Link href="/services/financial-planners" className="text-blue-600 hover:text-blue-700 font-medium">financial planners</Link> across Australia.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Annual trust account audits are mandatory",
                    "Audits must be conducted by qualified auditors",
                    "Reports must be submitted to relevant authorities",
                    "Trust account records must be maintained accurately",
                    "Compliance with ASIC and state regulations",
                    "Protection of client settlement funds",
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
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
                  Key Audit Areas for Conveyancers
                </h3>
                <ul className="space-y-3">
                  {[
                    "Trust account reconciliations",
                    "Settlement fund handling",
                    "Deposit and contract money management",
                    "Client fund segregation",
                    "Record keeping compliance",
                    "Regulatory reporting accuracy",
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
                State-Specific Conveyancing Requirements
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Each Australian state has specific requirements for conveyancer trust account audits. 
                Our auditors are familiar with all state regulations.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  state: "NSW",
                  requirements: [
                    "Annual audit required",
                    "Submit to NSW Fair Trading",
                    "Compliance with Property and Stock Agents Act",
                  ],
                },
                {
                  state: "VIC",
                  requirements: [
                    "Annual audit required",
                    "Submit to Consumer Affairs Victoria",
                    "Compliance with Estate Agents Act",
                  ],
                },
                {
                  state: "QLD",
                  requirements: [
                    "Annual audit required",
                    "Submit to Office of Fair Trading",
                    "Compliance with Property Occupations Act",
                  ],
                },
                {
                  state: "WA",
                  requirements: [
                    "Annual audit required",
                    "Submit to Department of Commerce",
                    "Compliance with Settlement Agents Act",
                  ],
                },
                {
                  state: "SA",
                  requirements: [
                    "Annual audit required",
                    "Submit to Consumer and Business Services",
                    "Compliance with Land and Business Agents Act",
                  ],
                },
                {
                  state: "TAS",
                  requirements: [
                    "Annual audit required",
                    "Submit to Consumer, Building and Occupational Services",
                    "Compliance with Property Agents and Land Transactions Act",
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
                  <h3 className="font-semibold text-blue-950 mb-3 text-lg">{item.state}</h3>
                  <ul className="space-y-2">
                    {item.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Transparent Pricing for Conveyancer Audits
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fixed pricing with no hidden costs. Professional trust account audits 
                designed specifically for conveyancing practices.
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
                    Conveyancer Trust Account Audit
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $549 <span className="text-lg font-normal text-slate-600">+ GST</span>
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    {[
                      "ASIC compliant audit report",
                      "24-hour response time",
                      "5-10 day completion",
                      "Expert conveyancing auditors",
                      "Comprehensive compliance review",
                      "Professional audit certificate",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-green-600" />
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
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-6">
                  Get Your Conveyancing Trust Account Audit
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Ready to ensure compliance with your trust account? Contact our expert 
                  auditors for a professional audit tailored to conveyancing practices.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24-hour response guarantee" },
                    { icon: Shield, text: "ASIC compliant reports" },
                    { icon: Award, text: "Expert conveyancing auditors" },
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
        <section className="py-16">
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
                  title: "Solicitors",
                  desc: "Legal trust account audit services for law firms. Comprehensive audits ensuring compliance with Law Society regulations and professional standards.",
                  link: "/services/solicitors",
                  keywords: "solicitor trust account audit, legal compliance audit"
                },
                {
                  title: "Accountants",
                  desc: "Professional compliance audits for accounting practices. Specialized audits for CPA, CA, and IPA members ensuring regulatory compliance.",
                  link: "/services/accountants",
                  keywords: "accountant compliance audit, professional standards audit"
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