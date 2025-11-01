import {
  HomeIcon,
  WrenchScrewdriverIcon,
  InformationCircleIcon,
  UsersIcon,
  Squares2X2Icon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  CalculatorIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  aria?: string;
}

export interface NavGroup {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  items?: NavItem[];
  href?: string; // For single items that also act as groups
}

// Services Configuration
export const servicesConfig: NavItem[] = [
  {
    href: "/services/real-estate-agents",
    label: "Real Estate Agents",
    icon: BuildingOfficeIcon,
    description: "ASIC compliant trust account audits for real estate agents",
  },
  {
    href: "/services/conveyancers",
    label: "Conveyancers",
    icon: DocumentTextIcon,
    description: "Professional trust account audits for conveyancers",
  },
  {
    href: "/services/solicitors",
    label: "Solicitors",
    icon: ScaleIcon,
    description: "Legal profession trust account audits for solicitors",
  },
  {
    href: "/services/accountants",
    label: "Accountants",
    icon: CalculatorIcon,
    description: "Professional trust account audits for accountants",
  },
  {
    href: "/services/mortgage-brokers",
    label: "Mortgage Brokers",
    icon: BanknotesIcon,
    description: "NCCP compliant trust account audits for mortgage brokers",
  },
  {
    href: "/services/smsf-trustees",
    label: "SMSF Trustees",
    icon: ArrowTrendingUpIcon,
    description: "Specialized trust account audits for SMSF trustees",
  },
  {
    href: "/services/business-brokers",
    label: "Business Brokers",
    icon: BriefcaseIcon,
    description: "Professional trust account audits for business brokers",
  },
];

// Main Navigation Groups
export const navigationConfig: NavGroup[] = [
  {
    id: "home",
    label: "Home",
    icon: HomeIcon,
    href: "/",
    description: "Return to homepage",
  },
  {
    id: "services",
    label: "Services",
    icon: WrenchScrewdriverIcon,
    href: "/services",
    description: "Professional trust account audit services",
    items: servicesConfig,
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: CreditCardIcon,
    href: "/pricing",
    description: "Transparent pricing for all services",
  },
  {
    id: "company",
    label: "Company",
    icon: InformationCircleIcon,
    description: "Learn about AuditsPro and our process",
    items: [
      {
        href: "/about",
        label: "About Us",
        icon: InformationCircleIcon,
        description: "Learn about AuditsPro and our mission",
        aria: "About AuditsPro",
      },
      {
        href: "/how-it-works",
        label: "How It Works",
        icon: Squares2X2Icon,
        description: "Our step-by-step audit process",
        aria: "How our audit process works",
      },
      {
        href: "/contact",
        label: "Contact Us",
        icon: UsersIcon,
        description: "Get in touch with our team",
        aria: "Contact AuditsPro",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    icon: ClipboardDocumentCheckIcon,
    description: "Helpful tools and information",
    items: [
      {
        href: "/trust-account-audit-checklist",
        label: "Audit Checklist",
        icon: ClipboardDocumentCheckIcon,
        description: "Document checklist for trust account audits",
        aria: "Document checklist for trust account audits",
      },
    ],
  },
];

// Helper functions
export const getNavItemByHref = (href: string): NavItem | undefined => {
  // Check main navigation items
  for (const group of navigationConfig) {
    if (group.href === href) {
      return {
        href: group.href,
        label: group.label,
        icon: group.icon,
        description: group.description,
      };
    }
    
    // Check nested items
    if (group.items) {
      const item = group.items.find(item => item.href === href);
      if (item) return item;
    }
  }
  
  return undefined;
};

export const getActiveGroup = (pathname: string): NavGroup | undefined => {
  return navigationConfig.find(group => {
    if (group.href === pathname) return true;
    if (group.items) {
      return group.items.some(item => item.href === pathname);
    }
    return false;
  });
};

export const isActiveNavItem = (href: string, pathname: string): boolean => {
  if (href === "/" && pathname === "/") return true;
  if (href !== "/" && pathname.startsWith(href)) return true;
  return false;
};