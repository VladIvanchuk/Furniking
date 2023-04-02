import s from "./Card.module.scss";
import { Link } from "react-router-dom";
import CardHover from "./CardHover";
import CardTag from "./CardTag/CardTag";

const Card = () => {
  return (
    <Link to="/" className={s.wrapper}>
      <div className={s.image}>
        <CardTag type="New" />
        <img src="" alt="" />
      </div>
      <div className={s.category}>{"Chair"}</div>
      <span className={s.name}>{"Minimal LCD chair"}</span>
      <div className={s.bottom}>
        <div>
          <span className={s.price}>${180}</span>
          <span className={s.discount}>${250}</span>
        </div>
        <div className={s.rate}></div>
      </div>
      <CardHover />
    </Link>
  );
};

export default Card;
