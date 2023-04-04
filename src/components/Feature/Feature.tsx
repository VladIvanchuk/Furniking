import s from "./Feature.module.scss";
import delivery from "../../assets/img/feature/free-delivery 1.svg";
import gift from "../../assets/img/feature/Gift.svg";
import wallet from "../../assets/img/feature/wallet 1.svg";
import support from "../../assets/img/feature/support 1.svg";
import FeatureItem from "./FeatureItem";
const Feature = () => {
  return (
    <div className={s.wrapper}>
      <FeatureItem img={delivery} name="Free Shipping" dsc="Orders over $100" />
      <FeatureItem img={gift} name="Smart Gift Card" dsc="Buy $1000 to get card" />
      <FeatureItem img={wallet} name="Quick Payment" dsc="100% secure payment" />
      <FeatureItem img={support} name="24/7 Support" dsc="Quick support" />
    </div>
  );
};

export default Feature;
