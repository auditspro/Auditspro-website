"use client";

import React from "react";
import Link from "next/link";
import { Motion } from "@/components/ui/motion";
import { ContactForm } from "@/components/ui/contact-form";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const contactOptions = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "Speak directly with our real estate audit experts",
    action: "1300 AUDITS",
    href: "tel:1300283487",
    highlight: "Immediate assistance",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Support",
    description: "Get detailed answers about real estate audits",
    action: "hello@auditspro.com.au",
    href: "mailto:hello@auditspro.com.au",
    highlight: "24hr response",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Live Chat",
    description: "Chat with our real estate audit specialists",
    action: "Coming Soon",
    href: "#",
    highlight: "Coming Soon",
    disabled: true,
  },
  {
    icon: CalendarDaysIcon,
    title: "Book Consultation",
    description: "Schedule a free real estate audit consultation",
    action: "Book Now",
    href: "/contact",
    highlight: "Free consultation",
  },
];

const keyBenefits = [
  {
    icon: ClockIcon,
    text: "24-hour response guarantee",
    desc: "Get started immediately with our fast response team",
  },
  {
    icon: ShieldCheckIcon,
    text: "Regulatory compliant reports",
    desc: "All audits meet professional regulatory standards",
  },
  {
    icon: CheckCircleIcon,
    text: "Expert real estate auditors",
    desc: "Specialized auditors with real estate expertise",
  },
  {
    icon: CurrencyDollarIcon,
    text: "Fixed pricing from $549 + GST",
    desc: "Transparent pricing with no hidden costs",
  },
];

export function ContactSection() {
  return (
    <section className="container relative mx-auto px-4 sm:px-6 py-16">
      {/* Section Header */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900 mb-4">
          <QuestionMarkCircleIcon className="size-4" />
          <span>Get Started</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
          Get Your Real Estate Audit Started
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Ready to ensure compliance with regulatory requirements? Our expert real estate auditors 
          are here to help you maintain professional standards and regulatory compliance.
          We also provide specialized services for{" "}
          <Link
            href="/services/solicitors"
            className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
          >
            solicitors
          </Link>{" "}
          and{" "}
          <Link
            href="/services/conveyancers"
            className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
          >
            conveyancers
          </Link>
          .
        </p>
      </Motion>

      <div className="max-w-4xl mx-auto">
        {/* Enhanced Contact Form - Full Width */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur border border-brand-200/50 rounded-2xl p-8 supports-[backdrop-filter]:bg-white/60 shadow-lg">
            <ContactForm
              title="Start Your Real Estate Audit"
              subtitle="Get your regulatory compliant audit started with our real estate specialists."
              variant="default"
              theme="light"
              showTitle={true}
              className="max-w-none"
            />
          </div>
        </Motion>

        {/* Contact Options & Benefits Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Options */}
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-brand-950 mb-6">
              Contact Our Real Estate Audit Experts
            </h3>

            <div className="space-y-4">
              {contactOptions.map((option, index) => (
                <Motion
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {option.disabled ? (
                    <div className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-4 transition-all duration-300 opacity-60 cursor-not-allowed supports-[backdrop-filter]:bg-white/40">
                      <div className="relative flex items-center gap-4">
                        <div className="rounded-lg bg-brand-100/60 p-3">
                          <option.icon className="size-5 text-brand-900" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-brand-950">
                              {option.title}
                            </h4>
                            <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                              {option.highlight}
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">
                            {option.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            {option.action}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={option.href}>
                      <div className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-4 transition-all duration-300 hover:shadow-lg hover:border-brand-300 supports-[backdrop-filter]:bg-white/40">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-brand-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                        <div className="relative flex items-center gap-4">
                          <div className="rounded-lg bg-brand-100/60 p-3 group-hover:bg-brand-200/80 group-hover:scale-110 transition-all duration-300">
                            <option.icon className="size-5 text-brand-900" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-brand-950">
                                {option.title}
                              </h4>
                              <div className="inline-flex items-center gap-1 text-xs font-medium text-brand-700 bg-brand-100/50 px-2 py-1 rounded-full">
                                {option.highlight}
                              </div>
                            </div>
                            <p className="text-sm text-slate-600 mb-2">
                              {option.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-brand-700">
                              {option.action}
                              <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </Motion>
              ))}
            </div>
          </Motion>

          {/* Key Benefits */}
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-brand-950 mb-6">
              Why Choose Our Real Estate Audit Services
            </h4>
            <div className="space-y-4">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur border border-brand-200/50 rounded-lg supports-[backdrop-filter]:bg-white/60"
                >
                  <benefit.icon className="size-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-700 font-medium block text-sm">
                      {benefit.text}
                    </span>
                    <span className="text-slate-600 text-xs">
                      {benefit.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Motion>
        </div>
      </div>

      {/* Bottom CTA */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200/50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-brand-950">
            Ready to Ensure Regulatory Compliance?
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Don&apos;t risk regulatory action. Our real estate audit experts are standing by 
            to help you maintain regulatory compliance with professional audit services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 shadow-md hover:shadow-lg transition-all">
                <CalendarDaysIcon className="size-5" />
                Start Real Estate Audit
              </button>
            </Link>
            <Link href="tel:1300283487">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-300 bg-white text-brand-900 px-6 py-3 font-medium hover:bg-brand-50 hover:border-brand-400 transition-all">
                <PhoneIcon className="size-5" />
                Call 1300 AUDITS
              </button>
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  );
}