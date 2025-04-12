"use client";

import { Github, Instagram, Twitter } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";


const socialItems = [
  {
    title: "GitHub",
    href: "https://github.com/yourusername",
    icon: <Github className="text-neutral-700 dark:text-neutral-200" />,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: <Instagram className="text-neutral-700 dark:text-neutral-200" />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: <Twitter className="text-neutral-700 dark:text-neutral-200" />,
  },
];

export default function FloatingFooter({ className }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="w-full px-4 pb-4 pt-12 relative z-50">
      <motion.footer
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto flex flex-col items-center gap-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 shadow-md w-full max-w-4xl",
          className
        )}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-white text-xs gap-3">
          {/* Tagline */}
          <div className="text-center md:text-left font-light text-lg font-serif">
         <TextGenerateEffect
    words={"Empowering Education. One Dashboard at a Time."}
    />
  
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 font-semibold text-sm text-white">
            <a href="/" className="hover:text-blue-400 transition">Home</a>
            <a href="/signup" className="hover:text-blue-400 transition">Signup</a>
            <a href="/features" className="hover:text-blue-400 transition">DashBoard</a>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-white/80">Contact Us</span>
            <div className="flex h-12 gap-3 items-end">
              {socialItems.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/60 text-center font-thin mt-1">
          © {new Date().getFullYear()} GyanGrid. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-100, 0, 100], [32, 48, 32]);
  const heightTransform = useTransform(distance, [-100, 0, 100], [32, 48, 32]);

  const widthTransformIcon = useTransform(distance, [-100, 0, 100], [16, 28, 16]);
  const heightTransformIcon = useTransform(distance, [-100, 0, 100], [16, 28, 16]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
