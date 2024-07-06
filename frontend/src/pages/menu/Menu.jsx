import React, { Fragment } from 'react'
import Navbar from '../home/components/Navbar/Navbar'
import HeaderImage from '../about/HeaderImage/HeaderImage'
import bgimage from '../../assets/images/1520x400atopb.png';
import AccordianMenu from './AccordianMenu';



const Menu = () => {
    return (
        <Fragment>
            <Navbar />
            <HeaderImage bgimage={bgimage} name='Menu'/>
           <AccordianMenu />
        </Fragment>
    )
}

export default Menu