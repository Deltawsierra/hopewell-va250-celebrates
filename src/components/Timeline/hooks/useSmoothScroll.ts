
import { useEffect, useRef } from 'react';

export const useSmoothScroll = (
  isScrolling: 'left' | 'right' | false,
  setIsScrolling: (scrolling: 'left' | 'right' | false) => void,
  containerRef: React.RefObject<HTMLDivElement>,
  updateScrollState: () => void
) => {
  const animationRef = useRef<number>();
  
  useEffect(() => {
    const smoothScroll = () => {
      if (isScrolling && containerRef.current) {
        const container = containerRef.current;
        const scrollSpeed = 3; // Slightly faster scroll
        const scrollAmount = isScrolling === 'left' ? -scrollSpeed : scrollSpeed;
        const newScrollLeft = container.scrollLeft + scrollAmount;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if ((isScrolling === 'left' && newScrollLeft <= 0) || 
            (isScrolling === 'right' && newScrollLeft >= maxScroll)) {
          setIsScrolling(false);
          return;
        }
        
        container.scrollLeft = newScrollLeft;
        updateScrollState(); // Update progress during scroll
        
        animationRef.current = requestAnimationFrame(smoothScroll);
      }
    };

    if (isScrolling) {
      animationRef.current = requestAnimationFrame(smoothScroll);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isScrolling, setIsScrolling, containerRef, updateScrollState]);
};
