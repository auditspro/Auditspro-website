"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EnvelopeIcon, CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Subscribed successfully.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to subscribe.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md">
      {status === "success" && (
        <div className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2">
          <CheckCircleIcon className="size-5 text-green-600" />
          <p className="text-sm text-green-800" aria-live="polite">
            {message || "Subscribed successfully."}
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
          <ExclamationTriangleIcon className="size-5 text-red-600" />
          <p className="text-sm text-red-800" aria-live="polite">
            {message || "Something went wrong. Please try again."}
          </p>
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email
        </label>
        <div className="relative mt-1">
          <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-lg border border-brand-300 bg-white/70 pl-10 pr-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="you@company.com"
            aria-invalid={status === "error" ? true : undefined}
          />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={status === "loading"}
          size="lg"
          className="btn-primary-brand px-8 w-full sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin -ml-0.5 mr-2 h-4 w-4 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2A6 6 0 006 12H4z"></path>
              </svg>
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
    </form>
  );
}
