"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/components/google-analytics";

export default function InvalidPage() {
  useEffect(() => {
    trackEvent("fg_invalid_link");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-6 max-w-sm">
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20">
          <svg
            className="h-8 w-8 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-zinc-900">Link no válido</h1>
          <p className="text-zinc-500 text-sm leading-relaxed">
            El enlace que ingresaste no existe o no está activo.
            Verifica que el link sea correcto e intenta de nuevo.
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
