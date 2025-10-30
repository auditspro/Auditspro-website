import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowRight,
  Mail,
  Building2,
  FileText,
  Download,
  Zap,
} from "lucide-react";
import { button } from "framer-motion/client";

export function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      icon: Mail,
      title: "Book Online",
      description:
        "Request your audit through our secure online portal. Verify your email and complete quick profile setup.",
      timeEstimate: "2 mins",
      features: [
        "Email verification",
        "Quick profile setup",
        "Instant confirmation",
      ],
      delay: 0.1,
    },
    {
      step: 2,
      icon: Building2,
      title: "Business Details",
      description:
        "Enter your ABN or search by business name. We auto-populate your company details from the Australian Business Register.",
      timeEstimate: "3 mins",
      features: ["ABN lookup", "Auto-fill details", "Multi-account support"],
      delay: 0.2,
    },
    {
      step: 3,
      icon: FileText,
      title: "Trust Account Setup",
      description:
        "Add your trust account details including BSB, account numbers, and state-specific compliance information.",
      timeEstimate: "5 mins",
      features: [
        "Secure data entry",
        "State compliance checks",
        "Guided checklist",
      ],
      delay: 0.3,
    },
    {
      step: 4,
      icon: Download,
      title: "Review & Submit",
      description:
        "Review your information, see transparent pricing, and submit. Download your comprehensive audit report within 5-10 business days.",
      timeEstimate: "2 mins",
      features: [
        "Fixed pricing preview",
        "Secure submission",
        "Report download portal",
      ],
      delay: 0.4,
    },
  ];

  const quickStats = [
    { value: "15-30", label: "Minutes to Complete", icon: Clock },
    { value: "100%", label: "Online Process", icon: Zap },
    { value: "5-10", label: "Days Turnaround", icon: CheckCircle2 },
  ];

  return (
    <section className="container relative mx-auto px-4 sm:px-6 pb-16">
      <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 md:p-12 supports-[backdrop-filter]:bg-white/40">
        {/* Header */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900 mb-4">
            <Zap className="size-4" />
            <span>Simple & Fast Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
            How Our Conveyancer Audit Process Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Complete your trust account audit submission in just 15-30 minutes.
            Simple, efficient, and completely online.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {quickStats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-50 border border-brand-200/50"
              >
                <Icon className="size-5 text-brand-700" />
                <div className="text-left">
                  <div className="text-lg font-bold text-brand-900">
                    {value}
                  </div>
                  <div className="text-xs text-slate-600">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </Motion>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step) => (
            <Motion
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="relative"
            >
              <div className="group h-full rounded-xl border border-brand-200/70 bg-gradient-to-br from-brand-50/60 to-white/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-brand-50/40 hover:shadow-lg hover:border-brand-300 transition-all duration-300">
                {/* Step Number Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-brand-900 size-10 text-white font-semibold text-base group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  {/* Time Estimate */}
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 border border-brand-200/50">
                    <Clock className="size-3 text-brand-700" />
                    <span className="text-xs font-medium text-brand-900">
                      {step.timeEstimate}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center rounded-lg bg-brand-100/60 p-3 mb-4 group-hover:bg-brand-200/80 transition-colors duration-300">
                  <step.icon className="size-6 text-brand-900" />
                </div>

                {/* Title and Description */}
                <h3 className="font-semibold text-brand-950 mb-2 text-base">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-1.5">
                  {step.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2 className="size-3.5 text-brand-700 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Step Connector Arrow (Hidden on last item and mobile) */}
                {step.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="size-6 text-brand-300" />
                  </div>
                )}
              </div>
            </Motion>
          ))}
        </div>

        {/* What You'll Need Section */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="rounded-xl border border-brand-200/70 bg-gradient-to-br from-brand-50/40 to-white/40 backdrop-blur p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="rounded-lg bg-brand-100/60 p-3">
                <FileText className="size-6 text-brand-900" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-brand-950 mb-2">
                  What You'll Need to Get Started
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="size-1.5 rounded-full bg-brand-700"></div>
                    <span>ABN or Business Name</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="size-1.5 rounded-full bg-brand-700"></div>
                    <span>Trust Account BSB & Numbers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="size-1.5 rounded-full bg-brand-700"></div>
                    <span>State License Details (NSW UID)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="size-1.5 rounded-full bg-brand-700"></div>
                    <span>Operating State(s)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>

        {/* CTA Section */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/start-audit">
              <button className="group inline-flex items-center gap-2 rounded-lg bg-brand-900 px-8 py-3.5 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                <span>Start Your Audit Now</span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>

            <Link href="/how-it-works">
              <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-8 py-3.5 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                <BookOpen className="size-5" />
                <span>View Detailed Guide</span>
              </button>
            </Link>
          </div>

          {/* Trust Indicator */}
          <p className="mt-6 text-sm text-slate-600">
            <CheckCircle2 className="inline size-4 text-green-600 mr-1" />
            Secure, encrypted submission • No credit card required to start •
            Fixed transparent pricing
          </p>
        </Motion>
      </div>
    </section>
  );
}
