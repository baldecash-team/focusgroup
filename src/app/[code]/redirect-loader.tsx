"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/components/google-analytics";

export default function RedirectLoader({ url, code }: { url: string; code: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const step = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    trackEvent("fg_redirect", { code, target: url });

    const redirectTimer = setTimeout(() => {
      window.location.href = url;
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(redirectTimer);
    };
  }, [url]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-8 max-w-sm w-full">
        {/* Loader SVG */}
        <div className="w-20 h-20">
          <Image
            src="/loader.svg"
            alt="Cargando"
            width={80}
            height={80}
            priority
          />
        </div>

        {/* Text */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-semibold text-zinc-900">
            Preparando tu sesión
          </h1>
          <p className="text-zinc-400 text-sm">
            Serás redirigido en un momento
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </main>
  );
}
