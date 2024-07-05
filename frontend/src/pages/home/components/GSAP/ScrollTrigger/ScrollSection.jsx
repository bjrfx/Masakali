import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './ScrollSection.css';
import image2 from '../../../../../assets/carousel/new/ScrollImages-01.png'
import image3 from '../../../../../assets/carousel/new/ScrollImages-02.png'
import image4 from '../../../../../assets/carousel/new/ScrollImages-03.png'
import image5 from '../../../../../assets/carousel/new/ScrollImages-04.png'
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {

            pin.kill();
        };
    }, []);

    return (
        <section className="scroll-section-outer">
            {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">

                    <div className="scroll-section">
                        <section>
                            {/* <h3>Section 1</h3> */}
                            <img src={image2} alt="" />
                        </section>
                    </div>
                    <div className="scroll-section">
                        <section>
                            {/* <h3>Section 1</h3> */}
                            <img src={image3} alt="" />
                        </section>
                    </div>
                    <div className="scroll-section">
                        <section>
                            {/* <h3>Section 1</h3> */}
                            <img src={image4} alt="" />
                        </section>
                    </div>
                    <div className="scroll-section">
                        <section>
                            {/* <h3>Section 1</h3> */}
                            <img src={image5} alt="" />
                        </section>
                    </div>
                    <div className="scroll-section">
                        <section>
                            <Typography sx={{ color: '#C6A66D', fontFamily: 'Philosopher' }} component='p' variant="h1">VIEW FOOD MENU</Typography>
                            <Button variant="outlined" sx={{
                                left: '47%',
                                marginTop: '20px',
                                color: '#C6A66D', // Text color
                                backgroundColor: '', // Background color
                                borderColor: '#C6A66D', // Border color for outlined variant
                                '&:hover': {
                                    backgroundColor: '#C6A66D', // Change for hover state
                                    borderColor: '#C6A66D',
                                    color: 'white',
                                    fontFamily: 'Philosopher'
                                }
                            }}><Link to='/menu'>Open Menu</Link></Button>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection;