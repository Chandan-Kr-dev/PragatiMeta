import { useState } from 'react';

export default function ImprovedGlassCard() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative max-w-md mx-auto overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-purple-800/80" />
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-500/30 filter blur-xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/20 filter blur-xl" />
      </div>
      
      {/* Glass effect with more refined border glow */}
      <div 
        className="relative backdrop-blur-md p-6 transition-all duration-300 border border-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(91, 33, 182, 0.4) 0%, rgba(76, 29, 149, 0.7) 100%)',
          boxShadow: isHovered 
            ? '0 10px 25px rgba(147, 51, 234, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 10px rgba(139, 92, 246, 0.3)' 
            : '0 4px 15px rgba(147, 51, 234, 0.15), inset 0 0 10px rgba(255, 255, 255, 0.05)',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        }}
      >
        {/* Subtle highlights to enhance glass effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        
        <h3 className="text-xl font-bold text-white mb-3">Glass Card</h3>
        <p className="text-gray-200 mb-4 leading-relaxed">
          This card features an enhanced glass effect with realistic light 
          refraction and transparency. Notice the subtle depth and highlights 
          that mimic real glass.
        </p>
        <button className="px-4 py-2 bg-purple-600/50 backdrop-blur-sm text-white rounded-lg transition-all duration-300 hover:bg-purple-500/60 border border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20">
          Explore More
        </button>
      </div>
    </div>
  );
}