"use client";
import { motion } from "framer-motion";
import {
  CalculatorIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  MapPinIcon,
  TrophyIcon,
  ClockIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BoltIcon,
  CheckIcon,
  LockClosedIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function InfoOverview() {
  // Priority order: Real Estate, Conveyancers, Accountants, Solicitors, Others
  const orgs = [
    {
      icon: BuildingOfficeIcon,
      label: "Real Estate Agents",
      link: "/services/real-estate-agents",
    },
    { icon: DocumentTextIcon, label: "Conveyancers", link: "/services/conveyancers" },
    {
      icon: CalculatorIcon,
      label: "Accountants (CPA/CA)",
      link: "/services/accountants",
    },
    { icon: ScaleIcon, label: "Solicitors", link: "/services/solicitors" },
    {
      icon: BriefcaseIcon,
      label: "Business Brokers",
      link: "/services/business-brokers",
    },
    {
      icon: BriefcaseIcon,
      label: "Financial Planners",
      link: "/services/financial-planners",
    },
    {
      icon: BanknotesIcon,
      label: "Mortgage Brokers",
      link: "/services/mortgage-brokers",
    },
    {
      icon: ArrowTrendingUpIcon,
      label: "SMSF Trustees",
      link: "/services/smsf-trustees",
    },
  ];

  const states = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

  const coverageFeatures = [
    {
      icon: CheckCircleIcon,
      label: "Unified workflow: communicate directly in the portal; no visits",
    },
    {
      icon: CheckCircleIcon,
      label: "Remote engagements available. Contact us online",
    },
    { icon: ShieldCheckIcon, label: "Fast & reliable support anytime" },
    { icon: DocumentTextIcon, label: "Secure self-service portal for audit requests" },
    { icon: ClockIcon, label: "Response within 24 hours (Mon–Fri)" },
    { icon: BoltIcon, label: "Fixed fee proposal before commencement" },
    { icon: CheckIcon, label: "Multi-user access for teams (Coming Soon)" },
    { icon: LockClosedIcon, label: "HTTPS (SSL/TLS) enforced" },
  ];

  const outcomes = [
    {
      icon: ClockIcon,
      stat: "Up to 40% faster",
      label: "Streamlined preparation with digital checklist",
    },
    {
      icon: TrophyIcon,
      stat: "Qualified auditors",
      label: "Specialised trust account auditors with industry expertise",
    },
    {
      icon: CheckCircleIcon,
      stat: "5–10 business days",
      label: "Fast turnaround for standard audits",
    },
    {
      icon: ShieldCheckIcon,
      stat: "Enterprise-grade security",
      label: "Encrypted portal for safe document handling",
    },
    {
      icon: CheckIcon,
      stat: "Dedicated auditor",
      label: "Direct expert contact throughout your engagement",
    },
  ];

  const advantages = [
    {
      icon: BoltIcon,
      title: "Fixed Fee Pricing",
      desc: "Transparent costs with no hidden charges or surprises",
    },
    {
      icon: TrophyIcon,
      title: "Quality Guaranteed",
      desc: "High caliber qualified auditors, IPA Practice Qualified",
    },
    {
      icon: DocumentTextIcon,
      title: "Cloud-Based System",
      desc: "100% online platform saves you time and money",
    },
  ];

  return (
    <section
      id="overview"
      className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 overflow-hidden"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Matching grid background from Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23, 37, 84, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 37, 84, 0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container relative mx-auto px-4 sm:px-6 pb-10">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-brand-200 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Section heading with animated icon */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="flex flex-col items-center justify-center gap-3 mb-4 sm:flex-row">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <InformationCircleIcon className="size-7 sm:size-8 text-brand-700" />
          </motion.div>
          <h2
            className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950 text-center sm:text-left"
            itemProp="name"
          >
            Who We Help & Where We Operate
          </h2>
        </div>
        <p
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          itemProp="description"
        >
          Specialised audit solutions for regulated professionals across
          Australia
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
        <div className="relative circle-image">
          {/* Circular frame with gradient background */}
          <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-brand-100 via-brand-50 to-white border-4 border-brand-200/30 shadow-xl">
            <Image
              src="/images/Gemini_Generated_Image_fo5td0fo5td0fo5t.png"
              alt="Diverse group of professionals collaborating on trust account audits"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 352px, 448px"
              priority={false}
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-600/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Main 3-column grid */}
      <div className="grid gap-6 md:gap-8 lg:grid-cols-3 mb-8">
        {/* WHO WE HELP */}
        <motion.div
          className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-4">
            <CheckCircleIcon className="size-4" />
            Who we help
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {orgs.map(({ icon: Icon, label, link }) => (
              <Link
                key={label}
                href={link}
                className="flex items-center gap-2.5 rounded-lg border border-brand-200/50 bg-white/80 px-3 py-2.5 text-sm backdrop-blur hover:border-brand-300 hover:bg-white transition-all duration-200"
                itemProp="availableService"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <Icon
                  className="size-4 text-brand-700 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-brand-950" itemProp="name">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* AUSTRALIA-WIDE COVERAGE - Filled with complete, accurate content */}
        <motion.div
          className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          itemProp="areaServed"
          itemScope
          itemType="https://schema.org/Country"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-4">
            <MapPinIcon className="size-4" />
            Australia-wide coverage
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Nationwide online audit services delivered by specialised trust
            account auditors/examiners. We follow applicable state trust account
            regulations and professional practice standards.
          </p>

          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="flex flex-wrap justify-center gap-2">
              {states.slice(0, 4).map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-brand-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-brand-950 backdrop-blur"
                  itemProp="name"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {states.slice(4).map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-brand-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-brand-950 backdrop-blur"
                  itemProp="name"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Service features - Accurate information */}
          <div className="space-y-2.5 pt-3 border-t border-brand-200/50">
            {coverageFeatures.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-2.5 text-xs text-slate-600"
              >
                <Icon className="size-3.5 text-brand-700 flex-shrink-0 mt-0.5" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="sm"
            className="mt-4 w-full sm:w-auto btn-primary-brand"
          >
            <Link href="/book-demo">Start Audit process</Link>
          </Button>
        </motion.div>

        {/* HOW WE MAKE IT EASIER */}
        <motion.div
          className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-4">
            <CheckCircleIcon className="size-4" />
            How we make it easier
          </div>

          <div className="space-y-3">
            {outcomes.map(({ icon: Icon, stat, label }) => (
              <div
                key={stat}
                className="rounded-lg border border-brand-200/50 bg-white/80 p-3.5 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <Icon className="size-4 text-brand-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-brand-950 mb-0.5">
                      {stat}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* OUR ADVANTAGES - New section to fill space with value propositions */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mb-8"
      >
        <div className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-5">
            <TrophyIcon className="size-4" />
            Our Advantages
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg border border-brand-200/50 bg-white/80 p-4 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-100/80 flex items-center justify-center border border-brand-200/50">
                    <Icon className="size-5 text-brand-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-950 mb-1">
                      {title}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* REGULATORY INFORMATION - 2-column layout */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 mb-8">
        {/* REGULATORY REFERENCES */}
        <motion.div
          className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-4">
            <ScaleIcon className="size-4" />
            Regulatory framework
          </div>

          <div className="space-y-3 text-sm">
            {/* NSW Fair Trading */}
            <div className="p-3.5 rounded-lg bg-white/80 border border-brand-200/50 backdrop-blur">
              <div className="flex items-start gap-2.5 mb-2">
                <CheckCircleIcon className="size-4 text-brand-700 flex-shrink-0 mt-0.5" />
                <div className="text-slate-600 leading-relaxed">
                  <strong className="text-brand-950">NSW Fair Trading:</strong>{" "}
                  Real estate agents must comply with Property, Stock and
                  Business Agents Act 2002 (Sections 111 & 113).
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ml-6">
                <a
                  href="https://www.fairtrading.nsw.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  Official Source →
                </a>
                <Link
                  href="/resources/nsw-real-estate-audit-requirements"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  Our Guide →
                </Link>
              </div>
            </div>

            {/* Consumer Affairs Victoria */}
            <div className="p-3.5 rounded-lg bg-white/80 border border-brand-200/50 backdrop-blur">
              <div className="flex items-start gap-2.5 mb-2">
                <CheckCircleIcon className="size-4 text-brand-700 flex-shrink-0 mt-0.5" />
                <div className="text-slate-600 leading-relaxed">
                  <strong className="text-brand-950">
                    Consumer Affairs Victoria:
                  </strong>{" "}
                  State-based licensing and trust account compliance for real
                  estate and related industries.
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ml-6">
                <a
                  href="https://www.consumer.vic.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  Official Source →
                </a>
                <Link
                  href="/resources/victoria-trust-account-compliance"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  Our Guide →
                </Link>
              </div>
            </div>

            {/* Legal Services Boards */}
            <div className="p-3.5 rounded-lg bg-white/80 border border-brand-200/50 backdrop-blur">
              <div className="flex items-start gap-2.5 mb-2">
                <CheckCircleIcon className="size-4 text-brand-700 flex-shrink-0 mt-0.5" />
                <div className="text-slate-600 leading-relaxed">
                  <strong className="text-brand-950">
                    Legal Services Boards:
                  </strong>{" "}
                  Solicitors must comply with Legal Profession Uniform Law
                  (NSW/VIC) for trust account audits.
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ml-6">
                <a
                  href="https://olsc.nsw.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  OLSC NSW →
                </a>
                <a
                  href="https://www.lsbc.vic.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  LSBC VIC →
                </a>
                <Link
                  href="/resources/solicitor-trust-account-audits"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  Our Guide →
                </Link>
              </div>
            </div>

            {/* Professional Accounting Bodies */}
            <div className="p-3.5 rounded-lg bg-white/80 border border-brand-200/50 backdrop-blur">
              <div className="flex items-start gap-2.5 mb-2">
                <CheckCircleIcon className="size-4 text-brand-700 flex-shrink-0 mt-0.5" />
                <div className="text-slate-600 leading-relaxed">
                  <strong className="text-brand-950">
                    Professional Accounting Bodies:
                  </strong>{" "}
                  CPA Australia and IPA require trust account audits per APS 10
                  standards for members holding client funds.
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ml-6">
                <Link
                  href="/resources/accountant-trust-account-audits"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  Our Guide →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DEADLINES */}
        <motion.div
          className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-4">
            <ClockIcon className="size-4" />
            Key compliance deadlines
          </div>

          <div className="space-y-3 text-sm">
            {/* Solicitors */}
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/80 border border-brand-200/50 backdrop-blur">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-100/80 flex items-center justify-center border border-brand-200/50">
                <span className="text-lg font-medium text-brand-700">31</span>
              </div>
              <div>
                <div className="text-slate-600 leading-relaxed mb-1.5">
                  <strong className="text-brand-950">
                    Solicitors (NSW/VIC):
                  </strong>{" "}
                  <span className="text-brand-700 font-medium">
                    31 May annually
                  </span>{" "}
                  under Legal Profession Uniform Law.
                </div>
                <Link
                  href="/resources/solicitor-audit-deadlines"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  View full requirements →
                </Link>
              </div>
            </div>

            {/* Real Estate NSW */}
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/80 border border-brand-200/50 backdrop-blur">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-100/80 flex items-center justify-center border border-brand-200/50">
                <span className="text-lg font-medium text-brand-700">31</span>
              </div>
              <div>
                <div className="text-slate-600 leading-relaxed mb-1.5">
                  <strong className="text-brand-950">Real Estate (NSW):</strong>{" "}
                  <span className="text-brand-700 font-medium">
                    31 December annually
                  </span>{" "}
                  per Property, Stock and Business Agents Act 2002.
                </div>
                <Link
                  href="/resources/nsw-real-estate-audit-requirements"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  View full requirements →
                </Link>
              </div>
            </div>

            {/* Real Estate Other States */}
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/80 border border-brand-200/50 backdrop-blur">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-100/80 flex items-center justify-center border border-brand-200/50">
                <span className="text-lg font-medium text-brand-700">30</span>
              </div>
              <div>
                <div className="text-slate-600 leading-relaxed mb-1.5">
                  <strong className="text-brand-950">
                    Real Estate (Other States):
                  </strong>{" "}
                  <span className="text-brand-700 font-medium">
                    30 September
                  </span>{" "}
                  or within 3 months of audit period end (state-dependent).
                </div>
                <Link
                  href="/pricing"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  View pricing →
                </Link>
              </div>
            </div>

            {/* Accountants */}
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/80 border border-brand-200/50 backdrop-blur">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-100/80 flex items-center justify-center border border-brand-200/50">
                <span className="text-lg font-medium text-brand-700">31</span>
              </div>
              <div>
                <div className="text-slate-600 leading-relaxed mb-1.5">
                  <strong className="text-brand-950">
                    Accountants (CPA/IPA):
                  </strong>{" "}
                  <span className="text-brand-700 font-medium">
                    31 March annually
                  </span>
                  , with 90-day grace period per APS 10.
                </div>
                <Link
                  href="/resources/accountant-trust-account-audits"
                  className="text-xs text-brand-700 hover:text-brand-900 underline underline-offset-2 font-medium"
                >
                  View full requirements →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-600 bg-brand-50/80 border border-brand-200/50 rounded-lg p-3 backdrop-blur">
            <strong>Note:</strong> Deadlines vary by state and regulator. Always
            confirm your specific obligations with your regulatory authority.
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-xl border border-brand-200/70 bg-brand-50/60 backdrop-blur p-6 sm:p-8 supports-[backdrop-filter]:bg-brand-50/40"
      >
        <div className="flex items-center justify-between gap-6 flex-col sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-medium text-brand-950 mb-2">
              See if we cover your organisation
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Fixed pricing from{" "}
              <strong className="text-brand-950">$549 + GST</strong>. 24-hour
              response from experienced trust account auditors.{" "}
              <strong className="text-brand-950">No hidden charges</strong>.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="btn-primary-brand gap-2 w-full sm:w-auto"
          >
            <Link
              href="/book-demo"
              aria-label="Start your trust account audit"
            >
              Start Audit
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Trust Account Audit Services Australia",
            description:
              "Online audit firm offering specialised audit solutions to professionals across Australia with fixed pricing and no hidden charges",
            areaServed: {
              "@type": "Country",
              name: "Australia",
            },
            serviceType: "Trust Account Audit",
            priceRange: "$$",
          }),
        }}
      />
    </section>
  );
}
