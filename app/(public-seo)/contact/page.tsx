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
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  Award,
  Users,
  Shield,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Grip,
} from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Contact Us - AuditsPro AU | Professional Trust Account Auditing Services",
  description:
    "Get in touch with AuditsPro AU for professional trust account auditing services. Contact our expert team for compliance audits, financial reviews, and consultation services across Australia.",
  keywords: [
    "contact audits pro",
    "trust account audit contact",
    "professional auditing services australia",
    "compliance audit consultation",
    "financial audit contact",
    "auditing services inquiry",
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
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AuditsPro AU - Professional Trust Account Auditing",
    description:
      "Contact our expert auditing team for professional trust account audits, compliance reviews, and consultation services across Australia.",
    url: "/contact",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AuditsPro AU - Professional Auditing Services",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AuditsPro AU - Professional Trust Account Auditing",
    description:
      "Get in touch with our expert auditing team for professional trust account audits and compliance services.",
    images: ["/twitter-contact.jpg"],
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AuditsPro AU",
  description:
    "Contact page for AuditsPro AU professional trust account auditing services",
  url: "https://auditspro.com.au/contact",
  mainEntity: {
    "@type": "Organization",
    name: "AuditsPro AU",
    description: "Professional trust account auditing and compliance services",
    url: "https://auditspro.com.au",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+61-1300-AUDITS",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "AU",
      },
      {
        "@type": "ContactPoint",
        email: "info@auditspro.com.au",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "AU",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Albert Coates Lane",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    sameAs: [
      "https://linkedin.com/company/auditspro-au",
      "https://twitter.com/auditsproau",
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
        name: "Contact",
        item: "https://auditspro.com.au/contact",
      },
    ],
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "/contact",
      },
    ],
  };

  return (
    <div className="flex min-h-dvh flex-col bg-gradient-to-br from-blue-50/60 to-white/60">
      {/* Set Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
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
              <Motion
                className="text-center lg:text-left"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                {/* Header with respectful icon */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-xs font-medium text-blue-950 mb-3">
                    {/* Contact icon */}
                    <Grip className="size-4" />
                    <span className="tracking-widest">Contact us</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    Contact Our Expert Team
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    Ready to ensure your trust accounts are compliant and secure? Get
                    in touch with our professional auditing team for expert guidance
                    and comprehensive audit services.{" "}
                    <Link
                      href="/how-it-works"
                      className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
                    >
                      Learn about our process
                    </Link>{" "}
                    or get started today.
                  </p>
                </div>
              </Motion>
              
              <Motion
                className="flex justify-center lg:justify-end"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-200/50 shadow-2xl bg-white">
                    <img
                      src="/images/contact audit.png"
                      alt="Contact AuditsPro AU - Professional Trust Account Auditing Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-30"></div>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50/60 to-white/60">
          <div className="container relative mx-auto px-4 sm:px-6">
            <Motion
              className="grid gap-6 md:grid-cols-4"
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
            >
            {[
              {
                icon: CreditCard,
                title: "Fixed Pricing",
                desc: "Transparent pricing from $549 + GST with no hidden fees or surprises",
              },
              {
                icon: Clock,
                title: "Fast Response",
                desc: "Quick response times and efficient communication throughout the process",
              },
              {
                icon: Award,
                title: "ASIC Compliant",
                desc: "Reports meet all Australian regulatory requirements and standards",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Specialised trust account auditors with extensive industry experience",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Motion
                key={title}
                className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                  <Icon className="size-4" />
                  {title}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{desc}</p>
              </Motion>
            ))}
            </Motion>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="relative py-16 bg-white/70 backdrop-blur">
          <div className="container relative mx-auto px-4 sm:px-6">
            <Motion
              className="rounded-2xl border border-blue-200/70 bg-gradient-to-br from-blue-50/60 to-white/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-blue-50/40"
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
            >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Get In Touch
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We&apos;re here to help you navigate trust account compliance
                with confidence. Our team of certified auditors is ready to
                provide expert guidance tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <Motion
                className="space-y-6"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                {/* Contact Methods */}
                <div className="space-y-6">
                  <Motion
                    className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40"
                    {...motionVariants.fadeInUp}
                    viewport={motionViewport}
                    transition={motionTransitions.smooth}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                      <Phone className="size-4" />
                      Phone Support
                    </div>
                    <p className="text-slate-700 font-medium mb-1">
                      1300 AUDITS (1300 283 487)
                    </p>
                    <p className="text-sm text-slate-600">
                      Monday - Friday, 9:00 AM - 5:00 PM AEST
                    </p>
                  </Motion>

                  <Motion
                    className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40"
                    {...motionVariants.fadeInUp}
                    viewport={motionViewport}
                    transition={{ ...motionTransitions.smooth, delay: 0.1 }}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                      <Mail className="size-4" />
                      Email Support
                    </div>
                    <p className="text-slate-700 font-medium mb-1">
                      info@auditspro.com.au
                    </p>
                    <p className="text-sm text-slate-600">
                      We typically respond within 24 hours
                    </p>
                  </Motion>

                  <Motion
                    className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40"
                    {...motionVariants.fadeInUp}
                    viewport={motionViewport}
                    transition={{ ...motionTransitions.smooth, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                      <MapPin className="size-4" />
                      Office Location
                    </div>
                    <p className="text-slate-700 font-medium mb-1">
                      3 Albert Coates Lane
                    </p>
                    <p className="text-slate-700 font-medium mb-1">
                      Melbourne, VIC 3000
                    </p>
                    <p className="text-sm text-slate-600">
                      Serving clients across Australia
                    </p>
                  </Motion>
                </div>

                {/* Quick Links */}
                <Motion
                  className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40"
                  {...motionVariants.fadeInUp}
                  viewport={motionViewport}
                  transition={{ ...motionTransitions.smooth, delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                    <Shield className="size-4" />
                    Quick Links
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/how-it-works"
                      className="flex items-center text-blue-800 hover:text-blue-900 underline underline-offset-2 text-sm"
                    >
                      → How It Works
                    </Link>
                    <Link
                      href="/trust-account-audit-checklist"
                      className="flex items-center text-blue-800 hover:text-blue-900 underline underline-offset-2 text-sm"
                    >
                      → Document Checklist
                    </Link>
                  </div>
                </Motion>
              </Motion>

              {/* Contact Form */}
              <Motion
                className="space-y-6"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.1 }}
              >
                <div className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-6">
                    <Mail className="size-4" />
                    Send us a message
                  </div>
                  <ContactForm
                    title="Send Us a Message"
                    subtitle="Fill out the form below and we'll get back to you as soon as possible."
                    variant="contact"
                    showTitle={false}
                  />
                </div>
              </Motion>
            </div>
            </Motion>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="relative py-16 bg-gradient-to-br from-blue-50/60 to-white/60 border-t border-blue-200/50"
          aria-labelledby="faq-heading"
        >
          <div className="container relative mx-auto px-4 sm:px-6">
            <Motion
              className="overflow-hidden"
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
            >
          <Motion
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-10 pt-8"
          >
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">
              Frequently Asked Questions
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <HelpCircle className="size-7 text-blue-700" aria-hidden="true" />
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950"
              >
                Contact & audit questions
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Common questions about our auditing services, process, and how to
              get started.
            </p>
          </Motion>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <Motion
              className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <CheckCircle2 className="size-4 text-blue-700" />
                How quickly can you start an audit?
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We typically can begin most audits within 24 hours of initial
                contact, depending on the scope and your availability.
              </p>
            </Motion>

            <Motion
              className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <CheckCircle2 className="size-4 text-blue-700" />
                What information do you need to get started?
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We&apos;ll need access to your trust account records, bank
                statements, and relevant compliance documentation. We&apos;ll
                provide a detailed checklist after our initial consultation.
              </p>
            </Motion>

            <Motion
              className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <CheckCircle2 className="size-4 text-blue-700" />
                Do you work with firms outside of Melbourne?
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes, we serve clients across Australia. Many of our audits can
                be conducted remotely with secure document sharing and video
                consultations.
              </p>
            </Motion>

            <Motion
              className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <CheckCircle2 className="size-4 text-blue-700" />
                What is your response time for inquiries?
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We respond to all inquiries within 24 hours during business
                days. For urgent matters, please call us directly for immediate
                assistance.
              </p>
            </Motion>

            <Motion
              className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <CheckCircle2 className="size-4 text-blue-700" />
                How long does a typical audit take to complete?
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most trust account audits are completed within 5-10 business
                days from the time we receive all required documentation and
                information.
              </p>
            </Motion>

            <Motion
              className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <CheckCircle2 className="size-4 text-blue-700" />
                What are your audit fees?
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our trust account audits start from $549 + GST with transparent,
                fixed pricing. No hidden fees or surprises - you&apos;ll know
                the exact cost upfront.
              </p>
            </Motion>

            <Motion
              className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <CheckCircle2 className="size-4 text-blue-700" />
                Are your audits ASIC compliant?
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes, all our audits are fully ASIC compliant and conducted by
                certified auditors. We ensure your trust account meets all
                regulatory requirements.
              </p>
            </Motion>
          </div>

          <div className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40 mt-8 flex items-center justify-between gap-4 flex-col sm:flex-row">
            <div>
              <h3 className="text-lg font-medium text-blue-950">
                Still have questions?
              </h3>
              <p className="text-sm text-slate-600">
                Explore our resources or book a consultation to learn more.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Link
                href="/trust-account-audit-checklist"
                className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
              >
                <CheckCircle2 className="w-4 h-4" />
                View Checklist
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
              >
                <HelpCircle className="w-4 h-4" />
                How it works
              </Link>
              <Link
                href="/book-demo"
                className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
              >
                <Clock className="w-4 h-4" />
                Book Demo
              </Link>
            </div>
          </div>
            </Motion>
          </div>
        </section>
      </main>
    </div>
  );
}
