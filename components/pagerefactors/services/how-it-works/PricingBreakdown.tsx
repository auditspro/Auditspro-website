"use client";
import { Motion } from "@/components/ui/motion";
import { useState } from "react";
import { 
  DollarSign, 
  Calculator, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Star,
  Info,
  ChevronDown,
  ChevronUp,
  Zap,
  Award,
  Target,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export function PricingBreakdown() {
  const [selectedState, setSelectedState] = useState<string>("NSW");
  const [selectedAccountType, setSelectedAccountType] = useState<string>("accounting");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  const stateOptions = [
    { code: "NSW", name: "New South Wales" },
    { code: "VIC", name: "Victoria" },
    { code: "QLD", name: "Queensland" },
    { code: "WA", name: "Western Australia" },
    { code: "SA", name: "South Australia" },
    { code: "TAS", name: "Tasmania" },
    { code: "ACT", name: "Australian Capital Territory" },
    { code: "NT", name: "Northern Territory" }
  ];

  const accountTypeOptions = [
    { 
      id: "accounting", 
      name: "Accounting Trust Account", 
      description: "For accounting firms", 
      icon: Calculator,
      features: ["Complete trust account audit", "Transaction verification", "Compliance assessment"],
      pricing: {
        "ACT": 549, "NSW": 549, "NT": 549, "QLD": 749, "SA": 549, "TAS": 549, "VIC": 549, "WA": 549
      },
      notes: { "QLD": "Includes unannounced examination" }
    },
    { 
      id: "solicitor", 
      name: "Solicitor Trust Account", 
      description: "For legal practices", 
      icon: Shield,
      features: ["Comprehensive legal audit", "Regulatory compliance", "Professional standards review"],
      pricing: {
        "ACT": 1949, "NSW": 1949, "NT": 1949, "QLD": 2049, "SA": 1949, "TAS": 1949, "VIC": 1949, "WA": 1949
      },
      notes: { "QLD": "+$100 control account fee" }
    },
    { 
      id: "conveyancer", 
      name: "Conveyancer Trust Account", 
      description: "For conveyancing services", 
      icon: Users,
      features: ["Property transaction audit", "Settlement compliance", "Trust fund verification"],
      pricing: {
        "NSW": 549, "VIC": 549, "SA": 749, "TAS": 549, "NT": 749, "WA": 749
      },
      notes: {}
    },
    { 
      id: "realestate", 
      name: "Real Estate Trust Account", 
      description: "For estate agents", 
      icon: TrendingUp,
      features: ["Property sales audit", "Rental bond compliance", "Commission verification"],
      pricing: {
        "ACT": 549, "NSW": 549, "NT": 749, "QLD": 749, "SA": 749, "VIC": 549, "WA": 749
      },
      notes: { "QLD": "Includes unannounced examination" }
    },
    { 
      id: "motorvehicle", 
      name: "Motor Vehicle Dealers", 
      description: "For vehicle dealers", 
      icon: Award,
      features: ["Consignment sales audit", "Dealer compliance", "Transaction verification"],
      pricing: {
        "QLD": 749
      },
      notes: {}
    }
  ];

  const includedFeatures = [
    {
      category: "Audit Services",
      icon: Shield,
      items: [
        "Complete trust account audit",
        "Transaction verification",
        "Reconciliation analysis",
        "Compliance assessment",
        "Risk evaluation"
      ]
    },
    {
      category: "Reporting & Documentation",
      icon: CheckCircle2,
      items: [
        "Comprehensive audit report",
        "Compliance certificates",
        "Management recommendations",
        "Executive summary",
        "Regulatory submission"
      ]
    },
    {
      category: "Support & Consultation",
      icon: Users,
      items: [
        "Expert consultation",
        "Implementation guidance",
        "Follow-up support",
        "Compliance advice",
        "Best practice recommendations"
      ]
    }
  ];

  const competitorComparison = [
    {
      provider: "AuditsPro",
      price: "From $549",
      turnaround: "7-10 days",
      features: ["✓ Certified auditors", "✓ Digital process", "✓ Guaranteed compliance", "✓ 24/7 support"],
      highlight: true
    },
    {
      provider: "Traditional Firm A",
      price: "From $1,500",
      turnaround: "3-4 weeks",
      features: ["✓ Manual process", "✗ Limited availability", "✓ Basic reporting", "✗ Business hours only"],
      highlight: false
    },
    {
      provider: "Traditional Firm B",
      price: "From $2,000",
      turnaround: "4-6 weeks",
      features: ["✓ Experienced team", "✗ Paper-based", "✗ No guarantees", "✗ Email support only"],
      highlight: false
    }
  ];

  const calculatePrice = () => {
    const selectedAccountData = accountTypeOptions.find(a => a.id === selectedAccountType);
    
    if (!selectedAccountData) return 0;
    
    const price = selectedAccountData.pricing[selectedState as keyof typeof selectedAccountData.pricing];
    return price || 0;
  };

  const getSavings = () => {
    const ourPrice = calculatePrice();
    const traditionalPrice = ourPrice * 2.5; // Assume traditional firms charge 2.5x more
    return traditionalPrice - ourPrice;
  };

  const getSelectedAccountType = () => {
    return accountTypeOptions.find(a => a.id === selectedAccountType);
  };

  const isAccountTypeAvailableInState = (accountTypeId: string, stateCode: string) => {
    const accountType = accountTypeOptions.find(a => a.id === accountTypeId);
    if (!accountType) return false;
    return accountType.pricing[stateCode as keyof typeof accountType.pricing] !== undefined;
  };

  const getPriceNote = () => {
    const selectedAccountData = getSelectedAccountType();
    if (!selectedAccountData) return null;
    return selectedAccountData.notes[selectedState as keyof typeof selectedAccountData.notes] || null;
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="relative py-16 sm:py-20 border-b border-brand-200/70 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40 overflow-hidden">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 mb-6 supports-[backdrop-filter]:bg-white/70">
            <Calculator className="size-4 text-brand-700" />
            <span>Transparent Pricing</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950 mb-4">
            Simple, Fair{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              Pricing Structure
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            No hidden fees, no surprises. Our transparent pricing is based on your firm size and state requirements, 
            delivering exceptional value for professional audit services.
          </p>
        </Motion>

        {/* Interactive Pricing Calculator */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
                <Calculator className="size-4 text-brand-700" />
                <span>Price Calculator</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-950 mb-2">
                Calculate Your Audit Cost
              </h3>
              <p className="text-brand-700">
                Select your state and account type to get an instant quote
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* State Selection */}
              <div>
                <label className="block text-sm font-semibold text-brand-950 mb-3">
                  Select Your State
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {stateOptions.map((state) => (
                    <button
                      key={state.code}
                      onClick={() => setSelectedState(state.code)}
                      className={`
                        p-3 rounded-lg border text-left transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-500
                        ${selectedState === state.code
                          ? 'border-brand-600 bg-brand-50 text-brand-950 ring-2 ring-brand-200/50'
                          : 'border-brand-200 bg-white/70 text-brand-700 hover:border-brand-300'
                        }
                      `}
                      aria-label={`Select ${state.name}`}
                    >
                      <div className="font-medium">{state.code}</div>
                      <div className="text-xs opacity-75">{state.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Account Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-brand-950 mb-3">
                  Select Account Type
                </label>
                <div className="space-y-2">
                  {accountTypeOptions.map((accountType) => {
                    const AccountIcon = accountType.icon;
                    const isAvailable = isAccountTypeAvailableInState(accountType.id, selectedState);
                    const price = accountType.pricing[selectedState as keyof typeof accountType.pricing];
                    
                    return (
                      <button
                        key={accountType.id}
                        onClick={() => isAvailable && setSelectedAccountType(accountType.id)}
                        disabled={!isAvailable}
                        className={`
                          w-full p-4 rounded-lg border text-left transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-500
                          ${selectedAccountType === accountType.id && isAvailable
                            ? 'border-brand-600 bg-brand-50 text-brand-950 ring-2 ring-brand-200/50'
                            : isAvailable
                            ? 'border-brand-200 bg-white/70 text-brand-700 hover:border-brand-300'
                            : 'border-brand-100 bg-brand-25/30 text-brand-400 cursor-not-allowed opacity-50'
                          }
                        `}
                        aria-label={`Select ${accountType.name}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`
                            rounded-lg p-2 transition-colors duration-200
                            ${selectedAccountType === accountType.id && isAvailable ? 'bg-brand-100' : 'bg-brand-50'}
                          `}>
                            <AccountIcon className="size-5 text-brand-700" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{accountType.name}</div>
                            <div className="text-sm opacity-75">{accountType.description}</div>
                            {!isAvailable && (
                              <div className="text-xs text-brand-400 mt-1">Not available in {selectedState}</div>
                            )}
                          </div>
                          <div className="text-right">
                            {isAvailable && price && (
                              <>
                                <div className="font-semibold">
                                  ${price.toLocaleString()}
                                </div>
                                <div className="text-xs opacity-75">audit price</div>
                              </>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white">
              <div className="mb-4">
                <div className="text-sm opacity-90 mb-2">Your Estimated Cost</div>
                <div className="text-4xl font-bold mb-2">
                  ${calculatePrice().toLocaleString()}
                </div>
                <div className="text-sm opacity-90">
                  {selectedState} • {getSelectedAccountType()?.name}
                </div>
                {getPriceNote() && (
                  <div className="text-xs opacity-75 mt-1">
                    {getPriceNote()}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  <span>7-10 days delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="size-4" />
                  <span>100% compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="size-4" />
                  <span>Certified auditors</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                  aria-label="Get started with your audit"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="size-4" />
                </button>
                
                <button 
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
                  aria-label="Request a custom quote"
                >
                  <span>Custom Quote</span>
                  <ExternalLink className="size-4" />
                </button>
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="mt-6 p-4 rounded-lg bg-green-50/60 border border-green-200/50 text-center">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                <TrendingUp className="size-5" />
                <span className="font-semibold">You Save ${getSavings().toLocaleString()}</span>
              </div>
              <p className="text-sm text-green-600">
                Compared to traditional audit firms, you save significantly while getting faster, more reliable service.
              </p>
            </div>
          </div>
        </Motion>

        {/* What's Included */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <CheckCircle2 className="size-4 text-brand-700" />
              <span>What's Included</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-950 mb-2">
              Comprehensive Audit Package
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto">
              Every audit includes our full suite of professional services with no hidden costs or surprise fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {includedFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              const isExpanded = expandedSection === feature.category;
              
              return (
                <div
                  key={feature.category}
                  className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleSection(feature.category)}
                    className="w-full p-6 text-left hover:bg-brand-50/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-inset"
                    aria-expanded={isExpanded}
                    aria-label={`Toggle ${feature.category} details`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-brand-100/60 p-3">
                          <FeatureIcon className="size-6 text-brand-900" />
                        </div>
                        <h4 className="font-semibold text-brand-950">
                          {feature.category}
                        </h4>
                      </div>
                      <div className={`
                        transition-transform duration-200
                        ${isExpanded ? 'rotate-180' : ''}
                      `}>
                        <ChevronDown className="size-5 text-brand-700" />
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <Motion
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="space-y-2">
                          {feature.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="size-4 text-brand-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-brand-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Motion>
                  )}
                </div>
              );
            })}
          </div>
        </Motion>

        {/* Comparison Table */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <Target className="size-4 text-brand-700" />
              <span>Value Comparison</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-950 mb-2">
              Why Choose AuditsPro
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto mb-6">
              See how we compare to traditional audit firms in terms of price, speed, and service quality.
            </p>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white text-brand-700 px-4 py-2 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label={showComparison ? "Hide comparison table" : "Show comparison table"}
            >
              <span>{showComparison ? "Hide" : "Show"} Comparison</span>
              {showComparison ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            </button>
          </div>

          {showComparison && (
            <Motion
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-brand-200/50">
                        <th className="text-left p-4 font-semibold text-brand-950">Provider</th>
                        <th className="text-left p-4 font-semibold text-brand-950">Price Range</th>
                        <th className="text-left p-4 font-semibold text-brand-950">Turnaround</th>
                        <th className="text-left p-4 font-semibold text-brand-950">Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorComparison.map((provider, index) => (
                        <tr 
                          key={provider.provider}
                          className={`
                            border-b border-brand-200/30 transition-colors duration-200
                            ${provider.highlight 
                              ? 'bg-brand-50/60 hover:bg-brand-50/80' 
                              : 'hover:bg-brand-25/30'
                            }
                          `}
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              {provider.highlight && (
                                <div className="rounded-full bg-brand-600 p-1">
                                  <Star className="size-3 text-white fill-current" />
                                </div>
                              )}
                              <span className={`
                                font-medium
                                ${provider.highlight ? 'text-brand-950' : 'text-brand-700'}
                              `}>
                                {provider.provider}
                              </span>
                              {provider.highlight && (
                                <span className="text-xs bg-brand-600 text-white px-2 py-1 rounded-full">
                                  Recommended
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`
                              font-semibold
                              ${provider.highlight ? 'text-brand-950' : 'text-brand-700'}
                            `}>
                              {provider.price}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`
                              ${provider.highlight ? 'text-brand-950' : 'text-brand-700'}
                            `}>
                              {provider.turnaround}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              {provider.features.map((feature, featureIndex) => (
                                <div 
                                  key={featureIndex}
                                  className={`
                                    text-sm
                                    ${feature.startsWith('✓') 
                                      ? provider.highlight ? 'text-brand-700' : 'text-green-600'
                                      : 'text-red-500'
                                    }
                                  `}
                                >
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Motion>
          )}
        </Motion>

        {/* Value Proposition */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-6">
              <Zap className="size-4 text-brand-700" />
              <span>Exceptional Value</span>
            </div>
            
            <h3 className="text-2xl font-semibold text-brand-950 mb-4">
              Professional Audits at Unbeatable Prices
            </h3>
            
            <p className="text-brand-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Get the same quality audit services as traditional firms, but faster, more affordable, 
              and with better customer support. No compromises on quality or compliance.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-3">
                  <DollarSign className="size-6 text-brand-900" />
                </div>
                <div className="text-2xl font-bold text-brand-600 mb-1">50%</div>
                <div className="text-sm text-brand-700">Cost Savings</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-3">
                  <Clock className="size-6 text-brand-900" />
                </div>
                <div className="text-2xl font-bold text-brand-600 mb-1">3x</div>
                <div className="text-sm text-brand-700">Faster Delivery</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-3">
                  <Shield className="size-6 text-brand-900" />
                </div>
                <div className="text-2xl font-bold text-brand-600 mb-1">100%</div>
                <div className="text-sm text-brand-700">Compliance Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="inline-flex items-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Start your audit process"
              >
                <span>Start Your Audit</span>
                <ArrowRight className="size-4" />
              </button>
              
              <button 
                className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white text-brand-700 px-6 py-3 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Get a custom quote for your firm"
              >
                <span>Get Custom Quote</span>
                <Info className="size-4" />
              </button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}