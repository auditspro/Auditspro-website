import Link from "next/link";

interface InternalLink {
  href: string;
  text: string;
  description?: string;
}

interface InternalLinksProps {
  title?: string;
  links: InternalLink[];
  className?: string;
}

export function InternalLinks({ 
  title = "Related Trust Account Auditing Services", 
  links, 
  className = "" 
}: InternalLinksProps) {
  return (
    <div className={`bg-slate-50 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block p-4 bg-white rounded-md border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all duration-200 group"
          >
            <div className="text-brand-600 font-medium group-hover:text-brand-700 transition-colors">
              {link.text}
            </div>
            {link.description && (
              <div className="text-sm text-slate-600 mt-1">
                {link.description}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Predefined link sets for different service types
export const realEstateLinks: InternalLink[] = [
  {
    href: "/services/real-estate-agents/nsw",
    text: "NSW Real Estate Trust Account Auditing",
    description: "Fair Trading compliant auditing for NSW real estate agents"
  },
  {
    href: "/services/real-estate-agents/vic", 
    text: "Victoria Real Estate Trust Account Auditing",
    description: "Consumer Affairs Victoria compliant auditing services"
  },
  {
    href: "/services/real-estate-agents/qld",
    text: "Queensland Real Estate Trust Account Auditing", 
    description: "QBCC compliant auditing for QLD real estate professionals"
  },
  {
    href: "/services/conveyancers",
    text: "Conveyancer Trust Account Auditing",
    description: "Specialized auditing services for conveyancing practices"
  }
];

export const conveyancerLinks: InternalLink[] = [
  {
    href: "/services/conveyancers/nsw",
    text: "NSW Conveyancer Trust Account Auditing",
    description: "NSW Fair Trading compliant conveyancer auditing"
  },
  {
    href: "/services/conveyancers/vic",
    text: "Victoria Conveyancer Trust Account Auditing", 
    description: "Consumer Affairs Victoria compliant auditing"
  },
  {
    href: "/services/real-estate-agents",
    text: "Real Estate Trust Account Auditing",
    description: "Professional auditing for real estate agencies"
  },
  {
    href: "/services/solicitors",
    text: "Solicitor Trust Account Auditing",
    description: "Legal practice trust account auditing services"
  }
];

export const generalServiceLinks: InternalLink[] = [
  {
    href: "/services/real-estate-agents",
    text: "Real Estate Trust Account Auditing",
    description: "Professional auditing for real estate professionals"
  },
  {
    href: "/services/conveyancers", 
    text: "Conveyancer Trust Account Auditing",
    description: "Specialized auditing for conveyancing practices"
  },
  {
    href: "/services/solicitors",
    text: "Solicitor Trust Account Auditing",
    description: "Legal practice trust account auditing services"
  },
  {
    href: "/services/accountants",
    text: "Accountant Trust Account Auditing",
    description: "CPA and CA ANZ compliant auditing services"
  },
  {
    href: "/services/mortgage-brokers",
    text: "Mortgage Broker Trust Account Auditing", 
    description: "Regulatory compliant auditing for mortgage brokers"
  },
  {
    href: "/pricing",
    text: "Trust Account Auditing Pricing",
    description: "Transparent fixed pricing for all auditing services"
  }
];