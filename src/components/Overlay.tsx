"use client";

import { RefObject } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 25%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: Left aligned (approx 30% to 50%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

  // Section 3: Right aligned (approx 60% to 80%)
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);

  return (
    <div className="absolute inset-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <div className="text-center drop-shadow-2xl">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">
              Ramchandra<br />Kudalkar.
            </h1>
            <p className="text-xl md:text-3xl text-neutral-300 font-medium tracking-wide">
              AWS DevOps Engineer.
            </p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-[10%]"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl max-w-3xl">
            I architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">cloud infrastructure</span>.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-[10%] text-right"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl max-w-3xl">
            Mastering DevOps <br/> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">automation</span>.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
