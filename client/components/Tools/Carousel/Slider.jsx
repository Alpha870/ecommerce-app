import React from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "./img/Data.png";
import designer from "./img/Designer1.png";
import land1 from "./img/Landing1.png";
import land2 from "./img/Landing2.png";
import web from "./img/Web.png";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="img-design" src={land1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="img-design" src={data} alt="Second slide" />
        </Carousel.Item >
        <Carousel.Item interval={2000}>
          <img className="img-design" src={designer} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="img-design" src={land2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="img-design" src={web} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
