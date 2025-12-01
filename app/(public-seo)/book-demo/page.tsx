import { Metadata } from "next"
import Link from "next/link"
import { Motion } from "@/components/ui/motion"
import { ContactForm } from "@/components/ui/contact-form"
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs"
import { CalendarIcon, CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

// SEO Metadata
export const metadata: Metadata = {
  title: "Book a Demo - Professional Trust Account Audit | AuditsPro AU",
  description: "Schedule your trust account audit demo with AuditsPro AU. Get expert guidance, compliance assurance, and transparent pricing. Book your consultation today and ensure regulatory compliance.",
  keywords: [
    "book trust account audit demo",
    "schedule audit consultation",
    "trust account compliance booking",
    "professional audit services australia",
    "legal audit booking",
    "real estate audit demo",
    "compliance consultation",
    "audit appointment booking"
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
    canonical: "/book-demo",
  },
  openGraph: {
    title: "Book a Demo - Professional Trust Account Audit | AuditsPro AU",
    description: "Schedule your trust account audit demo with Australia's leading compliance experts. Get transparent pricing and expert guidance.",
    url: "/book-demo",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-book-demo.jpg",
        width: 1200,
        height: 630,
        alt: "Book Demo - AuditsPro AU Trust Account Audit Services",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Demo - Professional Trust Account Audit",
    description: "Schedule your trust account audit consultation with AuditsPro AU. Expert guidance and transparent pricing.",
    images: ["/twitter-book-demo.jpg"],
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
}

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Book a Demo - Trust Account Audit Services",
  "description": "Schedule your professional trust account audit demo with AuditsPro AU",
  "url": "https://auditspro.com.au/book-demo",
  "mainEntity": {
    "@type": "Service",
    "name": "Trust Account Audit Demo Booking",
    "description": "Professional consultation and demonstration of trust account audit services",
    "provider": {
      "@type": "Organization",
      "name": "AuditsPro AU",
      "url": "https://auditspro.com.au",
      "telephone": "+61-1300-AUDITS",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "NSW",
        "addressLocality": "Sydney"
      }
    },
    "serviceType": "Professional Auditing Services",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Audit Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trust Account Audit",
            "description": "Comprehensive trust account compliance audit"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "549",
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false
          }
        }
      ]
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://auditspro.com.au"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Book Demo",
        "item": "https://auditspro.com.au/book-demo"
      }
    ]
  }
}

export default function BookDemoPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Book Demo", href: "/book-demo" },
        ]}
      />

      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-900 mb-5">
                <CalendarIcon className="size-4" />
                <span>Book Demo</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-950 mb-6">
                Book Your Trust Account Audit Demo
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Schedule a personalized consultation with our certified auditors. Get expert guidance, 
                transparent pricing, and see how we can ensure your trust account compliance.
              </p>
            </Motion>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-brand-200/50" />
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Information */}
              <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-brand-950 mb-6">
                    What to Expect in Your Demo
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-100/60 rounded-full flex items-center justify-center">
                        <span className="text-brand-900 font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-950 mb-2">Compliance Assessment</h3>
                        <p className="text-slate-700">
                          We&apos;ll review your current trust account setup and identify any compliance gaps 
                          or areas that need attention before the audit.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-100/60 rounded-full flex items-center justify-center">
                        <span className="text-brand-900 font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-950 mb-2">Process Walkthrough</h3>
                        <p className="text-slate-700">
                          Our certified auditor will explain our audit process, timeline, and what 
                          documentation you&apos;ll need to prepare.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-100/60 rounded-full flex items-center justify-center">
                        <span className="text-brand-900 font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-950 mb-2">Transparent Pricing</h3>
                        <p className="text-slate-700">
                          Get a clear, upfront quote with no hidden fees. Our fixed pricing starts 
                          from $549 + GST with no surprises.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-100/60 rounded-full flex items-center justify-center">
                        <span className="text-brand-900 font-semibold text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-950 mb-2">Q&A Session</h3>
                        <p className="text-slate-700">
                          Ask any questions about trust account compliance, audit requirements, 
                          or our services. We&apos;re here to help you understand everything.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/40">
                  <h3 className="text-2xl font-bold text-brand-950 mb-6">
                    Why Choose AuditsPro AU?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="size-5 text-brand-700" />
                      <span className="text-slate-700">Certified Auditors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="size-5 text-brand-700" />
                      <span className="text-slate-700">24-Hour Response</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="size-5 text-brand-700" />
                      <span className="text-slate-700">Fixed Pricing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="size-5 text-brand-700" />
                      <span className="text-slate-700">Nationwide Coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="size-5 text-brand-700" />
                      <span className="text-slate-700">100% Compliance Rate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="size-5 text-brand-700" />
                      <span className="text-slate-700">No Hidden Fees</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40">
                  <h4 className="font-semibold text-brand-950 mb-4">Helpful Resources</h4>
                  <div className="space-y-2">
                    <Link 
                      href="/how-it-works" 
                      className="group block text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">How Our Audit Process Works <ArrowRightIcon className="size-4 opacity-70 group-hover:opacity-100" /></span>
                    </Link>
                    <Link 
                      href="/trust-account-audit-checklist" 
                      className="group block text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">Document Preparation Checklist <ArrowRightIcon className="size-4 opacity-70 group-hover:opacity-100" /></span>
                    </Link>
                    <Link 
                      href="/about" 
                      className="group block text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">About Our Team <ArrowRightIcon className="size-4 opacity-70 group-hover:opacity-100" /></span>
                    </Link>
                    <Link 
                      href="/contact" 
                      className="group block text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">Contact Information <ArrowRightIcon className="size-4 opacity-70 group-hover:opacity-100" /></span>
                    </Link>
                  </div>
                </div>
              </Motion>

              {/* Right Column - Booking Form */}
              <Motion
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/40 h-fit"
              >
                <ContactForm
                  title="Schedule Your Demo"
                  subtitle="Fill out the form below and we&apos;ll contact you within 24 hours to schedule your personalized audit consultation."
                  variant="booking"
                  showTitle={true}
                />
              </Motion>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-xl text-slate-700 mb-6">
                &quot;AuditsPro AU made our trust account audit seamless and stress-free. 
                Their team was professional, thorough, and provided clear guidance throughout 
                the entire process. Highly recommended!&quot;
              </blockquote>
              <cite className="text-slate-600">
                — Sarah Mitchell, Principal Solicitor, Mitchell & Associates Legal
              </cite>
            </Motion>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brand-950 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions about our demo and booking process
              </p>
            </Motion>

            <div className="space-y-6">
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-xl border border-brand-200 bg-white p-6"
              >
                <h3 className="font-semibold text-brand-950 mb-3">
                  How long does the demo consultation take?
                </h3>
                <p className="text-slate-700">
                  Our demo consultations typically take 30-45 minutes. This gives us enough time to 
                  understand your needs, explain our process, and answer all your questions.
                </p>
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-xl border border-brand-200 bg-white p-6"
              >
                <h3 className="font-semibold text-brand-950 mb-3">
                  Is there any cost for the demo?
                </h3>
                <p className="text-slate-700">
                  No, our demo consultation is completely free with no obligation. We believe in 
                  providing value upfront and helping you make an informed decision.
                </p>
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-xl border border-brand-200 bg-white p-6"
              >
                <h3 className="font-semibold text-brand-950 mb-3">
                  Can we do the demo remotely?
                </h3>
                <p className="text-slate-700">
                  Yes! We conduct most of our demos via video call for your convenience. We can also 
                  arrange in-person meetings if you&apos;re in the Sydney area.
                </p>
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-xl border border-brand-200 bg-white p-6"
              >
                <h3 className="font-semibold text-brand-950 mb-3">
                  What should I prepare for the demo?
                </h3>
                <p className="text-slate-700">
                  Just bring any questions you have about trust account compliance. If you have 
                  specific concerns or previous audit reports, feel free to mention them during our call.
                </p>
              </Motion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-950 mb-6">
                Ready to Ensure Your Trust Account Compliance?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Join hundreds of satisfied clients who trust AuditsPro AU for their audit needs.
              </p>
              <p className="text-slate-600 mb-8">
                <strong>Call us directly:</strong> 1300-AUDITS (1300-283-487)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-brand-900 text-white font-semibold hover:bg-brand-800 transition-colors shadow-md"
                >
                  Contact Us
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center px-8 py-3 rounded-lg border border-brand-300 bg-white text-brand-900 font-semibold hover:bg-brand-50 hover:border-brand-400 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="/trust-account-audit-checklist"
                  className="inline-flex items-center px-8 py-3 rounded-lg border border-brand-300 bg-white text-brand-900 font-semibold hover:bg-brand-50 hover:border-brand-400 transition-colors"
                >
                  Audit Checklist
                </Link>
              </div>
            </Motion>
          </div>
        </section>
      </div>
    </>
  )
}
