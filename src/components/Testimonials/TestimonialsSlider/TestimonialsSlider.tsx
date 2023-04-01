import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

import { EffectFlip, Navigation } from "swiper";

import profileImg from "../../../assets/img/profileImg/profileImg.png";

export default function App() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="profileImg">
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="desc">
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </div>
          <div className="userName">Angelina Joly</div>
          <div className="userProffecian">Co-founder</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="profileImg">
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="desc">
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </div>
          <div className="userName">Angelina Joly</div>
          <div className="userProffecian">Co-founder</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="profileImg">
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="desc">
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </div>
          <div className="userName">Angelina Joly</div>
          <div className="userProffecian">Co-founder</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="profileImg">
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="desc">
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </div>
          <div className="userName">Angelina Joly</div>
          <div className="userProffecian">Co-founder</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}