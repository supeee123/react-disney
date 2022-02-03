
import { Carousel } from "react-bootstrap";
const Carousel1 = () => {
    return ( 
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block "
      style={{height:"500px",width:"100vw"}}
      src="assset/slider-badag.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Onward</h3>
      <p>Onward is a 2020 american computer animated urban fantasy adventure film</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      style={{height:"500px",width:"100vw"}}
      src="assset/slider-scales.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Wanda vision season 2 trailer</h3>
      <p>watch wanda vision season 2 new teaser on disney hotstar</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      style={{height:"500px",width:"100vw"}}
      src="assset/slider-scale.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Wanda vision </h3>
      <p>wanda vision a american tv miniseries based on marvel comics</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      style={{height:"500px",width:"100vw"}}
      src="assset/slider-badging.jpg"
      alt="First slide"
    />
     <Carousel.Caption>
      <h3>Burrow</h3>
      <p>A young rabbit embarks on a journey to dig the burrow of her dreams</p>
    </Carousel.Caption>
     </Carousel.Item>
</Carousel>
     
        </div>
     );
}
 
export default Carousel1;