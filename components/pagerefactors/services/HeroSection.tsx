"use client";

import Link from "next/link";
import Image from "next/image";
import { Motion } from "@/components/ui/motion";
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  BookOpenIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

interface HeroSectionProps {
  state?: string;
  stateName?: string;
}

// State-specific data for professional services
const stateData = {
  NSW: {
    authority: "NSW Fair Trading",
    legislation: "Property, Stock and Business Agents Act 2002",
    deadline: "30 September annually",
    pricing: "$549 + GST"
  },
  VIC: {
    authority: "Consumer Affairs Victoria",
    legislation: "Estate Agents Act 1980", 
    deadline: "31 October annually",
    pricing: "$549 + GST"
  },
  QLD: {
    authority: "Office of Fair Trading Queensland",
    legislation: "Property Occupations Act 2014",
    deadline: "31 December annually", 
    pricing: "$549 + GST"
  },
  WA: {
    authority: "Department of Commerce WA",
    legislation: "Real Estate and Business Agents Act 1978",
    deadline: "31 March annually",
    pricing: "$549 + GST"
  },
  SA: {
    authority: "Consumer and Business Services SA",
    legislation: "Land and Business (Sale and Conveyancing) Act 1994",
    deadline: "30 June annually",
    pricing: "$549 + GST"
  },
  TAS: {
    authority: "Consumer, Building and Occupational Services",
    legislation: "Property Agents and Land Transactions Act 2016",
    deadline: "30 June annually",
    pricing: "$549 + GST"
  },
  NT: {
    authority: "NT Consumer Affairs",
    legislation: "Agents Licensing Act 1979",
    deadline: "30 June annually",
    pricing: "$549 + GST"
  },
  ACT: {
    authority: "Access Canberra",
    legislation: "Agents Act 2003",
    deadline: "30 June annually",
    pricing: "$549 + GST"
  }
};

export function HeroSection({ state, stateName }: HeroSectionProps) {
  const isStateSpecific = state && stateName;
  const stateInfo = state ? stateData[state as keyof typeof stateData] : null;
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
              <span>Professional Services</span>
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
              {isStateSpecific ? (
                <>
                  Professional Trust Account Audits for{" "}
                  <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
                    {stateName} Professionals
                  </span>
                </>
              ) : (
                <>
                  Professional Trust Account{" "}
                  <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
                    Audit Services
                  </span>
                </>
              )}
            </h1>

            <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {isStateSpecific && stateInfo ? (
                <>
                  Comprehensive trust account audits for {stateName} professionals. 
                  Compliant with {stateInfo.authority} requirements under the {stateInfo.legislation}. 
                  Annual audit deadline: {stateInfo.deadline}. Starting from {stateInfo.pricing} + GST.
                </>
              ) : (
                <>
                  Leading state regulator compliant trust account audit services for Australian professionals. 
                  Comprehensive{" "}
                  <Link
                    href="/services"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    professional audit services
                  </Link>{" "}
                  for{" "}
                  <Link
                    href="/services/real-estate-agents"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    real estate agents
                  </Link>
                  ,{" "}
                  <Link
                    href="/services/conveyancers"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    conveyancers
                  </Link>
                  ,{" "}
                  <Link
                    href="/services/accountants"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    accountants
                  </Link>
                  ,{" "}
                  <Link
                    href="/services/solicitors"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    solicitors
                  </Link>
                  , and more. Expert auditors with{" "}
                  <Link
                    href="/contact"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    24-hour response times
                  </Link>{" "}
                  and 5-10 day completion.
                </>
              )}
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
                <span>Qualified Trust Account Auditors</span>
              </div>
            </div>

            {/* Additional Trust Elements */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <StarIcon className="size-4 text-brand-700 fill-brand-700" />
                <span className="text-brand-900 font-medium">Trusted by Australian Professionals</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <TrophyIcon className="size-4 text-brand-700" />
                <span className="text-brand-900 font-medium">State Regulator Compliant</span>
              </div>
            </div>
          </Motion>

          {/* Enhanced Image Column with Professional Image */}
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full blur-3xl opacity-15"></div>
              
              {/* Professional Services Image - SEO Optimized with Ellipse Shape */}
              <div className="relative overflow-hidden rounded-full aspect-square shadow-2xl">
                <Image
                  src="/images/auditspro-services.png"
                  alt="Professional Trust Account Audit Services - AuditsPro Australia"
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