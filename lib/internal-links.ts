/**
 * Internal linking strategy for SEO optimization
 * Defines strategic internal links between related pages
 */

export interface InternalLink {
  href: string;
  title: string;
  description: string;
  context: string; // Where this link should appear
}

export interface InternalLinkConfig {
  [pathname: string]: InternalLink[];
}

// Strategic internal linking configuration
export const internalLinkConfig: InternalLinkConfig = {
  "/pricing": [
    {
      href: "/services",
      title: "View All Services",
      description: "Explore our comprehensive trust account audit services for all professions",
      context: "services-cta"
    },
    {
      href: "/how-it-works",
      title: "How Our Audit Process Works",
      description: "Learn about our streamlined 4-step audit process",
      context: "process-reference"
    },
    {
      href: "/services/conveyancers",
      title: "Conveyancer Trust Account Audits",
      description: "Specialized audits for conveyancing professionals",
      context: "related-service"
    },
    {
      href: "/services/real-estate-agents",
      title: "Real Estate Agent Audits",
      description: "Regulatory compliant audits for real estate professionals",
      context: "related-service"
    }
  ],
  "/services": [
    {
      href: "/pricing",
      title: "View Transparent Pricing",
      description: "Fixed rates from $549 + GST with no hidden fees",
      context: "pricing-cta"
    },
    {
      href: "/how-it-works",
      title: "Our Audit Process",
      description: "Simple 4-step process with 5-10 day turnaround",
      context: "process-reference"
    },
    {
      href: "/contact",
      title: "Get Started Today",
      description: "Contact us for a free consultation and quote",
      context: "contact-cta"
    }
  ],
  "/how-it-works": [
    {
      href: "/pricing",
      title: "See Our Pricing",
      description: "Transparent fixed pricing for all audit services",
      context: "pricing-reference"
    },
    {
      href: "/services",
      title: "Browse Services",
      description: "Find the right audit service for your profession",
      context: "services-reference"
    },
    {
      href: "/book-demo",
      title: "Book a Demo",
      description: "See our audit platform in action",
      context: "demo-cta"
    }
  ],
  "/services/conveyancers": [
    {
      href: "/pricing",
      title: "Conveyancer Audit Pricing",
      description: "Fixed pricing from $549 + GST for conveyancer audits",
      context: "pricing-reference"
    },
    {
      href: "/services/real-estate-agents",
      title: "Real Estate Agent Audits",
      description: "Similar audit services for real estate professionals",
      context: "related-service"
    },
    {
      href: "/services/solicitors",
      title: "Solicitor Trust Account Audits",
      description: "Legal profession trust account audit services",
      context: "related-service"
    },
    {
      href: "/how-it-works",
      title: "Our Audit Process",
      description: "Learn how our streamlined audit process works",
      context: "process-reference"
    }
  ],
  "/services/real-estate-agents": [
    {
      href: "/pricing",
      title: "Real Estate Audit Pricing",
      description: "Transparent pricing for real estate trust account audits",
      context: "pricing-reference"
    },
    {
      href: "/services/conveyancers",
      title: "Conveyancer Audits",
      description: "Trust account audits for conveyancing professionals",
      context: "related-service"
    },
    {
      href: "/services/mortgage-brokers",
      title: "Mortgage Broker Audits",
      description: "NCCP compliant audits for mortgage brokers",
      context: "related-service"
    }
  ],
  "/about": [
    {
      href: "/services",
      title: "Our Services",
      description: "Comprehensive trust account audit services",
      context: "services-reference"
    },
    {
      href: "/pricing",
      title: "Transparent Pricing",
      description: "Fixed rates with no hidden fees",
      context: "pricing-reference"
    },
    {
      href: "/contact",
      title: "Contact Us",
      description: "Get in touch with our expert team",
      context: "contact-cta"
    }
  ],
  "/contact": [
    {
      href: "/services",
      title: "Browse Our Services",
      description: "Find the right audit service for your needs",
      context: "services-reference"
    },
    {
      href: "/pricing",
      title: "View Pricing",
      description: "See our transparent fixed pricing",
      context: "pricing-reference"
    },
    {
      href: "/how-it-works",
      title: "How It Works",
      description: "Learn about our simple audit process",
      context: "process-reference"
    }
  ]
};

/**
 * Get internal links for a specific page and context
 */
export function getInternalLinks(pathname: string, context?: string): InternalLink[] {
  const pageLinks = internalLinkConfig[pathname] || [];
  
  if (context) {
    return pageLinks.filter(link => link.context === context);
  }
  
  return pageLinks;
}

/**
 * Get related service links for service pages
 */
export function getRelatedServiceLinks(currentService: string): InternalLink[] {
  const allServiceLinks = Object.entries(internalLinkConfig)
    .filter(([path]) => path.startsWith('/services/') && path !== currentService)
    .flatMap(([, links]) => links.filter(link => link.context === 'related-service'));
  
  return allServiceLinks.slice(0, 3); // Limit to 3 related services
}

/**
 * Generate contextual internal links for better SEO
 */
export function generateContextualLinks(pathname: string): {
  pricingLinks: InternalLink[];
  serviceLinks: InternalLink[];
  processLinks: InternalLink[];
  contactLinks: InternalLink[];
} {
  const allLinks = getInternalLinks(pathname);
  
  return {
    pricingLinks: allLinks.filter(link => link.context === 'pricing-reference' || link.context === 'pricing-cta'),
    serviceLinks: allLinks.filter(link => link.context === 'services-reference' || link.context === 'related-service'),
    processLinks: allLinks.filter(link => link.context === 'process-reference'),
    contactLinks: allLinks.filter(link => link.context === 'contact-cta')
  };
}