import { useState } from "react";
import Card from "../Card/Card";
import s from "./Trending.module.scss";

const categories = ["Top Products", "New Arrivals", "Best Sellers"];

const Trending = () => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div id="trending">
      <h1 className={s.header}>TRENDING</h1>
      <div className={s.filter}>
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
      <div className={s.wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Trending;
