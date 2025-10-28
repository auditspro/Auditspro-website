"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Building,
  MapPin,
  Search,
  TrendingDown,
  Car,
  FileCheck,
  Users,
  Calculator,
  Home,
  Briefcase,
  Scale,
  Star,
} from "lucide-react";

// Business type configurations
const businessTypes = {
  accounting: {
    label: "Accounting",
    icon: Calculator,
    color: "text-blue-600",
    description: "APES 310 compliant trust account audits for accounting professionals"
  },
  solicitors: {
    label: "Solicitors",
    icon: Scale,
    color: "text-purple-600",
    description: "Comprehensive trust account audits for legal professionals"
  },
  conveyancing: {
    label: "Conveyancing",
    icon: FileCheck,
    color: "text-green-600",
    description: "Specialized audits for conveyancing trust accounts"
  },
  real_estate: {
    label: "Real Estate",
    icon: Building,
    color: "text-orange-600",
    description: "Trust account audits for real estate agents and agencies"
  },
  motor_vehicle_dealers: {
    label: "Motor Vehicle Dealers",
    icon: Car,
    color: "text-red-600",
    description: "Consignment sales audits for motor vehicle dealers"
  },
};

// Australian states
const states = [
  { code: "NSW", name: "New South Wales" },
  { code: "VIC", name: "Victoria" },
  { code: "QLD", name: "Queensland" },
  { code: "WA", name: "Western Australia" },
  { code: "SA", name: "South Australia" },
  { code: "TAS", name: "Tasmania" },
  { code: "ACT", name: "Australian Capital Territory" },
  { code: "NT", name: "Northern Territory" },
];

// Comprehensive pricing data based on the provided table
const pricingData = [
  { businessType: "accounting", state: "WA", description: "Accountant Trust Account - WA", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "accounting", state: "SA", description: "Accountant Trust Account - SA", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "solicitors", state: "TAS", description: "Solicitor Trust Account - TAS", basePrice: 194900, competitorPrice: 200000, discount: 5100, notes: "A1 Audits: $2000, AuditsPro: $1949 (save $51)" },
  { businessType: "solicitors", state: "SA", description: "Solicitor Trust Account - SA", basePrice: 194900, competitorPrice: 200000, discount: 5100, notes: "A1 Audits: $2000, AuditsPro: $1949 (save $51)" },
  { businessType: "conveyancing", state: "NSW", description: "Conveyancer Trust Account - NSW", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "solicitors", state: "NSW", description: "Solicitor Trust Account - NSW", basePrice: 194900, competitorPrice: 200000, discount: 5100, notes: "A1 Audits: $2000, AuditsPro: $1949 (save $51)" },
  { businessType: "conveyancing", state: "VIC", description: "Conveyancer Trust Account - VIC", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "real_estate", state: "VIC", description: "Estate Agent Trust Account - VIC", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "solicitors", state: "ACT", description: "Solicitor Trust Account - ACT", basePrice: 194900, competitorPrice: 200000, discount: 5100, notes: "A1 Audits: $2000, AuditsPro: $1949 (save $51)" },
  { businessType: "real_estate", state: "SA", description: "Estate Agent Trust Account - SA", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51)" },
  { businessType: "motor_vehicle_dealers", state: "QLD", description: "Motor Vehicle Dealers Consignment Sales - QLD", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51)" },
  { businessType: "conveyancing", state: "SA", description: "Conveyancer Trust Account - SA", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51)" },
  { businessType: "accounting", state: "ACT", description: "Accountant Trust Account - ACT", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "real_estate", state: "NT", description: "Estate Agent Trust Account - NT", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51)" },
  { businessType: "conveyancing", state: "TAS", description: "Conveyancer Trust Account - TAS", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "real_estate", state: "NSW", description: "Estate Agent Trust Account - NSW", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "solicitors", state: "WA", description: "Solicitor Trust Account - WA", basePrice: 194900, competitorPrice: 200000, discount: 5100, notes: "A1 Audits: $2000, AuditsPro: $1949 (save $51)" },
  { businessType: "accounting", state: "TAS", description: "Accountant Trust Account - TAS", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "real_estate", state: "ACT", description: "Estate Agent Trust Account - ACT", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "accounting", state: "QLD", description: "Accountant Trust Account - QLD", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51) – includes unannounced examination" },
  { businessType: "conveyancing", state: "NT", description: "Conveyancer Trust Account - NT", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51)" },
  { businessType: "real_estate", state: "QLD", description: "Estate Agent Trust Account - QLD", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51) – includes unannounced examination" },
  { businessType: "accounting", state: "VIC", description: "Accountant Trust Account - VIC", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "real_estate", state: "WA", description: "Estate Agent Trust Account - WA", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51)" },
  { businessType: "solicitors", state: "VIC", description: "Solicitor Trust Account - VIC", basePrice: 194900, competitorPrice: 200000, discount: 5100, notes: "A1 Audits: $2000, AuditsPro: $1949 (save $51)" },
  { businessType: "accounting", state: "NSW", description: "Accountant Trust Account - NSW", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "conveyancing", state: "WA", description: "Conveyancer Trust Account - WA", basePrice: 74900, competitorPrice: 80000, discount: 5100, notes: "A1 Audits: $800, AuditsPro: $749 (save $51)" },
  { businessType: "accounting", state: "NT", description: "Accountant Trust Account - NT", basePrice: 54900, competitorPrice: 60000, discount: 5100, notes: "A1 Audits: $600, AuditsPro: $549 (save $51)" },
  { businessType: "solicitors", state: "QLD", description: "Solicitor Trust Account - QLD", basePrice: 194900, competitorPrice: 200000, discount: 5100, notes: "A1 Audits: $2000, AuditsPro: $1949 (save $51) – includes $10,000 coverage" },
];

// Helper function to format prices
const formatPrice = (price: number) => `$${(price / 100).toFixed(0)}`;

export function PricingPageClient() {
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>("all");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter pricing data based on selections
  const filteredPricing = pricingData.filter((item) => {
    const matchesBusinessType = selectedBusinessType === "all" || item.businessType === selectedBusinessType;
    const matchesState = selectedState === "all" || item.state === selectedState;
    const matchesSearch = searchTerm === "" || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.businessType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.state.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesBusinessType && matchesState && matchesSearch;
  });

  // Get unique pricing tiers
  const pricingTiers = [
    { price: 54900, label: "Standard", description: "Most professions in most states" },
    { price: 74900, label: "Enhanced", description: "QLD, SA, NT, WA for most professions" },
    { price: 194900, label: "Premium", description: "Solicitors across all states" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/60 px-4 py-2 text-sm font-medium text-blue-950 mb-6">
              <DollarSign className="size-4" />
              <span>Transparent Fixed Pricing</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-blue-950 mb-6">
              Trust Account Audit{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fixed transparent pricing for all Australian states and professions. 
              No hidden fees, no surprises – just professional audit services at competitive rates.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { icon: Shield, text: "No Hidden Fees" },
                { icon: Clock, text: "Fast Turnaround" },
                { icon: Award, text: "Professional Service" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700">
                  <benefit.icon className="size-5 text-blue-600" />
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Get Your Quote
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8">
                View Pricing Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Three Simple Pricing Tiers
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our pricing is structured around three transparent tiers based on profession and state requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.price}
                className={`relative rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:shadow-lg ${
                  index === 1 ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">{tier.label}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-950">{formatPrice(tier.price)}</span>
                    <span className="text-slate-600 ml-1">+ GST</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-6">{tier.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="size-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Complete audit report</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="size-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Professional certification</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="size-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Fast turnaround</span>
                    </div>
                    {tier.price === 194900 && (
                      <div className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="size-4 text-green-600 mr-2 flex-shrink-0" />
                        <span>Enhanced legal compliance</span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      index === 1 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Table */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Find Your Exact Pricing
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Use our interactive pricing tool to find the exact cost for your profession and state.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Business Type Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Building className="inline size-4 mr-1" />
                  Business Type
                </label>
                <select
                  value={selectedBusinessType}
                  onChange={(e) => setSelectedBusinessType(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Business Types</option>
                  {Object.entries(businessTypes).map(([key, type]) => (
                    <option key={key} value={key}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* State Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <MapPin className="inline size-4 mr-1" />
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All States</option>
                  {states.map((state) => (
                    <option key={state.code} value={state.code}>{state.code} - {state.name}</option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Search className="inline size-4 mr-1" />
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-center mb-6">
            <p className="text-slate-600">
              Showing <span className="font-semibold text-blue-950">{filteredPricing.length}</span> pricing options
              {selectedBusinessType !== "all" && (
                <span> for <span className="font-semibold">{businessTypes[selectedBusinessType as keyof typeof businessTypes]?.label}</span></span>
              )}
              {selectedState !== "all" && (
                <span> in <span className="font-semibold">{selectedState}</span></span>
              )}
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">State</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">AuditsPro Price</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Competitor Price</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">You Save</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredPricing.map((item, index) => {
                    const businessType = businessTypes[item.businessType as keyof typeof businessTypes];
                    const IconComponent = businessType?.icon || Building;
                    
                    return (
                      <tr key={index} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <IconComponent className={`size-5 mr-3 ${businessType?.color || 'text-slate-600'}`} />
                            <div>
                              <div className="font-medium text-slate-900">{item.description}</div>
                              <div className="text-sm text-slate-500">{businessType?.label}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {item.state}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-green-600 text-lg">{formatPrice(item.basePrice)}</div>
                          <div className="text-xs text-slate-500">+ GST</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-600 line-through">{formatPrice(item.competitorPrice)}</div>
                          <div className="text-xs text-slate-500">+ GST</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <TrendingDown className="size-4 text-green-600 mr-1" />
                            <span className="font-semibold text-green-600">{formatPrice(item.discount)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-slate-600 max-w-xs">
                            {item.notes}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {filteredPricing.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <Search className="size-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Pricing by Profession
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the audit package that matches your profession. All prices include GST and come with our comprehensive audit report.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Professions */}
            {[
              {
                icon: Building,
                title: "Real Estate Agents",
                price: "$549",
                description: "Trust account audits for real estate agencies",
                features: [
                  "ASIC compliant audit",
                  "5-10 business day turnaround",
                  "24-hour response guarantee",
                  "Comprehensive audit report",
                  "Expert real estate auditors",
                ],
                popular: true,
              },
              {
                icon: Calculator,
                title: "Accountants",
                price: "$549",
                description: "APES 310 compliant audits for accounting practices",
                features: [
                  "APES 310 compliant",
                  "Professional accounting auditors",
                  "Fast turnaround",
                  "Detailed compliance report",
                  "No hidden fees",
                ],
              },
              {
                icon: Users,
                title: "Mortgage Brokers",
                price: "$549",
                description: "Trust account audits for mortgage broking businesses",
                features: [
                  "Industry-specific expertise",
                  "Regulatory compliance",
                  "Professional auditors",
                  "Quick completion",
                  "Fixed pricing",
                ],
              },
              {
                icon: Briefcase,
                title: "Business Brokers",
                price: "$549",
                description: "Specialized audits for business brokerage firms",
                features: [
                  "Business broker expertise",
                  "Compliance assurance",
                  "Professional service",
                  "Fast delivery",
                  "Transparent pricing",
                ],
              },
              {
                icon: Home,
                title: "Conveyancers",
                price: "$549",
                description: "Trust account audits for conveyancing practices",
                features: [
                  "Conveyancing expertise",
                  "State compliance",
                  "Professional auditors",
                  "Quick turnaround",
                  "All-inclusive pricing",
                ],
              },
              {
                icon: Scale,
                title: "Solicitors",
                price: "$649",
                description: "Specialized audits for legal practices",
                features: [
                  "Legal practice expertise",
                  "Enhanced compliance checks",
                  "Specialized legal auditors",
                  "Comprehensive reporting",
                  "Professional standards",
                ],
                premium: true,
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`relative rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? "border-blue-200 bg-blue-50/50 ring-2 ring-blue-200"
                    : plan.premium
                    ? "border-purple-200 bg-purple-50/50"
                    : "border-slate-200 bg-white hover:border-blue-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      <Star className="size-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                {plan.premium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                      <Award className="size-3" />
                      Premium
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <plan.icon className={`size-12 mx-auto mb-4 ${
                    plan.popular ? "text-blue-600" : plan.premium ? "text-purple-600" : "text-slate-600"
                  }`} />
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">{plan.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-blue-950">{plan.price}</span>
                    <span className="text-slate-600 ml-1">+ GST</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : plan.premium 
                      ? "bg-purple-600 hover:bg-purple-700"
                      : ""
                  }`}
                  variant={plan.popular || plan.premium ? "default" : "outline"}
                >
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Coverage Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Australia-Wide Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Consistent pricing across all Australian states and territories. 
              Professional auditors familiar with local regulations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { state: "NSW", name: "New South Wales", price: "From $549" },
              { state: "VIC", name: "Victoria", price: "From $549" },
              { state: "QLD", name: "Queensland", price: "From $749" },
              { state: "WA", name: "Western Australia", price: "From $749" },
              { state: "SA", name: "South Australia", price: "From $749" },
              { state: "TAS", name: "Tasmania", price: "From $549" },
              { state: "ACT", name: "Australian Capital Territory", price: "From $549" },
              { state: "NT", name: "Northern Territory", price: "From $749" },
            ].map((location) => (
              <div
                key={location.state}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow"
              >
                <MapPin className="size-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-950 mb-1">{location.state}</h3>
                <p className="text-slate-600 text-sm mb-2">{location.name}</p>
                <p className="text-blue-600 font-medium text-sm">{location.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Why Our Pricing Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transparent, competitive, and designed to give you the best value for professional audit services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "No Hidden Fees",
                description: "What you see is what you pay. No surprise charges or additional costs.",
                color: "text-green-600",
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "5-10 business day completion with 24-hour response guarantee.",
                color: "text-blue-600",
              },
              {
                icon: Award,
                title: "Expert Auditors",
                description: "Qualified professionals with industry-specific expertise.",
                color: "text-purple-600",
              },
              {
                icon: DollarSign,
                title: "Competitive Rates",
                description: "Fair pricing that delivers exceptional value for professional service.",
                color: "text-orange-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className={`size-8 ${item.color}`} />
                </div>
                <h3 className="font-semibold text-blue-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Pricing Questions & Answers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common questions about our pricing structure and what&apos;s included.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How much does a trust account audit cost?",
                answer: "Our trust account audits start from $549 + GST for most professions, with specialized pricing for solicitors at $1949 + GST. All pricing is fixed with no hidden fees.",
              },
              {
                question: "Do prices vary by state?",
                answer: "Yes, we have three pricing tiers: $549 for NSW, VIC, TAS, ACT; $749 for QLD, WA, SA, NT; and $1949 for solicitors across all states.",
              },
              {
                question: "Are there any additional fees?",
                answer: "No, our pricing is all-inclusive with no hidden fees. The quoted price covers the complete audit process including report delivery.",
              },
              {
                question: "Do you offer discounts for multiple trust accounts?",
                answer: "Yes, we offer volume discounts for businesses with multiple trust accounts. Contact us for a customized quote.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and can arrange payment terms for established businesses.",
              },
              {
                question: "When is payment due?",
                answer: "Payment is typically due upon completion of the audit. We can arrange alternative payment terms for ongoing clients.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-4"
              >
                <h3 className="font-semibold text-blue-950 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-950 mb-4">
              Get Your Custom Quote
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ready to get started? Contact us for a personalized quote or to discuss your specific requirements.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 backdrop-blur p-8 rounded-xl border border-blue-200/70">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-slate-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-slate-300 rounded-md"></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}