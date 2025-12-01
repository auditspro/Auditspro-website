"use client";

import Link from "next/link";
import Image from "next/image";
import { Motion } from "@/components/ui/motion";
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  BookOpenIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

interface HeroSectionProps {
  state?: string;
  stateName?: string;
}

// State-specific data
const stateData = {
  NSW: {
    authority: "NSW Fair Trading",
    legislation: "Property, Stock and Business Agents Act 2002",
    deadline: "30 September",
    pricing: "$549"
  },
  VIC: {
    authority: "Consumer Affairs Victoria",
    legislation: "Estate Agents Act 1980",
    deadline: "31 October",
    pricing: "$549"
  },
  QLD: {
    authority: "Office of Fair Trading Queensland",
    legislation: "Property Occupations Act 2014",
    deadline: "31 October",
    pricing: "$749"
  },
  WA: {
    authority: "Department of Commerce WA",
    legislation: "Real Estate and Business Agents Act 1978",
    deadline: "31 October",
    pricing: "$749"
  },
  SA: {
    authority: "Consumer and Business Services SA",
    legislation: "Land and Business (Sale and Conveyancing) Act 1994",
    deadline: "31 October",
    pricing: "$749"
  },
  TAS: {
    authority: "Consumer, Building and Occupational Services",
    legislation: "Property Agents and Land Transactions Act 2016",
    deadline: "31 October",
    pricing: "$549"
  },
  NT: {
    authority: "NT Consumer Affairs",
    legislation: "Agents Licensing Act 1979",
    deadline: "31 October",
    pricing: "$749"
  },
  ACT: {
    authority: "Access Canberra",
    legislation: "Agents Act 2003",
    deadline: "31 October",
    pricing: "$549"
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Content Column */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Service Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <BuildingOfficeIcon className="size-4" />
              <span>Real Estate Professionals</span>
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
              {isStateSpecific ? (
                <>
                  Professional Trust Account Auditing for{" "}
                  <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
                    {stateName} Real Estate Agents
                  </span>
                </>
              ) : (
                <>
                  Professional Trust Account Auditing for{" "}
                  <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
                    Real Estate Agents
                  </span>
                </>
              )}
            </h1>

            <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {isStateSpecific && stateInfo ? (
                <>
                  Comprehensive trust account auditing services for {stateName} real estate agencies. 
                  Compliant with {stateInfo.authority} requirements under the {stateInfo.legislation}. 
                  Annual audit deadline: {stateInfo.deadline}. Starting from {stateInfo.pricing} + GST.
                </>
              ) : (
                <>
                  State regulator compliant trust account auditing services for real estate agencies
                  across Australia. Our comprehensive{" "}
                  <Link
                    href="/services"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    professional audit services
                  </Link>{" "}
                  also cover{" "}
                  <Link
                    href="/services/conveyancers"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    conveyancers
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/solicitors"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                  >
                    solicitors
                  </Link>
                  . Expert auditors with{" "}
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
                <ShieldCheckIcon className="size-4 text-brand-700" />
                <span>State Regulator Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <CheckCircleIcon className="size-4 text-brand-700" />
                <span>Expert Real Estate Auditors</span>
              </div>
            </div>
          </Motion>

          {/* Enhanced Image Column with Professional Real Estate Agent Image */}
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:justify-self-end"
          >
            <div className="relative mx-auto lg:ml-auto">
              <div className="relative circle-image">
                <Image
                  src="/images/real-estate-agent-auditspro-au.png"
                  alt="Professional Trust Account Audit Services for Real Estate Agents - State Regulator Compliant - AuditsPro Australia"
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
