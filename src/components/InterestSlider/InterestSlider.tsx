import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

import { Navigation } from "swiper";

import { Card } from "..";

export default function InterestSlider() {
  return (
    <>
      <h3 className="interest-h3">You may also be interested in</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={45}
        navigation={true}
        modules={[Navigation]}
        className="interestSlider"
      >
        {[...Array(10)].map((_, index) => {
          return (
            <SwiperSlide key={index} className="interestSlide">
              <Card />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
