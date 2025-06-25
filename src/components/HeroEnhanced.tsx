
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroEnhancedProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroEnhanced: React.FC<HeroEnhancedProps> = ({ onScrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const flagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Parallax effect for animated elements
  useEffect(() => {
    const handleScroll = () => {
      if (flagRef.current) {
        const scrolled = window.pageYOffset;
        flagRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002868] via-[#BF0A30] to-[#002868] opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-red-900/20 to-blue-900/20 animate-pulse"></div>
      </div>

      {/* Animated Flag Pattern */}
      <div ref={flagRef} className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 star-pattern animate-pulse"></div>
        {[...Array(13)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + (i * 0.2),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-8 h-1 bg-white/30 transform rotate-12"></div>
          </motion.div>
        ))}
      </div>

      {/* Floating Stars Animation */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            ★
          </motion.div>
        ))}
      </div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(191, 10, 48, 0.5)",
                "0 0 40px rgba(191, 10, 48, 0.3)",
                "0 0 20px rgba(191, 10, 48, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Hopewell <span className="text-blue-300">VA250</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Celebrating 250 Years of American History
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-12 leading-relaxed opacity-90"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            From City Point's colonial founding in 1613 to today, Hopewell has shaped America's story. 
            Discover centuries of history, innovation, and resilience at the confluence of the James and Appomattox rivers.
          </motion.p>
          
          <motion.button
            onClick={() => onScrollToSection('about')}
            className="group inline-flex items-center bg-[#BF0A30] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(191, 10, 48, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore the Celebration
            <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroEnhanced;
