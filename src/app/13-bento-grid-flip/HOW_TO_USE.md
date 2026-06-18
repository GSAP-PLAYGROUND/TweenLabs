# How to Use: Bento Grid Tilt

This guide explains how to integrate the 3D Perspective Tilt bento items into your standalone React projects using GSAP.

### Core GSAP Animation Code
```javascript
const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  
  // Calculate relative coordinates inside the card
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Set CSS variables for pointer spotlight effect
  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);

  // Elegant 3D tilt values (-5 to +5 degrees)
  const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
  const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 5;

  gsap.to(card, {
    rotateX: rotateX,
    rotateY: rotateY,
    transformPerspective: 1000,
    ease: "power1.out",
    duration: 0.3,
    overwrite: "auto",
  });

  // Optional: Dynamic parallax shifts on nested assets/images
  const imgFrame = card.querySelector(".inner-img");
  if (imgFrame) {
    const moveX = ((x - rect.width / 2) / rect.width) * 10;
    const moveY = ((y - rect.height / 2) / rect.height) * 10;
    gsap.to(imgFrame, {
      x: moveX,
      y: moveY,
      scale: 1.05,
      duration: 0.4,
      ease: "power1.out",
      overwrite: "auto",
    });
  }
};

const handleMouseLeave = (e) => {
  const card = e.currentTarget;
  // Smooth elastic return back to flat default state
  gsap.to(card, {
    rotateX: 0,
    rotateY: 0,
    ease: "elastic.out(1.1, 0.4)",
    duration: 0.75,
    overwrite: "auto",
  });

  const imgFrame = card.querySelector(".inner-img");
  if (imgFrame) {
    gsap.to(imgFrame, {
      x: 0,
      y: 0,
      scale: 1.0,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  }
};
```

### Standalone Component Code
```tsx
"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface BentoTiltCardProps {
  children: React.ReactNode;
  accentHex?: string; // rgb value string: e.g. "229, 91, 60"
  className?: string;
}

export default function BentoTiltCard({
  children,
  accentHex = "229, 91, 60",
  className = "",
}: BentoTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: cardRef });

  const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 5;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power1.out",
      duration: 0.3,
      overwrite: "auto",
    });

    const img = card.querySelector(".inner-img");
    if (img) {
      const moveX = ((x - rect.width / 2) / rect.width) * 10;
      const moveY = ((y - rect.height / 2) / rect.height) * 10;
      gsap.to(img, {
        x: moveX,
        y: moveY,
        scale: 1.05,
        duration: 0.4,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
  });

  const handleMouseLeave = contextSafe(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: "elastic.out(1.1, 0.4)",
      duration: 0.75,
      overwrite: "auto",
    });

    const img = card.querySelector(".inner-img");
    if (img) {
      gsap.to(img, {
        x: 0,
        y: 0,
        scale: 1.0,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border-3 border-[#2a2a2a] bg-white p-6 shadow-[5px_5px_0px_#2a2a2a] hover:shadow-[10px_10px_0px_#2a2a2a] transition-shadow duration-200 cursor-pointer select-none ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      }}
    >
      {/* Interactive Spotlight Radial Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"
        style={{
          background: `radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(${accentHex}, 0.08), transparent 85%)`,
        }}
      />
      
      {/* Inner Slot Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
```

## Setup & Dependencies

1. Install target dependencies:
   ```bash
   pnpm add gsap @gsap/react
   ```
2. Render bento items by styling them inside a CSS grid layout, wrapping card interiors inside the interactive component. Keep any images you wish to parallax inside containers utilizing the `.inner-img` selector:
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     <BentoTiltCard accentHex="241, 179, 51" className="col-span-1 h-[280px]">
       <div>
         <h3 className="text-xl font-bold uppercase">Spotlight Block</h3>
         <p className="text-xs text-zinc-500">Movable spotlight gradient overlay tracks mouse pointer.</p>
       </div>
       <div className="relative w-full h-24 overflow-hidden rounded-xl">
         <img src="/demo.png" alt="Demo" className="inner-img object-cover w-full h-full" />
       </div>
     </BentoTiltCard>
   </div>
   ```
3. Set `transform-style: preserve-3d` on the parent node (configured automatically in the component) so nested elements correctly respond when tilting.
