
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
        style={{ filter: 'brightness(0.85) contrast(1.08)' }}
        loading="eager"
        draggable={false}
      />

      {/* Transparent Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(180deg, rgba(0,40,104,0.25) 0%, rgba(191,10,48,0.20) 60%, rgba(255,255,255,0.08) 100%)`,
        }}
      />

      {/* Animated SVG Flag Overlay */}
      <div className="absolute inset-0 z-15 pointer-events-none flex items-center justify-center select-none">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-full"
          style={{ opacity: 0.23 }}
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Waving filter */}
            <filter id="wave">
              <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="1" result="turb" seed="2" />
              <feDisplacementMap in2="turb" in="SourceGraphic" scale="16" xChannelSelector="R" yChannelSelector="A">
                <animate attributeName="scale" values="16;28;16" dur="6s" repeatCount="indefinite" />
              </feDisplacementMap>
            </filter>
            {/* Star Shape */}
            <symbol id="star" viewBox="0 0 10 10">
              <polygon points="5,0 6,3.5 10,4 7,6.5 8,10 5,8 2,10 3,6.5 0,4 4,3.5" fill="#fff" />
            </symbol>
          </defs>
          
          {/* Red and white stripes */}
          {[...Array(13)].map((_, i) => (
            <rect
              key={i}
              y={i * 37}
              width="800"
              height="37"
              fill={i % 2 === 0 ? "#BF0A30" : "#fff"}
              opacity={i % 2 === 0 ? 0.32 : 0.18}
              filter="url(#wave)"
            />
          ))}
          
          {/* Blue canton */}
          <rect
            x="0"
            y="0"
            width={800 * 0.4}
            height={37 * 7}
            fill="#002868"
            opacity="0.37"
            filter="url(#wave)"
          />
          
          {/* Stars - 6 rows with alternating 5 and 4 stars */}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: row % 2 === 0 ? 5 : 4 }).map((_, col) => (
              <use
                key={`star-${row}-${col}`}
                href="#star"
                x={30 + col * 55 + (row % 2 === 0 ? 28 : 55)}
                y={24 + row * 34}
                width="22"
                height="22"
                style={{
                  opacity: 0.84 + Math.sin((row + col) * 1.5) * 0.15,
                  filter: "url(#wave)",
                  transition: 'opacity 0.7s'
                }}
              />
            ))
          )}
          
          {/* Additional stars for proper 50-star pattern */}
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: row % 2 === 0 ? 5 : 4 }).map((_, col) => (
              <use
                key={`star-extra-${row}-${col}`}
                href="#star"
                x={30 + col * 55 + (row % 2 === 0 ? 28 : 55)}
                y={228 + row * 34}
                width="22"
                height="22"
                style={{
                  opacity: 0.84 + Math.sin((row + col + 6) * 1.5) * 0.15,
                  filter: "url(#wave)",
                  transition: 'opacity 0.7s'
                }}
              />
            ))
          )}
        </svg>
      </div>

      {/* Subtle Animated Background Elements */}
      <div ref={flagRef} className="absolute inset-0 opacity-10 pointer-events-none z-16">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
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
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              textShadow: '3px 3px 12px rgba(0,0,0,0.8), 0 0 25px rgba(191,10,48,0.4), 2px 2px 8px rgba(0,0,0,0.9)'
            }}
            animate={{
              textShadow: [
                "3px 3px 12px rgba(0,0,0,0.8), 0 0 25px rgba(191,10,48,0.4), 2px 2px 8px rgba(0,0,0,0.9)",
                "3px 3px 12px rgba(0,0,0,0.8), 0 0 35px rgba(191,10,48,0.5), 2px 2px 8px rgba(0,0,0,0.9)",
                "3px 3px 12px rgba(0,0,0,0.8), 0 0 25px rgba(191,10,48,0.4), 2px 2px 8px rgba(0,0,0,0.9)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Hopewell <span className="text-blue-200">VA250</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.8)'
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
              textShadow: '2px 2px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.7)'
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
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
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
             style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
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
