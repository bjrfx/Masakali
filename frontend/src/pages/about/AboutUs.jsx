import React from 'react'
import Navbar from '../home/components/Navbar/Navbar'
import HeaderImage from './HeaderImage/HeaderImage'
import bgimage from '../../assets/images/1520x400atopb.png';


const AboutUs = () => {
  return (
   <>
    <Navbar />
   <HeaderImage bgimage={bgimage} name='About Us'/>
   </>
  )
}

export default AboutUs