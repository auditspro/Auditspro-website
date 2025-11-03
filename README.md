# AuditsPro Australia 🇦🇺

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](LICENSE)

> **Professional trust account audit services for Australian businesses and professionals**

AuditsPro is a comprehensive web platform providing regulatory-compliant trust account auditing services for real estate agents, conveyancers, solicitors, and accountants across Australia. Built with modern web technologies and optimized for performance and SEO.

## 🌟 Features

### Core Services
- **Trust Account Auditing** - Professional audit services for multiple industries
- **Regulatory Compliance** - State-specific compliance requirements and documentation
- **Fixed Pricing** - Transparent pricing starting from $549 + GST
- **Fast Turnaround** - Efficient audit processes with quick delivery
- **Multi-State Coverage** - Services across all Australian states and territories

### Technical Features
- **🚀 Next.js 16** with App Router and Turbopack
- **⚡ Server-Side Rendering (SSR)** for optimal SEO performance
- **📱 Responsive Design** with mobile-first approach
- **🎨 Modern UI/UX** using Tailwind CSS and Framer Motion
- **🔍 SEO Optimized** with structured data and meta tags
- **📊 Interactive Process Flows** using ReactFlow
- **🌙 Dark Mode Support** with system preference detection
- **♿ Accessibility** compliant with WCAG guidelines

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 16.0.1 with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React and Heroicons
- **Backend**: Appwrite for authentication and data management
- **Email**: Nodemailer for contact forms and notifications

### Project Structure
```
AuditsPro-11/
├── app/                    # Next.js App Router
│   ├── (public-seo)/      # Public SEO-optimized pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── homepage/          # Homepage-specific components
│   ├── layout/            # Layout components (header, footer)
│   ├── pagerefactors/     # Page-specific components
│   ├── seo/               # SEO components
│   └── ui/                # UI primitives and shared components
├── lib/                   # Utility functions and configurations
│   ├── schema-templates.ts # Structured data schemas
│   ├── seo-utils.ts       # SEO utilities
│   └── utils.ts           # General utilities
└── public/                # Static assets
    ├── audits_pro_icon/   # Favicon and app icons
    └── images/            # Images and media
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AuditsPro-11
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure the following variables:
   ```env
   # Appwrite Configuration
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   APPWRITE_API_KEY=your_api_key

   # Email Configuration
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_USER=your_email
   SMTP_PASS=your_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:4010](http://localhost:4010)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 4010 with Turbopack |
| `npm run build` | Build production application with Turbopack |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Design System

### Typography
- **Primary Font**: Outfit (400, 500, 600 weights)
- **Secondary Font**: Manrope (400, 500, 600 weights)
- **Fallback**: System UI fonts for optimal loading

### Color Palette
- **Brand Colors**: Blue gradient palette (50-950)
- **UI Colors**: Semantic color system for consistent theming
- **Dark Mode**: Automatic system preference detection

### Responsive Breakpoints
- **Mobile**: < 835px
- **Tablet**: 835px - 1199px
- **Laptop**: 1200px+
- **Desktop**: 1400px+

## 🔧 Configuration

### Tailwind CSS
Custom configuration with:
- Extended color palette
- Custom breakpoints for optimal responsive design
- Animation utilities
- Component-specific utilities

### Next.js
Optimized configuration featuring:
- Turbopack for faster builds
- Image optimization
- Font optimization with Google Fonts
- SEO-friendly routing structure

## 📊 SEO & Performance

### SEO Features
- **Structured Data**: JSON-LD schemas for services, organizations, and reviews
- **Meta Tags**: Comprehensive meta tag management
- **Open Graph**: Social media optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling optimization

### Performance Optimizations
- **Static Generation**: Pre-rendered pages for optimal loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Preloaded Google Fonts with fallbacks
- **Code Splitting**: Automatic code splitting for smaller bundles
- **Turbopack**: Fast refresh and build times

## 🌐 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Setup
Ensure all environment variables are configured for production:
- Database connections
- Email service credentials
- API keys and secrets
- Domain-specific configurations

### Recommended Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Custom VPS/Server**

## 🤝 Contributing

### Development Workflow
1. Create a feature branch from `main`
2. Make your changes following the coding standards
3. Test thoroughly across different devices and browsers
4. Submit a pull request with detailed description

### Coding Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Consistent component patterns
- **Naming Conventions**: Clear and descriptive naming

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For technical support or business inquiries:

- **Website**: [auditspro.com.au](https://auditspro.com.au)
- **Email**: Contact through website form
- **Phone**: +61-2-8006-2335
- **Business Hours**: Monday - Friday, 9:00 AM - 5:00 PM (AEST)

## 🏢 About AuditsPro AU

AuditsPro specializes in providing professional trust account auditing services across Australia. We serve:

- **Real Estate Agents** - Trust account compliance and auditing
- **Conveyancers** - Regulatory compliance across all states
- **Solicitors** - Legal practice trust account audits
- **Accountants** - Professional service compliance

Our mission is to ensure regulatory compliance while providing exceptional service and competitive pricing to Australian businesses and professionals.

---

**Built with ❤️ in Australia** | **© 2025 AuditsPro AU**
