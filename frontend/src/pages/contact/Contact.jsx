import React, { Fragment } from 'react'
import Navbar from '../home/components/Navbar/Navbar'
import HeaderImage from '../about/HeaderImage/HeaderImage'
import bgimage from '../../assets/images/Header/1.png'
const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <HeaderImage bgimage={bgimage} name='Contact Us'/>
    </Fragment>
  )
}

export default Contact