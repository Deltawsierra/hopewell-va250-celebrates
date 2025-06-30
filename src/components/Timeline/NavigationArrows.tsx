
import React from 'react';
import { motion } from 'framer-motion';
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
      {/* Left Arrow */}
      {canScrollLeft && (
        <motion.div
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: isScrolling === 'left' ? 1 : 0.7,
            x: 0,
            scale: isScrolling === 'left' ? 1.2 : 1
          }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
            <motion.div
              animate={{ 
                x: isScrolling === 'left' ? [-3, 3, -3] : 0
              }}
              transition={{ 
                x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <ChevronLeft className="w-8 h-8 text-[#002868]" />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <motion.div
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: isScrolling === 'right' ? 1 : 0.7,
            x: 0,
            scale: isScrolling === 'right' ? 1.2 : 1
          }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
            <motion.div
              animate={{ 
                x: isScrolling === 'right' ? [3, -3, 3] : 0
              }}
              transition={{ 
                x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <ChevronRight className="w-8 h-8 text-[#002868]" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NavigationArrows;
