import React, { useState, useEffect } from 'react';
import { SparklesPreview } from './sparklelogopage';
import Loginformmarqueecomponent from './Loginformmarqueecomponent';
import { motion, AnimatePresence } from 'framer-motion';

function Signup() {
  const [showSparkles, setShowSparkles] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShowSparkles(false); // trigger fade out after 5s
      setShowLoginForm(true);
    }, 5000);

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div className="signup-page flex items-center justify-center h-screen bg-black relative overflow-hidden">
      <AnimatePresence>
        {showSparkles && (
          <motion.div
            key="sparkles"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <SparklesPreview />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLoginForm && (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="z-10 w-full "
          >
            <Loginformmarqueecomponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Signup;
