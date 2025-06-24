
import React from 'react';
import { ChevronUp } from 'lucide-react';

interface BackToTopProps {
  isVisible: boolean;
  onClick: () => void;
}

const BackToTop: React.FC<BackToTopProps> = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-[#BF0A30] hover:bg-red-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;
