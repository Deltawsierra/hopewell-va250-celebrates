
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineEvent } from '../../data/timelineEvents';

interface TimelineModalProps {
  event: TimelineEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

const TimelineModal: React.FC<TimelineModalProps> = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-xl p-8 max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center">
              <motion.div 
                className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {React.createElement(event.icon, {
                  className: "w-8 h-8 text-white"
                })}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-[#002868] mb-2">
                {event.year}
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {event.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {event.description}
              </p>
              <motion.div 
                className="bg-blue-50 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-[#002868] font-semibold">
                  {event.trivia}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimelineModal;
