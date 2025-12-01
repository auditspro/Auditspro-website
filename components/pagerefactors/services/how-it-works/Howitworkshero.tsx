import Link from "next/link";
import Image from "next/image";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon as ArrowRight,
  ClockIcon as Clock,
  ShieldCheckIcon as Shield,
  CheckCircleIcon as CheckCircle2,
  BoltIcon as Zap,
} from "@heroicons/react/24/outline";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
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
            online. From email verification to receiving your regulatory-compliant
            audit report, we&apos;ll walk you through every step of the process.
          </p>

          {/* Trust Indicators (chips) */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-600 mb-8">
            {keyBenefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="size-4 text-brand-700" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button asChild size="lg" className="gap-2 btn-primary-brand">
            <Link href="/book-demo" aria-label="Start your trust account audit">
              Start Your Audit Now
              <ArrowRight className="size-5" />
            </Link>
          </Button>

          {/* Trust Indicator */}
          <p className="mt-6 text-sm text-slate-600">
            No credit card required • Secure encrypted process • Fixed
            transparent pricing
          </p>
        </Motion>

        {/* Image Column */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative mx-auto">
            <div className="relative circle-image border-0 shadow-none">
              <Image
                src="/images/about audits.png"
                alt="How It Works – Trust Account Audit Illustration"
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </Motion>
        </div>
      </div>
    </section>
  );
}
