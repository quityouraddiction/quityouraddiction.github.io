import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    adaptiveHeight: true,
    autoplay: true,
    infinite: true,
    innerWidth: 400,
    outerWidth: 500,
    centerMode: true,
    centerPadding: "20px",
    swipeToSlide: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
  };
  return (
    <Slider className="w-full" {...settings}>
      {images.map((image, index) => (
        <div key={index}>{image}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
