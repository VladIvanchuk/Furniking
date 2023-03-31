import s from "./Hero.module.scss";
import Slider from "../UI/Slider/Slider";

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
            <button type={"button"} className={s.hero__category}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      <Slider />
    </section>
  );
};

export default Hero;
