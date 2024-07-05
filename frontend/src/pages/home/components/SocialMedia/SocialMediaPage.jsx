import React, { Fragment, useEffect, useState, useRef } from 'react'
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
import './SocialMediaPage.css'

const SocialMediaPage = () => {
    const [loaded, setLoaded] = useState(false);
    const imagesRef = useRef([]);
    const borderStyle = {
        borderStyle: 'solid',
        borderRadius: '10px',
        borderColor: 'white'
    }
    //fade in and out effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        entry.target.classList.remove('fade-out');
                    } else {
                        // This else part handles the fade-out when scrolling back up
                        entry.target.classList.remove('fade-in');
                        entry.target.classList.add('fade-out');
                    }
                });
            },
            {
                threshold: 0.1 // Adjust this value based on when you want the fade-in to trigger
            }
        );
    
        imagesRef.current.forEach((img) => {
            if (img) observer.observe(img);
        });
    
        return () => {
            imagesRef.current.forEach((img) => {
                if (img) observer.unobserve(img);
            });
        };
    }, [loaded]); // Dependency array ensures effect runs once; adjust as needed

    // Function to add elements to the ref array in a way that allows cleanup
    const addToRefs = (el) => {
        if (el && !imagesRef.current.includes(el)) {
            imagesRef.current.push(el);
        }
    };
  return (
    <Fragment>
        <center>
        <h3 className="restaurant-title">Check Out </h3>
        <h1 className="restaurant-subtitle" style={{fontFamily: 'Philosopher', fontWeight: 'bold',fontSize: '34px'}}>
            Our Social Media</h1><br /><br />
    </center>
    <div className={`img-grid`}>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={video1}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle}/></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={video2}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle}/></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={image1}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle}/></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={image2}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle}/></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={image3}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle}/></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={image4}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle}/></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={image5}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle}/></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={image6}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle}/></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={image7}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle} /></a>
        <a href="https://www.instagram.com/masakaliottawa/"> <img ref={addToRefs} src={image8}
                alt="Masakali Indian Cuisine Instagram" style={borderStyle} /></a>

    </div>
    </Fragment>
  )
}

export default SocialMediaPage