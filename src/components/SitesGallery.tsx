
import React from 'react';
import { MapPin, Clock, Camera } from 'lucide-react';

const SitesGallery = () => {
  const historicSites = [
    {
      id: 1,
      name: 'Appomattox Manor',
      description: 'Grant\'s Civil War headquarters, now part of Petersburg National Battlefield. Where President Lincoln visited twice during the siege and Union hospitals treated up to 10,000 patients.',
      image: '/hopewell-uploads/3d6ba77e-c74b-47fe-919e-0a1a2a29d809.png',
      hours: 'Daily 9 AM - 5 PM',
      address: 'Cedar Lane, Hopewell, VA',
      details: 'General Grant set up headquarters here in 1864, making City Point one of the world\'s busiest ports during the Petersburg Siege.'
    },
    {
      id: 2,
      name: 'Weston Manor',
      description: 'Built in 1789 by William and Christian Eppes Gilliam, this Georgian plantation house showcases the rise of ordinary people through extraordinary times, with original interiors and restored dependencies.',
      image: '/hopewell-uploads/4ef163f0-80dd-406a-9417-18f599ad2fb4.png',
      hours: 'Tours: Weekdays 10 AM - 3 PM',
      address: 'Weston Lane, Hopewell, VA',
      details: 'Listed on the National Register of Historic Places. Features distinctive original moldings, wainscoting, and reconstructed summer kitchen and laundry from 2008 archaeological research.'
    },
    {
      id: 3,
      name: 'Beacon Theatre',
      description: 'Art Deco and Colonial Revival gem opened in 1928, designed by Fred Bishop (architect of Richmond\'s Byrd Theatre). Restored and reopened in 2014 as Hopewell\'s signature venue.',
      image: '/hopewell-uploads/344b973c-e994-4ca6-9ad0-c656d473c838.png',
      hours: 'Event Schedule Varies',
      address: 'Main Street, Hopewell, VA',
      details: 'Served as vaudeville stage and movie theater before major city restoration. Grand reopening featured sold-out Leon Russell concert. Listed on National Register of Historic Places.'
    },
    {
      id: 4,
      name: 'Historic Downtown',
      description: 'Charming brick buildings housing local shops, restaurants, and community spaces reflecting Hopewell\'s industrial heritage and modern revitalization efforts.',
      image: '/hopewell-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png',
      hours: 'Always Open',
      address: 'Downtown Hopewell, VA',
      details: 'Part of the City Point Historic District, showcasing architectural evolution from colonial tobacco warehouses to 20th-century industrial buildings.'
    },
    {
      id: 5,
      name: 'City Point Waterfront',
      description: 'Scenic boardwalk and park at the historic confluence of the James and Appomattox rivers, where City Point was strategically founded in 1613.',
      image: '/hopewell-uploads/610d8137-4117-41b8-9ccc-545384c32298.png',
      hours: 'Dawn to Dusk',
      address: 'City Point, Hopewell, VA',
      details: 'The strategic location that made City Point a center of commerce, conflict, and community for over 400 years. Features walking trails and river views.'
    },
    {
      id: 6,
      name: 'Hopewell Community Center',
      description: '38,000-square-foot recreation center with full gym, 25-meter heated indoor pool, racquetball courts, and meeting rooms serving all ages.',
      image: '/hopewell-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png',
      hours: 'Varies by Program',
      address: '300 N Main St, Hopewell, VA',
      details: 'Modern community hub offering fitness, recreation, and event hosting for residents and visitors.'
    },
    {
      id: 7,
      name: 'Appomattox Regional Library',
      description: 'Founded in 1930, ARLS provides lifelong learning and community programming. The flagship Maude Langhorne Nelson Library honors Hopewell\'s first librarian.',
      image: '/hopewell-uploads/bcd6728f-2e29-4995-9579-b5114652ca3c.png',
      hours: 'Mon-Sat Various Hours',
      address: 'Hopewell, VA',
      details: 'Serves Hopewell, Prince George, and Dinwiddie counties through eight locations, fostering community connections and knowledge access.'
    },
    {
      id: 8,
      name: 'City Point National Cemetery',
      description: 'Historic cemetery reflecting Hopewell\'s role in American military history, particularly during the Civil War period.',
      image: '/hopewell-uploads/610d8137-4117-41b8-9ccc-545384c32298.png',
      hours: 'Dawn to Dusk',
      address: 'City Point, Hopewell, VA',
      details: 'Part of the City Point Historic District, preserving the memory of those who served during America\'s defining conflicts.'
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
            Explore the places where four centuries of American history come alive
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
                  alt={`${site.name}, historic landmark in Hopewell, Virginia`}
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
                    Learn More
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
