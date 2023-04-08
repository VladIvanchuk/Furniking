import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ProductSlider.scss";

import DetailChair from "../../../assets/img/details/DetailsChair.png";

import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main_slider"
      >
        {[...Array(5)].map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={DetailChair} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbnail"
      >
        {[...Array(5)].map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={DetailChair} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
