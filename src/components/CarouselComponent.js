// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';

import carousel1 from '../assets/images/carousel1.jpg';
import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';
import carousel4 from '../assets/images/carousel4.jpg';
import carousel5 from '../assets/images/carousel5.jpg';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
