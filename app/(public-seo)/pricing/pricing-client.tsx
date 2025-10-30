"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Motion } from "@/components/ui/motion";
import {
  BanknotesIcon,
  ShieldCheckIcon,
  TrophyIcon,
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
  BuildingOffice2Icon,
  ReceiptPercentIcon,
  CalculatorIcon,
  ScaleIcon,
  GlobeAltIcon,
  ChartBarSquareIcon,
  MagnifyingGlassIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  LockClosedIcon,
  DocumentTextIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Australian states
const states = [
  { code: "ACT", name: "Australian Capital Territory", shortName: "ACT" },
  { code: "NSW", name: "New South Wales", shortName: "NSW" },
  { code: "NT", name: "Northern Territory", shortName: "NT" },
  { code: "QLD", name: "Queensland", shortName: "QLD" },
  { code: "SA", name: "South Australia", shortName: "SA" },
  { code: "TAS", name: "Tasmania", shortName: "TAS" },
  { code: "VIC", name: "Victoria", shortName: "VIC" },
  { code: "WA", name: "Western Australia", shortName: "WA" },
];

// Comprehensive pricing data based on state and business type
const pricingData = [
  { businessType: "accounting", state: "WA", basePrice: 54900 },
  { businessType: "accounting", state: "SA", basePrice: 54900 },
  { businessType: "solicitors", state: "TAS", basePrice: 194900 },
  { businessType: "solicitors", state: "SA", basePrice: 194900 },
  { businessType: "conveyancing", state: "NSW", basePrice: 54900 },
  { businessType: "solicitors", state: "NSW", basePrice: 194900 },
  { businessType: "conveyancing", state: "VIC", basePrice: 54900 },
  { businessType: "real_estate", state: "VIC", basePrice: 54900 },
  { businessType: "solicitors", state: "ACT", basePrice: 194900 },
  { businessType: "real_estate", state: "SA", basePrice: 74900 },
  { businessType: "conveyancing", state: "SA", basePrice: 74900 },
  { businessType: "accounting", state: "ACT", basePrice: 54900 },
  { businessType: "real_estate", state: "NT", basePrice: 74900 },
  { businessType: "conveyancing", state: "TAS", basePrice: 54900 },
  { businessType: "real_estate", state: "NSW", basePrice: 54900 },
  { businessType: "solicitors", state: "WA", basePrice: 194900 },
  { businessType: "accounting", state: "TAS", basePrice: 54900 },
  { businessType: "real_estate", state: "ACT", basePrice: 54900 },
  { businessType: "accounting", state: "QLD", basePrice: 74900 },
  { businessType: "conveyancing", state: "NT", basePrice: 74900 },
  { businessType: "real_estate", state: "QLD", basePrice: 74900 },
  { businessType: "accounting", state: "VIC", basePrice: 54900 },
  { businessType: "real_estate", state: "WA", basePrice: 74900 },
  { businessType: "solicitors", state: "VIC", basePrice: 194900 },
  { businessType: "accounting", state: "NSW", basePrice: 54900 },
  { businessType: "conveyancing", state: "WA", basePrice: 74900 },
  { businessType: "accounting", state: "NT", basePrice: 54900 },
  { businessType: "solicitors", state: "QLD", basePrice: 194900 },
];

// Service types configuration
const serviceTypes = [
  {
    id: "real_estate",
    title: "Real Estate",
    description: "Estate agent trust account audits",
    icon: BuildingOffice2Icon,
    features: ["ASIC compliant", "5-10 day turnaround", "Professional report"],
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Accountant trust account audits",
    icon: CalculatorIcon,
    features: ["APES 310 compliant", "Expert auditors", "Fast delivery"],
  },
  {
    id: "conveyancing",
    title: "Conveyancing",
    description: "Conveyancer trust account audits",
    icon: ReceiptPercentIcon,
    features: ["State compliant", "Quick turnaround", "Detailed report"],
  },
  {
    id: "legal",
    title: "Legal/Solicitors",
    description: "Solicitor trust account audits",
    icon: ScaleIcon,
    features: ["Enhanced compliance", "Legal expertise", "Comprehensive audit"],
  },
];

// Helper function to get price for a service in a specific state
const getServicePrice = (serviceId: string, state: string): number => {
  const businessType = serviceId === "legal" ? "solicitors" : serviceId;
  const pricing = pricingData.find(
    (item) => item.businessType === businessType && item.state === state
  );

  // Default pricing if not found in data
  if (!pricing) {
    if (serviceId === "legal") return 194900; // Default solicitor price
    return 54900; // Default price for other services
  }

  return pricing.basePrice;
};

// Helper function to format prices
const formatPrice = (price: number) => `${(price / 100).toFixed(0)}`;

export function PricingPageClient() {
  const [selectedState, setSelectedState] = useState<string>("NSW");

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-background to-brand-100/30" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 sm:px-6">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <Motion
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="trust-badge mb-6"
            >
              <BanknotesIcon className="size-4" />
              <span>Professional Pricing</span>
            </Motion>

            {/* Headline */}
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-brand-950 mb-6">
                Transparent{" "}
                <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
            </Motion>

            {/* Subheadline */}
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Professional trust account auditing with transparent pricing.
              Quality service for established Australian businesses.
            </Motion>

            {/* Key Benefits */}
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              {[
                { icon: ShieldCheckIcon, text: "No Hidden Fees" },
                { icon: ChartBarSquareIcon, text: "Fast Turnaround" },
                { icon: TrophyIcon, text: "Professional Service" },
              ].map((benefit, index) => (
                <Motion
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <benefit.icon className="size-5 text-brand-600" />
                  <span className="font-medium">{benefit.text}</span>
                </Motion>
              ))}
            </Motion>
          </Motion>
        </div>
      </section>

      {/* State Selection Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
              Select your state:
            </h2>
          </Motion>

          {/* State Selection Grid */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto"
          >
            {states.map((state) => (
              <button
                key={state.code}
                onClick={() => setSelectedState(state.code)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-center group ${
                  selectedState === state.code
                    ? "border-brand-500 bg-brand-50 text-brand-700 shadow-md"
                    : "border-border bg-card text-foreground hover:border-brand-300 hover:bg-brand-50/50 hover:shadow-sm"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <GlobeAltIcon
                    className={`size-5 ${
                      selectedState === state.code
                        ? "text-brand-600"
                        : "text-muted-foreground group-hover:text-brand-500"
                    }`}
                  />
                  <div>
                    <div className="font-semibold text-lg">
                      {state.shortName}
                    </div>
                    <div className="text-xs mt-1 leading-tight text-muted-foreground">
                      {state.name}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </Motion>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {serviceTypes.map((service, index) => {
              const currentPrice = getServicePrice(service.id, selectedState);
              return (
                <Motion
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-200"
                >
                  {/* Service Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-brand-600 rounded-lg">
                      <service.icon className="size-8 text-white" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-brand-950 mb-2 text-center">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground text-sm mb-6 text-center">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 text-center">
                    <div className="text-4xl font-bold text-brand-950 mb-1">
                      ${formatPrice(currentPrice)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      per trust account
                    </div>
                    <div className="text-sm text-muted-foreground">+ GST</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map(
                      (feature: string, featureIndex: number) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckBadgeIcon className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  {/* CTA Button */}
                  <Button asChild className="w-full btn-primary-brand">
                    <Link href="/book-demo">
                      Start Audit
                      <ArrowTopRightOnSquareIcon className="size-4 ml-2" />
                    </Link>
                  </Button>
                </Motion>
              );
            })}
          </Motion>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
              What&apos;s Included in Every Audit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive auditing service with no hidden fees
            </p>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: MagnifyingGlassIcon,
                title: "Complete Trust Account Review",
                description:
                  "Thorough examination of all trust account transactions and records",
              },
              {
                icon: HandRaisedIcon,
                title: "Expert Consultation",
                description:
                  "Access to experienced auditors for questions and guidance",
              },
              {
                icon: AcademicCapIcon,
                title: "Compliance Verification",
                description:
                  "Ensure adherence to state-specific trust account regulations",
              },
              {
                icon: LockClosedIcon,
                title: "Secure Document Handling",
                description:
                  "Bank-grade security for all sensitive financial documents",
              },
              {
                icon: DocumentTextIcon,
                title: "Professional Report",
                description:
                  "Detailed audit report suitable for regulatory submission",
              },
              {
                icon: BoltIcon,
                title: "24-Hour Turnaround",
                description:
                  "Express service to meet urgent compliance requirements",
              },
            ].map((feature, index) => (
              <Motion
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="p-2 bg-brand-600 rounded-lg">
                    <feature.icon className="size-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-950 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </Motion>
            ))}
          </Motion>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
              Why Choose AuditsPro?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional trust account auditing services with transparent
              pricing and no hidden fees.
            </p>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: ShieldCheckIcon,
                title: "No Hidden Fees",
                description:
                  "Transparent pricing with no surprise charges or additional costs.",
              },
              {
                icon: ChartBarSquareIcon,
                title: "Fast Turnaround",
                description:
                  "Quick and efficient audit process with timely delivery of reports.",
              },
              {
                icon: TrophyIcon,
                title: "Professional Service",
                description:
                  "Expert auditors with extensive experience in trust account compliance.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-600 rounded-lg">
                    <feature.icon className="size-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-brand-950 mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </Motion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-brand-950 mb-4">
              Ready to Start Your Audit?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get started with your trust account audit today. Professional
              service with transparent pricing.
            </p>
            <Button asChild size="lg" className="btn-primary-brand px-8">
              <Link href="/book-demo">
                Start Audit Process
                <ArrowTopRightOnSquareIcon className="size-4 ml-2" />
              </Link>
            </Button>
          </Motion>
        </div>
      </section>
    </main>
  );
}
