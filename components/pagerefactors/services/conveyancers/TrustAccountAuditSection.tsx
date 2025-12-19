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

// State-specific trust account audit data for Conveyancers
const stateAuditData = {
  NSW: {
    fullName: "New South Wales",
    authority: "NSW Fair Trading",
    legislation: "Conveyancers Licensing Act 2003",
    regulation: "Conveyancers Licensing Regulation 2021",
    auditPeriod: "1 July to 30 June",
    dueDate: "30 September",
    submissionMethod: "Auditor's Report Online Portal",
    submissionBy: "The auditor must lodge all audit results with Fair Trading",
    pricing: "$549",
    keyRequirements: [
      "Licensed conveyancer (corporation or individual) who received/held trust money",
      "Must have a 'Trust Account' with Unique Identifying Number (UID)",
      "Must notify Fair Trading when opening a trust account (Blue Form)",
      "Nil returns required if no trust money held during the audit period",
    ],
    whoCanAudit: [
      "Auditors registered with ASIC",
      "Authorised company auditors",
      "Members of CPA Australia (with Public Practice Certificate)",
      "Members of CA ANZ (with Certificate of Public Practice)",
      "Members of IPA (with Professional Practice Certificate)",
      "Qualified under Section 75 of the Conveyancers Licensing Act 2003",
    ],
    consequences: [
      "Licensees could be disqualified from holding a licence",
      "Financial penalties for non-compliance",
      "Possible suspension of licence",
    ],
    noTrustMoney: "If a licensed conveyancer did not receive or hold any trust money during the financial year ended 30 June, they must lodge a declaration stating that fact (Nil Return) within the same deadline.",
    additionalInfo: [
      "Audits must be submitted within 3 months after the end of the financial year (by 30 September)",
      "Online submission through Fair Trading portal is mandatory",
      "Auditor must be independent of the licensee's business",
      "Trust account name must include 'Trust Account' and licensee/corporation name",
      "Unique Identifying Number (UID) must be registered for each trust account",
    ],
    links: [
      {
        title: "NSW Fair Trading – Conveyancer Trust Accounts",
        url: "https://www.fairtrading.nsw.gov.au/trades-and-businesses/business-essentials/conveyancers/trust-accounts-and-audit-requirements",
        description: "Official NSW guidance on conveyancer trust accounts and audit obligations",
      },
      {
        title: "Auditor's Report Online Portal",
        url: "https://www.fairtrading.nsw.gov.au/",
        description: "Online portal for submitting trust account audit reports",
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
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Professional Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
            <Squares2X2Icon className="size-4" />
            <span>{state} Conveyancer Trust Account Requirements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950 mb-4">
            {data.fullName} Conveyancer{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              Trust Account Audit
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guide to {data.fullName} conveyancer trust account audit requirements, 
            deadlines, and compliance obligations under the{" "}
            <Link href="/services" className="text-brand-700 hover:text-brand-800 underline decoration-brand-300 hover:decoration-brand-500 transition-colors">
              {data.legislation}
            </Link>.
          </p>
        </Motion>

        {/* Key Information Cards */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl border border-slate-200/70 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-brand-100/60 rounded-lg">
                <CalendarIcon className="size-5 text-brand-900" />
              </div>
              <h3 className="font-medium text-slate-900">Audit Period</h3>
            </div>
            <p className="text-slate-600 text-sm">{data.auditPeriod}</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/70 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-red-100/60 rounded-lg">
                <ClockIcon className="size-5 text-red-900" />
              </div>
              <h3 className="font-medium text-slate-900">Due Date</h3>
            </div>
            <p className="text-slate-600 text-sm">{data.dueDate}</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/70 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100/60 rounded-lg">
                <CurrencyDollarIcon className="size-5 text-green-900" />
              </div>
              <h3 className="font-medium text-slate-900">Starting Price</h3>
            </div>
            <p className="text-slate-600 text-sm">{data.pricing} + GST</p>
          </div>
        </Motion>

        {/* Tab Navigation */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="w-fit max-w-full mx-auto flex flex-wrap justify-center items-center gap-2 px-2 py-2 rounded-xl border border-slate-200/70 bg-white/70 supports-[backdrop-filter]:bg-white/40 backdrop-blur">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-1 sm:flex-none ${
                  activeTab === id
                    ? "bg-white text-brand-950 shadow-sm ring-1 ring-brand-200/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                <Icon className="size-4 shrink-0" />
                {label}
              </button>
            ))}
          </div>
        </Motion>

        {/* Tab Content */}
        <Motion
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-sm"
        >
          {activeTab === "requirements" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-100/60 rounded-lg">
                <DocumentTextIcon className="size-6 text-brand-900" />
              </div>
              <h3 className="text-xl font-medium text-slate-900">Who Must Have Trust Accounts Audited?</h3>
            </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-slate-600 leading-relaxed">
                  The following conveyancers must have their trust accounts audited if they received or held trust money 
                  during the financial year ending 30 June:
                </p>
                
                <div className="grid gap-3">
                  {data.keyRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50/70 rounded-lg">
                      <CheckCircleIcon className="size-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-50/70 border border-brand-200/70 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <InformationCircleIcon className="size-5 text-brand-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-brand-900 mb-2">Important Note</h4>
                    <p className="text-brand-800 text-sm leading-relaxed">
                      Trust money must be held in a designated trust account at an authorised deposit-taking institution 
                      in NSW. The account name must include the words 'Trust Account'.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "deadlines" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100/60 rounded-lg">
                  <CalendarIcon className="size-6 text-red-900" />
                </div>
                <h3 className="text-xl font-medium text-slate-900">Audit Deadlines & Submission</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50/70 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Audit Period</h4>
                    <p className="text-slate-600 text-sm">{data.auditPeriod}</p>
                  </div>
                  
                  <div className="p-4 bg-slate-50/70 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Submission Deadline</h4>
                    <p className="text-slate-600 text-sm">{data.dueDate}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50/70 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Submission Method</h4>
                    <p className="text-slate-600 text-sm">{data.submissionMethod}</p>
                  </div>
                  
                  <div className="p-4 bg-slate-50/70 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Submitted By</h4>
                    <p className="text-slate-600 text-sm">{data.submissionBy}</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200/70 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <ExclamationTriangleIcon className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-900 mb-2">Critical Deadline Information</h4>
                    <div className="space-y-2 text-amber-800 text-sm">
                      {data.additionalInfo.map((info, index) => (
                        <p key={index}>• {info}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "auditors" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100/60 rounded-lg">
                  <UserGroupIcon className="size-6 text-green-900" />
                </div>
                <h3 className="text-xl font-medium text-slate-900">Qualified Auditors</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-slate-600 leading-relaxed">
                  Trust account audits must be conducted by qualified professionals who meet the following criteria:
                </p>
                
                <div className="grid gap-3">
                  {data.whoCanAudit.map((auditor, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50/70 rounded-lg">
                      <ShieldCheckIcon className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{auditor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50/70 border border-green-200/70 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <InformationCircleIcon className="size-5 text-green-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Auditor Independence</h4>
                    <p className="text-green-800 text-sm leading-relaxed">
                      The auditor must not be a licensee or an employee of the licensee, nor a partner of the licensee. 
                      They must be independent and qualified under the Act.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "consequences" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100/60 rounded-lg">
                  <ExclamationTriangleIcon className="size-6 text-red-900" />
                </div>
                <h3 className="text-xl font-medium text-slate-900">Non-Compliance Consequences</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-slate-600 leading-relaxed">
                  If a trust account audit is not submitted by the due date, the following consequences may apply:
                </p>
                
                <div className="grid gap-3">
                  {data.consequences.map((consequence, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-red-50/70 rounded-lg border border-red-200/50">
                      <ExclamationTriangleIcon className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-red-800 text-sm font-medium">{consequence}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/70 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <InformationCircleIcon className="size-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">No Trust Money Held?</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {data.noTrustMoney}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Motion>

        {/* Useful Links */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-brand-50/60 to-white/60 rounded-2xl border border-brand-200/70 p-8">
            <h3 className="text-xl font-medium text-brand-950 mb-6 text-center">
              Official {state} Resources
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {data.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/70 rounded-lg border border-brand-200/50 hover:bg-white hover:border-brand-300 transition-all group"
                >
                  <div className="p-2 bg-brand-100/60 rounded-lg">
                    <ArrowTopRightOnSquareIcon className="size-4 text-brand-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-brand-950 group-hover:text-brand-800 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-slate-600">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
