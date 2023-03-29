import s from "./Header.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { BsBag, BsBell } from "react-icons/bs";
import { Logo, SearchBar, NavBar } from "../../";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.welcome}>
          <span>Welcome to our online shop</span>
          <div>
            <span className={s.currency}>
              English (USD)
              <IoIosArrowDown />
            </span>
            <span>|</span>
            <a href="#">Login or Sign up</a>
          </div>
        </div>
      </div>
      <header className={s.header__main}>
        <Logo />
        <SearchBar />
        <div className={s.header__nav}>
          <span className={s.bag}>
            <BsBag />
            <div className={s.count}>4</div>
          </span>
          <span>
            <BsBell />
          </span>
          <span>
            <RxAvatar />
          </span>
        </div>
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
