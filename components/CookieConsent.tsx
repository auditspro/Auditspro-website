// app/components/CookieConsent.tsx
'use client';

import { useEffect } from 'react';
import 'cookieconsent/build/cookieconsent.min.css';

declare global {
  interface Window {
    cookieconsent: any;
  }
}

export function CookieConsent() {
  useEffect(() => {
    // Dynamically load cookieconsent only on client
    import('cookieconsent').then((cc) => {
      window.cookieconsent?.initialise({
        palette: {
          popup: { background: '#000', text: '#fff' },
          button: { background: '#fff', text: '#000' },
        },
        theme: 'classic',
        content: {
          message:
            'We use cookies to improve your experience and analyze traffic.',
          dismiss: 'Accept All',
          deny: 'Reject All',
          link: 'Learn more',
          href: '/privacy-policy', // 👈 Create this page later
        },
        onInitialise: function (status: string) {
          if (status === 'deny') {
            // User rejected cookies — you can disable GA manually if needed
            console.log('Cookies rejected');
          }
        },
        onStatusChange: function (status: string) {
          if (status === 'deny') {
            console.log('Cookies rejected');
          }
        },
        law: { regionalLaw: false },
        location: true,
      });
    });
  }, []);

  return null;
}