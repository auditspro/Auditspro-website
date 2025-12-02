"use client";

import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import { PhoneIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

export function ContactSection() {
  return (
    <section className="container relative mx-auto px-4 sm:px-6 py-16">
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-0"
      >
        <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200/50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-brand-950">
            Ready to Ensure Regulatory Compliance?
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Don&apos;t risk regulatory action. Our accounting audit experts are standing by 
            to help you maintain regulatory compliance with professional audit services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 shadow-md hover:shadow-lg transition-all">
                <CalendarDaysIcon className="size-5" />
                Start Accounting Audit
              </button>
            </Link>
            <Link href="tel:1300283487">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-300 bg-white text-brand-900 px-6 py-3 font-medium hover:bg-brand-50 hover:border-brand-400 transition-all">
                <PhoneIcon className="size-5" />
                Call 1300 AUDITS
              </button>
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  );
}
