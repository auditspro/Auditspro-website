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

// Pricing data for conveyancers
const conveyancerPricing = [
  { state: "NSW", basePrice: 54900 },
  { state: "VIC", basePrice: 54900 },
  { state: "QLD", basePrice: 54900 },
  { state: "WA", basePrice: 74900 },
  { state: "SA", basePrice: 74900 },
  { state: "ACT", basePrice: 54900 },
  { state: "TAS", basePrice: 54900 },
  { state: "NT", basePrice: 74900 },
];

// Helper function to get pricing by state
const getConveyancerPrice = (state: string): number => {
  const pricing = conveyancerPricing.find(p => p.state === state);
  return pricing ? pricing.basePrice : 54900; // Default pricing
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
      subtitle: "NSW Fair Trading Regulation",
      authority: "NSW Fair Trading",
      authorityLink: "https://www.fairtrading.nsw.gov.au/trades-and-businesses/business-essentials/conveyancers/trust-accounts-and-audit-requirements",
      deadline: "Within 3 months of financial year end",
      specificDate: "30 September (Audit Period 1 July - 30 June)",
      legislation: "Conveyancers Licensing Act 2003",
      legislationSection: "Part 5 (Trust Money)",
      pricing: formatPrice(getConveyancerPrice("NSW")),
      notes: "Annual audits mandatory for all licensed conveyancers holding trust accounts. Nil returns required if no trust money held.",
      keyRequirements: [
        "Annual audit required if trust money held/received during FY ending 30 June",
        "Must be conducted by qualified auditor (registered with ASIC or s79 qualified)",
        "Report lodged via NSW Fair Trading Auditor's Report Online portal",
        "Must complete 'trust account(s) notice' (blue form) when opening",
        "Trust account name must include 'Trust Account' and licensee/corporation name",
        "Submit by 30 September to avoid penalties",
        "Nil returns required if no trust money held (Notice that licensed conveyancer did not receive or hold trust money)"
      ],
      delay: 0.1,
      color: "from-brand-700/10 to-brand-700/5",
    },
    {
      state: "Victoria (VIC)",
      abbreviation: "VIC",
      subtitle: "Consumer Affairs Victoria",
      authority: "Consumer Affairs Victoria",
      authorityLink: "https://www.consumer.vic.gov.au",
      deadline: "Within 3 months of financial year end",
      specificDate: "30 September (if FY ends 30 June)",
      legislation: "Conveyancers Act 2006",
      legislationSection: "Section 50",
      pricing: formatPrice(getConveyancerPrice("VIC")),
      notes: "Conveyancers must ensure compliance with Victorian conveyancing regulations.",
      keyRequirements: [
        "Trust ledger for each client matter",
        "Monthly trust account reconciliations",
        "Trust money receipts and payment records",
        "Annual trust account statement",
      ],
      delay: 0.2,
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      state: "Queensland (QLD)",
      abbreviation: "QLD",
      subtitle: "Office of Fair Trading",
      authority: "QLD Office of Fair Trading",
      authorityLink: "https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/regulated-industries-and-licensing/regulated-industries-licensing-and-legislation/property-industry/property-occupations-act-2014",
      deadline: "Within 3 months of financial year end",
      specificDate: "Various - based on licensee's FY",
      legislation: "Property Occupations Act 2014",
      legislationSection: "Chapter 4, Part 6",
      pricing: formatPrice(getConveyancerPrice("QLD")),
      notes: "Requirements apply to conveyancers operating under the Property Occupations Act.",
      keyRequirements: [
        "Trust account receipts register",
        "Trust account payments register",
        "Trust ledger accounts for each client",
        "Monthly reconciliation statements",
      ],
      delay: 0.3,
      color: "from-amber-500/10 to-amber-600/5",
    },
    {
      state: "Western Australia (WA)",
      abbreviation: "WA",
      subtitle: "Department of Mines, Industry Regulation and Safety",
      authority: "Consumer Protection WA",
      authorityLink: "https://www.commerce.wa.gov.au",
      deadline: "Within 4 months of financial year end",
      specificDate: "31 October (if FY ends 30 June)",
      legislation: "Settlement Agents Act 1981",
      legislationSection: "Section 64",
      pricing: formatPrice(getConveyancerPrice("WA")),
      notes: "Settlement agents must maintain proper trust accounting records.",
      keyRequirements: [
        "Trust account journals",
        "Trust ledgers for each client",
        "Monthly bank reconciliations",
        "Trust account receipts and payments",
      ],
      delay: 0.4,
      color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      state: "South Australia (SA)",
      abbreviation: "SA",
      subtitle: "Consumer and Business Services",
      authority: "CBS South Australia",
      authorityLink: "https://www.cbs.sa.gov.au",
      deadline: "Within 3 months of financial year end",
      specificDate: "30 September (if FY ends 30 June)",
      legislation: "Conveyancers Act 1994",
      legislationSection: "Section 31",
      pricing: formatPrice(getConveyancerPrice("SA")),
      notes: "Licensed conveyancers required to maintain trust accounts in accordance with SA regulations.",
      keyRequirements: [
        "Trust money records",
        "Monthly reconciliation statements",
        "Trust account registers",
        "Audit certificate",
      ],
      delay: 0.5,
      color: "from-red-500/10 to-red-600/5",
    },
    {
      state: "Australian Capital Territory (ACT)",
      abbreviation: "ACT",
      subtitle: "Access Canberra",
      authority: "Access Canberra",
      authorityLink: "https://www.accesscanberra.act.gov.au",
      deadline: "Within 3 months of financial year end",
      specificDate: "30 September (if FY ends 30 June)",
      legislation: "Conveyancers Act 2003",
      legislationSection: "Section 48",
      pricing: formatPrice(getConveyancerPrice("ACT")),
      notes: "ACT conveyancers must maintain proper trust accounting procedures.",
      keyRequirements: [
        "Trust account records",
        "Bank reconciliations",
        "Trust money receipts and payments",
        "Annual audit report",
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
      deadline: "Within 3 months of financial year end",
      specificDate: "30 September (if FY ends 30 June)",
      legislation: "Property Agents and Land Transactions Act 2016 (TAS)",
      legislationSection: "Trust Account Requirements",
      pricing: formatPrice(getConveyancerPrice("TAS")),
      notes: "Limited conveyancing licensing. Services typically provided by licensed legal practitioners or interstate conveyancers under mutual recognition.",
      keyRequirements: [
        "Trust account records for legal practitioners",
        "Monthly reconciliation statements",
        "Trust money receipts and payments",
        "Compliance with mutual recognition provisions",
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
      deadline: "Within 3 months of financial year end",
      specificDate: "30 September (if FY ends 30 June)",
      legislation: "Agents Licensing Act 1979 (NT)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getConveyancerPrice("NT")),
      notes: "Limited conveyancing licensing. Services typically provided by licensed legal practitioners or interstate conveyancers under mutual recognition.",
      keyRequirements: [
        "Trust account records for licensed agents",
        "Monthly reconciliation statements",
        "Trust money receipts and payments",
        "Compliance with mutual recognition provisions",
      ],
      delay: 0.8,
      color: "from-orange-500/10 to-orange-600/5",
    },
  ];

  // Filter requirements if state-specific
  const displayRequirements = isStateSpecific 
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
              ? `${stateName} Conveyancer Audit Requirements`
              : "Conveyancer Audit Requirements by State"
            }
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            {isStateSpecific
              ? `Comprehensive compliance requirements, deadlines, and regulations for licensed conveyancers in ${stateName}`
              : "Comprehensive state-specific compliance requirements, deadlines, and regulations for licensed conveyancers across Australia"
            }
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
              <div
                className={`group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-lg transition-all duration-300`}
              >
                {/* Hover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${requirement.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
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

                  {/* Key Information Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Regulatory Authority */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <BuildingOfficeIcon className="size-3.5" />
                        <span>Regulatory Authority</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">
                        {requirement.authority}
                      </p>
                    </div>

                    {/* Audit Pricing */}
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
                          Per trust account audit
                        </p>
                      </div>
                    </div>

                    {/* Audit Deadline */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <CalendarIcon className="size-3.5" />
                        <span>Audit Deadline</span>
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

                  {/* Key Requirements - Expandable */}
                  <details className="group mt-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckBadgeIcon className="h-5 w-5 text-brand-700" />
                        <span className="font-medium text-gray-900">
                          Key Requirements ({requirement.keyRequirements.length})
                        </span>
                      </div>
                      <div className="text-gray-400 group-open:rotate-180 transition-transform">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-3 space-y-2">
                      {requirement.keyRequirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-start gap-3 p-3 bg-white rounded border border-gray-100">
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



        {/* State-Specific Pages Section */}
        {!isStateSpecific && (
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-brand-950 mb-2">
                State-Specific Conveyancer Audit Information
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Get detailed information about conveyancer audit requirements, deadlines, and regulations specific to your state
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { state: "NSW", name: "New South Wales", path: "/services/conveyancers/nsw" },
                { state: "VIC", name: "Victoria", path: "/services/conveyancers/vic" },
                { state: "QLD", name: "Queensland", path: "/services/conveyancers/qld" },
                { state: "WA", name: "Western Australia", path: "/services/conveyancers/wa" },
                { state: "SA", name: "South Australia", path: "/services/conveyancers/sa" },
                { state: "ACT", name: "Australian Capital Territory", path: "/services/conveyancers/act" },
                { state: "TAS", name: "Tasmania", path: "/services/conveyancers/tas" },
                { state: "NT", name: "Northern Territory", path: "/services/conveyancers/nt" },
              ].map((stateInfo) => (
                <Link
                  key={stateInfo.state}
                  href={stateInfo.path}
                  className="group relative rounded-lg border border-brand-200/70 bg-white/70 backdrop-blur p-4 text-center transition-all hover:shadow-md hover:border-brand-300/70 supports-[backdrop-filter]:bg-white/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 to-transparent rounded-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-100/60 group-hover:bg-brand-200/80 transition-colors mb-2">
                      <MapPinIcon className="w-5 h-5 text-brand-950" />
                    </div>
                    <div className="font-medium text-brand-950 text-sm mb-1">
                      {stateInfo.state}
                    </div>
                    <div className="text-xs text-slate-600 leading-tight">
                      {stateInfo.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Motion>
        )}

        {/* CTA Section */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/book-audit">
              <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                <CalendarIcon className="size-5" />
                Book Your State Audit Now
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
