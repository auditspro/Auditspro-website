// D:\firstapps\auditsproAU\components\layout\site-footer.tsx

import { AuditsProLogo } from "@/components/logo/auditsprologo";
import { Box, Settings, Tag, Building2, Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto grid gap-8 px-6 py-12 lg:grid-cols-3">
        <div>
          <AuditsProLogo size="sm" />
          <p className="mt-4 text-sm text-slate-600 max-w-sm">
            AuditsPro helps firms deliver compliant trust account audits with
            speed, clarity, and confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-medium text-blue-950">Product</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <a
                  href="#features"
                  className="hover:text-blue-900 inline-flex items-center gap-2"
                >
                  <Box className="size-4" />
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="hover:text-blue-900 inline-flex items-center gap-2"
                >
                  <Settings className="size-4" />
                  Integrations
                </a>
              </li>
              <li>
                <Link
                  href="/pricing"
                  aria-label="View pricing"
                  className="hover:text-blue-900 inline-flex items-center gap-2"
                >
                  <Tag className="size-4" />
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-blue-950">Services</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <Link
                  href="/services/real-estate-agents"
                  aria-label="Trust account audits for real estate agents"
                  className="hover:text-blue-900"
                >
                  Real Estate Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/services/conveyancers"
                  aria-label="Trust account audits for conveyancers"
                  className="hover:text-blue-900"
                >
                  Conveyancers
                </Link>
              </li>
              <li>
                <Link
                  href="/services/accountants"
                  aria-label="Trust account audits for accountants"
                  className="hover:text-blue-900"
                >
                  Accountants
                </Link>
              </li>
              <li>
                <Link
                  href="/services/solicitors"
                  aria-label="Trust account audits for solicitors"
                  className="hover:text-blue-900"
                >
                  Solicitors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-blue-950">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <Link
                  href="/about"
                  aria-label="Learn about AuditsPro"
                  className="hover:text-blue-900 inline-flex items-center gap-2"
                >
                  <Building2 className="size-4" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  aria-label="See how our audit process works"
                  className="hover:text-blue-900 inline-flex items-center gap-2"
                >
                  <Shield className="size-4" />
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  aria-label="Contact AuditsPro"
                  className="hover:text-blue-900 inline-flex items-center gap-2"
                >
                  <Mail className="size-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-slate-600 md:text-right">
          © {year} AuditsPro. All rights reserved.
        </div>
      </div>

      {/* Footer CTA strip matching our blue card theme */}
      <div className="container mx-auto px-6 pb-10">
        <div className="flex items-center justify-between gap-4 rounded-xl border border-blue-200/70 bg-blue-50/60 p-4 supports-[backdrop-filter]:bg-blue-50/40">
          <p className="text-sm text-slate-600">
            Ready to start your trust account audit?
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2 bg-blue-900 hover:bg-blue-800 text-white"
          >
            <Link href="/book-demo" aria-label="Book a demo of our audit platform">
              Book Demo
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
