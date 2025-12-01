import {
  CubeIcon,
  CogIcon,
  TagIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
  Squares2X2Icon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ScaleIcon,
  CalculatorIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  LockClosedIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

export interface FooterLink {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  aria?: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

// Legal Links Configuration
export const legalLinks: FooterLink[] = [
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
    icon: LockClosedIcon,
    description: "Our privacy policy and data protection practices",
    aria: "View our privacy policy",
  },
  {
    href: "/terms",
    label: "Terms of Service",
    icon: DocumentIcon,
    description: "Terms and conditions of service",
    aria: "View our terms of service",
  },
];

// Footer Configuration
export const footerConfig: FooterSection[] = [
  {
    id: "product",
    title: "Product",
    links: [
      {
        href: "#features",
        label: "Features",
        icon: CubeIcon,
        description: "Explore our key features",
      },
      {
        href: "#partners",
        label: "Integrations",
        icon: CogIcon,
        description: "Partner integrations",
      },
      {
        href: "/pricing",
        label: "Pricing",
        icon: TagIcon,
        description: "View pricing information",
        aria: "View pricing",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    links: [
      {
        href: "/services/real-estate-agents",
        label: "Real Estate Agents",
        icon: BuildingOfficeIcon,
        description: "Trust account audits for real estate agents",
        aria: "Trust account audits for real estate agents",
      },
      {
        href: "/services/conveyancers",
        label: "Conveyancers",
        icon: DocumentTextIcon,
        description: "Trust account audits for conveyancers",
        aria: "Trust account audits for conveyancers",
      },
      {
        href: "/services/solicitors",
        label: "Solicitors",
        icon: ScaleIcon,
        description: "Trust account audits for solicitors",
        aria: "Trust account audits for solicitors",
      },
      {
        href: "/services/accountants",
        label: "Accountants",
        icon: CalculatorIcon,
        description: "Trust account audits for accountants",
        aria: "Trust account audits for accountants",
      },
      {
        href: "/services/mortgage-brokers",
        label: "Mortgage Brokers",
        icon: BanknotesIcon,
        description: "Trust account audits for mortgage brokers",
      },
      {
        href: "/services/smsf-trustees",
        label: "SMSF Trustees",
        icon: ArrowTrendingUpIcon,
        description: "Trust account audits for SMSF trustees",
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      {
        href: "/about",
        label: "About",
        icon: BuildingOffice2Icon,
        description: "Learn about AuditsPro",
        aria: "Learn about AuditsPro",
      },
      {
        href: "/how-it-works",
        label: "How It Works",
        icon: Squares2X2Icon,
        description: "See how our audit process works",
        aria: "See how our audit process works",
      },
      {
        href: "/contact",
        label: "Contact",
        icon: EnvelopeIcon,
        description: "Contact AuditsPro",
        aria: "Contact AuditsPro",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      {
        href: "/trust-account-audit-checklist",
        label: "Audit Checklist",
        icon: ClipboardDocumentCheckIcon,
        description: "Document checklist for trust account audits",
      },
      {
        href: "/services",
        label: "All Services",
        icon: WrenchScrewdriverIcon,
        description: "View all our services",
      },
    ],
  },
];

// Company Information
export const companyInfo = {
  name: "AuditsPro",
  description: "AuditsPro helps firms deliver compliant trust account audits with speed, clarity, and confidence.",
  ctaText: "Ready to start your trust account audit?",
  ctaButtonText: "Start Audit",
  ctaLink: "/book-demo",
};

// Helper functions
export const getFooterSectionById = (id: string): FooterSection | undefined => {
  return footerConfig.find(section => section.id === id);
};

export const getAllFooterLinks = (): FooterLink[] => {
  return footerConfig.flatMap(section => section.links);
};
