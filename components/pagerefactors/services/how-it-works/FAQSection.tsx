"use client";
import { Motion } from "@/components/ui/motion";
import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  DollarSign,
  Shield,
  Calendar,
  Search,
  Star,
  ThumbsUp,
  ExternalLink,
  ArrowRight,
  Lightbulb,
  BookOpen,
  Video,
  Download,
} from "lucide-react";

export function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAllFAQs, setShowAllFAQs] = useState<boolean>(false);

  const faqCategories = [
    { id: "general", name: "General", icon: HelpCircle, count: 8 },
    { id: "process", name: "Process", icon: FileText, count: 6 },
    { id: "pricing", name: "Pricing", icon: DollarSign, count: 5 },
    { id: "security", name: "Security", icon: Shield, count: 4 },
    { id: "timeline", name: "Timeline", icon: Calendar, count: 3 },
  ];

  const faqs = [
    // General FAQs
    {
      id: "what-is-trust-audit",
      category: "general",
      question: "What is a trust account audit and why do I need one?",
      answer:
        "A trust account audit is a mandatory examination of your client trust account records to ensure compliance with legal and regulatory requirements. It verifies that client funds are properly managed, segregated, and accounted for according to professional standards.",
      helpful: 95,
      tags: ["mandatory", "compliance", "client funds"],
    },
    {
      id: "who-needs-audit",
      category: "general",
      question: "Who needs to have their trust account audited?",
      answer:
        "Legal practitioners, real estate agents, accountants, and other professionals who hold client funds in trust accounts are typically required to have regular audits. Requirements vary by state and profession.",
      helpful: 92,
      tags: ["legal", "real estate", "professionals"],
    },
    {
      id: "audit-frequency",
      category: "general",
      question: "How often do I need to get my trust account audited?",
      answer:
        "Audit frequency depends on your state and profession. Most jurisdictions require annual audits, while some may require them every 18 months or 2 years. We'll help you determine your specific requirements.",
      helpful: 89,
      tags: ["frequency", "annual", "requirements"],
    },
    {
      id: "what-happens-non-compliance",
      category: "general",
      question: "What happens if my trust account is not compliant?",
      answer:
        "Non-compliance can result in penalties, fines, license suspension, or even criminal charges in severe cases. Our audit process helps identify and resolve issues before they become serious problems.",
      helpful: 87,
      tags: ["penalties", "compliance", "consequences"],
    },
    {
      id: "difference-financial-audit",
      category: "general",
      question: "How is this different from a regular financial audit?",
      answer:
        "Trust account audits focus specifically on client funds and compliance with trust account regulations, while financial audits examine overall business finances. Trust audits have stricter requirements and specific regulatory frameworks.",
      helpful: 84,
      tags: ["difference", "financial audit", "trust specific"],
    },
    {
      id: "can-do-myself",
      category: "general",
      question:
        "Can I perform the audit myself or does it need to be external?",
      answer:
        "Most jurisdictions require an independent, qualified auditor to perform trust account audits. Self-auditing is generally not acceptable for regulatory compliance purposes.",
      helpful: 91,
      tags: ["independent", "external", "qualified"],
    },
    {
      id: "what-if-issues-found",
      category: "general",
      question: "What if issues are found during the audit?",
      answer:
        "We work with you to understand and resolve any issues identified. Our report includes recommendations for corrective actions, and we can provide ongoing support to ensure compliance.",
      helpful: 88,
      tags: ["issues", "resolution", "support"],
    },
    {
      id: "audit-report-confidential",
      category: "general",
      question: "Is my audit report confidential?",
      answer:
        "Yes, your audit report is confidential between you and us. However, you may need to submit it to regulatory bodies as required by your profession's governing rules.",
      helpful: 93,
      tags: ["confidential", "regulatory", "submission"],
    },

    // Process FAQs
    {
      id: "how-long-process",
      category: "process",
      question: "How long does the audit process take?",
      answer:
        "The entire process typically takes 5-10 business days from document submission to final report delivery. Complex cases or large volumes may take longer, but we'll provide a clear timeline upfront.",
      helpful: 90,
      tags: ["timeline", "5-10 days", "delivery"],
    },
    {
      id: "what-documents-needed",
      category: "process",
      question: "What documents do I need to provide?",
      answer:
        "You'll need bank statements, trust account registers, receipts and payment records, reconciliations, and any trust account policies. We provide a comprehensive checklist to ensure nothing is missed.",
      helpful: 94,
      tags: ["documents", "checklist", "requirements"],
    },
    {
      id: "can-submit-online",
      category: "process",
      question: "Can I submit documents online securely?",
      answer:
        "Yes, our secure portal uses bank-grade encryption for document upload. You can also mail physical documents if preferred. All submissions are tracked and confirmed.",
      helpful: 96,
      tags: ["online", "secure", "encryption"],
    },
    {
      id: "what-format-documents",
      category: "process",
      question: "What format should my documents be in?",
      answer:
        "We accept PDF, Excel, Word, and most common image formats. Documents should be clear and legible. Our system can handle both digital files and scanned paper documents.",
      helpful: 85,
      tags: ["format", "PDF", "digital"],
    },
    {
      id: "need-original-documents",
      category: "process",
      question: "Do you need original documents or are copies acceptable?",
      answer:
        "Certified copies or high-quality scans are generally acceptable. We'll let you know if original documents are required for any specific items during the process.",
      helpful: 82,
      tags: ["copies", "originals", "certified"],
    },
    {
      id: "what-happens-after-submission",
      category: "process",
      question: "What happens after I submit my documents?",
      answer:
        "We'll confirm receipt within 24 hours, conduct a preliminary review, perform the detailed audit, and then prepare your comprehensive report with findings and recommendations.",
      helpful: 88,
      tags: ["submission", "review", "report"],
    },

    // Pricing FAQs
    {
      id: "how-much-cost",
      category: "pricing",
      question: "How much does a trust account audit cost?",
      answer:
        "Pricing varies based on your state, firm size, and complexity. Most audits range from $800-$2,500. We provide upfront pricing with no hidden fees after reviewing your requirements.",
      helpful: 91,
      tags: ["cost", "$800-$2500", "upfront pricing"],
    },
    {
      id: "what-included-price",
      category: "pricing",
      question: "What's included in the audit price?",
      answer:
        "The price includes document review, compliance testing, detailed audit report, recommendations, and one follow-up consultation. Additional services like remediation support are available separately.",
      helpful: 89,
      tags: ["included", "report", "consultation"],
    },
    {
      id: "payment-options",
      category: "pricing",
      question: "What payment options do you offer?",
      answer:
        "We accept credit cards, bank transfers, and can arrange payment plans for larger firms. Payment is typically required 50% upfront and 50% on completion.",
      helpful: 86,
      tags: ["payment", "credit card", "payment plans"],
    },
    {
      id: "additional-fees",
      category: "pricing",
      question: "Are there any additional fees I should know about?",
      answer:
        "Our quoted price is comprehensive with no hidden fees. Additional charges only apply if you request extra services like expedited delivery or extensive remediation support.",
      helpful: 93,
      tags: ["no hidden fees", "additional services", "transparent"],
    },
    {
      id: "discount-multiple-audits",
      category: "pricing",
      question:
        "Do you offer discounts for multiple audits or ongoing clients?",
      answer:
        "Yes, we offer volume discounts for firms with multiple trust accounts and loyalty discounts for returning clients. Contact us for a customized quote.",
      helpful: 87,
      tags: ["discounts", "volume", "loyalty"],
    },

    // Security FAQs
    {
      id: "how-secure-data",
      category: "security",
      question: "How do you keep my sensitive financial data secure?",
      answer:
        "We use bank-grade 256-bit encryption, secure servers, multi-factor authentication, and strict access controls. All staff sign confidentiality agreements and undergo security training.",
      helpful: 97,
      tags: ["256-bit encryption", "secure", "confidentiality"],
    },
    {
      id: "who-access-documents",
      category: "security",
      question: "Who has access to my documents during the audit?",
      answer:
        "Only qualified auditors assigned to your case have access. All access is logged and monitored. Documents are automatically deleted after the required retention period.",
      helpful: 94,
      tags: ["qualified auditors", "logged access", "retention"],
    },
    {
      id: "data-stored-where",
      category: "security",
      question: "Where is my data stored and for how long?",
      answer:
        "Data is stored in secure, Australian-based data centers with enterprise-grade security. We retain documents for 7 years as required by law, then securely delete them.",
      helpful: 91,
      tags: ["Australian data centers", "7 years", "secure deletion"],
    },
    {
      id: "compliance-standards",
      category: "security",
      question: "What security compliance standards do you meet?",
      answer:
        "We're ISO 27001 certified, SOC 2 Type II compliant, and meet Australian Privacy Principles. We undergo regular third-party security audits and maintain comprehensive cyber insurance.",
      helpful: 95,
      tags: ["ISO 27001", "SOC 2", "privacy principles"],
    },

    // Timeline FAQs
    {
      id: "urgent-audit-needed",
      category: "timeline",
      question: "I need an urgent audit - can you expedite the process?",
      answer:
        "Yes, we offer expedited service for urgent cases. Rush audits can typically be completed in 2-3 business days for an additional fee. Contact us to discuss your timeline.",
      helpful: 88,
      tags: ["urgent", "2-3 days", "expedited"],
    },
    {
      id: "best-time-schedule",
      category: "timeline",
      question: "What's the best time to schedule my audit?",
      answer:
        "We recommend scheduling 4-6 weeks before your deadline to allow time for any remediation if needed. Avoid peak periods like end of financial year when possible.",
      helpful: 85,
      tags: ["4-6 weeks", "deadline", "peak periods"],
    },
    {
      id: "can-schedule-advance",
      category: "timeline",
      question: "Can I schedule my audit well in advance?",
      answer:
        "Absolutely! We encourage advance booking, especially during busy periods. You can schedule up to 12 months ahead, and we'll send reminders as your audit date approaches.",
      helpful: 90,
      tags: ["advance booking", "12 months", "reminders"],
    },
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our audit specialists",
      contact: "1800 AUDIT PRO",
      hours: "Mon-Fri 8AM-6PM AEST",
      response: "Immediate",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed answers to complex questions",
      contact: "support@auditspro.com.au",
      hours: "24/7 monitoring",
      response: "Within 2 hours",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Quick answers to common questions",
      contact: "Available on website",
      hours: "Mon-Fri 8AM-8PM AEST",
      response: "Within minutes",
    },
  ];

  const quickTips = [
    {
      icon: Lightbulb,
      title: "Preparation Tip",
      description:
        "Organize your documents by month before uploading to speed up the audit process.",
    },
    {
      icon: Clock,
      title: "Timing Tip",
      description:
        "Schedule your audit 4-6 weeks before the deadline to allow time for any corrections.",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Tip",
      description:
        "Keep detailed records of all trust account transactions throughout the year.",
    },
    {
      icon: Shield,
      title: "Security Tip",
      description:
        "Use our secure portal for document uploads - never email sensitive financial documents.",
    },
  ];

  const helpfulResources = [
    {
      icon: BookOpen,
      title: "Trust Account Guide",
      description:
        "Comprehensive guide to trust account management and compliance",
      type: "PDF Guide",
      popular: true,
    },
    {
      icon: Video,
      title: "Audit Process Walkthrough",
      description:
        "Step-by-step video showing exactly what to expect during your audit",
      type: "Video Tutorial",
      popular: true,
    },
    {
      icon: FileText,
      title: "Document Checklist",
      description: "Printable checklist of all documents needed for your audit",
      type: "Checklist",
      popular: false,
    },
    {
      icon: Download,
      title: "Sample Reports",
      description:
        "Examples of completed audit reports to see what you'll receive",
      type: "Sample Files",
      popular: false,
    },
  ];

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const displayedFAQs = showAllFAQs ? filteredFAQs : filteredFAQs.slice(0, 6);

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
            <HelpCircle className="size-4 text-brand-700" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950 mb-4">
            Got{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to the most common questions about trust account
            audits, our process, pricing, and security measures.
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-brand-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-brand-200 bg-white/70 backdrop-blur text-brand-950 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent supports-[backdrop-filter]:bg-white/70"
                aria-label="Search frequently asked questions"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500
                  ${
                    selectedCategory === "all"
                      ? "bg-brand-600 text-white"
                      : "bg-white/70 text-brand-700 border border-brand-200 hover:bg-brand-50"
                  }
                `}
                aria-label="Show all FAQ categories"
              >
                All Questions
              </button>
              {faqCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500
                      ${
                        selectedCategory === category.id
                          ? "bg-brand-600 text-white"
                          : "bg-white/70 text-brand-700 border border-brand-200 hover:bg-brand-50"
                      }
                    `}
                    aria-label={`Filter by ${category.name} questions`}
                  >
                    <CategoryIcon className="size-4" />
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">
                      ({category.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Motion>

        {/* FAQ List */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {displayedFAQs.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle className="size-12 text-brand-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-brand-950 mb-2">
                  No FAQs found
                </h3>
                <p className="text-brand-600">
                  Try adjusting your search or category filter.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {displayedFAQs.map((faq) => {
                  const isExpanded = expandedFAQ === faq.id;

                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full p-6 text-left hover:bg-brand-50/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-inset"
                        aria-expanded={isExpanded}
                        aria-label={`Toggle answer for: ${faq.question}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-4">
                            <h3 className="text-lg font-semibold text-brand-950 mb-2">
                              {faq.question}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-brand-600">
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="size-4" />
                                <span>{faq.helpful}% helpful</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="capitalize">
                                  {faq.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`
                            transition-transform duration-200 flex-shrink-0
                            ${isExpanded ? "rotate-180" : ""}
                          `}
                          >
                            <ChevronDown className="size-6 text-brand-700" />
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
                            <div className="pt-4 border-t border-brand-200/50">
                              <p className="text-brand-700 leading-relaxed mb-4">
                                {faq.answer}
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {faq.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-brand-100/60 text-brand-700"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Motion>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Show More/Less Button */}
            {filteredFAQs.length > 6 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllFAQs(!showAllFAQs)}
                  className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white/70 text-brand-700 px-6 py-3 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label={showAllFAQs ? "Show fewer FAQs" : "Show all FAQs"}
                >
                  <span>
                    {showAllFAQs
                      ? "Show Less"
                      : `Show All ${filteredFAQs.length} Questions`}
                  </span>
                  {showAllFAQs ? (
                    <ChevronUp className="size-4" />
                  ) : (
                    <ChevronDown className="size-4" />
                  )}
                </button>
              </div>
            )}
          </div>
        </Motion>

        {/* Quick Tips */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <Lightbulb className="size-4 text-brand-700" />
              <span>Quick Tips</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-950 mb-2">
              Pro Tips for a Smooth Audit
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto">
              Follow these expert tips to ensure your audit process goes
              smoothly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => {
              const TipIcon = tip.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-4">
                    <TipIcon className="size-6 text-brand-900" />
                  </div>
                  <h4 className="font-semibold text-brand-950 mb-2">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-brand-700 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Motion>

        {/* Helpful Resources */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <BookOpen className="size-4 text-brand-700" />
              <span>Helpful Resources</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-950 mb-2">
              Additional Resources
            </h3>
            <p className="text-brand-700 max-w-2xl mx-auto">
              Download guides, watch tutorials, and access tools to help you
              prepare for your audit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpfulResources.map((resource, index) => {
              const ResourceIcon = resource.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 supports-[backdrop-filter]:bg-white/70 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex rounded-lg bg-brand-100/60 p-3">
                      <ResourceIcon className="size-6 text-brand-900" />
                    </div>
                    {resource.popular && (
                      <span className="inline-flex items-center gap-1 text-xs bg-brand-600 text-white px-2 py-1 rounded-full">
                        <Star className="size-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h4 className="font-semibold text-brand-950 mb-2 group-hover:text-brand-700 transition-colors">
                    {resource.title}
                  </h4>

                  <p className="text-sm text-brand-700 mb-3 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-600 bg-brand-50/60 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                    <ExternalLink className="size-4 text-brand-600 group-hover:text-brand-700 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </Motion>

        {/* Contact Support */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-6">
              <MessageCircle className="size-4 text-brand-700" />
              <span>Still Need Help?</span>
            </div>

            <h3 className="text-2xl font-semibold text-brand-950 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h3>

            <p className="text-brand-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our expert support team is here to help with any questions about
              trust account audits, compliance requirements, or our process.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactOptions.map((option, index) => {
                const OptionIcon = option.icon;

                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-brand-200/50 bg-brand-50/30 hover:bg-brand-50/50 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="inline-flex rounded-lg bg-brand-100/60 p-3 mb-4">
                      <OptionIcon className="size-6 text-brand-900" />
                    </div>

                    <h4 className="font-semibold text-brand-950 mb-2 group-hover:text-brand-700 transition-colors">
                      {option.title}
                    </h4>

                    <p className="text-sm text-brand-700 mb-3">
                      {option.description}
                    </p>

                    <div className="space-y-1 text-xs text-brand-600">
                      <div className="font-medium">{option.contact}</div>
                      <div>{option.hours}</div>
                      <div className="text-brand-700 font-medium">
                        Response: {option.response}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Contact support team"
              >
                <span>Contact Support</span>
                <ArrowRight className="size-4" />
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white/70 text-brand-700 px-6 py-3 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Schedule consultation"
              >
                <span>Schedule Consultation</span>
                <Calendar className="size-4" />
              </button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
