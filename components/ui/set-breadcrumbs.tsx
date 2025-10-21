"use client";
import { useEffect } from "react";
import { useBreadcrumbs } from "./breadcrumb-context";
import { BreadcrumbItem } from "./breadcrumbs";

interface SetBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function SetBreadcrumbs({ items }: SetBreadcrumbsProps) {
  const { setBreadcrumbs } = useBreadcrumbs();
  
  useEffect(() => {
    setBreadcrumbs(items);
    
    // Clean up breadcrumbs when component unmounts
    return () => setBreadcrumbs([]);
  }, [items, setBreadcrumbs]);
  
  return null;
}