"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Lock,
  Award,
  CheckCircle2,
  BarChart3,
  FileCheck,
  Clock,
  Shield,
  Globe,
  // ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function TrustProof() {
  const credentials = [
    { icon: BadgeCheck, label: "Specialised Trust Account Auditors" },
    { icon: ShieldCheck, label: "Independence and objectivity upheld" },
    { icon: Award, label: "Professional practice standards adhered to" },
    { icon: Lock, label: "Secure, encrypted document portal" },
    { icon: Lock, label: "HTTPS (SSL/TLS) enforced" },
    { icon: Shield, label: "Encryption in transit and at rest" },
  ];

  const trustSignals = [
    {
      icon: FileCheck,
      title: "Independent trust account report",
      note: "Audit/examination report per state-specific trust account rules",
    },
    {
      icon: Shield,
      title: "Documented methodology",
      note: "Consistent procedures aligned to applicable regulations",
    },
    {
      icon: CheckCircle2,
      title: "Transparent reporting",
      note: "Clear findings with practical remediation guidance",
    },
    {
      icon: Lock,
      title: "SSL/TLS security",
      note: "HTTPS enforced; data encrypted in transit and at rest",
    },
    {
      icon: Globe,
      title: "Australian data residency",
      note: "Primary data stored in Australian AWS region (ap-southeast-2)",
    },
  ];

  const processHighlights = [
    {
      icon: Clock,
      stat: "24-hour response",
      note: "Initial contact and proposal within one business day",
    },
    {
      icon: FileCheck,
      stat: "Direct auditor contact",
      note: "Work directly with a senior auditor throughout your engagement",
    },
    {
      icon: BarChart3,
      stat: "Clear timetable",
      note: "Agreed scope, sample selection, and timeline before fieldwork",
    },
  ];

  // Removed duplicate processHighlights definition to avoid repetition and keep focus on assurance and transparency.

  return (
    <section
      id="proof"
      className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 overflow-hidden"
      aria-labelledby="proof-heading"
    >
      {/* Matching grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23, 37, 84, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 37, 84, 0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Divider */}
      <div className="container relative mx-auto px-4 sm:px-6 pb-10">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <ShieldCheck className="size-7 text-blue-700" aria-hidden="true" />
          <h2
            id="proof-heading"
            className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950"
          >
            Professional Qualifications & Trust
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Independent assurance on trust account compliance, with transparent
          reporting and documented methodology.
        </p>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex justify-center mb-12"
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80">
          {/* Circular frame with gradient background */}
          <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white border-4 border-blue-200/30 shadow-xl">
            <Image
              src="/images/Gemini_Generated_Image_bnt220bnt220bnt2.png"
              alt="Secure digital environment showcasing cybersecurity and compliance"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 320px"
              priority={false}
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* 3-column trust grid */}
      <div className="grid gap-6 md:gap-8 lg:grid-cols-3 mb-8">
        {/* Credentials & Memberships */}
        <motion.div
          className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
            <Award className="size-4" />
            Credentials & memberships
          </div>

          <div className="space-y-2.5">
            {credentials.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-blue-200/50 bg-white/80 px-3 py-2.5 text-sm backdrop-blur"
              >
                <Icon
                  className="size-4 text-blue-700 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-blue-950">{label}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-600 bg-blue-50/80 border border-blue-200/50 rounded-lg p-2.5">
            <strong>Note:</strong> We may reference professional frameworks for
            alignment; no regulator endorsements implied. Formal security
            certifications, if obtained, will be explicitly stated. Primary data
            stored in Australia; CDN edge caching may serve non-sensitive assets
            globally.
          </p>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
            <ShieldCheck className="size-4" />
            Why choose us
          </div>

          <div className="space-y-3">
            {trustSignals.map(({ icon: Icon, title, note }) => (
              <div
                key={title}
                className="rounded-lg border border-blue-200/50 bg-white/80 p-3.5 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <Icon className="size-4 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-blue-950 mb-0.5">
                      {title}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {note}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process Highlights */}
        <motion.div
          className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
            <CheckCircle2 className="size-4" />
            What to expect
          </div>

          <div className="space-y-3">
            {processHighlights.map(({ icon: Icon, stat, note }) => (
              <div
                key={stat}
                className="rounded-lg border border-blue-200/50 bg-white/80 p-3.5 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <Icon className="size-4 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-blue-950 mb-0.5">
                      {stat}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {note}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <Button
              asChild
              size="lg"
              className="gap-2 w-full bg-blue-900 hover:bg-blue-800 text-white"
            >
              <Link href="/book-demo" aria-label="Book Demo your audit">
                Book Demo Your Audit
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 w-full border-blue-200 text-blue-950 hover:bg-blue-50"
            >
              <Link href="/services-by-state" aria-label="View pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
