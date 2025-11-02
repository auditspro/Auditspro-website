"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "compliance" | "process" | "costs";
}

const solicitorFAQs: FAQ[] = [
  {
    id: "audit-frequency",
    question: "How often do solicitors need trust account audits?",
    answer: "Solicitors must have their trust accounts audited annually by an approved External Examiner. The audit period typically runs from 1 April to 31 March, with reports due by 31 May in most Australian states. Each state has specific deadlines under the Legal Profession Uniform Law.",
    category: "general"
  },
  {
    id: "audit-cost",
    question: "How much does a solicitor trust account audit cost?",
    answer: "Trust account audits cost $1,949 + GST per trust account. If you have multiple trust accounts, each account is charged $1,949 + GST. For example, 2 trust accounts would cost 2 × $1,949 + GST = $3,898 + GST total.",
    category: "costs"
  },
  {
    id: "audit-duration",
    question: "How long does a legal practice audit take?",
    answer: "Most legal practice trust account audits are completed within 5-10 business days from receipt of all required documentation. The timeline depends on the complexity of your practice, volume of transactions, and quality of record-keeping.",
    category: "process"
  },
  {
    id: "required-documents",
    question: "What documents do I need for my legal audit?",
    answer: "You'll need trust account records, client fund documentation, bank statements, monthly reconciliations, client ledgers, trust receipts and payments journals, and Law Society compliance records. We provide a complete checklist upon engagement.",
    category: "process"
  },
  {
    id: "law-society-compliance",
    question: "Are your audits Law Society compliant?",
    answer: "Yes, all our trust account audits are fully Law Society compliant and meet Legal Profession Uniform Law standards across all Australian states. Our auditors are registered company auditors under Section 1280 of the Corporations Act 2001.",
    category: "compliance"
  },
  {
    id: "external-examiner-qualifications",
    question: "Who can conduct solicitor trust account audits?",
    answer: "Only registered company auditors appointed under Section 1280 of the Corporations Act 2001 can conduct External Examiner reports. The auditor must be independent from your law practice and hold appropriate professional registration.",
    category: "compliance"
  },
  {
    id: "trust-lodgement-portal",
    question: "How do I submit my audit report to the Law Society?",
    answer: "In NSW, audit reports must be submitted via the Trust Lodgement Portal (TLP). Other states have their own online portals. You must notify the Law Society in writing of your External Examiner appointment before the audit begins.",
    category: "process"
  },
  {
    id: "audit-failure-consequences",
    question: "What happens if my trust account audit fails?",
    answer: "If your audit identifies non-compliance issues, you must implement corrective actions immediately. Depending on severity, this could result in fines, additional audits, Law Society investigation, or in extreme cases, practising certificate suspension. We work with you to address any issues.",
    category: "compliance"
  },
  {
    id: "multiple-trust-accounts",
    question: "How much does it cost to audit multiple trust accounts?",
    answer: "Each trust account is charged $1,949 + GST individually. There are no volume discounts - if you maintain 2 trust accounts, the total cost is 2 × $1,949 + GST = $3,898 + GST. For 3 trust accounts, it would be 3 × $1,949 + GST = $5,847 + GST.",
    category: "costs"
  },
  {
    id: "audit-preparation",
    question: "How should I prepare for my trust account audit?",
    answer: "Ensure all monthly reconciliations are current, organize documentation systematically, review previous audit recommendations, maintain clear separation between trust and business funds, and ensure all transactions are properly authorized and documented throughout the year.",
    category: "process"
  },
  {
    id: "state-law-differences",
    question: "Do audit requirements differ between Australian states?",
    answer: "Yes, while the Legal Profession Uniform Law provides consistency, each state has specific requirements for audit deadlines, reporting formats, and submission processes. NSW uses the Trust Lodgement Portal, while Victoria uses LSB Online. We handle all state-specific requirements.",
    category: "compliance"
  },
  {
    id: "trust-money-definition",
    question: "What constitutes trust money for solicitors?",
    answer: "Trust money includes client funds held for property settlements, court deposits, advance cost payments, settlement proceeds, and any money received on behalf of clients. This excludes transit money (money received with instructions to pay to a third party immediately).",
    category: "general"
  },
  {
    id: "controlled-money-accounts",
    question: "Do I need audits for controlled money accounts?",
    answer: "Yes, controlled money accounts (kept for exclusive use of specific clients) require audit coverage and are charged separately at $1,949 + GST per account. These are distinct from general trust accounts and must be included in your External Examiner's scope.",
    category: "general"
  },
  {
    id: "fidelity-fund-claims",
    question: "What is the Legal Practitioners Fidelity Fund?",
    answer: "The Fidelity Fund provides compensation to clients who suffer financial loss due to dishonest handling of trust money by solicitors. Proper trust account audits help prevent issues that could lead to Fidelity Fund claims and protect both clients and practitioners.",
    category: "compliance"
  }
];

const categories = [
  { id: "all", label: "All Questions", count: solicitorFAQs.length },
  { id: "general", label: "General", count: solicitorFAQs.filter(faq => faq.category === "general").length },
  { id: "compliance", label: "Compliance", count: solicitorFAQs.filter(faq => faq.category === "compliance").length },
  { id: "process", label: "Process", count: solicitorFAQs.filter(faq => faq.category === "process").length },
  { id: "costs", label: "Costs", count: solicitorFAQs.filter(faq => faq.category === "costs").length },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const filteredFAQs = activeCategory === "all" 
    ? solicitorFAQs 
    : solicitorFAQs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
                <QuestionMarkCircleIcon className="size-4" />
                <span>Frequently Asked Questions</span>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-brand-950 mb-4">
              Solicitor Trust Account Audit FAQs
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get answers to the most common questions about solicitor trust account audits, 
              Law Society compliance, and the External Examiner process. Based on real-world queries from 
              Australian legal professionals.
            </p>
          </Motion>

          {/* Category Filter */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-brand-900 text-white shadow-md"
                      : "bg-white/80 text-slate-700 hover:bg-brand-50 border border-brand-200/50"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </Motion>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <Motion
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="bg-white/80 backdrop-blur border border-brand-200/50 rounded-xl overflow-hidden supports-[backdrop-filter]:bg-white/60 shadow-sm hover:shadow-md transition-all duration-200">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-50/50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-brand-950 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === faq.id ? (
                          <ChevronUpIcon className="size-5 text-brand-600" />
                        ) : (
                          <ChevronDownIcon className="size-5 text-brand-600" />
                        )}
                      </div>
                    </button>
                    
                    {openFAQ === faq.id && (
                      <Motion
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 border-t border-brand-200/30">
                          <p className="text-slate-700 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </Motion>
                    )}
                  </div>
                </Motion>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200/50 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2 text-brand-950">
                Still Have Questions?
              </h3>
              <p className="text-slate-600 mb-6">
                Can't find the answer you're looking for? Our legal audit experts are here to help. 
                We also provide specialized audit services for{" "}
                <Link
                  href="/services/real-estate-agents"
                  className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                >
                  real estate agents
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/conveyancers"
                  className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                >
                  conveyancers
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 shadow-md hover:shadow-lg transition-all">
                    Get Expert Help
                  </button>
                </Link>
                <Link href="/how-it-works">
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-300 bg-white text-brand-900 px-6 py-3 font-medium hover:bg-brand-50 hover:border-brand-400 transition-all">
                    Learn More
                    <ArrowRightIcon className="size-4" />
                  </button>
                </Link>
              </div>
            </div>
          </Motion>
        </div>
      </section>
    </>
  );
}