
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationArrowsProps {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  isScrolling: 'left' | 'right' | false;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  canScrollLeft,
  canScrollRight,
  isScrolling
}) => {
  return (
    <>
      {/* Left Arrow - Absolutely positioned to left edge of container */}
      <AnimatePresence>
        {canScrollLeft && (
          <motion.div
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: 1,
              x: 0,
              scale: isScrolling === 'left' ? 1.05 : 1
            }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl border border-gray-200/50" 
                 style={{ 
                   boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                   filter: 'drop-shadow(0 4px 12px rgba(0, 40, 104, 0.1))'
                 }}>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Arrow - Absolutely positioned to right edge of container */}
      <AnimatePresence>
        {canScrollRight && (
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
            initial={{ opacity: 0, x: 10 }}
            animate={{ 
              opacity: 1,
              x: 0,
              scale: isScrolling === 'right' ? 1.05 : 1
            }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl border border-gray-200/50"
                 style={{ 
                   boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                   filter: 'drop-shadow(0 4px 12px rgba(0, 40, 104, 0.1))'
                 }}>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationArrows;
