import s from './Offer.module.scss';
import OfferCard from './OfferCard/OfferCard';
const Offer = () => {
  return (
  <div className={s.specialOffer}>
    <h1>SPECIAL OFFER</h1>
    <div className={s.offerWrapper}>
      <OfferCard/>
      <OfferCard/>
    </div>
  </div>
  );
};

export default Offer;
