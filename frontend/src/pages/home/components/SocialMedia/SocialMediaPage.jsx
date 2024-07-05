import React, { Fragment } from 'react'
import image1 from '../../../../assets/Insta_images/1.jpg'
import image2 from '../../../../assets/Insta_images/2.jpg'
import image3 from '../../../../assets/Insta_images/3.jpg'
import image4 from '../../../../assets/Insta_images/4.jpg'
import image5 from '../../../../assets/Insta_images/5.jpg'
import image6 from '../../../../assets/Insta_images/6.jpg'
import image7 from '../../../../assets/Insta_images/7.jpg'
import image8 from '../../../../assets/Insta_images/8.jpg'
import video1 from '../../../../assets/Insta_images/9.gif'
import video2 from '../../../../assets/Insta_images/10.gif'

const SocialMediaPage = () => {
  return (
    <Fragment>
        <center>
        <h3 class="restaurant-title">Check Out </h3>
        <h1 class="restaurant-subtitle" style={{fontFamily: 'Philosopher', fontWeight: 'bold',fontSize: '34px'}}>
            Our Social Media</h1><br /><br />
    </center>
    <div class="img-grid">
        <a href="https://www.instagram.com/"> <img  src={video1}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img  src={video2}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img src={image1}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img src={image2}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img src={image3}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img src={image4}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img src={image5}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img src={image6}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img src={image7}
                alt="Masakali Indian Cuisine Instagram" /></a>
        <a href="https://www.instagram.com/"> <img src={image8}
                alt="Masakali Indian Cuisine Instagram" /></a>

    </div>
    </Fragment>
  )
}

export default SocialMediaPage