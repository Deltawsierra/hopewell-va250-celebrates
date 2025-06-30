
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
      {/* Background Image */}
      <img
        src="/lovable-uploads/57b14884-e653-41ee-a910-dadce173d5d6.png"
        alt="Aerial view of Hopewell, VA at the confluence of James and Appomattox rivers"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.9) contrast(1.05)' }}
        loading="eager"
        draggable={false}
      />

      {/* American Flag Overlay */}
      <div className="absolute inset-0 z-10 flag-overlay">
        {/* Blue Canton with Stars */}
        <div className="absolute top-0 left-0 w-1/3 h-2/5 bg-[#002868] opacity-60 flex items-center justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 200"
            className="absolute inset-0"
          >
            {/* Generate stars in a pattern */}
            {[...Array(50)].map((_, i) => {
              const row = Math.floor(i / 10);
              const col = i % 10;
              const x = 20 + col * 26 + (row % 2 === 1 ? 13 : 0);
              const y = 20 + row * 20;
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="white"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </svg>
        </div>

        {/* Red and White Stripes */}
        <div className="absolute inset-0 flex flex-col">
          {[...Array(13)].map((_, i) => (
            <motion.div
              key={i}
              className={`flex-1 ${i % 2 === 0 ? 'bg-[#BF0A30]' : 'bg-white'} opacity-25`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              style={{ transformOrigin: 'left' }}
            />
          ))}
        </div>

        {/* Additional subtle gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%)`,
          }}
        />
      </div>

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
