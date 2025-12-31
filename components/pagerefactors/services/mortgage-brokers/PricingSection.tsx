"use client";

import { useMemo, useState } from "react";
import { Motion } from "@/components/ui/motion";
import {
  CurrencyDollarIcon,
  MapIcon,
  Squares2X2Icon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const states = [
  { code: "ACT", name: "Australian Capital Territory" },
  { code: "NSW", name: "New South Wales" },
  { code: "NT", name: "Northern Territory" },
  { code: "QLD", name: "Queensland" },
  { code: "SA", name: "South Australia" },
  { code: "TAS", name: "Tasmania" },
  { code: "VIC", name: "Victoria" },
  { code: "WA", name: "Western Australia" },
];

const basePriceCents = 54900; // $549 + GST per trust account
const formatPrice = (cents: number) => `$${(cents / 100).toFixed(0)}`;

interface PricingSectionProps {
  state?: string;
  stateName?: string;
}

export function PricingSection({ state, stateName }: PricingSectionProps) {
  const [selectedState, setSelectedState] = useState<string>(state || "NSW");
  const selectedStateObj = useMemo(() => states.find(s => s.code === selectedState)!, [selectedState]);

  // If state is provided prop, we might want to disable selection or just default to it.
  // For consistency with other pages, let's keep it selectable but default to the prop.

  return (
    <section className="container relative mx-auto px-4 sm:px-6 pb-16">
      <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/60 to-white/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-brand-50/40">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <Squares2X2Icon className="size-4" />
              <span>Audit Pricing{state ? ` in ${state}` : ""}</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-3">
            Transparent Mortgage Broker Audit Pricing
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            State-based pricing aligned with our Real Estate layout. {state ? `Viewing pricing for ${stateName}.` : "Select your state to see pricing per trust account."}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900">
            <CheckBadgeIcon className="size-4" />
            <span>{formatPrice(basePriceCents)} + GST per trust account</span>
          </div>
        </Motion>

        {/* Selector and card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* State selector */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-brand-200 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40">
              <div className="flex items-center gap-2 mb-4 text-brand-950">
                <MapIcon className="size-5" />
                <span className="text-sm font-medium">Select State</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {states.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setSelectedState(s.code)}
                    className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                      selectedState === s.code
                        ? "border-brand-900 bg-brand-900 text-white"
                        : "border-brand-200 bg-white/70 text-brand-900 hover:bg-white"
                    }`}
                  >
                    {s.code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing card */}
          <div className="lg:col-span-2">
            <Motion
              key={selectedState}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-xl hover:bg-white/90 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-brand-100/60 p-2.5 group-hover:bg-brand-200/80 transition-colors">
                      <CurrencyDollarIcon className="size-5 text-brand-950" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-950 text-lg">{selectedStateObj.name} ({selectedState})</h3>
                      <p className="text-xs text-slate-600">Mortgage Broker Audit Pricing</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-900 text-white text-xs font-medium">{selectedState}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-brand-950">Base price per trust account</div>
                    <p className="text-2xl font-bold text-brand-900">{formatPrice(basePriceCents)} <span className="text-xs font-normal">+ GST</span></p>
                    <p className="text-xs text-slate-600">Multiple trust accounts: {formatPrice(basePriceCents)} + GST each</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-brand-950">Included</div>
                    <ul className="text-sm text-slate-700 list-disc pl-5">
                      <li>ASIC/NCCP aligned audit procedures</li>
                      <li>Trust reconciliation and commission handling review</li>
                      <li>Audit certificate and recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
}