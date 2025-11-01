import { Metadata } from 'next';

// Base SEO configuration interface
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  noIndex?: boolean;
  structuredData?: any[];
}

// Generate standardized metadata
export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = 'https://auditspro.com.au';
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: "AuditsPro AU" }],
    publisher: "AuditsPro AU",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: config.canonical || '',
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.canonical || '',
      siteName: "AuditsPro AU",
      images: [
        {
          url: config.ogImage || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [config.twitterImage || config.ogImage || "/og-image.jpg"],
    },
    robots: {
      index: !config.noIndex,
      follow: !config.noIndex,
      googleBot: {
        index: !config.noIndex,
        follow: !config.noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Service-specific SEO templates
export function generateServiceSEO(serviceName: string, serviceSlug: string): SEOConfig {
  return {
    title: `${serviceName} Trust Account Audit | Expert Auditors | AuditsPro AU`,
    description: `Professional ${serviceName.toLowerCase()} trust account audits. ASIC compliant, fixed pricing from $549 + GST, fast turnaround. Expert auditors across Australia.`,
    keywords: [
      `${serviceName.toLowerCase()} trust account audit`,
      `${serviceName.toLowerCase()} audit services`,
      'ASIC compliance audit',
      'professional audit services australia',
      `${serviceName.toLowerCase()} compliance`,
      'trust account auditor',
    ],
    canonical: `/services/${serviceSlug}`,
    ogImage: `/og-${serviceSlug}-audit.jpg`,
  };
}

// Pricing page SEO
export function generatePricingSEO(): SEOConfig {
  return {
    title: "Trust Account Audit Pricing | Fixed Rates from $549 | AuditsPro AU",
    description: "Transparent trust account audit pricing. Fixed rates from $549 + GST with no hidden fees. State-specific pricing for NSW, VIC, QLD, WA, SA, TAS, ACT, NT.",
    keywords: [
      'trust account audit cost',
      'audit pricing australia',
      'trust account audit fees',
      'ASIC audit cost',
      'professional audit pricing',
      'fixed price audit services',
    ],
    canonical: '/pricing',
    ogImage: '/og-pricing.jpg',
  };
}

// Location-based SEO (for future expansion)
export function generateLocationSEO(city: string, state: string): SEOConfig {
  return {
    title: `Trust Account Audits ${city} | Local Experts | AuditsPro AU`,
    description: `Professional trust account audits in ${city}, ${state}. Local expertise, ASIC compliance, fixed pricing. Serving ${city} businesses with expert audit services.`,
    keywords: [
      `trust account audit ${city}`,
      `${city} audit services`,
      `${state} trust account audit`,
      `auditor ${city}`,
      `ASIC compliance ${city}`,
    ],
    canonical: `/locations/${city.toLowerCase().replace(' ', '-')}`,
  };
}

// Generate breadcrumb data for SEO
export function generateBreadcrumbs(items: Array<{label: string, href: string}>) {
  return items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `https://auditspro.com.au${item.href}`
  }));
}

// Generate canonical URL
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://auditspro.com.au';
  return path.startsWith('/') ? `${baseUrl}${path}` : `${baseUrl}/${path}`;
}

// SEO-friendly slug generator
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

// Meta description optimizer (ensures optimal length)
export function optimizeMetaDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) {
    return description;
  }
  
  // Truncate at word boundary
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

// Title optimizer (ensures optimal length)
export function optimizeTitle(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) {
    return title;
  }
  
  // Truncate at word boundary
  const truncated = title.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}