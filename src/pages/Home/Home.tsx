import {
  Hero,
  Offer,
  Testimonials,
  Trending,
  Product,
  Feature,
  OfferTiles,
} from "../../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <OfferTiles />
      <Trending />
      <Offer />
      <Product />
      <Testimonials />
    </>
  );
};

export default Home;
