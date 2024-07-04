import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import VideoSlider from './components/BackgroundVIdeoPlay/VideoSlider'
import ScrollSection from './components/GSAP/ScrollTrigger/ScrollSection'

// import MenuCarousel from './components/MenuCarousel/MenuCarousel'
import Footer from './components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <VideoSlider /> 
      <About />
      <ScrollSection />
      {/* <MenuCarousel /> */}
      <Footer />
    </div>
  )
}

export default Home