// app/layout.tsx
import { Outfit, Manrope } from 'next/font/google';
import "./globals.css";
// 👇 Import Google Analytics
import { GoogleAnalytics } from '@/components/analytics/google-analytics';

export const metadata = {
  metadataBase: new URL("https://auditspro.com.au"), // ✂️ Removed trailing spaces
  title: "AuditsPro - Professional Trust Account Audits Australia",
  description: "Professional trust account audit services for real estate agents, conveyancers, solicitors and accountants. Fixed pricing from $549 + GST with fast turnaround.",
  keywords: "trust account audit, regulatory compliance, real estate audit, conveyancer audit, solicitor audit, accountant audit, Australia",
  manifest: "/audits_pro_icon/site.webmanifest",
  icons: {
    icon: [
      { url: "/audits_pro_icon/favicon.ico", sizes: "any" },
      { url: "/audits_pro_icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/audits_pro_icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/audits_pro_icon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://auditspro.com.au", // ✂️ Removed trailing spaces
    siteName: "AuditsPro",
    title: "AuditsPro - Professional Trust Account Audits Australia",
    description: "Professional trust account audit services for real estate agents, conveyancers, solicitors and accountants. Fixed pricing from $549 + GST with fast turnaround.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AuditsPro - Professional Trust Account Audits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuditsPro - Professional Trust Account Audits Australia",
    description: "Professional trust account audit services for real estate agents, conveyancers, solicitors and accountants. Fixed pricing from $549 + GST with fast turnaround.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://auditspro.com.au", // ✂️ Removed trailing spaces
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400','500','600'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400','500','600'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${manrope.variable}`}>
      <head>
        {/* Preconnect to external domains — also cleaned up trailing spaces */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured data (Schema.org) — cleaned URLs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AuditsPro AU",
              alternateName: "AuditsPro",
              url: "https://auditspro.com.au"
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AuditsPro AU",
              url: "https://auditspro.com.au",
              logo: "https://auditspro.com.au/audits_pro_icon/apple-touch-icon.png",
              description: "Professional trust account audit services for Australian businesses",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+61-2-8006-2335",
                contactType: "customer service",
                areaServed: "AU",
                availableLanguage: "English"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "AU"
              },
              sameAs: ["https://auditspro.com.au"]
            }),
          }}
        />
      </head>
      <body className="min-h-dvh bg-white text-black/90 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all"
        >
          Skip to main content
        </a>
        
        <div id="main-content">
          {children}
        </div>

        {/* ✅ Google Analytics — now added */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}