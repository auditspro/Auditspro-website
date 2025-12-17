import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Motion,
  motionVariants,
  motionTransitions,
} from "@/components/ui/motion";
import Link from "next/link";
import { EnvelopeOpenIcon, CheckCircleIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { SubscribeForm } from "@/components/ui/subscribe-form";

export const metadata = {
  title: "Subscribe | AuditsPro",
  description:
    "Manage email subscription preferences. Subscribe to receive service updates and notifications.",
  alternates: { canonical: "/subscribe" },
};

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40">
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Subscribe", href: "/subscribe" },
        ]}
      />

      <section className="relative overflow-hidden border-b border-brand-200/70">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <Motion
            {...motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <EnvelopeOpenIcon className="size-4 text-brand-700" />
              <span>Email Preferences</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950">
              Subscribe
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Subscribe to receive service updates and notifications. Already subscribed? You can <Link href="/unsubscribe" className="underline text-brand-800 hover:text-brand-900">unsubscribe</Link> at any time.
            </p>
          </Motion>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.25fr_1fr] items-start">
          {/* Left Column: Content */}
          <Motion
            {...motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-brand-950 mb-4">
                Why join our newsletter?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Stay ahead of the curve with expert insights designed for Australian real estate agents, conveyancers, and accountants. We respect your inbox and only send content that adds value.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Regulatory Compliance Updates",
                  description: "Never miss a critical change in trust account audit regulations or legislative requirements."
                },
                {
                  title: "Audit Preparation Tips",
                  description: "Practical advice to help you prepare for your annual audit and avoid common compliance pitfalls."
                },
                {
                  title: "Product Announcements",
                  description: "Be the first to know about new AuditsPro features designed to simplify your workflow."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircleIcon className="size-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-950">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ClockIcon className="size-5 text-brand-700" />
                  <h3 className="text-sm font-medium text-brand-950">Frequency & Respect</h3>
                </div>
                <p className="text-sm text-slate-600">
                  We send relevant updates at a sensible cadence. Typical frequency is monthly or less, and you can unsubscribe with one click anytime.
                </p>
              </div>
              <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheckIcon className="size-5 text-brand-700" />
                  <h3 className="text-sm font-medium text-brand-950">Privacy & Security</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Your email is handled in line with our <Link href="/privacy-policy" className="underline text-brand-800 hover:text-brand-900">Privacy Policy</Link> and <Link href="/email-policy" className="underline text-brand-800 hover:text-brand-900">Email Policy</Link>.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
              <div className="flex items-center gap-2 mb-2">
                <UserGroupIcon className="size-5 text-brand-700" />
                <h3 className="text-sm font-medium text-brand-950">Who finds this useful?</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Real estate agents managing trust accounts</li>
                <li>Conveyancers and solicitors preparing for annual audits</li>
                <li>Accountants advising on compliance best practices</li>
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                Need help choosing? Contact our team via the <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">contact page</Link>.
              </p>
            </div>

            
          </Motion>

          {/* Right Column: Form + Explainer stacked */}
          <div className="lg:col-start-2 space-y-6">
            <Motion
              {...motionVariants.fadeInUp}
              transition={{ ...motionTransitions.smooth, delay: 0.2 }}
              className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 sm:p-8 supports-[backdrop-filter]:bg-white/70 shadow-sm w-full"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-6">
                <EnvelopeOpenIcon className="size-4" />
                <span>Subscribe with your email</span>
              </div>
              <SubscribeForm />
              <p className="mt-6 text-xs text-center text-slate-500">
                By subscribing, you agree to our <Link href="/privacy-policy" className="underline hover:text-brand-800">Privacy Policy</Link> and <Link href="/email-policy" className="underline hover:text-brand-800">Email Policy</Link>.
              </p>
            </Motion>
            <Motion
              {...motionVariants.fadeInUp}
              transition={{ ...motionTransitions.smooth, delay: 0.25 }}
              className="rounded-xl border border-brand-200/60 bg-white/70 p-4"
            >
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Our updates are curated by qualified auditors and compliance specialists who work daily with trust accounts across Australia. Each email focuses on practical, actionable guidance—whether it’s a change in state regulations, a reminder for key audit milestones, or checklists to streamline your preparation.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Subscribing helps you stay confident and prepared. You can expect plain‑English explanations, links to official resources, and real‑world examples relevant to professionals like you. We’ll only send a message when it meaningfully improves your compliance or workflow.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  You remain in control. Adjust your preferences or unsubscribe at any time, and we’ll continue to safeguard your information under our <Link href="/privacy-policy" className="underline text-brand-800 hover:text-brand-900">Privacy Policy</Link> and <Link href="/email-policy" className="underline text-brand-800 hover:text-brand-900">Email Policy</Link>.
                </p>
              </div>
            </Motion>
          </div>
        </div>
        <section className="mt-12">
          <Motion
            {...motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: 0.1 }}
            className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 sm:p-8 supports-[backdrop-filter]:bg-white/70"
          >
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
                <h3 className="text-sm font-medium text-brand-950 mb-2">What you’ll receive</h3>
                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                  <li>Compliance alerts written in plain English</li>
                  <li>Audit preparation tips and checklists</li>
                  <li>Product updates relevant to workflows</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  Clear, relevant updates for trust account compliance with concise guidance and reminders to keep you audit‑ready without inbox clutter.
                </p>
              </div>
              <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
                <h3 className="text-sm font-medium text-brand-950 mb-2">Who we email</h3>
                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                  <li>Real estate trust account teams</li>
                  <li>Conveyancers and solicitors</li>
                  <li>Accountants supporting audits</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  Professionals managing trust accounts who need timely regulatory updates and practical actions tailored to their role and state.
                </p>
              </div>
              <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
                <h3 className="text-sm font-medium text-brand-950 mb-2">How we protect your data</h3>
                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                  <li>Australian data location</li>
                  <li>Encryption and access controls</li>
                  <li>Unsubscribe anytime</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  We minimise collection, encrypt data in transit, and apply least‑privilege access. You control preferences under our privacy and email policies.
                </p>
              </div>
            </div>
          </Motion>
        </section>
      </main>
    </div>
  );
}
