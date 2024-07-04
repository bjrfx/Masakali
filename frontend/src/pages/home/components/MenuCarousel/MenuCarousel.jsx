import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from '../../../../assets/carousel/1.png';
import image2 from '../../../../assets/carousel/2.png';
import image3 from '../../../../assets/carousel/3.png';
// import image4 from '../../../../assets/carousel/4.png';
// import image5 from '../../../../assets/carousel/5.png';
// import image6 from '../../../../assets/carousel/6.png';
// import image7 from '../../../../assets/carousel/7.png';

function MenuCarousel() {
    const customCarouselStyle = {
        maxWidth: '1200px',
        margin: 'auto'
    }
    const customCarouselImageStyle = {
        width: '100%',
        height: 'auto'
    }
  return (
    <Carousel style={customCarouselStyle} fade={true}>
      <Carousel.Item interval={1000}>
        <img src={image1} alt="food" style={customCarouselImageStyle} />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={image2} alt="food" style={customCarouselImageStyle}/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={image3} alt="food" style={customCarouselImageStyle}/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MenuCarousel;