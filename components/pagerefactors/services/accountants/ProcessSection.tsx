"use client";

import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";

export function ProcessSection() {
  const steps = [
    {
      icon: ClipboardDocumentListIcon,
      title: "Engage",
      desc: "We confirm scope, pricing, and provide the documentation checklist.",
    },
    {
      icon: CalculatorIcon,
      title: "Prepare",
      desc: "Upload bank statements, ledgers, receipts, and reconciliations to the secure portal.",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Audit",
      desc: "We perform APES 310 procedures and verify trust account compliance.",
    },
    {
      icon: DocumentCheckIcon,
      title: "Report",
      desc: "Receive submission‑ready audit certificate with recommendations.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={motionTransitions.smooth}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-2">
            Our Accounting Trust Account Audit Process
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Designed to minimize disruption and deliver compliant outcomes quickly.
          </p>
        </Motion>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Motion
              key={s.title}
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={{ ...motionTransitions.smooth, delay: i * 0.05 }}
              className="rounded-xl border border-brand-200 bg-white p-6 text-center shadow-sm hover:shadow-md"
            >
              <s.icon className="size-7 text-brand-700 mx-auto mb-3" />
              <h3 className="font-semibold text-brand-950 mb-1">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}
