import s from './OfferCardCircles.module.scss';
const OfferCardCircles = () => {
  return (
  <div className={s.OfferCardCircles}>
    <div className={s.circlesNum}>10</div>
    <div className={s.circlesDesc}>Days</div>
  </div>
  );
};

export default OfferCardCircles;
