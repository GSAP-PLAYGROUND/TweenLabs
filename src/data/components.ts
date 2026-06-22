export interface AnimationItem {
  id: string;
  name: string;
  componentName: string;
  route: string;
  bgColor: string;
  textColor: string;
  description: string;
  tiltClass: string;
  type: ("text" | "scroll" | "card" | "interactive")[];
}

export const animations: AnimationItem[] = [
  {
    id: "flip-cards",
    name: "Flip Cards",
    componentName: "FlipCards",
    route: "/components/FlipCards",
    bgColor: "bg-wtf-green",
    textColor: "text-white",
    description:
      "Interactive fanning cards and scroll-pinned cards flipping in 3D perspective space.",
    tiltClass: "tilt-left",
    type: ["card", "scroll"],
  },
  {
    id: "carousel-3d",
    name: "3D Carousel",
    componentName: "Carousel3D",
    route: "/components/Carousel3D",
    bgColor: "bg-wtf-yellow",
    textColor: "text-black",
    description:
      "Interactive 3D mathematical wheel rotation with pointer drag inertia, keyboard navigation, and GSAP details panel expansion.",
    tiltClass: "tilt-left-lg",
    type: ["interactive", "card"],
  },
  {
    id: "skill-fit",
    name: "Skill Fit",
    componentName: "SkillFit",
    route: "/components/SkillFit",
    bgColor: "bg-wtf-green",
    textColor: "text-white",
    description:
      "Premium candidate profile showcase animation with vertical ScrollTrigger pinning and technology staggers.",
    tiltClass: "tilt-left",
    type: ["scroll"],
  },
  {
    id: "page-transition",
    name: "Page Transition",
    componentName: "PageTransition",
    route: "/components/PageTransition",
    bgColor: "bg-wtf-yellow",
    textColor: "text-black",
    description:
      "Premium stacked page-peel scroll animation where color-themed sections slide up and overlap with dynamic skewing.",
    tiltClass: "tilt-right",
    type: ["scroll"],
  },
  {
    id: "horizontal-cards",
    name: "Horizontal Cards",
    componentName: "HorizontalCards",
    route: "/components/HorizontalCards",
    bgColor: "bg-wtf-blue",
    textColor: "text-white",
    description:
      "Premium horizontal scroll layout where colorful Neo-Brutalist cards slide, float, enter from the bottom, and exit off the top of the viewport.",
    tiltClass: "tilt-left-lg",
    type: ["card", "scroll"],
  },
  {
    id: "circular-scatter",
    name: "Circular Scatter",
    componentName: "CircularScatter",
    route: "/components/CircularScatter",
    bgColor: "bg-wtf-orange",
    textColor: "text-white",
    description:
      "Circular loop scatter animation where cards stack one-by-one at screen center, then scatter to the outer edges with hero text centered.",
    tiltClass: "tilt-right",
    type: ["card", "scroll"],
  },
  {
    id: "fluid-cursor",
    name: "Fluid Cursor",
    componentName: "FluidCursor",
    route: "/components/FluidCursor",
    bgColor: "bg-wtf-purple",
    textColor: "text-white",
    description:
      "Custom elastic lagging cursor reticle that snaps, morphs, and hugs button boundaries.",
    tiltClass: "tilt-left",
    type: ["interactive"],
  },
  {
    id: "blueprint",
    name: "Blueprint",
    componentName: "Blueprint",
    route: "/components/Blueprint",
    bgColor: "bg-wtf-purple",
    textColor: "text-white",
    description:
      "Premium page-load exploding cards and text scramble animation matching the layout of blueprintapps.io.",
    tiltClass: "tilt-left",
    type: ["text", "card"],
  },
  {
    id: "scroll-cards",
    name: "Scroll Cards",
    componentName: "ScrollCards",
    route: "/components/ScrollCards",
    bgColor: "bg-wtf-orange",
    textColor: "text-white",
    description:
      "Vertical scroll-pinned stacked cards container utilizing y-transform parallax staggers.",
    tiltClass: "tilt-right",
    type: ["scroll", "card"],
  },
  {
    id: "scroll-tags",
    name: "Scroll Tags",
    componentName: "ScrollTags",
    route: "/components/ScrollTags",
    bgColor: "bg-wtf-green",
    textColor: "text-white",
    description:
      "Interactive scroll-triggered tags that fly into a grid board container from all offscreen directions.",
    tiltClass: "tilt-left",
    type: ["scroll"],
  },
  {
    id: "orbit-gallery",
    name: "Orbit Gallery",
    componentName: "OrbitGallery",
    route: "/components/OrbitGallery",
    bgColor: "bg-wtf-blue",
    textColor: "text-white",
    description:
      "Premium scroll-driven layout where orbiting abstract cards converge into a sleek horizontal timeline.",
    tiltClass: "tilt-right",
    type: ["card", "scroll"],
  },
  {
    id: "gravity-drop",
    name: "Gravity Drop",
    componentName: "GravityDrop",
    route: "/components/GravityDrop",
    bgColor: "bg-wtf-orange",
    textColor: "text-white",
    description:
      "Staggered letters falling down onto a shelf collider with realistic physics bounce.",
    tiltClass: "tilt-right",
    type: ["text", "interactive"],
  },
  {
    id: "string-line",
    name: "String Line",
    componentName: "StringLine",
    route: "/components/StringLine",
    bgColor: "bg-wtf-yellow",
    textColor: "text-black",
    description:
      "ScrollTriggered SVG network line drawing tracking node proximity scale offsets.",
    tiltClass: "tilt-right",
    type: ["interactive"],
  },
  {
    id: "border-reveal",
    name: "Border Reveal",
    componentName: "BorderReveal",
    route: "/components/BorderReveal",
    bgColor: "bg-wtf-red",
    textColor: "text-white",
    description:
      "Premium horizontal text scroll where letters fly in and out from top/bottom screen borders.",
    tiltClass: "tilt-right-lg",
    type: ["text", "scroll"],
  },
  {
    id: "kinetic-text",
    name: "Kinetic Text",
    componentName: "KineticText",
    route: "/components/KineticText",
    bgColor: "bg-wtf-purple",
    textColor: "text-white",
    description:
      "Interactive kinetic text sandbox showcasing liquid wave, character scramble, and magnetic motion.",
    tiltClass: "tilt-left",
    type: ["text", "interactive"],
  },
  {
    id: "magnetic-dock",
    name: "Magnetic Dock",
    componentName: "MagneticDock",
    route: "/components/MagneticDock",
    bgColor: "bg-wtf-orange",
    textColor: "text-white",
    description:
      "Premium floating menu bar where buttons pull dynamically toward the user's cursor.",
    tiltClass: "tilt-right",
    type: ["interactive"],
  },
  {
    id: "bento-grid",
    name: "Bento Grid",
    componentName: "BentoGrid",
    route: "/components/BentoGrid",
    bgColor: "bg-wtf-green",
    textColor: "text-white",
    description:
      "Neo-Brutalist bento box card grid with 3D perspective mouse tilt, spring physics recovery, and vector crosshairs.",
    tiltClass: "tilt-right-lg",
    type: ["card", "interactive"],
  },
  {
    id: "accordion",
    name: "Accordion",
    componentName: "Accordion",
    route: "/components/Accordion",
    bgColor: "bg-wtf-blue",
    textColor: "text-white",
    description:
      "Vertical accordion showcase where selection morphs page background color and staggers content.",
    tiltClass: "tilt-right",
    type: ["interactive"],
  },
  {
    id: "reveal-text",
    name: "Reveal Text",
    componentName: "RevealText",
    route: "/components/RevealText",
    bgColor: "bg-wtf-purple",
    textColor: "text-white",
    description:
      "Premium line-by-line text reveal using SplitText masks with staggered choreography.",
    tiltClass: "tilt-left",
    type: ["text"],
  },
  {
    id: "tabs-motion",
    name: "Tabs Motion",
    componentName: "TabsMotion",
    route: "/components/TabsMotion",
    bgColor: "bg-wtf-green",
    textColor: "text-white",
    description:
      "Animated tab navigation with sliding indicator pill and directional content crossfade transitions.",
    tiltClass: "tilt-left",
    type: ["interactive"],
  },
  {
    id: "parallax-hero",
    name: "Parallax Hero",
    componentName: "ParallaxHero",
    route: "/components/ParallaxHero",
    bgColor: "bg-wtf-orange",
    textColor: "text-white",
    description:
      "Multi-layer parallax hero with SplitText character scatter entrance and scroll-driven depth motion.",
    tiltClass: "tilt-left",
    type: ["scroll", "text"],
  },
  {
    id: "morphing-text",
    name: "Morphing Text",
    componentName: "MorphingText",
    route: "/components/MorphingText",
    bgColor: "bg-wtf-purple",
    textColor: "text-white",
    description:
      "Smooth auto-cycling text morphing animation with SVG threshold filter and color-coded word transitions.",
    tiltClass: "tilt-right",
    type: ["text"],
  },
];
