import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

import { EffectFlip, Autoplay } from "swiper";

import DetailChair from "../../../assets/img/details/DetailsChair.png";
import DetailChairSecond from "../../../assets/img/details/DetailChairSecond.png";

export default function App() {
  return (
    <>
      <Swiper
        effect={"flip"}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectFlip, Autoplay]}
        className="imgSlider"
      >
        <SwiperSlide className="slide">
          <img src={DetailChair} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={DetailChair} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={DetailChair} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={DetailChair} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
