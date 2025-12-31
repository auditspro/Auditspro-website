"use client";

import { useState } from "react";
import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import {
  CalendarIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
  InformationCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

interface TrustAccountAuditSectionProps {
  state: string;
}

// State-specific trust account audit data
// Note: Mortgage Brokers are primarily regulated federally by ASIC (NCCP Act).
// However, we structure this by state to provide a consistent user experience
// and to capture any specific state-based practice directions if they exist.
const stateAuditData = {
  NSW: {
    fullName: "New South Wales",
    authority: "ASIC (Australian Securities & Investments Commission)",
    legislation: "National Consumer Credit Protection Act 2009 (Cth)",
    regulation: "National Consumer Credit Protection Regulations 2010",
    auditPeriod: "1 July to 30 June",
    dueDate: "Typically 30 September (verify with license conditions)",
    submissionMethod: "ASIC Regulatory Portal",
    submissionBy: "Auditor or Licensee (depending on specific report type)",
    pricing: "$549",
    keyRequirements: [
      "Australian Credit Licence (ACL) holders handling trust funds",
      "Compliance with ASIC Regulatory Guide 165",
      "Annual trust account audit report (Form 70)",
      "Maintenance of compliant trust account records",
    ],
    whoCanAudit: [
      "Registered Company Auditors",
      "Authorised Audit Companies",
      "Members of Professional Accounting Bodies with Public Practice Certificate",
    ],
    consequences: [
      "Breach of ACL conditions",
      "Potential license suspension or cancellation",
      "Civil or criminal penalties for non-compliance",
    ],
    noTrustMoney: "If no trust money was held, a declaration (nil return) may still be required as part of the annual compliance certificate.",
    additionalInfo: [
      "Audit must be conducted in accordance with Australian Auditing Standards",
      "Auditor must be independent of the licensee",
      "Trust account must be designated as a 'Trust Account' with an ADI",
      "Reconciliations must be performed monthly",
    ],
    links: [
      {
        title: "ASIC - Trust Accounts for Credit Licensees",
        url: "https://asic.gov.au/regulatory-resources/credit/compliance-and-reporting/trust-accounts-for-credit-licensees/",
        description: "Official ASIC guidance on trust account obligations for credit licensees",
      },
      {
        title: "ASIC Regulatory Portal",
        url: "https://regulatoryportal.asic.gov.au/",
        description: "Portal for lodging compliance reports and audit forms",
      },
    ],
  },
  // Add other states here as needed
};

export function TrustAccountAuditSection({ state }: TrustAccountAuditSectionProps) {
  const [activeTab, setActiveTab] = useState("requirements");
  const data = stateAuditData[state as keyof typeof stateAuditData];

  if (!data) {
    return null;
  }

  const tabs = [
    { id: "requirements", label: "Requirements", icon: DocumentTextIcon },
    { id: "deadlines", label: "Deadlines", icon: CalendarIcon },
    { id: "auditors", label: "Who Can Audit", icon: UserGroupIcon },
    { id: "consequences", label: "Non-Compliance", icon: ExclamationTriangleIcon },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 shadow-sm">
              <ShieldCheckIcon className="size-4 text-brand-600" />
              <span>{data.authority} Compliant</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-950 mb-6 tracking-tight">
            {data.fullName} Mortgage Broker Trust Account Audits
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Comprehensive audit services for Australian Credit License holders in {data.fullName}. 
            Fully compliant with the <span className="font-semibold text-brand-700">{data.legislation}</span> and 
            ASIC requirements.
          </p>
        </Motion>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Navigation & Info Cards */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Stats Card */}
            <Motion
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl shadow-brand-900/5 border border-slate-100 overflow-hidden"
            >
              <div className="bg-brand-950 p-6 text-white">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <InformationCircleIcon className="size-5 text-brand-300" />
                  Key Audit Details
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-2.5 rounded-lg shrink-0">
                    <CalendarIcon className="size-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Audit Period</p>
                    <p className="text-brand-950 font-semibold">{data.auditPeriod}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-2.5 rounded-lg shrink-0">
                    <ClockIcon className="size-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Due Date</p>
                    <p className="text-brand-950 font-semibold">{data.dueDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-2.5 rounded-lg shrink-0">
                    <CurrencyDollarIcon className="size-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Fixed Pricing</p>
                    <p className="text-brand-950 font-semibold">{data.pricing} <span className="text-sm font-normal text-slate-500">+ GST</span></p>
                  </div>
                </div>
              </div>
            </Motion>

            {/* Official Links */}
            <Motion
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6"
            >
              <h4 className="font-semibold text-brand-950 mb-4 flex items-center gap-2">
                <ArrowTopRightOnSquareIcon className="size-4" />
                Official Resources
              </h4>
              <ul className="space-y-3">
                {data.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="group flex flex-col gap-1 p-3 rounded-lg bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-brand-700 group-hover:text-brand-800 flex items-center justify-between">
                        {link.title}
                        <ArrowTopRightOnSquareIcon className="size-3 opacity-50 group-hover:opacity-100" />
                      </span>
                      <span className="text-xs text-slate-500 leading-snug">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Motion>
          </div>

          {/* Right Column: Tabs Content */}
          <div className="lg:col-span-8">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Tabs Navigation */}
              <div className="flex flex-wrap gap-2 mb-8 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm inline-flex">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-brand-900 text-white shadow-md"
                          : "text-slate-600 hover:bg-slate-50 hover:text-brand-900"
                      }`}
                    >
                      <Icon className="size-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Panels */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8 min-h-[400px]">
                {activeTab === "requirements" && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="text-2xl font-bold text-brand-950 flex items-center gap-3">
                      <DocumentTextIcon className="size-6 text-brand-600" />
                      Audit Requirements
                    </h3>
                    <p className="text-slate-600 text-lg">
                      Under the <span className="font-semibold text-brand-900">{data.legislation}</span>, 
                      mortgage brokers holding an Australian Credit Licence (ACL) must adhere to strict trust account regulations.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      {data.keyRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                          <CheckCircleIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{req}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-xl">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <InformationCircleIcon className="size-5" />
                        Important Note
                      </h4>
                      <p className="text-blue-800/80 text-sm leading-relaxed">
                        {data.noTrustMoney}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "deadlines" && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="text-2xl font-bold text-brand-950 flex items-center gap-3">
                      <CalendarIcon className="size-6 text-brand-600" />
                      Key Deadlines
                    </h3>
                    
                    <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                      <div className="relative">
                        <div className="absolute -left-8 top-1 size-6 rounded-full bg-white border-2 border-brand-500 shadow-sm z-10" />
                        <h4 className="text-lg font-semibold text-brand-900">30 June</h4>
                        <p className="text-slate-600 mb-2">End of Financial/Audit Year</p>
                        <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          The standard audit period typically concludes. Ensure all reconciliations are finalized up to this date.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-8 top-1 size-6 rounded-full bg-white border-2 border-amber-500 shadow-sm z-10" />
                        <h4 className="text-lg font-semibold text-brand-900">30 September</h4>
                        <p className="text-slate-600 mb-2">Audit Report Due Date (Typical)</p>
                        <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          Audit reports are generally due 3 months after the end of the financial year. Check your specific ACL conditions as dates may vary.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "auditors" && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="text-2xl font-bold text-brand-950 flex items-center gap-3">
                      <UserGroupIcon className="size-6 text-brand-600" />
                      Approved Auditors
                    </h3>
                    <p className="text-slate-600">
                      To ensure compliance with {data.authority} standards, your audit must be conducted by a qualified professional.
                    </p>
                    
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <h4 className="font-semibold text-brand-900 mb-4">Who is qualified?</h4>
                      <ul className="space-y-3">
                        {data.whoCanAudit.map((auditor, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-slate-700">
                            <div className="size-2 rounded-full bg-brand-500" />
                            {auditor}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-green-50 text-green-900 rounded-xl border border-green-100">
                      <CheckCircleIcon className="size-5 shrink-0 mt-0.5" />
                      <p className="text-sm">
                        Our team consists of qualified registered company auditors who meet all ASIC independence and competency requirements.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "consequences" && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <h3 className="text-2xl font-bold text-brand-950 flex items-center gap-3">
                      <ExclamationTriangleIcon className="size-6 text-red-600" />
                      Risks of Non-Compliance
                    </h3>
                    <p className="text-slate-600">
                      Failure to lodge your trust account audit on time can have serious consequences for your credit licence.
                    </p>

                    <div className="grid gap-4">
                      {data.consequences.map((consequence, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100 hover:bg-red-50 transition-colors">
                          <ExclamationTriangleIcon className="size-5 text-red-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-red-900">{consequence}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-slate-500 italic mt-4">
                      * We strongly recommend starting the audit process early to avoid any last-minute compliance issues.
                    </p>
                  </div>
                )}
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
}
