"use client";

import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  DocumentCheckIcon,
  ShieldCheckIcon,
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
} from "@heroicons/react/24/outline";
import Link from "next/link";

export function FeaturesSection() {
  const features = [
    {
      icon: DocumentCheckIcon,
      title: "Trust Account Compliance Review",
      shortDesc: "Complete regulatory compliance examination for real estate",
      fullDesc:
        "Comprehensive examination of real estate trust account records, rental receipts, sales deposits, and statutory registers to ensure full regulatory compliance under Real Estate Authority requirements.",
      highlights: [
        "Rental payment verification",
        "Sales deposit audit",
        "State regulatory compliance certification",
        "REA submission ready",
      ],
      color: "from-brand-700/10 to-brand-700/5",
      iconBg: "bg-brand-100/60",
      iconColor: "text-brand-900",
    },
    {
      icon: ShieldCheckIcon,
      title: "State Authority Requirements",
      shortDesc: "Multi-state real estate compliance verification",
      fullDesc:
        "Verification of compliance with state-specific real estate regulations, including NSW Fair Trading, Consumer Affairs Victoria, Office of Fair Trading QLD, and other Real Estate Authority requirements across Australia.",
      highlights: [
        "Multi-state REA expertise",
        "Authority-specific checks",
        "Regulatory body coordination",
        "Updated compliance standards",
      ],
      color: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-100/60",
      iconColor: "text-purple-900",
    },
    {
      icon: BuildingOfficeIcon,
      title: "Property Management Audit",
      shortDesc: "Comprehensive property trust fund review",
      fullDesc:
        "Detailed review of property management trust accounts, rental collections, maintenance funds, advertising fees, and all required statutory registers as mandated by Real Estate Authorities.",
      highlights: [
        "Rental trust verification",
        "Maintenance fund audit",
        "Advertising fee compliance",
        "Property ledger review",
      ],
      color: "from-amber-500/10 to-amber-600/5",
      iconBg: "bg-amber-100/60",
      iconColor: "text-amber-900",
    },
    {
      icon: CheckCircleIcon,
      title: "Monthly Reconciliation Verification",
      shortDesc: "Trust account balance and reconciliation checks",
      fullDesc:
        "Monthly bank reconciliation verification, trust account balance confirmation, and proper segregation of client funds including rental bonds, sales deposits, and maintenance reserves.",
      highlights: [
        "Monthly reconciliation review",
        "Bond balance verification",
        "Fund segregation check",
        "Discrepancy identification",
      ],
      color: "from-green-500/10 to-green-600/5",
      iconBg: "bg-green-100/60",
      iconColor: "text-green-900",
    },
    {
      icon: TrophyIcon,
      title: "REA Submission Report",
      shortDesc: "Real Estate Authority submission-ready report",
      fullDesc:
        "Professional audit report suitable for Real Estate Authority submission, including auditor's opinion, compliance findings, and recommendations for trust account management improvement.",
      highlights: [
        "REA-compliant format",
        "Auditor's professional opinion",
        "Detailed compliance findings",
        "Management recommendations",
      ],
      color: "from-red-500/10 to-red-600/5",
      iconBg: "bg-red-100/60",
      iconColor: "text-red-900",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Real Estate Support & Consultation",
      shortDesc: "24-hour response with real estate expertise",
      fullDesc:
        "24-hour response guarantee on all real estate queries, plus year-round compliance support and guidance on property management trust account best practices and REA requirements.",
      highlights: [
        "24-hour query response",
        "Real estate specialization",
        "Property management guidance",
        "REA compliance consultation",
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
      desc: "Fast audit completion specifically designed for real estate agency workflows and deadlines.",
    },
    {
      icon: LockClosedIcon,
      title: "Secure Property Portal",
      desc: "Bank-grade encryption for all your sensitive real estate trust account and client documents.",
    },
    {
      icon: CircleStackIcon,
      title: "Digital Property Records",
      desc: "All audit records stored securely with property-specific categorization and easy access.",
    },
    {
      icon: ChartBarIcon,
      title: "Portfolio Trend Analysis",
      desc: "Year-over-year compliance tracking across your property portfolio and trust accounts.",
    },
    {
      icon: DocumentTextIcon,
      title: "Real Estate Checklist",
      desc: "Comprehensive checklist covering rental receipts, sales deposits, and property management documents.",
    },
    {
      icon: CheckIcon,
      title: "Pre-Audit Property Review",
      desc: "Optional preliminary review of property trust accounts to identify potential issues before formal audit.",
    },
    {
      icon: UsersIcon,
      title: "Multi-Office Support",
      desc: "Coordinated audit services for real estate agencies with multiple offices and trust accounts.",
    },
    {
      icon: CalculatorIcon,
      title: "Trust Account Calculator",
      desc: "Free online calculator to help estimate audit costs for multiple trust accounts and offices.",
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
          <span className="text-brand-600">Real Estate Agent Audit</span>
        </h2>
        <p className="mb-12 text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Our comprehensive audit service covers all aspects of real estate trust account compliance. 
          From state regulatory requirements to state-specific regulations, we ensure your agency meets all 
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
                {title === "State Authority Requirements" && (
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
              Additional Real Estate Services
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Beyond the core audit, we provide specialized features designed for
              real estate agencies and property management businesses.
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

      {/* Real Estate Specific Banner */}
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
            Comprehensive Real Estate Audit Coverage
          </h3>
          <p className="mb-6 text-slate-600 max-w-2xl mx-auto">
            Our audit process covers all aspects of real estate trust account compliance, from state regulatory requirements to state-specific regulations. 
            We ensure your agency meets all professional standards while providing clear, actionable insights for improved compliance management. 
            We also provide specialized services for <Link href="/services/conveyancers" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">conveyancers</Link> and <Link href="/services/solicitors" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">solicitors</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
               <Link href="/contact">
                 <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                   <CheckCircleIcon className="size-5" />
                   Start Your Real Estate Audit
                 </button>
               </Link>
               <Link href="/pricing">
                 <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-brand-950 font-medium shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                   <ArrowRightIcon className="size-5" />
                   View Real Estate Pricing
                 </button>
               </Link>
             </div>
        </div>
      </Motion>
    </section>
  );
}
