import s from "./SearchBar.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className={s.search_wrapper}>
      <input type="text" placeholder="Search here" />
      <div className={s.dropdown}>
        Categories <IoIosArrowDown />
      </div>
      <div className={s.search__button}>
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default SearchBar;
