"use client";

import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  DocumentCheckIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CheckCircleIcon,
  TrophyIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  DocumentTextIcon,
  ChartBarIcon,
  LockClosedIcon,
  CircleStackIcon,
  CheckIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CalculatorIcon,
  Squares2X2Icon,
  ArrowRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export function FeaturesSection() {
  const features = [
    {
      icon: DocumentCheckIcon,
      title: "Trust Account Compliance Review",
      shortDesc: "Complete regulatory compliance examination",
      fullDesc:
        "Complete examination of trust account records, transactions, and statutory registers to ensure full regulatory compliance under the National Conveyancing Laws.",
      highlights: [
        "Transaction verification",
        "Statutory register checks",
        "State regulatory compliance certification",
        "National law adherence",
      ],
      color: "from-blue-500/10 to-blue-600/5",
      iconBg: "bg-blue-100/60",
      iconColor: "text-blue-900",
    },
    {
      icon: ShieldCheckIcon,
      title: "Regulatory Requirements Check",
      shortDesc: "State-specific compliance verification",
      fullDesc:
        "Verification of compliance with state-specific conveyancing regulations, including NSW Fair Trading, Consumer Affairs Victoria, and other jurisdictional requirements.",
      highlights: [
        "Multi-state expertise",
        "Jurisdiction-specific checks",
        "Regulatory body coordination",
        "Updated compliance standards",
      ],
      color: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-100/60",
      iconColor: "text-purple-900",
    },
    {
      icon: BookOpenIcon,
      title: "Statutory Register Audit",
      shortDesc: "Comprehensive register review",
      fullDesc:
        "Detailed review of trust ledgers, receipts, payments, and all required statutory registers as mandated by state regulatory authorities and state regulatory bodies.",
      highlights: [
        "Trust ledger verification",
        "Receipt and payment audit",
        "Register completeness check",
        "Documentation review",
      ],
      color: "from-amber-500/10 to-amber-600/5",
      iconBg: "bg-amber-100/60",
      iconColor: "text-amber-900",
    },
    {
      icon: CheckCircleIcon,
      title: "Bank Reconciliation Verification",
      shortDesc: "Monthly reconciliation checks",
      fullDesc:
        "Monthly bank reconciliation checks, verification of trust account balances, and confirmation of proper segregation of client funds.",
      highlights: [
        "Monthly reconciliation review",
        "Balance verification",
        "Fund segregation check",
        "Discrepancy identification",
      ],
      color: "from-green-500/10 to-green-600/5",
      iconBg: "bg-green-100/60",
      iconColor: "text-green-900",
    },
    {
      icon: TrophyIcon,
      title: "Comprehensive Audit Report",
      shortDesc: "State authority submission-ready report",
      fullDesc:
        "Professional audit report suitable for state authority submission, including auditor's opinion, findings, and recommendations for improvement if necessary.",
      highlights: [
        "State-compliant format",
        "Auditor's professional opinion",
        "Detailed findings",
        "Improvement recommendations",
      ],
      color: "from-red-500/10 to-red-600/5",
      iconBg: "bg-red-100/60",
      iconColor: "text-red-900",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Ongoing Support & Consultation",
      shortDesc: "24-hour response guarantee",
      fullDesc:
        "24-hour response guarantee on all queries, plus year-round compliance support and guidance on trust account management best practices.",
      highlights: [
        "24-hour query response",
        "Year-round support",
        "Best practice guidance",
        "Expert consultation",
      ],
      color: "from-cyan-500/10 to-cyan-600/5",
      iconBg: "bg-cyan-100/60",
      iconColor: "text-cyan-900",
    },
  ];

  const additionalFeatures = [
    {
      icon: ClockIcon,
      title: "5-10 Day Turnaround",
      desc: "Fast audit completion specifically designed for conveyancing workflows and settlement deadlines.",
    },
    {
      icon: LockClosedIcon,
      title: "Secure Conveyancing Portal",
      desc: "Bank-grade encryption for all your sensitive trust account and client settlement documents.",
    },
    {
      icon: CircleStackIcon,
      title: "Digital Conveyancing Records",
      desc: "All audit records stored securely with settlement-specific categorization and easy access.",
    },
    {
      icon: ChartBarIcon,
      title: "Trust Account Trend Analysis",
      desc: "Year-over-year compliance tracking across your conveyancing trust accounts and settlements.",
    },
    {
      icon: DocumentTextIcon,
      title: "Conveyancing Document Checklist",
      desc: "Comprehensive checklist covering trust receipts, settlement statements, and statutory registers.",
    },
    {
      icon: CheckIcon,
      title: "Pre-Audit Settlement Review",
      desc: "Optional preliminary review of trust accounts to identify potential issues before formal audit.",
    },
    {
      icon: UsersIcon,
      title: "Multi-Office Conveyancing Support",
      desc: "Coordinated audit services for conveyancing practices with multiple offices and trust accounts.",
    },
    {
      icon: CalculatorIcon,
      title: "Trust Account Calculator",
      desc: "Free online calculator to help estimate audit costs for multiple conveyancing trust accounts.",
    },
  ];

  return (
    <section className="container relative mx-auto px-4 sm:px-6 py-16">
      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={motionTransitions.smooth}
        className="text-center mb-12"
      >
        {/* Professional Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
            <Squares2X2Icon className="size-4" />
            <span>Complete Audit Features</span>
          </div>
        </div>

        <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
          What&apos;s Included in Your<br />
          <span className="text-brand-600">Conveyancer Audit</span>
        </h2>
        <p className="mb-12 text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Our comprehensive audit service covers all aspects of conveyancing trust account compliance. 
          From state regulatory requirements to state-specific regulations, we ensure your practice meets all 
          <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2"> professional audit standards</Link> across Australia.
        </p>
      </Motion>

      {/* Main Features Grid - Enhanced Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map(
          ({
            icon: Icon,
            title,
            shortDesc,
            fullDesc,
            highlights,
            color,
            iconBg,
            iconColor,
          }, index) => (
            <Motion
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={motionViewport}
              variants={motionVariants.fadeInUp}
              transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
              className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-xl hover:bg-white/90 transition-all duration-300"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`rounded-lg ${iconBg} p-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`size-6 ${iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-brand-950 mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {shortDesc}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {fullDesc}
                </p>

                {/* State Compliance Link */}
                {title === "Regulatory Requirements Check" && (
                  <Link 
                    href="/compliance/state-requirements" 
                    className="inline-flex items-center gap-1 text-xs text-brand-700 hover:text-brand-800 font-medium mb-3 group/link"
                  >
                    View state compliance details
                    <svg className="size-3 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}

                {/* Highlights */}
                <div className="space-y-2">
                  {highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircleIcon className="mr-2 h-4 w-4 text-brand-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Motion>
          )
        )}
      </div>

      {/* Additional Features Section */}
      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={{ ...motionTransitions.smooth, delay: 0.3 }}
        className="mt-16"
      >
        <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/60 to-white/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-brand-50/40">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-brand-950 mb-3">
              Additional Conveyancing Services
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Beyond the core audit, we provide specialized features designed for
              conveyancing practices and settlement management businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalFeatures.map(({ icon: Icon, title, desc }, index) => (
              <Motion
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={motionViewport}
                variants={motionVariants.fadeInUp}
                transition={{ ...motionTransitions.smooth, delay: 0.4 + index * 0.1 }}
                className="flex gap-3 p-4 rounded-lg bg-white/70 border border-brand-200/50 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="rounded-md bg-brand-100/60 p-2 h-fit">
                  <Icon className="size-4 text-brand-900" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-brand-950 text-sm mb-1">
                    {title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </Motion>

      {/* Conveyancing Specific Banner */}
      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={{ ...motionTransitions.smooth, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-brand-950">
            Comprehensive Conveyancing Audit Coverage
          </h3>
          <p className="mb-6 text-slate-600 max-w-2xl mx-auto">
            Our audit process covers all aspects of conveyancing trust account compliance, from state regulatory requirements to state-specific regulations. 
            We ensure your practice meets all professional standards while providing clear, actionable insights for improved compliance management. 
            We also provide specialized services for <Link href="/services/real-estate-agents" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">real estate agents</Link> and <Link href="/services/solicitors" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">solicitors</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
               <Link href="/contact">
                 <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                   <CheckCircleIcon className="size-5" />
                   Start Your Conveyancing Audit
                 </button>
               </Link>
               <Link href="/pricing">
                 <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-brand-950 font-medium shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                   <ArrowRightIcon className="size-5" />
                   View Conveyancing Pricing
                 </button>
               </Link>
             </div>
        </div>
      </Motion>

      {/* Process Summary Banner - Keeping the existing one but updating styling */}
      <Motion
        initial="hidden"
        whileInView="visible"
        viewport={motionViewport}
        variants={motionVariants.fadeInUp}
        transition={{ ...motionTransitions.smooth, delay: 0.7 }}
        className="mt-8"
      >
        <div className="rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircleIcon className="size-6 text-green-700" />
                </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-1">
                  Everything You Need for State Regulatory Compliance
                </h4>
                <p className="text-sm text-green-700">
                  Fixed pricing • Fast turnaround • IPA qualified auditors •
                  24-hour support
                </p>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-700 text-white text-xs font-medium">
                Fully Compliant
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-700 text-white text-xs font-medium">
                Fixed Price
              </span>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  );
}
