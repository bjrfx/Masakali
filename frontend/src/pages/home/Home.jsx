import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import VideoSlider from './components/BackgroundVIdeoPlay/VideoSlider';
import ScrollSection from './components/GSAP/ScrollTrigger/ScrollSection';
import MobileMenu from '../menu/Mobile/MobileMenu';
// import MenuCarousel from './components/MenuCarousel/MenuCarousel';
import Footer from './components/Footer/Footer';
import SocialMediaPage from './components/SocialMedia/SocialMediaPage';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar />
      <VideoSlider />
      <About />
      {isMobile ? <MobileMenu /> : <ScrollSection />}
      {/* <MenuCarousel /> */}
      <SocialMediaPage />
      <Footer />
    </div>
  );
};

export default Home;