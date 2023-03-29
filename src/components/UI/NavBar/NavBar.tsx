import { Link } from "react-router-dom";
import s from "./NavBar.module.scss";
import { BiMenuAltLeft } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.dropdown}>
          <BiMenuAltLeft />
          <span>ALL COLLECTIONS</span>
        </div>
        <ul className={s.nav}>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/">
            <li>SHOP</li>
          </Link>
          <Link to="/">
            <li>TRENDING</li>
          </Link>
          <Link to="/">
            <li>SPECIAL OFFER</li>
          </Link>
          <Link to="/">
            <li>TESTIMONIALS</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;