import React from 'react'

const Tophead = () => {
    return (
        <div className="topheader hdr">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="topblock">
                            <div className="topnumber">
                                <p className="top">
                                    <i className="fa fa-mobile" style={{ fontSize: '20px' }}>
                                        <span style={{ marginLeft: '15px', fontFamily: 'Philosopher' }}><a
                                            href="tel:+1 (613) 878-3939" style={{ color: '#bbbbbb!important' }}>Stittsville: +1 (613)
                                            878-3939</a></span></i>

                                            <i className="fa fa-mobile" style={{ fontSize: '20px', marginLeft: '25px' }}>
                                            <span style={{ marginLeft: '15px', fontFamily: 'Philosopher' }}><a
                                        href="tel:+1 (613) 792-9777" style={{ color: '#bbbbbb!important' }}>1111 Wellington: +1 (613) 792-9777</a></span></i>
                            </p>
                        </div>
                        <div className="tophicon">
                            <a href="https://www.facebook.com/"
                                style={{ color: '#b9b6b6' }}>
                                <i className="fab fa-facebook-f fasty" aria-hidden="true"></i></a>
                            <a href="https://www.instagram.com/" style={{ color: '#b9b6b6' }}>
                                <i className="fab fa-instagram fasty" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
  )
}

export default Tophead