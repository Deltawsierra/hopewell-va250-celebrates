
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Timeline from '../components/Timeline';
import EventCalendar from '../components/EventCalendar';
import SitesGallery from '../components/SitesGallery';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onScrollToSection={scrollToSection} />
      <Hero onScrollToSection={scrollToSection} />
      
      <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002868] mb-6">
              What is VA250?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              The VA250 celebration marks 250 years since the American Revolution, honoring Virginia's pivotal role 
              in the nation's founding and Hopewell's place at the crossroads of American history.
            </p>
            <h3 className="text-3xl font-bold text-[#002868] mb-4">
              Hopewell's Unique Story
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Hopewell, formerly known as City Point, stands on a bluff where the James and Appomattox rivers meet—a 
              location that has made it a center of commerce, conflict, and community for over 400 years. From its 
              colonial roots to its role in the Civil War and industrial innovation, Hopewell continues to make history.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#BF0A30] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1613</span>
              </div>
              <h3 className="text-xl font-bold text-[#002868] mb-2">Colonial Founding</h3>
              <p className="text-gray-600">City Point founded by Sir Thomas Dale, establishing one of Virginia's most strategic settlements at the confluence of two major rivers.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#BF0A30] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1864</span>
              </div>
              <h3 className="text-xl font-bold text-[#002868] mb-2">Civil War Headquarters</h3>
              <p className="text-gray-600">General Grant's headquarters at Appomattox Manor made City Point one of the world's busiest ports during the Siege of Petersburg.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#BF0A30] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1916</span>
              </div>
              <h3 className="text-xl font-bold text-[#002868] mb-2">Industrial Boom</h3>
              <p className="text-gray-600">DuPont's arrival triggered explosive growth, with Hopewell's population reaching 40,000 as it became an industrial powerhouse.</p>
            </div>
          </div>

          {/* Cultural History Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-red-50 rounded-xl">
            <h3 className="text-3xl font-bold text-[#002868] mb-4 text-center">
              Cultural & African American History
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Hopewell's story is also a story of diversity, perseverance, and achievement. From Algonquian-speaking 
              tribes and the earliest settlers, to the vibrant African American community whose oral histories and 
              landmarks enrich the city today, Hopewell embodies the pursuit of the American Dream.
            </p>
            <div className="mt-6 text-center">
              <p className="text-[#002868] font-semibold">
                The African American Oral History Project (2005) preserved twelve local citizens' stories, 
                highlighting eight recognized African American historic sites including Kippax Plantation and City Point Historic District.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <EventCalendar />
      <SitesGallery />
      <Footer />
      <BackToTop isVisible={isVisible} onClick={scrollToTop} />
    </div>
  );
};

export default Index;
