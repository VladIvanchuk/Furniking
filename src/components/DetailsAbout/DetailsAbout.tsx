import s from "./DetailsAbout.module.scss";

import { Button, InterestSlider, ProductSlider } from "../../components";
import { FaShippingFast, FaWallet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
const DetailsAbout = () => {
  return (
    <>
      <div className={s.detailsInfo}>
        <div className={s.detailsInfo_top}>
          <div className={s.topLeft}>
            <ProductSlider />
          </div>
          <div className={s.topRight}>
            <div className={s.rightSell}>
              <div className={s.sellInfo}>
                <span className={s.oldPrice}>$250</span>
                <span className={s.newPrice}>$180</span>
                <span className={s.isInStock}>Product in stock</span>
              </div>
              <div className={s.sellBtn}>
                <Button text="Add to Cart" />
                <Button text="Buy now" primary />
              </div>
            </div>
            <div className={s.sellGarantee}>
              <div className={s.like}>
                <AiOutlineHeart />
                <span>Add to favorite</span>
              </div>
              <div className={s.features}>
                <div className={s.row}>
                  <FaShippingFast />
                  <span>Free Shipping to your city.</span>
                </div>
                <div className={s.row}>
                  <FaWallet />
                  <span>
                    Payment upon receipt of goods, Cashless for legal entities and
                    individuals
                  </span>
                </div>
                <div className={s.row}>
                  <BsShieldFillCheck />
                  <span>
                    Guarantee. The Law on the Protection of Consumer Rights does not
                    provide for the return of this good quality product.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.detailsDesc}>
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et leo efficitur,
          commodo tortor sit amet, suscipit dui. Proin at mi quis mauris luctus mollis.
          Aliquam dictum quam et lectus mattis vulputate. Duis quis orci imperdiet,
          bibendum urna nec, convallis neque. Vestibulum non nisi nec leo vestibulum
          dignissim. Fusce euismod fringilla magna, ut tincidunt ex pretium eu. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
          nisi elit, cursus in fringilla dignissim, tempor sit amet dui. Mauris blandit
          dui interdum, pulvinar metus non, convallis lectus. Praesent feugiat vitae leo
          non tempus.
        </p>
      </div>
      <div className={s.detailsInteresting}>
        <InterestSlider />
      </div>
    </>
  );
};

export default DetailsAbout;
