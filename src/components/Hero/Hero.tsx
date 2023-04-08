import s from "./Hero.module.scss";
import Slider from "../UI/Slider/Slider";
import { Link } from "react-router-dom";

const allCollection: Array<string> = [
  "All",
  "New arrivals",
  "Hot Sale",
  "Furniture",
  "Amrature",
  "Tabble",
  "Chair",
  "Mirrors",
  "Sofa",
];
const Hero = () => {
  return (
    <section className={s.hero}>
      <ul className={s.hero__collection}>
        {allCollection.map((category: string, id: number) => (
          <li key={id} className={s.hero__option}>
            <Link to="" className={s.hero__category}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <Slider />
    </section>
  );
};

export default Hero;
