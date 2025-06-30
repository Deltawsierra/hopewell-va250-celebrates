
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroFlagOverlay from './HeroFlagOverlay';

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
      {/* Background Image */}
      <img
        src="/lovable-uploads/57b14884-e653-41ee-a910-dadce173d5d6.png"
        alt="Aerial view of Hopewell, VA at the confluence of James and Appomattox rivers"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.9) contrast(1.05)' }}
        loading="eager"
        draggable={false}
      />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%)`,
        }}
      />

      {/* Animated American Flag Overlay */}
      <HeroFlagOverlay />

      {/* Content with Enhanced Animations */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              textShadow: '3px 3px 12px rgba(0,0,0,0.8), 0 0 25px rgba(0,0,0,0.5)'
            }}
            animate={{
              textShadow: [
                "3px 3px 12px rgba(0,0,0,0.8), 0 0 25px rgba(0,0,0,0.5)",
                "3px 3px 12px rgba(0,0,0,0.8), 0 0 35px rgba(0,0,0,0.6)",
                "3px 3px 12px rgba(0,0,0,0.8), 0 0 25px rgba(0,0,0,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Hopewell <span className="text-blue-200">VA250</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Celebrating 250 Years of American History
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-12 leading-relaxed opacity-95"
            style={{
              textShadow: '2px 2px 6px rgba(0,0,0,0.8)'
            }}
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
            style={{
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(191, 10, 48, 0.4), 0 4px 15px rgba(0,0,0,0.3)",
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
             style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
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
