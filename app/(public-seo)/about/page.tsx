import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ui/contact-form";
import { CrossPageCTA } from "@/components/ui/cross-page-cta";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";
import { PageWrapper } from "@/components/ui/page-wrapper";
import {
  MapPin,
  Clock,
  CreditCard,
  Award,
  Users,
  Shield,
  MessageCircle,
  CheckCircle2,
  Grip,
} from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title: "About AuditsPro AU - Expert Trust Account Auditing & Compliance Services",
  description: "Learn about AuditsPro AU, Australia's leading trust account auditing firm. Our certified auditors provide comprehensive compliance services, financial reviews, and expert guidance for legal and real estate professionals.",
  keywords: [
    "about audits pro australia",
    "trust account auditing experts",
    "certified auditors australia",
    "compliance specialists",
    "professional auditing services",
    "legal trust account experts",
    "real estate audit specialists",
  ],
  authors: [{ name: "AuditsPro AU" }],
  creator: "AuditsPro AU",
  publisher: "AuditsPro AU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://auditspro.com.au"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AuditsPro AU - Expert Trust Account Auditing Services",
    description: "Discover AuditsPro AU's expertise in trust account auditing and compliance. Our certified team provides professional auditing services across Australia.",
    url: "/about",
    siteName: "AuditsPro AU",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About AuditsPro AU - Professional Auditing Team",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AuditsPro AU - Expert Trust Account Auditing",
    description: "Learn about Australia's leading trust account auditing firm and our commitment to compliance excellence.",
    images: ["/twitter-about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AuditsPro AU",
  description: "About page for AuditsPro AU, Australia's leading trust account auditing and compliance services firm",
  url: "https://auditspro.com.au/about",
  mainEntity: {
    "@type": "Organization",
    name: "AuditsPro AU",
    description: "Professional trust account auditing and compliance services across Australia",
    url: "https://auditspro.com.au",
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Albert Coates Lane",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-1300-AUDITS",
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "AU",
    },
    sameAs: [
      "https://linkedin.com/company/auditspro-au",
      "https://twitter.com/auditsproau",
    ],
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "/about",
      },
    ],
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
      ]}
      jsonLdData={[breadcrumbJsonLd, jsonLd]}
    >
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container relative mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
                className="text-center lg:text-left"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-950 mb-3">
                    <Grip className="size-4" />
                    <span className="tracking-widest">About us</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950">
                    About AuditsPro AU
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
                    Australia&apos;s leading trust account auditing specialists,
                    providing professional compliance services with{" "}
                    <Link
                      href="/contact"
                      className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
                    >
                      24-hour response times
                    </Link>{" "}
                    and 5-10 day completion targets.
                  </p>
                </div>
              </Motion>

              {/* Image Column */}
              <Motion
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={{ ...motionTransitions.smooth, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform scale-110 opacity-20"></div>
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="/images/about-audits.png"
                      alt="About AuditsPro AU - Professional Auditing Services"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-60"></div>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="container relative mx-auto px-4 sm:px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Fully Compliant",
                desc: "All reports meet Australian regulatory requirements and compliance standards",
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                desc: "24-hour response time with audit completion in 5-10 business days",
              },
              {
                icon: CreditCard,
                title: "Fixed Pricing",
                desc: "Transparent pricing from $549 + GST with no hidden fees or surprises",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Certified auditors with extensive trust account compliance experience",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Motion
                key={title}
                className="rounded-xl border border-blue-200 bg-blue-50 backdrop-blur p-6"
                {...motionVariants.fadeInUp}
                viewport={motionViewport}
                transition={motionTransitions.smooth}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                  <Icon className="size-4" />
                  <span>{title}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </Motion>
            ))}
          </div>
        </section>



        {/* Our Story Section */}
        <section className="container relative mx-auto px-4 sm:px-6 pb-16">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white backdrop-blur p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-6">
                  Our Story
                </h2>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Founded in 2020, AuditsPro AU was established to address the
                  critical need for specialized trust account auditing services
                  in Australia. Our founders, certified auditors with decades of
                  combined experience, recognized that legal and real estate
                  professionals required a partner who truly understood the
                  complexities of trust account compliance.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Starting as a dedicated team of compliance specialists,
                  we&apos;ve grown to become Australia&apos;s most trusted trust
                  account auditing firm, serving over 500 clients nationwide
                  with our commitment to excellence and regulatory compliance.
                </p>
              </Motion>

              <Motion
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-xl border border-blue-200 bg-white backdrop-blur p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-950 mb-4">
                    <svg
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Our Mission
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    To provide exceptional trust account auditing services that
                    ensure regulatory compliance, build client confidence, and protect
                    the interests of professionals and their stakeholders across
                    Australia.
                  </p>
                </div>
              </Motion>
            </div>
          </div>
        </section>

        {/* Cross-Page CTA */}
        <CrossPageCTA variant="general-to-contact" />

        {/* Contact Form Section */}
        <section className="container relative mx-auto px-4 sm:px-6 pb-16">
          <div className="rounded-2xl border border-blue-200 bg-white backdrop-blur p-8">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm
                title="Get Your Trust Account Audit Quote"
                subtitle="Ready to ensure your trust accounts are regulatory compliant? Get your personalized quote with 24-hour response guarantee."
                variant="contact"
                showTitle={true}
              />
            </Motion>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
