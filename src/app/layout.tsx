import type { Metadata } from "next";
import { Asap } from "next/font/google";
import GoogleAnalytics from "@/components/google-analytics";
import "./globals.css";

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BaldeCash",
  description: "BaldeCash - Plataforma de gestión financiera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${asap.variable} antialiased bg-white text-zinc-900 min-h-screen`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
