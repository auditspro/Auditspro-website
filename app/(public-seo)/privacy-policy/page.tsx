import Link from "next/link";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import {
  BuildingOfficeIcon,
  IdentificationIcon,
  ChartBarSquareIcon,
  CircleStackIcon,
  ScaleIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  ArchiveBoxIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  EyeSlashIcon,
  UserGroupIcon,
  PencilSquareIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Privacy Policy | AuditsPro",
  description:
    "Our privacy practices covering contact forms, accounts, analytics (Google Analytics), session analytics (Microsoft Clarity), email delivery, Appwrite database/auth, and Vercel hosting.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40">
      <SetBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
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
              <ShieldCheckIcon className="size-4 text-brand-700" />
              <span>Privacy & Data</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950">
              Privacy Policy
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              How we collect, use, protect, and share information in plain language.
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
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <BuildingOfficeIcon className="size-4" />
            <span>Who we are</span>
          </div>
          <p className="text-foreground">
            <Link href="/" className="text-brand-800 hover:text-brand-900 font-medium">AuditsPro</Link> is a web application that helps Australian businesses request and manage <Link href="/services" className="underline text-brand-800 hover:text-brand-900">trust account audits</Link>. We operate in Australia. Business name: AuditsPro AU. ABN: 40660169844.
            Contact us at info@auditspro.com.au.
          </p>
          <p className="text-foreground mt-3">
            Learn more on our{" "}
            <Link href="/about" className="underline text-brand-800 hover:text-brand-900">
              About
            </Link>{" "}
            and{" "}
            <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">
              Contact
            </Link>{" "}
            pages.
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.05 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <IdentificationIcon className="size-4" />
            <span>Personal information we collect</span>
          </div>
          <p className="text-foreground mb-3">
            We collect information to operate the service and respond to your requests. When you
            contact us, this may include your name, email, phone, company, message, and any
            scheduling or service details you provide.
          </p>
          <p className="text-foreground mb-3">
            If you <Link href="/register" className="underline text-brand-800 hover:text-brand-900">create an account</Link> or <Link href="/subscribe" className="underline text-brand-800 hover:text-brand-900">subscribe</Link> to updates, we may collect your name, email,
            password, and basic profile or business details needed to provide the service, as well
            as your email preferences if you sign up for newsletters.
          </p>
          <p className="text-foreground mb-3">
            We also collect technical information to keep the site reliable and improve your
            experience. This can include page views, referring URLs, device and browser
            information, approximate location from IP address, cookies or similar identifiers, and
            server logs. Our app uses Appwrite for database and authentication, SMTP email delivery
            for notifications, Google Analytics for website analytics, and Microsoft Clarity for
            session analytics. These providers process limited data on our behalf.
          </p>
          <p className="text-foreground">
            When you subscribe via email forms, we store your email and any preferences you choose.
            You can unsubscribe at any time.
          </p>
          <p className="text-foreground mt-3">
            See our{" "}
            <Link href="/email-policy" className="underline text-brand-800 hover:text-brand-900">
              Email Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.1 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ChartBarSquareIcon className="size-4" />
            <span>How we use your information</span>
          </div>
          <p className="text-foreground">
            We use your information to respond to enquiries and <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">provide customer support</Link>, deliver
            and improve the <Link href="/services" className="underline text-brand-800 hover:text-brand-900">service</Link> and features you use, measure usage and performance to
            troubleshoot and enhance the site, send marketing emails or newsletters only if you
            have subscribed, and protect security, prevent fraud, and enforce acceptable use.
          </p>
          <p className="text-foreground mt-3">
            Details are outlined in our{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.15 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <CircleStackIcon className="size-4" />
            <span>Cookies and similar technologies</span>
          </div>
          <p className="text-foreground">
            Our site uses cookies and similar technologies for basic functionality, remembering
            choices, and analytics. We show a cookie banner where you can give or refuse consent.
            Non‑essential cookies and analytics only load after you consent. Where session
            analytics tools are enabled, they may capture interaction events to help us improve
            usability. You can control cookies in your browser settings.
          </p>
          <p className="text-foreground mt-3">
            For more information, review our{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.2 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ScaleIcon className="size-4" />
            <span>Legal bases / consent</span>
          </div>
          <p className="text-foreground">
            Some processing is necessary to run the service. Other processing, such as sending
            marketing emails or using non‑essential analytics, is based on your consent. You can
            withdraw consent at any time, for example by using unsubscribe links in marketing
            emails or by changing your cookie preferences.
          </p>
          <p className="text-foreground mt-3">
            Manage preferences via{" "}
            <Link href="/subscribe" className="underline text-brand-800 hover:text-brand-900">
              Subscribe
            </Link>{" "}
            and{" "}
            <Link href="/unsubscribe" className="underline text-brand-800 hover:text-brand-900">
              Unsubscribe
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.25 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ArrowPathIcon className="size-4" />
            <span>Sharing your information</span>
          </div>
          <p className="text-foreground">
            We share limited information with service providers who help us operate the app,
            including hosting and CDN (e.g., Vercel), website analytics (e.g., Google Analytics),
            session analytics (e.g., Microsoft Clarity), database and authentication (e.g.,
            Appwrite), and email delivery via SMTP (e.g., configured mail provider). These
            providers act as processors and may only use the data to perform services for us.
          </p>
          <p className="text-foreground mt-3">
            See third‑party service details in{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.3 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <GlobeAltIcon className="size-4" />
            <span>International transfers</span>
          </div>
          <p className="text-foreground">
            Data may be stored or processed in countries where our providers operate. We take
            reasonable steps to protect your information, and where possible we configure regional
            storage.
          </p>
          <p className="text-foreground mt-3">
            Learn more in our{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.35 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ArchiveBoxIcon className="size-4" />
            <span>Data retention</span>
          </div>
          <p className="text-foreground">
            We keep information for as long as needed to provide the service and meet obligations,
            then delete or de‑identify it. <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">Contact submissions</Link> are retained to follow up on your
            request and for internal record‑keeping.
          </p>
          <p className="text-foreground mt-3">
            Retention and deletion practices are described in{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.4 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <CheckCircleIcon className="size-4" />
            <span>Your rights and choices</span>
          </div>
          <p className="text-foreground">
            You can <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">contact us</Link> to access, update, or delete your information where possible. Manage
            emails via{" "}
            <Link href="/unsubscribe" className="underline text-brand-800 hover:text-brand-900">
              Unsubscribe
            </Link>{" "}
            or{" "}
            <Link href="/subscribe" className="underline text-brand-800 hover:text-brand-900">
              Subscribe
            </Link>
            . You can also manage cookies through your browser settings or our preferences banner.
          </p>
          <p className="text-foreground mt-3">
            For email communications, refer to our{" "}
            <Link href="/email-policy" className="underline text-brand-800 hover:text-brand-900">
              Email Policy
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.45 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <ShieldCheckIcon className="size-4" />
            <span>Security</span>
          </div>
          <p className="text-foreground">
            We use reasonable technical and organisational measures to protect your information,
            including encryption in transit via HTTPS and access controls. No system is perfectly
            secure, but we work to reduce risk and respond quickly to issues.
          </p>
          <p className="text-foreground mt-3">
            See security and liability terms in{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.5 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <EyeSlashIcon className="size-4" />
            <span>NDIS / sensitive information</span>
          </div>
          <p className="text-foreground">
            If we later collect any information about clients’ health or support needs, we treat it
            as sensitive and limit access. We only collect what is necessary and apply stricter
            controls to safeguard this information.
          </p>
          <p className="text-foreground mt-3">
            If you have questions, please{" "}
            <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">
              contact us
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.55 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <UserGroupIcon className="size-4" />
            <span>Children’s privacy</span>
          </div>
          <p className="text-foreground">
            Our service is designed for business users and is not intended for children under 18. If
            you believe a minor has provided personal information, please <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">contact us</Link> and we will
            take appropriate steps.
          </p>
          <p className="text-foreground mt-3">
            Related rules are covered in{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.6 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <PencilSquareIcon className="size-4" />
            <span>Changes to this policy</span>
          </div>
          <p className="text-foreground">
            We may update this Privacy Policy. When we do, we change the “last updated” date above.
            Significant changes may also be highlighted within the app.
          </p>
          <p className="text-foreground mt-3">
            For site‑wide rules, see{" "}
            <Link href="/terms" className="underline text-brand-800 hover:text-brand-900">
              Terms of Service
            </Link>
            .
          </p>
        </Motion>

        <Motion
          {...motionVariants.fadeInUp}
          viewport={motionViewport}
          transition={{ ...motionTransitions.smooth, delay: 0.65 }}
          className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/60 px-3 py-1.5 text-sm font-medium text-brand-950 mb-3">
            <EnvelopeIcon className="size-4" />
            <span>Contact us</span>
          </div>
          <p className="text-foreground mb-3">
            Questions about privacy can be sent to info@auditspro.com.au or through our{" "}
            <Link href="/contact" className="underline text-brand-800 hover:text-brand-900">
              contact page
            </Link>
            .
          </p>
          <p className="text-sm text-foreground">
            This policy is general information only and does not constitute legal advice.
          </p>
        </Motion>
      </main>
    </div>
  );
}
