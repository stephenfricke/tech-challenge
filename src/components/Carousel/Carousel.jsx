import React from 'react';
import { Carousel as BootstrapCarousel, Button } from 'react-bootstrap';
import { CAROUSEL_SLIDES } from '../../constants';
import '../../styles/Carousel.css';

const Carousel = () => {
  const carouselItems = CAROUSEL_SLIDES.map(item => (
    <BootstrapCarousel.Item key={item.id}>
      <div className="slide" />
      <BootstrapCarousel.Caption>
        <div className="caption_content mb-3">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <Button variant="primary">Sign up today</Button>
        </div>
      </BootstrapCarousel.Caption>
    </BootstrapCarousel.Item>
  ));
  return (
    <BootstrapCarousel interval={null}>
      {carouselItems}
    </BootstrapCarousel>
  );
};

export default Carousel;
