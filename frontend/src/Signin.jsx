import React, { useState, useEffect } from 'react';
import { SparklesPreview } from './sparklelogopage';
import Loginformmarqueecomponent from './Loginformmarqueecomponent';
import { motion, AnimatePresence } from 'framer-motion';
import Signformmarqueecomponent from './signinformarquess';
import GyangridLogoPump from './smasheffect';
function Signup() {
  const [showPump, setShowPump] = useState(true);
  const [showsigninForm, setShowsigninForm] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShowPump(false); // trigger fade out after 5s
      setShowsigninForm(true);
    }, 5000);

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div className="signup-page flex items-center justify-center h-screen bg-black relative overflow-hidden">
      <AnimatePresence>
        {showPump && (
          <motion.div
            key="sparkles"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <GyangridLogoPump />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showsigninForm && (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="z-10 w-full "
          >
            <Signformmarqueecomponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Signup;
