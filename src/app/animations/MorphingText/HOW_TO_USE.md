# How to Use: Morphing Text

This guide explains how to integrate the **Morphing Text** component — a smooth auto-cycling text animation that dissolves between words using per-frame blur/opacity interpolation with an SVG threshold filter for a gooey morph effect. Each word transitions to its own unique accent color via real-time color lerping.

### Core GSAP Animation Code
```javascript
// ─── Color interpolation helper ───────────────────────────
function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerpColor(a, b, t) {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  return `rgb(${Math.round(r1 + (r2 - r1) * t)},${Math.round(g1 + (g2 - g1) * t)},${Math.round(b1 + (b2 - b1) * t)})`;
}

// ─── SVG filter for gooey threshold morph ─────────────────
// Apply filter id="text-morph" to the container wrapping both text layers
//
// <filter id="text-morph">
//   <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
//   <feColorMatrix in="blur" mode="matrix"
//     values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="snap" />
//   <feComposite in="SourceGraphic" in2="snap" operator="atop" />
// </filter>

// ─── Per-frame morph via requestAnimationFrame ────────────
const texts = ["Creative", "Morphing", "Dynamic", "Seamless", "Animated"];
const colors = ["#e55b3c", "#6758a5", "#0c9367", "#3b82f6", "#c53b3a"];
let currentIndex = 0;
let morphing = false;

function startMorph(text1El, text2El) {
  if (morphing) return;
  morphing = true;

  const fromIdx = currentIndex;
  const toIdx = (fromIdx + 1) % texts.length;
  const fromColor = colors[fromIdx];
  const toColor = colors[toIdx];

  // Set text content
  text1El.textContent = texts[fromIdx];
  text2El.textContent = texts[toIdx];

  let fraction = 0;

  function tick() {
    fraction += 0.01;
    if (fraction > 1) fraction = 1;

    // Ease in-out quad
    const t = fraction < 0.5
      ? 2 * fraction * fraction
      : 1 - Math.pow(-2 * fraction + 2, 2) / 2;

    // Single interpolated color — never two colors visible
    const blendedColor = lerpColor(fromColor, toColor, t);

    text1El.style.color = blendedColor;
    text2El.style.color = blendedColor;

    // Text 1 dissolves out
    text1El.style.filter = `blur(${t * 8}px)`;
    text1El.style.opacity = `${Math.pow(1 - t, 0.4)}`;

    // Text 2 dissolves in
    text2El.style.filter = `blur(${(1 - t) * 8}px)`;
    text2El.style.opacity = `${Math.pow(t, 0.4)}`;

    if (fraction < 1) {
      requestAnimationFrame(tick);
    } else {
      morphing = false;
      currentIndex = toIdx;

      // Reset layers for next cycle
      text1El.textContent = texts[toIdx];
      text1El.style.filter = "blur(0px)";
      text1El.style.opacity = "1";
      text1El.style.color = toColor;
      text2El.style.filter = "blur(8px)";
      text2El.style.opacity = "0";
    }
  }

  requestAnimationFrame(tick);
}

// Auto-cycle every 3.2 seconds
setInterval(() => startMorph(text1Element, text2Element), 3200);
```

### Standalone Component Code
```tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

// ─── HELPERS ──────────────────────────────────────────────
function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerpColor(a: string, b: string, t: number) {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const bl = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r},${g},${bl})`;
}

// ─── TYPES ────────────────────────────────────────────────
interface MorphingTextProps {
  /** Array of words/phrases to cycle through */
  texts: string[];
  /** Accent color for each word (hex). Cycles if fewer than texts. */
  colors?: string[];
  /** Time in ms between transitions (default: 3200) */
  interval?: number;
  /** Morph speed — lower = smoother & slower (default: 0.01) */
  morphSpeed?: number;
  /** Additional CSS class for the wrapper */
  className?: string;
}

export default function MorphingText({
  texts,
  colors = ["#e55b3c", "#6758a5", "#0c9367", "#3b82f6", "#f1b333", "#c53b3a"],
  interval = 3200,
  morphSpeed = 0.01,
  className = "",
}: MorphingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const morphingRef = useRef(false);
  const idxRef = useRef(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const nextIdx = (currentIdx + 1) % texts.length;

  const getColor = (idx: number) => colors[idx % colors.length];

  const startMorph = useCallback(() => {
    if (morphingRef.current) return;
    morphingRef.current = true;

    const fromIdx = idxRef.current;
    const toIdx = (fromIdx + 1) % texts.length;
    const fromColor = getColor(fromIdx);
    const toColor = getColor(toIdx);

    let fraction = 0;

    const tick = () => {
      fraction += morphSpeed;
      if (fraction > 1) fraction = 1;

      const t =
        fraction < 0.5
          ? 2 * fraction * fraction
          : 1 - Math.pow(-2 * fraction + 2, 2) / 2;

      const blendedColor = lerpColor(fromColor, toColor, t);

      if (text1Ref.current && text2Ref.current) {
        text1Ref.current.style.color = blendedColor;
        text2Ref.current.style.color = blendedColor;

        text1Ref.current.style.filter = `blur(${t * 8}px)`;
        text1Ref.current.style.opacity = `${Math.pow(1 - t, 0.4)}`;

        text2Ref.current.style.filter = `blur(${(1 - t) * 8}px)`;
        text2Ref.current.style.opacity = `${Math.pow(t, 0.4)}`;
      }

      if (fraction < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        morphingRef.current = false;
        idxRef.current = toIdx;
        setCurrentIdx(toIdx);

        requestAnimationFrame(() => {
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.style.filter = "blur(0px)";
            text1Ref.current.style.opacity = "1";
            text1Ref.current.style.color = toColor;
            text2Ref.current.style.filter = "blur(8px)";
            text2Ref.current.style.opacity = "0";
          }
        });
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texts.length, morphSpeed]);

  useEffect(() => {
    const timer = setInterval(startMorph, interval);
    return () => {
      clearInterval(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [startMorph, interval]);

  // Entrance animation
  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scale: 0.92,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.15,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* SVG Threshold Filter */}
      <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="text-morph">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
              result="snap"
            />
            <feComposite in="SourceGraphic" in2="snap" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        style={{ filter: "url(#text-morph)" }}
        className="relative flex items-center justify-center overflow-hidden"
      >
        <div className="relative h-[1.3em] flex items-center justify-center w-full">
          <span
            ref={text1Ref}
            className="absolute font-serif font-black uppercase tracking-tight will-change-transform select-none leading-none"
            style={{ color: getColor(currentIdx) }}
            aria-live="polite"
          >
            {texts[currentIdx]}
          </span>
          <span
            ref={text2Ref}
            className="absolute font-serif font-black uppercase tracking-tight will-change-transform select-none leading-none"
            style={{
              color: getColor(currentIdx),
              opacity: 0,
              filter: "blur(8px)",
            }}
            aria-hidden="true"
          >
            {texts[nextIdx]}
          </span>
        </div>
      </div>
    </div>
  );
}
```

## Setup & Integration Guide

### 💻 Option A: Install via CLI (Recommended)
You can install this component directly into your project via the TweenLabs CLI:
```bash
npx tweenlabs@latest add MorphingText
```

---

### 🛠️ Option B: Manual Installation

### ⚡ Step 1: Install Dependencies
Open your project terminal and install the required GreenSock libraries:
```bash
npm install gsap @gsap/react
```

### 📁 Step 2: Save the Component File
1. Create a new component file inside your React/Next.js folder structure, for example:
   `your-project/src/components/MorphingText.tsx`
2. Copy the **Standalone Component Code** shown in the code tabs above.
3. Paste it directly into the new file.

### 🚀 Step 3: Import and Render
Import the component and render it inside any page layout:
```tsx
import MorphingText from "@/components/MorphingText.tsx";

const words = ["Creative", "Morphing", "Dynamic", "Seamless", "Animated"];
const wordColors = ["#e55b3c", "#6758a5", "#0c9367", "#3b82f6", "#c53b3a"];

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f0eadf] p-8">
      <MorphingText
        texts={words}
        colors={wordColors}
        className="text-5xl md:text-8xl"
      />
    </main>
  );
}
```

---

## 🛠️ Customization & Component Properties (Props)

> [!NOTE]
> This component is fully customizable and ready to use.

- `texts` (string[]): **Required**. Array of words or phrases to cycle through. Minimum 2 items.
- `colors` (string[]): Optional. Hex color per word. Cycles if fewer colors than texts. Defaults to the TweenLabs palette.
- `interval` (number): Optional. Milliseconds between morph transitions. Default: `3200`.
- `morphSpeed` (number): Optional. Per-frame increment (lower = smoother & slower). Default: `0.01`.
- `className` (string): Optional. CSS classes for the wrapper. Use for text sizing (e.g., `text-6xl md:text-9xl`).

### 🎨 Neo-Brutalist Theme Tokens
To match TweenLabs' signature premium editorial styling:
- **Canvas Backdrop**: `bg-[#f0eadf]` (warm sand color)
- **High-contrast Borders**: `border-3 border-[#2a2a2a]` (solid charcoal outline)
- **Drop Shadow Blocks**: `shadow-[6px_6px_0px_#2a2a2a]` (tactile offsets)
