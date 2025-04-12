"use client";
import { motion } from "framer-motion";

export const EmpowerLamp = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[300px] z-0">
      {/* Enhanced Spotlight Effect */}
      <div className="absolute inset-0 w-full overflow-hidden">
        {/* Main Spotlight Beam - Increased opacity and size */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] h-[350px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)',
            clipPath: 'polygon(40% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(10px)'
          }}
        />
        
        {/* Secondary Glow - More intense */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1500px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
            clipPath: 'polygon(40% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(30px)'
          }}
        />
        
        {/* Edge Highlights - More visible */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1600px] h-[450px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(100,150,255,0.1) 0%, rgba(255,255,255,0.15) 50%, rgba(100,150,255,0.1) 100%)',
            clipPath: 'polygon(40% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(15px)'
          }}
        />
      </div>

      {/* Text Container with Enhanced Contrast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-50 rounded-xl bg-white/20 backdrop-blur-lg px-8 py-8 border border-white/30 text-center max-w-xl mx-auto"
        style={{
          boxShadow: '0 0 40px rgba(100, 150, 255, 0.3)',
          marginTop: '-3rem'
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Empowering Education
          </span>
          <br />
          <span className="text-white/90 text-xl md:text-2xl font-medium mt-2 inline-block">
            One Dashboard at a Time
          </span>
        </h1>
      </motion.div>
    </div>
  );
};