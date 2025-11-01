# 🛠️ SEO Technical Implementation Guide

## 🚨 Critical Fixes - Immediate Implementation

### **1. Fix Missing Pricing Page in Sitemap**

**File:** `app/sitemap.ts`

**Current Issue:** Pricing page is missing from sitemap, preventing search engines from discovering it.

**Fix:**
```typescript
// Add this entry to the sitemap array (around line 20)
{
  url: `${baseUrl}/pricing`,
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.9, // High priority for conversion page
},
```

**Impact:** Immediate improvement in search engine discovery and indexing.

---

### **2. Enhanced Pricing Page Schema Implementation**

**File:** `app/(public-seo)/pricing/page.tsx`

**Current Issue:** Missing Product/Offer structured data for pricing tiers.

**Implementation:**

```typescript
// Add this structured data to the existing pricing page
const pricingSchemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Trust Account Audit Pricing",
  "description": "Transparent pricing for professional trust account audit services",
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Standard Trust Account Audit",
      "description": "Comprehensive trust account audit for small to medium practices",
      "offers": {
        "@type": "Offer",
        "price": "549",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2024-12-31",
        "seller": {
          "@type": "Organization",
          "name": "AuditsPro AU"
        }
      },
      "category": "Professional Services",
      "audience": {
        "@type": "Audience",
        "audienceType": "Real Estate Agents, Solicitors, Conveyancers"
      }
    },
    {
      "@type": "Product", 
      "position": 2,
      "name": "Premium Trust Account Audit",
      "description": "Advanced audit with additional compliance features",
      "offers": {
        "@type": "Offer",
        "price": "749",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2024-12-31"
      }
    },
    {
      "@type": "Product",
      "position": 3, 
      "name": "Enterprise Trust Account Audit",
      "description": "Comprehensive audit solution for large organizations",
      "offers": {
        "@type": "Offer",
        "price": "999",
        "priceCurrency": "AUD", 
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2024-12-31"
      }
    }
  ]
};

// Add FAQ Schema for pricing page
const pricingFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a trust account audit cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our trust account audits start from $549 + GST with transparent fixed pricing. Costs vary by state and audit complexity, with no hidden fees."
      }
    },
    {
      "@type": "Question", 
      "name": "Are there different prices for different states?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, pricing varies slightly by state due to different regulatory requirements. NSW, VIC, QLD, WA, SA, TAS, ACT, and NT each have specific compliance needs reflected in our pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in the audit price?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Our fixed price includes complete audit examination, compliance report, recommendations, and ongoing support. No additional fees for standard audit requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the audit process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most trust account audits are completed within 5-10 business days from receipt of all required documentation, depending on complexity and state requirements."
      }
    }
  ]
};
```

**Add to page component:**
```typescript
// In the pricing page component, add these script tags
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(pricingSchemaData),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(pricingFAQSchema),
  }}
/>
```

---

## 🏗️ SEO Utility System Implementation

### **1. Create SEO Helper Utilities**

**File:** `lib/seo-utils.ts` (Create new file)

```typescript
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
```

### **2. Structured Data Templates**

**File:** `lib/schema-templates.ts` (Create new file)

```typescript
// Organization schema (reusable)
export const organizationSchema = {
  "@type": "Organization",
  "name": "AuditsPro AU",
  "url": "https://auditspro.com.au",
  "logo": "https://auditspro.com.au/audits_pro_icon/apple-touch-icon.png",
  "description": "Professional trust account audit services for Australian businesses",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-2-8006-2335",
    "contactType": "customer service",
    "areaServed": "AU",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU"
  }
};

// Service schema template
export function generateServiceSchema(serviceData: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  audience: string;
  price: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "url": serviceData.url,
    "provider": organizationSchema,
    "serviceType": serviceData.serviceType,
    "audience": {
      "@type": "Audience",
      "audienceType": serviceData.audience,
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia",
    },
    "offers": {
      "@type": "Offer",
      "price": serviceData.price,
      "priceCurrency": "AUD",
      "description": `${serviceData.name} starting from $${serviceData.price} + GST`,
      "availability": "https://schema.org/InStock",
    },
    "serviceOutput": "ASIC Compliant Trust Account Audit Report",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
  };
}

// FAQ schema template
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Breadcrumb schema template
export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://auditspro.com.au${crumb.url}`
    }))
  };
}
```

---

## 📊 Dynamic Sitemap Enhancement

### **Enhanced Sitemap Implementation**

**File:** `app/sitemap.ts` (Update existing)

```typescript
import { MetadataRoute } from 'next'

// Configuration for different page types
const SERVICE_TYPES = [
  { slug: 'real-estate-agents', priority: 0.8 },
  { slug: 'solicitors', priority: 0.8 },
  { slug: 'accountants', priority: 0.8 },
  { slug: 'conveyancers', priority: 0.8 },
  { slug: 'mortgage-brokers', priority: 0.8 },
  { slug: 'financial-planners', priority: 0.8 },
  { slug: 'business-brokers', priority: 0.8 },
  { slug: 'smsf-trustees', priority: 0.8 },
];

const CORE_PAGES = [
  { url: '', priority: 1.0, changeFreq: 'monthly' as const },
  { url: '/services', priority: 0.9, changeFreq: 'weekly' as const },
  { url: '/pricing', priority: 0.9, changeFreq: 'weekly' as const }, // ADDED!
  { url: '/how-it-works', priority: 0.8, changeFreq: 'monthly' as const },
  { url: '/trust-account-audit-checklist', priority: 0.9, changeFreq: 'monthly' as const },
  { url: '/book-demo', priority: 0.8, changeFreq: 'monthly' as const },
  { url: '/about', priority: 0.7, changeFreq: 'monthly' as const },
  { url: '/contact', priority: 0.7, changeFreq: 'monthly' as const },
];

function generateSitemapEntry(
  url: string, 
  priority: number, 
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
): MetadataRoute.Sitemap[0] {
  const baseUrl = 'https://auditspro.com.au';
  return {
    url: url === '' ? baseUrl : `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Add core pages
  CORE_PAGES.forEach(page => {
    sitemap.push(generateSitemapEntry(page.url, page.priority, page.changeFreq));
  });

  // Add service pages
  SERVICE_TYPES.forEach(service => {
    sitemap.push(generateSitemapEntry(
      `/services/${service.slug}`, 
      service.priority, 
      'weekly'
    ));
  });

  // Future: Add location-based pages dynamically
  // LOCATIONS.forEach(location => {
  //   sitemap.push(generateSitemapEntry(
  //     `/locations/${location.slug}`, 
  //     0.7, 
  //     'monthly'
  //   ));
  // });

  return sitemap;
}
```

---

## 🎯 Performance Optimization

### **1. Image SEO Enhancement**

**Create:** `components/ui/seo-image.tsx`

```typescript
import Image from 'next/image';

interface SEOImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  caption?: string;
}

export function SEOImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className = '',
  caption 
}: SEOImageProps) {
  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-lg"
      />
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
```

### **2. Core Web Vitals Optimization**

**File:** `next.config.js` (Update existing)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Existing config...
  
  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression
  compress: true,
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // Headers for SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## 📋 Implementation Checklist

### **Phase 1: Critical Fixes (This Week)**

- [ ] Add pricing page to sitemap.ts
- [ ] Implement pricing schema structured data
- [ ] Add pricing FAQ schema
- [ ] Test schema validation with Google's Rich Results Test
- [ ] Submit updated sitemap to Google Search Console

### **Phase 2: Utility System (Next Week)**

- [ ] Create `lib/seo-utils.ts` with helper functions
- [ ] Create `lib/schema-templates.ts` with reusable schemas
- [ ] Refactor existing pages to use new utilities
- [ ] Create SEO image component
- [ ] Update next.config.js for performance

### **Phase 3: Advanced Features (Following Weeks)**

- [ ] Implement dynamic sitemap generation
- [ ] Create location-based SEO templates
- [ ] Add local business schema
- [ ] Implement advanced analytics tracking
- [ ] Create SEO monitoring dashboard

---

## 🔍 Testing & Validation

### **SEO Testing Tools:**

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema.org Validator:** https://validator.schema.org/
3. **Google PageSpeed Insights:** https://pagespeed.web.dev/
4. **Google Search Console:** Monitor indexing and performance

### **Validation Checklist:**

- [ ] All structured data validates without errors
- [ ] Sitemap.xml is accessible and valid
- [ ] Meta tags are properly formatted
- [ ] Images have appropriate alt text
- [ ] Core Web Vitals scores are green
- [ ] Mobile-first indexing compatibility

This technical implementation guide provides the exact code and steps needed to implement the SEO improvements identified in the strategy plan.