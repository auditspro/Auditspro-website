export const metadata = {
  title: "Terms of Service | AuditsPro",
  description:
    "Plain-language terms for using the AuditsPro website and app, including acceptable use, accounts, intellectual property, disclaimers, third-party services, and governing law.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex items-center gap-3">
        <div className="trust-badge text-foreground">
          <span>Terms</span>
        </div>
        <span className="text-sm text-foreground">Last updated: 2 December 2025</span>
      </div>

      <h1 className="text-3xl font-semibold mb-6 text-foreground">Terms of Service</h1>

      <section className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Introduction</h2>
        <p className="text-foreground mb-3">
          This page explains the rules for using the AuditsPro website and app. By using our site or services, you agree to these terms. For information about how we handle personal data, see our
          {" "}
          <a href="/privacy-policy" className="underline text-foreground">Privacy Policy</a>.
        </p>
      </section>

      <section className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Use of our site</h2>
        <ul className="list-disc pl-6 text-foreground">
          <li className="mb-2">Use the site only for lawful purposes.</li>
          <li className="mb-2">Do not attempt to hack, bypass security, or overload the service.</li>
          <li className="mb-2">Do not copy our content, branding, or software without written permission.</li>
          <li className="mb-2">Do not scrape, spam, or interfere with normal operation.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Accounts, subscriptions and emails</h2>
        <p className="text-foreground mb-3">
          If you create an account or subscribe to emails, you must provide accurate information and keep your login details confidential. You are responsible for activity under your account.
        </p>
        <p className="text-foreground mb-3">
          We may suspend or close accounts that breach these terms, cause harm, or interfere with the service.
        </p>
        <p className="text-foreground">
          Marketing emails are optional. You can unsubscribe at any time using the link in each email or by contacting us.
        </p>
      </section>

      <section className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Intellectual property</h2>
        <p className="text-foreground mb-3">
          Our logo, design, text, graphics, and software belong to us or our licensors. You may view and use our site for your own business purposes, but you may not reuse, reproduce, or distribute our content commercially without our written permission.
        </p>
        <p className="text-foreground">
          Trademarks and other brand elements must not be used without consent.
        </p>
      </section>

      <section className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Disclaimers and limits of liability</h2>
        <p className="text-foreground mb-3">
          The site and app are provided on an “as is” basis. We aim to keep information accurate and the service available, but we do not guarantee uninterrupted access, error-free operation, or that content is complete or current.
        </p>
        <p className="text-foreground mb-3">
          To the maximum extent permitted by law, we are not responsible for loss or damage arising from reliance solely on website content, downtime, bugs, or issues caused by third‑party tools or providers.
        </p>
        <p className="text-foreground">
          Nothing in these terms excludes, restricts, or modifies any rights or remedies you may have under the Australian Consumer Law that cannot be excluded. Where liability cannot be excluded, and to the extent permitted by law, our total liability is limited to the fees you have paid to us for the relevant services.
        </p>
      </section>

      <section className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 mb-6">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Third‑party services and links</h2>
        <p className="text-foreground mb-3">
          We use third‑party services to operate our site and app (for example: hosting/CDN, analytics, session analytics, email delivery, authentication, and database). We may also link to external websites.
        </p>
        <p className="text-foreground">
          We are not responsible for the content or policies of external websites. You should review those sites’ own terms and policies.
        </p>
      </section>

      <section className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Changes, governing law, and contact</h2>
        <p className="text-foreground mb-3">
          We may update these Terms of Service from time to time. When we do, we will change the “last updated” date above.
        </p>
        <p className="text-foreground mb-3">
          These terms are governed by Australian law. Disputes are handled by the courts of New South Wales, Australia.
        </p>
        <p className="text-foreground">
          Questions about these terms can be sent to info@auditspro.com.au.
        </p>
      </section>
    </main>
  );
}

