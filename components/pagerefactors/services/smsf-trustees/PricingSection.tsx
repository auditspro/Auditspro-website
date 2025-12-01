"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

// States data
const states = [
  { code: "ACT", name: "Australian Capital Territory", shortName: "ACT" },
  { code: "NSW", name: "New South Wales", shortName: "NSW" },
  { code: "NT", name: "Northern Territory", shortName: "NT" },
  { code: "QLD", name: "Queensland", shortName: "QLD" },
  { code: "SA", name: "South Australia", shortName: "SA" },
  { code: "TAS", name: "Tasmania", shortName: "TAS" },
  { code: "VIC", name: "Victoria", shortName: "VIC" },
  { code: "WA", name: "Western Australia", shortName: "WA" },
];

// Pricing mapped to accounting service (SMSF audits performed by accountants)
// Derived from the pricing page data so we don’t invent values
const accountingPricingByState = [
  { state: "WA", basePrice: 54900 },
  { state: "SA", basePrice: 54900 },
  { state: "ACT", basePrice: 54900 },
  { state: "TAS", basePrice: 54900 },
  { state: "QLD", basePrice: 74900 },
  { state: "VIC", basePrice: 54900 },
  { state: "NSW", basePrice: 54900 },
  { state: "NT", basePrice: 54900 },
];

const getSmsfPrice = (state: string): number => {
  const pricing = accountingPricingByState.find((p) => p.state === state);
  return pricing ? pricing.basePrice : 54900; // Default $549 + GST
};

const formatPrice = (price: number) => `$${(price / 100).toFixed(0)}`;

export function PricingSection() {
  const [selectedState, setSelectedState] = useState<string>("NSW");
  const currentPrice = getSmsfPrice(selectedState);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with state selector */}
        <Motion
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={motionVariants.fadeInUp}
          transition={motionTransitions.smooth}
          className="text-center mb-12"
        >
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <StarIcon className="size-4 fill-brand-700 text-brand-700" />
              <span>Fixed Transparent Pricing</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
            SMSF Audit Pricing by State
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Professional SMSF audits with transparent, fixed pricing. Select your state to see your exact cost.
          </p>

          <div className="max-w-4xl mx-auto">
            <label className="block text-sm font-medium text-brand-950 mb-4 text-center">
              Select Your State
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {states.map((state) => (
                <label
                  key={state.code}
                  className={`relative flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedState === state.code
                      ? "border-brand-500 bg-brand-50 text-brand-900"
                      : "border-brand-200 bg-white hover:border-brand-300 hover:bg-brand-50/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="state"
                    value={state.code}
                    checked={selectedState === state.code}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{state.shortName}</span>
                  <span className="text-xs text-slate-400 text-center leading-tight mt-1">{state.name}</span>
                  {selectedState === state.code && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-500 rounded-full"></div>
                  )}
                </label>
              ))}
            </div>
          </div>
        </Motion>

        {/* Main pricing card */}
        <div className="max-w-lg mx-auto mb-16">
          <Motion
            {...motionVariants.fadeInUp}
            viewport={motionViewport}
            transition={{ ...motionTransitions.smooth, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-200 relative"
          >
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-brand-900 mb-2">
                {formatPrice(currentPrice)}
              </div>
              <div className="text-lg text-slate-600 mb-4">+ GST per fund</div>
              <div className="text-sm text-slate-500 bg-slate-50 rounded-lg p-3">
                Multiple funds: {formatPrice(currentPrice)} + GST each • {states.find((s) => s.code === selectedState)?.name}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">ATO compliant audit report</span>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">5-10 day completion</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">Independent SMSF auditors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">All Australian states covered</span>
              </div>
            </div>

            <Link
              href="/book-demo"
              className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-brand-900 hover:bg-brand-800 transition-colors shadow-sm"
            >
              Start Audit
            </Link>

            <p className="text-center text-xs text-slate-500 mt-4">24-hour response • Fixed pricing • No hidden fees</p>
          </Motion>
        </div>

        {/* Trust indicators */}
        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-brand-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-900 mb-2">24h</div>
                <div className="text-slate-600">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-900 mb-2">100%</div>
                <div className="text-slate-600">Fully Compliant</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-900 mb-2">${formatPrice(getSmsfPrice(selectedState))}</div>
                <div className="text-slate-600">Fixed Price + GST</div>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
