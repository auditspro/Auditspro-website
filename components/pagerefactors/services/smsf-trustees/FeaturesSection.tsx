"use client";

import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  DocumentCheckIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  DocumentTextIcon,
  ChartBarIcon,
  LockClosedIcon,
  CircleStackIcon,
  CheckIcon,
  CalculatorIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export function FeaturesSection() {
  const features = [
    {
      icon: DocumentCheckIcon,
      title: "Financial Statements Review",
      shortDesc: "Verification of balances, transactions, and reconciliations",
      fullDesc:
        "We review SMSF financial statements, bank reconciliations, investment balances, and member transactions to ensure accuracy and compliance.",
      highlights: [
        "Bank reconciliation checks",
        "Investment balance verification",
        "Member transactions review",
        "Year-end journal examination",
      ],
      color: "from-brand-700/10 to-brand-700/5",
      iconBg: "bg-brand-100/60",
      iconColor: "text-brand-900",
    },
    {
      icon: ShieldCheckIcon,
      title: "SIS Act & SISR Compliance",
      shortDesc: "Regulatory compliance verification against super laws",
      fullDesc:
        "We verify compliance with the Superannuation Industry (Supervision) Act and Regulations, including contributions, pensions, and investment restrictions.",
      highlights: [
        "Contributions compliance",
        "Pensions standards check",
        "In-house asset limits",
        "Related party transactions",
      ],
      color: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-100/60",
      iconColor: "text-purple-900",
    },
    {
      icon: BookOpenIcon,
      title: "Trust Deed & Strategy",
      shortDesc: "Review of trust deed and investment strategy",
      fullDesc:
        "Assessment of the trust deed provisions and investment strategy compliance, including diversification and liquidity considerations.",
      highlights: [
        "Trust deed consistency",
        "Investment strategy adherence",
        "Risk and diversification",
        "Liquidity planning",
      ],
      color: "from-amber-500/10 to-amber-600/5",
      iconBg: "bg-amber-100/60",
      iconColor: "text-amber-900",
    },
    {
      icon: CheckCircleIcon,
      title: "Monthly/Annual Controls",
      shortDesc: "Reconciliation and control verification",
      fullDesc:
        "Verification of monthly or annual reconciliations, segregation of fund assets, and appropriate approval workflows.",
      highlights: [
        "Reconciliation review",
        "Segregation of assets",
        "Approval workflows",
        "Discrepancy identification",
      ],
      color: "from-green-500/10 to-green-600/5",
      iconBg: "bg-green-100/60",
      iconColor: "text-green-900",
    },
    {
      icon: DocumentTextIcon,
      title: "Audit Report & Letter",
      shortDesc: "Submission-ready reports and recommendations",
      fullDesc:
        "Professional audit report and management letter with findings, recommendations, and compliance certifications as applicable.",
      highlights: [
        "Submission-ready format",
        "Clear findings",
        "Recommendations included",
        "Certification where applicable",
      ],
      color: "from-red-500/10 to-red-600/5",
      iconBg: "bg-red-100/60",
      iconColor: "text-red-900",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Ongoing Support",
      shortDesc: "Responsive compliance support and guidance",
      fullDesc:
        "24-hour response on queries, with ongoing support and guidance for SMSF trustees on compliance and best practices.",
      highlights: [
        "24-hour response",
        "Compliance guidance",
        "Best practices",
        "Trustee support",
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
      desc: "Fast audit completion designed for SMSF trustee timelines.",
    },
    {
      icon: LockClosedIcon,
      title: "Secure Portal",
      desc: "Bank-grade encryption for your documents and sensitive information.",
    },
    {
      icon: CircleStackIcon,
      title: "Digital Records",
      desc: "Secure storage with organized access to audit records.",
    },
    {
      icon: ChartBarIcon,
      title: "Compliance Tracking",
      desc: "Year-over-year compliance tracking and recommendations.",
    },
    {
      icon: DocumentTextIcon,
      title: "Audit Checklist",
      desc: "Comprehensive checklist for required documents and steps.",
    },
    {
      icon: CheckIcon,
      title: "Pre-Audit Review",
      desc: "Optional preliminary review to identify potential issues early.",
    },
    {
      icon: CalculatorIcon,
      title: "Pricing Calculator",
      desc: "Simple pricing structure with fixed fees and clarity.",
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
          What&apos;s Included in Your
          <br />
          <span className="text-brand-600">SMSF Audit</span>
        </h2>
        <p className="mb-12 text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Our comprehensive audit service covers all aspects of SMSF compliance. From regulatory requirements to financial accuracy, we ensure your fund meets all {""}
          <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">professional audit standards</Link> across Australia.
        </p>
      </Motion>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map(({ icon: Icon, title, shortDesc, fullDesc, highlights, color, iconBg, iconColor }, index) => (
          <Motion
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
            className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-xl hover:bg-white/90 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
            <div className="relative">
              <div className="mb-3">
                <div className={`inline-flex items-center gap-2 ${iconBg} text-sm font-medium rounded-full px-3 py-1.5`}>
                  <Icon className={`size-4 ${iconColor}`} />
                  <span>{title}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{shortDesc}</p>
              <div className="mt-4 p-4 rounded-lg bg-brand-50/60 border border-brand-200/60">
                <p className="text-sm text-slate-700 mb-3">{fullDesc}</p>
                <ul className="grid grid-cols-1 gap-2">
                  {highlights.map((h) => (
                    <li key={h} className="text-sm text-slate-700">• {h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Motion>
        ))}
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalFeatures.map(({ icon: Icon, title, desc }, index) => (
          <Motion
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: 0.05 * index }}
            className="flex items-start gap-3 bg-white/80 backdrop-blur border border-brand-200/50 rounded-xl p-4 supports-[backdrop-filter]:bg-white/60"
          >
            <div className="rounded-lg bg-brand-50 p-2">
              <Icon className="size-5 text-brand-700" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-brand-950">{title}</h4>
              <p className="text-sm text-slate-700">{desc}</p>
            </div>
          </Motion>
        ))}
      </div>
    </section>
  );
}
