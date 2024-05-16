import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useQueryData from "../../../custom-hook/useQueryData";
import { baseImgUrl } from "../../../helpers/functions-general";
import ImageModal from "../../../partials/modals/ModalImage";
import { Link } from "react-router-dom";

const ProjectImgSlider = ({ project_aid }) => {
  const {
    isLoading,
    isFetching,
    error,
    data: projImg,
  } = useQueryData(
    "/v1/projects/img", // endpoint
    "get", // method
    "projects/img"
  );

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbsSlider, setThumbsSlider] = useState(null);

  // useEffect(() => {
  //   setMainSlider(sliderRef1);
  //   setThumbsSlider(sliderRef2);
  // }, []);

  const settingsMain = {
    className: "mainSlider",
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    touchThreshold: 300,
    swipe: true,
    sipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    focusOnSelect: true,
  };
  const settingsThumbs = {
    className: "thumbsSlider",
    dots: false,
    arrows: false,
    infinite: true,
    // centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    touchThreshold: 300,
    swipe: true,
    sipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    mobileFirst: true,
    variableWidth: true,
    responsive: [
      { breakpoint: 800, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 3 } },
      { breakpoint: 520, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container">
      {projImg?.length !== 0 &&
        (isLoading ? (
          <li className="tooltip-bottom" data-tooltip="LOADING">
            LOADING ICONS
          </li>
        ) : (
          <>
            <Slider
              {...settingsMain}
              asNavFor={thumbsSlider}
              ref={(slider) => setMainSlider(slider)}
            >
              {projImg?.data.map((item, key) =>
                item.project_id === project_aid &&
                item.project_img_is_active === 1 ? (
                  <Link
                    to={`${baseImgUrl}/${item.project_img}`}
                    target="_blank"
                  >
                    <img
                      src={`${baseImgUrl}/${item.project_img}`}
                      key={key}
                      alt=""
                    />
                  </Link>
                ) : null
              )}
            </Slider>
            <Slider
              {...settingsThumbs}
              asNavFor={mainSlider}
              ref={(slider) => setThumbsSlider(slider)}
            >
              {projImg?.data.map((item, key) =>
                item.project_id === project_aid &&
                item.project_img_is_active === 1 ? (
                  <img
                    src={`${baseImgUrl}/${item.project_img}`}
                    key={key}
                    alt=""
                  />
                ) : null
              )}
            </Slider>
          </>
        ))}
      {projImg?.length !== 0 &&
        !projImg?.data.some((item) => item.project_id === project_aid) && (
          <>
            <Slider
              {...settingsMain}
              asNavFor={thumbsSlider}
              ref={(slider) => setMainSlider(slider)}
            >
              <h2>No Images Available At the Moment</h2>
            </Slider>
            <Slider
              {...settingsThumbs}
              asNavFor={mainSlider}
              ref={(slider) => setThumbsSlider(slider)}
            >
              <h2></h2>
            </Slider>
          </>
        )}
    </div>
  );
};

export default ProjectImgSlider;
