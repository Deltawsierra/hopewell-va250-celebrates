
import React, { useRef, useState, useEffect } from 'react';
import { timelineEvents } from '../../data/timelineEvents';
import TimelineEvent from './TimelineEvent';

interface DesktopTimelineProps {
  hoveredEvent: number | null;
  setHoveredEvent: (index: number | null) => void;
  onEventClick: (index: number) => void;
  selectedEvent: number | null;
}

const DesktopTimeline: React.FC<DesktopTimelineProps> = ({
  hoveredEvent,
  setHoveredEvent,
  onEventClick,
  selectedEvent
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Enable mouse wheel horizontal scrolling when hovering timeline
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    const onWheel = (e: WheelEvent) => {
      // Only intercept vertical wheel for horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="hidden md:block relative pb-16">
      {/* Instructional Text */}
      <div className="text-center mb-8 px-4">
        <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-3 max-w-2xl mx-auto">
          💡 <strong>Scroll to explore:</strong> Use your mouse wheel, trackpad, or drag to navigate through the timeline horizontally
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Scrollable Timeline Content */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide px-8"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
            cursor: 'grab'
          }}
          tabIndex={0}
        >
          <div className="relative py-12 select-none">
            {/* Timeline Events */}
            <div className="flex w-max space-x-12">
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
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default DesktopTimeline;
