"use client";

import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";

export function ProcessSection() {
  const steps = [
    {
      icon: ClipboardDocumentListIcon,
      title: "Provide Fund Details",
      description:
        "Share SMSF details, members, trustees, and accounting records via our secure portal.",
      features: ["Fund deed & addendums", "Member statements", "Bank statements", "Investment reports"],
      delay: 0.1,
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Compliance Review",
      description:
        "We review contributions, pensions, investment restrictions, and in‑house asset limits against SIS Act & SISR.",
      features: ["Contributions check", "Pension standards", "Related party rules", "Investment restrictions"],
      delay: 0.2,
    },
    {
      icon: ShieldCheckIcon,
      title: "Risk & Controls Assessment",
      description:
        "Assess reconciliations, segregation of assets, approvals, and documentation quality for audit readiness.",
      features: ["Reconciliation verification", "Segregation of assets", "Approval workflows", "Records completeness"],
      delay: 0.3,
    },
    {
      icon: DocumentCheckIcon,
      title: "Audit Fieldwork",
      description:
        "Perform testing, verify balances and transactions, and document findings with professional standards.",
      features: ["Testing procedures", "Balance verification", "Transaction sampling", "Findings log"],
      delay: 0.4,
    },
    {
      icon: CheckCircleIcon,
      title: "Report & Certification",
      description:
        "Deliver the audit report and management letter with recommendations and compliance outcome.",
      features: ["Submission‑ready report", "Management letter", "Recommendations", "Certification"],
      delay: 0.5,
    },
  ];

  const quickStats = [
    { value: "100%", label: "Online Process", icon: CalculatorIcon },
    { value: "5–10", label: "Day Turnaround", icon: ClockIcon },
    { value: "24h", label: "Response Time", icon: CheckCircleIcon },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={motionTransitions.smooth}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40 mb-4">
          <DocumentTextIcon className="size-4" />
          <span>Our SMSF Audit Process</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
          How Your <span className="text-brand-600">SMSF Audit</span> Works
        </h2>
        <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          Streamlined, secure, and fully online — we follow a professional audit methodology
          tailored for SMSF trustees across Australia.
        </p>
      </Motion>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Motion
            key={step.title}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: step.delay }}
            className="group rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:bg-white/90 hover:shadow-lg transition-all"
          >
            <div className="rounded-lg bg-brand-100/60 p-3 inline-flex mb-4 group-hover:bg-brand-200/80 transition-colors">
              <step.icon className="size-6 text-brand-900" />
            </div>
            <h3 className="text-lg font-semibold text-brand-950 mb-2">{step.title}</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">{step.description}</p>
            <ul className="space-y-1.5">
              {step.features.map((f) => (
                <li key={f} className="text-sm text-slate-700">• {f}</li>
              ))}
            </ul>
          </Motion>
        ))}
      </div>

      {/* Quick Stats */}
      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={{ ...motionTransitions.smooth, delay: 0.6 }}
        className="mt-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickStats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="rounded-xl border border-brand-200/70 bg-gradient-to-br from-brand-50/50 to-white/50 p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Icon className="size-5 text-brand-700" />
                <div className="text-2xl font-bold text-brand-900">{value}</div>
              </div>
              <div className="text-sm text-slate-700">{label}</div>
            </div>
          ))}
        </div>
      </Motion>

      {/* Requirements CTA */}
      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={{ ...motionTransitions.smooth, delay: 0.7 }}
        className="mt-12"
      >
        <div className="rounded-xl lg:rounded-2xl bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/50 p-6 sm:p-8 text-center">
          <h3 className="mb-3 text-xl sm:text-2xl font-bold text-brand-950">Ready to Start Your SMSF Audit?</h3>
          <p className="mb-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a trustee or administrator, we help ensure compliance. Explore other {""}
            <Link href="/services" className="text-brand-600 hover:text-brand-700 underline font-medium">professional audit services</Link> {" "}
            or {""}
            <Link href="/contact" className="text-brand-600 hover:text-brand-700 underline font-medium">contact us</Link> for a tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/contact">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md active:scale-95">
                <CheckCircleIcon className="size-5" />
                Start Your SMSF Audit
              </button>
            </Link>
            <Link href="/pricing">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-brand-200 bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-brand-950 font-medium shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300 active:scale-95">
                <DocumentTextIcon className="size-5" />
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  );
}