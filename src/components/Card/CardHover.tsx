import { useState } from "react";
import s from "./Card.module.scss";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";

const CardHover = () => {
  const [activeIcons, setActiveIcons] = useState<string[]>([]);

  const handleIconClick = (iconName: string) => {
    if (activeIcons.includes(iconName)) {
      setActiveIcons(activeIcons.filter((name) => name !== iconName));
    } else {
      setActiveIcons([...activeIcons, iconName]);
    }
  };

  return (
    <div className={s.hover}>
      <div
        className={`${s.icon} ${activeIcons.includes("heart") ? s.active : ""}`}
        onClick={() => handleIconClick("heart")}
      >
        <AiOutlineHeart />
      </div>
      <div
        className={`${s.icon} ${activeIcons.includes("bag") ? s.active : ""}`}
        onClick={() => handleIconClick("bag")}
      >
        <BsBagPlus />
      </div>
      <div
        className={`${s.icon} ${activeIcons.includes("refresh") ? s.active : ""}`}
        onClick={() => handleIconClick("refresh")}
      >
        <HiOutlineRefresh />
      </div>
      <div
        className={`${s.icon} ${activeIcons.includes("eye") ? s.active : ""}`}
        onClick={() => handleIconClick("eye")}
      >
        <AiOutlineEye />
      </div>
    </div>
  );
};

export default CardHover;
