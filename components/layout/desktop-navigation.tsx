"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationConfig, isActiveNavItem } from "@/lib/navigation";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    // CRITICAL FIX: Changed from md:flex to lg:flex (1024px instead of 768px)
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className={cn(
        "transition-all duration-300",
        // Progressive gap scaling as per analysis
        "gap-4 lg:gap-4 laptop:gap-5 xl:gap-6"
      )}>
        {navigationConfig.map((group) => {
          const isActive = isActiveNavItem(group.href || "", pathname);

          // Single item navigation (like Home)
          if (!group.items) {
            return (
              <NavigationMenuItem key={group.id}>
                <NavigationMenuLink asChild>
                  <Link
                    href={group.href!}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-brand-50/60 hover:text-brand-800 text-brand-950 font-medium transition-all duration-200 gap-2 h-auto",
                      // Improved progressive scaling
                      "px-2.5 py-2 text-sm lg:px-2.5 lg:py-2 lg:text-sm laptop:px-3 laptop:py-2.5 laptop:text-base xl:px-4 xl:py-3",
                      isActive && "bg-brand-100/60 text-brand-900"
                    )}
                    aria-label={group.description}
                  >
                    <group.icon className={cn(
                      "transition-all duration-200",
                      "size-4 lg:size-4 laptop:size-4 xl:size-5"
                    )} />
                    {/* CRITICAL FIX: Show text at lg: (1024px+) instead of md: */}
                    <span className="hidden lg:inline">{group.label}</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          // Dropdown navigation (Services, Company, Resources)
          return (
            <NavigationMenuItem key={group.id}>
              <NavigationMenuTrigger className={cn(
                "bg-transparent hover:bg-brand-50/60 hover:text-brand-800 text-brand-950 font-medium transition-all duration-200 gap-2 h-auto",
                // Improved progressive scaling
                "px-2.5 py-2 text-sm lg:px-2.5 lg:py-2 lg:text-sm laptop:px-3 laptop:py-2.5 laptop:text-base xl:px-4 xl:py-3"
              )}>
                <group.icon className={cn(
                  "transition-all duration-200",
                  "size-4 lg:size-4 laptop:size-4 xl:size-5"
                )} />
                {/* CRITICAL FIX: Show text at lg: (1024px+) instead of md: */}
                <span className="hidden lg:inline">{group.label}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className={cn(
                  "p-4 bg-white/95 backdrop-blur-xl border border-brand-200/70 rounded-xl shadow-xl transition-all duration-300",
                  // CRITICAL FIX: Optimized dropdown widths to prevent viewport overflow
                  group.id === "services" 
                    ? "w-[420px] lg:w-[450px] laptop:w-[480px] xl:w-[520px]" 
                    : "w-[300px] lg:w-[320px] laptop:w-[340px] xl:w-[360px]"
                )}>
                  {/* Header */}
                  <div className="mb-3 pb-2 border-b border-brand-200/50">
                    {group.href && (
                      <Link
                        href={group.href}
                        className="text-sm font-semibold text-brand-950 hover:text-brand-700 flex items-center gap-2 transition-colors duration-200"
                      >
                        <group.icon className="size-4 text-brand-700" />
                        All {group.label}
                      </Link>
                    )}
                    <p className="text-xs text-slate-600 mt-1">{group.description}</p>
                  </div>
                  
                  {/* Items Grid - Responsive based on content and screen size */}
                  <div className={cn(
                    "gap-2 transition-all duration-300",
                    group.id === "services" 
                      ? "grid grid-cols-2 lg:grid-cols-2 laptop:grid-cols-2" 
                      : "grid grid-cols-1 gap-1.5"
                  )}>
                    {group.items.map((item) => (
                      <NavigationMenuLink key={item.href} asChild>
                        <Link
                          href={item.href}
                          className="group block p-2.5 rounded-lg hover:bg-brand-50/80 transition-all duration-200 border border-transparent hover:border-brand-200/50"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="p-1.5 rounded-md bg-brand-100/60 group-hover:bg-brand-200/60 transition-colors duration-200 flex-shrink-0">
                              <item.icon className="size-3.5 text-brand-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-brand-950 group-hover:text-brand-800 transition-colors duration-200 leading-tight">
                                {item.label}
                              </div>
                              <div className="text-xs text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
