
import React, { useState, useEffect } from 'react';
import HeroEnhanced from '../components/HeroEnhanced';
import Navigation from '../components/Navigation';
import TimelineEnhanced from '../components/TimelineEnhanced';
import EventCalendarEnhanced from '../components/EventCalendarEnhanced';
import SitesGalleryEnhanced from '../components/SitesGalleryEnhanced';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

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
      <HeroEnhanced onScrollToSection={scrollToSection} />
      
      <motion.section 
        id="about" 
        className="py-20 bg-gradient-to-b from-white to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-[#002868] mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0, 40, 104, 0.3)",
                  "0 0 30px rgba(0, 40, 104, 0.2)",
                  "0 0 20px rgba(0, 40, 104, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              What is VA250?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The VA250 celebration marks 250 years since the American Revolution, honoring Virginia's pivotal role 
              in the nation's founding and Hopewell's place at the crossroads of American history.
            </motion.p>
            <motion.h3 
              className="text-3xl font-bold text-[#002868] mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hopewell's Unique Story
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hopewell, formerly known as City Point, stands on a bluff where the James and Appomattox rivers meet—a 
              location that has made it a center of commerce, conflict, and community for over 400 years. From its 
              colonial roots to its role in the Civil War and industrial innovation, Hopewell continues to make history.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                year: "1613",
                title: "Colonial Founding",
                description: "City Point founded by Sir Thomas Dale, establishing one of Virginia's most strategic settlements at the confluence of two major rivers."
              },
              {
                year: "1864",
                title: "Civil War Headquarters",
                description: "General Grant's headquarters at Appomattox Manor made City Point one of the world's busiest ports during the Siege of Petersburg."
              },
              {
                year: "1916",
                title: "Industrial Boom",
                description: "DuPont's arrival triggered explosive growth, with Hopewell's population reaching 40,000 as it became an industrial powerhouse."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#BF0A30] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(191, 10, 48, 0.3)"
                  }}
                >
                  <span className="text-2xl font-bold text-white">{item.year}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-[#002868] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Cultural History Section */}
          <motion.div 
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-red-50 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
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
          </motion.div>
        </div>
      </motion.section>

      <TimelineEnhanced />
      <EventCalendarEnhanced />
      <SitesGalleryEnhanced />
      <Footer />
      <BackToTop isVisible={isVisible} onClick={scrollToTop} />
    </div>
  );
};

export default Index;
