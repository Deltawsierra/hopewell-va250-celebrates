
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineEvent } from '../../data/timelineEvents';

interface TimelineTooltipProps {
  event: TimelineEvent;
  isVisible: boolean;
}

const TimelineTooltip: React.FC<TimelineTooltipProps> = ({ event, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute top-full mt-8 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-2xl border-2 border-[#BF0A30] w-96 z-50"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-left">
            <div className="font-bold text-[#002868] text-xl mb-3 leading-tight">{event.title}</div>
            <div className="text-gray-700 text-base leading-relaxed font-medium mb-4">{event.description}</div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-[#002868] font-semibold text-sm leading-relaxed">{event.trivia}</div>
            </div>
          </div>
          {/* Arrow pointing to event */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-transparent border-b-[#BF0A30]"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimelineTooltip;
