"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Shield,
  FileCheck,
  CircleArrowRight,
  Server,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Network Information API types
interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: "2g" | "3g" | "4g" | "slow-2g";
}

type HeroProps = {
  mediaSrc?: string;
  posterSrc?: string;
  autoplay?: boolean;
  showArcs?: boolean;
  mediaType?: "video" | "image";
  mediaAlt?: string;
};

export function Hero({
  mediaSrc = "/videos/auditsprovid.mp4",
  posterSrc,
  autoplay = true,
  showArcs = true,
  mediaType,
  mediaAlt = "Professional trust account auditing demonstration",
}: HeroProps) {
  const reduceMotion = useReducedMotion();
  const isGif = mediaSrc?.toLowerCase().endsWith(".gif");
  const preferredType: "video" | "image" =
    mediaType ?? (isGif ? "image" : "video");

  const [mediaError, setMediaError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoplay && !reduceMotion);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Respect reduced motion and slow networks/data saver by deferring video load
  useEffect(() => {
    const connection: NetworkInformation | undefined =
      typeof navigator !== "undefined"
        ? (navigator as Navigator & { connection?: NetworkInformation })
            .connection
        : undefined;
    const saveData = !!connection?.saveData;
    const effectiveType = connection?.effectiveType as string | undefined;
    const isSlowNetwork =
      !!effectiveType &&
      (/^slow-2g$/.test(effectiveType) || /^2g$/.test(effectiveType));

    // If user prefers reduced motion or has data saver/slow network, avoid loading video
    if (reduceMotion || saveData || isSlowNetwork) {
      setShouldLoadVideo(false);
      return;
    }

    // Lazy-load when hero enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
          }
        });
      },
      { rootMargin: "200px", threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [reduceMotion]);

  // Start playback once loaded and allowed
  useEffect(() => {
    if (shouldLoadVideo && autoplay && !reduceMotion) {
      setIsPlaying(true);
    }
  }, [shouldLoadVideo, autoplay, reduceMotion]);

  const posterFallback = posterSrc;

  return (
    <section
      className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Lighter grid background - matching professional aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23, 37, 84, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 37, 84, 0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="grid gap-8 md:gap-10 lg:gap-16 md:grid-cols-2 md:items-center">
        {/* Content Column */}
        <div className="space-y-6">
          {/* Trust badge - Blue-950 theme matching logo */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/80 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-950 backdrop-blur supports-[backdrop-filter]:bg-blue-50/60"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            role="status"
            aria-label="Registered Australian auditors with 24 hour response time and fixed pricing"
          >
            <span
              className="inline-block h-2 w-2 rounded-full bg-blue-700 animate-pulse flex-shrink-0"
              aria-hidden="true"
            />
            <span className="leading-tight">
              Registered Auditors • Fixed Price $549 + GST • 24h Response
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight text-blue-950"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Professional Trust Account Auditing for Australian Businesses
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-slate-600 max-w-prose leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            100% cloud-based trust account audits by specialised trust account
            auditors. Transparent fixed pricing from $549 + GST with guaranteed
            24‑hour response—no hidden fees, no surprises. Use our{" "}
            <Link
              href="/trust-account-audit-checklist"
              className="text-blue-800 hover:text-blue-900 underline underline-offset-2"
            >
              document checklist
            </Link>{" "}
            to prepare.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <Button
              asChild
              size="lg"
              className="gap-2 w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white"
            >
              <Link href="/book-demo" aria-label="Start your audit">
                <CircleArrowRight className="size-4" aria-hidden="true" />
                Book Demo
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 w-full sm:w-auto border-blue-200 text-blue-950 hover:bg-blue-50"
            >
              <Link href="/pricing">
                <CreditCard className="size-4" aria-hidden="true" />
                View Pricing
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators - matching blue-950 theme */}
          <motion.div
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-sm text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-blue-700" aria-hidden="true" />
              <span>24h Response</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="size-4 text-blue-700" aria-hidden="true" />
              <span>Trust Account Auditors</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="size-4 text-blue-700" aria-hidden="true" />
              <span>Fixed Price</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="size-4 text-blue-700" aria-hidden="true" />
              <span>Data stored in Australia</span>
            </div>
          </motion.div>
        </div>

        {/* Media Column */}
        <motion.div
          className="relative flex items-center justify-center order-first md:order-last"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            ref={containerRef}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[480px] aspect-square"
          >
            {/* Circular masked media with blue-themed gradient */}
            <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
              {!mediaError ? (
                preferredType === "video" && shouldLoadVideo ? (
                  <video
                    className="w-full h-full object-cover"
                    controls={false}
                    muted
                    playsInline
                    autoPlay={isPlaying}
                    loop
                    preload="metadata"
                    poster={posterFallback}
                    onError={() => setMediaError(true)}
                    title="Trust account audit process demonstration"
                    src={mediaSrc}
                  />
                ) : (
                  <Image
                    src={mediaSrc}
                    alt={mediaAlt}
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 400px, 480px"
                    onError={() => setMediaError(true)}
                  />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200">
                  <FileCheck
                    className="size-16 text-blue-700/40"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>

            {/* Decorative arcs - subtle blue tones matching logo */}
            {showArcs && (
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M75 85 Q85 75 95 65"
                  fill="none"
                  stroke="rgba(29, 78, 216, 0.08)"
                  strokeWidth="0.5"
                />
                <path
                  d="M5 35 Q15 25 25 15"
                  fill="none"
                  stroke="rgba(30, 58, 138, 0.10)"
                  strokeWidth="0.5"
                />
              </svg>
            )}
          </div>
        </motion.div>
      </div>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AuditsPro AU",
            description:
              "Professional trust account auditing services for Australian businesses with fixed pricing and 24h response.",
            areaServed: "Australia",
          }),
        }}
      />
    </section>
  );
}
