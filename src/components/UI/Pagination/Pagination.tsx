import s from "./Pagination.module.scss";
import { GoChevronRight } from "react-icons/go";

const Pagination = () => {
  return (
    <div className={s.shop__pagination}>
      <button className={s.shop__page} type={"button"}>
        1
      </button>
      <button className={s.shop__page} type={"button"}>
        2
      </button>
      <button className={s.shop__page} type={"button"}>
        3
      </button>
      <span>...</span>
      <button className={s.shop__page} type={"button"}>
        25
      </button>
      <button className={s.shop__page} type="submit">
        <GoChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
