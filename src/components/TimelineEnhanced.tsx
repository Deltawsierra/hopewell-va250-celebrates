
import React, { useState } from 'react';
import { Calendar, Star, Home, Flag, Factory, Ship } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TimelineEnhanced = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      year: 1613,
      title: 'City Point Founded',
      description: 'Sir Thomas Dale establishes City Point as a strategic settlement at the confluence of the James and Appomattox rivers.',
      trivia: 'Did you know? Early English settlement called "Bermuda City" housed up to 119 people according to John Rolfe!',
      icon: Home,
      color: 'bg-[#002868]'
    },
    {
      year: 1700,
      title: 'Tobacco Hub',
      description: 'City Point becomes a major tobacco export center with warehouses serving colonial Virginia commerce.',
      trivia: 'Did you know? City Point\'s tobacco warehouses were among the most important in colonial Virginia!',
      icon: Ship,
      color: 'bg-[#BF0A30]'
    },
    {
      year: 1781,
      title: 'Revolutionary War',
      description: 'Benedict Arnold\'s British troops pass through City Point during the Revolutionary War campaign.',
      trivia: 'Did you know? City Point played a strategic role in the Revolutionary War as British and American forces moved through the area!',
      icon: Flag,
      color: 'bg-[#002868]'
    },
    {
      year: 1826,
      title: 'Town Incorporation',
      description: 'The Town of City Point is officially incorporated, marking its formal establishment as a municipal entity.',
      trivia: 'Did you know? City Point was one of Virginia\'s earliest incorporated towns!',
      icon: Home,
      color: 'bg-[#BF0A30]'
    },
    {
      year: 1840,
      title: 'Railroad Arrives',
      description: 'City Point Railroad Company operates one of the earliest U.S. rail lines between City Point and Petersburg.',
      trivia: 'Did you know? The City Point Railroad was a pioneering transportation link in early America!',
      icon: Star,
      color: 'bg-[#002868]'
    },
    {
      year: 1864,
      title: 'Grant\'s Headquarters',
      description: 'General Grant establishes headquarters at Appomattox Manor. City Point becomes one of the world\'s busiest ports during the Petersburg Siege.',
      trivia: 'Did you know? Union hospitals at City Point could treat up to 10,000 patients, and President Lincoln visited twice during the siege!',
      icon: Flag,
      color: 'bg-[#BF0A30]'
    },
    {
      year: 1916,
      title: 'Industrial Boom',
      description: 'DuPont builds guncotton factory, triggering Hopewell\'s incorporation and explosive population growth to 40,000 residents.',
      trivia: 'Did you know? Hopewell was called the "Wonder City" due to its rapid industrial transformation!',
      icon: Factory,
      color: 'bg-[#002868]'
    },
    {
      year: 1928,
      title: 'Beacon Theatre Opens',
      description: 'The Art Deco Beacon Theatre opens as a vaudeville stage and movie theater, designed by Fred Bishop who also designed Richmond\'s Byrd Theatre.',
      trivia: 'Did you know? The Beacon Theatre was saved from collapse and reopened in 2014 with a sold-out Leon Russell concert!',
      icon: Star,
      color: 'bg-[#BF0A30]'
    },
    {
      year: 1940,
      title: 'WWII Industrial Center',
      description: 'New industries like Tubize artificial silk, ANCO/Allied Chemical manufacturing, and Camp Lee military base fuel continued growth.',
      trivia: 'Did you know? Hopewell\'s industries were crucial to America\'s World War II effort!',
      icon: Factory,
      color: 'bg-[#002868]'
    },
    {
      year: 2026,
      title: 'VA250 Celebration',
      description: 'Hopewell joins the nation in celebrating America\'s 250th anniversary with special events highlighting four centuries of history.',
      trivia: 'Did you know? VA250 will be the largest patriotic celebration in American history, and Hopewell has over 400 years of stories to share!',
      icon: Flag,
      color: 'bg-[#BF0A30]'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-blue-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#002868] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
            Four Centuries of History
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the pivotal moments that shaped Hopewell and America from 1613 to today
          </p>
        </motion.div>

        {/* Enhanced Desktop Timeline */}
        <div className="hidden md:block relative overflow-visible pb-32">
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] transform -translate-y-1/2 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          
          <div className="flex justify-between items-center relative min-w-[1000px] py-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEvenIndex = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredEvent(index)}
                  onHoverEnd={() => setHoveredEvent(null)}
                  onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                >
                  <motion.div 
                    className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center mb-4 shadow-lg relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 10px 30px rgba(0, 40, 104, 0.3)",
                    }}
                    animate={hoveredEvent === index ? {
                      boxShadow: [
                        "0 0 20px rgba(191, 10, 48, 0.5)",
                        "0 0 40px rgba(191, 10, 48, 0.3)",
                        "0 0 20px rgba(191, 10, 48, 0.5)",
                      ],
                    } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                    
                    {/* Glowing effect */}
                    <motion.div
                      className="absolute inset-0 bg-white rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={hoveredEvent === index ? { 
                        scale: [0, 1.5], 
                        opacity: [0.3, 0] 
                      } : {}}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="font-bold text-[#002868] text-lg"
                      animate={hoveredEvent === index ? { scale: 1.1 } : { scale: 1 }}
                    >
                      {event.year}
                    </motion.div>
                    <div className="text-sm text-gray-600 max-w-24">{event.title}</div>
                  </div>

                  {/* Fixed Animated Tooltip */}
                  <AnimatePresence>
                    {hoveredEvent === index && (
                      <motion.div
                        className={`absolute ${isEvenIndex ? 'top-full mt-8' : 'bottom-full mb-8'} left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg border-2 border-[#BF0A30] max-w-xs z-50`}
                        initial={{ opacity: 0, y: isEvenIndex ? -10 : 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: isEvenIndex ? -10 : 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-sm">
                          <div className="font-semibold text-[#002868] mb-2">{event.title}</div>
                          <div className="text-gray-600 text-xs">{event.description}</div>
                        </div>
                        <div className={`absolute ${isEvenIndex ? 'bottom-full' : 'top-full'} left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 ${isEvenIndex ? 'border-b-4 border-transparent border-b-[#BF0A30]' : 'border-t-4 border-transparent border-t-[#BF0A30]'}`}></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={index}
                className="flex items-start space-x-4 cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
              >
                <motion.div 
                  className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <div className="font-bold text-[#002868] text-lg">{event.year}</div>
                  <div className="font-semibold text-gray-800">{event.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{event.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Event Details Modal */}
        <AnimatePresence>
          {selectedEvent !== null && (
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
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
                
                <div className="text-center">
                  <motion.div 
                    className={`w-16 h-16 ${timelineEvents[selectedEvent].color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    {React.createElement(timelineEvents[selectedEvent].icon, {
                      className: "w-8 h-8 text-white"
                    })}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#002868] mb-2">
                    {timelineEvents[selectedEvent].year}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    {timelineEvents[selectedEvent].title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {timelineEvents[selectedEvent].description}
                  </p>
                  <motion.div 
                    className="bg-blue-50 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-[#002868] font-semibold">
                      {timelineEvents[selectedEvent].trivia}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TimelineEnhanced;
