"use client";

import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  DocumentCheckIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ClockIcon,
  ChartBarIcon,
  LockClosedIcon,
  CalculatorIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export function FeaturesSection() {
  const features = [
    {
      icon: DocumentCheckIcon,
      title: "APES 310 Audit Procedures",
      desc: "Procedures aligned to APES 310 for client money and trust records",
    },
    {
      icon: ShieldCheckIcon,
      title: "Professional Body Compliance",
      desc: "CPA Australia, CA ANZ, and IPA requirements supported",
    },
    {
      icon: CalculatorIcon,
      title: "Reconciliation Review",
      desc: "Bank, ledger, receipts, and journal reconciliation checks",
    },
    {
      icon: ChartBarIcon,
      title: "Clear Reporting",
      desc: "Submission‑ready audit certificate and practical recommendations",
    },
    {
      icon: LockClosedIcon,
      title: "Secure Portal",
      desc: "Encrypted document exchange — no onsite visits required",
    },
    {
      icon: ClockIcon,
      title: "Fast Turnaround",
      desc: "24‑hour response; completion within 5–10 business days",
    },
  ];

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
            <Squares2X2Icon className="size-4" />
            Core Features
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight text-brand-950">
            A Process Built for Accounting Practices
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Everything you need for compliant trust account audits, end‑to‑end.
          </p>
        </Motion>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Motion
              key={f.title}
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={{ ...motionTransitions.smooth, delay: i * 0.05 }}
              className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <f.icon className="size-7 text-brand-700 mb-3" />
              <h3 className="font-semibold text-brand-950 mb-1">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </Motion>
          ))}
        </div>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link href="/services" className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900 font-medium">
            Explore all services
            <BookOpenIcon className="size-4" />
          </Link>
        </Motion>
      </div>
    </section>
  );
}
