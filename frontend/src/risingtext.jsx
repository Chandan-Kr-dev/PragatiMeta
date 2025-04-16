"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const RisingText = ({ 
  children, 
  staggerChildren = 0.1, 
  delay = 0,
  threshold = 0.1, // Visibility threshold for triggering the animation
  className = ""
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set up intersection observer to trigger animation when element comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  // Animation variants for each word
  const wordVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom ease curve for smooth rise
      }
    },
  };

  // Split text into words
  const words = typeof children === 'string' ? children.split(' ') : [children];

  return (
    <motion.div
      ref={containerRef}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Example usage with multiple lines
export const RisingTextBlock = ({ 
  lines, 
  staggerLines = 0.2, 
  staggerWords = 0.05,
  delay = 0,
  className = "" 
}) => {
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <RisingText 
          key={index} 
          staggerChildren={staggerWords}
          delay={delay + (index * staggerLines)}
          className="block mb-4"
        >
          {line}
        </RisingText>
      ))}
    </div>
  );
};

// Sample implementation of how to use these components
export const TextRevealExample = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <RisingTextBlock
        lines={[
          "Elegant typography with motion",
          "Each word rises from below",
          "Creating a captivating entrance"
        ]}
        className="text-4xl font-bold text-center mb-12"
      />
      
      <div className="max-w-xl mx-auto">
        <RisingText delay={1} className="text-xl text-gray-300 leading-relaxed">
          This animation creates a sophisticated reveal effect that draws attention 
          to your content in a subtle yet impactful way.
        </RisingText>
      </div>
    </div>
  );
};



export const AnimatedWord = ({ 
  word, 
  staggerCharacters = 0.03, 
  delay = 0,
  threshold = 0.1,
  className = "" 
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerCharacters,
        delayChildren: delay,
      },
    },
  };

  // Animation variants for each character
  const characterVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  // Split word into characters
  const characters = word.split('');
  
  // Check if the class contains gradient styling
  const hasGradient = className?.includes('gradient') || className?.includes('text-custom');

  return (
    <motion.div
      ref={containerRef}
      className={`inline-block ${className}`}
      variants={!hasGradient ? containerVariants : undefined}
      initial={!hasGradient ? "hidden" : { opacity: 1 }}
      animate={!hasGradient ? (isVisible ? "visible" : "hidden") : { opacity: 1 }}
    >
      {/* For gradient text, we need a wrapper to handle the characters but preserve gradient across the whole word */}
      {hasGradient ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="inline-flex"
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              variants={characterVariants}
              className="inline-block"
              style={{ opacity: 1 }} // Keep opacity at 1 to preserve gradient
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ) : (
        /* Regular text animation, each character can handle its own opacity */
        characters.map((char, index) => (
          <motion.span
            key={index}
            variants={characterVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))
      )}
    </motion.div>
  );
};