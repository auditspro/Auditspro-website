"use client";

import { Motion } from "@/components/ui/motion";
import {
  HandThumbUpIcon,
  FolderOpenIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

export function ProcessSection() {
  const steps = [
    {
      icon: HandThumbUpIcon,
      title: "Engage",
      desc: "Confirm scope, trust accounts, and timelines with a simple onboarding",
    },
    {
      icon: FolderOpenIcon,
      title: "Prepare",
      desc: "Provide bank statements, trust ledgers, and reconciliation records",
    },
    { icon: ShieldCheckIcon, title: "Audit", desc: "We perform procedures and test samples across trust records" },
    { icon: DocumentCheckIcon, title: "Report", desc: "Receive your certificate and recommendations for improvements" },
  ];

  return (
    <section className="container relative mx-auto px-4 sm:px-6 pb-16">
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
          How the Audit Works
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A streamlined four-step audit designed for broker operations.
        </p>
      </Motion>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, index) => (
          <Motion
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-lg bg-white border border-brand-200 shadow-sm"
          >
            <s.icon className="size-8 text-brand-700 mb-3" />
            <h3 className="font-semibold text-brand-950 mb-1">{s.title}</h3>
            <p className="text-sm text-slate-600">{s.desc}</p>
          </Motion>
        ))}
      </div>
    </section>
  );
}