"use client";

import Image from "next/image";
import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import { BanknotesIcon, CheckCircleIcon, BookOpenIcon, ClockIcon, CurrencyDollarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-200/70 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40 mt-8">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Service Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <BanknotesIcon className="size-4" />
              <span>SMSF Trustees</span>
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
              Professional SMSF Audit Services for Trustees
            </h1>

            <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              ATO compliant SMSF audits for self-managed super fund trustees. Our comprehensive {""}
              <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">professional audit services</Link> include specialized SMSF audits alongside {""}
              <Link href="/services/accountants" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">accounting</Link> and {""}
              <Link href="/services/financial-planners" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">financial planning</Link> audits. Independent auditors with {""}
              <Link href="/contact" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">24-hour response times</Link> and 5-10 day completion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                  <CheckCircleIcon className="size-5" />
                  Start Your Audit
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                  <BookOpenIcon className="size-5" />
                  How It Works
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ClockIcon className="size-4 text-brand-700" />
                <span>5-10 Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="size-4 text-brand-700" />
                <span>Fixed Pricing - No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="size-4 text-brand-700" />
                <span>ATO Compliant Reports</span>
              </div>
            </div>
          </Motion>

          {/* Image Column with circular masked photo (matches Real Estate layout) */}
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full blur-3xl opacity-15" />

              {/* Circular Image */}
              <div className="relative overflow-hidden rounded-full aspect-square shadow-2xl">
                <Image
                  src="/images/auditspro-services.png"
                  alt="Professional SMSF audit services for trustees — AuditsPro Australia"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}