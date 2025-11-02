import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";

// FAQ data with SEO optimization
const faqItems = [
  {
    question: "What is included in a trust account audit?",
    answer: "Our comprehensive regulatory compliant trust account audit includes review of trust account records, client money handling procedures, bank reconciliations, compliance with regulatory requirements, and detailed reporting with recommendations. All audits meet professional standards for real estate agents, conveyancers, solicitors, and other Australian professionals."
  },
  {
    question: "How long does the trust account audit process take?",
    answer: "Most professional trust account audits are completed within 5-10 business days from receipt of all required documentation. Complex multi-entity audits or solicitor trust account audits may take slightly longer. We provide priority processing for urgent audit requirements."
  },
  {
    question: "What documentation do I need to provide for my audit?",
    answer: "You'll need trust account statements, monthly reconciliations, client ledgers, deposit books, and any relevant correspondence. We provide a detailed audit checklist upon engagement that covers all regulatory requirements for your specific profession and state."
  },
  {
    question: "Are your trust account audits regulatory compliant?",
    answer: "Yes, all our trust account audits meet regulatory requirements and relevant professional regulatory standards across all Australian states. Our IPA qualified auditors have extensive experience in trust account compliance for real estate, conveyancing, legal, and accounting professions."
  },
  {
    question: "What are your trust account audit fees?",
    answer: "Our transparent audit pricing starts from $549 + GST with no hidden fees. Pricing varies by profession and complexity - real estate agent audits, conveyancer audits, and accountant audits start at $549, while solicitor trust account audits are $649. View our pricing page for detailed information."
  },
  {
    question: "Do you provide ongoing audit support?",
    answer: "Yes, we provide comprehensive ongoing support throughout the audit process and are available to answer questions about our findings and recommendations. Our team includes direct access to your assigned auditor and year-round compliance guidance."
  }
];

// FAQ Schema for SEO
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq, index) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export function FAQSection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={motionVariants.fadeInUp}
          transition={motionTransitions.smooth}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-brand-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            Common questions about our <Link href="/services" className="text-brand-600 hover:text-brand-700 underline font-medium">trust account audit services</Link> and 
            <Link href="/pricing" className="text-brand-600 hover:text-brand-700 underline font-medium">audit pricing</Link> process. 
            Learn more about our <Link href="/services/solicitors" className="text-brand-600 hover:text-brand-700 underline font-medium">solicitor audits</Link> and 
            <Link href="/services/accountants" className="text-brand-600 hover:text-brand-700 underline font-medium">accountant audit services</Link>.
          </p>
        </Motion>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((faq, index) => (
              <Motion
                key={faq.question}
                initial="hidden"
                whileInView="visible"
                viewport={motionViewport}
                variants={motionVariants.fadeInUp}
                transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                className="rounded-xl border border-brand-200/50 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-semibold text-brand-950">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </Motion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}