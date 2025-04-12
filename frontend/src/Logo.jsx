import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";

export const Logo = () => {
  const taglineWords = ["easier", "faster", "smarter", "better"];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex justify-center mt-4"
    >
      <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 backdrop-blur-sm">
        <div className="w-25 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden">
          <img 
            src="/Brandlogo.jpeg" 
            alt="Brand Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            GyanGrid
          </h1>
          <div className="text-sm text-white/80">
           Because learning with us is <FlipWords words={taglineWords} className="inline-block text-xl text-white/80 font-extrabold font" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
