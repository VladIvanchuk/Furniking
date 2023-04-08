import s from "./Sort.module.scss";

const Sort = () => {
  return (
    <select name="filterByCategory" id="filterByCategory" className={s.shop__category}>
      <option value="rate">By rating</option>
      <option value="rate">By lowest price</option>
      <option value="rate">By highest price</option>
    </select>
  );
};

export default Sort;
