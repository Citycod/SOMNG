import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // delay for text animation visibility
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Split the main text into individual characters for animation
  const mainText = 'School of Mathematics Nigeria'.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple to-dark-purple"
          role="status"
          aria-label="Loading School of Mathematics Nigeria"
        >
          <div className="text-center">
            {/* 🔥 Bouncing Logo */}
            <motion.img
              src="/images/Schoolofmlogo.png"
              alt="School of Mathematics Nigeria Logo"
              className="w-24 h-24 mx-auto mb-6 md:w-32 md:h-32"
              animate={{
                y: [0, -15, 0], // bounce
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Animated Text */}
            <div className="flex justify-center mb-4">
              {mainText.map((char, index) => (
                <motion.span
                  key={index}
                  className="text-xl font-bold text-white md:text-2xl font-playfair"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              className="text-sm md:text-base text-gold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
            >
              Innovating Math Education
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
