"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type Props = {
  clarityId: string;
};

// Loads Microsoft Clarity only when user has granted cookies.
export default function ClarityWithConsent({ clarityId }: Props) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    try {
      const stored = typeof window !== "undefined"
        ? window.localStorage.getItem("auditspro_cookie_consent")
        : null;
      setEnabled(stored === "granted");
    } catch {
      setEnabled(false);
    }

    const onConsent = (e: Event) => {
      // Event detail: { consent: 'granted' | 'denied' }
      const detail = (e as CustomEvent).detail as { consent?: string } | undefined;
      if (detail?.consent === "granted") setEnabled(true);
      if (detail?.consent === "denied") setEnabled(false);
    };

    window.addEventListener("cookie-consent-updated", onConsent as EventListener);
    return () => window.removeEventListener("cookie-consent-updated", onConsent as EventListener);
  }, []);

  if (!enabled) return null;

  // Use next/script to load Clarity once consent is granted.
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${clarityId}");`}
    </Script>
  );
}