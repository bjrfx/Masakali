import React from 'react'
import footerBG from '../../../../assets/Newfooternoborder1.png'
import MasakaliLogo from '../../../../assets/images/masakali.png'
import BG1 from '../../../../assets/Backgrounds/1.jpeg';
import BG1_30 from '../../../../assets/Backgrounds/1-30.png';

const Footer = () => {
    return (
        <>
            <div className="bgfooter" style={{ background: `url(${BG1_30})`, backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="row" style={{ padding: '45px 0px', color: 'white' }}>
                        <div className="col-lg-3 col-md-6">
                            <img src={MasakaliLogo} style={{ width: '250px' }} />
                            <p style={{ textAlign: 'justify', color: 'black', fontFamily: 'Philosopher' }}>We've built our reputation on providing exceptional guest service alongside 
                                an eclectic blend of modern and authentic Indian dishes. We believe in using fresh ingredients and traditional recipes to create a culinary adventure 
                                that's both innovative and true to its roots.</p>
                            <p><i className="far fa-envelope" style={{
                                fontSize: '13px', marginRight: '10px',
                                color: 'black'
                            }}></i><a href="mailto:masakaliottawa@gmail.com"
                                style={{ cursor: 'pointer', color: 'black', fontFamily: 'Philosopher', textTransform: 'lowercase' }}>masakaliottawa@gmail.com</a>
                            </p>
                            <p style={{ cursor: 'pointer' }}><i className="fa fa-mobile" style={{ fontSize: '18px', color: 'black' }}
                            ><span style={{ marginLeft: '15px', fontFamily: 'Philosopher' }}><a href="tel:+1 (613) 878-3939"
                                style={{ cursor: 'pointer', color: 'black', fontWeight: '100' }}>+1 (613) 878-3939</a></span></i></p>
                            <div className="row">
                                <div className="col-1 px-0">
                                    <div className="latest-news-img">
                                        <i className="fa fa-map-marker  fa1"
                                            style={{ paddingLeft: '15px', color: 'black', paddingTop: '4px' }}
                                            aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="col-10 px-0">
                                    <div className="latest-news-dtl">
                                        <p style={{ color: 'black', marginLeft: '10px' }}><a
                                            // href="https://goo.gl/maps/wYbx94rkhWvKdxaR9"
                                            style={{ cursor: 'pointer', color: 'black' }}> 5507 Hazeldean Rd, Stittsville</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p style={{ color: 'black !important' }}><i className="fas fa-clock" style={{
                                fontSize: '14px',
                                color: 'black'
                            }}></i><span style={{ marginLeft: '15px', fontFamily: 'Philosopher' }}>Mon-Sun : 11:30 AM - 09:00 PM</span> </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        </div>
                        <div className="col-lg-3 col-md-6 footertop">
                            <ul style={{ listStyleType: 'none', marginLeft: '0px', marginTop: '85px' }} className="menusty">
                                <li style={{ color: 'black', marginRight: '25px', marginTop: '25px', fontFamily: 'Philosopher' }}>
                                    <i className="fa fa-angle-double-right" style={{ marginRight: '25px' }}></i>
                                    <a href="index.html" style={{ color: 'black', cursor: 'pointer' }}>HOME</a>
                                </li>
                                <li style={{ color: 'black', marginRight: '25px', marginTop: '25px', fontFamily: 'Philosopher' }}>
                                    <i className="fa fa-angle-double-right" style={{ marginRight: '25px' }}></i>
                                    <a href="CocktailFables.html" style={{ color: 'black', cursor: 'pointer' }}>COCKTAIL FABLES</a>
                                </li>
                                <li style={{ color: 'black', marginRight: '25px', marginTop: '25px', fontFamily: 'Philosopher' }}>
                                    <i className="fa fa-angle-double-right" style={{ marginRight: '25px' }}></i>
                                    <a href="About.html" style={{ color: 'black', cursor: 'pointer' }}>ABOUT</a>
                                </li>
                                <li style={{ color: 'black', marginRight: '25px', marginTop: '25px', fontFamily: 'Philosopher' }}>
                                    <i className="fa fa-angle-double-right" style={{ marginRight: '25px' }}></i>
                                    <a href="Gift.html" style={{ color: 'black', cursor: 'pointer' }}>GIFT CARD</a>
                                </li>
                                <li style={{ color: 'black', marginRight: '25px', marginTop: '25px', fontFamily: 'Philosopher' }}>
                                    <i className="fa fa-angle-double-right" style={{ marginRight: '25px' }}></i>
                                    <a href="Menu.html" style={{ color: 'black', cursor: 'pointer' }}>MENU</a>
                                </li>
                                <li style={{ color: 'black', marginRight: '25px', marginTop: '25px', fontFamily: 'Philosopher' }}>
                                    <i className="fa fa-angle-double-right" style={{ marginRight: '25px' }}></i>
                                    <a href="Book.html" style={{ color: 'black', cursor: 'pointer' }}>PRIVATE DINING</a>
                                </li>
                                <li style={{ color: 'black', marginRight: '25px', marginTop: '25px', fontFamily: 'Philosopher' }}>
                                    <i className="fa fa-angle-double-right" style={{ marginRight: '25px' }}></i>
                                    <a href="orderonline.html" style={{ color: 'black', cursor: 'pointer' }}>ORDER ONLINE</a>
                                </li>
                                <li style={{ color: 'black', marginRight: '25px', marginTop: '25px', fontFamily: 'Philosopher' }}>
                                    <i className="fa fa-angle-double-right" style={{ marginRight: '25px' }}></i>
                                    <a href="Blogs/index.html" style={{ color: 'black', cursor: 'pointer' }}>BLOGS</a>
                                </li>
                            </ul>
                        </div>
                        {/* <div style={{ textAlign: "center", marginTop: "15px", color: "black" }} className="ft-social">
                            <a href="https://www.facebook.com/"
                                style={{ cursor: "pointer", color: "#b9b6b6" }}>
                                <i className="fab fa-facebook-f fasty" style={{ borderRadius: "50%", border: "1px solid black", padding: "10px 13px", fontSize: "20px", marginLeft: "12px" }}></i>
                            </a>
                            <a href="https://www.instagram.com/"
                                style={{ cursor: "pointer", color: "#b9b6b6" }}>
                                <i className="fab fa-instagram fasty" style={{ borderRadius: "50%", border: "1px solid black", padding: "10px", marginLeft: "12px", fontSize: "20px" }}></i>
                            </a>
                        </div> */}
                        <div className="col-md-12">
                        </div>
                        <div className="col-md-12">
                            <p style={{ color: "black", textAlign: "center", fontSize: "28px", marginTop: "0px", fontFamily: "'Philosopher'" }}>
                                <span style={{ color: "#bd945d" }}>Masakali </span>|| All Rights Reserved
                            </p>
                            <p style={{ textAlign: "center" }}>
                                <a
                                    style={{ color: "black", textAlign: "center", fontSize: "14px", fontFamily: "'Philosopher'" }}
                                    href="https://bdotsoftware.com/" target="_blank"> Powered by BDOT Software</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer