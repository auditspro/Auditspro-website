"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Upload,
  Search,
  CheckCircle2,
  ArrowRight,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Request a quote",
      description:
        "Submit your details online. We respond within 24 hours with a fixed-fee proposal.",
      duration: "Same day",
    },
    {
      number: "02",
      icon: FileText,
      title: "Receive your checklist",
      description:
        "Access our digital checklist and secure portal to prepare your documentation.",
      duration: "Immediate",
    },
    {
      number: "03",
      icon: Upload,
      title: "Upload documents",
      description:
        "Securely upload your trust account records through our encrypted portal.",
      duration: "At your pace",
    },
    {
      number: "04",
      icon: Search,
      title: "We conduct the audit",
      description:
        "Our specialised trust account auditors review your records and perform compliance checks.",
      duration: "5–10 business days",
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: "Receive your report",
      description:
        "Download your audit report and any required regulatory submissions.",
      duration: "Same day as completion",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Matching grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23, 37, 84, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 37, 84, 0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Divider */}
      <div className="container relative mx-auto px-4 sm:px-6 pb-10">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Clock className="size-7 text-blue-700" aria-hidden="true" />
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-medium tracking-tight text-blue-950"
          >
            How It Works
          </h2>
        </div>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A simple, transparent process from quote to completion
        </p>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex justify-center mb-12"
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80">
          {/* Circular frame with gradient background */}
          <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-white border-4 border-blue-200/30 shadow-xl">
            <Image
              src="/images/Gemini_Generated_Image_c151msc151msc151.png"
              alt="Step-by-step workflow diagram showing audit process"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 320px"
              priority={false}
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Process Steps - Mobile: Vertical, Desktop: Horizontal */}
      <div className="relative">
        {/* Desktop: Horizontal connector line */}
        <div
          className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200"
          aria-hidden="true"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Card */}
              <div className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 supports-[backdrop-filter]:bg-blue-50/40 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-medium text-blue-700/40">
                    {step.number}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100/80 flex items-center justify-center border border-blue-200/50">
                    <step.icon className="size-5 text-blue-700" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-medium text-blue-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {step.description}
                </p>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-white/80 px-2.5 py-1 text-xs font-medium text-blue-700">
                  <Clock className="size-3" />
                  {step.duration}
                </div>
              </div>

              {/* Arrow connector (desktop only, not after last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-12 -right-3 items-center justify-center w-6 h-6 rounded-full bg-blue-100 border-2 border-white z-10">
                  <ArrowRight className="size-3.5 text-blue-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="rounded-xl border border-blue-200/70 bg-blue-50/60 backdrop-blur p-6 sm:p-8 supports-[backdrop-filter]:bg-blue-50/40 inline-block">
          <h3 className="text-xl sm:text-2xl font-medium text-blue-950 mb-3">
            Ready to get started?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mb-4 max-w-lg">
            Get your fixed-fee quote today. No obligations, no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-blue-900 hover:bg-blue-800 text-white"
            >
              <Link href="/book-demo">Request a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-blue-200 text-blue-950 hover:bg-blue-50"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
