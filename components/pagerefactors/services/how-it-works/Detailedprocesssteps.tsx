import { Motion } from "@/components/ui/motion";
import {
  Mail,
  User,
  Building2,
  Search,
  FileText,
  CreditCard,
  Shield,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

export function DetailedProcessSteps() {
  const processSteps = [
    {
      phase: "Phase 1",
      step: 1,
      icon: Mail,
      title: "Email Verification & Account Setup",
      timeEstimate: "2-3 minutes",
      route: "/start-audit",
      description:
        "Begin your audit journey with secure email verification. This ensures your audit information is protected and only accessible by you.",
      detailedSteps: [
        {
          icon: Mail,
          title: "Enter Your Email",
          description:
            "Navigate to /start-audit and enter your business email address. This will be your primary contact for all audit communications.",
        },
        {
          icon: CheckCircle2,
          title: "Verify Email Code",
          description:
            "Check your inbox for a 6-digit verification code. Enter this code to confirm your email address and proceed with registration.",
        },
        {
          icon: User,
          title: "Complete Profile Setup",
          description:
            "Provide your personal details including first name, last name, mobile number (Australian format: +61 XXX XXX XXX), and company name.",
        },
      ],
      requirements: [
        "Valid business email address",
        "Access to email inbox for verification",
        "Mobile phone number (Australian)",
        "Company/business name",
      ],
      tips: [
        "Use your primary business email for reliable communication",
        "Check spam folder if verification code doesn't arrive within 2 minutes",
        "Mobile number is required for urgent audit communications",
      ],
    },
    {
      phase: "Phase 2",
      step: 2,
      icon: User,
      title: "Professional Information & Profile",
      timeEstimate: "2-3 minutes",
      route: "/profile-setup",
      description:
        "Tell us about your role and business operations. This helps us tailor the audit process to your specific needs and compliance requirements.",
      detailedSteps: [
        {
          icon: User,
          title: "Select Your Position",
          description:
            "Choose your role: Manager, Business Owner, Director, Partner, or Other. This helps us understand your authority level.",
        },
        {
          icon: Building2,
          title: "Choose Industry Types",
          description:
            "Select all applicable industries: Real Estate, Tax Accounting, Conveyancing, Solicitor, SMSF, or Other. Multi-select is supported.",
        },
        {
          icon: Shield,
          title: "Select Operating States",
          description:
            "Choose all Australian states/territories where you operate: NSW, VIC, QLD, WA, SA, TAS, ACT, NT. This determines compliance requirements.",
        },
      ],
      requirements: [
        "Your position/role in the business",
        "Industry type(s) you operate in",
        "States/territories where you hold trust accounts",
      ],
      tips: [
        "Select all industries and states that apply - this is important for compliance",
        "You can skip this step and complete it later, but it's recommended to finish now",
        "Your operating states determine which regulatory requirements apply",
      ],
    },
    {
      phase: "Phase 3",
      step: 3,
      icon: Search,
      title: "Business Verification via ABN Lookup",
      timeEstimate: "3-5 minutes",
      route: "/dashboard/audits/new",
      description:
        "We use the Australian Business Register (ABR) to automatically verify and populate your business details, saving you time and ensuring accuracy.",
      detailedSteps: [
        {
          icon: Search,
          title: "Search Your Business",
          description:
            "Enter your 11-digit ABN or search by business name. Our system automatically detects the search type and queries the ABR database.",
        },
        {
          icon: Building2,
          title: "Auto-Population",
          description:
            "We automatically fill in your company name, ABN, business type, registration status, and operating addresses from official ABR records.",
        },
        {
          icon: CheckCircle2,
          title: "Verify Information",
          description:
            "Review the auto-populated information for accuracy. Ensure your business name, ABN, and addresses are correct before proceeding.",
        },
      ],
      requirements: [
        "Valid Australian Business Number (ABN) - 11 digits",
        "Business must be registered and active with ABR",
        "Current business registration details",
      ],
      tips: [
        "Have your ABN ready - it's on your business registration documents",
        "If searching by name, be specific (e.g., 'XYZ Real Estate Pty Ltd')",
        "All information is pulled from official government records",
      ],
    },
    {
      phase: "Phase 4",
      step: 4,
      icon: FileText,
      title: "Trust Account Configuration",
      timeEstimate: "5-10 minutes",
      route: "/dashboard/audits/new (Step 2)",
      description:
        "Add your trust account details with state-specific compliance information. This is the most detailed step and varies by state.",
      detailedSteps: [
        {
          icon: FileText,
          title: "Select Account Type",
          description:
            "Choose Rental Trust Account (for bonds and property management) or Sales Trust Account (for deposits and settlements).",
        },
        {
          icon: CreditCard,
          title: "Enter Banking Details",
          description:
            "Provide account name (e.g., 'MAIN RENTAL TRUST'), BSB (XXX-XXX format), account number, and select operating state.",
        },
        {
          icon: Shield,
          title: "State-Specific Compliance",
          description:
            "Complete state-specific requirements like NSW UID, license numbers, entity details, and property management software declarations.",
        },
        {
          icon: CheckCircle2,
          title: "Add Multiple Accounts",
          description:
            "If you operate multiple trust accounts, click 'Add Another Account' and repeat the process. Each account is audited separately.",
        },
      ],
      requirements: [
        "Trust account name",
        "BSB and account number",
        "Operating state for each account",
        "NSW: Unique Identifying Number (UID)",
        "License numbers (state-specific)",
        "Property management software details",
      ],
      tips: [
        "Have your bank statements ready to verify BSB and account numbers",
        "NSW users must have their UID from NSW Fair Trading",
        "Each trust account is priced separately ($549-$749 + GST)",
        "All banking information is encrypted with AES-256",
      ],
    },
    {
      phase: "Phase 4 (NSW Specific)",
      step: "4a",
      icon: Shield,
      title: "NSW Trust Account Requirements",
      timeEstimate: "3-5 minutes (NSW only)",
      route: "/dashboard/audits/new (NSW Section)",
      description:
        "NSW has additional compliance requirements including UID verification and licensee information that must be submitted to NSW Fair Trading.",
      detailedSteps: [
        {
          icon: Shield,
          title: "NSW UID Entry",
          description:
            "Enter your NSW Unique Identifying Number (UID) provided by NSW Fair Trading. This is mandatory for all NSW trust accounts.",
        },
        {
          icon: User,
          title: "Licensee Information",
          description:
            "Provide license number, email, first name, last name, entity license number, and optional entity license expiry date.",
        },
        {
          icon: FileText,
          title: "Software Declaration",
          description:
            "Select your property management software: PropertyMe, PropertyTree, or Other. You can add custom software if needed.",
        },
      ],
      requirements: [
        "NSW Unique Identifying Number (UID)",
        "Individual license number",
        "Licensed individual's email and name",
        "Entity license number",
        "Property management software name",
      ],
      tips: [
        "Your UID is available from NSW Fair Trading portal",
        "Licensee email must match Fair Trading records",
        "NSW submissions are online-only via audits@finance.nsw.gov.au",
        "All software must be declared for compliance",
      ],
    },
    {
      phase: "Phase 5",
      step: 5,
      icon: CreditCard,
      title: "Review & Cost Calculation",
      timeEstimate: "2-3 minutes",
      route: "/dashboard/audits/new (Review)",
      description:
        "Review all your information and see transparent, fixed pricing breakdown before submission. No hidden fees, no surprises.",
      detailedSteps: [
        {
          icon: CheckCircle2,
          title: "Information Review",
          description:
            "Carefully review your business details, trust account information, and state-specific compliance data for accuracy.",
        },
        {
          icon: CreditCard,
          title: "Pricing Breakdown",
          description:
            "View transparent pricing: Number of accounts × $549-$749 per account + GST. See subtotal, GST amount, and final total.",
        },
        {
          icon: Shield,
          title: "Secure Submission",
          description:
            "Submit your audit request through our encrypted portal. All data is transmitted securely using bank-grade encryption.",
        },
      ],
      requirements: [
        "Verified business information",
        "Complete trust account details",
        "State compliance information",
        "Payment information (if required)",
      ],
      tips: [
        "Double-check all account numbers before submitting",
        "Fixed pricing means no surprise costs later",
        "You'll receive instant confirmation after submission",
        "Access your dashboard anytime to track progress",
      ],
    },
    {
      phase: "Post-Submission",
      step: 6,
      icon: Download,
      title: "Audit Processing & Report Delivery",
      timeEstimate: "5-10 business days",
      route: "/dashboard",
      description:
        "Our IPA qualified auditors review your trust accounts for ASIC compliance. You'll receive your comprehensive audit report via secure download.",
      detailedSteps: [
        {
          icon: Clock,
          title: "Audit in Progress",
          description:
            "Our auditors review your trust accounts, verify compliance, and prepare your audit report. Track status in your dashboard.",
        },
        {
          icon: CheckCircle2,
          title: "Quality Review",
          description:
            "Senior auditors perform quality checks to ensure accuracy and completeness of findings before finalizing your report.",
        },
        {
          icon: Download,
          title: "Report Download",
          description:
            "Receive notification when your report is ready. Download your ASIC-compliant audit report from the secure portal.",
        },
      ],
      requirements: [
        "Submitted audit request",
        "All documentation provided",
        "Trust account records available",
      ],
      tips: [
        "Reports are typically completed within 5-10 business days",
        "You can contact support anytime with questions (24h response)",
        "Reports are ready for immediate ASIC submission",
        "All reports stored securely in your portal",
      ],
    },
  ];

  return (
    <section className="container relative mx-auto px-4 sm:px-6 py-16">
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-950 mb-4">
          Complete Step-by-Step Process
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Follow these detailed steps to complete your trust account audit
          submission. Each phase includes specific requirements and helpful
          tips.
        </p>
      </Motion>

      {/* Process Steps */}
      <div className="space-y-12">
        {processSteps.map((step, index) => (
          <Motion
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="rounded-2xl border border-brand-200/70 bg-white/70 backdrop-blur p-6 md:p-8 supports-[backdrop-filter]:bg-white/40">
              {/* Step Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                {/* Icon and Step Number */}
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-brand-900 size-14 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="rounded-lg bg-brand-100/60 p-3">
                    <step.icon className="size-8 text-brand-900" />
                  </div>
                </div>

                {/* Title and Meta */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-brand-700 px-2 py-1 rounded-full bg-brand-50 border border-brand-200">
                      {step.phase}
                    </span>
                    <span className="text-xs font-medium text-slate-600 px-2 py-1 rounded-full bg-slate-50 border border-slate-200 flex items-center gap-1">
                      <Clock className="size-3" />
                      {step.timeEstimate}
                    </span>
                    <code className="text-xs font-mono text-brand-700 px-2 py-1 rounded bg-brand-50 border border-brand-200">
                      {step.route}
                    </code>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Detailed Steps */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-950 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand-700" />
                  Detailed Steps
                </h4>
                <div className="space-y-4">
                  {step.detailedSteps.map((detailStep, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-brand-50/40 to-white/40 border border-brand-200/50"
                    >
                      <div className="rounded-md bg-brand-100/60 p-2 h-fit">
                        <detailStep.icon className="size-5 text-brand-900" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-brand-950 mb-1">
                          {detailStep.title}
                        </h5>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {detailStep.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements and Tips Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Requirements */}
                <div>
                  <h4 className="text-sm font-semibold text-brand-950 mb-3 flex items-center gap-2">
                    <FileText className="size-4 text-brand-700" />
                    What You&apos;ll Need
                  </h4>
                  <ul className="space-y-2">
                    {step.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <div className="size-1.5 rounded-full bg-brand-700 mt-1.5 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="text-sm font-semibold text-brand-950 mb-3 flex items-center gap-2">
                    <AlertCircle className="size-4 text-brand-700" />
                    Helpful Tips
                  </h4>
                  <ul className="space-y-2">
                    {step.tips.map((tip, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Motion>
        ))}
      </div>
    </section>
  );
}
