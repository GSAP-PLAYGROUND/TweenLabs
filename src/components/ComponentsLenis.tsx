"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ComponentsLenis() {
  const pathname = usePathname();

  // Persistent Lenis instance — lives for the entire components layout lifetime
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.getElementById("main-scroller");
    if (!scroller) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller,
      eventsTarget: scroller,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", handleScroll);

    const gsapTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTick);
    };
  }, []);

  // On route change: reset scroll position and refresh ScrollTrigger
  useEffect(() => {
    const scroller = document.getElementById("main-scroller");
    if (!scroller) return;

    // Reset scroll to top
    scroller.scrollTop = 0;

    // Give the new component time to mount and create its ScrollTriggers,
    // then refresh so they recalculate positions correctly
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}


