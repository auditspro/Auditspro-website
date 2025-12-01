"use client";

import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "Do you audit general trust and controlled money accounts?",
    a: "Yes. We audit client money/trust accounts as per APES 310 and your professional body requirements.",
  },
  {
    q: "How fast can we get the audit report?",
    a: "Typical completion is within 5–10 business days from receiving complete documentation.",
  },
  {
    q: "Can you work fully remote?",
    a: "Yes. We use a secure portal for document exchange and conduct audits remotely unless an onsite visit is needed.",
  },
  {
    q: "Is pricing fixed?",
    a: "Our pricing is transparent and fixed for standard scope. Complex cases may have an agreed adjustment.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={motionTransitions.smooth}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/70 px-4 py-2 text-sm font-medium text-brand-900">
            <QuestionMarkCircleIcon className="size-4" />
            Frequently Asked Questions
          </div>
        </Motion>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <Motion
              key={item.q}
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={{ ...motionTransitions.smooth, delay: i * 0.05 }}
              className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-brand-950">{item.q}</h3>
              <p className="text-sm text-slate-600 mt-2">{item.a}</p>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}