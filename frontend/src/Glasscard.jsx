"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure you have this utility

export const GlassCard = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative rounded-xl p-8 overflow-hidden",
        "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl",
        "border border-white/20 shadow-2xl",
        className
      )}
    >
      {/* Luminous Glass Layers */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {/* Inner Glow Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              ellipse at center,
              rgba(255, 255, 255, 0.3) 0%,
              transparent 70%
            )`,
            filter: 'blur(20px)'
          }}
        />

        {/* Crystalline Texture */}
        <div className="absolute inset-0 opacity-15">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.2 }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Edge Luminescence */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none border"
          initial={{ borderColor: 'rgba(255,255,255,0.1)' }}
          animate={{
            borderColor: [
              'rgba(255,255,255,0.1)',
              'rgba(200,220,255,0.3)',
              'rgba(255,255,255,0.1)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            borderWidth: '1px',
            boxShadow: 'inset 0 0 20px rgba(255,255,255,0.05)'
          }}
        />
      </div>

      {/* Dynamic Refraction Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        style={{
          background: `linear-gradient(
            45deg,
            transparent 48%,
            rgba(200, 220, 255, 0.2) 50%,
            transparent 52%
          )`,
          backgroundSize: '200% 200%',
          animation: 'shimmer 8s infinite linear'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Global Styles for Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </motion.div>
  );
};

