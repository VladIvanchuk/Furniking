import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

import { Navigation } from "swiper";

import DetailChair from "../../../assets/img/details/DetailsChair.png";
import DetailChairSecond from "../../../assets/img/details/DetailChairSecond.png";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={60}
        navigation={true}
        modules={[Navigation]}
        className="interestSlider"
      >
        <SwiperSlide className="interesSlide">
          <img src={DetailChair} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="interesSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="interesSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="interesSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="interesSlide">
          <img src={DetailChair} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="interesSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="interesSlide">
          <img src={DetailChair} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="interesSlide">
          <img src={DetailChair} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="interesSlide">
          <img src={DetailChairSecond} alt="DetailChair" />
          <span className="itemType">Chair</span>
          <span className="itemName">Minimal LCD chair</span>
          <div className="itemPrice">
            <span className="newPrice">$180</span>
            <span className="oldPrice">$250</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
