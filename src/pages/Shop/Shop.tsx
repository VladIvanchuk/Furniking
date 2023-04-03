import s from "./Shop.module.scss";
import {FiChevronDown} from "react-icons/fi";
import {GoChevronRight} from "react-icons/go";
import Card from "../../components/Card/Card";

const Shop = () => {
  return (
    <main className={s.shop}>
      <div className={s.shop__top}>
        <h1 className={s.shop__title}>
          Chair
        </h1>

        <select
          name="filterByCategory"
          id="filterByCategory"
          className={s.shop__category}
        >
          <option value="rate">By rating</option>
          <option value="rate">By lowest price</option>
          <option value="rate">By highest price</option>
        </select>
      </div>
      <section className={s.shop__catalog}>
        <div className={s.shop__filter}>
          <ul className={s.shop__menu}>
            <li className={s.shop__option}>
              Manufacture <FiChevronDown/>
            </li>
            <li className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
            <li  className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
            <li className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
          </ul>

          <ul className={s.shop__menu}>
            <li className={s.shop__option}>
              Width <FiChevronDown/>
            </li>
            <li className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
            <li  className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
            <li className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
          </ul>

          <ul className={s.shop__menu}>
            <li className={s.shop__option}>
              Height <FiChevronDown/>
            </li>
            <li className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
            <li  className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
            <li className={s.shop__item}>
              <input className={s.shop__input} type="checkbox"/>
              Someone
            </li>
          </ul>
        </div>
        <div className={s.shop__products}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className={s.shop__pagination}>
            <button className={s.shop__page} type={"button"}>1</button>
            <button className={s.shop__page} type={"button"}>2</button>
            <button className={s.shop__page} type={"button"}>3</button>
            <span>...</span>
            <button className={s.shop__page} type={"button"}>25</button>
            <button className={s.shop__page} type="submit"><GoChevronRight/></button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
