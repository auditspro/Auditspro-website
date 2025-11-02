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

const realEstateFAQs: FAQ[] = [
  {
    id: "audit-frequency",
    question: "How often do real estate agents need trust account audits?",
    answer: "Real estate agents must have their trust accounts audited annually. The audit period typically runs from 1 July to 30 June, with reports due by 30 September in most Australian states. Some states may have different deadlines, so it's important to check your specific state requirements.",
    category: "general"
  },
  {
    id: "audit-cost",
    question: "How much does a real estate trust account audit cost?",
    answer: "Trust account audits cost $549 + GST per trust account. If you have multiple trust accounts, each account is charged $549 + GST. For example, 3 trust accounts would cost 3 × $549 + GST = $1,647 + GST total.",
    category: "costs"
  },
  {
    id: "audit-duration",
    question: "How long does a real estate trust account audit take?",
    answer: "Most real estate trust account audits are completed within 5-10 business days from receipt of all required documentation. The timeline depends on the volume of transactions, quality of record-keeping, and responsiveness in providing requested documents.",
    category: "process"
  },
  {
    id: "required-documents",
    question: "What documents do I need for my real estate audit?",
    answer: "You'll need bank statements, trust account registers, receipts, deposit books, monthly reconciliations, client ledgers, and any relevant correspondence. We provide a complete checklist upon engagement to ensure you have everything ready for a smooth audit process.",
    category: "process"
  },
  {
    id: "regulatory-compliance",
    question: "Are your audits regulatory compliant?",
    answer: "Yes, all our trust account audits are fully regulatory compliant and meet all Australian regulatory requirements for real estate agents. Our auditors are registered with professional accounting bodies and follow Australian Standards on Assurance Engagements (ASAE 3000 and ASAE 3100).",
    category: "compliance"
  },
  {
    id: "auditor-qualifications",
    question: "Who can conduct real estate trust account audits?",
    answer: "Audits must be conducted by qualified auditors who are members of professional accounting bodies such as CPA Australia, Chartered Accountants Australia and New Zealand, or the Institute of Public Accountants. The auditor must hold a Public Practising Certificate and be independent from your agency.",
    category: "compliance"
  },
  {
    id: "monthly-reconciliations",
    question: "Do I need to do monthly reconciliations?",
    answer: "Yes, monthly reconciliations are mandatory and critical for audit success. You should reconcile your trust accounts monthly (or more frequently) to identify discrepancies early. Daily reconciliation is considered the gold standard and makes the audit process much smoother.",
    category: "compliance"
  },
  {
    id: "audit-failure",
    question: "What happens if my trust account audit fails?",
    answer: "If your audit identifies non-compliance issues, you'll need to implement corrective actions immediately. Depending on the severity, this could result in fines, additional audits, or in extreme cases, licence suspension. We work with you to address any issues and ensure compliance.",
    category: "compliance"
  },
  {
    id: "multiple-accounts",
    question: "How much does it cost to audit multiple trust accounts?",
    answer: "Each trust account is charged $549 + GST individually. There are no volume discounts - if you maintain 2 trust accounts, the total cost is 2 × $549 + GST = $1,098 + GST. For 5 trust accounts, it would be 5 × $549 + GST = $2,745 + GST.",
    category: "costs"
  },
  {
    id: "audit-preparation",
    question: "How should I prepare for my trust account audit?",
    answer: "Start by ensuring all monthly reconciliations are up to date, organize your documentation, and review previous audit recommendations. Maintain clear separation between trust and business funds, ensure all transactions are properly authorized and documented, and keep detailed records throughout the year.",
    category: "process"
  },
  {
    id: "state-differences",
    question: "Do audit requirements differ between Australian states?",
    answer: "Yes, while the core principles are similar, each state has specific requirements for audit deadlines, reporting formats, and submission processes. For example, NSW uses the Auditor's Report Online portal, while other states have different submission methods. We handle all state-specific requirements for you.",
    category: "compliance"
  },
  {
    id: "trust-money-definition",
    question: "What constitutes trust money in real estate?",
    answer: "Trust money includes rental payments, sales deposits, advertising fees, maintenance funds, and any other money received on behalf of clients. This money must be kept separate from your business funds and can only be used for its intended purpose as directed by the client.",
    category: "general"
  },
  {
    id: "separate-audits",
    question: "Do I need separate audits for multiple trust accounts?",
    answer: "Each trust account requires individual audit coverage and is charged separately at $549 + GST per account. While they can be conducted as part of a single audit engagement for efficiency, each account is assessed and charged individually regardless of whether you maintain general or separate trust accounts.",
    category: "general"
  }
];

const categories = [
  { id: "all", label: "All Questions", count: realEstateFAQs.length },
  { id: "general", label: "General", count: realEstateFAQs.filter(faq => faq.category === "general").length },
  { id: "compliance", label: "Compliance", count: realEstateFAQs.filter(faq => faq.category === "compliance").length },
  { id: "process", label: "Process", count: realEstateFAQs.filter(faq => faq.category === "process").length },
  { id: "costs", label: "Costs", count: realEstateFAQs.filter(faq => faq.category === "costs").length },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const filteredFAQs = activeCategory === "all" 
    ? realEstateFAQs 
    : realEstateFAQs.filter(faq => faq.category === activeCategory);

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
              Real Estate Trust Account Audit FAQs
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get answers to the most common questions about real estate trust account audits, 
              compliance requirements, and the audit process. Based on real-world queries from 
              Australian real estate professionals.
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
                Can't find the answer you're looking for? Our real estate audit experts are here to help. 
                We also provide specialized audit services for{" "}
                <Link
                  href="/services/solicitors"
                  className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                >
                  solicitors
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