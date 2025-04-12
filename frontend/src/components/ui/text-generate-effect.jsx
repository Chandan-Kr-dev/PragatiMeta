"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap justify-center">
        {wordsArray.map((word, idx) => (
         <motion.span
         key={word + idx}
         className={cn(
           "opacity-0 shimmer-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
           className
         )}
         style={{
           filter: filter ? "blur(10px)" : "none",
           marginRight: "0.25rem",
           display: "inline-block",
         }}
       >
         {word}
       </motion.span>
       
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-medium text-lg", className)}>
      <div className="mt-2">
        <div className="text-center">{renderWords()}</div>
      </div>
    </div>
  );
};