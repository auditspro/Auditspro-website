import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import { CheckCheck, Grip } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust Account Audit Checklist - Document Requirements | AuditsPro",
  description: "Complete document checklist for trust account audits. Prepare bank statements, reconciliation reports, and system access for a smooth audit process.",
  keywords: "trust account audit checklist, audit documents, bank statements, reconciliation reports, audit preparation, ASIC compliance",
  alternates: {
    canonical: "https://auditspro.com.au/trust-account-audit-checklist",
  },
  openGraph: {
    title: "Trust Account Audit Checklist - Document Requirements | AuditsPro",
    description: "Complete document checklist for trust account audits. Prepare bank statements, reconciliation reports, and system access for a smooth audit process.",
    type: "article",
    url: "https://auditspro.com.au/trust-account-audit-checklist",
    siteName: "AuditsPro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trust Account Audit Checklist - AuditsPro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Account Audit Checklist - Document Requirements | AuditsPro",
    description: "Complete document checklist for trust account audits. Prepare bank statements, reconciliation reports, and system access for a smooth audit process.",
    images: ["/og-image.jpg"],
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

export default function ChecklistPage() {
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
        name: "Trust Account Audit Checklist",
        item: "/trust-account-audit-checklist",
      },
    ],
  };

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Trust Account Audit Checklist - Document Requirements",
            description: "Complete document checklist for trust account audits. Prepare bank statements, reconciliation reports, and system access for a smooth audit process.",
            author: {
              "@type": "Organization",
              name: "AuditsPro"
            },
            publisher: {
              "@type": "Organization",
              name: "AuditsPro",
              logo: {
                "@type": "ImageObject",
                url: "https://auditspro.com.au/audits_pro_icon/apple-touch-icon.png"
              }
            },
            datePublished: "2024-10-19",
            dateModified: "2024-10-19",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://auditspro.com.au/trust-account-audit-checklist"
            },
            image: "https://auditspro.com.au/og-image.jpg"
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Trust Account Audit Document Checklist",
            description: "Essential documents required for trust account audits",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Bank Statements",
                description: "Complete bank statements for all trust accounts"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Reconciliation Reports",
                description: "Monthly reconciliation reports showing account balances"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Trial Balance",
                description: "Current trial balance from your accounting system"
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ledger Reports",
                description: "Detailed ledger reports for trust account transactions"
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "System Access",
                description: "Read-only access to your trust accounting system"
              }
            ]
          }),
        }}
      />

      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Trust Account Audit Checklist", href: "/trust-account-audit-checklist" },
        ]}
      />

      <main>

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
          <div className="container relative mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <Motion
                className="text-center lg:text-left"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-xs font-medium text-blue-950 mb-6">
                    <Grip className="size-4" />
                    <span className="tracking-widest">
                      Built for professional trust account audits
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-blue-950 mb-6">
                    Trust Account Audit Checklist
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Use this checklist to prepare the documents and access required for
                    a smooth audit. For cloud systems, you may grant read‑only access to{" "}
                    <a
                      href="mailto:info@auditspro.com.au"
                      className="text-blue-800 hover:text-blue-900"
                    >
                      info@auditspro.com.au
                    </a>
                    . Learn more about{" "}
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
                    <Image
                      src="/images/audit checklist.png"
                      alt="Trust Account Audit Checklist - Professional Audit Documentation"
                      width={320}
                      height={320}
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

      {/* Checklist content */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50/60 to-white/60">
        <div className="container relative mx-auto px-4 sm:px-6">
          <Motion
            className="bg-white/70 backdrop-blur rounded-xl border border-blue-200/70 p-8"
            {...motionVariants.fadeInUp}
            viewport={motionViewport}
            transition={motionTransitions.smooth}
          >
            <div className="grid gap-6 md:grid-cols-2">
          {/* Enhanced document checklist */}
          <div className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
              Document Checklist
            </div>
            <div className="space-y-4">
              <div className="text-sm text-slate-700 leading-relaxed space-y-2">
                <p>
                  <CheckCheck className="inline h-4 w-4 text-green-600 mr-1.5" />
                  <strong>Previous audit report</strong> (if applicable) -
                  Upload your last audit report for reference
                </p>
                <p>
                  <CheckCheck className="inline h-4 w-4 text-green-600 mr-1.5" />
                  <strong>Trust account bank statements</strong> - Provide
                  complete monthly statements in PDF format
                </p>
                <p>
                  <CheckCheck className="inline h-4 w-4 text-green-600 mr-1.5" />
                  <strong>System reconciliation reports</strong> - Export
                  reconciliation data from your accounting system
                </p>
                <p>
                  <CheckCheck className="inline h-4 w-4 text-green-600 mr-1.5" />
                  <strong>Trial balance & ledgers</strong> - Include detailed
                  trial balance and general ledger reports
                </p>
                <p>
                  <CheckCheck className="inline h-4 w-4 text-green-600 mr-1.5" />
                  <strong>Payment & receipt records</strong> - Comprehensive
                  transaction history for the audit period
                </p>
              </div>

              <div className="bg-white/70 rounded-lg border border-slate-200 p-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">
                  Document Formats Accepted:
                </h4>
                <div className="grid grid-cols-3 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>PDF Files</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>CSV Exports</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Bank Feeds Portal</span>
                  </div>
                </div>
              </div>

              {/* First audit documents integrated */}
              <div className="bg-white/70 rounded-lg border border-slate-200 p-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">
                  First Audit (Permanent folder uploads):
                </h4>
                <ul className="space-y-1 text-xs text-slate-700 list-disc pl-4">
                  <li>
                    Accountants — Professional body membership certificate
                  </li>
                  <li>
                    Estate Agents — Individual and/or Corporate Estate Agent
                    licence
                  </li>
                  <li>
                    Conveyancers — Individual and/or Corporate Conveyancer
                    licence
                  </li>
                  <li>
                    Solicitors — Practice Certificate issued by the relevant
                    state&apos;s law institute
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">
                  Cloud System Access (Recommended)
                </h4>
                <p className="text-sm text-slate-700 mb-3">
                  For faster processing, grant read-only access to your cloud
                  accounting system instead of uploading individual files.{" "}
                  <Link
                    href="/"
                    className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
                  >
                    Start your audit
                  </Link>{" "}
                  today.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-slate-600">Invite:</span>
                  <a
                    href="mailto:info@auditspro.com.au"
                    className="text-blue-800 hover:text-blue-900 font-medium"
                  >
                    info@auditspro.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NSW portal information (kept subtle) */}
          <div className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
              NSW Estate Agents & Conveyancers — information (collected in
              portal)
            </div>
            <p className="text-sm text-slate-700">
              For NSW clients, we capture the required information directly in
              our secure portal — no external spreadsheets are needed.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-200 bg-white/70 p-3">
                <div className="text-xs font-semibold text-slate-500">
                  Trust Account Details
                </div>
                <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li>BSB</li>
                  <li>Account Number</li>
                  <li>UID</li>
                  <li>Rental Trust (Yes/No)</li>
                  <li>Sales Trust (Yes/No)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white/70 p-3">
                <div className="text-xs font-semibold text-slate-500">
                  Licensee In Charge
                </div>
                <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li>Licence Number</li>
                  <li>First Name</li>
                  <li>Last Name</li>
                  <li>Phone Number</li>
                  <li>Email Address</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white/70 p-3 sm:col-span-2">
                <div className="text-xs font-semibold text-slate-500">
                  Licensee Entity
                </div>
                <ul className="mt-2 text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li>Entity Licence Number</li>
                  <li>Legal Business Name</li>
                  <li>Trading As</li>
                  <li>ABN</li>
                  <li>Phone Number</li>
                  <li>Website</li>
                  <li>Registered Address</li>
                  <li>Trading under a franchise? (Yes/No)</li>
                  <li>Franchise name (if applicable)</li>
                  <li>Franchise email (if applicable)</li>
                  <li>Software used for reports</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-600">
              UID requirement reference: NSW Government — Real estate trust
              accounts and audit requirements. See{" "}
              <a
                href="https://www.fairtrading.nsw.gov.au/housing-and-property/property-professionals/running-a-property-agency/trust-accounts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
              >
                Fair Trading guidance
              </a>
              .
            </div>
          </div>
            </div>
          </Motion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 bg-white/70 backdrop-blur">
        <div className="container relative mx-auto px-4 sm:px-6">
          <Motion
            className="max-w-2xl mx-auto"
            {...motionVariants.fadeInUp}
            viewport={motionViewport}
            transition={motionTransitions.smooth}
          >
            <div className="rounded-xl border border-blue-200/70 bg-gradient-to-br from-blue-50/60 to-indigo-50/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-blue-50/40">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M21 15a3 3 0 0 1-3 3H9l-4 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9Z"
                    stroke="#0c2a6f"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 9h6M9 13h3"
                    stroke="#0c2a6f"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Have Questions?
              </div>
              <h2 className="text-2xl font-semibold text-blue-950 mb-2">
                Need Help with Your Audit?
              </h2>
              <p className="text-slate-600">
                If you have questions about the checklist or need assistance
                with your audit requirements, we&apos;re here to help.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80"
                  placeholder="(02) 1234 5678"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80"
                >
                  <option value="">Select a topic</option>
                  <option value="checklist-question">
                    Question about checklist requirements
                  </option>
                  <option value="audit-process">Audit process inquiry</option>
                  <option value="pricing">Pricing and packages</option>
                  <option value="technical-support">Technical support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 resize-none"
                  placeholder="Please describe your question or request..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
                <div className="text-center">
                  <p className="text-xs text-slate-500">or</p>
                  <a
                    href="mailto:info@auditspro.com.au"
                    className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2"
                  >
                    Email directly
                  </a>
                </div>
              </div>
            </form>
            </div>
          </Motion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 bg-white/70 backdrop-blur">
        <div className="container relative mx-auto px-4 sm:px-6">
          <Motion
            className="text-center"
            {...motionVariants.fadeInUp}
            viewport={motionViewport}
            transition={motionTransitions.smooth}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Audit?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Now that you know what documents you need, learn more about our audit process or book a demo to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Book Demo
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </Motion>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Trust Account Audit Checklist - Document Requirements",
            "description": "Complete document checklist for trust account audits. Prepare bank statements, reconciliation reports, and system access for a smooth audit process.",
            "author": {
              "@type": "Organization",
              "name": "AuditsPro"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AuditsPro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://auditspro.com.au/audits_pro_icon/apple-touch-icon.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://auditspro.com.au/trust-account-audit-checklist"
            },
            "image": "https://auditspro.com.au/og-image.jpg"
          }),
        }}
      />

      {/* HowTo structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Prepare Documents for Trust Account Audit",
            "description": "Step-by-step guide to prepare all necessary documents for your trust account audit",
            "image": "https://auditspro.com.au/og-image.jpg",
            "totalTime": "PT30M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "AUD",
              "value": "549"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Bank statements in PDF format"
              },
              {
                "@type": "HowToSupply", 
                "name": "Trust account reconciliation reports"
              },
              {
                "@type": "HowToSupply",
                "name": "System trial balance and ledger reports"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Gather Previous Audit Report",
                "text": "Upload your last audit report for reference if applicable"
              },
              {
                "@type": "HowToStep",
                "name": "Collect Bank Statements",
                "text": "Provide complete monthly trust account bank statements in PDF format"
              },
              {
                "@type": "HowToStep",
                "name": "Export System Reports",
                "text": "Export reconciliation data, trial balance, and ledger reports from your accounting system"
              },
              {
                "@type": "HowToStep",
                "name": "Compile Transaction Records",
                "text": "Gather comprehensive payment and receipt records for the audit period"
              },
              {
                "@type": "HowToStep",
                "name": "Grant System Access",
                "text": "Optionally grant read-only access to your cloud accounting system for faster processing"
              }
            ]
          }),
        }}
      />
      </main>
    </div>
  );
}
