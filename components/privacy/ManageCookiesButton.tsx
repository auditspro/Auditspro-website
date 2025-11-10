"use client";

export function ManageCookiesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("open-cookie-banner"));
        }
      }}
      className="inline-flex items-center rounded-md border border-brand-200 bg-white px-4 py-2 text-sm text-brand-900 shadow-sm hover:bg-brand-50"
      aria-label="Manage cookie preferences"
    >
      Manage Cookies
    </button>
  );
}