import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import {
  MapPin,
  Calendar,
  FileText,
  DollarSign,
  AlertCircle,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

export function StateRequirements() {
  const stateRequirements = [
    {
      state: "New South Wales (NSW)",
      abbreviation: "NSW",
      subtitle: "NSW Fair Trading Regulation",
      authority: "NSW Fair Trading",
      authorityLink: "https://www.fairtrading.nsw.gov.au",
      deadline: "Within 3 months of financial year end",
      specificDate: "Typically 31 October",
      legislation: "Conveyancers Licensing Act 2003",
      legislationSection: "Section 44",
      pricing: "$549",
      competitorPrice: "$600",
      savings: "$51",
      notes:
        "Annual audits mandatory for all licensed conveyancers holding trust accounts. Save $51 compared to competitors.",
      keyRequirements: [
        "Trust account records for the financial year",
        "Bank statements and reconciliations",
        "Trust account receipts and payments",
        "Statutory register maintained under the Act",
      ],
      delay: 0.1,
      color: "from-blue-500/10 to-blue-600/5",
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
      pricing: "$549",
      competitorPrice: "$600",
      savings: "$51",
      notes:
        "Conveyancers must ensure compliance with Victorian conveyancing regulations. Save $51 compared to competitors.",
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
      authorityLink:
        "https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/regulated-industries-and-licensing/regulated-industries-licensing-and-legislation/property-industry/property-occupations-act-2014",
      deadline: "Within 3 months of financial year end",
      specificDate: "Various - based on licensee's FY",
      legislation: "Property Occupations Act 2014",
      legislationSection: "Chapter 4, Part 6",
      pricing: "$549",
      competitorPrice: "$600",
      savings: "$51",
      notes:
        "Requirements apply to conveyancers operating under the Property Occupations Act. Save $51 compared to competitors.",
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
      pricing: "$749",
      competitorPrice: "$800",
      savings: "$51",
      notes:
        "Settlement agents must maintain proper trust accounting records. Save $51 compared to competitors.",
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
      pricing: "$749",
      competitorPrice: "$800",
      savings: "$51",
      notes:
        "Licensed conveyancers required to maintain trust accounts in accordance with SA regulations. Save $51 compared to competitors.",
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
      pricing: "$549",
      competitorPrice: "$600",
      savings: "$51",
      notes:
        "ACT conveyancers must maintain proper trust accounting procedures. Save $51 compared to competitors.",
      keyRequirements: [
        "Trust account records",
        "Bank reconciliations",
        "Trust money receipts and payments",
        "Annual audit report",
      ],
      delay: 0.6,
      color: "from-cyan-500/10 to-cyan-600/5",
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
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
            Conveyancer Audit Requirements by State
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            Comprehensive state-specific compliance requirements, deadlines, and
            regulations for licensed conveyancers across Australia
          </p>
          {/* Price Guarantee Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-900">
            <BadgeCheck className="size-4" />
            <span>Save $51 on every audit - Best Price Guarantee</span>
          </div>
        </Motion>

        {/* Main States Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {stateRequirements.map((requirement) => (
            <Motion
              key={requirement.state}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: requirement.delay }}
            >
              <div
                className={`group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-lg transition-all duration-300`}
              >
                {/* Decorative gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${requirement.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-brand-100/60 p-2.5 group-hover:bg-brand-200/80 transition-colors">
                        <MapPin className="size-5 text-brand-950" />
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
                        <FileText className="size-3.5" />
                        <span>Regulatory Authority</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-5">
                        {requirement.authority}
                      </p>
                    </div>

                    {/* Pricing with Savings */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <DollarSign className="size-3.5" />
                        <span>Audit Pricing</span>
                      </div>
                      <div className="pl-5">
                        <div className="flex items-baseline gap-2">
                          <p className="text-lg font-bold text-brand-900">
                            {requirement.pricing}
                          </p>
                          <span className="text-xs text-slate-500 line-through">
                            {requirement.competitorPrice}
                          </span>
                        </div>
                        <p className="text-xs text-green-700 font-medium">
                          Save {requirement.savings} + GST
                        </p>
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-brand-950">
                        <Calendar className="size-3.5" />
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
                        <FileText className="size-3.5" />
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
                      <AlertCircle className="size-4" />
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
                      <ExternalLink className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>

        {/* Tasmania & Northern Territory */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="rounded-xl border border-brand-200/70 bg-gradient-to-br from-amber-50/50 to-white backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40">
            <div className="flex items-start gap-3 mb-4">
              <div className="rounded-full bg-amber-100/60 p-2">
                <MapPin className="size-5 text-amber-900" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-brand-950 mb-1">
                      Tasmania (TAS) & Northern Territory (NT)
                    </h3>
                    <p className="text-xs text-slate-600">
                      Limited Conveyancing Licensing
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-brand-900">
                      $549 / $749
                    </p>
                    <p className="text-xs text-slate-600">TAS / NT + GST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <strong>Important:</strong> Tasmania and Northern Territory
                currently have limited or no separate conveyancing licensing
                schemes. Conveyancing services are typically provided by:
              </p>
              <ul className="space-y-1.5 pl-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-700 mt-0.5">•</span>
                  <span>Licensed legal practitioners (solicitors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-700 mt-0.5">•</span>
                  <span>
                    Licensed conveyancers from other states operating under
                    mutual recognition
                  </span>
                </li>
              </ul>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-lg bg-green-50/70 border border-green-200/70">
                  <p className="text-xs font-medium text-green-900 mb-1">
                    Tasmania (TAS)
                  </p>
                  <p className="text-lg font-bold text-green-900">
                    $549 <span className="text-xs font-normal">+ GST</span>
                  </p>
                  <p className="text-xs text-green-700">
                    Save $51 vs competitors
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-green-50/70 border border-green-200/70">
                  <p className="text-xs font-medium text-green-900 mb-1">
                    Northern Territory (NT)
                  </p>
                  <p className="text-lg font-bold text-green-900">
                    $749 <span className="text-xs font-normal">+ GST</span>
                  </p>
                  <p className="text-xs text-green-700">
                    Save $51 vs competitors
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-amber-50/70 border border-amber-200/70">
                <p className="text-xs text-amber-900">
                  <strong>Need audit services in TAS or NT?</strong> We provide
                  trust account audits for legal practitioners and interstate
                  conveyancers operating in these territories. Contact us for
                  specific requirements and pricing confirmation.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-medium mt-2"
              >
                <span>Contact Us for TAS/NT Requirements</span>
                <ExternalLink className="size-4" />
              </Link>
            </div>
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
            <Link href="/book-audit">
              <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                <Calendar className="size-5" />
                Book Your State Audit Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                <FileText className="size-5" />
                Get Custom Quote
              </button>
            </Link>
          </div>
        </Motion>
      </div>
    </section>
  );
}
