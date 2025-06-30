
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationArrowsProps {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  isScrolling: 'left' | 'right' | false;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  canScrollLeft,
  canScrollRight,
  isScrolling,
  onScrollLeft,
  onScrollRight
}) => {
  return (
    <>
      {/* Left Arrow - Fixed at absolute left edge */}
      <button
        className={`
          absolute left-4 top-1/2 -translate-y-1/2 z-30
          bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl border border-gray-200/50
          transition-all duration-300 hover:scale-105
          ${canScrollLeft ? 'opacity-100' : 'opacity-50 pointer-events-none'}
        `}
        onClick={onScrollLeft}
        aria-label="Scroll timeline left"
        style={{ 
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          filter: 'drop-shadow(0 4px 12px rgba(0, 40, 104, 0.1))'
        }}
      >
        <motion.div
          animate={{ 
            x: isScrolling === 'left' ? [-1, 1, -1] : 0
          }}
          transition={{ 
            x: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronLeft className="w-6 h-6 text-[#002868]" strokeWidth={2.5} />
        </motion.div>
      </button>

      {/* Right Arrow - Fixed at absolute right edge */}
      <button
        className={`
          absolute right-4 top-1/2 -translate-y-1/2 z-30
          bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl border border-gray-200/50
          transition-all duration-300 hover:scale-105
          ${canScrollRight ? 'opacity-100' : 'opacity-50 pointer-events-none'}
        `}
        onClick={onScrollRight}
        aria-label="Scroll timeline right"
        style={{ 
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          filter: 'drop-shadow(0 4px 12px rgba(0, 40, 104, 0.1))'
        }}
      >
        <motion.div
          animate={{ 
            x: isScrolling === 'right' ? [1, -1, 1] : 0
          }}
          transition={{ 
            x: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronRight className="w-6 h-6 text-[#002868]" strokeWidth={2.5} />
        </motion.div>
      </button>
    </>
  );
};

export default NavigationArrows;
