import React, { useState } from "react";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const { title, img, subtitle } = images[currentIndex];

  return (
    <div className="container">
      <div className="arrow l_arrow" onClick={handlePrev}>
        <ArrowBackIosIcon />
      </div>
      <div className="heading">
        <h1 className="title1">{title}</h1>
        <img src={img} alt={title} className="image" />
        <h3 className="subtitle3">{subtitle}</h3>
      </div>
      <div className="arrow r_arrow" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Carousel;
