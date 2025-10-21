import { Metadata } from "next"
import Link from "next/link"
import { Motion } from "@/components/ui/motion"
import { ContactForm } from "@/components/ui/contact-form"
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs"

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

      <div className="min-h-screen">

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Book Your Trust Account Audit Demo
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Schedule a personalized consultation with our certified auditors. Get expert guidance, 
                transparent pricing, and see how we can ensure your trust account compliance.
              </p>
            </Motion>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Information */}
              <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What to Expect in Your Demo
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Compliance Assessment</h3>
                        <p className="text-gray-600">
                          We&apos;ll review your current trust account setup and identify any compliance gaps 
                          or areas that need attention before the audit.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Process Walkthrough</h3>
                        <p className="text-gray-600">
                          Our certified auditor will explain our audit process, timeline, and what 
                          documentation you&apos;ll need to prepare.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                        <p className="text-gray-600">
                          Get a clear, upfront quote with no hidden fees. Our fixed pricing starts 
                          from $549 + GST with no surprises.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Q&A Session</h3>
                        <p className="text-gray-600">
                          Ask any questions about trust account compliance, audit requirements, 
                          or our services. We&apos;re here to help you understand everything.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose AuditsPro AU?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Certified Auditors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">24-Hour Response</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Fixed Pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Nationwide Coverage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">100% Compliance Rate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">No Hidden Fees</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Helpful Resources</h4>
                  <div className="space-y-2">
                    <Link 
                      href="/how-it-works" 
                      className="block text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      → How Our Audit Process Works
                    </Link>
                    <Link 
                      href="/trust-account-audit-checklist" 
                      className="block text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      → Document Preparation Checklist
                    </Link>
                    <Link 
                      href="/about" 
                      className="block text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      → About Our Team
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      → Contact Information
                    </Link>
                  </div>
                </div>
              </Motion>

              {/* Right Column - Booking Form */}
              <Motion
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 h-fit"
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-xl text-gray-700 mb-6">
                &quot;AuditsPro AU made our trust account audit seamless and stress-free. 
                Their team was professional, thorough, and provided clear guidance throughout 
                the entire process. Highly recommended!&quot;
              </blockquote>
              <cite className="text-gray-600">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our demo and booking process
              </p>
            </Motion>

            <div className="space-y-6">
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-3">
                  How long does the demo consultation take?
                </h3>
                <p className="text-gray-600">
                  Our demo consultations typically take 30-45 minutes. This gives us enough time to 
                  understand your needs, explain our process, and answer all your questions.
                </p>
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-3">
                  Is there any cost for the demo?
                </h3>
                <p className="text-gray-600">
                  No, our demo consultation is completely free with no obligation. We believe in 
                  providing value upfront and helping you make an informed decision.
                </p>
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-3">
                  Can we do the demo remotely?
                </h3>
                <p className="text-gray-600">
                  Yes! We conduct most of our demos via video call for your convenience. We can also 
                  arrange in-person meetings if you&apos;re in the Sydney area.
                </p>
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-3">
                  What should I prepare for the demo?
                </h3>
                <p className="text-gray-600">
                  Just bring any questions you have about trust account compliance. If you have 
                  specific concerns or previous audit reports, feel free to mention them during our call.
                </p>
              </Motion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Ensure Your Trust Account Compliance?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of satisfied clients who trust AuditsPro AU for their audit needs.
              </p>
              <p className="text-blue-100 mb-8">
                <strong>Call us directly:</strong> 1300-AUDITS (1300-283-487)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="/trust-account-audit-checklist"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Audit Checklist
                </Link>
              </div>
            </Motion>
          </div>
        </section>
        </div>
      </div>
    </>
  )
}
