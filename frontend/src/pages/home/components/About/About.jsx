import React from 'react'
import image1 from '../../../../assets/imagesnew/image_1.jpeg'
import image2 from '../../../../assets/imagesnew/image_2.jpeg'

const About = () => {
  return (
    <>
        <div className="container contsty">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-lg-5 col-md-12">
                <h1 className="about wow fadeInDown" data-wow-duration="2s">About</h1>
                <h4 className="about-subtitle wow fadeInDown" data-wow-duration="2s"
                    style={{fontFamily: 'Philosopher', fontWeight: 'bold', fontSize: '34px'}}>Welcome to Masakali Indian Cuisine.</h4>
                <hr className="hr" />
                <p className="about-des wow fadeInDown" data-wow-duration="2s" style={{fontSize: '25px'}}>At Masakali, we're passionate about sharing the vibrant flavors of India. 
                    We take pride in using fresh ingredients and time-tested recipes to create a delectable menu that captures the essence of Indian cuisine. From aromatic curries to succulent tandoori dishes, 
                    we offer a culinary journey through India's rich and diverse food traditions.

<br />
"We invite you to join us and experience the warmth of Indian hospitality."
                </p>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-7">
                  <i className="fa fa-facebook fasty" aria-hidden="true"></i>
                  <i className="fa fa-instagram fasty" aria-hidden="true"></i>
                  <i className="fa fa-twitter fasty" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <img src={image1} className="" alt="Clove Art of Dining" />
            </div>
            <div className="col-lg-3 col-md-6">
                <img src={image2} className="" alt="Clove Art of Dining" style={{marginTop:'2px'}} />
            </div>
        </div>
    </div>
    </>
  )
}

export default About