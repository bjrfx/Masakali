import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './ScrollSection.css';
import image2 from '../../../../../assets/carousel/ScrollImagesTrans-01.png'
import image3 from '../../../../../assets/carousel/ScrollImagesTrans-02.png'
import image4 from '../../../../../assets/carousel/ScrollImagesTrans-03.png'
import image5 from '../../../../../assets/carousel/ScrollImagesTrans-04.png'

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
            <img src={image3} alt=""  />
            </section>
          </div>
          <div className="scroll-section">
          <section>
            {/* <h3>Section 1</h3> */}
            <img src={image4} alt=""  />
            </section>
          </div>
          <div className="scroll-section">
          <section>
            {/* <h3>Section 1</h3> */}
            <img src={image5} alt=""  />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;