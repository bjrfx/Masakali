import React, { Fragment } from 'react'
import Navbar from '../home/components/Navbar/Navbar'
import MenuTabs from './MenuTabs'
import HeaderImage from '../about/HeaderImage/HeaderImage'
import bgimage from '../../assets/images/1520x400atopb.png';

const Menu = () => {
    return (
        <Fragment>
            <Navbar />
            <HeaderImage bgimage={bgimage} name='Menu'/>
            <MenuTabs />
        </Fragment>
    )
}

export default Menu