import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import Breadcrumbs from "./breadcrumbs";

interface ServerBreadcrumbsProps {
  pathname: string;
  className?: string;
}

/**
 * Server-side rendered breadcrumbs component
 * Generates breadcrumbs based on pathname without requiring client-side JavaScript
 * This ensures breadcrumbs are crawlable by search engines
 */
export function ServerBreadcrumbs({ pathname, className }: ServerBreadcrumbsProps) {
  const breadcrumbs = generateBreadcrumbs(pathname);
  
  if (breadcrumbs.length === 0) {
    return null;
  }
  
  return (
    <div className={className}>
      <Breadcrumbs items={breadcrumbs} />
    </div>
  );
}