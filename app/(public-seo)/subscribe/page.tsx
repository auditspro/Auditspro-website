import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Motion,
  motionVariants,
  motionTransitions,
} from "@/components/ui/motion";
import Link from "next/link";
import { EnvelopeOpenIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
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
        <Motion
          {...motionVariants.fadeInUp}
          transition={motionTransitions.smooth}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <CheckCircleIcon className="size-4" />
            <span>Subscribe with your email</span>
          </div>
          <SubscribeForm />
        </Motion>
      </main>
    </div>
  );
}
