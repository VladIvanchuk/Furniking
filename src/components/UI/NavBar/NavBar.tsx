import { NavLink } from "react-router-dom";
import s from "./NavBar.module.scss";
import { BiMenuAltLeft } from "react-icons/bi";
import Container from "../../Container/Container";

const menu = [
  { label: "Home", link: "/" },
  { label: "Shop", link: "/shop" },
  { label: "Trending", link: "/trending" },
  { label: "Special Offer", link: "/special-offer" },
  { label: "Testimonials", link: "/testimonials" },
];

const NavBar = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.wrapper__content}>
          <div className={s.dropdown}>
            <BiMenuAltLeft />
            <span>ALL COLLECTIONS</span>
          </div>
          <ul className={s.nav}>
            {menu.map((value: { label: string; link: string }, index: number) => (
              <NavLink className={s.link} key={index} to={value.link}>
                <li>{value.label.toUpperCase()}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
