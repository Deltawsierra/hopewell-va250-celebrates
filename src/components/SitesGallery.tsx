
import React from 'react';
import { MapPin, Clock, Camera } from 'lucide-react';

const SitesGallery = () => {
  const historicSites = [
    {
      id: 1,
      name: 'Beacon Theatre',
      description: 'Historic theater with iconic neon marquee, a cultural landmark since the 1920s.',
      image: '/lovable-uploads/344b973c-e994-4ca6-9ad0-c656d473c838.png',
      hours: 'Tours: Weekends 2-4 PM',
      address: 'Main Street, Hopewell, VA'
    },
    {
      id: 2,
      name: 'Appomattox Manor',
      description: 'Grant\'s Civil War headquarters, where history was made during the Siege of Petersburg.',
      image: '/lovable-uploads/3d6ba77e-c74b-47fe-919e-0a1a2a29d809.png',
      hours: 'Daily 9 AM - 5 PM',
      address: 'Cedar Lane, Hopewell, VA'
    },
    {
      id: 3,
      name: 'Weston Manor',
      description: 'Elegant Georgian plantation house showcasing 18th-century Virginia architecture.',
      image: '/lovable-uploads/4ef163f0-80dd-406a-9417-18f599ad2fb4.png',
      hours: 'Tours: Weekdays 10 AM - 3 PM',
      address: 'Weston Lane, Hopewell, VA'
    },
    {
      id: 4,
      name: 'Historic Downtown',
      description: 'Charming brick buildings housing local shops, restaurants, and community spaces.',
      image: '/lovable-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png',
      hours: 'Always Open',
      address: 'Downtown Hopewell, VA'
    },
    {
      id: 5,
      name: 'City Point Waterfront',
      description: 'Scenic boardwalk and park at the confluence of the James and Appomattox rivers.',
      image: '/lovable-uploads/610d8137-4117-41b8-9ccc-545384c32298.png',
      hours: 'Dawn to Dusk',
      address: 'City Point, Hopewell, VA'
    }
  ];

  return (
    <section id="sites" className="py-20 bg-gradient-to-b from-red-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
            Historic Sites & Landmarks
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the places where American history comes alive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {historicSites.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-300">
                    <Camera className="w-4 h-4 text-[#002868]" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002868] mb-3 group-hover:text-[#BF0A30] transition-colors duration-300">
                  {site.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {site.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-[#BF0A30]" />
                    <span className="text-sm">{site.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-[#BF0A30]" />
                    <span className="text-sm">{site.address}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#002868] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    Visit Site
                  </button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitesGallery;
