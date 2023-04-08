import s from "./Details.module.scss";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { DetailsAbout, DetailsCharacteristics, DetailsReviews } from "../../components";

const categories = ["About", "Characteristics", "Reviews and questions"];

const Details = () => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className={s.details}>
      <div className={s.detailsHeader}>
        <div className={s.detailsHeader_top}>Minimal iconic chair</div>
        <div className={s.detailsHeader_bottom}>
          <div className={s.bottomLeft}>
            {categories.map((category, i) => (
              <button
                key={i}
                className={selected === category ? s.active : ""}
                onClick={() => setSelected(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={s.bottomRight}>
            <div className={s.rightTitle}>Users rating:</div>
            <div className={s.rightStars}>
              <span> (36)</span>
              {[...Array(5)].map((_, index) => {
                const starClass = index < 4 ? s.active : s.inactive;
                return <FaRegStar key={index} className={starClass} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {selected === categories[0] && <DetailsAbout />}
      {selected === categories[1] && <DetailsCharacteristics />}
      {selected === categories[2] && <DetailsReviews />}
    </div>
  );
};

export default Details;
