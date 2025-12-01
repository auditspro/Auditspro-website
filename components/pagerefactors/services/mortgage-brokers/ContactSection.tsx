"use client";

import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function ContactSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/60 to-white/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-brand-50/40">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
              Ready to Start Your Audit?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
              Get in touch for a fast, compliant mortgage broker trust account audit. We’ll respond within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                <EnvelopeIcon className="size-5" />
                Contact Us
              </Link>
              <Link href="mailto:hello@auditspro.com.au" className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                <PhoneIcon className="size-5" />
                Email hello@auditspro.com.au
              </Link>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}