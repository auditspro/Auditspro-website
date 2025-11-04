'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

interface PageAnalyticsProps {
  pageName: string;
  serviceType?: 'conveyancers' | 'real-estate' | 'solicitors' | 'accountants';
  additionalData?: Record<string, any>;
}

export function PageAnalytics({ pageName, serviceType, additionalData }: PageAnalyticsProps) {
  useEffect(() => {
    // Track page view
    analytics.page.view(pageName, additionalData);
    
    // Track service-specific view if serviceType is provided
    if (serviceType) {
      analytics.services.view(serviceType);
    }
  }, [pageName, serviceType, additionalData]);

  // This component doesn't render anything
  return null;
}

// Hook for tracking events in components
export function useAnalytics() {
  return {
    trackContact: (type: 'phone' | 'email', location: string) => {
      if (type === 'phone') {
        analytics.contact.phoneClick(location);
      } else {
        analytics.contact.emailClick(location);
      }
    },
    
    trackFormSubmit: (formType: 'contact' | 'demo' | 'quote', formData?: Record<string, any>) => {
      analytics.contact.formSubmit(formType, formData);
    },
    
    trackServiceFeature: (featureName: string, serviceType: string) => {
      analytics.services.featureClick(featureName, serviceType);
    },
    
    trackPricing: (planName?: string, price?: number) => {
      if (planName && price) {
        analytics.pricing.planClick(planName, price);
      } else {
        analytics.pricing.view();
      }
    },
    
    trackFAQ: (question: string) => {
      analytics.content.faqClick(question);
    },
    
    trackDownload: (fileName: string, fileType: string) => {
      analytics.content.download(fileName, fileType);
    },
    
    trackExternalLink: (url: string, linkText: string) => {
      analytics.navigation.externalLinkClick(url, linkText);
    }
  };
}