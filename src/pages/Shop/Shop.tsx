import s from "./Shop.module.scss";
import { Filter, Pagination, Card, Sort, FilterTags } from "../../components";

const Shop = () => {
  return (
    <main className={s.shop}>
      <h1 className={s.shop__title}>Chair</h1>
      <section className={s.shop__catalog}>
        <Filter />
        <div className={s.shop__products}>
          <div className={s.shop__top}>
            <div>
              Results (202):
              <FilterTags />
            </div>
            <Sort />
          </div>
          <div className={s.shop__cards}>
            {[...Array(9)].map((_, i) => {
              return <Card key={i} />;
            })}
          </div>
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default Shop;
