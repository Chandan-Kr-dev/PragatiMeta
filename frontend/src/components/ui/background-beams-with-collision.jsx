"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({ children, className }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  const beams = [
    // Original beams
    {
      initialX: 10,
      translateX: 10,
      duration: 10,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 12,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-9",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 3,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 10,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-9",
    },
    {
      initialX: 500,
      translateX: 500,
      duration: 1,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 1100,
      translateX: 1100,
      duration: 15,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 1300,
      translateX: 1300,
      duration: 10,
      repeatDelay: 2,
      delay: 2,
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 10,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 120,
      translateX: 120,
      duration: 10,
      repeatDelay: 3,
      delay: 2,
    },
    // New beams on the right side with higher frequency
    {
      initialX: 850,
      translateX: 850,
      duration: 4,
      repeatDelay: 1,
      delay: 0,
      className: "h-16",
    },
    {
      initialX: 950,
      translateX: 950,
      duration: 3,
      repeatDelay: 1.5,
      delay: 0.5,
      className: "h-10",
    },
    {
      initialX: 1050,
      translateX: 1050,
      duration: 5,
      repeatDelay: 2,
      delay: 1,
      className: "h-12",
    },
    {
      initialX: 1150,
      translateX: 1150,
      duration: 4.5,
      repeatDelay: 1,
      delay: 0.2,
    },
    {
      initialX: 1250,
      translateX: 1250,
      duration: 3.5,
      repeatDelay: 0.5,
      delay: 0.8,
      className: "h-8",
    },
    {
      initialX: 1350,
      translateX: 1350,
      duration: 2.5,
      repeatDelay: 1,
      delay: 0.3,
      className: "h-14",
    },
    {
      initialX: 1400,
      translateX: 1400,
      duration: 3,
      repeatDelay: 0.8,
      delay: 0,
    },
    {
      initialX: 1450,
      translateX: 1450,
      duration: 4,
      repeatDelay: 1.2,
      delay: 0.5,
      className: "h-11",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "min-h-screen w-full bg-gradient-to-b from-neutral-950 to-neutral-900 relative flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {beams.map((beam) => (
          <CollisionMechanism
            key={beam.initialX + "beam-idx"}
            beamOptions={beam}
            containerRef={containerRef}
            parentRef={parentRef}
          />
        ))}
      </div>
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-900 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
            
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef(
  ({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
      detected: false,
      coordinates: null,
    });
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    useEffect(() => {
      const checkCollision = () => {
        if (
          beamRef.current &&
          containerRef.current &&
          parentRef.current &&
          !cycleCollisionDetected
        ) {
          const beamRect = beamRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const parentRect = parentRef.current.getBoundingClientRect();

          if (beamRect.bottom >= containerRect.top-120) {
            const relativeX =
              beamRect.left - parentRect.left + beamRect.width / 2;
            const relativeY = beamRect.bottom - parentRect.top;

            setCollision({
              detected: true,
              coordinates: {
                x: relativeX,
                y: relativeY-120,
              },
            });
            setCycleCollisionDetected(true);
          }
        }
      };

      const animationInterval = setInterval(checkCollision, 50);
      return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef, parentRef]);

    useEffect(() => {
      if (collision.detected && collision.coordinates) {
        setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setCycleCollisionDetected(false);
        }, 2000);
      }
    }, [collision]);

    return (
      <>
        <motion.div
          ref={beamRef}
          animate="animate"
          initial={{
            translateY: beamOptions.initialY || "-200px",
            translateX: beamOptions.initialX || "0px",
            rotate: beamOptions.rotate || 0,
          }}
          variants={{
            animate: {
              translateY: beamOptions.translateY || "2000px",
              translateX: beamOptions.translateX || "0px",
              rotate: beamOptions.rotate || 0,
            },
          }}
          transition={{
            duration: beamOptions.duration || 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay || 0,
            repeatDelay: beamOptions.repeatDelay || 0,
          }}
          className={cn(
            "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
            beamOptions.className
          )}
        />
        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);
CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }) => {
  // Generate particles with random values for a natural look.
  const particles = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    x: Math.random() * 80 - 40,
    y: Math.random() * -60 - 10,
    scale: Math.random() * 0.6 + 0.4,
    duration: Math.random() * 1.2 + 0.6,
  }));

  return (
    <div {...props} className={cn("absolute z-50", props.className)}>
      {/* Glow ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 4, opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute h-4 w-4 rounded-full bg-indigo-500/40 blur-2xl"
      />

      {/* Central burst */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 m-auto h-1 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent blur"
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{
            x: p.x,
            y: p.y,
            scale: p.scale,
            opacity: 0,
          }}
          transition={{ duration: p.duration, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-400 via-purple-500 to-transparent"
        />
      ))}
    </div>
  );
};

export default BackgroundBeamsWithCollision;