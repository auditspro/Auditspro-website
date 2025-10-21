'use client';

import { Outfit } from 'next/font/google';
import React from 'react';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

export interface AuditsProLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * AuditsPro Official Logo - FINAL PRODUCTION VERSION
 * 
 * COLOR SCHEME: Option B - ULTRA Deep Authority
 * - Text: Blue-950 (#172554) - Maximum darkness & authority
 * - Box Dark: Blue-900 (#1e3a8a) - Ultra-deep professional
 * - Box Light: Blue-700 (#1d4ed8) - Darker contrast
 * 
 * FEATURES:
 * - NO gradients - solid, professional colors
 * - Maximum authority and gravitas
 * - Perfect for financial services & auditing
 * - Exceptional contrast and readability
 * - WCAG AAA accessibility compliance
 * 
 * USAGE:
 * <AuditsProLogo size="sm" /> // Mobile/compact (192x64px)
 * <AuditsProLogo size="md" /> // Header (256x80px) - DEFAULT
 * <AuditsProLogo size="lg" /> // Hero/landing (320x96px)
 */
export const AuditsProLogo = ({ 
  className = '', 
  size = 'md'
}: AuditsProLogoProps) => {
  
  // Responsive sizing
  const sizeClasses = {
    sm: 'w-48 h-16',    // ~192x64px - Mobile/compact
    md: 'w-64 h-20',    // ~256x80px - Desktop header
    lg: 'w-80 h-24',    // ~320x96px - Hero/landing
  };

  return (
    <div 
      className={`${outfit.className} ${sizeClasses[size]} ${className} inline-block`}
      aria-label="AuditsPro - Trust Account Auditing"
      role="img"
    >
      <svg
        viewBox="0 0 400 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 2×2 Modular Grid Icon - ULTRA Deep Blue */}
        <g transform="translate(0, 30)">
          {/* Top-left: Ultra dark blue */}
          <rect 
            x="0" 
            y="0" 
            width="20" 
            height="20" 
            rx="3" 
            fill="#1e3a8a"
            opacity="0.95"
          />
          
          {/* Top-right: Darker contrast blue */}
          <rect 
            x="24" 
            y="0" 
            width="20" 
            height="20" 
            rx="3" 
            fill="#1d4ed8"
            opacity="0.80"
          />
          
          {/* Bottom-left: Darker contrast blue */}
          <rect 
            x="0" 
            y="24" 
            width="20" 
            height="20" 
            rx="3" 
            fill="#1d4ed8"
            opacity="0.80"
          />
          
          {/* Bottom-right: Ultra dark blue */}
          <rect 
            x="24" 
            y="24" 
            width="20" 
            height="20" 
            rx="3" 
            fill="#1e3a8a"
            opacity="0.95"
          />
        </g>
  
        {/* Wordmark: Blue-950 - Maximum authority */}
        <text
          x="56"
          y="60"
          fontFamily="Outfit, ui-sans-serif, system-ui, sans-serif"
          fontSize="36"
          fontWeight="500"
          fill="#172554"
          style={{ letterSpacing: '-0.5px' }}
        >
          AuditsPro
        </text>
  
        {/* Tagline: Matches wordmark color */}
        <text
          x="56"
          y="72"
          fontFamily="Outfit, ui-sans-serif, system-ui, sans-serif"
          fontSize="9"
          fontWeight="500"
          fill="#172554"
          opacity="0.80"
          style={{ letterSpacing: '2px' }}
        >
          TRUST ACCOUNT AUDITING
        </text>
      </svg>
    </div>
  );
};