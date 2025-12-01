"use client";

import { Motion } from "@/components/ui/motion";
import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export function BenefitsSection() {
  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: "Regulatory Compliant",
      desc: "Reports aligned to NCCP expectations and lender requirements",
    },
    { icon: ClockIcon, title: "Fast Delivery", desc: "5–10 day completion with 24-hour response" },
    { icon: CurrencyDollarIcon, title: "Fixed Pricing", desc: "Transparent fees with no hidden costs" },
    { icon: TrophyIcon, title: "Expert Auditors", desc: "Specialists in broker trust account audits" },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map((b, index) => (
            <Motion
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-white border border-brand-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mx-auto mb-3">
                <b.icon className="size-4 text-brand-700" />
                <span>{b.title}</span>
              </div>
              <p className="text-sm text-slate-600">{b.desc}</p>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}
