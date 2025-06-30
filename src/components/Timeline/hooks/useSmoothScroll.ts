
import { useEffect, useRef } from 'react';

export const useSmoothScroll = (
  isScrolling: 'left' | 'right' | false,
  setIsScrolling: (scrolling: 'left' | 'right' | false) => void,
  containerRef: React.RefObject<HTMLDivElement>,
  updateScrollState: () => void
) => {
  useEffect(() => {
    let animationFrame: number;
    
    const smoothScroll = () => {
      if (isScrolling && containerRef.current) {
        const container = containerRef.current;
        const scrollSpeed = 1.5;
        const scrollAmount = isScrolling === 'left' ? -scrollSpeed : scrollSpeed;
        const newScrollLeft = container.scrollLeft + scrollAmount;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if ((isScrolling === 'left' && newScrollLeft <= 0) || 
            (isScrolling === 'right' && newScrollLeft >= maxScroll)) {
          setIsScrolling(false);
          return;
        }
        
        container.scrollLeft = newScrollLeft;
        updateScrollState();
        
        animationFrame = requestAnimationFrame(smoothScroll);
      }
    };

    if (isScrolling) {
      animationFrame = requestAnimationFrame(smoothScroll);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isScrolling, setIsScrolling, containerRef, updateScrollState]);
};
