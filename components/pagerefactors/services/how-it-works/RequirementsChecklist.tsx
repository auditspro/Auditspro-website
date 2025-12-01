"use client";
import { Motion } from "@/components/ui/motion";
import { useState } from "react";
import {
  DocumentTextIcon as FileText,
  CheckCircleIcon as CheckCircle2,
  ArrowDownTrayIcon as Download,
  ExclamationCircleIcon as AlertCircle,
  FolderIcon as Folder,
  DocumentChartBarIcon as FileSpreadsheet,
  PhotoIcon as FileImage,
  ServerStackIcon as HardDrive,
  CloudIcon as Cloud,
  ShieldCheckIcon as Shield,
  ClockIcon as Clock,
  ChevronDownIcon as ChevronDown,
  ChevronUpIcon as ChevronUp,
  ArrowTopRightOnSquareIcon as ExternalLink,
  InformationCircleIcon as Info,
} from "@heroicons/react/24/outline";

export function RequirementsChecklist() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleCheckItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const documentCategories = [
    {
      id: "financial-records",
      title: "Financial Records",
      icon: FileSpreadsheet,
      description: "Core financial documentation required for audit",
      priority: "Critical",
      estimatedTime: "2-3 hours",
      documents: [
        {
          id: "bank-statements",
          name: "Bank statements for all trust accounts",
          required: true,
          tip: "Ensure all pages are included and clearly legible",
        },
        {
          id: "reconciliation",
          name: "Monthly reconciliation statements",
          required: true,
          tip: "Must show opening balance, deposits, withdrawals, and closing balance",
        },
        {
          id: "deposit-books",
          name: "Deposit books and receipt records",
          required: true,
          tip: "Include both physical and electronic deposit records",
        },
        {
          id: "cheque-butts",
          name: "Cheque butts and payment vouchers",
          required: true,
          tip: "Ensure all cancelled cheques are included",
        },
        {
          id: "journal-entries",
          name: "Trust account journal entries",
          required: false,
          tip: "Helpful for complex transactions and adjustments",
        },
      ],
    },
    {
      id: "client-records",
      title: "Client & Matter Records",
      icon: Folder,
      description: "Client-specific trust account documentation",
      priority: "High",
      estimatedTime: "1-2 hours",
      documents: [
        {
          id: "client-ledgers",
          name: "Individual client trust ledgers",
          required: true,
          tip: "Must show all transactions for each client matter",
        },
        {
          id: "trust-receipts",
          name: "Trust money receipt records",
          required: true,
          tip: "Include source of funds and purpose documentation",
        },
        {
          id: "disbursement-records",
          name: "Trust money disbursement records",
          required: true,
          tip: "Must show authorization and purpose for each payment",
        },
        {
          id: "client-statements",
          name: "Client trust account statements",
          required: false,
          tip: "Periodic statements sent to clients showing their trust balance",
        },
      ],
    },
    {
      id: "compliance-docs",
      title: "Compliance Documentation",
      icon: Shield,
      description: "Regulatory and compliance-related documents",
      priority: "Critical",
      estimatedTime: "30 minutes",
      documents: [
        {
          id: "trust-register",
          name: "Trust account register",
          required: true,
          tip: "Must be maintained in approved format",
        },
        {
          id: "authority-correspondence",
          name: "Correspondence with regulatory authorities",
          required: false,
          tip: "Include any notices, queries, or responses",
        },
        {
          id: "previous-audit",
          name: "Previous audit reports and responses",
          required: false,
          tip: "Shows compliance history and resolved issues",
        },
        {
          id: "policy-procedures",
          name: "Trust account policies and procedures",
          required: false,
          tip: "Internal controls and processes documentation",
        },
      ],
    },
  ];

  const softwareOptions = [
    {
      name: "MYOB",
      icon: HardDrive,
      compatibility: "Excellent",
      exportFormats: ["PDF", "Excel", "CSV"],
    },
    {
      name: "Xero",
      icon: Cloud,
      compatibility: "Excellent",
      exportFormats: ["PDF", "Excel", "CSV", "QIF"],
    },
    {
      name: "QuickBooks",
      icon: HardDrive,
      compatibility: "Good",
      exportFormats: ["PDF", "Excel", "QBO"],
    },
    {
      name: "Sage",
      icon: HardDrive,
      compatibility: "Good",
      exportFormats: ["PDF", "Excel", "CSV"],
    },
    {
      name: "Custom Systems",
      icon: FileText,
      compatibility: "Variable",
      exportFormats: ["PDF", "Excel"],
    },
  ];

  const fileFormats = [
    {
      format: "PDF",
      icon: FileText,
      recommended: true,
      description: "Best for statements and reports",
    },
    {
      format: "Excel/CSV",
      icon: FileSpreadsheet,
      recommended: true,
      description: "Ideal for transaction data",
    },
    {
      format: "Images (JPG/PNG)",
      icon: FileImage,
      recommended: false,
      description: "Only for physical documents",
    },
  ];

  const totalDocuments = documentCategories.reduce(
    (total, category) => total + category.documents.length,
    0
  );
  const checkedDocuments = checkedItems.size;
  const completionPercentage =
    totalDocuments > 0
      ? Math.round((checkedDocuments / totalDocuments) * 100)
      : 0;

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
            <FileText className="size-4 text-brand-700" />
            <span>Document Requirements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-950 mb-4">
            Required Documents{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              Checklist
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ensure you have all necessary documents ready for your trust account
            audit. Use this interactive checklist to track your preparation
            progress.
          </p>

          {/* Progress Indicator */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-brand-900">
                Preparation Progress
              </span>
              <span className="text-sm font-medium text-brand-700">
                {completionPercentage}%
              </span>
            </div>
            <div className="w-full bg-brand-100 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-brand-600 to-brand-700 h-2 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <p className="text-xs text-brand-600 mt-1">
              {checkedDocuments} of {totalDocuments} documents prepared
            </p>
          </div>
        </Motion>

        {/* Document Categories */}
        <div className="space-y-6 mb-12">
          {documentCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            const isExpanded = expandedCategory === category.id;
            const isHovered = hoveredCategory === category.id;
            const categoryCheckedItems = category.documents.filter((doc) =>
              checkedItems.has(doc.id)
            ).length;
            const categoryProgress = Math.round(
              (categoryCheckedItems / category.documents.length) * 100
            );

            return (
              <Motion
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`
                    rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 
                    transition-all duration-300 cursor-pointer
                    ${
                      isHovered
                        ? "shadow-xl scale-[1.01] border-brand-300/70"
                        : "hover:shadow-lg"
                    }
                    ${isExpanded ? "ring-2 ring-brand-200/50" : ""}
                  `}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onClick={() => toggleCategory(category.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  aria-label={`View documents for ${category.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCategory(category.id);
                    }
                  }}
                >
                  {/* Category Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`
                          rounded-full bg-brand-100/60 p-3 transition-all duration-200
                          ${isHovered ? "bg-brand-200/60 scale-110" : ""}
                        `}
                        >
                          <CategoryIcon
                            className={`
                            size-6 text-brand-900 transition-colors duration-200
                            ${isHovered ? "text-brand-950" : ""}
                          `}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-semibold text-brand-950">
                              {category.title}
                            </h3>
                            <span
                              className={`
                              text-xs font-medium px-2 py-1 rounded-full transition-all duration-200
                              ${
                                category.priority === "Critical"
                                  ? "bg-red-100 text-red-700 border border-red-200"
                                  : "bg-amber-100 text-amber-700 border border-amber-200"
                              }
                              ${isHovered ? "scale-105" : ""}
                            `}
                            >
                              {category.priority}
                            </span>
                          </div>
                          <p className="text-brand-700 mb-2">
                            {category.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-brand-600">
                            <div className="flex items-center gap-1">
                              <Clock className="size-4" />
                              <span>{category.estimatedTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FileText className="size-4" />
                              <span>{category.documents.length} documents</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Progress Circle */}
                        <div className="relative size-12">
                          <svg
                            className="size-12 transform -rotate-90"
                            viewBox="0 0 36 36"
                          >
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-brand-200"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeDasharray={`${categoryProgress}, 100`}
                              className="text-brand-600"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-medium text-brand-900">
                              {categoryProgress}%
                            </span>
                          </div>
                        </div>

                        <div
                          className={`
                          rounded-full bg-brand-50/60 p-2 transition-all duration-200
                          ${isHovered ? "bg-brand-100/60" : ""}
                        `}
                        >
                          {isExpanded ? (
                            <ChevronUp className="size-5 text-brand-700" />
                          ) : (
                            <ChevronDown className="size-5 text-brand-700" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <Motion
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-brand-200/50">
                        <div className="pt-6 space-y-3">
                          {category.documents.map((document) => {
                            const isChecked = checkedItems.has(document.id);

                            return (
                              <div
                                key={document.id}
                                className={`
                                  flex items-start gap-3 p-4 rounded-lg border transition-all duration-200 cursor-pointer
                                  ${
                                    isChecked
                                      ? "bg-brand-50/60 border-brand-200 ring-1 ring-brand-200/50"
                                      : "bg-white/70 border-brand-200/50 hover:bg-brand-50/30"
                                  }
                                `}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleCheckItem(document.id);
                                }}
                                role="checkbox"
                                aria-checked={isChecked}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    toggleCheckItem(document.id);
                                  }
                                }}
                              >
                                <div
                                  className={`
                                  rounded-full p-1 transition-all duration-200 mt-0.5
                                  ${
                                    isChecked
                                      ? "bg-brand-600 text-white"
                                      : "bg-brand-200/50 text-brand-600 hover:bg-brand-300/50"
                                  }
                                `}
                                >
                                  <CheckCircle2 className="size-4" />
                                </div>

                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span
                                      className={`
                                      font-medium transition-colors duration-200
                                      ${
                                        isChecked
                                          ? "text-brand-950"
                                          : "text-brand-900"
                                      }
                                    `}
                                    >
                                      {document.name}
                                    </span>
                                    {document.required && (
                                      <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full border border-red-200">
                                        Required
                                      </span>
                                    )}
                                  </div>
                                  {document.tip && (
                                    <div className="flex items-start gap-2 mt-2 p-2 bg-brand-50/60 border border-brand-200/50 rounded text-sm">
                                      <Info className="size-4 text-brand-700 mt-0.5 flex-shrink-0" />
                                      <span className="text-brand-700">
                                        {document.tip}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Motion>
                  )}
                </div>
              </Motion>
            );
          })}
        </div>

        {/* Software Compatibility */}
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
                <HardDrive className="size-4 text-brand-700" />
                <span>Software Compatibility</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-950 mb-2">
                Supported Accounting Software
              </h3>
              <p className="text-brand-700 max-w-2xl mx-auto">
                We work with all major accounting software platforms. Export
                your data in the recommended formats below.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-brand-200/70 bg-white/70 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/60 px-3 py-1.5 text-sm font-medium text-amber-900 mb-3">
                <AlertCircle className="size-4" />
                Coming Soon
              </div>
              <p className="text-sm text-brand-700">
                Software compatibility cards will be available soon. Please use the recommended file formats below for submissions.
              </p>
            </div>
          </div>
        </Motion>

        {/* File Formats */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
                <Download className="size-4 text-brand-700" />
                <span>File Formats</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-950 mb-2">
                Recommended File Formats
              </h3>
              <p className="text-brand-700 max-w-2xl mx-auto">
                Use these file formats for optimal processing and audit
                efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {fileFormats.map((format) => {
                const FormatIcon = format.icon;

                return (
                  <div
                    key={format.format}
                    className={`
                      p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02]
                      ${
                        format.recommended
                          ? "border-brand-300/70 bg-brand-50/60 ring-1 ring-brand-200/50"
                          : "border-brand-200/50 bg-white/70"
                      }
                    `}
                  >
                    <div className="text-center">
                      <div
                        className={`
                        inline-flex rounded-lg p-3 mb-4
                        ${
                          format.recommended
                            ? "bg-brand-100/60"
                            : "bg-brand-50/60"
                        }
                      `}
                      >
                        <FormatIcon className="size-6 text-brand-900" />
                      </div>

                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h4 className="font-semibold text-brand-950">
                          {format.format}
                        </h4>
                        {format.recommended && (
                          <span className="text-xs bg-brand-600 text-white px-2 py-1 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-brand-700">
                        {format.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Motion>

        {/* Bottom CTA */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-8 supports-[backdrop-filter]:bg-white/70">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100/60 px-4 py-2 text-sm font-medium text-brand-950 mb-4">
              <CheckCircle2 className="size-4 text-brand-700" />
              <span>Ready to Submit</span>
            </div>

            <h3 className="text-2xl font-semibold text-brand-950 mb-4">
              Documents Ready? Let's Get Started
            </h3>

            <p className="text-brand-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              Once you've gathered all required documents, our team will handle
              the rest. Upload your files securely and we'll begin your audit
              process immediately.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-brand-900 text-white px-6 py-3 font-medium hover:bg-brand-800 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Start your trust account audit process"
              >
                <span>Start Audit Process</span>
                <ExternalLink className="size-4" />
              </button>

              <button
                className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-white/70 text-brand-700 px-6 py-3 font-medium hover:bg-brand-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Download document preparation checklist"
              >
                <span>Download Checklist</span>
                <Download className="size-4" />
              </button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
