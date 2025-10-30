import { Motion } from "@/components/ui/motion";
import {
  Award,
  Shield,
  Clock,
  Users,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Star,
  BadgeCheck,
  Timer,
  UserCheck,
  Headphones,
  ChartNoAxesGantt,
  CreditCard,
} from "lucide-react";

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      badgeIcon: UserCheck,
      title: "Conveyancing Specialists",
      shortDesc: "Expert auditors with deep conveyancing knowledge",
      desc: "Our auditors have extensive experience with conveyancing trust accounts and understand the unique regulatory requirements across all Australian jurisdictions.",
      stats: "IPA Qualified",
      statsLabel: "certified auditors",
      highlights: [
        "State-specific expertise",
        "National law compliance",
        "Regular training updates",
      ],
    },
    {
      icon: Shield,
      badgeIcon: BadgeCheck,
      title: "100% Cloud-Based Process",
      shortDesc: "Secure, accessible, and completely online",
      desc: "Secure online portal with multi-user access powered by enterprise-grade AppWrite backend. Upload documents, track progress, and receive your audit report entirely online.",
      stats: "Enterprise",
      statsLabel: "security standards",
      highlights: [
        "Backend security",
        "24/7 portal access",
        "Real-time tracking",
      ],
    },
    {
      icon: Clock,
      badgeIcon: Timer,
      title: "Fast 5-10 Day Turnaround",
      shortDesc: "Quick without compromising quality",
      desc: "Quick audit completion without compromising quality. We understand conveyancers work to strict deadlines and we deliver accordingly.",
      stats: "5-10",
      statsLabel: "business days",
      highlights: [
        "Priority processing available",
        "Regular status updates",
        "Deadline commitment",
      ],
    },
    {
      icon: CreditCard,
      badgeIcon: ChartNoAxesGantt,
      title: "Fixed, Transparent Pricing",
      shortDesc: "No hidden fees or surprise charges",
      desc: "No hidden fees or surprise charges. $549-$749 + GST for conveyancing practices, with clear pricing communicated upfront.",
      stats: "$549",
      statsLabel: "starting price",
      highlights: [
        "All-inclusive pricing",
        "No surprise fees",
        "Save $51 per audit",
      ],
    },
    {
      icon: Users,
      badgeIcon: UserCheck,
      title: "Multi-User Portal Access",
      shortDesc: "Collaborate seamlessly with your team",
      desc: "Your whole team can access our secure portal. Perfect for practices with multiple conveyancers and administrative staff.",
      stats: "Unlimited",
      statsLabel: "team users",
      highlights: [
        "Role-based permissions",
        "Collaborative workspace",
        "Team notifications",
      ],
    },
    {
      icon: MessageCircle,
      badgeIcon: Headphones,
      title: "24-Hour Response Guarantee",
      shortDesc: "Always here when you need us",
      desc: "Fast, reliable support when you need it. Questions answered within 24 hours, and year-round compliance guidance available.",
      stats: "24h",
      statsLabel: "response time",
      highlights: [
        "Expert consultations",
        "Year-round support",
        "Direct auditor contact",
      ],
    },
  ];

  return (
    <section className="container relative mx-auto px-4 sm:px-6 pb-16">
      {/* Section Header */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900 mb-4">
          <Star className="size-4 fill-brand-700 text-brand-700" />
          <span>Trusted by Conveyancers Nationwide</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
          Why Conveyancers Choose AuditsPro AU
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Specialized audit services designed specifically for the unique
          compliance needs of licensed conveyancers across Australia.
        </p>
      </Motion>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {reasons.map(
          (
            {
              icon: Icon,
              badgeIcon: BadgeIcon,
              title,
              shortDesc,
              desc,
              stats,
              statsLabel,
              highlights,
            },
            index
          ) => (
            <Motion
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group relative h-full rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/40 hover:border-brand-300 hover:shadow-xl hover:bg-white transition-all duration-300">
                {/* Subtle gradient overlay on hover - ONLY brand blue */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-brand-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative">
                  {/* Icon and Title Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-lg bg-brand-100/60 p-3 group-hover:bg-brand-200/80 group-hover:scale-110 transition-all duration-300">
                      <Icon className="size-6 text-brand-900" />
                    </div>

                    {/* Enhanced Stats Badge with Icon */}
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1.5 mb-1">
                        <BadgeIcon className="size-4 text-brand-700" />
                        <div className="text-lg font-bold text-brand-900">
                          {stats}
                        </div>
                      </div>
                      <div className="text-xs text-slate-600 bg-brand-50/80 px-2 py-1 rounded-full border border-brand-200/50">
                        {statsLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title and Short Description */}
                  <div className="mb-3">
                    <h3 className="font-semibold text-brand-950 text-lg mb-1.5">
                      {title}
                    </h3>
                    <p className="text-sm text-brand-700 font-medium">
                      {shortDesc}
                    </p>
                  </div>

                  {/* Full Description */}
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {desc}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2">
                    {highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="size-4 text-brand-700 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 pt-4 border-t border-brand-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-sm font-medium text-brand-900">
                      <span>Learn more</span>
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Motion>
          )
        )}
      </div>

      {/* Bottom Trust Banner */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/60 to-white/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-brand-50/40">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side - Trust indicators */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <Shield className="size-5 text-brand-900" />
                <h3 className="font-semibold text-brand-950 text-lg">
                  IPA Qualified & ASIC Compliant
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                All our auditors are IPA qualified with extensive experience in
                conveyancing trust account compliance across all Australian
                states and territories.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900 text-white text-xs font-medium">
                  IPA Qualified
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900 text-white text-xs font-medium">
                  ASIC Compliant
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900 text-white text-xs font-medium">
                  Nationwide Service
                </span>
              </div>
            </div>

            {/* Right side - Key Features */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="px-4 py-3 rounded-lg bg-white/60 border border-brand-200/50">
                <div className="text-lg font-bold text-brand-900">5-10 Days</div>
                <div className="text-xs text-slate-600 mt-1">
                  Turnaround Time
                </div>
              </div>
              <div className="px-4 py-3 rounded-lg bg-white/60 border border-brand-200/50">
                <div className="text-lg font-bold text-brand-900">24h</div>
                <div className="text-xs text-slate-600 mt-1">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  );
}
