import React from "react";
import Carousel from "react-bootstrap/Carousel";

const MySlider = ({ img1, img2, img3, img4, img5 }) => {
  return (
    <>
      <Carousel style={{ width: "100%" }}>
        <Carousel.Item interval={5000}>
          <img className="img-design" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="img-design" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="img-design" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="img-design" src={img4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="img-design" src={img5} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MySlider;
