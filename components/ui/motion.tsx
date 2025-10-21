"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

// Define the motion component props with proper TypeScript support
interface CustomMotionProps<Tag extends keyof React.JSX.IntrinsicElements>
  extends MotionProps {
  as?: Tag;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable Motion component for client-side animations
 * Separates animation logic from SSR pages to maintain SEO benefits
 *
 * Usage:
 * <Motion className="..." initial={{...}} animate={{...}}>content</Motion>
 * <Motion as="section" className="..." initial={{...}} animate={{...}}>content</Motion>
 */
export const Motion = <Tag extends keyof React.JSX.IntrinsicElements = "div">({
  as,
  children,
  className,
  ...motionProps
}: CustomMotionProps<Tag>) => {
  // Default to motion.div if no 'as' prop is provided
  const Component = as
    ? (motion as unknown as Record<string, React.ComponentType<MotionProps>>)[
        as
      ]
    : motion.div;

  return (
    <Component className={className} {...motionProps}>
      {children}
    </Component>
  );
};

// Pre-defined animation variants for consistency and reusability
export const motionVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  // Slide animations
  slideInLeft: {
    initial: { opacity: 0, x: -16 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -16 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 16 },
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
};

// Common transition configurations
export const motionTransitions = {
  smooth: { duration: 0.5, ease: "easeOut" as const },
  quick: { duration: 0.3, ease: "easeOut" as const },
  slow: { duration: 0.8, ease: "easeOut" as const },
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
};

// Viewport configuration for scroll-triggered animations
export const motionViewport = {
  once: true,
  amount: 0.3,
};

export default Motion;
