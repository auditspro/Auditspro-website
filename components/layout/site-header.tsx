"use client";
import { useEffect, useState } from "react";
import { AuditsProLogo } from "@/components/logo/auditsprologo";
import { Button } from "@/components/ui/button";
import Breadcrumbs, { BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

export function SiteHeader({ breadcrumbs }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      {/* Main Navigation Bar */}
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          aria-label="AuditsPro - Home"
          className="flex items-center"
        >
          <AuditsProLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        <div className="flex items-center gap-3">
          {/* CRITICAL FIX: CTA visibility changed from md:block to lg:block */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant="default"
              className={cn(
                "gap-2 bg-brand-900 hover:bg-brand-800 text-white transition-all duration-200",
                // Improved progressive sizing
                "text-sm px-3 py-2 lg:text-sm lg:px-4 lg:py-2 laptop:text-base laptop:px-6 laptop:py-3"
              )}
            >
              <Link href="/book-demo" aria-label="Start your audit process">
                <span>Start Audit</span>
                <ClipboardDocumentCheckIcon className={cn(
                  "transition-all duration-200",
                  "size-4 lg:size-4 laptop:size-4 xl:size-5"
                )} />
              </Link>
            </Button>
          </div>

          {/* CRITICAL FIX: Mobile Navigation now available until lg: breakpoint */}
          <MobileNavigation open={open} onOpenChange={setOpen} />
        </div>
      </div>

      {/* Breadcrumbs Section */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="border-t border-slate-200/50 bg-slate-50/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-3">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
      )}
    </header>
  );
}
