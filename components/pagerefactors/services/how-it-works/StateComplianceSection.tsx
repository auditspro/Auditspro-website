"use client";

import { Motion } from "@/components/ui/motion";
import Link from "next/link";
import {
  MapPin,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Scale,
  Calendar,
  ExternalLink,
  Info,
} from "lucide-react";

const STATES = [
  {
    code: "NSW",
    state: "New South Wales",
    icon: Building2,
    authority: "NSW Fair Trading",
    website:
      "https://www.nsw.gov.au/housing-and-construction/property-professionals/supervising-an-agency/real-estate-trust-accounts-and-audit-requirements",
    frequency: "Annual",
    deadline:
      "Audit results must be lodged each year via the NSW Fair Trading portal (see portal for current dates).",
    requirements: [
      "Trust account ledgers & monthly reconciliations",
      "Bank statements for all trust accounts",
      "Auditor’s report lodged via the Fair Trading portal",
    ],
    notes:
      "All audit results must be lodged with Fair Trading. Maintain records for the statutory retention period.",
  },
  {
    code: "VIC",
    state: "Victoria",
    icon: Scale,
    authority: "Consumer Affairs Victoria",
    website:
      "https://www.consumer.vic.gov.au/licensing-and-registration/estate-agents/running-your-business/trust-accounts/auditing-trust-accounts",
    frequency: "Annual (1 July – 30 June)",
    deadline:
      "Lodge within 3 months after 30 June via myCAV or the approved process.",
    requirements: [
      "Audit covering 1 July – 30 June",
      "Reconciliations, ledgers and bank statements",
      "Audit report in the approved form",
    ],
    notes:
      "Deliver a signed copy of the audit report to the licensee and lodge with CAV within the timeframe.",
  },
  {
    code: "QLD",
    state: "Queensland",
    icon: MapPin,
    authority: "Office of Fair Trading (QLD)",
    website:
      "https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/regulated-industries-and-licensing/regulated-industries-licensing-and-legislation/property-industry-regulation/managing-your-property-agency-or-business/dealing-with-trust-accounts-in-the-property-industry/trust-account-audits-property-industry",
    frequency: "Annual (per trust account)",
    deadline:
      "Annual audit required; lodge the auditor’s report with OFT per current guidance and forms.",
    requirements: [
      "Appoint a qualified auditor",
      "Audit each trust account annually",
      "Maintain receipts, payments, ledgers & reconciliations",
    ],
    notes:
      "Follow OFT forms and instructions for lodgement. Late or incomplete lodgements may lead to enforcement action.",
  },
  {
    code: "SA",
    state: "South Australia",
    icon: FileText,
    authority: "Consumer and Business Services (SA)",
    website: "https://www.cbs.sa.gov.au/documents/audit-checklist.pdf",
    frequency: "Annual",
    deadline:
      "Submit annual audit documents to the Commissioner within the specified period.",
    requirements: [
      "Annual audit of trust account",
      "Bank statements and payment records",
      "Trust ledgers and supporting documentation",
    ],
    notes:
      "Use the CBS audit checklist to prepare submissions; if funds were held at any time during the period, an audit is required.",
  },
  {
    code: "WA",
    state: "Western Australia",
    icon: Clock,
    authority: "DMIRS – Consumer Protection (WA)",
    website:
      "https://www.consumerprotection.wa.gov.au/publications/its-trust-account-audit-time-real-estate-industry-bulletin-280",
    frequency: "Annual (calendar year)",
    deadline:
      "Audit report due by 31 March for the previous calendar year (confirm current bulletin).",
    requirements: [
      "Audit report under the REBA Act",
      "Monthly reconciliations & bank records",
      "Receipts and payments documentation",
    ],
    notes:
      "DMIRS issues January reminders; confirm the current due date on the official site before lodgement.",
  },
  {
    code: "TAS",
    state: "Tasmania",
    icon: CheckCircle2,
    authority: "Consumer, Building and Occupational Services (TAS)",
    website:
      "https://www.cbos.tas.gov.au/topics/licensing-and-registration/licensed-occupations/security-and-investigation-agents/working-in-the-industry/commercial-agent-trust-accounts",
    frequency: "Annual",
    deadline:
      "Audit report due by 30 September each year for the prior 1 July–30 June period.",
    requirements: [
      "Annual trust account audit",
      "Reconciliations, ledgers and statements",
      "Provide records to the auditor as requested",
    ],
    notes:
      "Property Agents Board notes an audit year ending 30 June and possible six-monthly reporting for trust accounts.",
  },
];

export function StateComplianceSection() {
  return (
    <section
      id="state-compliance"
      className="relative py-16 sm:py-20 bg-gradient-to-br from-brand-50 via-white to-brand-50"
    >
      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,102,255,0.05),transparent_60%)]" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 mb-6">
            <AlertTriangle className="size-4 text-brand-700" />
            <span>State-Specific Requirements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-brand-950 mb-4">
            Trust Account Audit Requirements{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              by State
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Rules differ by state. We track official guidance and keep you
            compliant — no guesswork.
          </p>
        </Motion>

        {/* cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STATES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Motion
                key={s.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              >
                <article className="rounded-2xl border border-brand-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <header className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-full bg-brand-100 text-brand-900">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-950">
                          {s.state}
                        </h3>
                        <span className="text-xs font-medium text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                          {s.code}
                        </span>
                      </div>
                    </div>
                  </header>

                  <div className="mb-4 p-3 rounded-lg bg-brand-50 border border-brand-100">
                    <p className="text-sm font-medium text-brand-900 mb-1">
                      Regulatory authority
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-brand-700">{s.authority}</p>
                      <a
                        href={s.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-600 hover:text-brand-700"
                        aria-label={`Visit ${s.authority} website`}
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg border border-brand-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="size-4 text-brand-700" />
                        <span className="text-xs font-medium text-brand-900">
                          Frequency
                        </span>
                      </div>
                      <p className="text-sm text-brand-700">{s.frequency}</p>
                    </div>
                    <div className="p-3 rounded-lg border border-brand-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="size-4 text-brand-700" />
                        <span className="text-xs font-medium text-brand-900">
                          Deadline
                        </span>
                      </div>
                      <p className="text-sm text-brand-700">{s.deadline}</p>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-brand-100 pt-3">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-950 mb-1 flex items-center gap-2">
                        <FileText className="size-4 text-brand-700" />
                        Typical documents
                      </h4>
                      <ul className="space-y-1">
                        {s.requirements.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 text-sm text-brand-700"
                          >
                            <CheckCircle2 className="size-3 text-brand-600 mt-1 flex-shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <h4 className="text-sm font-semibold text-blue-900 mb-1 flex items-center gap-2">
                        <Info className="size-4 text-blue-700" />
                        Important notes
                      </h4>
                      <p className="text-sm text-blue-700">{s.notes}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-1 text-sm font-medium text-brand-900">
                      <Link
                        href="/how-it-works#requirements"
                        className="hover:underline"
                      >
                        See document checklist
                      </Link>
                      <span className="hidden sm:inline text-brand-300">|</span>
                      <Link
                        href="/how-it-works#pricing"
                        className="hover:underline"
                      >
                        View pricing
                      </Link>
                      <span className="hidden sm:inline text-brand-300">|</span>
                      <Link href="/start-audit" className="hover:underline">
                        Start your audit
                      </Link>
                    </div>
                  </div>
                </article>
              </Motion>
            );
          })}
        </div>

        {/* CTA */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="rounded-2xl border border-brand-200 bg-white/80 backdrop-blur p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <CheckCircle2 className="size-4 text-brand-700" />
              <span>We handle all states</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-950 mb-4">
              Compliant across every Australian jurisdiction
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              We monitor regulator updates and keep your process current. Focus
              on your clients — we’ll handle compliance.
            </p>
            <Link
              href="/start-audit"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-brand-500"
            >
              <span>Get started today</span>
              <ExternalLink className="size-4" />
            </Link>
          </div>
        </Motion>
      </div>
    </section>
  );
}
