// app/components/analytics/GoogleAnalyticsWithConsent.tsx
'use client';

import { useState, useEffect, Suspense } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { updateConsent } from '@/lib/ga';
import { usePathname, useSearchParams } from 'next/navigation';

const COOKIE_NAME = 'auditspro_cookie_consent';

export function GoogleAnalyticsWithConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<boolean | null>(null);

  // Check existing consent on mount
  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_NAME);
    if (saved === 'granted') {
      setConsent(true);
    } else if (saved === 'denied') {
      setConsent(false);
    } else {
      setShowBanner(true); // No choice yet → show banner
    }
  }, []);

  // Allow other parts of the app to reopen the banner (Manage Cookies)
  useEffect(() => {
    const handler = () => setShowBanner(true);
    window.addEventListener('open-cookie-banner', handler as EventListener);
    return () => window.removeEventListener('open-cookie-banner', handler as EventListener);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_NAME, 'granted');
    setConsent(true);
    setShowBanner(false);
    try {
      window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: { consent: 'granted' } }));
    } catch {}
    updateConsent({
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
    });
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_NAME, 'denied');
    setConsent(false);
    setShowBanner(false);
    try {
      window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: { consent: 'denied' } }));
    } catch {}
    updateConsent({
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      security_storage: 'denied',
    });
  };

  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // After GA scripts initialize, explicitly update Consent Mode once gtag is ready
  useEffect(() => {
    if (!consent || typeof window === 'undefined') return;

    let attempts = 0;
    const maxAttempts = 50; // ~5s at 100ms interval
    const interval = setInterval(() => {
      attempts++;
      if (window.gtag) {
        if (consent === true) {
          updateConsent({
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
          });
        }
        clearInterval(interval);
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [consent]);

  function ConsentPageViewTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
      if (typeof window === 'undefined') return;
      if (!consent) return;
      const gtag = window.gtag;
      if (!gtag) return;

      const path = pathname + (searchParams && searchParams.toString() ? `?${searchParams.toString()}` : '');
      const title = document.title;
      const url = window.location.href;

      gtag('event', 'page_view', {
        page_title: title,
        page_location: url,
        page_path: path,
      });
    }, [pathname, searchParams]);

    return null;
  }

  return (
    <>
      {/* Only load GA if consent is granted */}
      {consent === true && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  send_page_view: false,
                  anonymize_ip: true,
                  allow_google_signals: false,
                  allow_ad_personalization_signals: false
                });
              `,
            }}
          />

          {/* Track pageviews on route changes (App Router SPA), gated by consent */}
          <Suspense fallback={null}>
            <ConsentPageViewTracker />
          </Suspense>
        </>
      )}

      {/* Cookie Consent Banner (themed) */}
      {showBanner && (
        <div role="alert" aria-live="polite" className="fixed inset-x-4 sm:inset-x-0 bottom-4 sm:bottom-6 z-[9999]">
          <div className="mx-auto max-w-[1100px]">
            <div className="rounded-xl border border-brand-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed">
                <span className="mr-1">🍪</span>
                We use cookies to improve your experience and analyze traffic.
                <Link href="/privacy-policy" className="ml-1 text-blue-800 hover:text-blue-900 underline underline-offset-2">
                  Learn more
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:ml-auto">
                <Button size="sm" className="bg-brand-900 hover:bg-brand-800 text-white shadow-sm" onClick={handleAccept}>
                  Accept All
                </Button>
                <Button size="sm" variant="outline" className="border-brand-200 text-brand-950 hover:bg-brand-50" onClick={handleReject}>
                  Reject All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}