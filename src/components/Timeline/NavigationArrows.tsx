
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
      {/* Left Arrow - Fixed to container left edge */}
      {canScrollLeft && (
        <motion.div
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
          style={{ position: 'absolute' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: isScrolling === 'left' ? 1 : 0.8,
            x: 0,
            scale: isScrolling === 'left' ? 1.1 : 1
          }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-2xl border border-gray-200/50" 
               style={{ 
                 boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 40, 104, 0.1)',
                 filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
               }}>
            <motion.div
              animate={{ 
                x: isScrolling === 'left' ? [-2, 2, -2] : 0
              }}
              transition={{ 
                x: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <ChevronLeft className="w-7 h-7 text-[#002868]" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Right Arrow - Fixed to container right edge */}
      {canScrollRight && (
        <motion.div
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
          style={{ position: 'absolute' }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: isScrolling === 'right' ? 1 : 0.8,
            x: 0,
            scale: isScrolling === 'right' ? 1.1 : 1
          }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-2xl border border-gray-200/50"
               style={{ 
                 boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 40, 104, 0.1)',
                 filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
               }}>
            <motion.div
              animate={{ 
                x: isScrolling === 'right' ? [2, -2, 2] : 0
              }}
              transition={{ 
                x: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <ChevronRight className="w-7 h-7 text-[#002868]" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NavigationArrows;
