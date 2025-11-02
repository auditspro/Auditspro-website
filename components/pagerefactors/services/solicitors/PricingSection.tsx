import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export function PricingSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={motionTransitions.smooth}
          className="text-center mb-12"
        >
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <CurrencyDollarIcon className="size-4" />
              <span>Simple Pricing</span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-950 mb-4">
            Legal Practice Trust Account Audits
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fixed pricing. No hidden fees. Law Society compliant.
          </p>
        </Motion>

        {/* Main Pricing Card - Simplified */}
        <div className="max-w-lg mx-auto mb-16">
          <Motion
            {...motionVariants.fadeInUp}
            viewport={motionViewport}
            transition={{ ...motionTransitions.smooth, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-2 border-brand-200 relative"
          >
            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-brand-900 mb-2">
                $1,949
              </div>
              <div className="text-lg text-slate-600 mb-4">
                + GST per trust account
              </div>
              <div className="text-sm text-slate-500 bg-slate-50 rounded-lg p-3">
                Additional control accounts: $100 + GST each
              </div>
            </div>

            {/* Key Features - Simplified */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">Law Society compliant audit report</span>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">5-10 day completion</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">IPA qualified legal auditors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="size-5 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">All Australian states covered</span>
              </div>
            </div>

            {/* Simple CTA */}
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-brand-900 hover:bg-brand-800 transition-colors shadow-sm"
            >
              Start Your Legal Audit
            </Link>
            
            <p className="text-center text-xs text-slate-500 mt-4">
              24-hour response • Fixed pricing • No hidden fees
            </p>
          </Motion>
        </div>

        {/* Simple Trust Indicators */}
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
                 <div className="text-slate-600">Law Society Compliant</div>
               </div>
               <div>
                 <div className="text-3xl font-bold text-brand-900 mb-2">IPA</div>
                 <div className="text-slate-600">Qualified Auditors</div>
               </div>
             </div>
           </div>
        </Motion>

        {/* Simple Final CTA */}
        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-brand-950 mb-4">
            Questions about pricing?
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Get a custom quote for your legal practice or speak with our audit specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-900 text-white px-6 py-3 rounded-lg hover:bg-brand-800 transition-colors font-medium"
            >
              <CheckCircleIcon className="size-5" />
              Get Custom Quote
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-brand-200 bg-white text-brand-950 px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors font-medium"
            >
              <CurrencyDollarIcon className="size-5" />
              View All Services
            </Link>
          </div>
        </Motion>
      </div>
    </section>
  );
}