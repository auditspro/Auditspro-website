import React from "react";
import { SetBreadcrumbs } from "@/components/ui/set-breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  jsonLdData?: object[];
}

export function PageWrapper({ 
  children, 
  breadcrumbs = [], 
  className = "min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50",
  jsonLdData = []
}: PageWrapperProps) {
  return (
    <div className={className}>
      {/* Set Breadcrumbs */}
      {breadcrumbs.length > 0 && <SetBreadcrumbs items={breadcrumbs} />}
      
      {/* Structured Data */}
      {jsonLdData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Page Content */}
      {children}
    </div>
  );
}