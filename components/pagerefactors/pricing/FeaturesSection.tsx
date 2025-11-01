"use client";

import React from "react";
import { Motion } from "@/components/ui/motion";
import {
  ClockIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ClockIcon,
    title: "Fast Turnaround",
    description: "Most audits completed within 5-10 business days",
    highlight: "Quick delivery",
  },
  {
    icon: ShieldCheckIcon,
    title: "100% Compliant",
    description: "All audits meet ASIC, APES 310, and state requirements",
    highlight: "Fully compliant",
  },
  {
    icon: DocumentCheckIcon,
    title: "Professional Reports",
    description: "Detailed audit reports with clear findings and recommendations",
    highlight: "Expert reporting",
  },
  {
    icon: UserGroupIcon,
    title: "Experienced Team",
    description: "Qualified auditors with extensive trust account expertise",
    highlight: "Expert auditors",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Fixed Pricing",
    description: "No hidden fees or surprise costs - transparent pricing",
    highlight: "No surprises",
  },
  {
    icon: ChartBarIcon,
    title: "Risk Assessment",
    description: "Comprehensive risk analysis and compliance recommendations",
    highlight: "Risk management",
  },
];

const additionalFeatures = [
  {
    icon: CheckBadgeIcon,
    title: "Quality Assurance",
    description: "Every audit undergoes rigorous quality control processes",
  },
  {
    icon: StarIcon,
    title: "Client Support",
    description: "Dedicated support throughout the entire audit process",
  },
];

export function FeaturesSection() {
  return (
    <section className="container relative mx-auto px-4 sm:px-6 py-16 bg-gradient-to-br from-slate-50/80 to-brand-50/40">
      {/* Section Header */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900 mb-4">
          <StarIcon className="size-4 fill-brand-700 text-brand-700" />
          <span>Why Choose AuditsPro AU</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
          Professional Trust Account Audits
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          We deliver comprehensive, compliant trust account audits with the expertise 
          and reliability your business needs.
        </p>
      </Motion>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Motion
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="group relative h-full rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 transition-all duration-300 hover:shadow-xl hover:border-brand-300 supports-[backdrop-filter]:bg-white/40">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-brand-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative">
                {/* Icon */}
                <div className="rounded-lg bg-brand-100/60 p-3 inline-flex group-hover:bg-brand-200/80 group-hover:scale-110 transition-all duration-300 mb-4">
                  <feature.icon className="size-6 text-brand-900" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-brand-950 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-brand-700 bg-brand-100/50 px-2 py-1 rounded-full">
                    <CheckBadgeIcon className="size-3" />
                    {feature.highlight}
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        ))}
      </div>

      {/* Additional Features */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white/80 backdrop-blur border border-brand-200/50 rounded-2xl p-8 supports-[backdrop-filter]:bg-white/60"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-brand-950 mb-2">
            Additional Benefits
          </h3>
          <p className="text-slate-600">
            More reasons to trust AuditsPro AU with your trust account audits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="rounded-lg bg-brand-100/60 p-2 flex-shrink-0">
                <feature.icon className="size-5 text-brand-900" />
              </div>
              <div>
                <h4 className="font-medium text-brand-950 mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Motion>
    </section>
  );
}