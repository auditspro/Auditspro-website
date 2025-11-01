// Organization schema (reusable across all pages)
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
    "streetAddress": "3 Albert Coates Lane",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "postalCode": "3000",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://www.linkedin.com/company/auditspro-au",
    "https://twitter.com/auditsproau"
  ]
};

// Service schema template
export interface ServiceSchemaData {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  audience: string;
  price: string;
  category?: string;
  additionalOffers?: Array<{
    name: string;
    price: string;
    description: string;
  }>;
}

export function generateServiceSchema(serviceData: ServiceSchemaData) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "url": serviceData.url,
    "provider": organizationSchema,
    "serviceType": serviceData.serviceType,
    "category": serviceData.category || "Professional Services",
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
      "priceValidUntil": "2024-12-31",
      "seller": organizationSchema
    },
    "serviceOutput": "ASIC Compliant Trust Account Audit Report",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
  };

  // Add additional offers if provided
  if (serviceData.additionalOffers && serviceData.additionalOffers.length > 0) {
    const additionalOffers = serviceData.additionalOffers.map(offer => ({
      "@type": "Offer",
      "name": offer.name,
      "price": offer.price,
      "priceCurrency": "AUD",
      "description": offer.description,
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2024-12-31",
      "seller": organizationSchema
    }));

    // Convert single offer to array and add additional offers
    baseSchema.offers = [baseSchema.offers, ...additionalOffers];
  }

  return baseSchema;
}

// Product schema template for pricing pages
export interface ProductSchemaData {
  name: string;
  description: string;
  price: string;
  category: string;
  audience: string;
  position?: number;
  features?: string[];
}

export function generateProductSchema(productData: ProductSchemaData) {
  return {
    "@type": "Product",
    "position": productData.position || 1,
    "name": productData.name,
    "description": productData.description,
    "category": productData.category,
    "offers": {
      "@type": "Offer",
      "price": productData.price,
      "priceCurrency": "AUD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2024-12-31",
      "seller": organizationSchema,
      "description": `Fixed price includes complete audit examination, compliance report, and recommendations`
    },
    "audience": {
      "@type": "Audience",
      "audienceType": productData.audience
    },
    "additionalProperty": productData.features ? productData.features.map(feature => ({
      "@type": "PropertyValue",
      "name": "Feature",
      "value": feature
    })) : undefined
  };
}

// FAQ schema template
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
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
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
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

// Local Business schema template (for future location pages)
export interface LocalBusinessData {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  telephone: string;
  email?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export function generateLocalBusinessSchema(businessData: LocalBusinessData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessData.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.address.streetAddress,
      "addressLocality": businessData.address.addressLocality,
      "addressRegion": businessData.address.addressRegion,
      "postalCode": businessData.address.postalCode,
      "addressCountry": "AU"
    },
    "telephone": businessData.telephone,
    "email": businessData.email,
    "url": "https://auditspro.com.au",
    "openingHoursSpecification": businessData.openingHours ? businessData.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(' ')[0],
      "opens": hours.split(' ')[1],
      "closes": hours.split(' ')[2]
    })) : undefined,
    "geo": businessData.geo ? {
      "@type": "GeoCoordinates",
      "latitude": businessData.geo.latitude,
      "longitude": businessData.geo.longitude
    } : undefined,
    "sameAs": [
      "https://www.linkedin.com/company/auditspro-au",
      "https://twitter.com/auditsproau"
    ]
  };
}

// Website schema template (for homepage)
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AuditsPro AU",
    "url": "https://auditspro.com.au",
    "description": "Professional trust account audit services across Australia",
    "publisher": organizationSchema,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://auditspro.com.au/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

// Review/Rating schema template (for testimonials)
export interface ReviewData {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  profession?: string;
}

export function generateReviewSchema(reviews: ReviewData[]) {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Trust Account Audit Services",
    "provider": organizationSchema,
    "aggregateRating": aggregateRating,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author,
        "jobTitle": review.profession
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };
}

// Pricing schema template for comprehensive pricing pages
export interface PricingTier {
  name: string;
  description: string;
  price: string;
  category: string;
  audience: string;
  features?: string[];
}

export function generatePricingSchema(pricingTiers: PricingTier[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Trust Account Audit Pricing",
    "description": "Transparent pricing for professional trust account audit services across Australia",
    "itemListElement": pricingTiers.map((tier, index) => 
      generateProductSchema({
        ...tier,
        position: index + 1
      })
    )
  };
}