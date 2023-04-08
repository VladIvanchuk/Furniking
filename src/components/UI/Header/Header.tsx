import { useState } from "react";
import s from "./Header.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Logo, SearchBar, NavBar, Cart } from "../../";
import Container from "../../Container/Container";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);

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
              <Link to="#" className={s.bag} onClick={() => setCartOpen(true)}>
                <BsBag />
                <div className={s.count}>4</div>
              </Link>
              <Link to="/favorites">
                <AiOutlineHeart />
              </Link>
              <Link to="/profile">
                <RxAvatar />
              </Link>
            </div>
          </header>
        </Container>
        <NavBar />
      </div>
      <Cart state={cartOpen} setState={setCartOpen} />
    </div>
  );
};

export default Header;
