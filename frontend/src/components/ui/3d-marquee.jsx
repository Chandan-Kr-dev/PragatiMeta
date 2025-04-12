"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ThreeDMarqueeLiteBackground = ({ 
  images, 
  className,
  opacity = 0.8,
  speed = 6,
  intensity = 1.2,
  children
}) => {
  const columns = 3;
  const chunkSize = Math.ceil(images.length / columns);
  const imageChunks = Array.from({ length: columns }, (_, i) =>
    images.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <div className={cn(
      "fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gray-900",
      className
    )}>
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 mix-blend-overlay" />

      {/* 3D animation */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: "1000px",
          transform: "rotateX(40deg) rotateZ(-20deg)",
          transformOrigin: "center",
        }}
      >
        <div className="grid grid-cols-3 gap-6 w-full max-w-[1200px] scale-100 ">
          {imageChunks.map((column, index) => (
            <motion.div
              key={`column-${index}`}
              className="flex flex-col gap-8"
              animate={{ 
                y: index % 2 === 0 ? [0, -120, 0] : [0, 120, 0] 
              }}
              transition={{ 
                duration: speed + index,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {column.map((src, i) => (
                <motion.img
                  key={`${index}-${i}`}
                  src={src}
                  alt=""
                  className="rounded-xl object-cover w-full h-[240px] shadow-lg"
                  style={{
                    opacity: opacity,
                    filter: `
                      blur(${0.5 * intensity}px) 
                      brightness(${1 * intensity}) 
                      saturate(${1.3 * intensity})
                    `,
                    boxShadow: `0 8px 32px rgba(99, 102, 241, ${0.3 * intensity})`
                  }}
                  loading="lazy"
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Render any children passed into the component */}
      {children}
    </div>
  );
};
