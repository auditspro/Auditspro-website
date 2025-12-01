import Link from "next/link";
import Image from "next/image";
import { Motion } from "@/components/ui/motion";
import {
  ScaleIcon as Gavel,
  CheckCircleIcon as CheckCircle2,
  BookOpenIcon as BookOpen,
  ClockIcon as Clock,
  CreditCardIcon as CreditCard,
  ShieldCheckIcon as Shield,
} from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-200/70 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40 mt-8">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Content Column */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Service Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 supports-[backdrop-filter]:bg-white/40">
              <Gavel className="size-4" />
              <span>Legal Professionals</span>
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-950">
              Professional Trust Account Audits for{" "}
              <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
                Solicitors
              </span>
            </h1>

            <p className="mb-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Law Society compliant trust account audits for legal practices and solicitors across Australia. 
              Our comprehensive{" "}
              <Link href="/services" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                professional audit services
              </Link>{" "}
              also cover{" "}
              <Link href="/services/conveyancers" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                conveyancers
              </Link>{" "}
              and{" "}
              <Link href="/services/real-estate-agents" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                real estate agents
              </Link>
              . Expert auditors with{" "}
              <Link href="/contact" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                24-hour response times
              </Link>{" "}
              and 5-10 day completion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md">
                  <CheckCircle2 className="size-5" />
                  Start Your Audit
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3 text-base font-medium text-brand-950 shadow-sm transition-all hover:bg-brand-50 hover:border-brand-300">
                  <BookOpen className="size-5" />
                  How It Works
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-brand-700" />
                <span>5-10 Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="size-4 text-brand-700" />
                <span>Fixed Pricing - No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-4 text-brand-700" />
                <span>IPA Qualified Auditors</span>
              </div>
            </div>

            {/* Additional Trust Elements */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <Shield className="size-4 text-brand-700" />
                <span>Law Society Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-50/80 px-3 py-2 rounded-full border border-brand-200/50">
                <CheckCircle2 className="size-4 text-brand-700" />
                <span>Expert Legal Auditors</span>
              </div>
            </div>
          </Motion>

          {/* Enhanced Image Column with Professional Solicitor Image */}
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:justify-self-end"
          >
            <div className="relative mx-auto lg:ml-auto">
              <div className="relative circle-image">
                <Image
                  src="/images/auditspro-solicitors.png"
                  alt="Professional Trust Account Audit Services for Solicitors - Law Society Compliant - AuditsPro Australia"
                  fill
                  className="w-full h-full object-cover"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 352px, 448px"
                />
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
