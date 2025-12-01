import Link from "next/link";
import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import {
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UsersIcon,
  CheckCircleIcon,
  CreditCardIcon,
  StarIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

// Enhanced key benefits data with detailed descriptions
const keyBenefits = [
  {
    icon: ClockIcon,
    title: "Fast Turnaround",
    shortDesc: "24-hour response with 5-10 day completion",
    fullDesc: "24-hour response time with 5-10 business day completion for most audits. Priority processing available for urgent requirements with dedicated project management.",
    highlights: [
      "24-hour initial response",
      "5-10 day standard completion",
      "Priority processing available",
      "Dedicated project management",
    ],
    color: "from-brand-700/10 to-brand-700/5",
    iconBg: "bg-brand-100/60",
    iconColor: "text-brand-900",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Fixed Pricing",
    shortDesc: "Transparent pricing with no hidden fees",
    fullDesc: "Transparent pricing from $549 + GST with no hidden fees or surprises. All-inclusive pricing covers audit examination, report preparation, and ongoing support.",
    highlights: [
      "Starting from $549 + GST",
      "No hidden fees or charges",
      "All-inclusive pricing model",
      "Volume discounts available",
    ],
    color: "from-green-500/10 to-green-600/5",
    iconBg: "bg-green-100/60",
    iconColor: "text-green-900",
  },
  {
    icon: ShieldCheckIcon,
    title: "Fully Compliant",
    shortDesc: "100% regulatory compliance guaranteed",
    fullDesc: "All audits meet state regulatory authority requirements and professional standards. Our auditors are qualified professionals with extensive experience in trust account compliance.",
    highlights: [
      "State regulatory compliant audits",
      "Professional regulatory standards",
      "IPA qualified auditors",
      "Compliance guarantee",
    ],
    color: "from-purple-500/10 to-purple-600/5",
    iconBg: "bg-purple-100/60",
    iconColor: "text-purple-900",
  },
  {
    icon: TrophyIcon,
    title: "Expert Auditors",
    shortDesc: "Qualified professionals with extensive experience",
    fullDesc: "Qualified auditors with extensive experience in trust account compliance across all Australian states. Continuous professional development ensures up-to-date knowledge.",
    highlights: [
      "IPA qualified professionals",
      "Multi-state expertise",
      "Continuous professional development",
      "Industry-specific knowledge",
    ],
    color: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-amber-100/60",
    iconColor: "text-amber-900",
  },
  {
    icon: UsersIcon,
    title: "Professional Support",
    shortDesc: "Dedicated support throughout the process",
    fullDesc: "Dedicated support team available throughout the audit process with direct access to your assigned auditor. Ongoing consultation and guidance included.",
    highlights: [
      "Dedicated support team",
      "Direct auditor access",
      "Ongoing consultation",
      "Process guidance included",
    ],
    color: "from-cyan-500/10 to-cyan-600/5",
    iconBg: "bg-cyan-100/60",
    iconColor: "text-cyan-900",
  },
  {
    icon: CheckCircleIcon,
    title: "Comprehensive Reports",
    shortDesc: "Detailed audit reports with clear findings",
    fullDesc: "Detailed audit reports with clear findings and recommendations. State authority submission-ready format with professional auditor's opinion and improvement suggestions.",
    highlights: [
      "State authority submission-ready format",
      "Professional auditor's opinion",
      "Clear findings and recommendations",
      "Digital and print formats",
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
            {/* Professional Badge - Better wording */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
                <Squares2X2Icon className="size-4" />
                <span>Key Advantages</span>
              </div>
            </div>

            {/* Improved heading with proper line breaks for better UX psychology */}
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
              Why Choose AuditsPro for<br />
              <span className="text-brand-600">Your Trust Account Audits?</span>
            </h2>
            <p className="mb-12 text-base lg:text-lg text-slate-600 leading-relaxed">
              Experience the difference with our professional audit services. 
              We combine expertise, technology, and transparent processes 
              to deliver exceptional <Link href="/services" className="text-brand-600 hover:text-brand-700 underline">trust account audit services</Link> across Australia.
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
              {/* Hover gradient overlay - Reduced opacity */}
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
                <p className="text-slate-600 mb-4 leading-relaxed">
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

        {/* Additional Value Proposition */}
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
              Trusted by Australian Professionals Nationwide
            </h3>
            <p className="mb-6 text-slate-600 max-w-2xl mx-auto">
              Join hundreds of Australian professionals who trust us with their audit requirements. 
              Our comprehensive approach ensures full compliance while saving you time and providing peace of mind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                  <CheckCircleIcon className="size-5" />
                  Start Your Audit
                </button>
              </Link>
              <Link href="/pricing">
                <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-brand-950 font-medium shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                  <CreditCardIcon className="size-5" />
                  View Pricing
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