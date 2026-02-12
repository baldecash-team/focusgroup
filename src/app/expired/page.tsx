"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/components/google-analytics";

export default function ExpiredPage() {
  useEffect(() => {
    trackEvent("fg_expired_session");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-6 max-w-sm">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20">
          <svg
            className="h-8 w-8 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-zinc-900">Sesión finalizada</h1>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Esta sesión de focus group ya no está disponible.
            Gracias por tu participación.
          </p>
        </div>

        <Link
          href="https://baldecash.com"
          className="mt-2 text-sm text-accent-light hover:text-white transition-colors"
        >
          Ir a baldecash.com
        </Link>
      </div>
    </main>
  );
}
