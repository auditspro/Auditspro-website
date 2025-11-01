"use client";

import React from "react";
import { Motion } from "@/components/ui/motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export function ProcessSection() {
  return (
    <section className="container relative mx-auto px-4 sm:px-6 py-16 bg-gradient-to-br from-slate-50/80 to-brand-50/40">
      {/* Section Header */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900 mb-4">
          <QuestionMarkCircleIcon className="size-4 fill-brand-700 text-brand-700" />
          <span>Simple Process</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
          How Our Audit Process Works
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Our streamlined audit process is designed to be simple, efficient, and thorough. 
          Learn more about our comprehensive methodology.
        </p>
      </Motion>

      {/* How It Works CTA Card */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200/50 rounded-2xl p-8 max-w-lg mx-auto shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-brand-950">
            Want to Know How Our Audit Process Works?
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Learn more about our comprehensive audit methodology and what to expect during the process.
          </p>
          <Link href="/how-it-works">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 shadow-md hover:shadow-lg transition-all">
              <ArrowRightIcon className="size-5" />
              Learn How It Works
            </button>
          </Link>
        </div>
      </Motion>
    </section>
  );
}