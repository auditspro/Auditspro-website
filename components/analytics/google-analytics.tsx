// app/components/analytics/google-analytics.tsx
'use client';

import Script from 'next/script';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Prioritize: prop → env → nothing (do not fallback to old ID)
  const GA_MEASUREMENT_ID =
    measurementId ||
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Don't render if no valid ID
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics is disabled: no Measurement ID provided.');
    return null;
  }

  // Skip in development unless debug mode is on
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GA_DEBUG) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => console.log('Google Analytics loaded')}
        onError={(e) => console.error('Google Analytics failed to load:', e)}
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
    </>
  );
}

// ✅ Corrected: Use 'page_view' event instead of re-configuring
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_location: url,
      page_title: title || document.title,
    });
  }
};

// Generic event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Predefined business events (great for AuditsPro!)
export const trackAuditEvents = {
  contactFormSubmit: (formType: string) =>
    trackEvent('contact_form_submit', {
      form_type: formType,
      event_category: 'engagement',
      event_label: 'Contact Form',
    }),

  servicePageView: (serviceType: string) =>
    trackEvent('service_page_view', {
      service_type: serviceType,
      event_category: 'engagement',
      event_label: 'Service Interest',
    }),

  pricingView: () =>
    trackEvent('pricing_page_view', {
      event_category: 'engagement',
      event_label: 'Pricing Interest',
    }),

  demoBooking: () =>
    trackEvent('demo_booking', {
      event_category: 'conversion',
      event_label: 'Demo Request',
      value: 1,
    }),

  phoneClick: () =>
    trackEvent('phone_click', {
      event_category: 'engagement',
      event_label: 'Phone Contact',
    }),

  emailClick: () =>
    trackEvent('email_click', {
      event_category: 'engagement',
      event_label: 'Email Contact',
    }),
};