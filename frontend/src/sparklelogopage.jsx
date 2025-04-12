import React from "react";
import { SparklesCore } from "./components/ui/sparkles"; 
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { motion } from "framer-motion";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="flex items-center justify-center gap-4 relative z-20">
        {/* Logo using <img> */}
        <img
          src="/Brandlogo.jpeg" // Ensure this path is correct relative to the public folder
          alt="GyanGrid Logo"
          width={400}
          height={400}
          className="object-contain"
        />
        {/* Heading */}
        <div className="text-center">
        <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute w-64 h-64 rounded-full border-4 border-indigo-500"
      />

      {/* Main Heading with TextGenerateEffect */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent z-10"
      >
        <TextGenerateEffect words="GyanGrid" className="text-7xl" />
      </motion.h1>
  <p className="text-xl text-white mt-2">
    <TextGenerateEffect
      words="Empowering education one dashboard at a time"
    />
  </p>
</div>

         
      </div>

      <div className="w-[80rem] h-40 relative mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial mask */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
