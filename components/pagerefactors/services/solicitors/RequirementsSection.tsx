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
  ScaleIcon,
} from "@heroicons/react/24/outline";

export function RequirementsSection() {
  const stateRequirements = [
    {
      state: "New South Wales (NSW)",
      abbreviation: "NSW",
      subtitle: "Law Society of NSW",
      authority: "Law Society of NSW",
      authorityLink: "https://www.lawsociety.com.au/practising-law-nsw/trust-money-and-fidelity-fund",
      deadline: "Report by 31 May",
      specificDate: "Audit period: 1 April to 31 March",
      legislation: "Legal Profession Uniform Law (NSW)",
      legislationSection: "Trust Account Regulations",
      pricing: "$1,949",
      notes: "Annual audit required for practices holding trust money. Appointment via Trust Lodgement Portal (TLP).",
      keyRequirements: [
        "Annual audit required for practices holding trust money",
        "Appointment via Trust Lodgement Portal (TLP)",
        "Compliance with Legal Profession Uniform Law (NSW)",
        "Report lodged via Trust Lodgement Portal",
      ],
      delay: 0.1,
      color: "from-blue-500/10 to-blue-600/5",
    },
    {
      state: "Victoria (VIC)",
      abbreviation: "VIC",
      subtitle: "Victorian Legal Services Board + Commissioner",
      authority: "Victorian Legal Services Board",
      authorityLink: "https://www.lsbc.vic.gov.au/lawyers/trust-accounts",
      deadline: "Report by 31 May (within 60 days)",
      specificDate: "Audit period: 1 April to 31 March",
      legislation: "Legal Profession Uniform Law (Victoria)",
      legislationSection: "Trust Account Provisions",
      pricing: "$1,949",
      notes: "External Examiner appointment within one month. Notification to VLSBC required.",
      keyRequirements: [
        "External Examiner appointment within one month",
        "Notification to VLSBC required",
        "Compliance with Legal Profession Uniform Law (Victoria)",
        "Report lodged via LSB Online",
      ],
      delay: 0.2,
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      state: "Queensland (QLD)",
      abbreviation: "QLD",
      subtitle: "Queensland Law Society",
      authority: "Queensland Law Society",
      authorityLink: "https://www.qls.com.au/for_the_profession/trust_accounting",
      deadline: "Report by 30 May (within 60 days)",
      specificDate: "Audit period: 1 April to 31 March",
      legislation: "Legal Profession Act 2007 (QLD)",
      legislationSection: "Trust Account Requirements",
      pricing: "$1,949",
      notes: "External Examiner appointment within 14 days. Notification to QLS within 30 days.",
      keyRequirements: [
        "External Examiner appointment within 14 days",
        "Notification to QLS within 30 days",
        "Compliance with Legal Profession Act 2007 (QLD)",
        "Conveyancing strictly by registered solicitors only",
      ],
      delay: 0.3,
      color: "from-amber-500/10 to-amber-600/5",
    },
    {
      state: "Western Australia (WA)",
      abbreviation: "WA",
      subtitle: "Law Society of WA",
      authority: "Law Society of WA",
      authorityLink: "https://www.lawsocietywa.asn.au/practising-law/trust-accounts",
      deadline: "Report by 31 May",
      specificDate: "Audit period: 1 April to 31 March",
      legislation: "Legal Profession Act",
      legislationSection: "Trust Account Provisions",
      pricing: "$1,949",
      notes: "Annual audit required. Designated External Examiner required.",
      keyRequirements: [
        "Annual audit required",
        "Submit to Law Society of WA",
        "Compliance with Legal Profession Act",
        "Designated External Examiner required",
      ],
      delay: 0.4,
      color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      state: "South Australia (SA)",
      abbreviation: "SA",
      subtitle: "Law Society of SA",
      authority: "Law Society of SA",
      authorityLink: "https://www.lawsocietysa.asn.au/practising-law/trust-accounts",
      deadline: "Report by 31 October",
      specificDate: "Audit period: 1 July to 30 June",
      legislation: "Legal Practitioners Act 1981 (SA)",
      legislationSection: "Trust Account Requirements",
      pricing: "$1,949",
      notes: "Annual audit required for trust money holders. Designated External Examiner appointment.",
      keyRequirements: [
        "Annual audit required for trust money holders",
        "Designated External Examiner appointment",
        "Compliance with Legal Practitioners Act 1981 (SA)",
        "Submit to Law Society of SA",
      ],
      delay: 0.5,
      color: "from-red-500/10 to-red-600/5",
    },
    {
      state: "Australian Capital Territory (ACT)",
      abbreviation: "ACT",
      subtitle: "ACT Law Society",
      authority: "ACT Law Society",
      authorityLink: "https://www.actlawsociety.asn.au/practising-law/trust-accounts",
      deadline: "Report by 31 May",
      specificDate: "Audit period: 1 April to 31 March",
      legislation: "Legal Profession Act",
      legislationSection: "Trust Account Provisions",
      pricing: "$1,949",
      notes: "Designated External Examiner only. Notify Society within one month of appointment.",
      keyRequirements: [
        "Designated External Examiner only",
        "Notify Society within one month of appointment",
        "Compliance with Legal Profession Act",
        "Report lodged as soon as practicable",
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
            Solicitor Trust Account Audit Requirements by State
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">
            Comprehensive state-specific compliance requirements, deadlines, and
            regulations for licensed solicitors across Australia
          </p>
          {/* Price Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900">
            <CheckBadgeIcon className="size-4" />
            <span>Fixed Pricing - $1,949 + GST per trust account</span>
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
                        <ScaleIcon className="size-3.5" />
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
                          Additional control accounts: $100 + GST each
                        </p>
                      </div>
                    </div>

                    {/* Deadline */}
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

        {/* Tasmania & Northern Territory */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="rounded-xl border border-brand-200/70 bg-gradient-to-br from-amber-50/50 to-white backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40">
            <div className="flex items-start gap-3 mb-4">
              <div className="rounded-full bg-amber-100/60 p-2">
                <MapPinIcon className="size-5 text-amber-900" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-brand-950 mb-1">
                      Tasmania (TAS) & Northern Territory (NT)
                    </h3>
                    <p className="text-xs text-slate-600">
                      Law Society Requirements
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-brand-900">
                      $1,949 <span className="text-xs font-normal">+ GST</span>
                    </p>
                    <p className="text-xs text-slate-600">Per trust account</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <strong>Tasmania and Northern Territory</strong> have specific Law Society requirements for solicitor trust account audits:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-lg bg-green-50/70 border border-green-200/70">
                  <p className="text-xs font-medium text-green-900 mb-1">
                    Tasmania (TAS)
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    Audit period: 1 July to 30 June
                  </p>
                  <p className="text-lg font-bold text-green-900">
                    $1,949 <span className="text-xs font-normal">+ GST</span>
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-green-50/70 border border-green-200/70">
                  <p className="text-xs font-medium text-green-900 mb-1">
                    Northern Territory (NT)
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    Audit period: 1 April to 31 March
                  </p>
                  <p className="text-lg font-bold text-green-900">
                    $1,949 <span className="text-xs font-normal">+ GST</span>
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-amber-50/70 border border-amber-200/70">
                <p className="text-xs text-amber-900">
                  <strong>Need audit services in TAS or NT?</strong> We provide
                  Law Society compliant trust account audits for solicitors in these territories. Contact us for specific requirements.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-medium mt-2"
              >
                <span>Contact Us for TAS/NT Requirements</span>
                <ArrowTopRightOnSquareIcon className="size-4" />
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
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                <CalendarIcon className="size-5" />
                Book Your Legal Audit Now
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