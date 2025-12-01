"use client";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  UsersIcon,
  TrophyIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  CalendarIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  GiftIcon,
  FireIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
  PlayIcon,
  ArrowDownTrayIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });
  const [selectedContactMethod, setSelectedContactMethod] =
    useState<string>("phone");
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const trustIndicators = [
    {
      icon: ShieldCheckIcon,
      stat: "99.9%",
      label: "Security Uptime",
      description: "Bank-grade security protecting your sensitive data",
      color: "text-green-600",
    },
    {
      icon: UsersIcon,
      stat: "5,000+",
      label: "Satisfied Clients",
      description: "Professionals trust us with their audit requirements",
      color: "text-brand-600",
    },
    {
      icon: TrophyIcon,
      stat: "ISO 27001",
      label: "Certified",
      description: "Internationally recognized security standards",
      color: "text-purple-600",
    },
    {
      icon: ArrowTrendingUpIcon,
      stat: "98%",
      label: "Success Rate",
      description: "First-time compliance achievement rate",
      color: "text-brand-700",
    },
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Testimonial rotation effect
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % trustIndicators.length);
    }, 4000);

    return () => clearInterval(testimonialTimer);
  }, [trustIndicators.length]);

  // keyBenefits reserved for future enhancement; suppress lint by using const

  const urgencyReasons = [
    {
      icon: ExclamationTriangleIcon,
      title: "Audit Deadline Approaching",
      description: "Don't risk penalties - secure your spot now",
      severity: "high",
    },
    {
      icon: ClockIcon,
      title: "Limited Capacity",
      description: "Only 12 audit slots remaining this month",
      severity: "medium",
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Peak Season Pricing",
      description: "Rates increase 25% during busy periods",
      severity: "medium",
    },
    {
      icon: FireIcon,
      title: "Fast-Track Available",
      description: "48-hour completion for urgent cases",
      severity: "high",
    },
  ];

  const contactMethods = [
    {
      id: "phone",
      icon: PhoneIcon,
      title: "Call Now",
      subtitle: "Speak with an expert",
      contact: "1800 AUDIT PRO",
      description: "Get immediate answers and book your audit",
      response: "Instant",
      availability: "Mon-Fri 8AM-6PM",
      popular: true,
    },
    {
      id: "email",
      icon: EnvelopeIcon,
      title: "Email Us",
      subtitle: "Detailed consultation",
      contact: "start@auditspro.com.au",
      description: "Send your requirements for a custom quote",
      response: "Within 2 hours",
      availability: "24/7 monitoring",
      popular: false,
    },
    {
      id: "chat",
      icon: ChatBubbleLeftRightIcon,
      title: "Live Chat",
      subtitle: "Quick questions",
      contact: "Available on website",
      description: "Instant answers to common questions",
      response: "Within minutes",
      availability: "Mon-Fri 8AM-8PM",
      popular: false,
    },
  ];

  const quickActions = [
    {
      icon: CalendarIcon,
      title: "Schedule Consultation",
      description: "Free 15-minute consultation call",
      action: "Book Now",
      popular: true,
    },
    {
      icon: DocumentTextIcon,
      title: "Get Quote",
      description: "Instant pricing based on your requirements",
      action: "Calculate",
      popular: false,
    },
    {
      icon: ArrowDownTrayIcon,
      title: "Download Guide",
      description: "Trust account audit preparation checklist",
      action: "Download",
      popular: false,
    },
    {
      icon: PlayIcon,
      title: "Watch Demo",
      description: "See our audit process in action",
      action: "Watch",
      popular: false,
    },
  ];

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-brand-50/60 via-white to-brand-50/40 overflow-hidden">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-brand-200/20 blur-2xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Trust Indicators */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {trustIndicators.map((indicator, index) => {
              const IndicatorIcon = indicator.icon;
              const isActive = index === currentTestimonial;

              return (
                <div
                  key={index}
                  className={`
                    rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 transition-all duration-500 hover:shadow-lg
                    ${
                      isActive
                        ? "ring-2 ring-brand-500 scale-105"
                        : "hover:scale-105"
                    }
                  `}
                >
                  <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-4">
                    <IndicatorIcon className={`size-6 ${indicator.color}`} />
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${indicator.color}`}>
                    {indicator.stat}
                  </div>
                  <div className="font-semibold text-brand-950 mb-2">
                    {indicator.label}
                  </div>
                  <p className="text-sm text-brand-700 leading-relaxed">
                    {indicator.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Motion>

        {/* Main CTA - Brand style */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950 mb-3">
            Ready to schedule your audit?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-6">
            Talk to our team to confirm scope, pricing, and timelines.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="gap-2 btn-primary-brand font-medium">
              <a href="/contact" aria-label="Contact our team">
                <PhoneIcon className="size-5" />
                Contact us
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 btn-outline-brand bg-white font-medium"
            >
              <a href="mailto:start@auditspro.com.au" aria-label="Email our team">
                <EnvelopeIcon className="size-5" />
                Email
              </a>
            </Button>
          </div>
        </Motion>

        {/* Contact Methods */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-brand-950 mb-4">
              Choose Your Preferred Contact Method
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto">
              Our expert team is ready to help you get started with your trust
              account audit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {contactMethods.map((method) => {
              const MethodIcon = method.icon;
              const isSelected = selectedContactMethod === method.id;

              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedContactMethod(method.id)}
                  className={`
                    rounded-2xl border p-6 text-left transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-500
                    ${
                      isSelected
                        ? "border-brand-500 bg-brand-50/60 ring-2 ring-brand-500"
                        : "border-brand-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 hover:border-brand-300"
                    }
                  `}
                  aria-label={`Select ${method.title} contact method`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`
                      rounded-lg p-3
                      ${isSelected ? "bg-brand-100/80" : "bg-brand-100/60"}
                    `}
                    >
                      <MethodIcon
                        className={`
                        size-6
                        ${isSelected ? "text-brand-900" : "text-brand-700"}
                      `}
                      />
                    </div>
                    {method.popular && (
                      <span className="inline-flex items-center gap-1 text-xs bg-brand-600 text-white px-2 py-1 rounded-full">
                        <StarIcon className="size-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h4 className="font-semibold text-brand-950 mb-1">
                    {method.title}
                  </h4>

                  <p className="text-sm text-brand-600 mb-3">
                    {method.subtitle}
                  </p>

                  <div className="space-y-2 text-xs text-brand-700">
                    <div className="font-medium">{method.contact}</div>
                    <div>{method.description}</div>
                    <div className="flex justify-between">
                      <span>Response: {method.response}</span>
                      <span>{method.availability}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Primary CTA Button */}
          <div className="text-center">
            <Button asChild size="lg" className="gap-3 btn-primary-brand">
              <a href="/book-demo" aria-label="Start your trust account audit now">
                Start Your Audit Now
                <ArrowRightIcon className="size-5" />
              </a>
            </Button>

            <p className="text-sm text-brand-600 mt-3">
              No commitment required • Free consultation • Instant quote
            </p>
          </div>
        </Motion>

        {/* Urgency Section */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/60 px-4 py-2 text-sm font-medium text-amber-900 mb-4">
            <ExclamationTriangleIcon className="size-4" />
            <span>Don’t Wait - Act Now</span>
          </div>

              <h3 className="text-2xl font-semibold text-brand-950 mb-4">
                Why You Should Start Today
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {urgencyReasons.map((reason, index) => {
                const ReasonIcon = reason.icon;

                return (
                  <div
                    key={index}
                    className={`
                      rounded-xl border p-4 text-center transition-all duration-300 hover:shadow-md
                      ${
                        reason.severity === "high"
                          ? "border-red-200 bg-red-50/60 hover:bg-red-50/80"
                          : "border-amber-200 bg-amber-50/60 hover:bg-amber-50/80"
                      }
                    `}
                  >
                    <div
                      className={`
                      inline-flex rounded-lg p-3 mb-3
                      ${
                        reason.severity === "high"
                          ? "bg-red-100/80"
                          : "bg-amber-100/80"
                      }
                    `}
                    >
                      <ReasonIcon
                        className={`
                        size-6
                        ${
                          reason.severity === "high"
                            ? "text-red-700"
                            : "text-amber-700"
                        }
                      `}
                      />
                    </div>

                    <h4 className="font-semibold text-brand-950 mb-2">
                      {reason.title}
                    </h4>

                    <p className="text-sm text-brand-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Motion>

        {/* Limited Time Offer */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="rounded-2xl border border-brand-300 bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-white text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium mb-6">
              <GiftIcon className="size-4" />
              <span>Limited Time Fast-Track Offer</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              48-Hour Audit Completion
            </h3>

            <p className="text-brand-100 mb-6 max-w-2xl mx-auto leading-relaxed">
              Need your audit completed urgently? Our fast-track service
              guarantees completion within 48 hours for qualifying cases.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-xs text-brand-100">Hours</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-xs text-brand-100">Minutes</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-xs text-brand-100">Seconds</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-white text-brand-700 px-6 py-3 font-semibold hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
                aria-label="Claim fast-track offer"
              >
                <span>Claim Fast-Track Offer</span>
                <BoltIcon className="size-4" />
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
                aria-label="Learn more about fast-track service"
              >
                <span>Learn More</span>
                <ArrowTopRightOnSquareIcon className="size-4" />
              </button>
            </div>
          </div>
        </Motion>

        {/* Quick Actions */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-brand-950 mb-4">
              Not Ready to Start? No Problem
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto">
              Take your time to explore our resources and get the information
              you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const ActionIcon = action.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex rounded-lg bg-brand-100/60 p-3">
                      <ActionIcon className="size-6 text-brand-900" />
                    </div>
                    {action.popular && (
                      <span className="inline-flex items-center gap-1 text-xs bg-brand-600 text-white px-2 py-1 rounded-full">
                        <StarIcon className="size-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h4 className="font-semibold text-brand-950 mb-2 group-hover:text-brand-700 transition-colors">
                    {action.title}
                  </h4>

                  <p className="text-sm text-brand-700 mb-4 leading-relaxed">
                    {action.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-brand-600 group-hover:text-brand-700 transition-colors">
                      {action.action}
                    </span>
                    <ChevronRightIcon className="size-4 text-brand-600 group-hover:text-brand-700 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </Motion>

        {/* Final Trust Message */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100/60 px-4 py-2 text-sm font-medium text-green-900 mb-6">
              <ShieldCheckIcon className="size-4" />
              <span>100% Satisfaction Guarantee</span>
            </div>

            <h3 className="text-2xl font-semibold text-brand-950 mb-4">
              Your Success is Our Guarantee
            </h3>

            <p className="text-brand-700 max-w-3xl mx-auto mb-6 leading-relaxed">
              We&apos;re so confident in our service that we offer a 100%
              satisfaction guarantee. If you&apos;re not completely satisfied with
              your audit, we&apos;ll make it right or refund your money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Get started with confidence"
              >
                <span>Get Started with Confidence</span>
                <ArrowRightIcon className="size-4" />
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white/70 text-brand-700 px-6 py-3 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Read our guarantee terms"
              >
                <span>Read Our Guarantee</span>
                <BookOpenIcon className="size-4" />
              </button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
