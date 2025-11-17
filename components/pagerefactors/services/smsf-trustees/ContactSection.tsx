"use client";

import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import { CheckCircleIcon, DocumentTextIcon, ShieldCheckIcon, BoltIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export function ContactSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16">
      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={motionTransitions.smooth}
        className="text-center"
      >
        <div className="rounded-xl lg:rounded-2xl bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/50 p-6 sm:p-8">
          <h2 className="mb-4 text-xl sm:text-2xl font-bold text-brand-950">
            Ready to Get Your SMSF Audit Started?
          </h2>
          <p className="mb-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join SMSF trustees across Australia who trust us for {""}
            <span className="font-medium text-brand-700">ATO‑compliant audits</span>. Fast turnaround, secure portal, and fixed pricing.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
            <div className="inline-flex items-center gap-2 text-sm text-slate-700">
              <ShieldCheckIcon className="size-4 text-brand-700" /> ATO compliant
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-slate-700">
              <BoltIcon className="size-4 text-brand-700" /> 5–10 day turnaround
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-slate-700">
              <CheckCircleIcon className="size-4 text-brand-700" /> 24‑hour response
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/contact">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md active:scale-95">
                <CheckCircleIcon className="size-5" />
                Contact Our Auditors
              </button>
            </Link>
            <Link href="/pricing">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-brand-200 bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-brand-950 font-medium shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300 active:scale-95">
                <DocumentTextIcon className="size-5" />
                See Pricing
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link href="/services/real-estate-agents" className="inline-flex items-center gap-1 text-sm text-brand-700 hover:text-brand-900 font-medium transition-colors">
              Real Estate Audits
              <ArrowRightIcon className="size-3" />
            </Link>
            <Link href="/services/conveyancers" className="inline-flex items-center gap-1 text-sm text-brand-700 hover:text-brand-900 font-medium transition-colors">
              Conveyancer Audits
              <ArrowRightIcon className="size-3" />
            </Link>
            <Link href="/services/solicitors" className="inline-flex items-center gap-1 text-sm text-brand-700 hover:text-brand-900 font-medium transition-colors">
              Legal Profession Audits
              <ArrowRightIcon className="size-3" />
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  );
}