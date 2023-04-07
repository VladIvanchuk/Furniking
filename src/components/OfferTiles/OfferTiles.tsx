import { Link } from "react-router-dom";
import s from "./OfferTiles.module.scss";

const OfferTiles = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.furniture}>
        <div className={s.content}>
          <h3>Modern Furniture Collections</h3>
          <span>Starting from $500</span>
          <Link to="/">Read more &#8594;</Link>
        </div>
      </div>
      <div className={s.small_tiles}>
        <div className={s.bookcase}>
          <div className={s.content}>
            <h3>Geometric Bookcase</h3>
            <span>Up to 20% discount</span>
            <Link to="/">Read more &#8594;</Link>
          </div>
        </div>
        <div className={s.sofa}>
          <div className={s.content}>
            <h3>Minimal Sofa collections </h3>
            <span>Sale upto 40% discount</span>
            <Link to="/">Read more &#8594;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferTiles;
