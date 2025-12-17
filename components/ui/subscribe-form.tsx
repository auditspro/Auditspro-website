"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-lg border border-brand-300 bg-white/70 px-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="you@company.com"
        />
      </div>
      <div className="flex gap-3">
        <Button type="submit" disabled={status === "loading"} className="btn-primary-brand">
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      {message && (
        <p
          className={
            status === "success"
              ? "text-sm text-green-700"
              : status === "error"
              ? "text-sm text-red-700"
              : "text-sm text-slate-600"
          }
        >
          {message}
        </p>
      )}
    </form>
  );
}

