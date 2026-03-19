"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 120;
const currentFrame = (index: number) => 
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.webp`;

export default function ScrollyCanvas({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || imagesLoaded < FRAME_COUNT * 0.2) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = () => {
      const currentIdx = Math.round(frameIndex.get());
      const img = images[currentIdx];

      if (img && img.complete) {
        // Handle object-fit: cover equivalent logic on canvas
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img, 
          0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const unsubscribe = frameIndex.on("change", render);

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [images, frameIndex, imagesLoaded]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
      <div 
        className="absolute inset-0 bg-[#121212] transition-opacity duration-1000 flex items-center justify-center z-10" 
        style={{ opacity: imagesLoaded > 25 ? 0 : 1 }}
      ></div>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212] pointer-events-none" />
    </div>
  );
}
