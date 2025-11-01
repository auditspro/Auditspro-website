"use client";

import { AuditsProLogo } from "@/components/logo/auditsprologo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { footerConfig, companyInfo, legalLinks } from "@/lib/footer";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="mt-24 border-t border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <AuditsProLogo size="sm" />
            <p className="mt-4 text-sm text-slate-600 max-w-sm leading-relaxed">
              {companyInfo.description}
            </p>
          </div>

          {/* Footer Sections - Responsive Grid */}
          {footerConfig.map((section, index) => (
            <div key={section.id} className={cn(
              "space-y-3",
              // Responsive column spanning
              section.id === "services" && "md:col-span-2 lg:col-span-1"
            )}>
              <h3 className="font-semibold text-brand-950 text-sm">
                {section.title}
              </h3>
              <ul className={cn(
                "space-y-2 text-sm",
                // Services section gets a grid layout on larger screens
                section.id === "services" && "md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2 md:space-y-0 lg:block lg:space-y-2"
              )}>
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-label={link.aria || link.description}
                        className="text-slate-600 hover:text-brand-900 transition-colors duration-200 inline-flex items-center gap-2 group"
                      >
                        {Icon && (
                          <Icon className="size-4 text-slate-400 group-hover:text-brand-700 transition-colors duration-200" />
                        )}
                        <span className="leading-relaxed">{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-200/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-slate-600">
              © {year} {companyInfo.name}. All rights reserved.
            </p>
            
            {/* Legal Links - Enhanced with Icons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {legalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-label={link.aria}
                    className="text-slate-600 hover:text-brand-900 transition-colors duration-200 inline-flex items-center gap-2 group text-sm"
                  >
                    {Icon && (
                      <Icon className="size-4 text-slate-400 group-hover:text-brand-700 transition-colors duration-200" />
                    )}
                    <span className="leading-relaxed">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA Strip - Optimized */}
      <div className="container mx-auto px-6 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-brand-200/70 bg-brand-50/60 p-6 supports-[backdrop-filter]:bg-brand-50/40">
          <div className="space-y-1">
            <p className="text-sm font-medium text-brand-950">
              {companyInfo.ctaText}
            </p>
            <p className="text-xs text-slate-600">
              Get started with your compliant trust account audit today.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="gap-2 bg-brand-900 hover:bg-brand-800 text-white shadow-sm hover:shadow-md transition-all duration-200 flex-shrink-0"
          >
            <Link href={companyInfo.ctaLink} aria-label="Start your audit process">
              {companyInfo.ctaButtonText}
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
