import React from 'react'
import masakali from '../../../../assets/images/masakali.png';
import { Link, useNavigate } from 'react-router-dom';
const ContainerMenu1 = () => {
    const navigate = useNavigate();
    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };

    
    return (
        <>
            <div className="container menu1">
                <div className="row">

                    <nav className="navbar navbar-expand-md navbar-dark fixed-top p-0" id="banner">
                        <div className="container">
                            <Link className="navbar-brand" onClick={handleClick('/')} style={{ padding: '.5rem 1rem' }} to='/'>
                                <span>
                                    <img
                                        src={masakali} style={{ width: '9rem' }} alt="Masakali Logo">
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
                                        <Link className="nav-link" onClick={handleClick('/')} to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={handleClick('/about-us')} to='/about-us'>About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={handleClick('/menu')} to='/menu'>Menu</Link>
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
                                        <Link className="nav-link" onClick={handleClick('/contact')} to='/contact'>Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={handleClick('/order-online')} to='/order-online'>Order Online</Link>
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