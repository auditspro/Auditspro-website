import Link from "next/link";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import {
  EnvelopeOpenIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Email Policy | AuditsPro",
  description:
    "How we send emails, when we send them, your choices and unsubscribe options, and how we manage preferences.",
  alternates: { canonical: "/email-policy" },
};

export default function EmailPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40">
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Email Policy", href: "/email-policy" },
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
              Email Policy
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              What we send, when we send it, and how to manage your choices.
            </p>
            <div className="mt-4 text-xs text-slate-500">Last updated: 2 December 2025</div>
          </Motion>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-12">
        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={motionTransitions.smooth}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ShieldCheckIcon className="size-4" />
            <span>Types of emails</span>
          </div>
          <ul className="list-disc pl-6 text-foreground">
            <li className="mb-2">Transactional: <Link href="/login" className="underline text-brand-800 hover:text-brand-900">account</Link> verification, notifications, and service updates.</li>
            <li className="mb-2">Support: responses to <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">enquiries</Link> and follow‑ups requested by you.</li>
            <li className="mb-2">Marketing: newsletter and product updates only if you <Link href="/subscribe" className="underline text-brand-800 hover:text-brand-900">subscribe</Link>.</li>
          </ul>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.05 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <CheckCircleIcon className="size-4" />
            <span>Consent and preferences</span>
          </div>
          <p className="text-foreground mb-3">
            Marketing emails are optional and based on your consent. You can subscribe or unsubscribe at any time.
          </p>
          <p className="text-foreground">
            Manage your preferences via the <Link href="/subscribe" className="underline text-brand-800 hover:text-brand-900">subscribe</Link> or <Link href="/unsubscribe" className="underline text-brand-800 hover:text-brand-900">unsubscribe</Link> pages, or using links in each email.
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.1 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ClockIcon className="size-4" />
            <span>Frequency</span>
          </div>
          <p className="text-foreground">
            We aim to keep marketing emails minimal and relevant. Typical frequency is monthly or less. Transactional and <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">support</Link> emails are sent as needed to operate the service and respond to your requests.
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.15 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <XCircleIcon className="size-4" />
            <span>Unsubscribe</span>
          </div>
          <p className="text-foreground mb-3">
            You can stop marketing emails at any time using the link in each email or by visiting the <Link href="/unsubscribe" className="underline text-brand-800 hover:text-brand-900">unsubscribe</Link> page.
          </p>
          <p className="text-foreground">
            Transactional and support emails may continue where necessary to operate your <Link href="/login" className="underline text-brand-800 hover:text-brand-900">account</Link> and provide requested services.
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.2 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <PencilSquareIcon className="size-4" />
            <span>Changes and contact</span>
          </div>
          <p className="text-foreground mb-3">
            We may update this Email Policy from time to time. When we do, we will change the “last updated” date above.
          </p>
          <p className="text-foreground">
            Questions about email preferences can be sent to us via our <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">contact page</Link>.
          </p>
        </Motion>
      </main>
    </div>
  );
}
