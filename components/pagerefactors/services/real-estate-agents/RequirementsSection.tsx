"use client";

import { useState } from "react";
import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import {
  MapPinIcon,
  CalendarIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
  BuildingOfficeIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

// Pricing data matching the PricingSection
const realEstatePricing = [
  { state: "VIC", basePrice: 54900 },
  { state: "SA", basePrice: 74900 },
  { state: "NT", basePrice: 74900 },
  { state: "NSW", basePrice: 54900 },
  { state: "ACT", basePrice: 54900 },
  { state: "QLD", basePrice: 74900 },
  { state: "WA", basePrice: 74900 },
  { state: "TAS", basePrice: 54900 },
];

// Helper function to get pricing by state
const getRealEstatePrice = (state: string): number => {
  const pricing = realEstatePricing.find(p => p.state === state);
  return pricing ? pricing.basePrice : 54900; // Default to VIC pricing
};

// Helper function to format price
const formatPrice = (price: number) => `$${(price / 100).toFixed(0)}`;

interface RequirementsSectionProps {
  state?: string;
  stateName?: string;
}

export function RequirementsSection({ state, stateName }: RequirementsSectionProps) {
  const isStateSpecific = state && stateName;
  const stateRequirements = [
    {
      state: "New South Wales (NSW)",
      abbreviation: "NSW",
      subtitle: "Fair Trading NSW",
      authority: "NSW Fair Trading",
      authorityLink: "https://www.fairtrading.nsw.gov.au/trades-and-businesses/property-services/property-agents",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Property and Stock Agents Act 2002 (NSW)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getRealEstatePrice("NSW")),
      notes: "Annual audit required for real estate agents holding trust money. Must be conducted by qualified auditor.",
      keyRequirements: [
        "Annual audit required for agents holding trust money",
        "Must be conducted by qualified auditor",
        "Compliance with Property and Stock Agents Act 2002 (NSW)",
        "Report lodged with NSW Fair Trading",
      ],
      delay: 0.1,
      color: "from-brand-700/10 to-brand-700/5",
    },
    {
      state: "Victoria (VIC)",
      abbreviation: "VIC",
      subtitle: "Consumer Affairs Victoria",
      authority: "Consumer Affairs Victoria",
      authorityLink: "https://www.consumer.vic.gov.au/licensing-and-registration/estate-agents",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Estate Agents Act 1980 (VIC)",
      legislationSection: "Trust Account Requirements",
      pricing: formatPrice(getRealEstatePrice("VIC")),
      notes: "External auditor appointment required. Notification to Consumer Affairs Victoria within specified timeframes.",
      keyRequirements: [
        "External auditor appointment required",
        "Notification to Consumer Affairs Victoria",
        "Compliance with Estate Agents Act 1980 (VIC)",
        "Annual trust account reconciliation",
      ],
      delay: 0.2,
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      state: "Queensland (QLD)",
      abbreviation: "QLD",
      subtitle: "Office of Fair Trading QLD",
      authority: "Office of Fair Trading Queensland",
      authorityLink: "https://www.qld.gov.au/law/housing-and-neighbours/buying-and-selling-property/real-estate-agents",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Property Occupations Act 2014 (QLD)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getRealEstatePrice("QLD")),
      notes: "Qualified auditor appointment required. Trust account audit must be completed annually.",
      keyRequirements: [
        "Qualified auditor appointment required",
        "Annual trust account audit mandatory",
        "Compliance with Property Occupations Act 2014 (QLD)",
        "Report submission to Office of Fair Trading",
      ],
      delay: 0.3,
      color: "from-amber-500/10 to-amber-600/5",
    },
    {
      state: "Western Australia (WA)",
      abbreviation: "WA",
      subtitle: "Department of Commerce WA",
      authority: "Department of Commerce WA",
      authorityLink: "https://www.commerce.wa.gov.au/consumer-protection/real-estate-agents",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Real Estate and Business Agents Act 1978 (WA)",
      legislationSection: "Trust Account Requirements",
      pricing: formatPrice(getRealEstatePrice("WA")),
      notes: "Annual audit required for licensed real estate agents. Qualified auditor must be appointed.",
      keyRequirements: [
        "Annual audit required for licensed agents",
        "Qualified auditor appointment mandatory",
        "Compliance with Real Estate and Business Agents Act 1978 (WA)",
        "Submit to Department of Commerce WA",
      ],
      delay: 0.4,
      color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      state: "South Australia (SA)",
      abbreviation: "SA",
      subtitle: "Consumer and Business Services SA",
      authority: "Consumer and Business Services SA",
      authorityLink: "https://www.cbs.sa.gov.au/licences-permits/land-agents-licence",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Land Agents Act 1994 (SA)",
      legislationSection: "Trust Account Requirements",
      pricing: formatPrice(getRealEstatePrice("SA")),
      notes: "Annual audit required for land agents holding trust money. Qualified auditor appointment necessary.",
      keyRequirements: [
        "Annual audit required for land agents",
        "Qualified auditor appointment necessary",
        "Compliance with Land Agents Act 1994 (SA)",
        "Submit to Consumer and Business Services SA",
      ],
      delay: 0.5,
      color: "from-red-500/10 to-red-600/5",
    },
    {
      state: "Australian Capital Territory (ACT)",
      abbreviation: "ACT",
      subtitle: "Access Canberra",
      authority: "Access Canberra",
      authorityLink: "https://www.accesscanberra.act.gov.au/app/answers/detail/a_id/1907",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Agents Act 2003 (ACT)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getRealEstatePrice("ACT")),
      notes: "Qualified auditor only. Annual audit required for real estate agents holding trust money.",
      keyRequirements: [
        "Qualified auditor appointment only",
        "Annual audit for agents holding trust money",
        "Compliance with Agents Act 2003 (ACT)",
        "Report lodged with Access Canberra",
      ],
      delay: 0.6,
      color: "from-cyan-500/10 to-cyan-600/5",
    },
    {
      state: "Tasmania (TAS)",
      abbreviation: "TAS",
      subtitle: "Consumer, Building and Occupational Services",
      authority: "Consumer, Building and Occupational Services",
      authorityLink: "https://www.cbos.tas.gov.au/topics/licensing/occupational-licensing/property-agents",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Property Agents and Land Transactions Act 2016 (TAS)",
      legislationSection: "Trust Account Requirements",
      pricing: formatPrice(getRealEstatePrice("TAS")),
      notes: "Annual audit required for property agents holding trust money. Qualified auditor appointment necessary.",
      keyRequirements: [
        "Annual audit required for property agents",
        "Qualified auditor appointment necessary",
        "Compliance with Property Agents and Land Transactions Act 2016 (TAS)",
        "Submit to Consumer, Building and Occupational Services",
      ],
      delay: 0.7,
      color: "from-teal-500/10 to-teal-600/5",
    },
    {
      state: "Northern Territory (NT)",
      abbreviation: "NT",
      subtitle: "NT Consumer Affairs",
      authority: "NT Consumer Affairs",
      authorityLink: "https://consumeraffairs.nt.gov.au/business/licensing/agents-licensing",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Agents Licensing Act 1979 (NT)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getRealEstatePrice("NT")),
      notes: "Annual audit required for licensed agents holding trust money. Qualified auditor appointment mandatory.",
      keyRequirements: [
        "Annual audit required for licensed agents",
        "Qualified auditor appointment mandatory",
        "Compliance with Agents Licensing Act 1979 (NT)",
        "Submit to NT Consumer Affairs",
      ],
      delay: 0.8,
      color: "from-orange-500/10 to-orange-600/5",
    },
  ];

  // Filter requirements based on state if state-specific
  const filteredRequirements = isStateSpecific 
    ? stateRequirements.filter(req => req.abbreviation === state)
    : stateRequirements;

  return (
    <section className="container relative mx-auto px-4 sm:px-6 pb-16">
      <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/60 to-white/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-brand-50/40">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Professional Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <Squares2X2Icon className="size-4" />
              <span>State Requirements</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
            {isStateSpecific 
              ? `${stateName} Real Estate Trust Account Audit Requirements`
              : "Real Estate Trust Account Audit Requirements by State"
            }
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            {isStateSpecific ? (
              `Comprehensive compliance requirements, deadlines, and regulations for licensed real estate agents in ${stateName}. Our professional audit services ensure full compliance with all state regulations.`
            ) : (
              <>
                Comprehensive state-specific compliance requirements, deadlines, and
                regulations for licensed real estate agents across Australia. 
                Our <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">professional audit services</Link> ensure 
                full compliance with all state regulations. We also provide specialized services for <Link href="/services/conveyancers" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">conveyancers</Link> and <Link href="/services/solicitors" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">solicitors</Link>.
              </>
            )}
          </p>
          {/* Price Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900">
            <CheckBadgeIcon className="size-4" />
            <span>
              {isStateSpecific 
                ? `${stateName} Pricing - ${formatPrice(getRealEstatePrice(state!))} + GST per trust account`
                : `State-based Pricing - From ${formatPrice(Math.min(...realEstatePricing.map(p => p.basePrice)))} + GST per trust account`
              }
            </span>
          </div>
        </Motion>

        {/* Main States Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {filteredRequirements.map((requirement) => (
            <Motion
              key={requirement.state}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: requirement.delay }}
            >
              <div
                className={`group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-xl hover:bg-white/90 transition-all duration-300`}
              >
                {/* Decorative gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${requirement.color} rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-brand-100/60 p-2.5 group-hover:bg-brand-200/80 transition-colors">
                        <MapPinIcon className="size-5 text-brand-950" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-950 mb-1 text-lg">
                          {requirement.state}
                        </h3>
                        <p className="text-xs text-slate-600">
                          {requirement.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-900 text-white text-xs font-medium">
                      {requirement.abbreviation}
                    </span>
                  </div>

                  {/* Key Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Authority */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <BuildingOfficeIcon className="size-3.5" />
                        <span>Regulatory Authority</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">
                        {requirement.authority}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <CurrencyDollarIcon className="size-3.5" />
                        <span>Audit Pricing</span>
                      </div>
                      <div className="pl-5">
                        <p className="text-lg font-bold text-brand-900">
                          {requirement.pricing} <span className="text-xs font-normal">+ GST</span>
                        </p>
                        <p className="text-xs text-slate-600">
                          Multiple trust accounts: {requirement.pricing} + GST each
                        </p>
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <CalendarIcon className="size-3.5" />
                        <span>Audit Requirement</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">
                        {requirement.deadline}
                      </p>
                      <p className="text-xs text-slate-500 pl-5">
                        {requirement.specificDate}
                      </p>
                    </div>

                    {/* Legislation */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <DocumentTextIcon className="size-3.5" />
                        <span>Legislation</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">
                        {requirement.legislation}
                      </p>
                      <p className="text-xs text-slate-500 pl-5">
                        {requirement.legislationSection}
                      </p>
                    </div>
                  </div>

                  {/* Key Requirements Expandable */}
                  <details className="group/details">
                    <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-brand-900 hover:text-brand-800 mb-2 list-none">
                      <ExclamationTriangleIcon className="size-4" />
                      <span>Key Audit Requirements</span>
                      <svg
                        className="size-4 ml-auto transition-transform group-open/details:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <ul className="mt-2 space-y-1.5 pl-6 text-sm text-slate-700">
                      {requirement.keyRequirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-brand-700 mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  {/* Notes */}
                  {requirement.notes && (
                    <div className="mt-4 p-3 rounded-lg bg-brand-50/50 border border-brand-200/50">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong className="text-brand-950">Note:</strong>{" "}
                        {requirement.notes}
                      </p>
                    </div>
                  )}

                  {/* Authority Link */}
                  <div className="mt-4 pt-4 border-t border-brand-200/50">
                    <a
                      href={requirement.authorityLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-brand-700 hover:text-brand-800 font-medium group/link"
                    >
                      <span>Visit {requirement.authority}</span>
                      <ArrowTopRightOnSquareIcon className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>

        {/* State-Specific Pages Section */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-950 mb-3">
              State-Specific Trust Account Audit Information
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get detailed information about trust account audit requirements, deadlines, and regulations specific to your state or territory.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { state: "NSW", name: "New South Wales", href: "/services/real-estate-agents/nsw" },
              { state: "VIC", name: "Victoria", href: "/services/real-estate-agents/vic" },
              { state: "QLD", name: "Queensland", href: "/services/real-estate-agents/qld" },
              { state: "WA", name: "Western Australia", href: "/services/real-estate-agents/wa" },
              { state: "SA", name: "South Australia", href: "/services/real-estate-agents/sa" },
              { state: "TAS", name: "Tasmania", href: "/services/real-estate-agents/tas" },
              { state: "NT", name: "Northern Territory", href: "/services/real-estate-agents/nt" },
              { state: "ACT", name: "Australian Capital Territory", href: "/services/real-estate-agents/act" },
            ].map((item) => (
              <Link
                key={item.state}
                href={item.href}
                className="group relative overflow-hidden rounded-lg border border-brand-200 bg-white p-4 text-center transition-all hover:border-brand-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-semibold text-sm group-hover:bg-brand-200 transition-colors">
                    {item.state}
                  </div>
                  <div>
                    <div className="font-medium text-brand-950 text-sm">{item.state}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{item.name}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </Motion>

        {/* Bottom CTA */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                <CalendarIcon className="size-5" />
                Book Your Real Estate Audit Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                <DocumentTextIcon className="size-5" />
                Get Custom Quote
              </button>
            </Link>
          </div>
        </Motion>
      </div>
    </section>
  );
}