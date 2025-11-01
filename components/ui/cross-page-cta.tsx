import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Motion,
  motionVariants,
  motionTransitions,
  motionViewport,
} from "@/components/ui/motion";

interface CrossPageCTAProps {
  variant?: "services-to-pricing" | "pricing-to-booking" | "general-to-contact" | "services-to-booking";
  className?: string;
}

const ctaConfigs = {
  "services-to-pricing": {
    title: "Ready to Get Started?",
    description: "View our transparent pricing and get your trust account audit quote today.",
    primaryButton: {
      text: "View Pricing",
      href: "/pricing",
      icon: DollarSign,
    },
    secondaryButton: {
      text: "Book Consultation",
      href: "/book-demo",
    },
    features: [
      "Fixed pricing from $549 + GST",
      "5-10 business day turnaround",
      "ASIC compliant audits",
    ],
  },
  "pricing-to-booking": {
    title: "Start Your Audit Today",
    description: "Book your trust account audit now and ensure compliance with our expert team.",
    primaryButton: {
      text: "Book Audit Now",
      href: "/book-demo",
      icon: Clock,
    },
    secondaryButton: {
      text: "Contact Us",
      href: "/contact",
    },
    features: [
      "24-hour response time",
      "Expert qualified auditors",
      "Comprehensive audit reports",
    ],
  },
  "general-to-contact": {
    title: "Need Expert Guidance?",
    description: "Contact our professional audit team for personalized assistance and expert advice.",
    primaryButton: {
      text: "Contact Us",
      href: "/contact",
      icon: ArrowRight,
    },
    secondaryButton: {
      text: "How It Works",
      href: "/how-it-works",
    },
    features: [
      "Professional support team",
      "Free consultation available",
      "Australia-wide service",
    ],
  },
  "services-to-booking": {
    title: "Ready for Your Audit?",
    description: "Skip the quotes and book your professional trust account audit directly.",
    primaryButton: {
      text: "Book Audit",
      href: "/book-demo",
      icon: Clock,
    },
    secondaryButton: {
      text: "View Pricing",
      href: "/pricing",
    },
    features: [
      "Direct booking available",
      "Fast turnaround guaranteed",
      "No hidden fees",
    ],
  },
};

export function CrossPageCTA({ variant = "general-to-contact", className = "" }: CrossPageCTAProps) {
  const config = ctaConfigs[variant];

  return (
    <section className={`py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <Motion
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={motionVariants.fadeInUp}
          transition={motionTransitions.smooth}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {config.title}
          </h2>
          <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
            {config.description}
          </p>

          {/* Features */}
          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {config.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              <Link href={config.primaryButton.href}>
                <config.primaryButton.icon className="w-5 h-5" />
                {config.primaryButton.text}
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50"
            >
              <Link href={config.secondaryButton.href}>
                {config.secondaryButton.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </Motion>
      </div>
    </section>
  );
}