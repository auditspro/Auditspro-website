"use client";

import Image from "next/image";
import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import {
  HomeIcon,
  CheckCircleIcon,
  BookOpenIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-200/70 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40 mt-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <HomeIcon className="size-4" />
              <span>Mortgage Brokers</span>
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
              Trust Account Audits for <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">Mortgage Brokers</span>
            </h1>

            <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Regulatory compliant trust account audits for mortgage brokers. Fast turnaround, fixed pricing, and clear reports that satisfy lender and NCCP expectations.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/book-audit">
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

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ClockIcon className="size-4 text-brand-700" />
                <span>5–10 Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="size-4 text-brand-700" />
                <span>Fixed Pricing – No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="size-4 text-brand-700" />
                <span>Qualified Trust Account Auditors</span>
              </div>
            </div>

            {/* Additional Trust Elements */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <ShieldCheckIcon className="size-4 text-brand-700" />
                <span>State Regulator Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <CheckCircleIcon className="size-4 text-brand-700" />
                <span>Expert Broker Auditors</span>
              </div>
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:justify-self-end"
          >
            <div className="relative mx-auto lg:ml-auto">
              <div className="relative circle-image">
                <Image
                  src="/images/auditspro-services.png"
                  alt="Mortgage broker trust account audit services"
                  fill
                  className="w-full h-full object-cover"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 352px, 448px"
                />
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
