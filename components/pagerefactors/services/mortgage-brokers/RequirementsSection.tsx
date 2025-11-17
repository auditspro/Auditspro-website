"use client";

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

// Mortgage broker pricing by state (simpler: uniform base pricing)
const mortgageBrokerPricing = [
  { state: "ACT", basePrice: 54900 },
  { state: "NSW", basePrice: 54900 },
  { state: "NT", basePrice: 54900 },
  { state: "QLD", basePrice: 54900 },
  { state: "SA", basePrice: 54900 },
  { state: "TAS", basePrice: 54900 },
  { state: "VIC", basePrice: 54900 },
  { state: "WA", basePrice: 54900 },
];

const getPriceByState = (state: string): number => {
  const pricing = mortgageBrokerPricing.find(p => p.state === state);
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
      subtitle: "NCCP — Australian Credit License (ACL)",
      authority: "ASIC — National Consumer Credit Protection Act 2009 (Cth)",
      authorityLink: "https://asic.gov.au/regulatory-resources/credit/" ,
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "National Consumer Credit Protection Act 2009 (Cth)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getPriceByState("NSW")),
      notes: "Annual audit required for ACL holders handling trust funds and commissions.",
      keyRequirements: [
        "Annual audit required for ACL holders",
        "Compliance with NCCP Act and ASIC Regulatory Guides",
        "Trust account reconciliation and commission handling",
        "Report retained for compliance and lender confidence",
      ],
      delay: 0.1,
      color: "from-blue-500/10 to-blue-600/5",
    },
    {
      state: "Victoria (VIC)",
      abbreviation: "VIC",
      subtitle: "NCCP — Australian Credit License (ACL)",
      authority: "ASIC — National Consumer Credit Protection Act 2009 (Cth)",
      authorityLink: "https://asic.gov.au/regulatory-resources/credit/",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "National Consumer Credit Protection Act 2009 (Cth)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getPriceByState("VIC")),
      notes: "Mortgage brokers must maintain compliant trust records and commission distribution logs.",
      keyRequirements: [
        "Trust ledger for each client",
        "Monthly trust account reconciliation",
        "Commission receipt and payment records",
        "Annual compliance review",
      ],
      delay: 0.2,
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      state: "Queensland (QLD)",
      abbreviation: "QLD",
      subtitle: "NCCP — Australian Credit License (ACL)",
      authority: "ASIC — National Consumer Credit Protection Act 2009 (Cth)",
      authorityLink: "https://asic.gov.au/regulatory-resources/credit/",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "National Consumer Credit Protection Act 2009 (Cth)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getPriceByState("QLD")),
      notes: "Qualified auditor appointment for ACL holders managing client funds.",
      keyRequirements: [
        "Qualified auditor appointment",
        "Annual trust account audit",
        "Compliance with NCCP obligations",
        "Report retention and lender agreement compliance",
      ],
      delay: 0.3,
      color: "from-amber-500/10 to-amber-600/5",
    },
    {
      state: "Western Australia (WA)",
      abbreviation: "WA",
      subtitle: "NCCP — Australian Credit License (ACL)",
      authority: "ASIC — National Consumer Credit Protection Act 2009 (Cth)",
      authorityLink: "https://asic.gov.au/regulatory-resources/credit/",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "National Consumer Credit Protection Act 2009 (Cth)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getPriceByState("WA")),
      notes: "Annual audit for mortgage brokers handling trust money and commissions.",
      keyRequirements: [
        "Annual audit and reconciliation",
        "Commission handling and distribution",
        "Client fund segregation",
        "Regulatory compliant audit report",
      ],
      delay: 0.4,
      color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      state: "South Australia (SA)",
      abbreviation: "SA",
      subtitle: "NCCP — Australian Credit License (ACL)",
      authority: "ASIC — National Consumer Credit Protection Act 2009 (Cth)",
      authorityLink: "https://asic.gov.au/regulatory-resources/credit/",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "National Consumer Credit Protection Act 2009 (Cth)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getPriceByState("SA")),
      notes: "Maintain trust records and monthly reconciliations; retain annual report for compliance.",
      keyRequirements: [
        "Trust money records",
        "Monthly bank reconciliations",
        "Commission registers",
        "Audit certificate and recommendations",
      ],
      delay: 0.5,
      color: "from-red-500/10 to-red-600/5",
    },
    {
      state: "Australian Capital Territory (ACT)",
      abbreviation: "ACT",
      subtitle: "NCCP — Australian Credit License (ACL)",
      authority: "ASIC — National Consumer Credit Protection Act 2009 (Cth)",
      authorityLink: "https://asic.gov.au/regulatory-resources/credit/",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "National Consumer Credit Protection Act 2009 (Cth)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getPriceByState("ACT")),
      notes: "Mortgage brokers must maintain compliant trust accounting procedures.",
      keyRequirements: [
        "Trust account records",
        "Bank reconciliations",
        "Trust receipts and payments",
        "Annual audit report",
      ],
      delay: 0.6,
      color: "from-cyan-500/10 to-cyan-600/5",
    },
    {
      state: "Tasmania (TAS)",
      abbreviation: "TAS",
      subtitle: "NCCP — Australian Credit License (ACL)",
      authority: "ASIC — National Consumer Credit Protection Act 2009 (Cth)",
      authorityLink: "https://asic.gov.au/regulatory-resources/credit/",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "National Consumer Credit Protection Act 2009 (Cth)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getPriceByState("TAS")),
      notes: "Maintain compliant trust account procedures and reconciliation.",
      keyRequirements: [
        "Trust account records",
        "Monthly reconciliation statements",
        "Trust money receipts and payments",
        "Annual audit report",
      ],
      delay: 0.7,
      color: "from-teal-500/10 to-teal-600/5",
    },
    {
      state: "Northern Territory (NT)",
      abbreviation: "NT",
      subtitle: "NCCP — Australian Credit License (ACL)",
      authority: "ASIC — National Consumer Credit Protection Act 2009 (Cth)",
      authorityLink: "https://asic.gov.au/regulatory-resources/credit/",
      deadline: "Annual audit required",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "National Consumer Credit Protection Act 2009 (Cth)",
      legislationSection: "Trust Account Provisions",
      pricing: formatPrice(getPriceByState("NT")),
      notes: "Annual audit required for ACL holders handling trust money.",
      keyRequirements: [
        "Annual audit for ACL holders",
        "Monthly reconciliation statements",
        "Trust money receipts and payments",
        "Regulatory compliant audit certificate",
      ],
      delay: 0.8,
      color: "from-orange-500/10 to-orange-600/5",
    },
  ];

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
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <Squares2X2Icon className="size-4" />
              <span>State Requirements</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
            {isStateSpecific
              ? `${stateName} Mortgage Broker Trust Account Audit Requirements`
              : "Mortgage Broker Trust Account Audit Requirements by State"}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            {isStateSpecific ? (
              `Comprehensive compliance requirements, deadlines, and regulations for mortgage brokers in ${stateName}. Our professional audit services ensure full compliance with NCCP obligations.`
            ) : (
              <>Comprehensive state-specific audit requirements for mortgage brokers across Australia. Our <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">professional audit services</Link> ensure full compliance with NCCP obligations and ASIC regulatory guidance.</>
            )}
          </p>

          {/* Price Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900">
            <CheckBadgeIcon className="size-4" />
            <span>
              {isStateSpecific
                ? `${stateName} Pricing - ${formatPrice(getPriceByState(state!))} + GST per trust account`
                : `State-based Pricing - ${formatPrice(54900)} + GST per trust account`}
            </span>
          </div>
        </Motion>

        {/* States Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {displayRequirements.map((requirement) => (
            <Motion
              key={requirement.state}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: requirement.delay }}
            >
              <div className={`group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-xl hover:bg-white/90 transition-all duration-300`}>
                {/* Decorative gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${requirement.color} rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>

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

                  {/* Key Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Authority */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <BuildingOfficeIcon className="size-3.5" />
                        <span>Regulatory Authority</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">{requirement.authority}</p>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <CurrencyDollarIcon className="size-3.5" />
                        <span>Audit Pricing</span>
                      </div>
                      <div className="pl-5">
                        <p className="text-lg font-bold text-brand-900">{requirement.pricing} <span className="text-xs font-normal">+ GST</span></p>
                        <p className="text-xs text-slate-600">Multiple trust accounts: {requirement.pricing} + GST each</p>
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <CalendarIcon className="size-3.5" />
                        <span>Audit Requirement</span>
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

                  {/* Notes */}
                  <div className="rounded-lg bg-brand-50/60 border border-brand-200 p-4">
                    <div className="flex items-start gap-2">
                      <ExclamationTriangleIcon className="size-4 text-brand-700 mt-0.5" />
                      <p className="text-sm text-slate-700">{requirement.notes}</p>
                    </div>
                  </div>

                  {/* External Link */}
                  <div className="mt-4">
                    <Link href={requirement.authorityLink} className="inline-flex items-center gap-2 text-sm text-brand-700 hover:text-brand-800 underline underline-offset-2">
                      Visit ASIC Credit Resources <ArrowTopRightOnSquareIcon className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}