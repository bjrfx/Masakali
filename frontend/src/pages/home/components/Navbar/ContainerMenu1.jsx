import React from 'react'
import logoclove from '../../../../assets/images/masakali.png';
import { Link } from 'react-router-dom';
const ContainerMenu1 = () => {
    return (
        <>
            <div className="container menu1">
                <div className="row">

                    <nav className="navbar navbar-expand-md navbar-dark fixed-top p-0" id="banner">
                        <div className="container">
                            <Link className="navbar-brand" style={{ padding: '.5rem 1rem' }} to='/'>
                                <span>
                                    <img
                                        src={logoclove} style={{ width: '9rem' }} alt="Clove Logo">
                                    </img>
                                        </span>
                            </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
                                style={{ marginRight: '60px' }}>
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse margintop1" id="collapsibleNavbar">
                                <ul className="navbar-nav ml-auto ">
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/about-us'>About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/menu'>Menu</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a href="#!" className="nav-link">Menu</a>
                                        <ul className="nav-dropdown">
                                            <li className="nav-item">
                                                <a href="Menu.html" className="nav-link">Masakali's Menu</a>
                                            </li>

                                        </ul>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/contact'>Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/order-online'>Order Online</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default ContainerMenu1