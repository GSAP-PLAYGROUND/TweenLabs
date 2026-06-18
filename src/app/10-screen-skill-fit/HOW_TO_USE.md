# How to Use: Screen for Skill & Fit Showcase

This guide shows you how to copy and integrate the **Screen for Skill & Fit Showcase** (featuring ScrollTrigger page pinning, sequential candidate profile transitions, and micro-animated technology staggers) as a standalone component in Next.js or React.

## Core GSAP Animation & Pinning Code

The showcase utilizes a master GSAP timeline tied to vertical scroll pinning. As the user scrolls, the mockup frame remains fixed in the center while profiles transition:

```javascript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// 1. Initial State for Stacked Cards
// First card is active at scale 1. Other cards start pushed down, scaled down, and hidden.
gsap.set(".candidate-card:not(:first-child)", {
  y: 350,
  scale: 0.9,
  opacity: 0,
  pointerEvents: "none",
});

// 2. Master ScrollTrigger Timeline
const mainTl = gsap.timeline({
  scrollTrigger: {
    trigger: pinSectionRef.current,
    pin: true,
    scrub: 0.8,
    start: "top top",
    end: "+=3200", // Pinned for 3200px of scrolling
    invalidateOnRefresh: true,
  }
});

// --- Sequence Card Transitions ---

// Transition 1: Card 0 Out, Card 1 In (progress 15% to 35%)
mainTl.to(".candidate-card-0", {
  y: -300,
  scale: 0.92,
  opacity: 0,
  rotation: -3,
  duration: 1,
  ease: "power2.inOut",
}, 0.5)
.to(".candidate-card-1", {
  y: 0,
  scale: 1,
  opacity: 1,
  rotation: 0,
  duration: 1,
  ease: "power3.out",
}, 0.6)
.fromTo(".candidate-card-1 .tech-badge-item", 
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, stagger: 0.08, duration: 0.8, ease: "back.out(1.5)" },
  0.9
);

// Transition 2: Card 1 Out, Card 2 In (progress 45% to 65%)
mainTl.to(".candidate-card-1", {
  y: -300,
  scale: 0.92,
  opacity: 0,
  rotation: 3,
  duration: 1,
  ease: "power2.inOut",
}, 1.8)
.to(".candidate-card-2", {
  y: 0,
  scale: 1,
  opacity: 1,
  rotation: 0,
  duration: 1,
  ease: "power3.out",
}, 1.9)
.fromTo(".candidate-card-2 .tech-badge-item", 
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, stagger: 0.08, duration: 0.8, ease: "back.out(1.5)" },
  2.2
);

// Transition 3: Card 2 Out, Card 3 In (progress 75% to 95%)
mainTl.to(".candidate-card-2", {
  y: -300,
  scale: 0.92,
  opacity: 0,
  rotation: -3,
  duration: 1,
  ease: "power2.inOut",
}, 3.1)
.to(".candidate-card-3", {
  y: 0,
  scale: 1,
  opacity: 1,
  rotation: 0,
  duration: 1,
  ease: "power3.out",
}, 3.2)
.fromTo(".candidate-card-3 .tech-badge-item", 
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, stagger: 0.08, duration: 0.8, ease: "back.out(1.5)" },
  3.5
);
```

## Setup & Dependencies

1. Make sure you install GSAP and its React hook helper:
   ```bash
   pnpm add gsap @gsap/react
   ```
2. Layout specifications:
   - Section wrapper must have height `h-[400vh]` to accommodate ScrollTrigger length.
   - Pinned screen container should be `h-screen sticky top-0` containing the columns.
   - Dark theme branding colors:
     - Page background: `#0f0f11`
     - Card background: `#1b1b1d`
     - Logo green accent: `#0c9367`
3. Custom Technology icons are rendered dynamically using SVG icons wrapped in a `.tech-badge-item` frame container.
