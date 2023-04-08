import s from "./ProfileNav.module.scss"
import { NavLink, useLocation } from 'react-router-dom';

const ProfileNav = () => {
  const location = useLocation();

  return (
    <div className={s.profileNav}>
      <NavLink className={`${s.profileBtn} ${location.pathname === "/profile" && s.active}`} to="/profile">Personal info</NavLink>
      <NavLink className={`${s.profileBtn} ${location.pathname === "/orders" && s.active}`} to="/orders">My orders</NavLink>
      <NavLink className={`${s.profileBtn} ${location.pathname === "/favorites" && s.active}`} to="/favorites">Favorites</NavLink>
      <NavLink className={`${s.profileBtn} ${location.pathname === "/logout" && s.active}`} to="/logout">Log out</NavLink>
    </div>
  );
};

export default ProfileNav;