"use client";

import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import { ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, TrophyIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export function BenefitsSection() {
  const keyBenefits = [
    {
      icon: ShieldCheckIcon,
      title: "ATO Compliant",
      shortDesc: "Audit reports meet SIS Act and SISR standards",
      highlights: [
        "Independence requirements",
        "SIS Act compliance",
        "SISR adherence",
        "Submission-ready reports",
      ],
      color: "from-brand-700/10 to-brand-700/5",
      iconBg: "bg-brand-100/60",
      iconColor: "text-brand-900",
    },
    {
      icon: ClockIcon,
      title: "Fast Delivery",
      shortDesc: "24-hour response, 5-10 business day completion",
      highlights: [
        "Priority processing available",
        "Dedicated auditor",
        "Clear milestones",
        "Responsive communication",
      ],
      color: "from-green-500/10 to-green-600/5",
      iconBg: "bg-green-100/60",
      iconColor: "text-green-900",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Transparent Pricing",
      shortDesc: "Fixed pricing from $549 + GST",
      highlights: [
        "No hidden fees",
        "All-inclusive",
        "Clear scope",
        "Ongoing support",
      ],
      color: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-100/60",
      iconColor: "text-purple-900",
    },
    {
      icon: TrophyIcon,
      title: "Independent Auditors",
      shortDesc: "Qualified SMSF audit specialists",
      highlights: [
        "Professional memberships",
        "SMSF specialization",
        "Rigorous standards",
        "Quality assurance",
      ],
      color: "from-orange-500/10 to-orange-600/5",
      iconBg: "bg-orange-100/60",
      iconColor: "text-orange-900",
    },
  ];

  return (
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
              <span>Key Benefits</span>
            </div>
          </div>

          <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
            Why Choose AuditsPro for
            <br />
            <span className="text-brand-600">Your SMSF Audits?</span>
          </h2>
          <p className="mb-12 text-base lg:text-lg text-slate-600 leading-relaxed">
            Experience professional and efficient SMSF audit services. We combine compliance expertise, technology, and clear communication to deliver high-quality audits for trustees across Australia.
          </p>
        </Motion>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyBenefits.map(({ icon: Icon, title, shortDesc, highlights, color, iconBg, iconColor }, index) => (
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
                <div className={`inline-flex items-center gap-2 ${iconBg} text-sm font-medium rounded-full px-3 py-1.5 mb-3`}>
                  <Icon className={`size-4 ${iconColor}`} />
                  <span>{title}</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{shortDesc}</p>
                <ul className="space-y-1.5">
                  {highlights.map((h) => (
                    <li key={h} className="text-sm text-slate-700">• {h}</li>
                  ))}
                </ul>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}
