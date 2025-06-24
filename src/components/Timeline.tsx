
import React, { useState } from 'react';
import { Calendar, Star, Home, Flag } from 'lucide-react';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      year: 1613,
      title: 'City Point Founded',
      description: 'First settled as Bermuda Cittie by Sir Thomas Dale, marking the beginning of one of Virginia\'s oldest communities.',
      trivia: 'Did you know? City Point was originally named after the Bermuda Company!',
      icon: Home,
      color: 'bg-[#002868]'
    },
    {
      year: 1789,
      title: 'Weston Manor Built',
      description: 'This Georgian-style plantation house was constructed, representing the prosperity of early American agriculture.',
      trivia: 'Did you know? Weston Manor features some of the finest colonial architecture in Virginia!',
      icon: Home,
      color: 'bg-[#BF0A30]'
    },
    {
      year: 1864,
      title: 'Grant\'s Headquarters',
      description: 'City Point served as Union General Ulysses S. Grant\'s headquarters during the Siege of Petersburg.',
      trivia: 'Did you know? Abraham Lincoln visited Hopewell multiple times during the Civil War!',
      icon: Flag,
      color: 'bg-[#002868]'
    },
    {
      year: 1916,
      title: 'Industrial Boom',
      description: 'DuPont established a major manufacturing facility, transforming Hopewell into an industrial center.',
      trivia: 'Did you know? Hopewell was once called the "Wonder City" due to its rapid industrial growth!',
      icon: Star,
      color: 'bg-[#BF0A30]'
    },
    {
      year: 1920,
      title: 'Beacon Theatre Opens',
      description: 'The iconic Beacon Theatre opened its doors, becoming a cultural centerpiece for the community.',
      trivia: 'Did you know? The Beacon Theatre\'s neon sign is a beloved landmark visible from miles away!',
      icon: Star,
      color: 'bg-[#002868]'
    },
    {
      year: 2026,
      title: 'VA250 Celebration',
      description: 'Hopewell joins the nation in celebrating America\'s 250th anniversary with special events and commemorations.',
      trivia: 'Did you know? VA250 will be the largest patriotic celebration in American history!',
      icon: Flag,
      color: 'bg-[#BF0A30]'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-blue-50 to-red-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
            Journey Through History
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the pivotal moments that shaped Hopewell and America
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868] transform -translate-y-1/2" />
          
          <div className="flex justify-between items-center relative">
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
