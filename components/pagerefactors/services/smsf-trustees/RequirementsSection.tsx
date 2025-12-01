"use client";

import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import {
  MapPinIcon,
  CalendarIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
  BuildingOfficeIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

// Pricing mapped from accounting pricing to keep consistency with SMSF audits
const accountingPricingByState = [
  { state: "NSW", basePrice: 54900 },
  { state: "VIC", basePrice: 54900 },
  { state: "QLD", basePrice: 74900 },
  { state: "WA", basePrice: 54900 },
  { state: "SA", basePrice: 54900 },
  { state: "ACT", basePrice: 54900 },
  { state: "TAS", basePrice: 54900 },
  { state: "NT", basePrice: 54900 },
];

const getSmsfPrice = (state: string): number => {
  const pricing = accountingPricingByState.find((p) => p.state === state);
  return pricing ? pricing.basePrice : 54900;
};

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
      subtitle: "Australian Taxation Office (ATO)",
      authority: "Australian Taxation Office (ATO)",
      authorityLink: "https://www.ato.gov.au/super/self-managed-super-funds/",
      deadline: "By annual return due date",
      specificDate: "Varies by fund and lodgement program",
      legislation: "SIS Act 1993 & SISR 1994",
      legislationSection: "Audit requirement: s.35C, s.129, regs",
      pricing: formatPrice(getSmsfPrice("NSW")),
      notes: "Annual independent audit is mandatory for all SMSFs. Auditor must be appropriately qualified and independent.",
      keyRequirements: [
        "Financial statements for the year",
        "Compliance audit against SIS Act/SISR",
        "Management letter and audit report",
        "Contraventions reported to ATO where required",
      ],
      delay: 0.1,
      color: "from-brand-700/10 to-brand-700/5",
    },
    {
      state: "Victoria (VIC)",
      abbreviation: "VIC",
      subtitle: "Australian Taxation Office (ATO)",
      authority: "Australian Taxation Office (ATO)",
      authorityLink: "https://www.ato.gov.au/super/self-managed-super-funds/",
      deadline: "By annual return due date",
      specificDate: "Varies by fund and lodgement program",
      legislation: "SIS Act 1993 & SISR 1994",
      legislationSection: "Audit requirement: s.35C, s.129, regs",
      pricing: formatPrice(getSmsfPrice("VIC")),
      notes: "ATO regulates nationally; requirements are consistent across states.",
      keyRequirements: [
        "Trustee representation letter",
        "Evidence for investment valuation",
        "Independence declaration",
        "Audit working papers",
      ],
      delay: 0.2,
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      state: "Queensland (QLD)",
      abbreviation: "QLD",
      subtitle: "Australian Taxation Office (ATO)",
      authority: "Australian Taxation Office (ATO)",
      authorityLink: "https://www.ato.gov.au/super/self-managed-super-funds/",
      deadline: "By annual return due date",
      specificDate: "Varies by fund and lodgement program",
      legislation: "SIS Act 1993 & SISR 1994",
      legislationSection: "Audit requirement: s.35C, s.129, regs",
      pricing: formatPrice(getSmsfPrice("QLD")),
      notes: "Uniform SMSF audit obligations apply nationally under ATO guidance.",
      keyRequirements: [
        "Bank statements and reconciliations",
        "Member statements and balances",
        "Investment and contribution records",
        "Compliance testing documentation",
      ],
      delay: 0.3,
      color: "from-amber-500/10 to-amber-600/5",
    },
    {
      state: "Western Australia (WA)",
      abbreviation: "WA",
      subtitle: "Australian Taxation Office (ATO)",
      authority: "Australian Taxation Office (ATO)",
      authorityLink: "https://www.ato.gov.au/super/self-managed-super-funds/",
      deadline: "By annual return due date",
      specificDate: "Varies by fund and lodgement program",
      legislation: "SIS Act 1993 & SISR 1994",
      legislationSection: "Audit requirement: s.35C, s.129, regs",
      pricing: formatPrice(getSmsfPrice("WA")),
      notes: "Auditor independence and competency requirements must be met.",
      keyRequirements: [
        "Audit evidence for significant balances",
        "Related party transaction review",
        "Investment strategy compliance",
        "Fraud risk and control assessment",
      ],
      delay: 0.4,
      color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      state: "South Australia (SA)",
      abbreviation: "SA",
      subtitle: "Australian Taxation Office (ATO)",
      authority: "Australian Taxation Office (ATO)",
      authorityLink: "https://www.ato.gov.au/super/self-managed-super-funds/",
      deadline: "By annual return due date",
      specificDate: "Varies by fund and lodgement program",
      legislation: "SIS Act 1993 & SISR 1994",
      legislationSection: "Audit requirement: s.35C, s.129, regs",
      pricing: formatPrice(getSmsfPrice("SA")),
      notes: "Audit findings must be communicated to trustees with recommendations.",
      keyRequirements: [
        "Trust deed review and amendments",
        "In-house asset and related party tests",
        "Contribution caps and preservation rules",
        "Benefit payment compliance",
      ],
      delay: 0.5,
      color: "from-red-500/10 to-red-600/5",
    },
    {
      state: "Australian Capital Territory (ACT)",
      abbreviation: "ACT",
      subtitle: "Australian Taxation Office (ATO)",
      authority: "Australian Taxation Office (ATO)",
      authorityLink: "https://www.ato.gov.au/super/self-managed-super-funds/",
      deadline: "By annual return due date",
      specificDate: "Varies by fund and lodgement program",
      legislation: "SIS Act 1993 & SISR 1994",
      legislationSection: "Audit requirement: s.35C, s.129, regs",
      pricing: formatPrice(getSmsfPrice("ACT")),
      notes: "Compliance audit and financial audit are both required annually.",
      keyRequirements: [
        "General ledger and trial balance",
        "Asset registers and valuations",
        "Member transactions and benefits",
        "Regulatory contravention assessment",
      ],
      delay: 0.6,
      color: "from-cyan-500/10 to-cyan-600/5",
    },
    {
      state: "Tasmania (TAS)",
      abbreviation: "TAS",
      subtitle: "Australian Taxation Office (ATO)",
      authority: "Australian Taxation Office (ATO)",
      authorityLink: "https://www.ato.gov.au/super/self-managed-super-funds/",
      deadline: "By annual return due date",
      specificDate: "Varies by fund and lodgement program",
      legislation: "SIS Act 1993 & SISR 1994",
      legislationSection: "Audit requirement: s.35C, s.129, regs",
      pricing: formatPrice(getSmsfPrice("TAS")),
      notes: "Requirements are consistent nationally under ATO oversight.",
      keyRequirements: [
        "Cash receipts and payments",
        "Investment documents and confirmations",
        "Member contributions and rollovers",
        "Auditor’s report and independence",
      ],
      delay: 0.7,
      color: "from-teal-500/10 to-teal-600/5",
    },
    {
      state: "Northern Territory (NT)",
      abbreviation: "NT",
      subtitle: "Australian Taxation Office (ATO)",
      authority: "Australian Taxation Office (ATO)",
      authorityLink: "https://www.ato.gov.au/super/self-managed-super-funds/",
      deadline: "By annual return due date",
      specificDate: "Varies by fund and lodgement program",
      legislation: "SIS Act 1993 & SISR 1994",
      legislationSection: "Audit requirement: s.35C, s.129, regs",
      pricing: formatPrice(getSmsfPrice("NT")),
      notes: "Audits must be completed before the SMSF annual return is lodged.",
      keyRequirements: [
        "Bank confirmations and reconciliations",
        "Investment holdings and valuations",
        "Member benefit payments and pension checks",
        "Contravention reporting (if applicable)",
      ],
      delay: 0.8,
      color: "from-orange-500/10 to-orange-600/5",
    },
  ];

  const displayRequirements = isStateSpecific
    ? stateRequirements.filter((req) => req.abbreviation === state)
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
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <Squares2X2Icon className="size-4" />
              <span>State Requirements</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
            {isStateSpecific
              ? `${stateName} SMSF Audit Requirements`
              : "SMSF Audit Requirements by State"}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            {isStateSpecific
              ? `Comprehensive audit information for SMSFs in ${stateName}, including deadlines, pricing, and compliance requirements.`
              : "Comprehensive audit requirements, deadlines, and compliance information for SMSFs across Australia."}
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-900">
            <CheckBadgeIcon className="size-4" />
            <span>Professional Audit Services - Best Price Guarantee</span>
          </div>
        </Motion>

        {/* State Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {displayRequirements.map((requirement) => (
            <Motion
              key={requirement.state}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: requirement.delay }}
            >
              <div className={`group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-lg transition-all duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${requirement.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-brand-100/60 p-2.5 group-hover:bg-brand-200/80 transition-colors">
                        <MapPinIcon className="size-5 text-brand-950" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-950 mb-1 text-lg">{requirement.state}</h3>
                        <p className="text-xs text-slate-600">{requirement.subtitle}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-900 text-white text-xs font-medium">{requirement.abbreviation}</span>
                  </div>

                  {/* Key Information Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Regulatory Authority */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <BuildingOfficeIcon className="size-3.5" />
                        <span>Regulatory Authority</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">{requirement.authority}</p>
                    </div>

                    {/* Audit Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <CurrencyDollarIcon className="size-3.5" />
                        <span>Audit Pricing</span>
                      </div>
                      <div className="pl-5">
                        <p className="text-lg font-bold text-brand-900">{requirement.pricing} <span className="text-xs font-normal">+ GST</span></p>
                        <p className="text-xs text-slate-600">Per fund audit</p>
                      </div>
                    </div>

                    {/* Audit Deadline */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <CalendarIcon className="size-3.5" />
                        <span>Audit Deadline</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">{requirement.deadline}</p>
                      <p className="text-xs text-slate-500 pl-5">{requirement.specificDate}</p>
                    </div>

                    {/* Legislation */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <DocumentTextIcon className="size-3.5" />
                        <span>Legislation</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">{requirement.legislation}</p>
                      <p className="text-xs text-slate-500 pl-5">{requirement.legislationSection}</p>
                    </div>
                  </div>

                  {/* Key Requirements - Expandable */}
                  <details className="group mt-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckBadgeIcon className="h-5 w-5 text-brand-700" />
                        <span className="font-medium text-gray-900">Key Requirements ({requirement.keyRequirements.length})</span>
                      </div>
                      <div className="text-gray-400 group-open:rotate-180 transition-transform">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-3 space-y-2">
                      {requirement.keyRequirements.map((req: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded border border-gray-100">
                          <div className="flex-shrink-0 w-2 h-2 bg-brand-700 rounded-full mt-2"></div>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </details>

                  {/* Notes */}
                  {requirement.notes && (
                    <div className="mt-4 p-3 rounded-lg bg-brand-50/50 border border-brand-200/50">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong className="text-brand-950">Note:</strong> {requirement.notes}
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
                      onClick={(e) => e.stopPropagation()}
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

        {/* CTA Section */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/book-demo">
              <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                <CalendarIcon className="size-5" />
                Start Audit
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