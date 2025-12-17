import Link from "next/link";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Motion,
  motionVariants,
  motionTransitions,
} from "@/components/ui/motion";
import { XCircleIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { UnsubscribeForm } from "@/components/ui/unsubscribe-form";

export const metadata = {
  title: "Unsubscribe | AuditsPro",
  description:
    "Manage email subscription preferences. Unsubscribe from marketing or notification emails.",
  alternates: { canonical: "/unsubscribe" },
};

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40">
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Unsubscribe", href: "/unsubscribe" },
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
              Unsubscribe
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Manage your email preferences here. We respect your inbox and make it easy to unsubscribe from marketing communications at any time.
            </p>
          </Motion>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Content */}
          <Motion
            {...motionVariants.fadeInUp}
            transition={motionTransitions.smooth}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-brand-950 mb-4">
                We're sorry to see you go
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We understand that inboxes can get overwhelmed. If you decide to unsubscribe, you will be removed from our marketing and newsletter lists immediately.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200/60 p-5">
              <h3 className="font-medium text-amber-900 flex items-center gap-2 mb-2">
                <EnvelopeOpenIcon className="size-4" />
                Important Note
              </h3>
              <p className="text-sm text-amber-800/80 leading-relaxed">
                Even if you unsubscribe from marketing emails, you will <strong>still receive essential transactional emails</strong> related to your account, such as audit reports, password resets, and service notifications. These are required for us to provide our services to you.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-900 mb-3">
                By unsubscribing, you will stop receiving:
              </p>
              <ul className="space-y-3">
                {[
                  "Regulatory compliance alerts and legislative updates",
                  "Trust account audit preparation guides and checklists",
                  "New feature announcements and platform improvements"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-slate-600 text-sm">
                    <XCircleIcon className="size-5 text-slate-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Motion>

          {/* Right Column: Form */}
          <Motion
            {...motionVariants.fadeInUp}
            transition={{ ...motionTransitions.smooth, delay: 0.2 }}
            className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 sm:p-8 supports-[backdrop-filter]:bg-white/70 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-6">
              <XCircleIcon className="size-4" />
              <span>Unsubscribe with your email</span>
            </div>
            
            <UnsubscribeForm />
            
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <p className="text-xs text-center text-slate-500">
                Did you arrive here by mistake? <Link href="/subscribe" className="underline hover:text-brand-800">Re-subscribe anytime</Link>.
              </p>
              <p className="text-xs text-center text-slate-500">
                For help managing your preferences, please <Link href="/contact" className="underline hover:text-brand-800">contact support</Link>.
              </p>
            </div>
          </Motion>
        </div>
      </main>
    </div>
  );
}
