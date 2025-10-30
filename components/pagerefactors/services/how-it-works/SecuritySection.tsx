"use client";
import { Motion } from "@/components/ui/motion";
import { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Server,
  Key,
  CheckCircle2,
  AlertTriangle,
  Users,
  Clock,
  Award,
  Zap,
  Info,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ArrowRight,
  Globe,
  Database,
  Fingerprint,
  ShieldCheck,
} from "lucide-react";

export function SecuritySection() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [selectedCompliance, setSelectedCompliance] =
    useState<string>("aws");
  const [showCertificates, setShowCertificates] = useState<boolean>(false);

  const securityFeatures = [
    {
      id: "encryption",
      icon: Lock,
      title: "AWS Encryption",
      description:
        "Industry-standard encryption for all data transmission and storage using AWS services",
      details: [
        "AES-256 encryption for data at rest in AWS S3",
        "TLS 1.2+ for data in transit",
        "AWS KMS for key management",
        "Encrypted backup systems",
        "Server-side encryption enabled",
      ],
      badge: "AWS Secured",
    },
    {
      id: "access",
      icon: Key,
      title: "AWS Cognito Authentication",
      description:
        "Secure user authentication and access management through AWS Cognito",
      details: [
        "Multi-factor authentication support",
        "Secure password policies",
        "Session management",
        "User pool security",
        "OAuth 2.0 and SAML integration",
      ],
      badge: "AWS Cognito",
    },
    {
      id: "monitoring",
      icon: Eye,
      title: "AWS CloudTrail Monitoring",
      description:
        "Comprehensive logging and monitoring of all system activities",
      details: [
        "AWS CloudTrail activity logging",
        "Real-time monitoring dashboards",
        "Security event notifications",
        "Access pattern analysis",
        "Audit trail maintenance",
      ],
      badge: "Monitored",
    },
    {
      id: "compliance",
      icon: FileCheck,
      title: "Privacy Compliance",
      description:
        "Adherence to Australian privacy laws and data protection standards",
      details: [
        "Australian Privacy Principles (APP) compliance",
        "Data minimization practices",
        "Consent management",
        "Privacy by design approach",
        "Regular privacy assessments",
      ],
      badge: "Privacy-First",
    },
    {
      id: "infrastructure",
      icon: Server,
      title: "AWS Infrastructure",
      description:
        "Reliable cloud infrastructure with AWS security best practices",
      details: [
        "AWS S3 for secure file storage",
        "AWS SES for secure email delivery",
        "VPC network isolation",
        "AWS security groups and NACLs",
        "Regular security updates",
      ],
      badge: "AWS Powered",
    },
    {
      id: "privacy",
      icon: ShieldCheck,
      title: "Data Protection",
      description: "Comprehensive data protection with strict privacy controls",
      details: [
        "Data retention policies",
        "Secure data deletion",
        "Access logging and monitoring",
        "Data portability features",
        "Privacy-focused architecture",
      ],
      badge: "Protected",
    },
  ];

  const dataHandlingSteps = [
    {
      step: 1,
      icon: Globe,
      title: "Secure Upload",
      description: "Documents encrypted during upload with TLS encryption",
      details:
        "Your files are encrypted in transit using industry-standard TLS protocols.",
    },
    {
      step: 2,
      icon: Database,
      title: "AWS S3 Storage",
      description: "Data stored securely in AWS S3 with server-side encryption",
      details:
        "All data is encrypted at rest using AWS S3 server-side encryption with AES-256.",
    },
    {
      step: 3,
      icon: Users,
      title: "Controlled Access",
      description: "Only authorized auditors can access your data",
      details:
        "AWS Cognito authentication and role-based access controls ensure data security.",
    },
    {
      step: 4,
      icon: FileCheck,
      title: "Audit Processing",
      description: "Secure processing environment with full audit trails",
      details:
        "All data access and processing activities are logged using AWS CloudTrail.",
    },
    {
      step: 5,
      icon: ArrowRight,
      title: "Secure Delivery",
      description: "Reports delivered through AWS SES secure email",
      details:
        "Final reports are delivered using AWS SES with encryption in transit.",
    },
    {
      step: 6,
      icon: Clock,
      title: "Data Retention",
      description: "Automatic data deletion per retention policies",
      details:
        "Data is automatically deleted according to our retention policies and your preferences.",
    },
  ];

  const complianceStandards = [
    {
      id: "aws",
      name: "AWS Security",
      description: "AWS Infrastructure Security",
      icon: Award,
      details: [
        "AWS shared responsibility model",
        "Regular AWS security updates",
        "AWS security best practices",
        "Infrastructure monitoring",
      ],
      certified: true,
    },
    {
      id: "app",
      name: "Australian Privacy Principles",
      description: "Privacy Act Compliance",
      icon: Eye,
      details: [
        "Transparent privacy practices",
        "Consent management systems",
        "Data breach notification procedures",
        "Individual rights protection",
      ],
      certified: true,
    },
    {
      id: "encryption",
      name: "Data Encryption",
      description: "Industry Standard Encryption",
      icon: Lock,
      details: [
        "AES-256 encryption at rest",
        "TLS encryption in transit",
        "AWS KMS key management",
        "Secure key rotation",
      ],
      certified: true,
    },
  ];

  const securityStats = [
    { label: "AWS Uptime", value: "99.9%", icon: Server },
    { label: "Encryption Standard", value: "AES-256", icon: Shield },
    { label: "Security Features", value: "6+", icon: Award },
    { label: "AWS Services", value: "5+", icon: Globe },
  ];

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  const selectedComplianceData = complianceStandards.find(
    (c) => c.id === selectedCompliance
  );

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
            <Shield className="size-4 text-brand-700" />
            <span>AWS Security</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950 mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              Security & Privacy
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your sensitive financial data is protected using AWS cloud security services
            and industry-standard encryption, ensuring confidentiality and compliance
            with Australian privacy laws.
          </p>
        </Motion>

        {/* Security Stats */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityStats.map((stat, index) => {
              const StatIcon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-3">
                    <StatIcon className="size-6 text-brand-900" />
                  </div>
                  <div className="text-2xl font-bold text-brand-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-brand-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </Motion>

        {/* Security Features */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <Lock className="size-4 text-brand-700" />
              <span>Security Features</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-950 mb-2">
              Multi-Layered Security Architecture
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto">
              Comprehensive security measures protecting your data at every
              stage of the audit process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              const isExpanded = expandedFeature === feature.id;

              return (
                <div
                  key={feature.id}
                  className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFeature(feature.id)}
                    className="w-full p-6 text-left hover:bg-brand-50/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-inset"
                    aria-expanded={isExpanded}
                    aria-label={`Toggle ${feature.title} details`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-brand-100/60 p-3">
                          <FeatureIcon className="size-6 text-brand-900" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-brand-950">
                              {feature.title}
                            </h4>
                            <span className="text-xs bg-brand-600 text-white px-2 py-1 rounded-full">
                              {feature.badge}
                            </span>
                          </div>
                          <p className="text-sm text-brand-700">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`
                        transition-transform duration-200 flex-shrink-0 ml-2
                        ${isExpanded ? "rotate-180" : ""}
                      `}
                      >
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
                      <div className="px-6 pb-6">
                        <div className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2 className="size-4 text-brand-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-brand-700">
                                {detail}
                              </span>
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

        {/* Data Handling Process */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <Database className="size-4 text-brand-700" />
              <span>Data Protection</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-950 mb-2">
              Secure Data Handling Process
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto">
              Follow your data's journey through our secure audit process with
              complete transparency and control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataHandlingSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={step.step}
                  className="relative rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center size-10 rounded-full bg-brand-600 text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <StepIcon className="size-5 text-brand-700" />
                        <h4 className="font-semibold text-brand-950">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm text-brand-700 mb-3">
                        {step.description}
                      </p>
                      <p className="text-xs text-brand-600 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < dataHandlingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-brand-300 transform -translate-y-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </Motion>

        {/* Compliance Standards */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <Award className="size-4 text-brand-700" />
              <span>Compliance & Certifications</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-950 mb-2">
              Industry-Leading Compliance Standards
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto mb-6">
              We maintain the highest standards of compliance with international
              security and privacy regulations.
            </p>

            <button
              onClick={() => setShowCertificates(!showCertificates)}
              className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white/70 text-brand-700 px-4 py-2 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label={
                showCertificates ? "Hide certificates" : "Show certificates"
              }
            >
              <span>{showCertificates ? "Hide" : "View"} Certificates</span>
              {showCertificates ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {complianceStandards.map((standard) => {
              const StandardIcon = standard.icon;

              return (
                <button
                  key={standard.id}
                  onClick={() => setSelectedCompliance(standard.id)}
                  className={`
                    p-4 rounded-xl border text-left transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-500
                    ${
                      selectedCompliance === standard.id
                        ? "border-brand-600 bg-brand-50 text-brand-950 ring-2 ring-brand-200/50"
                        : "border-brand-200 bg-white/70 text-brand-700 hover:border-brand-300"
                    }
                  `}
                  aria-label={`Select ${standard.name} compliance details`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`
                      rounded-lg p-2 transition-colors duration-200
                      ${
                        selectedCompliance === standard.id
                          ? "bg-brand-100"
                          : "bg-brand-50"
                      }
                    `}
                    >
                      <StandardIcon className="size-5 text-brand-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{standard.name}</span>
                        {standard.certified && (
                          <CheckCircle2 className="size-4 text-green-600" />
                        )}
                      </div>
                      <div className="text-xs opacity-75">
                        {standard.description}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Compliance Details */}
          {selectedComplianceData && (
            <Motion
              key={selectedCompliance}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-brand-100/60 p-3">
                  <selectedComplianceData.icon className="size-6 text-brand-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-950">
                    {selectedComplianceData.name} Compliance
                  </h4>
                  <p className="text-sm text-brand-700">
                    {selectedComplianceData.description}
                  </p>
                </div>
                {selectedComplianceData.certified && (
                  <div className="ml-auto">
                    <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      <CheckCircle2 className="size-3" />
                      Certified
                    </span>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {selectedComplianceData.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-brand-700">{detail}</span>
                  </div>
                ))}
              </div>
            </Motion>
          )}

          {/* AWS Security Features Display */}
          {showCertificates && (
            <Motion
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 overflow-hidden"
            >
              <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70">
                <h4 className="text-lg font-semibold text-brand-950 mb-4">
                  AWS Security Features
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-brand-200/50 bg-brand-50/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="size-5 text-brand-700" />
                      <span className="font-medium text-brand-950">
                        AWS S3 Encryption
                      </span>
                    </div>
                    <p className="text-sm text-brand-700 mb-2">
                      Server-side encryption with AES-256 for all stored data
                    </p>
                    <button className="inline-flex items-center gap-1 text-xs text-brand-600 hover:text-brand-700">
                      <span>Learn More</span>
                      <ExternalLink className="size-3" />
                    </button>
                  </div>

                  <div className="p-4 rounded-lg border border-brand-200/50 bg-brand-50/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Key className="size-5 text-brand-700" />
                      <span className="font-medium text-brand-950">
                        AWS Cognito Auth
                      </span>
                    </div>
                    <p className="text-sm text-brand-700 mb-2">
                      Secure user authentication and session management
                    </p>
                    <button className="inline-flex items-center gap-1 text-xs text-brand-600 hover:text-brand-700">
                      <span>Learn More</span>
                      <ExternalLink className="size-3" />
                    </button>
                  </div>
                </div>
              </div>
            </Motion>
          )}
        </Motion>

        {/* Security Guarantee */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-6">
              <Zap className="size-4 text-brand-700" />
              <span>Security Guarantee</span>
            </div>

            <h3 className="text-2xl font-semibold text-brand-950 mb-4">
              Your Data Security is Our Priority
            </h3>

            <p className="text-brand-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              We provide professional-grade security for your sensitive
              financial data using AWS cloud services and industry-standard
              encryption to ensure confidentiality and privacy compliance.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-3">
                  <Shield className="size-6 text-brand-900" />
                </div>
                <div className="text-2xl font-bold text-brand-600 mb-1">
                  AWS
                </div>
                <div className="text-sm text-brand-700">Cloud Security</div>
              </div>

              <div className="text-center">
                <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-3">
                  <Lock className="size-6 text-brand-900" />
                </div>
                <div className="text-2xl font-bold text-brand-600 mb-1">
                  AES-256
                </div>
                <div className="text-sm text-brand-700">
                  Encryption Standard
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-3">
                  <Award className="size-6 text-brand-900" />
                </div>
                <div className="text-2xl font-bold text-brand-600 mb-1">3+</div>
                <div className="text-sm text-brand-700">
                  Security Features
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Start secure audit process"
              >
                <span>Start Secure Audit</span>
                <ArrowRight className="size-4" />
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white/70 text-brand-700 px-6 py-3 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Learn more about our security"
              >
                <span>Security Details</span>
                <Info className="size-4" />
              </button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
