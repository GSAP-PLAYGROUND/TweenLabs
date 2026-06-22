"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { AnimationItem } from "@/data/components";
import { useAuthModal } from "@/provider/AuthModalProvider";
import { useSession } from "@/provider/SessionProvider";

gsap.registerPlugin(useGSAP);

// Color categories derived from component bgColor
const CATEGORIES = [
  { label: "All", filter: null, color: "bg-[#2a2a2a]", text: "text-white" },
  { label: "Green", filter: "bg-wtf-green", color: "bg-wtf-green", text: "text-white" },
  { label: "Orange", filter: "bg-wtf-orange", color: "bg-wtf-orange", text: "text-white" },
  { label: "Purple", filter: "bg-wtf-purple", color: "bg-wtf-purple", text: "text-white" },
  { label: "Blue", filter: "bg-wtf-blue", color: "bg-wtf-blue", text: "text-white" },
  { label: "Yellow", filter: "bg-wtf-yellow", color: "bg-wtf-yellow", text: "text-black" },
  { label: "Red", filter: "bg-wtf-red", color: "bg-wtf-red", text: "text-white" },
] as const;

interface Props {
  animations: AnimationItem[];
}

export default function ComponentsPageClient({ animations }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { session } = useSession();
  const { openModal } = useAuthModal();

  // Entrance animation
  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.from(".comp-page-title", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(".comp-sidebar", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.from(".comp-card", {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
        delay: 0.3,
      });
    },
    { scope: containerRef },
  );

  // Filter + search
  const filtered = animations.filter((a) => {
    const matchesFilter = !activeFilter || a.bgColor === activeFilter;
    const matchesSearch =
      !searchQuery ||
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleGetCode = (anim: AnimationItem) => {
    const url = `/code/${anim.componentName}`;
    session ? router.push(url) : openModal(url, true);
  };

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
    // Animate cards on filter change
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".comp-card");
      gsap.fromTo(
        cards,
        { y: 20, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.03,
          ease: "power2.out",
          clearProps: "all",
        },
      );
    }
  };

  const hoverMap: Record<string, string> = {
    "bg-wtf-orange": "hover:border-[#f1903a]",
    "bg-wtf-green": "hover:border-[#0B9B65]",
    "bg-wtf-red": "hover:border-[#c23b3a]",
    "bg-wtf-blue": "hover:border-[#4d8ef7]",
    "bg-wtf-yellow": "hover:border-[#f1b333]",
    "bg-wtf-purple": "hover:border-[#8b5cf6]",
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#f0eadf] text-[#2a2a2a] selection:bg-wtf-yellow selection:text-black"
    >
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-24 pb-16">
        {/* Page Header */}
        <div className="comp-page-title flex flex-col gap-2 border-b-3 border-[#2a2a2a] pb-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-2xl md:text-4xl font-serif font-black uppercase tracking-tight text-[#2a2a2a]">
                All Components
              </h1>
              <p className="text-xs font-mono font-bold text-wtf-orange uppercase tracking-wider mt-1">
                {filtered.length} of {animations.length} Components
              </p>
            </div>
            
            {/* Inline search bar and back link */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search components..."
                className="w-full sm:w-64 bg-white border-2 border-[#2a2a2a] rounded-lg px-3.5 py-1.5 font-mono text-xs font-bold text-[#2a2a2a] placeholder:text-zinc-450 outline-none focus:border-wtf-orange transition-colors duration-150 shadow-[2px_2px_0px_#2a2a2a]"
              />
              <Link
                href="/"
                className="brutalist-btn bg-white hover:bg-wtf-orange hover:text-white text-[#2a2a2a] font-mono font-bold text-[10px] md:text-xs py-2 px-3.5 rounded-lg uppercase tracking-wider cursor-pointer transition-colors duration-150 whitespace-nowrap"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* ── Component Grid ── */}
          <div className="w-full">
            {filtered.length === 0 ? (
              <div className="brutalist-card p-12 bg-white flex flex-col items-center gap-3">
                <span className="text-4xl">🔍</span>
                <p className="font-mono font-bold text-sm text-zinc-500 uppercase tracking-wider">
                  No components found
                </p>
                <button
                  onClick={() => {
                    setActiveFilter(null);
                    setSearchQuery("");
                  }}
                  className="brutalist-btn bg-wtf-orange text-white font-mono font-bold text-xs py-2 px-5 rounded-lg uppercase tracking-wider cursor-pointer transition-colors duration-150 mt-2"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {filtered.map((anim) => (
                  <div
                    key={anim.id}
                    className={`comp-card brutalist-card p-5 bg-white flex flex-col justify-between gap-4 border-2 border-[#2a2a2a] transition-all duration-150 ${hoverMap[anim.bgColor] || ""}`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-zinc-400">
                          [{anim.id}]
                        </span>
                        <span
                          className={`inline-flex items-center border-2 border-[#2a2a2a] px-2.5 py-0.5 rounded-full text-[8px] font-mono font-bold uppercase ${anim.bgColor} ${anim.textColor} shadow-[1px_1px_0px_#2a2a2a]`}
                        >
                          {anim.bgColor.replace("bg-wtf-", "")}
                        </span>
                      </div>
                      <h2 className="text-lg font-sans font-black uppercase tracking-tight text-[#2a2a2a]">
                        {anim.name}
                      </h2>
                      <p className="text-xs font-sans font-medium text-zinc-650 leading-relaxed line-clamp-2">
                        {anim.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={anim.route} className="flex-1">
                        <button className="w-full brutalist-btn bg-white hover:bg-[#2a2a2a] hover:text-white border-[#2a2a2a] text-[#2a2a2a] font-mono font-bold text-[10px] py-2.5 px-3 rounded-lg uppercase tracking-wider cursor-pointer transition-colors duration-150">
                          View →
                        </button>
                      </Link>
                      <button
                        onClick={() => handleGetCode(anim)}
                        className="flex-1 brutalist-btn bg-white hover:bg-[#2a2a2a] hover:text-white border-[#2a2a2a] text-[#2a2a2a] font-mono font-bold text-[10px] py-2.5 px-3 rounded-lg uppercase tracking-wider cursor-pointer transition-colors duration-150"
                      >
                        Get Code
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
