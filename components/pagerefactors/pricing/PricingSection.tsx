"use client";

import React, { useState } from "react";
import { Motion } from "@/components/ui/motion";
import {
  BuildingOffice2Icon,
  CalculatorIcon,
  ReceiptPercentIcon,
  ScaleIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
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
    popular: false,
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Accountant trust account audits",
    icon: CalculatorIcon,
    features: ["APES 310 compliant", "Expert auditors", "Fast delivery"],
    popular: false,
  },
  {
    id: "conveyancing",
    title: "Conveyancing",
    description: "Conveyancer trust account audits",
    icon: ReceiptPercentIcon,
    features: ["State compliant", "Quick turnaround", "Detailed report"],
    popular: false,
  },
  {
    id: "legal",
    title: "Legal/Solicitors",
    description: "Solicitor trust account audits",
    icon: ScaleIcon,
    features: ["Enhanced compliance", "Legal expertise", "Comprehensive audit"],
    popular: false,
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

export function PricingSection() {
  const [selectedState, setSelectedState] = useState<string>("NSW");

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
          <StarIcon className="size-4 fill-brand-700 text-brand-700" />
          <span>Fixed Transparent Pricing</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
          Choose Your Audit Service
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Professional trust account audits with transparent, fixed pricing. 
          Select your state and profession to see your exact cost.
        </p>

        {/* State Selector - Radio Buttons */}
        <div className="max-w-4xl mx-auto">
          <label className="block text-sm font-medium text-brand-950 mb-4 text-center">
            Select Your State
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {states.map((state) => (
              <label
                key={state.code}
                className={`relative flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedState === state.code
                    ? 'border-brand-500 bg-brand-50 text-brand-900'
                    : 'border-brand-200 bg-white hover:border-brand-300 hover:bg-brand-50/50'
                }`}
              >
                <input
                  type="radio"
                  name="state"
                  value={state.code}
                  checked={selectedState === state.code}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{state.shortName}</span>
                <span className="text-xs text-slate-400 text-center leading-tight mt-1">{state.name}</span>
                {selectedState === state.code && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-500 rounded-full"></div>
                )}
              </label>
            ))}
          </div>
        </div>
      </Motion>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceTypes.map((service, index) => {
          const price = getServicePrice(service.id, selectedState);
          const formattedPrice = formatPrice(price);

          return (
            <Motion
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`group relative h-full rounded-xl border p-6 transition-all duration-300 hover:shadow-xl ${
                service.popular 
                  ? 'border-brand-300 bg-gradient-to-br from-brand-50/80 to-white shadow-lg' 
                  : 'border-brand-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 hover:border-brand-300'
              }`}>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-brand-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative">
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className="rounded-lg bg-brand-100/60 p-4 inline-flex group-hover:bg-brand-200/80 group-hover:scale-110 transition-all duration-300 mb-4">
                      <service.icon className="size-8 text-brand-900" />
                    </div>
                    <h3 className="font-semibold text-brand-950 text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-brand-950 mb-1">
                      ${formattedPrice}
                    </div>
                    <div className="text-sm text-slate-600">
                      + GST per audit
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircleIcon className="size-4 text-brand-700 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href="/book-demo" className="block">
                    <button className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                      service.popular
                        ? 'bg-brand-900 text-white hover:bg-brand-800 shadow-md hover:shadow-lg'
                        : 'border border-brand-200 bg-white text-brand-950 hover:bg-brand-50 hover:border-brand-300'
                    }`}>
                      Start Your Audit
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </Motion>
          );
        })}
      </div>

      {/* Additional Info */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <div className="bg-brand-50/80 border border-brand-200/50 rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-brand-950 mb-2">
            Need Multiple Audits?
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Volume discounts available for businesses with multiple trust accounts. 
            Contact us for a customized quote.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors">
              Get Custom Quote
              <ArrowRightIcon className="size-4" />
            </button>
          </Link>
        </div>
      </Motion>
    </section>
  );
}