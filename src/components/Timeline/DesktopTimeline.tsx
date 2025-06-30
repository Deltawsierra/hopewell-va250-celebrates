
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { timelineEvents } from '../../data/timelineEvents';
import TimelineEvent from './TimelineEvent';

interface DesktopTimelineProps {
  hoveredEvent: number | null;
  setHoveredEvent: (index: number | null) => void;
  onEventClick: (index: number) => void;
  selectedEvent: number | null;
  isScrolling: 'left' | 'right' | false;
  setIsScrolling: (scrolling: 'left' | 'right' | false) => void;
}

const DesktopTimeline: React.FC<DesktopTimelineProps> = ({
  hoveredEvent,
  setHoveredEvent,
  onEventClick,
  selectedEvent,
  isScrolling,
  setIsScrolling
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll progress and boundary states
  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Calculate scroll progress (0 to 1)
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
      
      // Update boundary states
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < maxScroll - 5);
    }
  };

  // Auto-scroll functionality with boundary checking
  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    
    if (isScrolling && scrollContainerRef.current) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const scrollAmount = isScrolling === 'left' ? -3 : 3;
          const newScrollLeft = container.scrollLeft + scrollAmount;
          const maxScroll = container.scrollWidth - container.clientWidth;
          
          // Stop scrolling if we've reached the boundaries
          if ((isScrolling === 'left' && newScrollLeft <= 0) || 
              (isScrolling === 'right' && newScrollLeft >= maxScroll)) {
            setIsScrolling(false);
            return;
          }
          
          container.scrollLeft = newScrollLeft;
          updateScrollState();
        }
      }, 16); // ~60fps
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isScrolling, setIsScrolling]);

  // Listen for scroll events to update progress
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        updateScrollState();
      };
      
      container.addEventListener('scroll', handleScroll);
      // Initial state
      updateScrollState();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const threshold = 120; // pixels from edge to trigger scroll

    if (x < threshold && canScrollLeft) {
      setIsScrolling('left');
    } else if (x > rect.width - threshold && canScrollRight) {
      setIsScrolling('right');
    } else {
      setIsScrolling(false);
    }
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
    setHoveredEvent(null);
  };

  return (
    <div className="hidden md:block relative pb-64">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide cursor-pointer w-full relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {/* Left Navigation Hover Zone */}
        {canScrollLeft && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100/40 to-transparent z-20 flex items-center justify-start pl-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolling === 'left' ? 0.8 : 0.3 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronLeft className="w-8 h-8 text-[#002868] drop-shadow-lg" />
          </motion.div>
        )}

        {/* Right Navigation Hover Zone */}
        {canScrollRight && (
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100/40 to-transparent z-20 flex items-center justify-end pr-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolling === 'right' ? 0.8 : 0.3 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-8 h-8 text-[#002868] drop-shadow-lg" />
          </motion.div>
        )}

        <div className="relative min-w-full py-12 px-8">
          {/* Timeline Events */}
          <div className="flex justify-between items-start relative w-full" style={{ minWidth: '1800px' }}>
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                event={event}
                index={index}
                isHovered={hoveredEvent === index}
                onHover={setHoveredEvent}
                onClick={(eventIndex) => onEventClick(selectedEvent === eventIndex ? -1 : eventIndex)}
              />
            ))}
          </div>
          
          {/* Background Timeline Line */}
          <div 
            className="absolute left-8 right-8 h-3 bg-gray-200 rounded-full pointer-events-none"
            style={{ top: '280px' }}
          />
          
          {/* Dynamic Progress Timeline Line */}
          <motion.div 
            className="absolute left-8 h-3 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] rounded-full pointer-events-none"
            style={{ 
              top: '280px',
              right: `${(1 - scrollProgress) * 100}%`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopTimeline;
