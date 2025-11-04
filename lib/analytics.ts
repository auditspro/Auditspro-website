// lib/analytics.ts
import { trackEvent } from '@/components/analytics/google-analytics';

// Enhanced analytics tracking for AuditsPro business
export const analytics = {
  // Page view tracking
  page: {
    view: (pageName: string, additionalData?: Record<string, any>) => {
      trackEvent('page_view', {
        page_name: pageName,
        ...additionalData
      });
    }
  },

  // Service-specific tracking
  services: {
    // When user views a service page
    view: (serviceType: 'conveyancers' | 'real-estate' | 'solicitors' | 'accountants') => {
      trackEvent('service_page_view', {
        service_type: serviceType,
        event_category: 'services',
        event_label: `${serviceType} service interest`
      });
    },

    // When user clicks on service features
    featureClick: (featureName: string, serviceType: string) => {
      trackEvent('service_feature_click', {
        feature_name: featureName,
        service_type: serviceType,
        event_category: 'engagement'
      });
    }
  },

  // Contact and conversion tracking
  contact: {
    // Form submissions
    formSubmit: (formType: 'contact' | 'demo' | 'quote', formData?: Record<string, any>) => {
      trackEvent('form_submit', {
        form_type: formType,
        event_category: 'conversion',
        event_label: `${formType} form submission`,
        value: formType === 'demo' ? 10 : 5, // Assign values based on lead quality
        ...formData
      });
    },

    // Phone number clicks
    phoneClick: (location: string) => {
      trackEvent('phone_click', {
        click_location: location,
        event_category: 'contact',
        event_label: 'Phone number clicked'
      });
    },

    // Email clicks
    emailClick: (location: string) => {
      trackEvent('email_click', {
        click_location: location,
        event_category: 'contact',
        event_label: 'Email clicked'
      });
    }
  },

  // Pricing and business tracking
  pricing: {
    // When user views pricing
    view: () => {
      trackEvent('pricing_view', {
        event_category: 'engagement',
        event_label: 'Pricing page viewed'
      });
    },

    // When user clicks on a pricing plan
    planClick: (planName: string, price: number) => {
      trackEvent('pricing_plan_click', {
        plan_name: planName,
        plan_price: price,
        event_category: 'engagement',
        event_label: `${planName} plan interest`,
        value: price
      });
    }
  },

  // Content engagement
  content: {
    // FAQ interactions
    faqClick: (question: string) => {
      trackEvent('faq_click', {
        question: question.substring(0, 100), // Limit length
        event_category: 'engagement',
        event_label: 'FAQ interaction'
      });
    },

    // Download tracking (for audit checklists, guides, etc.)
    download: (fileName: string, fileType: string) => {
      trackEvent('file_download', {
        file_name: fileName,
        file_type: fileType,
        event_category: 'engagement',
        event_label: 'Resource download'
      });
    },

    // Video plays (if you add videos)
    videoPlay: (videoName: string, duration?: number) => {
      trackEvent('video_play', {
        video_name: videoName,
        video_duration: duration,
        event_category: 'engagement',
        event_label: 'Video engagement'
      });
    }
  },

  // Navigation and user behavior
  navigation: {
    // External link clicks
    externalLinkClick: (url: string, linkText: string) => {
      trackEvent('external_link_click', {
        link_url: url,
        link_text: linkText,
        event_category: 'navigation',
        event_label: 'External link clicked'
      });
    },

    // Internal navigation
    internalLinkClick: (fromPage: string, toPage: string) => {
      trackEvent('internal_navigation', {
        from_page: fromPage,
        to_page: toPage,
        event_category: 'navigation',
        event_label: 'Internal navigation'
      });
    }
  },

  // Business-specific events
  business: {
    // When user shows interest in specific audit types
    auditInterest: (auditType: 'trust-account' | 'compliance' | 'regulatory') => {
      trackEvent('audit_interest', {
        audit_type: auditType,
        event_category: 'business_interest',
        event_label: `${auditType} audit interest`
      });
    },

    // When user checks compliance information
    complianceCheck: (complianceType: string) => {
      trackEvent('compliance_check', {
        compliance_type: complianceType,
        event_category: 'business_interest',
        event_label: 'Compliance information viewed'
      });
    }
  }
};

// Utility function to track scroll depth
export const trackScrollDepth = () => {
  let maxScroll = 0;
  
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent;
      trackEvent('scroll_depth', {
        scroll_percentage: scrollPercent,
        event_category: 'engagement',
        event_label: `${scrollPercent}% scroll depth`
      });
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }
};

// Enhanced ecommerce tracking for service purchases
export const trackPurchase = (transactionId: string, value: number, items: Array<{
  item_id: string;
  item_name: string;
  category: string;
  quantity: number;
  price: number;
}>) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'AUD',
    items: items
  });
};