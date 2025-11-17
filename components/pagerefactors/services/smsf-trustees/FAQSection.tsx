"use client";

import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "What is included in an SMSF audit?",
    a: "Our SMSF audit includes a financial audit and a compliance audit. We verify financial statements, bank reconciliations, investment balances, and member transactions. We also assess compliance with the SIS Act and SISR, including contributions, pensions, investment restrictions, and related party rules.",
  },
  {
    q: "How long does the audit take?",
    a: "Typical turnaround is 5–10 business days once all required documents are provided. We maintain a 24‑hour response policy for queries throughout the process.",
  },
  {
    q: "What documents do I need to provide?",
    a: "Trust deed and any amendments, member statements, bank statements for the audit period, investment reports, contribution and pension documentation, and any compliance notes.",
  },
  {
    q: "Do you offer fixed pricing?",
    a: "Yes, our pricing starts from $549 + GST and varies by state and fund complexity. See the pricing section above for details.",
  },
  {
    q: "Are audits conducted online?",
    a: "Yes — our process is 100% online through a secure portal with bank‑grade encryption. We can optionally accommodate read‑only access to accounting systems to speed up verification.",
  },
];

export function FAQSection() {
  const faqSchema = {
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
    <section className="container mx-auto px-4 sm:px-6 py-16">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={motionTransitions.smooth}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40 mb-4">
          <QuestionMarkCircleIcon className="size-4" />
          <span>SMSF Audit FAQs</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          Clear answers to common questions about SMSF audits, documentation, and compliance.
        </p>
      </Motion>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map(({ q, a }, i) => (
          <Motion
            key={q}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: i * 0.05 }}
            className="rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40"
          >
            <h3 className="text-lg font-semibold text-brand-950 mb-2">{q}</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{a}</p>
          </Motion>
        ))}
      </div>
    </section>
  );
}