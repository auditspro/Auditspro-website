"use client";

import { Motion } from "@/components/ui/motion";
import {
  ClipboardDocumentCheckIcon,
  BanknotesIcon,
  DocumentDuplicateIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export function FeaturesSection() {
  const features = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Monthly Reconciliation Review",
      desc: "Verification of trust ledger balances and bank reconciliations",
    },
    {
      icon: BanknotesIcon,
      title: "Commission Handling",
      desc: "Testing of receipt, allocation, and distribution of commissions",
    },
    {
      icon: DocumentDuplicateIcon,
      title: "Client Ledger Integrity",
      desc: "Sampling and validation of client ledgers and supporting records",
    },
    { icon: ShieldCheckIcon, title: "Compliance Checks", desc: "Assessment against NCCP and lender documentation expectations" },
    { icon: ChartBarIcon, title: "Clear Reporting", desc: "Concise findings, recommendations, and compliance certificate" },
  ];

  return (
    <section className="py-16 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
            What’s Included in Your Audit
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Practical procedures and clear reporting designed for mortgage broker operations.
          </p>
        </Motion>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <Motion
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-brand-200"
            >
              <f.icon className="size-8 text-brand-700 mb-4" />
              <h3 className="font-semibold text-brand-950 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}