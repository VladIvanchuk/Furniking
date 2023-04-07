import FilterTag from "./FilterTag";
import s from "./FilterTags.module.scss";

const FilterTags = () => {
  return (
    <div className={s.tags}>
      {[...Array(3)].map((_, i) => {
        return <FilterTag key={i} option="Option" />;
      })}
    </div>
  );
};

export default FilterTags;
