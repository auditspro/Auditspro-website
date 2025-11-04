'use client';

import Script from 'next/script';
import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface PageViewTrackerProps {
  measurementId: string;
}

function PageViewTracker({ measurementId }: PageViewTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const path = pathname + (searchParams && searchParams.toString() ? `?${searchParams.toString()}` : '');
    const title = document.title;
    const url = window.location.href;

    const gtag = window.gtag;
    if (gtag) {
      gtag('event', 'page_view', {
        page_title: title,
        page_location: url,
        page_path: path,
      });
    }
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics disabled: NEXT_PUBLIC_GA_MEASUREMENT_ID not set.');
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 

            // Consent Mode v2 baseline (adjust per your policy)
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'granted',
              functionality_storage: 'granted',
              security_storage: 'granted'
            });

            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false, // Manual SPA page_view tracking
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />

      {/* Track pageviews on route changes (App Router SPA) */}
      <Suspense fallback={null}>
        <PageViewTracker measurementId={GA_MEASUREMENT_ID} />
      </Suspense>
    </>
  );
}