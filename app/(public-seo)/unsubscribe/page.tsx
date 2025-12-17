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
              You can unsubscribe from any email using the link included in that
              email. Your status will be updated and you will no longer receive
              those categories of emails.
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
            <XCircleIcon className="size-4" />
            <span>Unsubscribe with your email</span>
          </div>
          <UnsubscribeForm />
          <p className="text-sm text-foreground mt-4">
            For help managing your preferences, please contact us via{" "}
            <Link
              href="/contact"
              className="underline text-brand-800 hover:text-brand-900"
            >
              our contact page
            </Link>
            .
          </p>
        </Motion>
      </main>
    </div>
  );
}
