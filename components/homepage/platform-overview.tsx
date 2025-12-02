"use client";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon as ShieldCheck,
  CheckCircleIcon as CheckCircle2,
  CloudIcon as Cloud,
  ClockIcon as Timer,
  ClipboardDocumentCheckIcon as ClipboardCheck,
  Cog6ToothIcon as Settings,
  LinkIcon as Link2,
  CircleStackIcon as Database,
  DocumentChartBarIcon as FileSpreadsheet,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function PlatformOverview() {
  const productFeatures = [
    {
      icon: ClipboardCheck,
      title: "Automated workpapers",
      desc: "Pre-built checklists and templates for trust account rules by state",
    },
    {
      icon: Timer,
      title: "E‑sign & portal",
      desc: "Streamline engagement letters, reports, and document exchange online",
    },
    {
      icon: Cloud,
      title: "Cloud workflow",
      desc: "Up‑to‑date audit steps with secure Australian‑hosted storage",
    },
  ];

  const integrations = [
    { label: "Xero", href: "/integrations/xero" },
    { label: "MYOB", href: "/integrations/myob" },
    { label: "QuickBooks", href: "/integrations/quickbooks" },
    { label: "PropertyMe", href: "/integrations/propertyme" },
    { label: "Property Tree", href: "/integrations/property-tree" },
    { label: "Console Cloud", href: "/integrations/console-cloud" },
    { label: "LEAP", href: "/integrations/leap" },
    { label: "Smokeball", href: "/integrations/smokeball" },
    { label: "Basiq (Bank Feeds — future plans)", href: "/integrations/basiq" },
  ];

  const efficiency = [
    {
      icon: Database,
      title: "Cloud intake",
      desc: "Secure document capture with organised folders and version history",
    },
    {
      icon: FileSpreadsheet,
      title: "Organised workflow",
      desc: "Track progress, sample selections, and reconciliations in one place",
    },
    {
      icon: Settings,
      title: "Smart checks",
      desc: "Automated validations assist auditors; professional judgement remains key",
    },
    {
      icon: ClipboardCheck,
      title: "Unified workflow",
      desc: "Communicate directly in the portal; request and complete audits easily",
    },
  ];

  return (
    <section
      id="platform"
      className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 overflow-hidden border-t border-brand-200/50"
      aria-labelledby="platform-heading"
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

      {/* Heading with Image */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left pt-8"
        >
          <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">
            Built for professional trust account audits
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <ShieldCheck className="size-7 text-brand-700" aria-hidden="true" />
            <h2
              id="platform-heading"
              className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950"
            >
              Fully Online Trust Account Auditing Software
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Productivity and compliance support for trust account audits —
            streamlined workflow, secure document handling, and clear reporting.
          </p>
        </motion.div>

        {/* Circular Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative circle-image">
            {/* Circular frame with gradient background */}
            <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-brand-100 via-brand-50 to-white border-4 border-brand-200/30 shadow-xl">
              <Image
                src="/images/Gemini_Generated_Image_2ev78e2ev78e2ev7.png"
                alt="Professional audit workspace with modern technology"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 352px, 448px"
                priority={false}
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-3 mb-8">
        {productFeatures.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-4">
              <Icon className="size-4 text-brand-700" />
              {title}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Integrations */}
      <motion.div
        className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40 mb-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-4">
          <Link2 className="size-4" />
          Integrations — future plans (read‑only)
        </div>
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-brand-950 backdrop-blur supports-[backdrop-filter]:bg-white/40">
            Coming Soon
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            This integrations area is under construction. For integration queries or early access requests,
            please contact our team and we will assist you.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button asChild size="lg" className="btn-primary-brand">
              <Link href="/contact" aria-label="Contact our team">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline-brand">
              <Link href="/book-demo" aria-label="Book a demo">Book Demo</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Efficiency benefits */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-3 mb-8">
        {efficiency.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-4">
              <Icon className="size-4 text-brand-700" />
              {title}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40 flex items-center justify-between gap-4 flex-col sm:flex-row">
        <div>
          <h3 className="text-lg font-medium text-brand-950">
            Ready to streamline trust account audits?
          </h3>
          <p className="text-sm text-slate-600">
            Unified workflow: request audits and communicate in the portal. Book
            Demo a walkthrough or join the waitlist.
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            asChild
            size="lg"
            className="btn-primary-brand gap-2 w-full sm:w-auto"
          >
            <Link href="/book-demo" aria-label="Start your audit walkthrough">
                  Start Audit
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-outline-brand gap-2 w-full sm:w-auto"
          >
            <Link href="/contact" aria-label="Join the waitlist">
              Join Waitlist
            </Link>
          </Button>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-4 text-xs text-slate-600 bg-brand-50/80 border border-brand-200/50 rounded-lg p-2.5">
        Tools assist auditor efficiency and documentation; professional
        judgement and applicable regulations govern audits. Connections are
        read‑only with minimum scopes required for audit evidence. Primary data
        stored in Australia (ap‑southeast‑2); CDN edge caching may serve
        non‑sensitive assets globally.
      </p>
    </section>
  );
}
