"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { animations } from "@/data/animations";
import { usePathname } from "next/navigation";
import type React from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Normalize path to match animations route structure
  const normalizedPath = pathname ? pathname.replace(/\/$/, "") : "";

  // Check if current page is one of the component demo pages
  const isDemoPage = animations.some((anim) => anim.route === normalizedPath);

  return (
    <>
      <Header />
      <main
        id="main-scroller"
        className={`flex-grow w-full relative overflow-y-auto overflow-x-hidden mt-16 ${
          isDemoPage ? "demo-page-container" : ""
        }`}
        style={{ height: "calc(100vh - 64px)" }}
      >
        {children}
        {!isDemoPage && <Footer />}
      </main>
    </>
  );
}
