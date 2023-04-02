import s from "./Product.module.scss";
import Card from "../Card/Card";
import {useState} from "react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {BsArrowRight} from "react-icons/bs";

const categories = ["All Products", "Best Sellers", "New Arrivals", "Todays Deals"];

const Product = () => {
  const [selected, setSelected] = useState(categories[0]);
  const [selectedPage, setSelectedPage] = useState("1");

  const backPage = () => {
    let page = +selectedPage;
    page !== 0 ? setSelectedPage(page -= 1) : setSelectedPage(page);
  }

  const nextPage = () => {
    let page = +selectedPage;
    setSelectedPage(page += 1);
  }

  return (
    <section className={s.product}>
      <h1 className={s.product__header}>OUR PRODUCTS</h1>
      <div className={s.product__filter}>
        {categories.map((category, i) => (
          <button
            key={i}
            className={selected === category ? s.product__active : ""}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <section className={s.product__wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <div className={s.product__bottom}>
        <nav className={s.product__pagination}>
          <button className={s.product__next} onClick={nextPage}>
            Next page <BsArrowRight />
          </button>

          <div className={s.product__pages}>
          <span>Page</span>

          <input
            type="text"
            className={s.product__page}
            value={selectedPage}
            onChange={(e) => (
            setSelectedPage(e.target.value)
            )}
          />

          <span>of 100</span>

          <div className={s.product__btns}>
            <button className={s.product__btn} onClick={backPage}>
              <BiChevronLeft />
            </button>

            <button className={s.product__btn} onClick={nextPage}>
              <BiChevronRight />
            </button>
          </div>
        </div>
        </nav>
      </div>
    </section>
  );
};

export default Product;
