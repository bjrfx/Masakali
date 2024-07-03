import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import VideoSlider from './components/BackgroundVIdeoPlay/VideoSlider'
import MenuCarousel from './components/MenuCarousel/MenuCarousel'

const Home = () => {
  return (
    <div>
      <Navbar />
      <VideoSlider /> 
      <About />
      <MenuCarousel />
    </div>
  )
}

export default Home