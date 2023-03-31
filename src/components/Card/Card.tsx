import { Link } from "react-router-dom";
import s from "./Card.module.scss";

const Card = () => {
  return (
    <Link to="/" className={s.wrapper}>
      <div className={s.image}>
        <div className={`${s.tag} ${s.sale}`}>New</div>
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
    </Link>
  );
};

export default Card;
