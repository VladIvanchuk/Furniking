import { Hero, Offer } from "../../components";
import Trending from "../../components/Trending/Trending";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <Product />
      <Offer />
    </>
  );
};

export default Home;
