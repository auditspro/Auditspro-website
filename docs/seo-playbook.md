# AuditsPro SEO Playbook (Public Pages)

Purpose: A reusable, concise checklist for implementing SEO across public-facing pages in our Next.js App Router project. It focuses on rendering strategy, metadata, structured data, linking, and crawler hygiene.

## 1) Rendering Strategy
- Prefer Static Site Generation for content that rarely changes.
- Use Server-Side Rendering where page content depends on request-time data.
- Keep Client-Side Rendering for interactive widgets only (do not gate core content behind CSR).
- Ensure pages with client components still export `metadata` via the page or segment `layout` (server).

## 2) Metadata Baseline
- Export `metadata` on each page with: `title`, `description`, `alternates.canonical`.
- Add `openGraph` and `twitter` blocks; include absolute image URLs when available.
- Use a segment `layout` default: `title.template` and baseline `description`.
- Avoid duplicate titles; keep 50–60 characters and clear benefit statements.

## 3) Structured Data
- Add Organization JSON-LD on the homepage.
- Use BreadcrumbList JSON-LD on inner pages.
- Use FAQPage JSON-LD for FAQ sections.
- Use Service/ProfessionalService JSON-LD on overview pages.

## 4) Breadcrumbs & Interlinking
- Show accessible visual breadcrumbs near the top of inner pages.
- Cross-link primary routes in body copy (e.g., `/`, `/checklist`, `/how-it-works`, `/book`, `/contact`).
- Use descriptive anchors that match the target page’s topic.

## 5) URL Structure & Canonicals
- Use hyphen-case slugs; keep routes short and descriptive.
- Add canonical to avoid duplicate content signals.
- Avoid query-string only pages for core content; prefer clean routes.

## 6) Robots & Sitemaps
- Provide `robots.txt` to allow public pages and block private ones.
- Publish `sitemap.xml` covering public routes with lastmod.
- Ensure correct status codes (200 for success, 404 for not found, 410 when permanently removed).

## 7) Content Quality
- Write original, professional copy tailored to each role/state.
- Do not copy-paste from external sources; paraphrase and add our expertise.
- Keep headings hierarchical (`h1` one per page); use concise paragraphs and scannable lists.

## 8) Performance & UX
- Optimise LCP: hero text/images should be server-rendered.
- Use `next/image` for images and set width/height.
- Defer non-critical scripts; avoid layout shift.
- Maintain accessible color contrast and keyboard focus.

## 9) Page-Level Checklist (apply per page)
- Rendering: SSG or SSR chosen intentionally; CSR only for widgets.
- Metadata: title, description, canonical, Open Graph/Twitter.
- Breadcrumbs: visible component and BreadcrumbList JSON-LD.
- Structured data: Organization/Service/FAQ as appropriate.
- Internal links: at least 2 relevant cross-links.
- Status codes: verify 200/404 where applicable.
- Performance: quick LCP; no large unused JS.

## 10) Implementation Notes (Next.js)
- App Router: export `metadata` in page or segment `layout` (server files).
- Use JSON-LD via `<script type="application/ld+json">` in server components.
- Keep home as server to attach metadata; nest client components inside.
- Prefer static generation for marketing pages; SSR for time-sensitive content.

Adopt this playbook for all new public pages and run a quick audit before release.