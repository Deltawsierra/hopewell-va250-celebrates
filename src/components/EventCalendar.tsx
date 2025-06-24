
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Star } from 'lucide-react';

const EventCalendar = () => {
  const [selectedView, setSelectedView] = useState<'month' | 'list'>('list');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const events = [
    {
      id: 1,
      title: 'VA250 Kickoff at Weston Manor',
      date: '2026-07-04',
      time: '2:00 PM',
      location: 'Weston Manor',
      type: 'history',
      description: 'Grand opening celebration with tours, reenactments, live music, and colonial demonstrations at the historic Georgian plantation house.',
      image: '/lovable-uploads/4ef163f0-80dd-406a-9417-18f599ad2fb4.png'
    },
    {
      id: 2,
      title: 'City Point History Walk',
      date: '2026-08-15',
      time: '10:00 AM',
      location: 'City Point Waterfront',
      type: 'history',
      description: 'Monthly guided walking tour exploring 400+ years of history at the confluence of the James and Appomattox rivers.',
      image: '/lovable-uploads/610d8137-4117-41b8-9ccc-545384c32298.png'
    },
    {
      id: 3,
      title: 'Family Day at Beacon Theatre',
      date: '2026-08-17',
      time: '11:00 AM',
      location: 'Beacon Theatre',
      type: 'family',
      description: 'Enjoy live music, local food, and free tours of the historic Art Deco theatre with family-friendly activities.',
      image: '/lovable-uploads/344b973c-e994-4ca6-9ad0-c656d473c838.png'
    },
    {
      id: 4,
      title: 'Civil War Living History',
      date: '2026-09-15',
      time: '10:00 AM',
      location: 'Appomattox Manor',
      type: 'history',
      description: 'Experience Grant\'s headquarters come alive with authentic Civil War demonstrations and historical interpretation.',
      image: '/lovable-uploads/3d6ba77e-c74b-47fe-919e-0a1a2a29d809.png'
    },
    {
      id: 5,
      title: 'VA250 Community Festival',
      date: '2026-10-12',
      time: '9:00 AM',
      location: 'Downtown Hopewell',
      type: 'community',
      description: 'Celebrate America\'s 250th with local vendors, live music, family activities, and exhibits showcasing Hopewell\'s 400+ year history.',
      image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png'
    },
    {
      id: 6,
      title: 'Industrial Heritage Tour',
      date: '2026-11-08',
      time: '1:00 PM',
      location: 'Historic Downtown',
      type: 'history',
      description: 'Explore Hopewell\'s transformation from colonial tobacco port to 20th-century industrial powerhouse.',
      image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png'
    }
  ];

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'family', label: 'Family' },
    { value: 'history', label: 'History' },
    { value: 'community', label: 'Community' },
    { value: 'music', label: 'Music' }
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
            Upcoming VA250 Events in Hopewell
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for memorable celebrations honoring America's heritage and Hopewell's unique place in history
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedView('list')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                selectedView === 'list'
                  ? 'bg-[#002868] text-white'
                  : 'text-gray-600 hover:text-[#002868]'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setSelectedView('month')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                selectedView === 'month'
                  ? 'bg-[#002868] text-white'
                  : 'text-gray-600 hover:text-[#002868]'
              }`}
            >
              Month View
            </button>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedFilter(type.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedFilter === type.value
                    ? 'bg-[#BF0A30] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    event.type === 'family' ? 'bg-green-500' :
                    event.type === 'history' ? 'bg-blue-500' :
                    event.type === 'community' ? 'bg-purple-500' :
                    'bg-orange-500'
                  }`}>
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002868] mb-3 group-hover:text-[#BF0A30] transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-[#BF0A30]" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-[#BF0A30]" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-[#BF0A30]" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">
                  {event.description}
                </p>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#002868] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors duration-300">
                    <Star className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventCalendar;
