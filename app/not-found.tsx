"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Motion } from "@/components/ui/motion";
import {
  HomeIcon,
  ArrowLeftIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-background to-brand-100/30" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Error Icon */}
          <Motion
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="p-6 bg-brand-800 rounded-full">
              <ExclamationTriangleIcon className="size-16 text-white" />
            </div>
          </Motion>

          {/* 404 Number */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-8xl sm:text-9xl font-bold text-brand-950 mb-4">
              404
            </h1>
          </Motion>

          {/* Error Message */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
              Page Not Found
            </h2>
          </Motion>

          {/* Description */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed"
          >
            Sorry, we couldn't find the page you're looking for. The page may have been moved, 
            deleted, or you may have entered an incorrect URL.
          </Motion>

          {/* Action Buttons */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="btn-primary-brand px-8">
              <Link href="/">
                <HomeIcon className="size-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-outline-brand px-8">
              <Link href="javascript:history.back()">
                <ArrowLeftIcon className="size-5 mr-2" />
                Go Back
              </Link>
            </Button>
          </Motion>

          {/* Helpful Links */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-border pt-8"
          >
            <h3 className="text-lg font-semibold text-brand-950 mb-6">
              Looking for something specific?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MagnifyingGlassIcon,
                  title: "Our Services",
                  description: "Trust account audits",
                  href: "/services"
                },
                {
                  icon: BanknotesIcon,
                  title: "Pricing",
                  description: "View our rates",
                  href: "/pricing"
                },
                {
                  icon: DocumentTextIcon,
                  title: "How It Works",
                  description: "Our audit process",
                  href: "/how-it-works"
                },
                {
                  icon: HandRaisedIcon,
                  title: "Contact Us",
                  description: "Get in touch",
                  href: "/contact"
                }
              ].map((link, index) => (
                <Motion
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="h-full"
                >
                  <Link
                    href={link.href}
                    className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:border-brand-300 hover:bg-brand-50/50 transition-all duration-200 group h-full min-h-[160px]"
                  >
                    <div className="p-3 bg-brand-800 rounded-lg mb-4 group-hover:bg-brand-900 transition-colors duration-200 flex-shrink-0">
                       <link.icon className="size-6 text-white" />
                     </div>
                    <h4 className="font-semibold text-brand-950 mb-2 flex-shrink-0">{link.title}</h4>
                    <p className="text-sm text-muted-foreground flex-grow">{link.description}</p>
                  </Link>
                </Motion>
              ))}
            </div>
          </Motion>
        </Motion>
      </div>
    </main>
  );
}

// Import additional icons used in helpful links
import {
  BanknotesIcon,
  DocumentTextIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";