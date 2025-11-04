"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/ga";
import { Button } from "@/components/ui/button";
import { Motion } from "@/components/ui/motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  variant?: "default" | "booking" | "contact" | "legal" | "solicitor";
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
  theme?: "light" | "dark" | "brand";
  size?: "sm" | "md" | "lg";
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  preferredDate?: string;
  preferredTime?: string;
  auditType?: string;
  practiceType?: string;
  trustAccounts?: string;
}

export function ContactForm({
  title = "Get In Touch",
  subtitle = "Ready to get started? Contact us today.",
  showTitle = true,
  variant = "default",
  onSubmit,
  className = "",
  theme = "light",
  size = "md",
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    auditType: "",
    practiceType: "",
    trustAccounts: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Fire GA event for submit start
      trackEvent('contact_form_submit_start', {
        variant,
        name_present: !!formData.name,
        email_present: !!formData.email,
      });
      // Custom onSubmit handler if provided
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Submit to API route
        const submissionData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          company: formData.company || undefined,
          message: formData.message,
          preferredDate: formData.preferredDate || undefined,
          preferredTime: formData.preferredTime || undefined,
          auditType: formData.auditType || undefined,
          practiceType: formData.practiceType || undefined,
          trustAccounts: formData.trustAccounts || undefined,
          formVariant: variant,
        };

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(result.error || 'Failed to submit contact form');
        }

        console.log("Form submitted successfully:", result);
        // Fire GA event for successful submit
        trackEvent('contact_form_submit_success', {
          variant,
          has_phone: !!formData.phone,
          has_company: !!formData.company,
        });
      }

      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
        auditType: "",
        practiceType: "",
        trustAccounts: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      // Fire GA event for submit error
      trackEvent('contact_form_submit_error', {
        variant,
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isBookingVariant = variant === "booking";
  const isLegalVariant = variant === "legal" || variant === "solicitor";
  
  // Theme classes
  const themeClasses = {
    light: {
      container: "bg-white border-slate-200",
      label: "text-slate-700",
      input: "border-slate-300 focus:ring-brand-500 focus:border-brand-500 bg-white text-slate-900",
      button: "bg-brand-900 hover:bg-brand-800 text-white",
    },
    dark: {
      container: "bg-slate-900 border-slate-700",
      label: "text-slate-300",
      input: "border-slate-600 focus:ring-brand-400 focus:border-brand-400 bg-slate-800 text-slate-100",
      button: "bg-brand-600 hover:bg-brand-700 text-white",
    },
    brand: {
      container: "bg-brand-50 border-brand-200",
      label: "text-brand-900",
      input: "border-brand-300 focus:ring-brand-500 focus:border-brand-500 bg-white text-brand-900",
      button: "bg-brand-900 hover:bg-brand-800 text-white",
    },
  };

  const currentTheme = themeClasses[theme];
  
  // Size classes
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full max-w-2xl mx-auto ${className}`}
    >
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold text-brand-950 mb-4 ${sizeClasses[size]}`}>
            {title}
          </h2>
          <p className={`text-slate-600 ${sizeClasses[size]}`}>
            {subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
            >
              <div className="flex items-center gap-2">
                <span>Full Name *</span>
              </div>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
            >
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="size-4" />
                <span>Email Address *</span>
              </div>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
            >
              <div className="flex items-center gap-2">
                <PhoneIcon className="size-4" />
                <span>Phone Number {isBookingVariant || isLegalVariant ? "*" : "(Optional)"}</span>
              </div>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required={isBookingVariant || isLegalVariant}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
              placeholder="Enter your phone number"
            />
          </div>

          {/* Company Field */}
          <div>
            <label
              htmlFor="company"
              className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
            >
              <div className="flex items-center gap-2">
                <BuildingOfficeIcon className="size-4" />
                <span>
                  {isLegalVariant ? "Legal Practice/Firm" : "Company/Organization"} 
                  {isBookingVariant || isLegalVariant ? " *" : " (Optional)"}
                </span>
              </div>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required={isBookingVariant || isLegalVariant}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
              placeholder={isLegalVariant ? "Enter your legal practice name" : "Enter your company name"}
            />
          </div>
        </div>

        {/* Legal-specific fields */}
        {isLegalVariant && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Practice Type */}
            <div>
              <label
                htmlFor="practiceType"
                className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
              >
                Practice Type *
              </label>
              <select
                id="practiceType"
                name="practiceType"
                value={formData.practiceType}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
              >
                <option value="">Select practice type</option>
                <option value="sole-practitioner">Sole Practitioner</option>
                <option value="small-firm">Small Firm (2-10 lawyers)</option>
                <option value="medium-firm">Medium Firm (11-50 lawyers)</option>
                <option value="large-firm">Large Firm (50+ lawyers)</option>
                <option value="in-house">In-House Legal</option>
              </select>
            </div>

            {/* Trust Accounts */}
            <div>
              <label
                htmlFor="trustAccounts"
                className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
              >
                Number of Trust Accounts *
              </label>
              <select
                id="trustAccounts"
                name="trustAccounts"
                value={formData.trustAccounts}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
              >
                <option value="">Select number</option>
                <option value="1">1 Trust Account</option>
                <option value="2-3">2-3 Trust Accounts</option>
                <option value="4-5">4-5 Trust Accounts</option>
                <option value="6+">6+ Trust Accounts</option>
              </select>
            </div>
          </div>
        )}

        {/* Booking-specific fields */}
        {isBookingVariant && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
                >
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="size-4" />
                    <span>Preferred Date *</span>
                  </div>
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label
                  htmlFor="preferredTime"
                  className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
                >
                  Preferred Time *
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
                >
                  <option value="">Select a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>

            {/* Audit Type */}
            <div>
              <label
                htmlFor="auditType"
                className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
              >
                Audit Type *
              </label>
              <select
                id="auditType"
                name="auditType"
                value={formData.auditType}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${currentTheme.input}`}
              >
                <option value="">Select audit type</option>
                <option value="trust-account">Trust Account Audit</option>
                <option value="compliance">Compliance Audit</option>
                <option value="financial">Financial Audit</option>
                <option value="consultation">Initial Consultation</option>
              </select>
            </div>
          </>
        )}

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className={`block text-sm font-medium mb-2 ${currentTheme.label}`}
          >
            <div className="flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="size-4" />
              <span>
                {isBookingVariant ? "Additional Requirements" : 
                 isLegalVariant ? "Legal Audit Requirements" : "Message"} *
              </span>
            </div>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors resize-vertical ${currentTheme.input}`}
            placeholder={
              isLegalVariant
                ? "Please describe your legal practice audit requirements, compliance concerns, or specific Law Society requirements..."
                : isBookingVariant
                ? "Please describe your specific audit requirements, any compliance concerns, or questions you have..."
                : "Tell us about your project or how we can help you..."
            }
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className={`w-full md:w-auto gap-2 ${currentTheme.button}`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : isLegalVariant ? (
              "Start Legal Audit"
            ) : isBookingVariant ? (
              "Book Consultation"
            ) : (
              "Send Message"
            )}
          </Button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <Motion
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center justify-center gap-2 text-green-800 font-medium">
              <CheckCircleIcon className="size-5" />
              <p>
                {isLegalVariant
                  ? "Legal audit request submitted successfully! We'll contact you within 24 hours to discuss your Law Society compliance requirements."
                  : isBookingVariant
                  ? "Consultation booking submitted successfully! We'll contact you within 24 hours to confirm your appointment."
                  : "Message sent successfully! We'll get back to you soon."}
              </p>
            </div>
          </Motion>
        )}

        {submitStatus === "error" && (
          <Motion
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <div className="flex items-center justify-center gap-2 text-red-800 font-medium">
              <ExclamationTriangleIcon className="size-5" />
              <p>
                There was an error submitting your request. Please try again or
                contact us directly at{" "}
                <a href="tel:1300283487" className="underline">1300 AUDITS</a>.
              </p>
            </div>
          </Motion>
        )}
      </form>
    </Motion>
  );
}
