"use client";

import { Motion } from "@/components/ui/motion";
import { CurrencyDollarIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const basePriceCents = 54900; // $549 + GST per trust account
const formatPrice = (cents: number) => `$${(cents / 100).toFixed(0)}`;

export function PricingSection() {
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
              <CheckBadgeIcon className="size-4" />
              <span>Audit Pricing</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-3">
            Transparent Accountant Audit Pricing
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            APES 310 aligned pricing with our unified layout. Fixed, transparent fees per trust account.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900">
            <CurrencyDollarIcon className="size-4" />
            <span>{formatPrice(basePriceCents)} + GST per trust account</span>
          </div>
        </Motion>

        {/* Pricing card */}
        <div className="grid grid-cols-1 gap-6 items-start">
          <Motion
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
                    <h3 className="font-semibold text-brand-950 text-lg">Accountant Trust Account Audit</h3>
                    <p className="text-xs text-slate-600">APES 310 compliant audit pricing</p>
                  </div>
                </div>
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
                    <li>APES 310 compliant audit procedures</li>
                    <li>Client money handling and reconciliation review</li>
                    <li>Audit certificate and recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}