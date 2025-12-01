"use client";
import { Motion } from "@/components/ui/motion";
import { useState } from "react";
import {
  CalendarIcon as Calendar,
  ClockIcon as Clock,
  CheckCircleIcon as CheckCircle2,
  DocumentTextIcon as FileText,
  PaperAirplaneIcon as Send,
  ArrowDownTrayIcon as Download,
  ChatBubbleLeftRightIcon as MessageSquare,
  ShieldCheckIcon as Shield,
  ExclamationTriangleIcon as AlertTriangle,
  ChevronRightIcon as ChevronRight,
  PlayIcon as Play,
  PauseIcon as Pause,
  ArrowPathIcon as RotateCcw,
  ArrowTopRightOnSquareIcon as ExternalLink,
  InformationCircleIcon as Info,
} from "@heroicons/react/24/outline";

export function TimelineSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  const timelineSteps = [
    {
      id: 1,
      title: "Document Submission",
      duration: "Day 1",
      description:
        "Upload your trust account documents through our secure portal",
      icon: Send,
      status: "active",
      details: [
        "Secure encrypted file upload",
        "Automatic document validation",
        "Instant confirmation receipt",
        "24/7 upload availability",
      ],
      estimatedTime: "15-30 minutes",
      tips: "Ensure all documents are clearly legible and complete before uploading.",
    },
    {
      id: 2,
      title: "Initial Review",
      duration: "Days 2-3",
      description: "Our certified auditors perform preliminary document review",
      icon: FileText,
      status: "upcoming",
      details: [
        "Document completeness check",
        "Format and quality verification",
        "Initial compliance assessment",
        "Missing document identification",
      ],
      estimatedTime: "1-2 business days",
      tips: "We'll contact you immediately if any additional documents are needed.",
    },
    {
      id: 3,
      title: "Detailed Audit",
      duration: "Days 4-7",
      description:
        "Comprehensive audit of all trust account transactions and records",
      icon: Shield,
      status: "upcoming",
      details: [
        "Transaction verification",
        "Reconciliation analysis",
        "Compliance checking",
        "Risk assessment",
      ],
      estimatedTime: "3-4 business days",
      tips: "This is the most thorough phase where we examine every transaction in detail.",
    },
    {
      id: 4,
      title: "Report Generation",
      duration: "Days 8-9",
      description: "Preparation of comprehensive audit report and certificates",
      icon: Download,
      status: "upcoming",
      details: [
        "Detailed findings compilation",
        "Compliance certificate preparation",
        "Recommendations documentation",
        "Executive summary creation",
      ],
      estimatedTime: "1-2 business days",
      tips: "Reports are prepared in compliance with all state regulatory requirements.",
    },
    {
      id: 5,
      title: "Final Delivery",
      duration: "Day 10",
      description: "Secure delivery of audit report and regulatory submission",
      icon: CheckCircle2,
      status: "upcoming",
      details: [
        "Secure report delivery",
        "Regulatory authority submission",
        "Client consultation call",
        "Follow-up support",
      ],
      estimatedTime: "Same day",
      tips: "We handle all regulatory submissions on your behalf to ensure compliance.",
    },
  ];

  const keyBenefits = [
    {
      title: "Fast Turnaround",
      description: "Complete audit in 10 business days",
      icon: Clock,
      highlight: "10 Days",
    },
    {
      title: "Certified Auditors",
      description: "All audits performed by qualified professionals",
      icon: Shield,
      highlight: "Certified",
    },
    {
      title: "State Compliant",
      description: "Meets all Australian state requirements",
      icon: CheckCircle2,
      highlight: "100% Compliant",
    },
    {
      title: "Secure Process",
      description: "Bank-grade security for all documents",
      icon: Shield,
      highlight: "Bank-Grade",
    },
  ];

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Auto-advance through steps
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= timelineSteps.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 2000 / playbackSpeed);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsPlaying(false);
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
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-brand-950 mb-6 supports-[backdrop-filter]:bg-white/70">
            <Calendar className="size-4 text-brand-700" />
            <span>Audit Process Timeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950 mb-4">
            Your Audit Journey{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              Step by Step
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Follow our streamlined 10-day audit process designed for efficiency
            and compliance. Each step is carefully managed by our certified
            professionals.
          </p>

          {/* Interactive Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={handlePlayPause}
              className={`
                inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
                ${
                  isPlaying
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "bg-white/70 text-brand-700 border border-brand-300 hover:bg-brand-50"
                }
              `}
              aria-label={
                isPlaying
                  ? "Pause timeline animation"
                  : "Play timeline animation"
              }
            >
              {isPlaying ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4" />
              )}
              <span>{isPlaying ? "Pause" : "Play"} Timeline</span>
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-lg bg-white/70 text-brand-700 border border-brand-300 px-4 py-2 text-sm font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              aria-label="Reset timeline to beginning"
            >
              <RotateCcw className="size-4" />
              <span>Reset</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-brand-700">Speed:</span>
              <select
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                className="rounded border border-brand-300 bg-white/70 px-2 py-1 text-sm text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Select playback speed"
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>
          </div>
        </Motion>

        {/* Timeline Steps */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-brand-200">
            <div
              className="w-full bg-gradient-to-b from-brand-600 to-brand-700 transition-all duration-1000 ease-out"
              style={{
                height: `${(activeStep / (timelineSteps.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div className="space-y-8">
            {timelineSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isHovered = hoveredStep === index;

              return (
                <Motion
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`
                      relative flex items-start gap-6 cursor-pointer transition-all duration-300
                      ${isHovered ? "scale-[1.02]" : ""}
                    `}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => handleStepClick(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for step ${index + 1}: ${
                      step.title
                    }`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleStepClick(index);
                      }
                    }}
                  >
                    {/* Step Number/Icon */}
                    <div
                      className={`
                      relative z-10 flex items-center justify-center size-16 rounded-full border-4 transition-all duration-300
                      ${
                        isCompleted
                          ? "bg-brand-600 border-brand-600 text-white"
                          : isActive
                          ? "bg-white border-brand-600 text-brand-600 ring-4 ring-brand-200/50"
                          : "bg-white border-brand-300 text-brand-400"
                      }
                      ${isHovered ? "scale-110 shadow-lg" : ""}
                    `}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="size-6" />
                      ) : (
                        <StepIcon className="size-6" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div
                      className={`
                      flex-1 rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 transition-all duration-300
                      ${isActive ? "ring-2 ring-brand-200/50 shadow-lg" : ""}
                      ${
                        isHovered
                          ? "shadow-xl border-brand-300/70"
                          : "hover:shadow-lg"
                      }
                    `}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3
                              className={`
                              text-xl font-semibold transition-colors duration-200
                              ${isActive ? "text-brand-950" : "text-brand-900"}
                            `}
                            >
                              {step.title}
                            </h3>
                            <span
                              className={`
                              text-sm font-medium px-3 py-1 rounded-full transition-all duration-200
                              ${
                                isCompleted
                                  ? "bg-green-100 text-green-700 border border-green-200"
                                  : isActive
                                  ? "bg-brand-100 text-brand-700 border border-brand-200"
                                  : "bg-gray-100 text-gray-600 border border-gray-200"
                              }
                              ${isHovered ? "scale-105" : ""}
                            `}
                            >
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-brand-700 mb-4 leading-relaxed">
                            {step.description}
                          </p>

                          <div className="flex items-center gap-4 text-sm text-brand-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Clock className="size-4" />
                              <span>{step.estimatedTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FileText className="size-4" />
                              <span>{step.details.length} activities</span>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`
                          rounded-full bg-brand-50/60 p-2 transition-all duration-200
                          ${isHovered ? "bg-brand-100/60 scale-110" : ""}
                        `}
                        >
                          <ChevronRight
                            className={`
                            size-5 text-brand-700 transition-transform duration-200
                            ${isActive ? "rotate-90" : ""}
                          `}
                          />
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {isActive && (
                        <Motion
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pt-4 border-t border-brand-200/50">
                            {/* Activities */}
                            <div>
                              <h4 className="text-sm font-semibold text-brand-950 mb-3 flex items-center gap-2">
                                <FileText className="size-4 text-brand-700" />
                                Key Activities
                              </h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {step.details.map((detail, detailIndex) => (
                                  <div
                                    key={detailIndex}
                                    className="flex items-start gap-2"
                                  >
                                    <CheckCircle2 className="size-3 text-brand-600 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-brand-700">
                                      {detail}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tips */}
                            <div className="p-3 rounded-lg bg-brand-50/60 border border-brand-200/50">
                              <h4 className="text-sm font-semibold text-brand-950 mb-1 flex items-center gap-2">
                                <Info className="size-4 text-brand-700" />
                                Pro Tip
                              </h4>
                              <p className="text-sm text-brand-700">
                                {step.tips}
                              </p>
                            </div>
                          </div>
                        </Motion>
                      )}
                    </div>
                  </div>
                </Motion>
              );
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
                <CheckCircle2 className="size-4 text-brand-700" />
                <span>Process Benefits</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-950 mb-2">
                Why Choose Our Process
              </h3>
              <p className="text-brand-700 max-w-2xl mx-auto">
                Our streamlined approach delivers exceptional results with
                maximum efficiency and compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit) => {
              const BenefitIcon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="text-center p-6 rounded-xl border border-brand-200/50 bg-white/70 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-4">
                      <BenefitIcon className="size-6 text-brand-900" />
                    </div>

                    <div className="mb-2">
                      <span className="text-2xl font-bold text-brand-600">
                        {benefit.highlight}
                      </span>
                    </div>

                    <h4 className="font-semibold text-brand-950 mb-2">
                      {benefit.title}
                    </h4>

                    <p className="text-sm text-brand-700">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Motion>

        {/* Important Notice */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="rounded-2xl border border-amber-200/70 bg-amber-50/60 backdrop-blur p-8 supports-[backdrop-filter]:bg-amber-50/60">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/60 px-4 py-2 text-sm font-medium text-amber-950 mb-4">
              <AlertTriangle className="size-4 text-amber-700" />
              <span>Important Notice</span>
            </div>

            <h3 className="text-2xl font-semibold text-amber-950 mb-4">
              Time-Sensitive Compliance
            </h3>

            <p className="text-amber-800 max-w-2xl mx-auto mb-6 leading-relaxed">
              Trust account audits must be completed within specific timeframes
              set by each state. Don’t wait until the last minute — start your
              audit process early to ensure compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="inline-flex items-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Start your audit process"
              >
                <span>Start Your Audit Now</span>
                <ExternalLink className="size-4" />
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white/70 text-brand-700 px-6 py-3 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Contact us for questions about the audit process"
              >
                <span>Have Questions?</span>
                <MessageSquare className="size-4" />
              </button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
