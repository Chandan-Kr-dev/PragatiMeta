import { useState, useEffect } from 'react';
import { SparklesCore } from './components/ui/sparkles';
import { TextGenerateEffect } from './components/ui/text-generate-effect';

export default function GyangridLogoPump({ logoSrc = "/Brandlogo.jpeg" }) {
  const [isActive, setIsActive] = useState(false);
  const [showTextEffect, setShowTextEffect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isActive) {
      const textTimer = setTimeout(() => setShowTextEffect(true), 1600); // After pump animation
      return () => clearTimeout(textTimer);
    } else {
      setShowTextEffect(false);
    }
  }, [isActive]);

  const handleClick = () => {
    setIsActive(false);
    setShowTextEffect(false);
    setTimeout(() => setIsActive(true), 50);
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-black pt-20">
      <div
        className="relative cursor-pointer"
        onClick={handleClick}
        title="Click to replay animation"
      >
        <div className={`transition-all duration-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          {/* Logo Container with TextGenerateEffect */}
          <div className={`
            w-auto px-6 py-4 md:px-10 md:py-6 bg-black
            rounded-2xl flex flex-col md:flex-row items-center justify-center gap-4
            shadow-2xl border border-indigo-500
            relative z-10 overflow-hidden
            ${isActive ? 'animate-enhanced-pump' : ''}
          `}>
            <img
              src={logoSrc}
              alt="GYANGRID Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
            
          </div>

          {/* Pulse Rings */}
          {isActive && (
            <>
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-600 animate-pulse-ring-1"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500 animate-pulse-ring-2"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-sky-400 animate-pulse-ring-3"></div>
            </>
          )}
        </div>
      </div>

      {/* GYANGRID Text */}
      <div className={`
        mt-3 z-20 text-center font-extrabold tracking-widest
        bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500
        ${isActive ? 'animate-text-scale' : 'opacity-0 scale-0'}
      `}>
        <span>GYANGRID</span>
        <div className="min-h-[3rem] flex items-center justify-center">
              {showTextEffect && (
                <TextGenerateEffect
                  words="Empowering Education One Dashboard at a Time"
                  className="text-lg md:text-xl font-semibold text-white text-center"
                  filter={true}
                  duration={0.6}
                />
              )}
            </div>
      </div>

      {/* Sparkle Background with Radial Mask */}
      <div className="w-[80rem] h-40 relative mt-2 z-10">
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes enhanced-pump {
          0% { transform: scale(0); }
          40% { transform: scale(1.4); }
          50% { transform: scale(0.8); }
          60% { transform: scale(1.3); }
          70% { transform: scale(0.9); }
          80% { transform: scale(1.1); }
          90% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }

        @keyframes text-scale {
          0% { transform: scale(0.2); opacity: 0; }
          30% { transform: scale(0.6); opacity: 0.4; }
          60% { transform: scale(1.4); opacity: 0.8; }
          80% { transform: scale(0.9); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes pulse-ring-1 {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes pulse-ring-2 {
          0% { transform: scale(1); opacity: 0; }
          20% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        @keyframes pulse-ring-3 {
          0% { transform: scale(1); opacity: 0; }
          40% { transform: scale(1.2); opacity: 0.4; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .animate-enhanced-pump {
          animation: enhanced-pump 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .animate-text-scale {
          animation: text-scale 1.5s ease-in-out forwards;
          font-size: 3.5rem;
        }

        .animate-pulse-ring-1 {
          animation: pulse-ring-1 1.2s ease-out forwards;
        }

        .animate-pulse-ring-2 {
          animation: pulse-ring-2 1.4s ease-out forwards 0.3s;
        }

        .animate-pulse-ring-3 {
          animation: pulse-ring-3 1.6s ease-out forwards 0.6s;
        }
      `}</style>
    </div>
  );
}
