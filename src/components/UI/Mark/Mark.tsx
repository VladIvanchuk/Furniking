import s from "./Mark.module.scss";
import { FaRegStar } from "react-icons/fa";

const Mark = ({ mark }: { mark: number }) => {
  return (
    <div className={s.wrapper}>
      {[...Array(5)].map((_, index) => {
        const starClass = index < mark ? s.active : s.inactive;
        return (
          <span key={index} className={starClass}>
            <FaRegStar />
          </span>
        );
      })}
    </div>
  );
};
export default Mark;
