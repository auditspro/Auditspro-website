import { BreadcrumbItem } from "@/components/ui/breadcrumbs";

/**
 * Server-side breadcrumb generation for SEO optimization
 * Generates breadcrumbs based on pathname without requiring client-side JavaScript
 */

export interface BreadcrumbConfig {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

// Static breadcrumb configuration for all routes
export const breadcrumbConfig: BreadcrumbConfig = {
  "/": { label: "Home" },
  "/about": { label: "About", parent: "/" },
  "/services": { label: "Services", parent: "/" },
  "/services/real-estate-agents": { label: "Real Estate Agents", parent: "/services" },
  "/services/conveyancers": { label: "Conveyancers", parent: "/services" },
  "/services/solicitors": { label: "Solicitors", parent: "/services" },
  "/services/accountants": { label: "Accountants", parent: "/services" },
  "/services/mortgage-brokers": { label: "Mortgage Brokers", parent: "/services" },
  "/services/smsf-trustees": { label: "SMSF Trustees", parent: "/services" },
  "/services/business-brokers": { label: "Business Brokers", parent: "/services" },
  "/services/financial-planners": { label: "Financial Planners", parent: "/services" },
  "/pricing": { label: "Pricing", parent: "/" },
  "/how-it-works": { label: "How It Works", parent: "/" },
  "/contact": { label: "Contact", parent: "/" },
  "/trust-account-audit-checklist": { label: "Trust Account Audit Checklist", parent: "/" },
  "/book-demo": { label: "Book Demo", parent: "/" },
  "/login": { label: "Login", parent: "/" },
  "/register": { label: "Register", parent: "/" },
  "/dashboard": { label: "Dashboard", parent: "/" },
};

/**
 * Generate breadcrumbs for a given pathname
 * @param pathname - The current page pathname
 * @returns Array of breadcrumb items
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Always start with home if not on home page
  if (pathname !== "/") {
    breadcrumbs.push({ label: "Home", href: "/" });
  }
  
  // Build breadcrumb chain
  const buildChain = (path: string): void => {
    const config = breadcrumbConfig[path];
    if (!config) return;
    
    // Add parent breadcrumbs first (recursive)
    if (config.parent && config.parent !== "/") {
      buildChain(config.parent);
      const parentConfig = breadcrumbConfig[config.parent];
      if (parentConfig && !breadcrumbs.some(b => b.href === config.parent)) {
        breadcrumbs.push({ label: parentConfig.label, href: config.parent });
      }
    }
  };
  
  // Build the chain for current path
  buildChain(pathname);
  
  // Add current page (without href for last item)
  const currentConfig = breadcrumbConfig[pathname];
  if (currentConfig) {
    breadcrumbs.push({ label: currentConfig.label });
  }
  
  return breadcrumbs;
}

/**
 * Generate structured data for breadcrumbs
 * @param pathname - The current page pathname
 * @param baseUrl - The base URL of the site
 * @returns JSON-LD structured data for breadcrumbs
 */
export function generateBreadcrumbStructuredData(pathname: string, baseUrl: string = "https://auditspro.com.au") {
  const breadcrumbs = generateBreadcrumbs(pathname);
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.label,
      item: breadcrumb.href ? `${baseUrl}${breadcrumb.href}` : `${baseUrl}${pathname}`,
    })),
  };
}

/**
 * Get page title from breadcrumb configuration
 * @param pathname - The current page pathname
 * @returns Page title or undefined if not found
 */
export function getPageTitle(pathname: string): string | undefined {
  return breadcrumbConfig[pathname]?.label;
}