import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

import { Autoplay } from "swiper";

import DetailChair from "../../../assets/img/details/DetailsChair.png";
import DetailChairSecond from "../../../assets/img/details/DetailChairSecond.png";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={5}
        spaceBetween={15}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        className="vericalSlider"
      >
        <SwiperSlide className="vertSlide">
          <img src={DetailChair} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="vertSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="vertSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="vertSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="vertSlide">
          <img src={DetailChair} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="vertSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="vertSlide">
          <img src={DetailChair} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="vertSlide">
          <img src={DetailChair} alt="DetailChair" />
        </SwiperSlide>
        <SwiperSlide className="vertSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
