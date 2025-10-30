import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import { ArrowRight, Clock, Shield, CheckCircle2, Zap } from "lucide-react";

export function HowItWorksHero() {
  const keyBenefits = [
    { icon: Clock, text: "Complete in 15-30 minutes" },
    { icon: Zap, text: "100% online process" },
    { icon: Shield, text: "Bank-grade security" },
    { icon: CheckCircle2, text: "5-10 day turnaround" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-brand-200/70 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40 mt-8">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 mb-6">
            <Zap className="size-4 text-brand-700" />
            <span>Complete Step-by-Step Guide</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
            How Our Trust Account{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              Audit Process Works
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A complete, detailed guide to submitting your trust account audit
            online. From email verification to receiving your ASIC-compliant
            audit report, we&apos;ll walk you through every step of the process.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {keyBenefits.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex flex-col items-center gap-2 p-4 rounded-lg border border-brand-200/70 bg-white/70 backdrop-blur"
              >
                <div className="rounded-full bg-brand-100/60 p-2">
                  <Icon className="size-5 text-brand-900" />
                </div>
                <span className="text-sm font-medium text-brand-950 text-center">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/start-audit">
            <button className="group inline-flex items-center gap-2 rounded-lg bg-brand-900 px-8 py-4 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
              <span>Start Your Audit Now</span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>

          {/* Trust Indicator */}
          <p className="mt-6 text-sm text-slate-600">
            No credit card required • Secure encrypted process • Fixed
            transparent pricing
          </p>
        </Motion>
      </div>
    </section>
  );
}
