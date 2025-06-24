
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
              Celebrating America's Story
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From its founding as City Point in 1613 to its pivotal role in the Civil War, 
              Hopewell has been at the heart of America's journey. Join us as we celebrate 
              250 years of independence and honor our city's unique place in history.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#BF0A30] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1613</span>
              </div>
              <h3 className="text-xl font-bold text-[#002868] mb-2">Historic Founding</h3>
              <p className="text-gray-600">One of Virginia's oldest settlements, established at the confluence of the James and Appomattox rivers.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#BF0A30] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1864</span>
              </div>
              <h3 className="text-xl font-bold text-[#002868] mb-2">Civil War Hub</h3>
              <p className="text-gray-600">Grant's headquarters during the Siege of Petersburg, visited by President Lincoln.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#BF0A30] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2026</span>
              </div>
              <h3 className="text-xl font-bold text-[#002868] mb-2">VA250 Celebration</h3>
              <p className="text-gray-600">Celebrating America's 250th anniversary with community events and historic preservation.</p>
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
