import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  FolderOpen,
  Search,
  FileCheck,
  ShieldCheck,
  ClipboardList,
  UserCheck,
  CheckCircle2,
  Clock,
  DollarSign,
  Award,
  Users,
  Grip,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import Link from "next/link";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "How Trust Account Audits Work | AuditsPro AU",
  description:
    "Learn about our professional trust account audit process. Fixed pricing from $549 + GST, 5-10 business day turnaround, and ASIC compliant reporting for Australian businesses.",
  keywords:
    "trust account audit process, ASIC compliance, audit procedure, real estate audit, conveyancer audit, solicitor audit, Australia",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How Trust Account Audits Work | AuditsPro AU",
    description:
      "Professional trust account audit process with fixed pricing and fast turnaround. Learn how our ASIC compliant audits work.",
    url: "/how-it-works",
    siteName: "AuditsPro",
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How Trust Account Audits Work - AuditsPro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Trust Account Audits Work | AuditsPro AU",
    description:
      "Professional trust account audit process with fixed pricing from $549 + GST and 5-10 business day turnaround.",
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

export default function HowItWorks() {
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
        name: "How It Works",
        item: "/how-it-works",
      },
    ],
  };

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Set Breadcrumbs */}
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "How It Works", href: "/how-it-works" },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How Trust Account Audits Work",
            description:
              "Step-by-step guide to professional trust account audits with fixed pricing and fast turnaround",
            totalTime: "P10D",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "AUD",
              value: "549",
            },
            supply: [
              {
                "@type": "HowToSupply",
                name: "Bank statements",
              },
              {
                "@type": "HowToSupply",
                name: "Reconciliation reports",
              },
              {
                "@type": "HowToSupply",
                name: "System access credentials",
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Initial Consultation",
                text: "Contact us to discuss your audit requirements and receive a fixed price quote",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Document Preparation",
                text: "Gather required documents including bank statements, reconciliation reports, and system access",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Audit Execution",
                text: "Our certified auditors conduct a comprehensive review of your trust account records",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Report Delivery",
                text: "Receive your completed audit report within 5-10 business days",
              },
            ],
          }),
        }}
      />

      {/* Main Content */}
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white">
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
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-xs font-medium text-blue-950 mb-3">
                    {/* Process icon */}
                    <Grip className="size-4" />
                    <span className="tracking-widest">Professional audit process</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    How Trust Account Audits Work
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    A clear, compliant process led by specialised trust account
                    auditors. Fixed pricing from $549 + GST with most audits completed
                    within 5–10 business days.{" "}
                    <Link
                      href="/trust-account-audit-checklist"
                      className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
                    >
                      View our document checklist
                    </Link>{" "}
                    to get started.
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
                      src="/images/how it works.png"
                      alt="How Trust Account Audits Work - Professional Audit Process"
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

        {/* Key Benefits Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50/60 to-white/60">
          <div className="container relative mx-auto px-4 sm:px-6">
            <Motion
              className="text-center mb-12"
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Why Choose Our Audit Process
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                Transparent, efficient, and compliant trust account audits designed
                for Australian businesses.
              </p>
            </Motion>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  icon: DollarSign,
                  title: "Fixed Pricing",
                  desc: "Transparent pricing from $549 + GST with no hidden fees or surprises",
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  desc: "Most audits completed within 5-10 business days from document receipt",
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
            </div>
          </div>
        </section>

        {/* Process steps */}
        <section className="relative py-16 bg-white/70 backdrop-blur">
          <div className="container relative mx-auto px-4 sm:px-6">
            <Motion
              className="text-center mb-12"
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Our Audit Process
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                We follow a structured, professional approach to ensure your trust
                account audit is thorough, compliant, and delivered on time.
              </p>
            </Motion>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Phone,
              title: "Initial Consultation",
              desc: "We confirm scope, timelines, and regulatory requirements relevant to your profession and discuss any specific concerns.",
            },
            {
              icon: FolderOpen,
              title: "Document Collection",
              desc: "You provide bank statements, trust ledger, receipts, reconciliations, and other records using our comprehensive document checklist.",
            },
            {
              icon: Search,
              title: "Audit Execution",
              desc: "We test transactions, verify balances, assess controls against Australian standards, and identify any compliance issues.",
            },
            {
              icon: FileCheck,
              title: "Report & Recommendations",
              desc: "Receive a compliant report with clear findings and practical remediation guidance where applicable.",
            },
          ].map(({ icon: Icon, title, desc }, index) => (
            <Motion
              key={title}
              className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 relative"
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={{
                ...motionTransitions.smooth,
                delay: index * 0.1,
              }}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                <Icon className="size-4" />
                {title}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {desc}
                {title === "Document Collection" && (
                  <>
                    {" "}
                    <Link
                      href="/trust-account-audit-checklist"
                      className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
                    >
                      View our checklist
                    </Link>{" "}
                    to prepare.
                  </>
                )}
              </p>
            </Motion>
          ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50/60 to-white/60">
          <div className="container relative mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-blue-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/40">
              <Motion
                className="text-center mb-8"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                  What You&apos;ll Receive
                </h2>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                  Our comprehensive audit deliverables ensure you have everything
                  needed for regulatory compliance and business confidence.
                </p>
              </Motion>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileCheck,
                title: "Audit Report",
                desc: "Comprehensive report detailing findings, compliance status, and recommendations in accordance with Australian auditing standards.",
              },
              {
                icon: ShieldCheck,
                title: "Compliance Certificate",
                desc: "Official certification of your trust account audit completion for regulatory submission and record-keeping.",
              },
              {
                icon: ClipboardList,
                title: "Management Letter",
                desc: "Detailed recommendations for improving controls, processes, and compliance procedures where applicable.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Motion
                key={title}
                className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40"
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
          </div>
            </div>
          </div>
        </section>

        {/* Compliance & Standards Section */}
        <section className="relative py-16 bg-white/70 backdrop-blur">
          <div className="container relative mx-auto px-4 sm:px-6">
            <Motion
              className="text-center mb-12"
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={motionTransitions.smooth}
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                Compliance & Standards
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                Our audits are conducted in accordance with Australian auditing
                standards and regulatory requirements.
              </p>
            </Motion>
        <div className="grid gap-6 md:grid-cols-2">
          <Motion
            className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40"
            {...motionVariants.slideInLeft}
            viewport={motionViewport}
            transition={motionTransitions.smooth}
          >
            <h3 className="text-lg font-medium text-blue-950 mb-4">
              Australian Standards
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                Australian Auditing Standards (ASAs)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                ASIC Regulatory Guide requirements
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                Professional conduct standards
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                State-specific trust account regulations
              </li>
            </ul>
          </Motion>
          <Motion
            className="rounded-xl border border-blue-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40"
            {...motionVariants.slideInRight}
            viewport={motionViewport}
            transition={motionTransitions.smooth}
          >
            <h3 className="text-lg font-medium text-blue-950 mb-4">
              Industry Coverage
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <UserCheck className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                Real Estate Agents & Property Managers
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                Conveyancers & Settlement Agents
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                Solicitors & Law Firms
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                Other Trust Account Holders
              </li>
            </ul>
          </Motion>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50/60 to-white/60">
          <div className="container relative mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-blue-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/40">
              <Motion
                className="text-center mb-8"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
                  Have Questions?
                </h2>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                  Need clarification about our audit process or have specific
                  requirements? We&apos;re here to help.
                </p>
              </Motion>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Business/Organisation
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Industry Type
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your industry</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="conveyancing">Conveyancing</option>
                  <option value="legal">Legal Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your Question or Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Please describe your question or specific requirements..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button type="submit" size="lg" className="gap-2">
                  Send Message
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="mailto:info@auditspro.com.au">
                    Email Directly
                  </Link>
                </Button>
              </div>
            </form>
          </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 bg-white/70 backdrop-blur">
          <div className="container relative mx-auto px-4 sm:px-6">
            <Motion
              className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40 flex items-center justify-between gap-4 flex-col sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <h3 className="text-lg font-medium text-blue-950">
                  Ready to get started?
                </h3>
                <p className="text-sm text-slate-600">
                  Book a demo or view our document checklist to prepare for your
                  audit.
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Link
                  href="/book-demo"
                  className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
                >
                  <Clock className="w-4 h-4" />
                  Start Audit
                </Link>
                <Link
                  href="/trust-account-audit-checklist"
                  className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  View Checklist
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </Motion>
          </div>
        </section>

      {/* JSON-LD structured data */}
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
            "@type": "Service",
            name: "Trust Account Audit Process",
            description:
              "Professional trust account audit process with fixed pricing from $549 + GST and 5-10 business day turnaround for Australian businesses.",
            provider: {
              "@type": "Organization",
              name: "AuditsPro",
              url: "https://auditspro.com.au",
            },
            areaServed: "Australia",
            serviceType: "Trust Account Audit",
            offers: {
              "@type": "Offer",
              price: "549",
              priceCurrency: "AUD",
              description:
                "Fixed pricing from $549 + GST for trust account audits",
            },
          }),
        }}
      />
      </main>
    </div>
  );
}
