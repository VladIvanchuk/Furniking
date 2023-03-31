import s from "./Slider.module.scss";

import mainPicture from "../../../assets/img/hero/Furniture 1.png";
import product1 from "../../../assets/img/hero/Rectangle.svg"
import product2 from "../../../assets/img/hero/Rectangle-1.svg"
import product3 from "../../../assets/img/hero/Rectangle-2.svg"

const Slider = () => {
  return (
    <section className={s.slider}>
      <div className={s.slider__block}>
        <div className={s.slider__description}>
          <h2 className={s.slider__subtitle}>TOP COLLECTIONS 2022</h2>
          <h1 className={s.slider__title}>We Serve Your <br/> Dream Furniture</h1>
          <h2 className={s.slider__action}>Get 50% off all products</h2>

          <button className={s.slider__btn}>Shop now</button>
        </div>

        <div className={s.slider__gallery}>
          <div className={s.slider__mark}>50%</div>

          <img
            src={mainPicture}
            alt="not found"
            className={s.slider__picture}
          />

          <div className={s.slider__products}>
            <div className={s.slider__product}>
              <img src={product1} alt="" className={s.slider__image}/>
              <p className={s.slider__price}>
                <span className={s.slider__currency}>$</span>120
              </p>
              <h3 className={s.slider__name}>
                Office Desk Chair
              </h3>
            </div>

            <div className={s.slider__product}>
              <img src={product2} alt="" className={s.slider__image}/>
              <p className={s.slider__price}>
                <span className={s.slider__currency}>$</span>250
              </p>
              <h3 className={s.slider__name}>
                Office chair
              </h3>
            </div>

            <div className={s.slider__product}>
              <img src={product3} alt="" className={s.slider__image}/>
              <p className={s.slider__price}>
                <span className={s.slider__currency}>$</span>250
              </p>
              <h3 className={s.slider__name}>
                Office chair
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
