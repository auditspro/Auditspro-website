import type { Metadata } from "next";
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { BreadcrumbProvider } from '@/components/ui/breadcrumb-context';
import { HeaderWithBreadcrumbs } from '@/components/layout/header-with-breadcrumbs';

export const metadata: Metadata = {
  title: {
    default: "AuditsPro — Trust Account Audits",
    template: "%s | AuditsPro",
  },
  description:
    "Online trust account audit services in Australia with a unified portal workflow, fixed pricing, and fast turnaround.",
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <BreadcrumbProvider>
      <HeaderWithBreadcrumbs />
      <main className="pt-20">{children}</main>
      <SiteFooter />
    </BreadcrumbProvider>
  );
}