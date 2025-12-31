"use client";

import { useState } from "react";
import { Motion } from "@/components/ui/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  QuestionMarkCircleIcon, 
  BanknotesIcon, 
  ClockIcon, 
  DocumentCheckIcon,
  ShieldCheckIcon 
} from "@heroicons/react/24/outline";

interface FAQSectionProps {
  state?: string;
}

const mortgageBrokerFAQs = [
  {
    id: "audit-requirement",
    category: "general",
    question: "Do I need a trust account audit?",
    answer: "If you are an Australian Credit Licence (ACL) holder and you hold client funds in a trust account (e.g., pending settlement or commission distribution), you are generally required to have that trust account audited annually under the National Consumer Credit Protection Act 2009."
  },
  {
    id: "audit-deadline",
    category: "deadlines",
    question: "When is the audit due?",
    answer: "For most ACL holders, the trust account audit report (Form 70) must be lodged with ASIC within 3 months of the end of the financial year (typically by 30 September)."
  },
  {
    id: "documents-needed",
    category: "process",
    question: "What documents are required?",
    answer: "You will typically need to provide bank statements, trust account ledgers, monthly reconciliation reports, deposit and withdrawal records, and a register of commissions received."
  },
  {
    id: "audit-cost",
    category: "pricing",
    question: "How much does the audit cost?",
    answer: "Our standard pricing for a mortgage broker trust account audit starts from $549 + GST per trust account. We offer fixed-fee pricing with no hidden costs."
  },
  {
    id: "nil-return",
    category: "general",
    question: "What if I didn't hold any trust money?",
    answer: "If you opened a trust account but did not hold any money in it during the audit period, you may still need to lodge a declaration or a 'nil return' as part of your annual compliance certificate. Check your specific license conditions."
  },
  {
    id: "audit-submission",
    category: "process",
    question: "How is the audit submitted?",
    answer: "The audit report is typically submitted online via the ASIC Regulatory Portal. In some cases, the auditor may lodge it directly, or provide you with the signed report to upload."
  },
];

export function FAQSection({ state }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getStateSpecificFAQs = () => {
    let faqs = [...mortgageBrokerFAQs];

    // NSW Specific Logic (even though regulation is Federal, we tailor the language)
    if (state === "NSW") {
      faqs = faqs.map(faq => {
        if (faq.id === "audit-deadline") {
          return {
            ...faq,
            answer: "In NSW, as in other states under federal law, your trust account audit is typically due by 30 September (3 months after the financial year ends). It must be lodged with ASIC."
          };
        }
        if (faq.id === "audit-cost") {
           return {
             ...faq,
             answer: "For NSW mortgage brokers, our audit fee is $549 + GST per trust account. This covers the comprehensive review required for ASIC compliance."
           };
        }
        return faq;
      });
    }

    return faqs;
  };

  const currentFAQs = getStateSpecificFAQs();
  const filteredFAQs = activeCategory === "all" 
    ? currentFAQs 
    : currentFAQs.filter(faq => faq.category === activeCategory);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "deadlines", label: "Deadlines" },
    { id: "process", label: "Process" },
    { id: "pricing", label: "Pricing" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-950 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about mortgage broker trust account audits{state ? ` in ${state}` : ""}.
          </p>
        </Motion>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-900 text-white shadow-md transform scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-brand-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Motion
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={faq.id} 
                  className="border border-slate-200 rounded-xl bg-slate-50/50 px-4 overflow-hidden data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-brand-950 py-4 hover:no-underline hover:text-brand-700">
                    <span className="flex items-center gap-3">
                      {faq.category === 'pricing' && <BanknotesIcon className="size-5 text-emerald-600 shrink-0" />}
                      {faq.category === 'deadlines' && <ClockIcon className="size-5 text-amber-600 shrink-0" />}
                      {faq.category === 'process' && <DocumentCheckIcon className="size-5 text-blue-600 shrink-0" />}
                      {faq.category === 'general' && <QuestionMarkCircleIcon className="size-5 text-brand-600 shrink-0" />}
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Motion>
            ))}
          </Accordion>
        </div>

        {/* Support CTA */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 p-4 bg-brand-50 rounded-2xl border border-brand-100">
            <ShieldCheckIcon className="size-6 text-brand-600" />
            <span className="text-brand-900 font-medium">Still have questions?</span>
            <a href="/contact" className="text-brand-700 font-bold hover:underline">
              Contact our compliance team &rarr;
            </a>
          </div>
        </Motion>
      </div>
    </section>
  );
}
