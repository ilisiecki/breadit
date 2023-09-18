import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Breadit",
  description: "reddit clone built with next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "light bg-white text-neutral-900 antialiased",
        inter.className
      )}
    >
      <body className="min-h-screen bg-neutral-50 pt-12 antialiased">
        <Navbar />
        {authModal}
        <div className="container mx-auto h-full max-w-xl pt-12">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
