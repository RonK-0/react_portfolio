import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectImgSlider = ({ project_img }) => {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbsSlider, setThumbsSlider] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setMainSlider(sliderRef1);
    setThumbsSlider(sliderRef2);
  }, []);

  const settingsMain = {
    className: "mainSlider",
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    touchThreshold: 100,
    swipe: true,
    sipeToSlide: true,
    speed: 500,
    fade: true,
    focusOnSelect: true,
  };
  const settingsThumbs = {
    className: "thumbsSlider",
    dots: false,
    arrows: false,
    infinite: true,
    // centerMode: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    mobileFirst: true,
    slidesToShow: 4,
    responsive: [
      { breakpoint: 800, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 3 } },
      { breakpoint: 520, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container">
      <Slider
        {...settingsMain}
        asNavFor={thumbsSlider}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {/* {project_img.map((item, key) => (
          <img src={item} key={key} alt="" />
        ))} */}
        <img src="https://placehold.co/600x400/orange/white" alt="" />
        <img src="https://placehold.co/600x400/blue/white" alt="" />
        <img src="https://placehold.co/600x400/black/white" alt="" />
        <img src="https://placehold.co/600x400/green/white" alt="" />
      </Slider>
      <Slider
        {...settingsThumbs}
        asNavFor={mainSlider}
        ref={(slider) => (sliderRef2 = slider)}
      >
        {/* {project_img.map((item, key) => (
          <img src={item} key={key} alt="" />
        ))} */}
        <img src="https://placehold.co/600x400/orange/white" alt="" />
        <img src="https://placehold.co/600x400/blue/white" alt="" />
        <img src="https://placehold.co/600x400/black/white" alt="" />
        <img src="https://placehold.co/600x400/green/white" alt="" />
      </Slider>
    </div>
  );
};

export default ProjectImgSlider;
