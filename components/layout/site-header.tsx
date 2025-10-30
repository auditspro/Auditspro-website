"use client";
import { useEffect, useState } from "react";
import { AuditsProLogo } from "@/components/logo/auditsprologo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import Breadcrumbs, { BreadcrumbItem } from "@/components/ui/breadcrumbs";
import {
  Layers,
  Users,
  Info,
  CircleArrowRight,
  FileCheck,
  Menu,
  Home,
  ChevronDown,
  Building,
  Scale,
  Calculator,
  CreditCard,
  DollarSign,
  TrendingUp,
  Briefcase,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

export function SiteHeader({ breadcrumbs }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

  const services = [
    {
      title: "Real Estate Agents",
      href: "/services/real-estate-agents",
      icon: Building,
      description: "ASIC compliant trust account audits for real estate agents",
    },
    {
      title: "Conveyancers",
      href: "/services/conveyancers",
      icon: FileCheck,
      description: "Professional trust account audits for conveyancers",
    },
    {
      title: "Solicitors",
      href: "/services/solicitors",
      icon: Scale,
      description: "Legal profession trust account audits for solicitors",
    },
    {
      title: "Accountants",
      href: "/services/accountants",
      icon: Calculator,
      description: "Professional trust account audits for accountants",
    },
    {
      title: "Mortgage Brokers",
      href: "/services/mortgage-brokers",
      icon: DollarSign,
      description: "NCCP compliant trust account audits for mortgage brokers",
    },
    {
      title: "SMSF Trustees",
      href: "/services/smsf-trustees",
      icon: TrendingUp,
      description: "Specialized trust account audits for SMSF trustees",
    },
    {
      title: "Business Brokers",
      href: "/services/business-brokers",
      icon: Briefcase,
      description: "Professional trust account audits for business brokers",
    },
  ];

  const navLinks = [
    { href: "/", label: "Home", Icon: Home, aria: "Home", description: "Return to homepage" },
    {
      href: "/how-it-works",
      label: "How It Works",
      Icon: Layers,
      aria: "How our audit process works",
      description: "How our audit process works",
    },
    {
      href: "/trust-account-audit-checklist",
      label: "Audit Checklist",
      Icon: FileCheck,
      aria: "Document checklist for trust account audits",
      description: "Document checklist for trust account audits",
    },
    {
      href: "/pricing",
      label: "Pricing",
      Icon: CreditCard,
      aria: "View pricing information",
      description: "View pricing information",
    },
    { href: "/about", label: "About", Icon: Info, aria: "About AuditsPro", description: "About AuditsPro" },
    {
      href: "/contact",
      label: "Contact",
      Icon: Users,
      aria: "Contact AuditsPro",
      description: "Contact AuditsPro",
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      {/* Main Navigation Bar */}
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" aria-label="AuditsPro - Home" className="flex items-center">
          <AuditsProLogo size="md" />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm text-blue-950"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className="hover:text-blue-800 inline-flex items-center gap-2"
              aria-label="Our audit services"
            >
              <Wrench className="size-4" />
              Services
              <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-blue-200/70 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="mb-3">
                  <Link
                    href="/services"
                    className="text-sm font-medium text-blue-950 hover:text-blue-700 flex items-center gap-2"
                  >
                    <Wrench className="size-4 text-blue-700" />
                    All Services
                  </Link>
                  <p className="text-xs text-slate-500 mt-1">View all our audit services</p>
                </div>
                <div className="border-t border-blue-200/70 pt-3 space-y-2">
                  {services.map(({ title, href, icon: Icon, description }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block p-2 rounded-lg hover:bg-blue-50/60 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="size-4 mt-0.5 text-blue-700 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-blue-950">{title}</div>
                          <div className="text-xs text-slate-500 line-clamp-2">{description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navLinks.slice(1).map(({ href, label, Icon, aria }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-blue-800 inline-flex items-center gap-2"
              aria-label={aria}
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA only on md+ to keep mobile header clean */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="default"
              size="lg"
              className="gap-2 bg-blue-900 hover:bg-blue-800 text-white"
            >
              <Link href="/book-demo" aria-label="Start your audit process">
                Start Audit
                <CircleArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu (Sheet) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-blue-950 border border-blue-200 hover:bg-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <span className="inline-flex items-center gap-2"><Menu className="size-5" /> Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" aria-label="Mobile navigation" className="border-r p-0 w-[24rem] sm:w-[26rem]">
              <div className="flex h-full flex-col">
                {/* Sheet header with logo */}
                <div className="flex items-center justify-between border-b px-4 py-3">
                  <AuditsProLogo size="sm" />
                </div>

                {/* Nav list */}
                <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
                  {navLinks.map(({ href, label, Icon, aria, description }) => {
                    const active = pathname === href;
                    return (
                      <SheetClose asChild key={href}>
                        <Link
                          href={href}
                          aria-label={aria}
                          className={cn(
                            "block rounded-xl border px-4 py-3",
                            active
                              ? "bg-blue-100 border-blue-300"
                              : "bg-white hover:bg-blue-50/60 border-blue-200/70"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="size-5 mt-0.5 text-blue-700" />
                            <div className="flex-1">
                              <div className="font-medium text-blue-950">{label}</div>
                              {description && (
                                <div className="text-xs text-slate-500">{description}</div>
                              )}
                            </div>
                            <CircleArrowRight className="size-4 text-blue-700" />
                          </div>
                        </Link>
                      </SheetClose>
                    );
                  })}

                  {/* Services Section */}
                  <div className="space-y-2">
                    <SheetClose asChild>
                      <Link
                        href="/services"
                        aria-label="Our audit services"
                        className={cn(
                          "block rounded-xl border px-4 py-3",
                          pathname === "/services" || pathname.startsWith("/services/")
                            ? "bg-blue-100 border-blue-300"
                            : "bg-white hover:bg-blue-50/60 border-blue-200/70"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <Wrench className="size-5 mt-0.5 text-blue-700" />
                          <div className="flex-1">
                            <div className="font-medium text-blue-950">Services</div>
                            <div className="text-xs text-slate-500">Professional trust account audit services</div>
                          </div>
                          <CircleArrowRight className="size-4 text-blue-700" />
                        </div>
                      </Link>
                    </SheetClose>

                    {/* Individual Services */}
                    <div className="ml-4 space-y-1">
                      {services.map(({ title, href, icon: Icon }) => {
                        const active = pathname === href;
                        return (
                          <SheetClose asChild key={href}>
                            <Link
                              href={href}
                              className={cn(
                                "block rounded-lg border px-3 py-2 text-sm",
                                active
                                  ? "bg-blue-50 border-blue-200"
                                  : "bg-slate-50 hover:bg-blue-50/60 border-slate-200"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <Icon className="size-4 text-blue-600 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-medium text-blue-900">{title}</div>
                                </div>
                              </div>
                            </Link>
                          </SheetClose>
                        );
                      })}
                    </div>
                  </div>
                </nav>

                {/* Sticky footer with CTA */}
                <div className="sticky bottom-0 border-t bg-white px-4 py-4">
                  {/* Start Audit CTA */}
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full gap-2 bg-blue-900 hover:bg-blue-800 text-white">
                      <Link href="/book-demo" aria-label="Start your audit process">
                        Start Audit
                        <CircleArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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

      {/* Mobile nav overlay */}

      {/* Mobile bottom navbar removed: using left Sheet sidebar instead */}
    </header>
  );
}