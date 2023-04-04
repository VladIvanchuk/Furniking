import s from "./FilterTags.module.scss";

const FilterTag = ({ option }: { option: string }) => {
  return <div className={s.tag}>{option}</div>;
};

export default FilterTag;
