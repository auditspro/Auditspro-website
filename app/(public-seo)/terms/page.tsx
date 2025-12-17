import Link from "next/link";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import {
  ScaleIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Terms of Service | AuditsPro",
  description:
    "Plain-language terms for using the AuditsPro website and app, including acceptable use, accounts, intellectual property, disclaimers, third-party services, and governing law.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40">
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Service", href: "/terms" },
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
              <ScaleIcon className="size-4 text-brand-700" />
              <span>Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950">
              Terms of Service
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              The rules for using the AuditsPro website and app in clear,
              plain language.
            </p>
            <div className="mt-4 text-xs text-slate-500">Last updated: 16 December 2025</div>
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
            <ClipboardDocumentCheckIcon className="size-4" />
            <span>Acceptance of terms</span>
          </div>
          <p className="text-foreground">
            By using our site or services, you agree to these Terms of Service.
            For information about how we handle personal data, see our{" "}
            <Link href="/privacy-policy" className="underline text-brand-800 hover:text-brand-900">
              Privacy Policy
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.05 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ShieldCheckIcon className="size-4" />
            <span>Acceptable use</span>
          </div>
          <ul className="list-disc pl-6 text-foreground mb-3">
            <li className="mb-2">Use the site only for lawful purposes.</li>
            <li className="mb-2">Do not attempt to bypass security or overload the service.</li>
            <li className="mb-2">Do not copy content, branding, or software without permission.</li>
            <li className="mb-2">Do not scrape, spam, or interfere with normal operation.</li>
          </ul>
          <p className="text-foreground">
            Learn more about our mission and values on our{" "}
            <Link href="/about" className="underline text-brand-800 hover:text-brand-900">
              About
            </Link>{" "}
            page.
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.1 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <CheckCircleIcon className="size-4" />
            <span>Accounts, subscriptions, and emails</span>
          </div>
          <p className="text-foreground mb-3">
            If you create an account or subscribe to emails, provide accurate
            information and keep login details confidential. You are responsible
            for activity under your account.
          </p>
          <p className="text-foreground mb-3">
            We may suspend or close accounts that breach these terms, cause
            harm, or interfere with the service.
          </p>
          <p className="text-foreground">
            Marketing emails are optional. Manage preferences via{" "}
            <Link href="/subscribe" className="underline text-brand-800 hover:text-brand-900">
              Subscribe
            </Link>{" "}
            and{" "}
            <Link href="/unsubscribe" className="underline text-brand-800 hover:text-brand-900">
              Unsubscribe
            </Link>
            . See our{" "}
            <Link href="/email-policy" className="underline text-brand-800 hover:text-brand-900">
              Email Policy
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.15 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ClipboardDocumentCheckIcon className="size-4" />
            <span>Services and proposals</span>
          </div>
          <p className="text-foreground">
            We provide trust account audit services and related features through
            the site and app. Proposals, timelines, and fees are communicated
            before commencement. Service delivery may require secure document
            portal access and standard compliance information. See our{" "}
            <Link href="/services" className="underline text-brand-800 hover:text-brand-900">
              Services
            </Link>
            ,{" "}
            <Link href="/pricing" className="underline text-brand-800 hover:text-brand-900">
              Pricing
            </Link>
            , and{" "}
            <Link href="/how-it-works" className="underline text-brand-800 hover:text-brand-900">
              How It Works
            </Link>{" "}
            pages for more details.
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.2 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ShieldCheckIcon className="size-4" />
            <span>Intellectual property</span>
          </div>
          <p className="text-foreground mb-3">
            Our logo, design, text, graphics, and software belong to us or our
            licensors. You may use the site for your business purposes, but you
            may not reproduce or distribute our content commercially without
            written permission.
          </p>
          <p className="text-foreground">
            Trademarks and brand elements must not be used without consent.
            Contact us via our{" "}
            <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">
              Contact Page
            </Link>{" "}
            for permissions.
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.25 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ShieldCheckIcon className="size-4" />
            <span>Disclaimers and limits of liability</span>
          </div>
          <p className="text-foreground mb-3">
            The site and app are provided on an “as is” basis. We work to keep
            information accurate and the service available, but we do not
            guarantee uninterrupted access or error‑free operation.
          </p>
          <p className="text-foreground mb-3">
            To the maximum extent permitted by law, we are not responsible for
            loss or damage arising from reliance solely on website content,
            downtime, bugs, or issues caused by third‑party tools or providers.
          </p>
          <p className="text-foreground">
            Nothing here excludes rights under Australian Consumer Law that
            cannot be excluded. Where liability cannot be excluded, and to the
            extent permitted by law, our total liability is limited to the fees
            you have paid to us for the relevant services. You may find our{" "}
            <Link href="/trust-account-audit-checklist" className="underline text-brand-800 hover:text-brand-900">
              Trust Account Audit Checklist
            </Link>{" "}
            useful for compliance.
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.3 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <GlobeAltIcon className="size-4" />
            <span>Third‑party services and links</span>
          </div>
          <p className="text-foreground mb-3">
            We use service providers to operate the app, including hosting/CDN
            (e.g., Vercel), website analytics (e.g., Google Analytics), session
            analytics (e.g., Microsoft Clarity), database and authentication
            (e.g., Appwrite), and email delivery (e.g., AWS SES). We may also
            link to external websites.
          </p>
          <p className="text-foreground">
            We are not responsible for the content or policies of external
            websites. Review those sites’ terms and policies. Read more in our{" "}
            <Link href="/privacy-policy" className="underline text-brand-800 hover:text-brand-900">
              Privacy Policy
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.35 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <PencilSquareIcon className="size-4" />
            <span>Changes, governing law, and contact</span>
          </div>
          <p className="text-foreground mb-3">
            We may update these Terms of Service. When we do, we change the
            “last updated” date above.
          </p>
          <p className="text-foreground mb-3">
            These terms are governed by Australian law. Disputes are handled by
            the courts of New South Wales, Australia.
          </p>
          <p className="text-foreground">
            Questions can be sent to info@auditspro.com.au or via our{" "}
            <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">
              contact page
            </Link>
            .
          </p>
        </Motion>
      </main>
    </div>
  );
}
