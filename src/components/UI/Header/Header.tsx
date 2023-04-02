import s from "./Header.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { BsBag, BsBell } from "react-icons/bs";
import { Logo, SearchBar, NavBar } from "../../";
import Container from "../../Container/Container";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__welcome}>
        <Container>
          <div className={s.welcome}>
            <span>Welcome to our online shop</span>
            <div>
              <span className={s.currency}>
                English (USD)
                <IoIosArrowDown />
              </span>
              <span>|</span>
              <a href="/authorization">Login or Sign up</a>
            </div>
          </div>
        </Container>
      </div>
      <div className={s.sticky}>
        <Container>
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
        </Container>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
