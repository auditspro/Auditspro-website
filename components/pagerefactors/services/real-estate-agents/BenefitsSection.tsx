"use client";

import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  Squares2X2Icon,
  CheckCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

// Enhanced key benefits data for real estate agents with accurate information
const keyBenefits = [
  {
    icon: ShieldCheckIcon,
    title: "Fully Compliant",
    shortDesc: "All reports meet state regulatory requirements across Australia",
    fullDesc: "All audit reports meet state regulatory authority requirements and real estate licensing standards across all Australian states. Comprehensive compliance review ensuring adherence to Real Estate Authority regulations and state-specific professional requirements.",
    highlights: [
      "Meets all state regulatory standards",
      "Real Estate Authority compliance",
      "State-specific requirements covered",
      "Professional regulatory reporting included",
    ],
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-100/60",
    iconColor: "text-blue-900",
  },
  {
    icon: ClockIcon,
    title: "Fast Delivery",
    shortDesc: "24-hour response with 5-10 day completion",
    fullDesc: "24-hour response time with audit completion in 5-10 business days. Priority processing available for urgent real estate agency requirements with dedicated project management and direct auditor access.",
    highlights: [
      "24-hour initial response guarantee",
      "5-10 day standard completion",
      "Priority processing for urgent needs",
      "Dedicated real estate auditors",
    ],
    color: "from-green-500/10 to-green-600/5",
    iconBg: "bg-green-100/60",
    iconColor: "text-green-900",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Transparent Pricing",
    shortDesc: "Fixed pricing from $549 + GST per trust account",
    fullDesc: "Transparent pricing from $549 + GST per trust account with no hidden costs or surprises. Additional control accounts are $100 + GST each. All-inclusive pricing covers audit examination, report preparation, and ongoing compliance support.",
    highlights: [
      "From $549 + GST per trust account",
      "Additional control accounts: $100 + GST each",
      "No hidden fees or charges",
      "All-inclusive pricing model",
    ],
    color: "from-purple-500/10 to-purple-600/5",
    iconBg: "bg-purple-100/60",
    iconColor: "text-purple-900",
  },
  {
    icon: TrophyIcon,
    title: "Expert Real Estate Auditors",
    shortDesc: "Qualified auditors specializing in real estate",
    fullDesc: "Qualified auditors with specialized experience in real estate trust accounts. Deep understanding of Real Estate Authority requirements, property management compliance, and real estate profession standards across all Australian jurisdictions.",
    highlights: [
      "Qualified trust account auditors",
      "Real estate practice specialists",
      "Multi-state REA expertise",
      "Continuous professional development",
    ],
    color: "from-orange-500/10 to-orange-600/5",
    iconBg: "bg-orange-100/60",
    iconColor: "text-orange-900",
  },
  {
    icon: DocumentTextIcon,
    title: "Comprehensive Reports",
    shortDesc: "Detailed audit reports with clear findings and recommendations",
    fullDesc: "Detailed audit reports with clear findings and actionable recommendations. REA submission-ready format with professional auditor's opinion, compliance assessment, and improvement suggestions for enhanced trust account management.",
    highlights: [
      "REA submission-ready format",
      "Professional auditor's opinion included",
      "Clear findings and recommendations",
      "Digital and print formats available",
    ],
    color: "from-cyan-500/10 to-cyan-600/5",
    iconBg: "bg-cyan-100/60",
    iconColor: "text-cyan-900",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Professional Support",
    shortDesc: "Dedicated support throughout the audit process",
    fullDesc: "Dedicated support team available throughout the audit process with direct access to your assigned auditor. Ongoing consultation and guidance included for trust account management, compliance questions, and regulatory updates affecting real estate agencies.",
    highlights: [
      "Dedicated support team",
      "Direct auditor access",
      "Ongoing compliance consultation",
      "Regulatory update guidance",
    ],
    color: "from-red-500/10 to-red-600/5",
    iconBg: "bg-red-100/60",
    iconColor: "text-red-900",
  },
];

export function BenefitsSection() {
  return (
    <Motion
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={motionVariants.fadeInUp}
      transition={motionTransitions.smooth}
    >
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Professional Badge */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
                <Squares2X2Icon className="size-4" />
                <span>Real Estate Advantages</span>
              </div>
            </div>

            {/* Enhanced heading with proper line breaks for better UX psychology */}
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
              Why Choose AuditsPro for<br />
              <span className="text-brand-600">Your Real Estate Audits?</span>
            </h2>
            <p className="mb-12 text-base lg:text-lg text-slate-600 leading-relaxed">
              Experience the difference with our professional audit services designed specifically for real estate agents and property management companies. 
              We combine real estate expertise, technology, and transparent processes 
              to deliver exceptional <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">trust account audit services</Link> across Australia.
            </p>
          </Motion>

        {/* Enhanced Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keyBenefits.map((benefit, index) => (
            <Motion
              key={benefit.title}
              initial="hidden"
              whileInView="visible"
              viewport={motionViewport}
              variants={motionVariants.fadeInUp}
              transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
              className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-xl hover:bg-white/90 transition-all duration-300"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`rounded-lg ${benefit.iconBg} p-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className={`size-5 ${benefit.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-brand-950 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {benefit.fullDesc}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {benefit.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircleIcon className="mr-2 h-4 w-4 text-brand-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Motion>
          ))}
        </div>

        {/* Additional Value Proposition for Real Estate Agencies */}
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
              Trusted by Real Estate Agencies Across Australia
            </h3>
            <p className="mb-6 text-slate-600 max-w-2xl mx-auto">
              Join hundreds of real estate agents and property management companies across Australia who trust us with their compliance requirements. 
              Our comprehensive approach ensures full regulatory compliance while saving you time and providing peace of mind. 
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
                  <CreditCardIcon className="size-5" />
                  View Real Estate Pricing
                </button>
              </Link>
            </div>
          </div>
        </Motion>
      </div>
    </section>
    </Motion>
  );
}