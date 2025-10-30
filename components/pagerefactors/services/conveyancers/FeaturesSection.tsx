import { Motion } from "@/components/ui/motion";
import {
  FileCheck,
  Shield,
  BookOpen,
  CheckCircle2,
  Award,
  MessageCircle,
  Clock,
  FileText,
  BarChart3,
  Lock,
  Database,
  CheckSquare,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: FileCheck,
      title: "Trust Account Compliance Review",
      shortDesc: "Complete ASIC compliance examination",
      fullDesc:
        "Complete examination of trust account records, transactions, and statutory registers to ensure full ASIC compliance under the National Conveyancing Laws.",
      highlights: [
        "Transaction verification",
        "Statutory register checks",
        "ASIC compliance certification",
        "National law adherence",
      ],
      color: "from-blue-500/10 to-blue-600/5",
      iconBg: "bg-blue-100/60",
      iconColor: "text-blue-900",
    },
    {
      icon: Shield,
      title: "Regulatory Requirements Check",
      shortDesc: "State-specific compliance verification",
      fullDesc:
        "Verification of compliance with state-specific conveyancing regulations, including NSW Fair Trading, Consumer Affairs Victoria, and other jurisdictional requirements.",
      highlights: [
        "Multi-state expertise",
        "Jurisdiction-specific checks",
        "Regulatory body coordination",
        "Updated compliance standards",
      ],
      color: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-100/60",
      iconColor: "text-purple-900",
    },
    {
      icon: BookOpen,
      title: "Statutory Register Audit",
      shortDesc: "Comprehensive register review",
      fullDesc:
        "Detailed review of trust ledgers, receipts, payments, and all required statutory registers as mandated by ASIC and state regulatory bodies.",
      highlights: [
        "Trust ledger verification",
        "Receipt and payment audit",
        "Register completeness check",
        "Documentation review",
      ],
      color: "from-amber-500/10 to-amber-600/5",
      iconBg: "bg-amber-100/60",
      iconColor: "text-amber-900",
    },
    {
      icon: CheckCircle2,
      title: "Bank Reconciliation Verification",
      shortDesc: "Monthly reconciliation checks",
      fullDesc:
        "Monthly bank reconciliation checks, verification of trust account balances, and confirmation of proper segregation of client funds.",
      highlights: [
        "Monthly reconciliation review",
        "Balance verification",
        "Fund segregation check",
        "Discrepancy identification",
      ],
      color: "from-green-500/10 to-green-600/5",
      iconBg: "bg-green-100/60",
      iconColor: "text-green-900",
    },
    {
      icon: Award,
      title: "Comprehensive Audit Report",
      shortDesc: "ASIC submission-ready report",
      fullDesc:
        "Professional audit report suitable for ASIC submission, including auditor's opinion, findings, and recommendations for improvement if necessary.",
      highlights: [
        "ASIC-compliant format",
        "Auditor's professional opinion",
        "Detailed findings",
        "Improvement recommendations",
      ],
      color: "from-red-500/10 to-red-600/5",
      iconBg: "bg-red-100/60",
      iconColor: "text-red-900",
    },
    {
      icon: MessageCircle,
      title: "Ongoing Support & Consultation",
      shortDesc: "24-hour response guarantee",
      fullDesc:
        "24-hour response guarantee on all queries, plus year-round compliance support and guidance on trust account management best practices.",
      highlights: [
        "24-hour query response",
        "Year-round support",
        "Best practice guidance",
        "Expert consultation",
      ],
      color: "from-cyan-500/10 to-cyan-600/5",
      iconBg: "bg-cyan-100/60",
      iconColor: "text-cyan-900",
    },
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "5-10 Day Turnaround",
      desc: "Fast audit completion without compromising on quality or thoroughness.",
    },
    {
      icon: Lock,
      title: "Secure Cloud Portal",
      desc: "Bank-grade encryption for all your sensitive trust account documents.",
    },
    {
      icon: Database,
      title: "Digital Record Keeping",
      desc: "All audit records stored securely and accessible anytime through your portal.",
    },
    {
      icon: BarChart3,
      title: "Trend Analysis",
      desc: "Year-over-year compliance tracking to identify patterns and improvements.",
    },
    {
      icon: FileText,
      title: "Document Checklist",
      desc: "Clear checklist provided to ensure you have everything needed for the audit.",
    },
    {
      icon: CheckSquare,
      title: "Pre-Audit Review",
      desc: "Optional preliminary review to identify potential issues before formal audit.",
    },
  ];

  return (
    <section className="container relative mx-auto px-4 sm:px-6 py-16">
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
          What&apos;s Included in Your Conveyancer Audit
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Comprehensive ASIC-compliant audit services tailored for licensed
          conveyancers across all Australian states and territories.
        </p>
      </Motion>

      {/* Main Features Grid - Enhanced Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map(
          ({
            icon: Icon,
            title,
            shortDesc,
            fullDesc,
            highlights,
            color,
            iconBg,
            iconColor,
          }) => (
            <Motion
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-xl transition-all duration-300"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`rounded-lg ${iconBg} p-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`size-5 ${iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-brand-950 mb-1 text-base">
                      {title}
                    </h3>
                    <p className="text-xs text-brand-700 font-medium">
                      {shortDesc}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {fullDesc}
                </p>

                {/* Highlights - Expandable */}
                <details className="group/details">
                  <summary className="flex items-center gap-2 cursor-pointer text-xs font-medium text-brand-900 hover:text-brand-800 list-none">
                    <span>Key Highlights</span>
                    <svg
                      className="size-3 ml-auto transition-transform group-open/details:rotate-180"
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
                  <ul className="mt-2 space-y-1 pl-2">
                    {highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <CheckCircle2 className="size-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </Motion>
          )
        )}
      </div>

      {/* Additional Features Section */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16"
      >
        <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/60 to-white/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-brand-50/40">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-brand-950 mb-3">
              Additional Value-Added Services
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Beyond the core audit, we provide extra features to make your
              compliance journey smoother and more efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-3 p-4 rounded-lg bg-white/70 border border-brand-200/50 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="rounded-md bg-brand-100/60 p-2 h-fit">
                  <Icon className="size-4 text-brand-900" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-brand-950 text-sm mb-1">
                    {title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Motion>

      {/* Process Summary Banner */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8"
      >
        <div className="rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="size-6 text-green-700" />
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-1">
                  Everything You Need for ASIC Compliance
                </h4>
                <p className="text-sm text-green-700">
                  Fixed pricing • Fast turnaround • IPA qualified auditors •
                  24-hour support
                </p>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-700 text-white text-xs font-medium">
                ASIC Compliant
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-700 text-white text-xs font-medium">
                Fixed Price
              </span>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  );
}
