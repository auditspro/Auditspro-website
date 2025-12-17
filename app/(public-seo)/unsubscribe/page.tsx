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
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.25fr_1fr] items-start">
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

            <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
              <h3 className="text-sm font-medium text-brand-950 mb-2">What happens next?</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
                <li>Your email is removed from our marketing list immediately.</li>
                <li>You may still receive essential transactional emails related to your account.</li>
                <li>You can resubscribe anytime from the <Link href="/subscribe" className="underline text-brand-800 hover:text-brand-900">Subscribe page</Link>.</li>
              </ol>
            </div>

            <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
              <h3 className="text-sm font-medium text-brand-950 mb-2">Need other changes?</h3>
              <p className="text-sm text-slate-600">
                If you want to update your email or manage other preferences, please reach out via the <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">contact page</Link>. We’ll be happy to help.
              </p>
            </div>

          </Motion>

          {/* Right Column: Form + Explainer stacked */}
          <div className="lg:col-start-2 space-y-6">
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
            <Motion
              {...motionVariants.fadeInUp}
              transition={{ ...motionTransitions.smooth, delay: 0.25 }}
              className="rounded-xl border border-brand-200/60 bg-white/70 p-4"
            >
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  We aim to keep your inbox clear and your preferences respected. Unsubscribing removes you from marketing communications immediately. This won’t affect essential transactional emails we may need to send to operate your account—such as password resets, audit delivery notices, or security alerts.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  If you change your mind later, you can re‑subscribe in seconds. We keep subscription content relevant to trust account compliance, audit preparation, and practical product improvements—delivered at a sensible cadence and written in plain English.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Need tailored assistance or have a specific preference request? Get in touch via our <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">contact page</Link> and we’ll help configure the right communication settings for you.
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
                <h3 className="text-sm font-medium text-brand-950 mb-2">What changes when you unsubscribe</h3>
                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                  <li>No marketing newsletters</li>
                  <li>No compliance alerts</li>
                  <li>No product announcements</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  You will stop receiving marketing communications. Essential service emails may still be sent to operate your account and deliver audits.
                </p>
              </div>
              <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
                <h3 className="text-sm font-medium text-brand-950 mb-2">When emails may still be sent</h3>
                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                  <li>Password resets and security notices</li>
                  <li>Audit delivery and receipts</li>
                  <li>Critical account notifications</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  These messages are service‑critical and do not include marketing content. They ensure secure access and delivery of your audit documents.
                </p>
              </div>
              <div className="rounded-xl border border-brand-200/60 bg-white/70 p-4">
                <h3 className="text-sm font-medium text-brand-950 mb-2">Your privacy and control</h3>
                <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                  <li>Australian data location</li>
                  <li>Encryption and least‑privilege access</li>
                  <li>Manage preferences anytime</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  We minimise collection and protect data in transit. Manage preferences or re‑subscribe anytime under our <Link href="/privacy-policy" className="underline text-brand-800 hover:text-brand-900">Privacy Policy</Link> and <Link href="/email-policy" className="underline text-brand-800 hover:text-brand-900">Email Policy</Link>.
                </p>
              </div>
            </div>
          </Motion>
        </section>
      </main>
    </div>
  );
}
