import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Clock,
  Shield,
  Award,
  DollarSign,
  Building,
  Phone,
  FileCheck,
  CheckCircle,
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah Mitchell",
      },
      reviewBody: "Excellent service for our real estate agency. Fast, professional, and ASIC compliant audit completed within 5 days.",
    },
  ],
  serviceOutput: "ASIC Compliant Trust Account Audit Report",
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Australia",
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
};

// FAQ Structured Data
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a real estate trust account audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our real estate trust account audits are typically completed within 5-10 business days from receipt of all required documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of a trust account audit for real estate agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our trust account audits for real estate agents start from $549 + GST, with transparent fixed pricing and no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Are your audits ASIC compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our trust account audits are fully ASIC compliant and meet all Australian regulatory requirements for real estate agents.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need for a trust account audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You&apos;ll need bank statements, trust account registers, receipts, deposit books, and any relevant correspondence. We provide a complete checklist upon engagement.",
      },
    },
  ],
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
          { label: "Who We Are", href: "/#overview" },
          { label: "Real Estate Agents", href: "/services/real-estate-agents" },
        ]}
      />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
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
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
              <div className="mx-auto max-w-4xl text-center">
                <Motion
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                  }}
                >
                  {/* Trust Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-900 mb-6 backdrop-blur-sm">
                    <Shield className="h-4 w-4" />
                    ASIC Registered Auditors
                  </div>

                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                    Trust Account Audits for{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      Real Estate Agents
                    </span>
                  </h1>
                  
                  <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                    Professional ASIC compliant trust account audits with{" "}
                    <span className="font-semibold text-slate-900">fixed pricing</span> and{" "}
                    <span className="font-semibold text-slate-900">fast turnaround</span>. 
                    Ensure compliance with Australian regulations.
                  </p>

                  {/* Key Stats */}
                   <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                     <div className="text-center">
                       <div className="text-2xl font-bold text-blue-600">$549</div>
                       <div className="text-sm text-slate-600">Fixed Price + GST</div>
                     </div>
                     <div className="text-center">
                       <div className="text-2xl font-bold text-blue-600">5-10</div>
                       <div className="text-sm text-slate-600">Business Days</div>
                     </div>
                     <div className="text-center">
                       <div className="text-2xl font-bold text-blue-600">100%</div>
                       <div className="text-sm text-slate-600">ASIC Compliant</div>
                     </div>
                   </div>

                   {/* CTA Buttons */}
                   <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                     <Button size="lg" className="text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                       <FileCheck className="mr-2 h-5 w-5" />
                       Get Your Audit Quote
                     </Button>
                     <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-2 hover:bg-blue-50 transition-all duration-300">
                       <Phone className="mr-2 h-5 w-5" />
                       Call 1300 AUDITS
                     </Button>
                   </div>

                   {/* Related Services */}
                  <p className="mt-6 text-sm text-slate-500">
                    Also available:{" "}
                    <Link href="/services/conveyancers" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">conveyancer audits</Link>,{" "}
                    <Link href="/services/solicitors" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">solicitor audits</Link>, and{" "}
                    <Link href="/services/accountants" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">accountant audits</Link>
                  </p>
                </Motion>
              </div>

              {/* Hero Visual */}
              <Motion
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, delay: 0.3, ease: "easeOut" } },
                }}
              >
                <div className="mt-16 flex justify-center">
                  <div className="relative max-w-4xl">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl transform scale-110"></div>
                    
                    {/* Main Card */}
                    <div className="relative rounded-3xl bg-white/90 backdrop-blur-sm border border-white/50 p-8 lg:p-12 shadow-2xl">
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Icon */}
                        <div className="flex justify-center md:justify-start">
                           <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                             <Building className="w-10 h-10 text-white" />
                           </div>
                         </div>
                        
                        {/* Content */}
                        <div className="md:col-span-2 text-center md:text-left">
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            ASIC Compliant Trust Account Audits
                          </h3>
                          <p className="text-slate-600 text-lg leading-relaxed">
                            Comprehensive audits ensuring full compliance with Australian regulations, 
                            proper client money handling, and trust account reconciliations.
                          </p>
                          
                          {/* Features */}
                          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                             {["ASIC Registered", "Fixed Pricing", "Fast Turnaround", "Expert Auditors"].map((feature) => (
                               <span key={feature} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                                 <CheckCircle className="h-3 w-3" />
                                 {feature}
                               </span>
                             ))}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
          <div className="container mx-auto px-4">
            <Motion
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose Our{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Trust Account Audits?
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Trusted by over 500+ real estate agencies across Australia for comprehensive compliance and peace of mind
                </p>
              </div>
            </Motion>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: CheckCircle,
                  title: "REA Compliance",
                  description: "Ensure full compliance with Real Estate Authority requirements across all Australian states and territories.",
                  color: "from-green-500 to-emerald-600",
                  bgColor: "bg-green-50",
                  delay: 0.1
                },
                {
                  icon: Shield,
                  title: "Risk Mitigation",
                  description: "Identify and address potential issues before they become costly problems or regulatory violations.",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50",
                  delay: 0.2
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  description: "Receive your comprehensive audit report within 5-7 business days with actionable recommendations.",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                  delay: 0.3
                }
              ].map((benefit) => (
                <Motion
                  key={benefit.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { 
                        duration: 0.6, 
                        delay: benefit.delay 
                      } 
                    }
                  }}
                  className="group"
                >
                  <div className="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 rounded-2xl" />
                    
                    {/* Icon Container */}
                    <div className={`relative mb-6 w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Motion>
              ))}
            </div>

            {/* Additional Trust Indicators */}
            <Motion
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
            >
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-full shadow-lg border border-slate-200">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-slate-700">ASIC Registered</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700">Fully Insured</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-slate-700">500+ Audits Completed</span>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </section>

        {/* Why Trust Account Audits Section */}
        <Motion
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)] pointer-events-none" />
            
            <div className="container mx-auto px-4 relative">
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <Motion
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                        Why Real Estate Agents
                      </span>
                      <br />
                      Need Trust Account Audits
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Trust account audits are essential for maintaining compliance, protecting your business, 
                      and ensuring client confidence in your real estate operations.
                    </p>
                  </div>
                </Motion>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Legal Requirements */}
                  <Motion
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-green-100 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Legal Requirements</h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          {
                            text: "Annual audit requirements in most states",
                            link: "/services/conveyancers",
                            linkText: "conveyancer audit requirements"
                          },
                          {
                            text: "REA licensing compliance across all Australian jurisdictions"
                          },
                          {
                            text: "Consumer protection obligations under state legislation"
                          }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-slate-700 leading-relaxed">
                              {item.text}
                              {item.link && (
                                <>
                                  {" (similar to "}
                                  <Link href={item.link} className="text-blue-600 hover:text-blue-800 underline font-medium">
                                    {item.linkText}
                                  </Link>
                                  {")"}
                                </>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Motion>

                  {/* Business Protection */}
                  <Motion
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }
                    }}
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                          <Shield className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Business Protection</h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          "Prevent financial discrepancies and trust account shortfalls",
                          "Maintain professional reputation and client confidence",
                          {
                            text: "Avoid regulatory penalties and license suspension",
                            link: "/services/solicitors",
                            linkText: "solicitor audit services"
                          }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                            <Shield className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-slate-700 leading-relaxed">
                              {typeof item === 'string' ? item : (
                                <>
                                  {item.text}
                                  {" (see our "}
                                  <Link href={item.link} className="text-blue-600 hover:text-blue-800 underline font-medium">
                                    {item.linkText}
                                  </Link>
                                  {" for similar compliance requirements)"}
                                </>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Motion>
                </div>
              </div>
            </div>
          </section>
        </Motion>

        {/* Audit Requirements for Real Estate */}
        <Motion
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
          }}
        >
          <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <Motion
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                        Real Estate Trust Account
                      </span>
                      <br />
                      Audit Requirements
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Comprehensive overview of mandatory requirements and key audit areas 
                      for real estate trust account compliance.
                    </p>
                  </div>
                </Motion>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Mandatory Requirements */}
                  <Motion
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                  >
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-green-100 rounded-2xl">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Mandatory Requirements</h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          {
                            text: "Annual trust account audits are mandatory",
                            subtext: "Similar requirements apply to",
                            links: [
                              { href: "/services/accountants", text: "accounting firms" },
                              { href: "/services/financial-planners", text: "financial planners" }
                            ]
                          },
                          {
                            text: "Audits must be conducted by qualified auditors registered with professional bodies"
                          },
                          {
                            text: "Reports must be submitted to relevant authorities within specified timeframes"
                          },
                          {
                            text: "Trust account records must be maintained accurately and reconciled regularly"
                          },
                          {
                            text: "Compliance with ASIC and state regulations across all jurisdictions"
                          },
                          {
                            text: "Protection of client funds and deposits",
                            subtext: "Explore our",
                            links: [
                              { href: "/services", text: "comprehensive audit services" }
                            ],
                            endText: "for all professional requirements"
                          }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                            <div className="text-slate-700 leading-relaxed">
                              {item.text}
                              {item.subtext && (
                                <>
                                  {" ("}{item.subtext}{" "}
                                  {item.links?.map((link, linkIndex) => (
                                    <span key={linkIndex}>
                                      <Link href={link.href} className="text-blue-600 hover:text-blue-800 underline font-medium">
                                        {link.text}
                                      </Link>
                                      {linkIndex < item.links!.length - 1 && " and "}
                                    </span>
                                  ))}
                                  {item.endText && ` ${item.endText}`})
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Motion>

                  {/* Key Audit Areas */}
                  <Motion
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                    }}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-blue-100 rounded-2xl">
                          <Building className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Key Audit Areas</h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          "Trust account reconciliations",
                          "Deposit and rental bond handling",
                          "Commission and fee transactions",
                          "Client fund segregation",
                          "Record keeping compliance",
                          "Regulatory reporting accuracy",
                        ].map((area, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                            <span className="text-slate-700 leading-relaxed font-medium">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Motion>
                </div>
              </div>
            </div>
          </section>
        </Motion>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <Motion
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Transparent Pricing
                  </span>{" "}
                  for Real Estate Audits
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Fixed pricing with no hidden costs. Professional trust account audits 
                  designed specifically for real estate agents across Australia.
                </p>
              </div>
            </Motion>

            <div className="max-w-lg mx-auto">
              <Motion
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.2 } }
                }}
              >
                <div className="relative group">
                  {/* Popular Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>

                  <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200 hover:shadow-3xl transition-all duration-300 group-hover:border-blue-300 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 rounded-3xl" />
                    
                    <div className="relative text-center">
                      <div className="mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Building className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          Real Estate Trust Account Audit
                        </h3>
                        <p className="text-slate-600">Complete compliance solution</p>
                      </div>

                      <div className="mb-8">
                        <div className="text-5xl font-bold text-slate-900 mb-2">
                          $549
                        </div>
                        <div className="text-lg text-slate-600">+ GST</div>
                        <div className="text-sm text-slate-500 mt-1">Fixed price, no surprises</div>
                      </div>

                      <ul className="text-left space-y-4 mb-8">
                        {[
                          "ASIC compliant audit report",
                          "24-hour response guarantee",
                          "5-10 day completion",
                          "Expert real estate auditors",
                          "Comprehensive compliance review",
                          "Professional audit certificate",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-4">
                        <Button size="lg" className="w-full text-lg py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                          <FileCheck className="mr-2 h-5 w-5" />
                          Start Audit
                        </Button>
                        <Button variant="outline" size="lg" className="w-full text-lg py-4 h-auto border-2 hover:bg-blue-50 transition-all duration-300">
                          <Phone className="mr-2 h-5 w-5" />
                          Call 1300 AUDITS
                        </Button>
                      </div>

                      {/* Trust Indicators */}
                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-blue-500" />
                            <span>Fully Insured</span>
                          </div>
                          <div className="w-px h-4 bg-slate-300" />
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-yellow-500" />
                            <span>ASIC Registered</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Motion>
            </div>

            {/* Additional Value Props */}
            <Motion
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
            >
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-full shadow-lg border border-slate-200">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700">Fast 5-10 Day Turnaround</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-slate-700">No Hidden Fees</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium text-slate-700">100% Compliance Guaranteed</span>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          
          <div className="container mx-auto px-4 sm:px-6 relative">
            <Motion
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Ready to Get Started?
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Get your professional trust account audit with Australia&apos;s leading audit specialists. 
                  Fast, reliable, and fully compliant.
                </p>
              </div>
            </Motion>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <Motion
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
                }}
              >
                <div className="lg:sticky lg:top-8">
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
                    
                    <div className="relative">
                      <div className="mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                          <Building className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          Why Choose AuditsPro?
                        </h3>
                        <p className="text-slate-600 text-lg">
                          Join hundreds of satisfied real estate professionals who trust us with their compliance needs.
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        {[
                          { 
                            icon: Clock, 
                            title: "24-Hour Response", 
                            text: "Get started immediately with our rapid response guarantee",
                            color: "text-blue-600"
                          },
                          { 
                            icon: Shield, 
                            title: "ASIC Compliant", 
                            text: "Fully compliant reports that meet all regulatory requirements",
                            color: "text-green-600"
                          },
                          { 
                            icon: Award, 
                            title: "Expert Auditors", 
                            text: "Specialized real estate auditors with deep industry knowledge",
                            color: "text-purple-600"
                          },
                          { 
                            icon: DollarSign, 
                            title: "Fixed Pricing", 
                            text: "Transparent pricing from $549 + GST with no hidden costs",
                            color: "text-orange-600"
                          },
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors duration-300">
                              <item.icon className={`h-6 w-6 ${item.color}`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Trust Indicators */}
                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-blue-600">500+</div>
                            <div className="text-xs text-slate-600">Audits Completed</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600">24hr</div>
                            <div className="text-xs text-slate-600">Response Time</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-purple-600">100%</div>
                            <div className="text-xs text-slate-600">Compliance Rate</div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Contact Options */}
                      <div className="mt-8 space-y-3">
                        <div className="text-sm font-medium text-slate-900 mb-3">Need immediate assistance?</div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" className="flex-1 border-2 hover:bg-blue-50">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 border-2 hover:bg-purple-50">
                            <FileCheck className="mr-2 h-4 w-4" />
                            Live Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion>

              <Motion
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }
                }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Get Your Free Quote
                    </h3>
                    <p className="text-slate-600">
                      Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed quote.
                    </p>
                  </div>
                  <ContactForm />
                </div>
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
                Explore our comprehensive range of{" "}
                <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">
                  trust account audit services
                </Link>{" "}
                designed for Australian professionals. Each service is tailored to meet 
                specific regulatory requirements and industry standards.
              </p>
            </Motion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Conveyancers",
                  desc: "ASIC compliant trust account audits for conveyancing professionals. Annual audit requirements for NSW, VIC, QLD, WA, SA, TAS.",
                  link: "/services/conveyancers",
                  keywords: "conveyancer trust account audit",
                },
                {
                  title: "Solicitors",
                  desc: "Legal trust account audit services for law firms. Compliance with Law Institute requirements across all Australian states.",
                  link: "/services/solicitors",
                  keywords: "solicitor trust account audit",
                },
                {
                  title: "Accountants",
                  desc: "Professional compliance audits for accounting practices. CPA Australia and CA ANZ compliant audit services.",
                  link: "/services/accountants",
                  keywords: "accountant compliance audit",
                },
                {
                  title: "SMSF Trustees",
                  desc: "Self-managed super fund audits. ATO compliant SMSF audits with qualified SMSF auditors.",
                  link: "/services/smsf-trustees",
                  keywords: "SMSF audit services",
                },
                {
                  title: "Business Brokers",
                  desc: "Trust account audits for business brokerage firms. Compliance with business broker licensing requirements.",
                  link: "/services/business-brokers",
                  keywords: "business broker audit",
                },
                {
                  title: "Financial Planners",
                  desc: "Compliance audits for financial planning practices. ASIC RG 146 and professional standards compliance.",
                  link: "/services/financial-planners",
                  keywords: "financial planner audit",
                },
                {
                  title: "Mortgage Brokers",
                  desc: "Trust account audits for mortgage brokerage businesses. ASIC credit license compliance audits.",
                  link: "/services/mortgage-brokers",
                  keywords: "mortgage broker audit",
                },
              ].map((service, index) => (
                <Motion
                  key={service.title}
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-blue-950 mb-2 text-lg">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                    title={`${service.keywords} - Professional audit services`}
                  >
                    Learn More About {service.title} Audits →
                  </Link>
                </Motion>
              ))}
            </div>

            <Motion
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={{ ...motionTransitions.smooth, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
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