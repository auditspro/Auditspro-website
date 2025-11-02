"use client";

import React from "react";
import { Motion } from "@/components/ui/motion";
import {
  AcademicCapIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  TrophyIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    icon: AcademicCapIcon,
    title: "Expert Auditors",
    shortDescription: "Qualified professionals with professional excellence",
    detailedDescription: "Our team consists of qualified auditors committed to delivering professional excellence in trust account compliance across all Australian states and territories.",
    statistic: "Professional",
    highlight: "Excellence",
  },
  {
    icon: ClockIcon,
    title: "Fast Delivery",
    shortDescription: "Quick turnaround without compromising quality",
    detailedDescription: "We understand the importance of timely compliance. Most audits are completed within 5-10 business days from receipt of all required documentation.",
    statistic: "5-10 Days",
    highlight: "Typical turnaround",
  },
  {
    icon: ShieldCheckIcon,
    title: "100% Compliance",
    shortDescription: "Meet all regulatory requirements with confidence",
    detailedDescription: "Our audits are designed to meet regulatory, APES 310, and all state-specific requirements, ensuring your business stays compliant.",
    statistic: "100%",
    highlight: "Compliance rate",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Transparent Pricing",
    shortDescription: "Fixed fees with no hidden costs or surprises",
    detailedDescription: "Our pricing is completely transparent with fixed fees based on your state and profession. No hidden costs, no surprise charges.",
    statistic: "0",
    highlight: "Hidden fees",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Support",
    shortDescription: "Personal service throughout the audit process",
    detailedDescription: "You'll have a dedicated audit manager who will guide you through the entire process and answer any questions you may have.",
    statistic: "1-on-1",
    highlight: "Personal service",
  },
  {
    icon: DocumentTextIcon,
    title: "Detailed Reports",
    shortDescription: "Comprehensive audit reports with clear findings",
    detailedDescription: "Receive detailed audit reports with clear findings, recommendations, and actionable insights to improve your trust account management.",
    statistic: "Detailed",
    highlight: "Professional reports",
  },
];

export function WhyChooseSection() {
  return (
    <section className="container relative mx-auto px-4 sm:px-6 py-16">
      {/* Section Header */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900 mb-4">
          <TrophyIcon className="size-4 fill-brand-700 text-brand-700" />
          <span>Why Choose AuditsPro AU</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
          Australia&apos;s Trusted Audit Partner
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          We&apos;ve built our reputation on delivering exceptional trust account audits 
          that help businesses maintain compliance and peace of mind.
        </p>
      </Motion>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <Motion
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="group relative h-full rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 transition-all duration-300 hover:shadow-xl hover:border-brand-300 supports-[backdrop-filter]:bg-white/40">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-brand-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="rounded-lg bg-brand-100/60 p-3 group-hover:bg-brand-200/80 group-hover:scale-110 transition-all duration-300">
                    <reason.icon className="size-6 text-brand-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-brand-950 text-lg mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {reason.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Detailed Description */}
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {reason.detailedDescription}
                </p>

                {/* Statistic and Highlight */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-brand-900">
                    {reason.statistic}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-brand-700 bg-brand-100/50 px-2 py-1 rounded-full">
                    <CheckCircleIcon className="size-3" />
                    {reason.highlight}
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        ))}
      </div>

      {/* Call to Action */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200/50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-brand-950">
            Ready to Get Started?
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Join hundreds of satisfied clients who trust AuditsPro AU 
            for their trust account audit needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 shadow-md hover:shadow-lg transition-all">
              <DocumentTextIcon className="size-5" />
              Book Your Audit
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-300 bg-white text-brand-900 px-6 py-3 font-medium hover:bg-brand-50 hover:border-brand-400 transition-all">
              <UserGroupIcon className="size-5" />
              Speak to an Expert
            </button>
          </div>
        </div>
      </Motion>
    </section>
  );
}