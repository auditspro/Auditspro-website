"use client";

import { Motion } from "@/components/ui/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      q: "Do mortgage brokers need trust account audits?",
      a: "If you hold client funds or handle commissions through a trust account, an annual audit is typically required to demonstrate compliance and proper stewardship.",
    },
    {
      q: "What documents do you need?",
      a: "Bank statements, trust ledgers, monthly reconciliations, receipts and payments, commission registers, and any lender or aggregator compliance requirements.",
    },
    {
      q: "How long does the audit take?",
      a: "We respond within 24 hours. Most audits complete within 5–10 business days once records are provided.",
    },
    {
      q: "How is pricing structured?",
      a: "Transparent fixed pricing per trust account. Volume or multi-account arrangements are available on request.",
    },
  ];

  return (
    <section className="container relative mx-auto px-4 sm:px-6 pb-16">
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Quick answers for mortgage broker trust account audits.</p>
      </Motion>

      <div className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}