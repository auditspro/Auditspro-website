import Link from "next/link";
import { ManageCookiesButton } from "@/components/privacy/ManageCookiesButton";

export const metadata = {
  title: "Privacy Policy | AuditsPro",
  description:
    "Learn how AuditsPro collects, uses, and protects your data, including cookie usage and Google Analytics consent.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const year = new Date().getFullYear();
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-brand-950">Privacy Policy</h1>
        <p className="mt-3 text-slate-600">
          This Privacy Policy explains how AuditsPro ("we", "us", "our") collects,
          uses, and protects your information when you use our website and services.
          We are committed to compliance with the Australian Privacy Principles (APPs)
          under the Privacy Act 1988 (Cth).
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-medium text-brand-900">Information We Collect</h2>
          <p className="text-slate-600">
            We collect information you provide directly (for example, contact form
            submissions) and limited usage data through cookies where consent has
            been granted. We do not collect sensitive information unless required
            by law and with your explicit consent.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-medium text-brand-900">Cookies and Consent</h2>
          <p className="text-slate-600">
            We use a cookie banner to ask for your consent before loading optional
            cookies, such as those used by Google Analytics (GA4). If you accept,
            a consent flag is stored locally and GA4 may collect anonymised usage
            data to help us improve the website. If you reject, optional cookies
            are disabled and analytics will not load.
          </p>
          <div className="mt-4">
            <ManageCookiesButton />
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-medium text-brand-900">Google Analytics</h2>
          <p className="text-slate-600">
            When consent is granted, we load Google Analytics (GA4) using your
            browser’s consent status. GA4 helps us understand aggregated usage
            patterns. GA4 does not receive data when consent is denied.
          </p>
          <p className="text-slate-600">
            You can withdraw or change your consent at any time using the
            Manage Cookies button above.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-medium text-brand-900">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Provide and improve our audit services and website experience.</li>
            <li>Respond to your enquiries and provide customer support.</li>
            <li>Comply with legal obligations and regulatory requirements.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-medium text-brand-900">Your Rights</h2>
          <p className="text-slate-600">
            You have rights to access, correct, and request deletion of your
            personal information, subject to applicable law. To exercise these
            rights, please contact us using the details below.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-medium text-brand-900">Contact Us</h2>
          <p className="text-slate-600">
            For privacy enquiries, contact our team via the <Link href="/contact" className="text-brand-900 hover:underline">contact page</Link>.
          </p>
        </section>

        <p className="mt-10 text-xs text-slate-500">Last updated {year}.</p>
      </div>
    </div>
  );
}