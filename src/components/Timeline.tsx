
import React, { useState } from 'react';
import { Calendar, Star, Home, Flag, Factory, Ship } from 'lucide-react';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

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
    <section id="timeline" className="py-20 bg-gradient-to-b from-blue-50 to-red-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
            Four Centuries of History
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the pivotal moments that shaped Hopewell and America from 1613 to today
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative overflow-x-auto">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] transform -translate-y-1/2" />
          
          <div className="flex justify-between items-center relative min-w-[1000px]">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                >
                  <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#002868] text-lg">{event.year}</div>
                    <div className="text-sm text-gray-600 max-w-24">{event.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 cursor-pointer"
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
              >
                <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#002868] text-lg">{event.year}</div>
                  <div className="font-semibold text-gray-800">{event.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{event.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Event Details Modal */}
        {selectedEvent !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-scale-in">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
              
              <div className="text-center">
                <div className={`w-16 h-16 ${timelineEvents[selectedEvent].color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {React.createElement(timelineEvents[selectedEvent].icon, {
                    className: "w-8 h-8 text-white"
                  })}
                </div>
                
                <h3 className="text-2xl font-bold text-[#002868] mb-2">
                  {timelineEvents[selectedEvent].year}
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {timelineEvents[selectedEvent].title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {timelineEvents[selectedEvent].description}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-[#002868] font-semibold">
                    {timelineEvents[selectedEvent].trivia}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
