
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Auto-scroll functionality
  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    
    if (isScrolling && scrollContainerRef.current) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const scrollAmount = isScrolling === 'left' ? -2 : 2;
          container.scrollLeft += scrollAmount;
        }
      }, 16); // ~60fps
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isScrolling]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const threshold = 100; // pixels from edge to trigger scroll

    if (x < threshold) {
      setIsScrolling('left');
    } else if (x > rect.width - threshold) {
      setIsScrolling('right');
    } else {
      setIsScrolling(false);
    }
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  return (
    <div className="hidden md:block relative overflow-hidden pb-32">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide cursor-pointer w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
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
          
          {/* Timeline Line - Positioned well below all text and icons */}
          <motion.div 
            className="absolute left-8 right-8 h-3 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] rounded-full"
            style={{ top: '260px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopTimeline;
