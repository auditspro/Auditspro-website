"use client";

import React from "react";
import { Motion } from "@/components/ui/motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const contactOptions = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "Speak directly with our audit experts",
    action: "1300 AUDITS",
    href: "tel:1300283487",
    highlight: "Immediate assistance",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Support",
    description: "Get detailed answers to your questions",
    action: "hello@auditspro.com.au",
    href: "mailto:hello@auditspro.com.au",
    highlight: "24hr response",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Live Chat",
    description: "Chat with our team in real-time",
    action: "Coming Soon",
    href: "#",
    highlight: "Coming Soon",
    disabled: true,
  },
  {
    icon: CalendarDaysIcon,
    title: "Book Consultation",
    description: "Schedule a free consultation call",
    action: "Book Now",
    href: "/book-consultation",
    highlight: "Free consultation",
  },
];

const faqs = [
  {
    question: "How long does an audit take?",
    answer: "Most audits are completed within 5-10 business days from receipt of all required documentation.",
  },
  {
    question: "What documents do I need to provide?",
    answer: "You'll need bank statements, trust account ledgers, reconciliations, and relevant client files.",
  },
  {
    question: "Are your audits compliant with all states?",
    answer: "Yes, our audits meet ASIC, APES 310, and all state-specific requirements across Australia.",
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
          <QuestionMarkCircleIcon className="size-4 fill-brand-700 text-brand-700" />
          <span>Need Help?</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
          Get in Touch with Our Experts
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Have questions about our audit services or pricing? Our team of experts 
          is here to help you find the right solution for your business.
        </p>
      </Motion>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Options */}
        <div>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-brand-950 mb-6">
              Contact Options
            </h3>

            <div className="space-y-4">
              {contactOptions.map((option, index) => (
                <Motion
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {option.disabled ? (
                    <div className="group relative rounded-xl border border-brand-200/70 bg-white/70 backdrop-blur p-4 transition-all duration-300 opacity-60 cursor-not-allowed supports-[backdrop-filter]:bg-white/40">
                      <div className="relative flex items-center gap-4">
                        {/* Icon */}
                        <div className="rounded-lg bg-brand-100/60 p-3">
                          <option.icon className="size-5 text-brand-900" />
                        </div>

                        {/* Content */}
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
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-brand-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                        <div className="relative flex items-center gap-4">
                          {/* Icon */}
                          <div className="rounded-lg bg-brand-100/60 p-3 group-hover:bg-brand-200/80 group-hover:scale-110 transition-all duration-300">
                            <option.icon className="size-5 text-brand-900" />
                          </div>

                          {/* Content */}
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
        </div>

        {/* FAQ Section */}
        <div>
          <Motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-brand-950 mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Motion
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="bg-white/80 backdrop-blur border border-brand-200/50 rounded-xl p-4 supports-[backdrop-filter]:bg-white/60">
                    <h4 className="font-medium text-brand-950 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </Motion>
              ))}
            </div>

            {/* More FAQs Link */}
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6"
            >
              <Link href="/faq">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors">
                  View All FAQs
                  <ArrowRightIcon className="size-4" />
                </div>
              </Link>
            </Motion>
          </Motion>
        </div>
      </div>

      {/* Bottom CTA */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-center mt-12"
      >
        <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200/50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-brand-950">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Our audit experts are standing by to help you understand our services 
            and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 shadow-md hover:shadow-lg transition-all">
                <CalendarDaysIcon className="size-5" />
                Book Free Consultation
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