
import React from 'react';
import { timelineEvents } from '../../data/timelineEvents';
import TimelineEvent from './TimelineEvent';
import NavigationArrows from './NavigationArrows';
import ProgressLine from './ProgressLine';
import { useTimelineScroll } from './hooks/useTimelineScroll';
import { useSmoothScroll } from './hooks/useSmoothScroll';

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
  const {
    containerRef,
    scrollerRef,
    scrollProgress,
    visibleProgress,
    canScrollLeft,
    canScrollRight,
    containerWidth,
    totalWidth,
    updateScrollState
  } = useTimelineScroll();

  useSmoothScroll(isScrolling, setIsScrolling, containerRef, updateScrollState);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const threshold = 80; // Reduced threshold for edge detection

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
      {/* Timeline Container with relative positioning for arrow placement */}
      <div className="relative">
        <div 
          ref={containerRef}
          className="timeline-container overflow-x-auto overflow-y-hidden scrollbar-hide cursor-pointer w-full relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            height: 'auto',
            paddingLeft: '80px', // Add padding to prevent arrow overlap with first event
            paddingRight: '80px' // Add padding to prevent arrow overlap with last event
          }}
        >
          {/* Navigation arrows positioned absolutely within this container */}
          <NavigationArrows
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            isScrolling={isScrolling}
          />

          <div 
            ref={scrollerRef}
            className="relative min-w-full py-12 px-8"
          >
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
            
            <ProgressLine
              scrollProgress={scrollProgress}
              visibleProgress={visibleProgress}
              isScrolling={isScrolling}
              containerWidth={containerWidth}
              totalWidth={totalWidth}
            />
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-container::-webkit-scrollbar {
          display: none;
        }
        
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
