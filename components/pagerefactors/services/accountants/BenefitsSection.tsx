"use client";

import { Motion, motionVariants, motionTransitions, motionViewport } from "@/components/ui/motion";
import { ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, TrophyIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export function BenefitsSection() {
  const keyBenefits = [
    {
      icon: ShieldCheckIcon,
      title: "APES 310 Compliant",
      shortDesc: "Audit reports meet APES 310 and body standards",
      highlights: [
        "Independence requirements",
        "APES 310 compliance",
        "Submission‑ready reports",
        "Clear recommendations",
      ],
      color: "from-brand-700/10 to-brand-700/5",
      iconBg: "bg-brand-100/60",
      iconColor: "text-brand-900",
    },
    {
      icon: ClockIcon,
      title: "Fast Delivery",
      shortDesc: "24‑hour response, 5–10 business day completion",
      highlights: [
        "Priority processing",
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
        "All‑inclusive",
        "Clear scope",
        "Ongoing support",
      ],
      color: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-100/60",
      iconColor: "text-purple-900",
    },
    {
      icon: TrophyIcon,
      title: "Expert Auditors",
      shortDesc: "Qualified accounting trust specialists",
      highlights: [
        "Professional memberships",
        "Practice experience",
        "Clear reporting",
        "Actionable insights",
      ],
      color: "from-amber-500/10 to-amber-600/5",
      iconBg: "bg-amber-100/60",
      iconColor: "text-amber-900",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={motionTransitions.smooth}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/70 px-4 py-2 text-sm font-medium text-brand-900">
            <Squares2X2Icon className="size-4" />
            Key Benefits
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight text-brand-950">
            Why Accounting Practices Choose Us
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Purpose‑built process for accountants handling client money under professional body requirements.
          </p>
        </Motion>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyBenefits.map((b, i) => (
            <Motion
              key={b.title}
              {...motionVariants.fadeInUp}
              viewport={motionViewport}
              transition={{ ...motionTransitions.smooth, delay: i * 0.05 }}
              className="rounded-xl border border-brand-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className={`inline-flex items-center gap-2 ${b.iconBg} text-sm font-medium rounded-full px-3 py-1 mb-3`}>
                <b.icon className={`size-4 ${b.iconColor}`} />
                <span>{b.title}</span>
              </div>
              <p className="text-sm text-slate-700 mb-4">{b.shortDesc}</p>
              <ul className="text-sm text-slate-600 space-y-2">
                {b.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <ShieldCheckIcon className="size-4 text-brand-700" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}