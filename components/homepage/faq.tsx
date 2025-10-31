"use client";
import { motion } from "framer-motion";
import { QuestionMarkCircleIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export function FAQ() {
  const faqs = [
    {
      q: "What is a trust account audit?",
      a: "An independent examination of your trust account records to confirm compliance with the rules that apply to your profession and state. We assess systems, reconciliations, and selected transactions and issue a report suitable for regulators.",
    },
    {
      q: "Who needs a trust account audit?",
      a: "Professionals who hold client money in trust, such as real estate agents, conveyancers, solicitors, and some accountants, typically require annual audits under state-based legislation or professional standards.",
    },
    {
      q: "What do you need from us?",
      a: "Bank statements for the audit period, trust ledgers and reports (reconciliations, trial balance, receipts and payments), and supporting documents for selected samples. Alternatively, grant read-only access inside your system to info@auditspro.com.au.",
    },
    {
      q: "How do read-only connections work?",
      a: "Access is consent-based and scoped to the minimum data required for audit evidence. Planned future connections include Xero, MYOB, QuickBooks, PropertyMe, Property Tree, Console Cloud, LEAP, Smokeball, and bank feeds (Basiq).",
    },
    {
      q: "How long does a standard audit take?",
      a: "Most audits complete within 5–10 business days after we receive complete documentation or access and any clarifications needed during testing.",
    },
    {
      q: "What if you identify exceptions?",
      a: "We document findings clearly and provide practical remediation guidance. Your auditor will explain implications and steps to address control gaps or process issues.",
    },
    {
      q: "How is pricing handled?",
      a: "Transparent fixed-fee proposals are provided before commencement based on scope, volume, and complexity. Any additional work is agreed in writing.",
    },
    {
      q: "Where is our data stored?",
      a: "Primary storage is in Australia (ap-southeast-2). Non‑sensitive static assets may be served via a global CDN; all access is encrypted over HTTPS.",
    },
    {
      q: "How do we communicate during the audit?",
      a: "Everything lives in the client portal: messages, requests, documents, and status. The unified workflow keeps preparation simple and helps auditors finish efficiently.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 overflow-hidden border-t border-blue-200/50"
      aria-labelledby="faq-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10 pt-8"
      >
        <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">
          Frequently Asked Questions
        </div>
        <div className="flex items-center justify-center gap-3 mb-3">
          <QuestionMarkCircleIcon className="size-7 text-blue-700" aria-hidden="true" />
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950"
          >
            Answers for trust account audits
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Practical answers about audits, access, data handling, and timelines.
          Always guided by professional judgement.
        </p>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex justify-center mb-12"
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80">
          {/* Circular frame with gradient background */}
          <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white border-4 border-blue-200/30 shadow-xl">
            <Image
              src="/images/Gemini_Generated_Image_dvmvrzdvmvrzdvmv.png"
              alt="Professional consultation scene with business advisor and client"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 320px"
              priority={false}
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {faqs.map(({ q, a }) => (
          <motion.div
            key={q}
            className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 px-3 py-1.5 text-sm font-medium mb-4" style={{ backgroundColor: '#1d4ed8', color: 'white' }}>
              <CheckCircleIcon className="size-4" />
              {q}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40 mt-8 flex items-center justify-between gap-4 flex-col sm:flex-row">
        <div>
          <h3 className="text-lg font-medium text-blue-950">
            Still have questions?
          </h3>
          <p className="text-sm text-slate-600">
            Explore the checklist or contact us for a walkthrough.
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Link
            href="/trust-account-audit-checklist"
            className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
          >
            <CheckCircleIcon className="w-4 h-4" />
            View Checklist
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
          >
            <QuestionMarkCircleIcon className="w-4 h-4" />
            How it works
          </Link>
          <Link
            href="/book-demo"
            className="text-sm text-blue-800 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-1"
          >
            <ClockIcon className="w-4 h-4" />
            Start Audit
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
