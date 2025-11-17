"use client";

import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import {
  Squares2X2Icon,
  CheckBadgeIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const basePriceCents = 54900; // $549 + GST per trust account
const formatPrice = (cents: number) => `$${(cents / 100).toFixed(0)}`;

export function RequirementsSection() {
  const stateRequirements = [
    {
      state: "New South Wales (NSW)",
      abbreviation: "NSW",
      subtitle: "State Consumer Affairs / Fair Trading",
      authority: "NSW Fair Trading",
      authorityLink: "https://www.fairtrading.nsw.gov.au/",
      deadline: "Annual audit requirements",
      specificDate: "Typically within months after financial year-end",
      legislation: "Audit requirements as per regulations",
      legislationSection: "Refer to current NSW regulatory guidance",
      pricing: formatPrice(basePriceCents),
      notes: "Ensure compliance with NSW Fair Trading requirements for business brokers handling client funds.",
      keyRequirements: [
        "Trust account bank reconciliations",
        "Receipt and payment documentation",
        "Client monies handling procedures",
        "Independent audit report and findings",
      ],
      delay: 0.1,
      color: "from-blue-500/10 to-blue-600/5",
    },
    {
      state: "Victoria (VIC)",
      abbreviation: "VIC",
      subtitle: "State Consumer Affairs / Fair Trading",
      authority: "Consumer Affairs Victoria",
      authorityLink: "https://www.consumer.vic.gov.au/",
      deadline: "Annual audit requirements",
      specificDate: "Typically within months after financial year-end",
      legislation: "Audit requirements as per regulations",
      legislationSection: "Refer to current VIC regulatory guidance",
      pricing: formatPrice(basePriceCents),
      notes: "Maintain proper records and comply with Consumer Affairs Victoria guidance.",
      keyRequirements: [
        "Trust ledger and client account records",
        "Reconciliation and control checks",
        "Compliance with receipt/withdrawal rules",
        "Audit report with recommendations",
      ],
      delay: 0.2,
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      state: "Queensland (QLD)",
      abbreviation: "QLD",
      subtitle: "State Consumer Affairs / Fair Trading",
      authority: "Office of Fair Trading (QLD)",
      authorityLink: "https://www.qld.gov.au/law/fair-trading",
      deadline: "Annual audit requirements",
      specificDate: "Typically within months after financial year-end",
      legislation: "Audit requirements as per regulations",
      legislationSection: "Refer to current QLD regulatory guidance",
      pricing: formatPrice(basePriceCents),
      notes: "QLD Office of Fair Trading sets trust account compliance requirements.",
      keyRequirements: [
        "Bank confirmations and reconciliations",
        "Client funds segregation",
        "Documentation and authorisations",
        "Independent audit reporting",
      ],
      delay: 0.3,
      color: "from-amber-500/10 to-amber-600/5",
    },
    {
      state: "Western Australia (WA)",
      abbreviation: "WA",
      subtitle: "State Consumer Affairs / Fair Trading",
      authority: "Consumer Protection (DMIRS)",
      authorityLink: "https://www.commerce.wa.gov.au/consumer-protection",
      deadline: "Annual audit requirements",
      specificDate: "Typically within months after financial year-end",
      legislation: "Audit requirements as per regulations",
      legislationSection: "Refer to current WA regulatory guidance",
      pricing: formatPrice(basePriceCents),
      notes: "Ensure compliance with DMIRS Consumer Protection requirements.",
      keyRequirements: [
        "Trust receipts and payments evidence",
        "Reconciliations and variance checks",
        "Control environment assessment",
        "Compliance report to regulator",
      ],
      delay: 0.4,
      color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      state: "South Australia (SA)",
      abbreviation: "SA",
      subtitle: "State Consumer Affairs / Fair Trading",
      authority: "Consumer and Business Services (SA)",
      authorityLink: "https://www.cbs.sa.gov.au/",
      deadline: "Annual audit requirements",
      specificDate: "Typically within months after financial year-end",
      legislation: "Audit requirements as per regulations",
      legislationSection: "Refer to current SA regulatory guidance",
      pricing: formatPrice(basePriceCents),
      notes: "CBS SA provides audit and trust account guidance for brokers.",
      keyRequirements: [
        "Client account reconciliations",
        "Supporting documentation review",
        "Compliance testing",
        "Audit findings and recommendations",
      ],
      delay: 0.5,
      color: "from-red-500/10 to-red-600/5",
    },
    {
      state: "Australian Capital Territory (ACT)",
      abbreviation: "ACT",
      subtitle: "State Consumer Affairs / Fair Trading",
      authority: "Access Canberra",
      authorityLink: "https://www.accesscanberra.act.gov.au/",
      deadline: "Annual audit requirements",
      specificDate: "Typically within months after financial year-end",
      legislation: "Audit requirements as per regulations",
      legislationSection: "Refer to current ACT regulatory guidance",
      pricing: formatPrice(basePriceCents),
      notes: "Follow Access Canberra trust account guidance for brokers handling client funds.",
      keyRequirements: [
        "Trust account bank statements",
        "Ledger integrity checks",
        "Procedural compliance",
        "Audit report submission",
      ],
      delay: 0.6,
      color: "from-cyan-500/10 to-cyan-600/5",
    },
    {
      state: "Tasmania (TAS)",
      abbreviation: "TAS",
      subtitle: "State Consumer Affairs / Fair Trading",
      authority: "Consumer, Building and Occupational Services (CBOS)",
      authorityLink: "https://www.cbos.tas.gov.au/",
      deadline: "Annual audit requirements",
      specificDate: "Typically within months after financial year-end",
      legislation: "Audit requirements as per regulations",
      legislationSection: "Refer to current TAS regulatory guidance",
      pricing: formatPrice(basePriceCents),
      notes: "CBOS Tasmania oversees compliance for trust accounts across industries.",
      keyRequirements: [
        "Receipts/payments documentation",
        "Reconciliations and variance analysis",
        "Internal control review",
        "Audit certificate",
      ],
      delay: 0.7,
      color: "from-teal-500/10 to-teal-600/5",
    },
    {
      state: "Northern Territory (NT)",
      abbreviation: "NT",
      subtitle: "State Consumer Affairs / Fair Trading",
      authority: "NT Licensing / Consumer Affairs",
      authorityLink: "https://consumeraffairs.nt.gov.au/",
      deadline: "Annual audit requirements",
      specificDate: "Typically within months after financial year-end",
      legislation: "Audit requirements as per regulations",
      legislationSection: "Refer to current NT regulatory guidance",
      pricing: formatPrice(basePriceCents),
      notes: "Ensure compliance with NT trust account guidance for brokers.",
      keyRequirements: [
        "Bank confirmations and reconciliations",
        "Client fund handling compliance",
        "Documentation checks",
        "Independent audit report",
      ],
      delay: 0.8,
      color: "from-orange-500/10 to-orange-600/5",
    },
  ];

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
            Business Broker Audit Requirements by State
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            Overview of state consumer affairs/fair trading audit expectations for business brokers handling client monies. Specific obligations can vary; always refer to current regulator guidance.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-900">
            <CheckBadgeIcon className="size-4" />
            <span>Professional Audit Services - Best Price Guarantee</span>
          </div>
        </Motion>

        {/* State Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {stateRequirements.map((requirement) => (
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
                        <p className="text-xs text-slate-600">Per trust account audit</p>
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
                        <span>Guidance</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">{requirement.legislation}</p>
                      <p className="text-xs text-slate-500 pl-5">{requirement.legislationSection}</p>
                    </div>
                  </div>

                  {/* Key Requirements - Expandable */}
                  <details className="group mt-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckBadgeIcon className="h-5 w-5 text-blue-600" />
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
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </details>

                  {/* Notes */}
                  <div className="mt-4 p-3 rounded-lg bg-brand-50/50 border border-brand-200/50">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-brand-950">Note:</strong> Requirements may vary; always check the latest guidance from the relevant state regulator.
                    </p>
                  </div>

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