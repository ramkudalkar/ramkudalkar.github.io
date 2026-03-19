"use client";

import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Note: the 500vh container houses both the Canvas (sticky inside) and the Overlay
  // The Overlay has absolute positioning mapping opacity and transforms to scrollYProgress
  
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-blue-500/30">
      <div ref={containerRef} className="relative h-[500vh]">
        <ScrollyCanvas containerRef={containerRef} />
        <Overlay containerRef={containerRef} />
      </div>
      
      <Projects />
      
      {/* Minimal Footer */}
      <footer className="border-t border-white/5 py-16 text-center text-neutral-500 bg-[#121212] relative z-20">
        <p className="text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} Ramchandra Kudalkar. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-neutral-600">Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
