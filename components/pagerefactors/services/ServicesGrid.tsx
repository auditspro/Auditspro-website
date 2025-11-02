import Link from "next/link";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ScaleIcon,
  CalculatorIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  Squares2X2Icon,
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

// Enhanced service data with comprehensive details
const services = [
  {
    title: "Real Estate Agents",
    description:
      "Regulatory compliant trust account audits for real estate agents across all Australian states. Comprehensive review of client money handling, trust account reconciliations, and regulatory compliance requirements.",
    href: "/services/real-estate-agents",
    icon: BuildingOfficeIcon,
    features: [
      "Regulatory Compliance Review",
      "Client Money Audit",
      "Trust Account Reconciliation",
      "Regulatory Compliance Report",
    ],
    keywords:
      "real estate trust account audit, regulatory real estate audit, property agent audit",
    pricing: "$549",
    turnaround: "5-10 business days",
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-100/60",
    iconColor: "text-blue-900",
  },
  {
    title: "Conveyancers",
    description:
      "Professional trust account audits for conveyancers ensuring regulatory compliance and proper client money management throughout property settlement processes across Australia.",
    href: "/services/conveyancers",
    icon: DocumentTextIcon,
    features: [
      "Regulatory Compliance Standards",
      "Settlement Fund Audit",
      "Client Money Management Review",
      "State Regulatory Requirements",
    ],
    keywords:
      "conveyancer trust account audit, conveyancing audit, property settlement audit",
    pricing: "$549",
    turnaround: "5-10 business days",
    color: "from-green-500/10 to-green-600/5",
    iconBg: "bg-green-100/60",
    iconColor: "text-green-900",
  },
  {
    title: "Solicitors",
    description:
      "Legal profession trust account audits for solicitors and law firms. Comprehensive review of client funds, trust account operations, and Law Institute compliance requirements.",
    href: "/services/solicitors",
    icon: ScaleIcon,
    features: [
      "Law Institute Compliance",
      "Client Fund Audit",
      "Trust Account Operations Review",
      "Legal Profession Standards",
    ],
    keywords:
      "solicitor trust account audit, legal profession audit, law firm trust audit",
    pricing: "$1,949",
    turnaround: "7-12 business days",
    color: "from-purple-500/10 to-purple-600/5",
    iconBg: "bg-purple-100/60",
    iconColor: "text-purple-900",
    note: "Additional $100 + GST per control account",
  },
  {
    title: "Accountants",
    description:
      "Professional trust account audits for accountants and accounting firms handling client funds. Ensure compliance with professional standards and proper client money management.",
    href: "/services/accountants",
    icon: CalculatorIcon,
    features: [
      "Professional Standards Review",
      "Client Fund Management Audit",
      "Trust Account Examination",
      "Compliance Assessment Report",
    ],
    keywords:
      "accountant trust account audit, accounting firm audit, CPA trust audit",
    pricing: "$549",
    turnaround: "5-10 business days",
    color: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-amber-100/60",
    iconColor: "text-amber-900",
  },
  {
    title: "Mortgage Brokers",
    description:
      "NCCP compliant trust account audits for mortgage brokers. Comprehensive review of client money handling, regulatory compliance, and home loan settlement processes.",
    href: "/services/mortgage-brokers",
    icon: CurrencyDollarIcon,
    features: [
      "NCCP Compliance Review",
      "Regulatory Requirements",
      "Settlement Process Audit",
      "Client Money Handling Review",
    ],
    keywords:
      "mortgage broker trust account audit, NCCP audit, home loan broker audit",
    pricing: "$549",
    turnaround: "5-10 business days",
    color: "from-cyan-500/10 to-cyan-600/5",
    iconBg: "bg-cyan-100/60",
    iconColor: "text-cyan-900",
  },
  {
    title: "SMSF Trustees",
    description:
      "Specialized trust account audits for SMSF trustees and self-managed superannuation funds. Ensure compliance with superannuation regulations and proper management of member funds.",
    href: "/services/smsf-trustees",
    icon: ArrowTrendingUpIcon,
    features: [
      "SMSF Compliance Review",
      "Member Fund Audit",
      "Superannuation Regulations",
      "Trustee Obligations Assessment",
    ],
    keywords:
      "SMSF trust account audit, self managed super fund audit, SMSF trustee audit",
    pricing: "$549",
    turnaround: "5-10 business days",
    color: "from-red-500/10 to-red-600/5",
    iconBg: "bg-red-100/60",
    iconColor: "text-red-900",
  },
  {
    title: "Business Brokers",
    description:
      "Professional trust account audits for business brokers and commercial agents. Comprehensive review of client deposits, settlement funds, and regulatory compliance requirements.",
    href: "/services/business-brokers",
    icon: BriefcaseIcon,
    features: [
      "Client Deposit Audit",
      "Settlement Fund Review",
      "Regulatory Compliance Check",
      "Business Sale Process Review",
    ],
    keywords:
      "business broker trust account audit, business sale audit, broker compliance audit",
    pricing: "$549",
    turnaround: "5-10 business days",
    color: "from-indigo-500/10 to-indigo-600/5",
    iconBg: "bg-indigo-100/60",
    iconColor: "text-indigo-900",
  },
];

// Enhanced additional specialized services
const additionalServices = [
  {
    title: "Dormant Trust Account Audit",
    icon: ClockIcon,
    pricing: "$150",
    description:
      "Simplified audit process for inactive or dormant trust accounts with reduced compliance requirements.",
    color: "from-slate-500/10 to-slate-600/5",
    iconBg: "bg-slate-100/60",
    iconColor: "text-slate-700",
  },
  {
    title: "AFS License Holder Audit",
    icon: BuildingLibraryIcon,
    pricing: "Get Quote",
    isCustom: true,
    description:
      "Specialized comprehensive audits for Australian Financial Services license holders with complex regulatory requirements.",
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-100/60",
    iconColor: "text-blue-700",
  },
  {
    title: "Body Corporate & Strata Audits",
    icon: UserGroupIcon,
    pricing: "Get Quote",
    isCustom: true,
    description:
      "Comprehensive financial audits for body corporate entities and strata management operations.",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-100/60",
    iconColor: "text-emerald-700",
  },
  {
    title: "Charities & ACNC Entities",
    icon: HeartIcon,
    pricing: "Get Quote",
    isCustom: true,
    description:
      "Compliance-focused audits for charitable organizations and entities subject to ACNC requirements.",
    color: "from-rose-500/10 to-rose-600/5",
    iconBg: "bg-rose-100/60",
    iconColor: "text-rose-700",
  },
];

export function ServicesGrid() {
  return (
    <Motion
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={motionVariants.fadeInUp}
      transition={motionTransitions.smooth}
    >
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Professional Badge */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
                <Squares2X2Icon className="size-4" />
                <span>Professional Services</span>
              </div>
            </div>

            {/* Enhanced heading with better hierarchy */}
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-brand-950 leading-tight">
              Specialized Trust Account Audits for
              <br />
              <span className="text-brand-600">Australian Professionals</span>
            </h2>
            <p className="mb-8 text-base lg:text-lg text-slate-600 leading-relaxed">
              Comprehensive{" "}
              <Link
                href="/services"
                className="text-brand-600 hover:text-brand-700 underline font-medium"
              >
                trust account audit services
              </Link>{" "}
              tailored for different professional industries across Australia.
              Our{" "}
              <Link
                href="/pricing"
                className="text-brand-600 hover:text-brand-700 underline font-medium"
              >
                regulatory compliant auditing services
              </Link>{" "}
              meet specific regulatory requirements for each profession in all
              Australian states.
            </p>

            {/* Value Proposition Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <SparklesIcon className="size-4 text-brand-700" />
                <span className="text-brand-900 font-medium">
                  Competitive Transparent Pricing
                </span>
              </div>
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <ClockIcon className="size-4 text-brand-700" />
                <span className="text-brand-900 font-medium">
                  Fast 5-10 Day Turnaround
                </span>
              </div>
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <ShieldCheckIcon className="size-4 text-brand-700" />
                <span className="text-brand-900 font-medium">
                  100% Fully Compliant
                </span>
              </div>
            </div>
          </Motion>

          {/* Enhanced Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {services.map((service, index) => (
              <Motion
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={motionViewport}
                variants={motionVariants.fadeInUp}
                transition={{ ...motionTransitions.smooth, delay: index * 0.1 }}
                className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:shadow-xl hover:bg-white/90 transition-all duration-300"
              >
                {/* Hover gradient overlay - Reduced opacity */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Remove popular badge section */}

                <div className="relative">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`rounded-lg ${service.iconBg} p-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`size-6 ${service.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-brand-950 mb-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <CheckCircleIcon className="mr-2 h-4 w-4 text-brand-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Section - Clean & Simple */}
                  <div className="mb-5 p-4 rounded-lg bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-2xl font-bold text-brand-900">
                          {service.pricing}{" "}
                          <span className="text-sm font-normal text-slate-600">
                            + GST
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-brand-200/50">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="size-3" />
                        {service.turnaround}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheckIcon className="size-3" />
                        Fully Compliant
                      </span>
                    </div>
                    {service.note && (
                      <div className="mt-2 text-xs text-slate-500 italic">
                        * {service.note}
                      </div>
                    )}
                  </div>

                  {/* CTA Button - Simplified */}
                  <Link
                    href={service.href}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-brand-900 px-4 py-3 text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md group-hover:bg-brand-800 group-hover:shadow-lg"
                    title={service.keywords}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Motion>
            ))}
          </div>

          {/* Enhanced Additional Services Section */}
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: 0.7 }}
          >
            <div className="text-center mb-8">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
                  <SparklesIcon className="size-4" />
                  <span>Specialized Services</span>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-950 mb-3">
                Additional Audit Services
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Specialized audits tailored for unique compliance requirements
                across various industries and regulatory frameworks
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service, index) => (
                <Motion
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={motionViewport}
                  variants={motionVariants.fadeInUp}
                  transition={{
                    ...motionTransitions.smooth,
                    delay: 0.8 + index * 0.1,
                  }}
                  className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-5 supports-[backdrop-filter]:bg-white/40 hover:shadow-lg hover:bg-white/90 transition-all duration-300"
                >
                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`inline-flex rounded-lg ${service.iconBg} p-2.5 mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`size-5 ${service.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h4 className="font-semibold text-brand-950 mb-2 text-base leading-snug">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="pt-3 border-t border-brand-200/50">
                      {service.isCustom ? (
                        <Link href="/contact">
                          <div className="text-lg font-bold text-brand-600 hover:text-brand-700 cursor-pointer transition-colors duration-200">
                            {service.pricing}
                            <span className="text-xs font-normal text-slate-600 ml-1">
                              →
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <div className="text-lg font-bold text-brand-900">
                          {service.pricing}
                          <span className="text-xs font-normal text-slate-600">
                            {" "}
                            + GST
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Motion>
              ))}
            </div>
          </Motion>

          {/* Enhanced CTA Section */}
          <Motion
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: 1.2 }}
            className="mt-16"
          >
            <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-brand-950 text-center">
                Need Multiple Audits or State-Specific Pricing?
              </h3>
              <p className="mb-6 text-slate-600 max-w-3xl mx-auto text-center leading-relaxed">
                Volume discounts available for businesses with multiple trust
                accounts across different states. Whether you need{" "}
                <Link
                  href="/services/real-estate-agents"
                  className="text-brand-600 hover:text-brand-700 underline font-medium"
                >
                  real estate audits
                </Link>
                ,{" "}
                <Link
                  href="/services/conveyancers"
                  className="text-brand-600 hover:text-brand-700 underline font-medium"
                >
                  conveyancer services
                </Link>
                , or{" "}
                <Link
                  href="/services/solicitors"
                  className="text-brand-600 hover:text-brand-700 underline font-medium"
                >
                  legal profession audits
                </Link>{" "}
                - we offer competitive pricing with state-specific compliance
                across NSW, VIC, QLD, WA, SA, TAS, ACT, and NT.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-white font-medium shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                    <CheckCircleIcon className="size-5" />
                    Get Custom Quote
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-brand-950 font-medium shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                    <CurrencyDollarIcon className="size-5" />
                    View State Pricing
                  </button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircleIcon className="size-4 text-brand-500" />
                  <span>All Australian States Covered</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircleIcon className="size-4 text-brand-500" />
                  <span>Volume Discounts Available</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircleIcon className="size-4 text-brand-500" />
                  <span>IPA Qualified Auditors</span>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </section>
    </Motion>
  );
}
