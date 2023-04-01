import s from "./OfferCard.module.scss";
import Circles from "../OfferCardCircles/OfferCardCircles";
import BuyBtn from '../../UI/BuyBtn/BuyBtn';

const OfferCard = () => {
  return (
    <div className={s.offerCard}>
      <div className={s.sales}>
      40% off
      </div>
      <div className={s.left}>
        <h2 className={s.leftTitle}>Living Room Furniture</h2>
        <p className={s.leftDesc}>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</p>
        <div className={s.leftPrice}>
          <span className={s.newPrice}>$150</span>
          <span className={s.oldPrice}>$250</span>
          <BuyBtn />
        </div>
        <div className={s.leftCircles}>
          <Circles />
          <Circles />
          <Circles />
          <Circles />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
