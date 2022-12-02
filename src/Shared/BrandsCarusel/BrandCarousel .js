import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brad1 from "../../../src/assets/brands/Brand1.png"
import Brad2 from "../../../src/assets/brands/Brand2.png"


const BrandCarousel  = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brad1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brad2}
          alt="Second slide"
        />

        
      </Carousel.Item>
    

        
    </Carousel>
        </div>
    );
};

export default BrandCarousel ;