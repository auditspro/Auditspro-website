"use client";
import { SiteHeader } from './site-header';
import { useBreadcrumbs } from '@/components/ui/breadcrumb-context';

export function HeaderWithBreadcrumbs() {
  const { breadcrumbs } = useBreadcrumbs();
  
  return <SiteHeader breadcrumbs={breadcrumbs} />;
}