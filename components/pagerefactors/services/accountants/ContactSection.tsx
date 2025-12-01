"use client";

import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={motionTransitions.smooth}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950">
            Ready to schedule your audit?
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Talk to our team to confirm scope, pricing, and timelines.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-white shadow-sm hover:bg-brand-800"
            >
              <PhoneIcon className="size-4" />
              Contact us
            </Link>
            <Link
              href="mailto:info@auditspro.com.au"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-5 py-2.5 text-brand-900 shadow-sm hover:bg-brand-50"
            >
              <EnvelopeIcon className="size-4" />
              Email
            </Link>
          </div>
        </Motion>
      </div>
    </section>
  );
}