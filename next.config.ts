import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations for Core Web Vitals
  images: {
    // Enable image optimization
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    // Relax CSP so client-side analytics (Clarity, GA) can load.
    // Note: Next.js applies this CSP via a meta tag for image optimization.
    // We include script-src to explicitly allow required analytics domains.
    contentSecurityPolicy:
      "default-src 'self' https://www.clarity.ms https://www.googletagmanager.com https://www.google-analytics.com; " +
      "script-src 'self' 'unsafe-inline' https://www.clarity.ms https://www.googletagmanager.com https://www.google-analytics.com; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self' https://www.clarity.ms https://www.google-analytics.com https://www.googletagmanager.com; " +
      "frame-ancestors 'none'; sandbox;",
  },
  
  // Enable compression
  compress: true,
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
