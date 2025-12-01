import Link from "next/link";

// Server-rendered, accessible breadcrumb component with professional pill-styled UI and structured data
// Usage: <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Checklist" }]} />
export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol 
        className="flex flex-wrap items-center gap-2"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const baseClasses =
            "inline-flex h-9 items-center rounded-full border px-3 sm:px-4 text-sm transition-colors";
          const activeClasses =
            "border-brand-200 bg-brand-100 text-brand-950";
          const inactiveClasses =
            "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100";

          return (
            <li 
              key={`${item.label}-${idx}`} 
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`${baseClasses} ${inactiveClasses}`}
                  itemProp="item"
                  itemScope
                  itemType="https://schema.org/WebPage"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  className={`${baseClasses} ${activeClasses}`}
                  aria-current={isLast ? "page" : undefined}
                  itemProp="name"
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(idx + 1)} />
              {idx < items.length - 1 && (
                <span aria-hidden="true" className="mx-1 text-slate-400">›</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
