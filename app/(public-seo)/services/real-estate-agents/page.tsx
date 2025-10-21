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
  Home,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  FileText,
  Users,
  AlertTriangle,
  Calendar,
  DollarSign,
  Building,
  Scale,
} from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Trust Account Audit for Real Estate Agents | ASIC Compliant Audits Australia",
  description:
    "Professional trust account audits for real estate agents in Australia. ASIC compliant audits with 24-hour response, 5-10 day completion. Fixed pricing from $549 + GST. Expert auditors specializing in real estate trust account compliance.",
  keywords: [
    "real estate trust account audit",
    "real estate agent audit australia",
    "ASIC compliant real estate audit",
    "trust account audit real estate",
    "real estate compliance audit",
    "property agent trust account",
    "real estate audit services",
    "trust account auditor real estate",
    "real estate agent compliance",
    "property trust account audit",
    "real estate audit requirements",
    "trust account audit cost real estate",
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
    canonical: "/services/real-estate-agents",
  },
  openGraph: {
    title: "Trust Account Audit for Real Estate Agents | AuditsPro AU",
    description:
      "Professional ASIC compliant trust account audits for real estate agents. Expert auditors, fast turnaround, fixed pricing. Ensure compliance with Australian regulations.",
    url: "/services/real-estate-agents",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-real-estate-audit.jpg",
        width: 1200,
        height: 630,
        alt: "Trust Account Audit for Real Estate Agents - AuditsPro AU",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audit for Real Estate Agents | AuditsPro AU",
    description:
      "ASIC compliant trust account audits for real estate agents. Professional auditors, fast completion, fixed pricing.",
    images: ["/twitter-real-estate-audit.jpg"],
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
  name: "Trust Account Audit for Real Estate Agents",
  description:
    "Professional trust account audit services specifically designed for real estate agents in Australia, ensuring ASIC compliance and regulatory requirements.",
  url: "https://auditspro.com.au/services/real-estate-agents",
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
    audienceType: "Real Estate Agents",
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
    name: "Real Estate Trust Account Audit Services",
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
        name: "Real Estate Agents",
        item: "https://auditspro.com.au/services/real-estate-agents",
      },
    ],
  },
};

export default function RealEstateAgentsPage() {
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
        name: "Real Estate Agents",
        item: "/services/real-estate-agents",
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
          { label: "Real Estate Agents", href: "/services/real-estate-agents" },
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
                    <Home className="size-4" />
                    <span className="tracking-widest">Real Estate Agents</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    Trust Account Audits for Real Estate Agents
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    ASIC compliant trust account audits specifically designed for real estate agents.
                    Professional auditors with{" "}
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
                  {/* Decorative background circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform scale-110 opacity-20"></div>
                  
                  {/* Main image with circular frame */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src="/images/real-estate-audit.png"
                      alt="Trust Account Audit for Real Estate Agents - Professional Compliance Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-60"></div>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Trust Account Audits?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">REA Compliance</h3>
                <p className="text-gray-600">Ensure full compliance with Real Estate Authority requirements across all Australian states.</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk Mitigation</h3>
                <p className="text-gray-600">Identify and address potential issues before they become costly problems.</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <Clock className="h-12 w-12 text-purple-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
                <p className="text-gray-600">Receive your comprehensive audit report within 5-7 business days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Account Audits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Real Estate Agents Need Trust Account Audits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Legal Requirements</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Annual audit requirements in most states
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      REA licensing compliance
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Consumer protection obligations
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Protection</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Prevent financial discrepancies
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Maintain professional reputation
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Avoid regulatory penalties
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Requirements for Real Estate */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Real Estate Trust Account Audit Requirements
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Mandatory Requirements</h3>
                  <div className="space-y-3">
                    {[
                      "Annual trust account audits are mandatory",
                      "Audits must be conducted by qualified auditors",
                      "Reports must be submitted to relevant authorities",
                      "Trust account records must be maintained accurately",
                      "Compliance with ASIC and state regulations",
                      "Protection of client funds and deposits",
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Audit Areas</h3>
                  <div className="space-y-3">
                    {[
                      "Trust account reconciliations",
                      "Deposit and rental bond handling",
                      "Commission and fee transactions",
                      "Client fund segregation",
                      "Record keeping compliance",
                      "Regulatory reporting accuracy",
                    ].map((area, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Transparent Pricing for Real Estate Audits
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fixed pricing with no hidden costs. Professional trust account audits 
                designed specifically for real estate agents.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Real Estate Trust Account Audit
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $549 <span className="text-lg font-normal text-gray-600">+ GST</span>
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    {[
                      "ASIC compliant audit report",
                      "24-hour response time",
                      "5-10 day completion",
                      "Expert real estate auditors",
                      "Comprehensive compliance review",
                      "Professional audit certificate",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
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
              </div>
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
                  Get Your Real Estate Trust Account Audit
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Ready to ensure compliance with your trust account? Contact our expert 
                  auditors for a professional audit tailored to real estate agents.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24-hour response guarantee" },
                    { icon: Shield, text: "ASIC compliant reports" },
                    { icon: Award, text: "Expert real estate auditors" },
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
                  title: "Conveyancers",
                  desc: "Trust account audits for conveyancing professionals",
                  link: "/services/conveyancers",
                },
                {
                  title: "Accountants",
                  desc: "Compliance audits for accounting practices",
                  link: "/services/accountants",
                },
                {
                  title: "Solicitors",
                  desc: "Legal trust account audit services",
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