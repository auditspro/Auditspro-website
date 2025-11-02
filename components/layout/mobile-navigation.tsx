"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AuditsProLogo } from "@/components/logo/auditsprologo";
import { ArrowTopRightOnSquareIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { navigationConfig, isActiveNavItem } from "@/lib/navigation";

interface MobileNavigationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNavigation({ open, onOpenChange }: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          type="button"
          // CRITICAL FIX: Changed from md:hidden to lg:hidden - mobile nav available until 1024px
          className="lg:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-brand-950 border border-brand-200 hover:bg-brand-100/60 focus:outline-none focus:ring-2 focus:ring-brand-300"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="inline-flex items-center gap-2">
            <Bars3Icon className="size-5" /> Menu
          </span>
        </button>
      </SheetTrigger>
      
      {/* CRITICAL FIX: Optimized sheet width for tablets */}
      <SheetContent side="left" aria-label="Mobile navigation" className={cn(
        "border-r p-0 transition-all duration-300",
        // Progressive width optimization for tablets
        "w-[90vw] sm:w-[24rem] tablet:w-[26rem] max-w-md"
      )}>
        <div className="flex h-full flex-col">
          {/* Sheet header with logo */}
          <div className="flex items-center justify-between border-b px-4 py-3">
            <AuditsProLogo size="sm" />
          </div>

          {/* Nav list - Enhanced for better organization */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {navigationConfig.map((group, groupIndex) => {
              const isGroupActive = group.href ? isActiveNavItem(group.href, pathname) : 
                group.items?.some(item => isActiveNavItem(item.href, pathname));

              // Single item navigation (like Home)
              if (!group.items) {
                return (
                  <div key={group.id} className="space-y-2">
                    {groupIndex === 0 && (
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-3">
                        Navigation
                      </div>
                    )}
                    <SheetClose asChild>
                      <Link
                        href={group.href!}
                        aria-label={group.description}
                        className={cn(
                          "block rounded-xl border px-4 py-3 transition-all duration-200",
                          isGroupActive
                            ? "bg-brand-100 border-brand-300 shadow-sm"
                            : "bg-white hover:bg-brand-50/60 border-brand-200/70 hover:border-brand-300/70 hover:shadow-sm"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "p-1.5 rounded-lg transition-colors duration-200",
                            isGroupActive 
                              ? "bg-brand-200/60" 
                              : "bg-brand-100/60"
                          )}>
                            <group.icon className="size-4 text-brand-700" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-brand-950">{group.label}</div>
                            {group.description && (
                              <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                                {group.description}
                              </div>
                            )}
                          </div>
                          <ArrowTopRightOnSquareIcon className="size-4 text-brand-700 opacity-60" />
                        </div>
                      </Link>
                    </SheetClose>
                  </div>
                );
              }

              // Group navigation with items
              return (
                <div key={group.id} className="space-y-2 pt-2 border-t border-brand-200/50">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-3">
                    {group.label}
                  </div>
                  
                  {/* Main Group Link (if exists) */}
                  {group.href && (
                    <SheetClose asChild>
                      <Link
                        href={group.href}
                        aria-label={group.description}
                        className={cn(
                          "block rounded-xl border px-4 py-3 transition-all duration-200",
                          isGroupActive
                            ? "bg-brand-100 border-brand-300 shadow-sm"
                            : "bg-white hover:bg-brand-50/60 border-brand-200/70 hover:border-brand-300/70 hover:shadow-sm"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "p-1.5 rounded-lg transition-colors duration-200",
                            isGroupActive
                              ? "bg-brand-200/60" 
                              : "bg-brand-100/60"
                          )}>
                            <group.icon className="size-4 text-brand-700" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-brand-950">All {group.label}</div>
                            <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                              {group.description}
                            </div>
                          </div>
                          <ArrowTopRightOnSquareIcon className="size-4 text-brand-700 opacity-60" />
                        </div>
                      </Link>
                    </SheetClose>
                  )}

                  {/* Individual Items */}
                  <div className="grid grid-cols-1 gap-2 ml-2 pl-4 border-l-2 border-brand-200/50">
                    {group.items.map((item) => {
                      const isItemActive = isActiveNavItem(item.href, pathname);
                      return (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block rounded-lg border px-3 py-2.5 text-sm transition-all duration-200",
                              isItemActive
                                ? "bg-brand-50 border-brand-200 shadow-sm"
                                : "bg-slate-50/80 hover:bg-brand-50/80 border-slate-200 hover:border-brand-200/70"
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={cn(
                                "p-1 rounded-md transition-colors duration-200",
                                isItemActive 
                                  ? "bg-brand-200/60" 
                                  : "bg-brand-100/60"
                              )}>
                                <item.icon className="size-3.5 text-brand-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-brand-900 truncate">{item.label}</div>
                              </div>
                            </div>
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Sticky footer with CTA - Enhanced */}
          <div className="sticky bottom-0 border-t bg-white/95 backdrop-blur-sm px-4 py-4">
            <SheetClose asChild>
              <Button asChild size="lg" className="w-full gap-2 bg-brand-900 hover:bg-brand-800 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="/book-demo" aria-label="Start your audit process">
                  Start Audit
                  <ArrowTopRightOnSquareIcon className="size-4" />
                </Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}