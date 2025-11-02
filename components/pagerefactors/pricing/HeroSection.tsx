import Link from "next/link";
import Image from "next/image";
import { Motion } from "@/components/ui/motion";
import {
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  UserGroupIcon,
  StarIcon,
  CreditCardIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

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
              <ShieldCheckIcon className="size-4" />
              <span>Transparent Pricing</span>
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
              Professional Trust Account Audit{" "}
              <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>

            <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Transparent, fixed pricing for professional trust account audits across Australia. 
              No hidden fees, no surprises - just quality service with clear, upfront costs 
              tailored to your profession and state.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/book-demo">
                <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                  <CheckCircleIcon className="size-5" />
                  Book Your Audit
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                  <UserGroupIcon className="size-5" />
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
                <CreditCardIcon className="size-4 text-brand-700" />
                <span>Fixed Pricing - No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="size-4 text-brand-700" />
                <span>IPA Qualified Auditors</span>
              </div>
            </div>

            {/* Additional Trust Elements */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <StarIcon className="size-4 text-brand-700 fill-brand-700" />
                <span className="text-brand-900 font-medium">Trusted by 500+ Businesses</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <TrophyIcon className="size-4 text-brand-700" />
                <span className="text-brand-900 font-medium">Fully Compliant</span>
              </div>
            </div>
          </Motion>

          {/* Image Column */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-brand-200 rounded-full transform scale-110 opacity-20"></div>

              {/* Main image with circular frame */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/Trust_Account_Audits_for_Conveyancers_new.png"
                  alt="Professional Trust Account Audit Pricing"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}