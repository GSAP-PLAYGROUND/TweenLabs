export interface SeoCategory {
  slug: string;
  title: string;
  heading: string;
  headingAccent: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  components: string[];
  whySection: {
    title: string;
    points: { title: string; desc: string }[];
  };
  faq: { q: string; a: string }[];
}

/**
 * Each entry here generates a dedicated SEO landing page at
 * /best-gsap-components/[slug] targeting specific long-tail keywords.
 */
export const seoCategories: SeoCategory[] = [
  {
    slug: "text-animations",
    title: "Text Animations",
    heading: "Best GSAP Text Animations",
    headingAccent: "for React & Next.js",
    description:
      "Creative text animation components built with GSAP — kinetic typography, morphing text, character reveals, gravity drops, and border reveals. Copy-paste or install via CLI.",
    metaTitle:
      "Best GSAP Text Animations 2025 | React Typography Components | TweenLabs",
    metaDescription:
      "Discover the best GSAP text animation components for React and Next.js. Kinetic typography, morphing text, character reveals, and more — free and open-source.",
    keywords: [
      "GSAP text animation",
      "best GSAP text effects",
      "React text animation",
      "GSAP kinetic typography",
      "GSAP morphing text",
      "text reveal animation React",
      "GSAP character animation",
      "animated text React component",
    ],
    components: [
      "KineticText",
      "MorphingText",
      "RevealText",
      "BorderReveal",
      "GravityDrop",
    ],
    whySection: {
      title: "Why Use GSAP for Text Animations?",
      points: [
        {
          title: "Per-Character Control",
          desc: "GSAP SplitText lets you animate individual characters, words, and lines with precise stagger timing and easing.",
        },
        {
          title: "SVG Filters",
          desc: "Combine GSAP timelines with SVG threshold filters for gooey morphing effects impossible with CSS alone.",
        },
        {
          title: "Performance",
          desc: "Text animations run on GPU-accelerated transforms, ensuring 60fps even with hundreds of animated characters.",
        },
      ],
    },
    faq: [
      {
        q: "What is the best library for text animations in React?",
        a: "GSAP is the best library for complex text animations in React. It provides per-character control, timeline sequencing, and ScrollTrigger integration. TweenLabs offers 5 free text animation components including kinetic typography, morphing text, and character reveal effects.",
      },
      {
        q: "How to animate text character by character in React?",
        a: "Split your text into individual <span> elements (one per character), then use gsap.from() with a stagger property to animate them sequentially. The @gsap/react useGSAP hook handles cleanup automatically. See TweenLabs' RevealText and KineticText components for production-ready examples.",
      },
      {
        q: "Can I create morphing text effects with GSAP?",
        a: "Yes. Use two overlapping text layers with GSAP-controlled opacity and blur, combined with an SVG feColorMatrix threshold filter for the gooey dissolve effect. TweenLabs' MorphingText component does this with per-word color interpolation.",
      },
    ],
  },
  {
    slug: "scroll-animations",
    title: "Scroll Animations",
    heading: "Best GSAP Scroll Animations",
    headingAccent: "& ScrollTrigger Components",
    description:
      "Production-ready scroll-driven animation components using GSAP ScrollTrigger — pinned sections, parallax cards, horizontal scrolling, and scroll-triggered reveals.",
    metaTitle:
      "Best GSAP Scroll Animations 2025 | ScrollTrigger Components | TweenLabs",
    metaDescription:
      "The best GSAP ScrollTrigger components for React & Next.js. Scroll-pinned cards, parallax effects, horizontal scrolling, and more. Free, copy-paste components.",
    keywords: [
      "GSAP scroll animation",
      "GSAP ScrollTrigger examples",
      "best scroll animations React",
      "scroll triggered animation",
      "GSAP parallax scroll",
      "horizontal scroll GSAP",
      "scroll pinning GSAP",
      "GSAP scroll React component",
    ],
    components: [
      "ScrollCards",
      "ScrollTags",
      "HorizontalCards",
      "PageTransition",
      "OrbitGallery",
      "ParallaxHero",
    ],
    whySection: {
      title: "Why GSAP ScrollTrigger?",
      points: [
        {
          title: "Scroll Pinning",
          desc: "Pin elements in place while the user scrolls through content — perfect for storytelling, product showcases, and immersive experiences.",
        },
        {
          title: "Scrub Control",
          desc: "Link animation progress directly to scroll position. Users control the timeline by scrolling — frame-perfect, buttery smooth.",
        },
        {
          title: "Snap Points",
          desc: "Automatically snap to predefined positions when scrolling ends, creating a paginated feel without pagination.",
        },
      ],
    },
    faq: [
      {
        q: "What is the best scroll animation library for React?",
        a: "GSAP ScrollTrigger is the industry standard for scroll animations in React. It supports pinning, scrubbing, parallax, and snap scrolling with minimal setup. TweenLabs provides 6 free ScrollTrigger components ready to use.",
      },
      {
        q: "How to create scroll-pinned sections in Next.js?",
        a: 'Use GSAP ScrollTrigger with pin: true inside a useGSAP hook in a "use client" component. The animation pins the element in place while scroll progress drives the timeline. TweenLabs\' ScrollCards and PageTransition components demonstrate this pattern.',
      },
      {
        q: "Is GSAP ScrollTrigger free?",
        a: "Yes, GSAP ScrollTrigger is free for all websites. The core GSAP library and ScrollTrigger plugin are available under a no-charge license. Only certain premium plugins (MorphSVG, DrawSVG) require a paid Club GreenSock membership.",
      },
    ],
  },
  {
    slug: "page-transitions",
    title: "Page Transitions",
    heading: "Best GSAP Page Transitions",
    headingAccent: "for React & Next.js",
    description:
      "Smooth page transition animations using GSAP — stacked page peels, tab motion switching, and scroll-driven section reveals. Drop into any Next.js project.",
    metaTitle:
      "Best GSAP Page Transitions 2025 | React & Next.js Components | TweenLabs",
    metaDescription:
      "Beautiful GSAP page transition components for React and Next.js. Stacked page peels, animated tabs, and smooth route changes. Free and copy-paste ready.",
    keywords: [
      "GSAP page transition",
      "best page transitions React",
      "Next.js page transition animation",
      "GSAP route animation",
      "smooth page transition React",
      "page change animation GSAP",
      "animated page transitions",
    ],
    components: ["PageTransition", "TabsMotion", "Accordion"],
    whySection: {
      title: "Why Use GSAP for Page Transitions?",
      points: [
        {
          title: "Timeline Sequencing",
          desc: "GSAP timelines let you orchestrate exit → enter animations with precise timing, labels, and easing curves.",
        },
        {
          title: "Shared Layout Motion",
          desc: "Animate shared elements between pages using GSAP Flip plugin for seamless visual continuity.",
        },
        {
          title: "Performance",
          desc: "GSAP page transitions don't cause layout recalculations. All transforms run on the compositor thread for zero jank.",
        },
      ],
    },
    faq: [
      {
        q: "How to add page transitions in Next.js App Router?",
        a: "Wrap your page content in a client component that uses useGSAP to animate on mount (enter) and provides an exit animation before navigation. TweenLabs' PageTransition component demonstrates scroll-driven stacked page peels.",
      },
      {
        q: "What's the best page transition library for React?",
        a: "GSAP provides the most control for complex page transitions. For simple fade/slide transitions, Framer Motion's AnimatePresence is easier. TweenLabs' components use GSAP for production-grade transitions with scroll-trigger support.",
      },
    ],
  },
  {
    slug: "card-animations",
    title: "Card Animations",
    heading: "Best GSAP Card Animations",
    headingAccent: "& Interactive Cards",
    description:
      "Interactive card animation components — 3D flip cards, scroll-pinned card decks, horizontal card carousels, and bento grids with tilt effects. All built with GSAP.",
    metaTitle:
      "Best GSAP Card Animations 2025 | 3D Flip, Scroll Cards | TweenLabs",
    metaDescription:
      "The best GSAP card animation components for React. 3D flip cards, scroll-pinned decks, horizontal carousels, and bento grids. Free, production-ready, copy-paste.",
    keywords: [
      "GSAP card animation",
      "3D card flip GSAP",
      "scroll card animation React",
      "GSAP card deck",
      "interactive cards React",
      "card hover animation GSAP",
      "GSAP bento grid",
      "stacked cards animation",
    ],
    components: [
      "FlipCards",
      "ScrollCards",
      "HorizontalCards",
      "Carousel3D",
      "BentoGrid",
    ],
    whySection: {
      title: "Why GSAP for Card Animations?",
      points: [
        {
          title: "3D Perspective",
          desc: "GSAP handles CSS perspective and 3D transforms natively — perfect for card flips, tilts, and rotations without CSS hacks.",
        },
        {
          title: "Drag & Inertia",
          desc: "GSAP's Draggable plugin adds smooth drag interactions with momentum-based inertia for carousels and card decks.",
        },
        {
          title: "Stagger Patterns",
          desc: "Animate cards in sequence with from-center, random, or grid-based stagger patterns for visually rich reveals.",
        },
      ],
    },
    faq: [
      {
        q: "How to create 3D card flip animation in React?",
        a: "Use CSS perspective on the parent container and GSAP rotateY to flip between front and back faces. TweenLabs' FlipCards component includes both fanning and scroll-triggered 3D flips.",
      },
      {
        q: "What's the best card animation library for React?",
        a: "GSAP is the best choice for complex card animations (3D flips, scroll-pinned decks, drag carousels). For simple hover effects, CSS transitions may suffice. TweenLabs offers 5 free GSAP card animation components.",
      },
    ],
  },
  {
    slug: "hero-sections",
    title: "Hero Sections",
    heading: "Best GSAP Hero Sections",
    headingAccent: "& Landing Page Animations",
    description:
      "Stunning hero section animations for landing pages — parallax scrolling, gravity text drops, morphing headlines, and immersive full-screen experiences.",
    metaTitle:
      "Best GSAP Hero Sections 2025 | Landing Page Animations | TweenLabs",
    metaDescription:
      "Build stunning hero sections with GSAP. Parallax scrolling, gravity text drops, morphing headlines — free React components for landing pages.",
    keywords: [
      "GSAP hero section",
      "best landing page animations",
      "GSAP landing page",
      "hero animation React",
      "parallax hero section",
      "animated hero section",
      "GSAP landing page template",
      "best website hero animations",
    ],
    components: [
      "ParallaxHero",
      "GravityDrop",
      "MorphingText",
      "BorderReveal",
      "KineticText",
    ],
    whySection: {
      title: "Why GSAP for Hero Sections?",
      points: [
        {
          title: "First Impressions",
          desc: "Hero sections are the first thing users see. GSAP's smooth, orchestrated entrance animations create premium first impressions.",
        },
        {
          title: "Parallax Depth",
          desc: "Create layered depth with multiple parallax speeds. GSAP ScrollTrigger makes multi-layer parallax effortless.",
        },
        {
          title: "Brand Impact",
          desc: "Kinetic text, gravity drops, and morphing headlines turn static headings into memorable brand statements.",
        },
      ],
    },
    faq: [
      {
        q: "How to create an animated hero section in React?",
        a: "Use GSAP's useGSAP hook to animate hero elements on mount — stagger text reveals, parallax background layers, and floating UI elements. TweenLabs offers 5 hero section components including ParallaxHero and GravityDrop.",
      },
      {
        q: "What's the best animation for a landing page?",
        a: "Subtle, purposeful animations work best: parallax backgrounds, text reveals on scroll, and micro-interactions on CTAs. Avoid overwhelming users — animate 2-3 key elements. TweenLabs' ParallaxHero and MorphingText are ideal for hero sections.",
      },
    ],
  },
  {
    slug: "cursor-effects",
    title: "Cursor Effects",
    heading: "Best GSAP Cursor Effects",
    headingAccent: "& Mouse Interactions",
    description:
      "Interactive cursor and mouse-driven animation components — fluid elastic cursors, magnetic dock buttons, and pointer-reactive bento grids.",
    metaTitle:
      "Best GSAP Cursor Effects 2025 | Custom Cursor & Mouse Animations | TweenLabs",
    metaDescription:
      "Create custom cursor effects and mouse interactions with GSAP. Fluid elastic cursors, magnetic buttons, pointer-reactive grids. Free React components.",
    keywords: [
      "GSAP custom cursor",
      "custom cursor React",
      "GSAP mouse follow",
      "magnetic button GSAP",
      "cursor animation React",
      "fluid cursor effect",
      "GSAP hover effect",
      "mouse interaction GSAP",
    ],
    components: ["FluidCursor", "MagneticDock", "BentoGrid"],
    whySection: {
      title: "Why GSAP for Cursor Effects?",
      points: [
        {
          title: "Elastic Smoothing",
          desc: "GSAP's quickTo and spring easings create buttery-smooth cursor following with elastic lag — impossible with CSS alone.",
        },
        {
          title: "Magnetic Pull",
          desc: "Calculate distance between cursor and element to create magnetic attraction effects. GSAP handles the smooth interpolation.",
        },
        {
          title: "Context Morphing",
          desc: "Change cursor shape and size based on what the user hovers over — buttons, images, text — with smooth GSAP transitions.",
        },
      ],
    },
    faq: [
      {
        q: "How to create a custom cursor in React?",
        a: "Track mouse position with mousemove, then use gsap.quickTo() to smoothly animate a custom cursor element to the pointer position with elastic easing. TweenLabs' FluidCursor component provides a production-ready implementation.",
      },
      {
        q: "How to make magnetic buttons with GSAP?",
        a: "Calculate the distance between the cursor and button center, then use gsap.to() to offset the button position proportionally. TweenLabs' MagneticDock component demonstrates a full magnetic dock bar with snap-back physics.",
      },
    ],
  },
  {
    slug: "3d-animations",
    title: "3D Animations",
    heading: "Best GSAP 3D Animations",
    headingAccent: "& CSS 3D Transforms",
    description:
      "3D animation components using GSAP and CSS 3D transforms — interactive carousels, flip cards, perspective tilt grids, and orbit galleries.",
    metaTitle:
      "Best GSAP 3D Animations 2025 | 3D Carousel, Flip Cards | TweenLabs",
    metaDescription:
      "Build stunning 3D animations with GSAP. Interactive carousels, flip cards, perspective tilt grids, and orbit galleries. Free React & Next.js components.",
    keywords: [
      "GSAP 3D animation",
      "3D carousel React",
      "GSAP perspective transform",
      "3D flip card GSAP",
      "GSAP rotateY",
      "CSS 3D transforms GSAP",
      "3D web animation",
      "interactive 3D React",
    ],
    components: [
      "Carousel3D",
      "FlipCards",
      "BentoGrid",
      "OrbitGallery",
      "CircularScatter",
    ],
    whySection: {
      title: "Why GSAP for 3D Animations?",
      points: [
        {
          title: "True 3D Control",
          desc: "GSAP animates rotateX, rotateY, rotateZ, perspective, and transformOrigin with frame-perfect precision.",
        },
        {
          title: "Drag in 3D Space",
          desc: "Combine Draggable with 3D transforms for interactive carousels where users physically rotate elements in 3D space.",
        },
        {
          title: "GPU Acceleration",
          desc: "3D transforms are inherently GPU-accelerated. GSAP ensures animations stay on the compositor thread for zero jank.",
        },
      ],
    },
    faq: [
      {
        q: "How to create a 3D carousel in React?",
        a: "Position items in a circle using rotateY and translateZ transforms on a parent with CSS perspective. Use GSAP to animate rotation on drag or button click. TweenLabs' Carousel3D component includes drag inertia and keyboard controls.",
      },
      {
        q: "Can GSAP do 3D animations?",
        a: "Yes. GSAP natively supports all CSS 3D transform properties including rotateX/Y/Z, translateZ, perspective, and transformOrigin. Combined with its timeline system, you can create complex 3D animation sequences with ease.",
      },
    ],
  },
  {
    slug: "svg-animations",
    title: "SVG Animations",
    heading: "Best GSAP SVG Animations",
    headingAccent: "& Line Drawing Effects",
    description:
      "SVG animation components using GSAP — network line drawing, blueprint scatter effects, and animated SVG patterns with ScrollTrigger integration.",
    metaTitle:
      "Best GSAP SVG Animations 2025 | Line Drawing & Morphing | TweenLabs",
    metaDescription:
      "Create stunning SVG animations with GSAP. Line drawing effects, blueprint scatters, and animated networks. Free React & Next.js components.",
    keywords: [
      "GSAP SVG animation",
      "SVG line drawing GSAP",
      "GSAP drawSVG",
      "SVG animation React",
      "animated SVG React component",
      "GSAP motionPath",
      "SVG morphing GSAP",
      "network animation SVG",
    ],
    components: ["StringLine", "Blueprint"],
    whySection: {
      title: "Why GSAP for SVG Animations?",
      points: [
        {
          title: "Stroke Animation",
          desc: "GSAP can animate strokeDashoffset and strokeDasharray to create line-drawing effects on any SVG path.",
        },
        {
          title: "Path Morphing",
          desc: "MorphSVG plugin interpolates between any two SVG shapes, even with different numbers of points.",
        },
        {
          title: "Motion Paths",
          desc: "Animate elements along any SVG path with MotionPathPlugin — perfect for flowing, organic animations.",
        },
      ],
    },
    faq: [
      {
        q: "How to animate SVG lines in React?",
        a: "Set strokeDasharray and strokeDashoffset to the path's total length, then use GSAP to animate strokeDashoffset to 0. This creates a line-drawing effect. TweenLabs' StringLine component demonstrates scroll-triggered SVG network drawing.",
      },
      {
        q: "What's the best library for SVG animations?",
        a: "GSAP is the most powerful library for SVG animations. It supports stroke drawing, path morphing, motion paths, and attribute interpolation. For simple CSS-based SVG transitions, consider CSS animations or Framer Motion.",
      },
    ],
  },
  {
    slug: "layout-animations",
    title: "Layout Animations",
    heading: "Best GSAP Layout Animations",
    headingAccent: "& Grid Components",
    description:
      "Animated layout components — bento grids, accordions, tab switchers, scatter layouts, and blueprint schema animations. All with GSAP-powered motion.",
    metaTitle:
      "Best GSAP Layout Animations 2025 | Bento Grid, Accordion | TweenLabs",
    metaDescription:
      "Animated layout components with GSAP. Bento grids, accordions, tabs, and scatter layouts for React & Next.js. Free, production-ready, self-contained.",
    keywords: [
      "GSAP layout animation",
      "animated bento grid",
      "GSAP accordion animation",
      "animated tabs React",
      "grid animation GSAP",
      "layout transition GSAP",
      "animated grid React",
      "GSAP Flip layout",
    ],
    components: [
      "BentoGrid",
      "Accordion",
      "TabsMotion",
      "Blueprint",
      "CircularScatter",
    ],
    whySection: {
      title: "Why GSAP for Layout Animations?",
      points: [
        {
          title: "FLIP Animations",
          desc: "GSAP Flip records element positions before and after a layout change, then animates between them — perfect for grid reflows.",
        },
        {
          title: "Staggered Reveals",
          desc: "Animate grid items with stagger patterns — from-center, random, or linear — for visually rich layout entrances.",
        },
        {
          title: "Background Morphing",
          desc: "Animate page-level properties (background color, gradients) alongside layout changes for cohesive transitions.",
        },
      ],
    },
    faq: [
      {
        q: "How to animate a bento grid in React?",
        a: "Use GSAP with perspective transforms and mousemove listeners to create interactive tilt effects. TweenLabs' BentoGrid component includes per-cell perspective tilt, spring recovery, and crosshair tracking.",
      },
      {
        q: "How to create an animated accordion in React?",
        a: "Use GSAP to animate height between 0 and auto (using gsap.to with height: 'auto'). Stagger child content reveals for a polished effect. TweenLabs' Accordion component also morphs the page background color per section.",
      },
    ],
  },
  {
    slug: "hover-effects",
    title: "Hover Effects",
    heading: "Best GSAP Hover Effects",
    headingAccent: "& Interactive Components",
    description:
      "Interactive hover animation components — magnetic buttons, perspective tilt cards, fluid cursor morphing, and dock bar effects. All mouse-driven with GSAP.",
    metaTitle:
      "Best GSAP Hover Effects 2025 | Magnetic, Tilt, Cursor | TweenLabs",
    metaDescription:
      "Create stunning hover effects with GSAP. Magnetic buttons, perspective tilt cards, fluid cursors, and dock bars. Free React & Next.js components.",
    keywords: [
      "GSAP hover effect",
      "hover animation React",
      "magnetic hover GSAP",
      "tilt hover effect",
      "GSAP mouse hover",
      "interactive hover React",
      "cursor hover animation",
      "button hover GSAP",
    ],
    components: ["MagneticDock", "BentoGrid", "FluidCursor", "FlipCards"],
    whySection: {
      title: "Why GSAP for Hover Effects?",
      points: [
        {
          title: "Smooth Interpolation",
          desc: "GSAP interpolates hover states with custom easing — elastic, bounce, power4 — far beyond CSS transition timing functions.",
        },
        {
          title: "Physics-Based",
          desc: "Spring-based hover recoveries feel natural and tactile. GSAP's inertia plugin adds momentum to interactions.",
        },
        {
          title: "Multi-Property",
          desc: "Animate scale, rotation, color, shadow, and position simultaneously on hover with a single GSAP tween.",
        },
      ],
    },
    faq: [
      {
        q: "How to create magnetic hover effects in React?",
        a: "Track mouse position relative to the element center, then use gsap.to() to offset the element proportionally. On mouse leave, animate back to the original position. TweenLabs' MagneticDock component demonstrates this with a full dock bar.",
      },
      {
        q: "How to add tilt hover effect to cards?",
        a: "Calculate mouse position relative to card center, then apply rotateX and rotateY transforms proportionally using GSAP. Add perspective to the parent. TweenLabs' BentoGrid includes per-cell tilt with spring physics recovery.",
      },
    ],
  },
];
