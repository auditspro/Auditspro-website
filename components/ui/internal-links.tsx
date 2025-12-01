import Link from "next/link";
import { ArrowRightIcon as ArrowRight } from "@heroicons/react/24/outline";
import { getInternalLinks, generateContextualLinks, type InternalLink } from "@/lib/internal-links";
import { Motion, motionVariants } from "./motion";

interface InternalLinksProps {
  pathname: string;
  context?: string;
  className?: string;
  title?: string;
  maxLinks?: number;
}

/**
 * Strategic internal links component for SEO optimization
 * Displays contextual internal links to improve site navigation and SEO
 */
export function InternalLinks({ 
  pathname, 
  context, 
  className = "", 
  title = "Related Pages",
  maxLinks = 4 
}: InternalLinksProps) {
  const links = context 
    ? getInternalLinks(pathname, context)
    : getInternalLinks(pathname).slice(0, maxLinks);

  if (links.length === 0) {
    return null;
  }

  return (
    <Motion
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={motionVariants.fadeInUp}
      className={`bg-gradient-to-br from-brand-50 to-brand-100/50 rounded-2xl p-8 ${className}`}
    >
      <Motion variants={motionVariants.fadeInUp}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      </Motion>
      
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link, index) => (
          <Motion
            key={link.href}
            variants={motionVariants.fadeInUp}
            custom={index}
          >
            <Link
              href={link.href}
              className="group block p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-700 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2 mt-1" />
              </div>
            </Link>
          </Motion>
        ))}
      </div>
    </Motion>
  );
}

interface ContextualLinksProps {
  pathname: string;
  className?: string;
}

/**
 * Contextual links component that displays different types of internal links
 * organized by context (pricing, services, process, contact)
 */
export function ContextualLinks({ pathname, className = "" }: ContextualLinksProps) {
  const { pricingLinks, serviceLinks, processLinks, contactLinks } = generateContextualLinks(pathname);
  
  const hasLinks = pricingLinks.length > 0 || serviceLinks.length > 0 || processLinks.length > 0 || contactLinks.length > 0;
  
  if (!hasLinks) {
    return null;
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {pricingLinks.length > 0 && (
        <InternalLinks 
          pathname={pathname} 
          context="pricing-cta" 
          title="Pricing Information"
          maxLinks={2}
        />
      )}
      
      {serviceLinks.length > 0 && (
        <InternalLinks 
          pathname={pathname} 
          context="related-service" 
          title="Related Services"
          maxLinks={3}
        />
      )}
      
      {processLinks.length > 0 && (
        <InternalLinks 
          pathname={pathname} 
          context="process-reference" 
          title="Learn More"
          maxLinks={2}
        />
      )}
      
      {contactLinks.length > 0 && (
        <InternalLinks 
          pathname={pathname} 
          context="contact-cta" 
          title="Get Started"
          maxLinks={1}
        />
      )}
    </div>
  );
}

interface RelatedServicesProps {
  currentPath: string;
  className?: string;
}

/**
 * Related services component for service pages
 * Shows links to other relevant service pages
 */
export function RelatedServices({ currentPath, className = "" }: RelatedServicesProps) {
  const relatedLinks = getInternalLinks(currentPath, "related-service");
  
  if (relatedLinks.length === 0) {
    return null;
  }

  return (
    <Motion
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariants.fadeInUp}
      className={`bg-white rounded-2xl border border-gray-200 p-8 ${className}`}
    >
      <Motion variants={motionVariants.fadeInUp}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h3>
      </Motion>
      
      <div className="grid gap-6 md:grid-cols-3">
        {relatedLinks.slice(0, 3).map((link, index) => (
          <Motion
            key={link.href}
            variants={motionVariants.fadeInUp}
            custom={index}
          >
            <Link
              href={link.href}
              className="group block p-6 border border-gray-200 rounded-xl hover:border-brand-300 hover:shadow-lg transition-all duration-200"
            >
              <h4 className="font-semibold text-gray-900 group-hover:text-brand-700 transition-colors mb-2">
                {link.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                {link.description}
              </p>
              <div className="flex items-center text-brand-700 text-sm font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </Motion>
        ))}
      </div>
    </Motion>
  );
}
