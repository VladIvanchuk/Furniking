import s from "./Logo.module.scss";

import logo from "../../../assets/img/logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      <img src={logo} alt="logo" />
      <span className={s.logo__name}>Furniking</span>
    </Link>
  );
};

export default Logo;
